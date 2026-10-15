import './Proyectos.css';

const Proyectos = () => {
  // Reemplaza imagen, titulo, descripcion y links por tus proyectos reales
  const proyectosData = [
    {
      id: 1,
      imagen: "https://placehold.co/600x400/111a2e/00d8ff?text=Proyecto+1",
      titulo: "Portafolio Personal en React",
      descripcion: "Portafolio web responsive construido con componentes de React y Vite.",
      tecnologias: ["HTML5", "CSS3", "JavaScript", "React", "Vite"],
      linkDemo: "#",
      linkCodigo: "#"
    },
    {
      id: 2,
      imagen: "https://placehold.co/600x400/111a2e/00d8ff?text=Proyecto+2",
      titulo: "Aplicación Web de Ejemplo",
      descripcion: "Describe aquí el objetivo y las funciones principales de tu proyecto.",
      tecnologias: ["HTML5", "CSS3", "JavaScript"],
      linkDemo: "#",
      linkCodigo: "#"
    },
    {
      id: 3,
      imagen: "https://placehold.co/600x400/111a2e/00d8ff?text=Proyecto+3",
      titulo: "Proyecto Académico SENATI",
      descripcion: "Describe aquí un proyecto realizado durante tus estudios.",
      tecnologias: ["React", "Bootstrap", "Git"],
      linkDemo: "#",
      linkCodigo: "#"
    },
    {
      id: 4,
      imagen: "https://placehold.co/600x400/111a2e/00d8ff?text=Proyecto+4",
      titulo: "Otro Proyecto",
      descripcion: "Agrega aquí otro proyecto que quieras destacar.",
      tecnologias: ["JavaScript", "CSS3"],
      linkDemo: "#",
      linkCodigo: "#"
    }
  ];

  return (
    <section id="proyectos" className="proyectos-section">
      <div className="proyectos-container">
        <h2 className="section-title text-center">Proyectos Destacados</h2>

        <div className="proyectos-grid">
          {proyectosData.map((proyecto) => (
            <article key={proyecto.id} className="proyecto-card">

              <div className="proyecto-imagen">
                <img src={proyecto.imagen} alt={`Captura de ${proyecto.titulo}`} />
              </div>

              <div className="proyecto-contenido">
                <h3 className="proyecto-titulo">{proyecto.titulo}</h3>
                <p className="proyecto-desc">{proyecto.descripcion}</p>

                <div className="proyecto-tags">
                  {proyecto.tecnologias.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="proyecto-links">
                  <a href={proyecto.linkDemo} target="_blank" rel="noopener noreferrer" className="btn-proyecto btn-demo">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Demo en Vivo
                  </a>

                  <a href={proyecto.linkCodigo} target="_blank" rel="noopener noreferrer" className="btn-proyecto btn-codigo">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Ver Código
                  </a>
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