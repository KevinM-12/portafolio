import './Perfil.css';

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

const IconUser = (p) => (
  <Base {...p}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </Base>
);

const IconGradCap = (p) => (
  <Base {...p}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </Base>
);


// Estudios (edítalos aquí sin tocar el JSX)
const educacion = [
  { titulo: 'Programación y Sistemas', institucion: 'SENATI', estado: 'En curso' },
  {
    titulo: 'Fullstack Developer Software - Seminario',
    institucion: 'SENATI',
    estado: 'En curso',
  },
];

// Tecnologías mencionadas en tu perfil
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React'];

const Perfil = () => {
  return (
    <section id="sobre-mi" className="section sobre-mi-section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">01 · Perfil</span>
          <h2 className="section-title">Sobre mí</h2>
        </div>

        <div className="sobre-mi-grid">
          {/* TARJETA 1: PERFIL PROFESIONAL */}
          <article className="perfil-card reveal">
            <div className="card-header">
              <div className="icon-box">
                <IconUser size={24} />
              </div>
              <h3>Perfil profesional</h3>
            </div>

            <div className="card-text">
              <p>
                Soy Kevin Jesús Muños Vadivia, estudiante de Programación y
                Sistemas en SENATI, con interés en el desarrollo web y de
                software.
              </p>
              <p>
                Trabajo con tecnologías como HTML, CSS, JavaScript y React para
                construir interfaces modernas y responsivas a partir de
                componentes reutilizables.
              </p>
              <p>
                Me gusta aprender, aplicar buenas prácticas y desarrollar
                soluciones web que resuelvan necesidades reales.
              </p>
            </div>

            <ul className="perfil-tags" aria-label="Tecnologías">
              {tecnologias.map((tec) => (
                <li key={tec}>{tec}</li>
              ))}
            </ul>
          </article>

          {/* TARJETA 2: EDUCACIÓN */}
          <article className="perfil-card reveal" style={{ '--d': '120ms' }}>
            <div className="card-header">
              <div className="icon-box">
                <IconGradCap size={24} />
              </div>
              <h3>Educación</h3>
            </div>

            <div className="timeline">
              {educacion.map((item) => (
                <div key={item.titulo} className="timeline-item">
                  <div className="timeline-header">
                    <h4>{item.titulo}</h4>
                    <span className="badge-estado">{item.estado}</span>
                  </div>
                  <span className="timeline-date">{item.institucion}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Perfil;