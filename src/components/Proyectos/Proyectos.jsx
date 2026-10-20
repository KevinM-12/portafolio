import './Proyectos.css';
// Las imágenes se IMPORTAN (en vez de usar rutas './src/assets/...') para que
// Vite las incluya en el build y funcionen también en Vercel.
import portafolioImg from '../../assets/Portafolio.png';
import tinkercadImg from '../../assets/Tinkercat.png';
import arduinoImg from '../../assets/Arduino.png';

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

const IconExternal = (p) => (
  <Base {...p}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </Base>
);

const IconGithub = (p) => (
  <Base {...p}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </Base>
);

const IconCode = (p) => (
  <Base {...p}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </Base>
);


/* ==========================================================
   PROYECTOS
   - imagen: importada arriba. Si es null se muestra un diseño de relleno.
   - linkDemo / linkCodigo: déjalos vacíos ('') si no existen; el botón no se muestra.
   - labelDemo / labelCodigo: texto opcional del botón.
   - Si linkDemo y linkCodigo son el mismo enlace, solo se muestra un botón.
   ========================================================== */
const proyectosData = [
  {
    id: 1,
    imagen: portafolioImg,
    titulo: 'Portafolio Personal',
    descripcion:
      'Sitio web personal desarrollado con React y Vite para presentar mi perfil, habilidades técnicas, certificaciones y proyectos.',
    tecnologias: ['React', 'Vite', 'JavaScript', 'HTML5', 'CSS3'],
    linkDemo: 'https://portafolio-eta-six-11.vercel.app/',
    linkCodigo: 'https://github.com/KevinM-12/portafolio',
  },
  {
    id: 2,
    imagen: tinkercadImg,
    titulo: 'Proyecto con Arduino',
    descripcion:
      'Proyecto académico de electrónica y programación con Arduino, integrando componentes físicos para implementar un sistema interactivo.',
    tecnologias: ['Arduino', 'C/C++', 'Electrónica', 'Sensores'],
    linkDemo:
      'https://www.tinkercad.com/things/6doyxgw3zOK-mighty-lappi?sharecode=kOAR6LXo4Dl0_-gdQPUIg6c7Kgxi4pjbX2MNSLjZNCk',
    linkCodigo:
      'https://www.tinkercad.com/things/6doyxgw3zOK-mighty-lappi?sharecode=kOAR6LXo4Dl0_-gdQPUIg6c7Kgxi4pjbX2MNSLjZNCk',
    labelDemo: 'Ver en Tinkercad',
  },
  {
    id: 3,
    imagen: arduinoImg,
    titulo: 'Detector de Movimiento Físico',
    descripcion:
      'Sistema físico basado en Arduino y un sensor PIR para detectar movimiento y activar indicadores LED y una alarma sonora mediante un buzzer.',
    tecnologias: ['Arduino UNO', 'Sensor PIR', 'LEDs', 'Buzzer'],
    linkDemo: '',
    linkCodigo:
      'https://www.tinkercad.com/things/6doyxgw3zOK-mighty-lappi?sharecode=kOAR6LXo4Dl0_-gdQPUIg6c7Kgxi4pjbX2MNSLjZNCk',
    labelCodigo: 'Ver en Tinkercad',
  },
  {
    id: 4,
    imagen: null,
    titulo: 'Detector Facial',
    descripcion:
      'Proyecto de visión por computadora orientado a la detección de rostros mediante procesamiento de imágenes.',
    tecnologias: ['Python', 'OpenCV', 'Visión por computadora'],
    linkDemo: '',
    linkCodigo: 'PEGA_AQUI_TU_ENLACE_GITHUB',
  },
];

// Un enlace es válido si no está vacío, no es "#" y no es un marcador de posición
const esEnlaceValido = (url) =>
  Boolean(url) && url !== '#' && !url.includes('PEGA_AQUI');

// Construye la lista de botones de un proyecto (sin duplicados)
const construirAcciones = (proyecto) => {
  const demo = esEnlaceValido(proyecto.linkDemo) ? proyecto.linkDemo : null;
  const codigo = esEnlaceValido(proyecto.linkCodigo) ? proyecto.linkCodigo : null;
  const acciones = [];

  if (demo) {
    acciones.push({
      href: demo,
      texto: proyecto.labelDemo ?? 'Demo en vivo',
      estilo: 'btn-demo',
      Icono: IconExternal,
    });
  }

  if (codigo && codigo !== demo) {
    acciones.push({
      href: codigo,
      texto: proyecto.labelCodigo ?? 'Ver código',
      estilo: 'btn-codigo',
      Icono: codigo.includes('github.com') ? IconGithub : IconExternal,
    });
  }

  return acciones;
};

const Proyectos = () => {
  return (
    <section id="proyectos" className="section proyectos-section">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">03 · Proyectos</span>
          <h2 className="section-title">Proyectos destacados</h2>
          <p className="section-lead">
            Una selección de trabajos web y de electrónica con los que he
            practicado y aprendido.
          </p>
        </div>

        <div className="proyectos-grid">
          {proyectosData.map((proyecto, i) => {
            const acciones = construirAcciones(proyecto);

            return (
              <article
                key={proyecto.id}
                className="proyecto-card reveal"
                style={{ '--d': `${(i % 2) * 110}ms` }}
              >
                <div className="proyecto-imagen">
                  {proyecto.imagen ? (
                    <img
                      src={proyecto.imagen}
                      alt={`Captura de ${proyecto.titulo}`}
                      loading="lazy"
                    />
                  ) : (
                    <div className="proyecto-placeholder" aria-hidden="true">
                      <IconCode size={44} />
                      <span>{proyecto.titulo}</span>
                    </div>
                  )}
                  <span className="proyecto-num">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="proyecto-contenido">
                  <h3 className="proyecto-titulo">{proyecto.titulo}</h3>

                  <p className="proyecto-desc">{proyecto.descripcion}</p>

                  <ul className="proyecto-tags" aria-label="Tecnologías">
                    {proyecto.tecnologias.map((tech) => (
                      <li key={tech} className="tech-tag">
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {acciones.length > 0 && (
                    <div className="proyecto-links">
                      {acciones.map(({ href, texto, estilo, Icono }) => (
                        <a
                          key={href}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`btn-proyecto ${estilo}`}
                        >
                          <Icono size={17} />
                          {texto}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;