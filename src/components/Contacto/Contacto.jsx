import { useState } from 'react';
import './Contacto.css';

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

const IconMail = (p) => (
  <Base {...p}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </Base>
);

const IconPhone = (p) => (
  <Base {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </Base>
);

const IconLinkedin = (p) => (
  <Base {...p}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </Base>
);

const IconMapPin = (p) => (
  <Base {...p}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </Base>
);

const IconSend = (p) => (
  <Base {...p}>
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </Base>
);

const IconCheck = (p) => (
  <Base {...p}>
    <polyline points="20 6 9 17 4 12" />
  </Base>
);


const EMAIL = 'kmunosvaldivia@gmail.com';

// Datos de contacto (edítalos aquí). Si "href" es null, se muestra como texto.
const datosContacto = [
  { Icono: IconMail, etiqueta: 'Email', texto: EMAIL, href: `mailto:${EMAIL}` },
  {
    Icono: IconPhone,
    etiqueta: 'Teléfono',
    texto: '+51 987 261 858',
    href: 'tel:+51987261858',
  },
  {
    Icono: IconLinkedin,
    etiqueta: 'LinkedIn',
    texto: 'Ver mi perfil',
    href: 'https://www.linkedin.com/in/kmv1507',
    externo: true,
  },
  { Icono: IconMapPin, etiqueta: 'Ubicación', texto: 'Perú', href: null },
];

const vacio = { nombre: '', email: '', mensaje: '' };

const Contacto = () => {
  // Estado centralizado para el formulario (formulario controlado)
  const [formulario, setFormulario] = useState(vacio);
  const [enviado, setEnviado] = useState(false);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
    if (enviado) setEnviado(false);
  };

  // Abre el correo del visitante con el mensaje ya redactado.
  // (No hay servidor: si más adelante quieres envío directo, usa Formspree o EmailJS.)
  const manejarEnvio = (e) => {
    e.preventDefault();

    const asunto = `Contacto desde tu portafolio - ${formulario.nombre}`;
    const cuerpo = `Nombre: ${formulario.nombre}\nEmail: ${formulario.email}\n\n${formulario.mensaje}`;

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      asunto
    )}&body=${encodeURIComponent(cuerpo)}`;

    setEnviado(true);
  };

  return (
    <section id="contacto" className="section contacto-section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">04 · Contacto</span>
          <h2 className="section-title">
            Trabajemos <span className="text-gradient">juntos</span>
          </h2>
        </div>

        <div className="contacto-grid">
          {/* COLUMNA IZQUIERDA: INFORMACIÓN */}
          <div className="contacto-info reveal">
            <h3 className="info-title">Ponte en contacto</h3>
            <p className="info-desc">
              ¿Tienes un proyecto en mente o necesitas ayuda para desarrollar tu
              sitio web? Me encantaría escucharte.
            </p>

            <div className="info-items">
              {datosContacto.map(({ Icono, etiqueta, texto, href, externo }) => (
                <div key={etiqueta} className="info-item">
                  <div className="info-icon">
                    <Icono size={20} />
                  </div>
                  <div>
                    <span className="item-label">{etiqueta}</span>
                    {href ? (
                      <a
                        href={href}
                        className="item-text item-link"
                        {...(externo
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                      >
                        {texto}
                      </a>
                    ) : (
                      <p className="item-text">{texto}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* COLUMNA DERECHA: FORMULARIO */}
          <div className="contacto-form-wrapper reveal" style={{ '--d': '120ms' }}>
            <form onSubmit={manejarEnvio} className="contacto-form">
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formulario.nombre}
                  onChange={manejarCambio}
                  placeholder="Tu nombre"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formulario.email}
                  onChange={manejarCambio}
                  placeholder="example@email.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formulario.mensaje}
                  onChange={manejarCambio}
                  placeholder="Cuéntame sobre tu proyecto..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-submit">
                Enviar mensaje
                <IconSend size={17} />
              </button>

              {enviado && (
                <p className="form-status" role="status">
                  <IconCheck size={18} />
                  <span>
                    Se abrió tu app de correo con el mensaje listo. Si no
                    apareció, escríbeme a <strong>{EMAIL}</strong>.
                  </span>
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;