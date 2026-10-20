import './Habilidades.css';

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

const IconCode = (p) => (
  <Base {...p}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </Base>
);

const IconChart = (p) => (
  <Base {...p}>
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </Base>
);

const IconShield = (p) => (
  <Base {...p}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </Base>
);

const IconGlobe = (p) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </Base>
);

const IconTerminal = (p) => (
  <Base {...p}>
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </Base>
);

const IconLayout = (p) => (
  <Base {...p}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="9" y1="21" x2="9" y2="9" />
  </Base>
);

const IconDatabase = (p) => (
  <Base {...p}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </Base>
);

const IconExternal = (p) => (
  <Base {...p}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </Base>
);

const IconAward = (p) => (
  <Base {...p}>
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </Base>
);


/* ==========================================================
   CÓMO AGREGAR EL ENLACE DE CADA CERTIFICADO
   ----------------------------------------------------------
   Pega la URL de tu credencial en "linkCertificado".
   Ejemplos:
     - Credly:  'https://www.credly.com/badges/xxxxxxxx'
     - Cisco:   el enlace público de tu certificado / insignia
   Si lo dejas vacío (''), el botón NO se muestra a los visitantes.
   En tu computadora (npm run dev) verás un aviso para recordarte
   cuáles certificados todavía no tienen enlace.
   ========================================================== */
const skillsData = [
  {
    id: 1,
    titulo: 'Python Essentials 1',
    descripcion:
      'Fundamentos de programación, variables, estructuras de control, funciones y lógica de programación con Python.',
    emisor: 'Cisco Networking Academy',
    tipo: 'certificado',
    Icono: IconCode,
    linkCertificado: '',
  },
  {
    id: 2,
    titulo: 'Introducción a la Ciencia de Datos',
    descripcion:
      'Conceptos fundamentales de ciencia de datos y su aplicación en el análisis y la comprensión de información.',
    emisor: 'Cisco Networking Academy',
    tipo: 'certificado',
    Icono: IconChart,
    linkCertificado: '',
  },
  {
    id: 3,
    titulo: 'Introducción a la Ciberseguridad',
    descripcion:
      'Fundamentos de seguridad digital, amenazas informáticas y protección de sistemas e información.',
    emisor: 'Cisco Networking Academy',
    tipo: 'certificado',
    Icono: IconShield,
    linkCertificado: '',
  },
  {
    id: 4,
    titulo: 'Conceptos básicos de redes',
    descripcion:
      'Fundamentos de redes, conectividad y comunicación entre dispositivos.',
    emisor: 'Cisco Networking Academy',
    tipo: 'certificado',
    Icono: IconGlobe,
    linkCertificado: '',
  },
  {
    id: 5,
    titulo: 'Red Hat System Administration',
    descripcion:
      'Formación en administración de sistemas Linux y herramientas de gestión del sistema.',
    emisor: 'Credencial disponible en Credly',
    tipo: 'certificado',
    Icono: IconTerminal,
    linkCertificado: '',
  },
  {
    id: 6,
    titulo: 'WordPress y Bricks Builder',
    descripcion:
      'Construcción y personalización de sitios web, diseño responsive, configuración de componentes y ajustes visuales.',
    emisor: 'Experiencia práctica',
    tipo: 'experiencia',
    Icono: IconLayout,
  },
  {
    id: 7,
    titulo: 'PHP y MySQL',
    descripcion:
      'Desarrollo backend, procesamiento de formularios, consultas SQL y conexión con bases de datos.',
    emisor: 'Experiencia práctica',
    tipo: 'experiencia',
    Icono: IconDatabase,
  },
];

const certificaciones = skillsData.filter((s) => s.tipo === 'certificado');
const experiencia = skillsData.filter((s) => s.tipo === 'experiencia');

// Un enlace es válido si no está vacío, no es "#" y no es un marcador de posición
const esEnlaceValido = (url) =>
  Boolean(url) && url !== '#' && !url.includes('PEGA_AQUI');

/* ---------- Tarjeta individual ---------- */
const TarjetaHabilidad = ({ skill, indice }) => {
  const esCertificado = skill.tipo === 'certificado';
  const tieneEnlace = esEnlaceValido(skill.linkCertificado);
  const { Icono } = skill;

  return (
    <article
      className="skill-card reveal"
      style={{ '--d': `${(indice % 3) * 90}ms` }}
    >
      <div className="skill-header">
        <div className="skill-icon">
          <Icono size={26} />
        </div>

        <span className={`skill-badge ${esCertificado ? 'badge-green' : 'badge-cyan'}`}>
          {esCertificado ? 'CERTIFICADO' : 'EXPERIENCIA'}
        </span>
      </div>

      <div className="skill-body">
        {esCertificado && <span className="skill-emisor">{skill.emisor}</span>}
        <h4 className="skill-title">{skill.titulo}</h4>
        <p className="skill-desc">{skill.descripcion}</p>
      </div>

      {/* Botón al certificado (solo en certificaciones) */}
      {esCertificado && tieneEnlace && (
        <a
          href={skill.linkCertificado}
          target="_blank"
          rel="noopener noreferrer"
          className="cert-btn"
          aria-label={`Ver certificado de ${skill.titulo} (se abre en una pestaña nueva)`}
        >
          <IconAward size={17} />
          Ver certificado
          <IconExternal size={15} />
        </a>
      )}

      {/* Recordatorio visible solo mientras desarrollas (npm run dev) */}
      {esCertificado && !tieneEnlace && import.meta.env.DEV && (
        <span className="cert-btn is-pending">
          Falta el enlace · edita linkCertificado
        </span>
      )}
    </article>
  );
};

/* ---------- Sección ---------- */
const Habilidades = () => {
  return (
    <section id="tech-stack" className="section section--alt habilidades-section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">02 · Habilidades</span>
          <h2 className="section-title">Certificaciones y experiencia</h2>
          <p className="section-lead">
            Cursos con credencial verificable y las tecnologías que he puesto
            en práctica.
          </p>
        </div>

        {/* Certificaciones */}
        <h3 className="skills-group-title reveal">
          Certificaciones <span>{certificaciones.length}</span>
        </h3>
        <div className="skills-grid">
          {certificaciones.map((skill, i) => (
            <TarjetaHabilidad key={skill.id} skill={skill} indice={i} />
          ))}
        </div>

        {/* Experiencia práctica */}
        <h3 className="skills-group-title reveal">
          Experiencia práctica <span>{experiencia.length}</span>
        </h3>
        <div className="skills-grid skills-grid--exp">
          {experiencia.map((skill, i) => (
            <TarjetaHabilidad key={skill.id} skill={skill} indice={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;