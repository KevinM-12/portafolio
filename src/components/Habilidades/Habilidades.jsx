
import './Habilidades.css';

const skillsData = [
  {
    id: 1,
    titulo: 'Python Essentials 1',
    descripcion:
      'Fundamentos de programación, variables, estructuras de control, funciones y lógica de programación con Python.',
    nivel: 'Cisco Networking Academy',
    botonTexto: 'CERTIFICADO',
    estado: 'green',
  },
  {
    id: 2,
    titulo: 'Introducción a la Ciencia de Datos',
    descripcion:
      'Conceptos fundamentales de ciencia de datos y su aplicación en el análisis y la comprensión de información.',
    nivel: 'Cisco Networking Academy',
    botonTexto: 'CERTIFICADO',
    estado: 'green',
  },
  {
    id: 3,
    titulo: 'Introducción a la Ciberseguridad',
    descripcion:
      'Fundamentos de seguridad digital, amenazas informáticas y protección de sistemas e información.',
    nivel: 'Cisco Networking Academy',
    botonTexto: 'CERTIFICADO',
    estado: 'green',
  },
  {
    id: 4,
    titulo: 'Conceptos básicos de redes',
    descripcion:
      'Fundamentos de redes, conectividad y comunicación entre dispositivos.',
    nivel: 'Cisco Networking Academy',
    botonTexto: 'CERTIFICADO',
    estado: 'green',
  },
  {
    id: 5,
    titulo: 'Red Hat System Administration',
    descripcion:
      'Formación en administración de sistemas Linux y herramientas de gestión del sistema.',
    nivel: 'Credencial disponible en Credly',
    botonTexto: 'CERTIFICADO',
    estado: 'green',
  },
  {
    id: 6,
    titulo: 'WordPress y Bricks Builder',
    descripcion:
      'Construcción y personalización de sitios web, diseño responsive, configuración de componentes y ajustes visuales.',
    nivel: 'Experiencia práctica',
    botonTexto: 'EXPERIENCIA',
    estado: 'cyan',
  },
  {
    id: 7,
    titulo: 'PHP y MySQL',
    descripcion:
      'Desarrollo backend, procesamiento de formularios, consultas SQL y conexión con bases de datos.',
    nivel: 'Experiencia práctica',
    botonTexto: 'EXPERIENCIA',
    estado: 'cyan',
  },
];

const Habilidades = () => {
  return (
    <section id="tech-stack" className="habilidades-section">
      <div className="habilidades-container">
        <div className="habilidades-grid">
          {skillsData.map((skill) => (
            <article key={skill.id} className="skill-card">
              <div className="skill-header">
                <div className="skill-icon" aria-hidden="true">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                </div>

                <span
                  className={`skill-badge badge-${skill.estado}`}
                >
                  {skill.botonTexto}
                </span>
              </div>

              <div className="skill-body">
                <h3 className="skill-title">{skill.titulo}</h3>

                <p className="skill-desc">
                  {skill.descripcion}
                </p>

                <span className="skill-level">
                  {skill.nivel}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
