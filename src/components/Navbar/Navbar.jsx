import { useEffect, useState } from 'react';
import './Navbar.css';

const enlaces = [
  { id: 'sobre-mi', texto: 'Perfil' },
  { id: 'tech-stack', texto: 'Habilidades' },
  { id: 'proyectos', texto: 'Proyectos' },
];

const Navbar = () => {
  // Menú hamburguesa (móvil)
  const [isOpen, setIsOpen] = useState(false);
  // Sección que se está viendo (para resaltar su enlace)
  const [activa, setActiva] = useState('');
  // Para reforzar el fondo del navbar cuando se hace scroll
  const [conScroll, setConScroll] = useState(false);

  // Detectar scroll
  useEffect(() => {
    const alScroll = () => setConScroll(window.scrollY > 12);
    alScroll();
    window.addEventListener('scroll', alScroll, { passive: true });
    return () => window.removeEventListener('scroll', alScroll);
  }, []);

  // Detectar qué sección cruza el centro de la pantalla
  useEffect(() => {
    const ids = [...enlaces.map((e) => e.id), 'contacto'];
    const secciones = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) setActiva(entrada.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    secciones.forEach((s) => observador.observe(s));
    return () => observador.disconnect();
  }, []);

  // Cerrar el menú móvil con la tecla Escape
  useEffect(() => {
    if (!isOpen) return;
    const alTeclear = (e) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', alTeclear);
    return () => window.removeEventListener('keydown', alTeclear);
  }, [isOpen]);

  const cerrar = () => setIsOpen(false);

  return (
    <header className={`navbar ${conScroll || isOpen ? 'scrolled' : ''}`}>
      <nav className="navbar-inner" aria-label="Navegación principal">
        {/* Logo */}
        <a href="#inicio" className="navbar-logo" onClick={cerrar}>
          <span className="logo-mark">KM</span>
          <span className="logo-text">
            Kevin <strong>Muños</strong>
          </span>
        </a>

        {/* Enlaces */}
        <div id="menu-principal" className={`navbar-links ${isOpen ? 'open' : ''}`}>
          {enlaces.map((enlace) => (
            <a
              key={enlace.id}
              href={`#${enlace.id}`}
              className={activa === enlace.id ? 'active' : ''}
              onClick={cerrar}
            >
              {enlace.texto}
            </a>
          ))}
          <a href="#contacto" className="navbar-cta" onClick={cerrar}>
            Contacto
          </a>
        </div>

        {/* Botón hamburguesa (solo móvil) */}
        <button
          type="button"
          className={`navbar-toggle ${isOpen ? 'is-open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          aria-controls="menu-principal"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;