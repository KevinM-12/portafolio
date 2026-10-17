
import './Proyectos.css';

const proyectosData = [
  {
    id: 1,
    imagen:
      './src/assets/Portafolio.png',
    titulo: 'Portafolio Personal',
    descripcion:
      'Sitio web personal desarrollado con React y Vite para presentar mi perfil, habilidades técnicas, certificaciones y proyectos.',
    tecnologias: ['React', 'Vite', 'JavaScript', 'HTML5', 'CSS3'],
    linkDemo: 'https://portafolio-eta-six-11.vercel.app/',
    linkCodigo: 'https://github.com/KevinM-12/portafolio',
  },
  {
    id: 2,
    imagen: './src/assets/Tinkercat.png',
    titulo: 'Proyecto con Arduino',
    descripcion:
      'Proyecto académico de electrónica y programación con Arduino, integrando componentes físicos para implementar un sistema interactivo.',
    tecnologias: ['Arduino', 'C/C++', 'Electrónica', 'Sensores'],
    linkDemo: 'https://www.tinkercad.com/things/6doyxgw3zOK-mighty-lappi?sharecode=kOAR6LXo4Dl0_-gdQPUIg6c7Kgxi4pjbX2MNSLjZNCk',
    linkCodigo: 'https://www.tinkercad.com/things/6doyxgw3zOK-mighty-lappi?sharecode=kOAR6LXo4Dl0_-gdQPUIg6c7Kgxi4pjbX2MNSLjZNCk',
  },
  {
    id: 3,
    imagen:
      './src/assets/Arduino.png',
    titulo: 'Detector de Movimiento Físico',
    descripcion:
      'Sistema físico basado en Arduino y un sensor PIR para detectar movimiento y activar indicadores LED y una alarma sonora mediante un buzzer.',
    tecnologias: ['Arduino UNO', 'Sensor PIR', 'LEDs', 'Buzzer'],
    linkDemo: '',
    linkCodigo: 'https://www.tinkercad.com/things/6doyxgw3zOK-mighty-lappi?sharecode=kOAR6LXo4Dl0_-gdQPUIg6c7Kgxi4pjbX2MNSLjZNCk',
  },
  {
    id: 4,
    imagen:
      'https://placehold.co/600x400/111a2e/00d8ff?text=Detector+Facial',
    titulo: 'Detector Facial',
    descripcion:
      'Proyecto de visión por computadora orientado a la detección de rostros mediante procesamiento de imágenes.',
    tecnologias: ['Python', 'OpenCV', 'Visión por computadora'],
    linkDemo: '',
    linkCodigo: 'PEGA_AQUI_TU_ENLACE_GITHUB',
  },
];

const Proyectos = () => {
  return (
    <section id="proyectos" className="proyectos-section">
      <div className="proyectos-container">
        <h2 className="section-title text-center">
          Proyectos Destacados
        </h2>

        <div className="proyectos-grid">
          {proyectosData.map((proyecto) => (
            <article key={proyecto.id} className="proyecto-card">
              <div className="proyecto-imagen">
                <img
                  src={proyecto.imagen}
                  alt={`Captura de ${proyecto.titulo}`}
                  loading="lazy"
                />
              </div>

              <div className="proyecto-contenido">
                <h3 className="proyecto-titulo">
                  {proyecto.titulo}
                </h3>

                <p className="proyecto-desc">
                  {proyecto.descripcion}
                </p>

                <div className="proyecto-tags">
                  {proyecto.tecnologias.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="proyecto-links">
                  {proyecto.linkDemo &&
                    proyecto.linkDemo !== '#' && (
                      <a
                        href={proyecto.linkDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-proyecto btn-demo"
                      >
                        Demo en Vivo
                      </a>
                    )}

                  {proyecto.linkCodigo &&
                    proyecto.linkCodigo !== '#' &&
                    !proyecto.linkCodigo.includes(
                      'PEGA_AQUI'
                    ) && (
                      <a
                        href={proyecto.linkCodigo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-proyecto btn-codigo"
                      >
                        Ver Código
                      </a>
                    )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
