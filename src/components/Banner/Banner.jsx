import './Banner.css';
import miFoto from '../../assets/miFoto.png';

// Iconos (SVG en línea)
const Base = ({ size = 20, children, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    {children}
  </svg>
);

const IconArrowRight = (p) => (
  <Base {...p}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </Base>
);

const IconArrowDown = (p) => (
  <Base {...p}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <polyline points="19 12 12 19 5 12" />
  </Base>
);

const IconGithub = (p) => (
  <Base {...p}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </Base>
);

const IconLinkedin = (p) => (
  <Base {...p}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </Base>
);


// Redes sociales (enlaces tomados de tus proyectos y de la sección Contacto)
const redes = [
  { nombre: 'GitHub', url: 'https://github.com/KevinM-12', Icono: IconGithub },
  {
    nombre: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kmv1507',
    Icono: IconLinkedin,
  },
];

// Tecnologías destacadas bajo los botones
const tecnologias = ['React', 'JavaScript', 'PHP', 'MySQL', 'WordPress'];

const Banner = () => {
  return (
    <section id="inicio" className="hero-banner">
      {/* Fondo decorativo: cuadrícula + resplandores */}
      <div className="hero-bg" aria-hidden="true"></div>

      <div className="hero-inner">
        {/* ---------- Columna de texto ---------- */}
        <div className="hero-content">
          <div className="status-badge reveal">
            <span className="status-dot"></span>
            Disponible para nuevos proyectos
          </div>

          <h1 className="hero-title reveal" style={{ '--d': '80ms' }}>
            Kevin Jesús
            <span className="text-gradient">Muños Vadivia</span>
          </h1>

          <h2 className="hero-subtitle reveal" style={{ '--d': '160ms' }}>
            <span className="role-main">Desarrollador Web</span>
            <span className="role-sep" aria-hidden="true">
              /
            </span>
            <span className="role-sub">
              Estudiante de Programación y Sistemas - SENATI
            </span>
          </h2>

          <p className="hero-description reveal" style={{ '--d': '240ms' }}>
            Desarrollo aplicaciones web funcionales para resolver necesidades
            reales, combinando buenas prácticas de código, diseño responsive y
            soluciones modernas con React.
          </p>

          <div className="hero-buttons reveal" style={{ '--d': '320ms' }}>
            <a href="#proyectos" className="btn btn-primary">
              Ver proyectos
              <IconArrowRight size={18} />
            </a>
            <a href="#contacto" className="btn btn-ghost">
              Contáctame
            </a>
          </div>

          <div className="hero-extras reveal" style={{ '--d': '400ms' }}>
            <div className="hero-socials">
              {redes.map(({ nombre, url, Icono }) => (
                <a
                  key={nombre}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label={nombre}
                  title={nombre}
                >
                  <Icono size={20} />
                </a>
              ))}
            </div>

            <ul className="hero-tech" aria-label="Tecnologías">
              {tecnologias.map((tec) => (
                <li key={tec}>{tec}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* ---------- Columna visual ---------- */}
        <div className="hero-visual reveal" style={{ '--d': '200ms' }}>
          <div className="photo-wrap">
            <div className="photo-ring" aria-hidden="true"></div>
            <img
              src={miFoto}
              alt="Foto de perfil de Kevin Jesús Muños Vadivia"
              className="profile-photo"
              width="900"
              height="900"
            />
          </div>

          {/* Etiquetas flotantes decorativas */}
          <span className="float-chip chip-1" aria-hidden="true">
            <i></i>React
          </span>
          <span className="float-chip chip-2" aria-hidden="true">
            <i></i>WordPress
          </span>
          <span className="float-chip chip-3" aria-hidden="true">
            <i></i>PHP + MySQL
          </span>
        </div>
      </div>

      {/* Indicador de scroll */}
      <a href="#sobre-mi" className="scroll-indicator" aria-label="Ir a Perfil">
        <IconArrowDown size={22} />
      </a>
    </section>
  );
};

export default Banner;