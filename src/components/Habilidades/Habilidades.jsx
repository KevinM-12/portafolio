import './Habilidades.css';

const Habilidades = () => {
  // Arreglo de datos: separa la información de la interfaz gráfica
  const skillsData = [
    { id: 1, titulo: "React", descripcion: "Construcción de interfaces de usuario modernas a partir de componentes.", nivel: "Aprendizaje Activo", botonTexto: "EN PROCESO", estado: "proceso" },
    { id: 2, titulo: "JavaScript", descripcion: "Lenguaje de programación interpretado, dialecto del estándar ECMAScript.", nivel: "Aprendizaje Activo", botonTexto: "EN PROCESO", estado: "proceso" },
    { id: 3, titulo: "HTML5", descripcion: "Estructura semántica de páginas web.", nivel: "Intermedio", botonTexto: "DOMINADO", estado: "completado" },
    { id: 4, titulo: "CSS3", descripcion: "Estilos, animaciones y diseño responsive.", nivel: "Intermedio", botonTexto: "DOMINADO", estado: "completado" },
    { id: 5, titulo: "Grid", descripcion: "Construcción de rejillas responsivas.", nivel: "Aprendizaje Activo", botonTexto: "EN PROCESO", estado: "proceso" },
    { id: 6, titulo: "Flexbox", descripcion: "Método de diseño de página unidimensional para compaginar elementos en filas o columnas.", nivel: "Aprendizaje Activo", botonTexto: "EN PROCESO", estado: "proceso" },
    { id: 7, titulo: "Git", descripcion: "Sistema de control de versiones.", nivel: "Aprendizaje Activo", botonTexto: "EN PROCESO", estado: "proceso" },
    { id: 8, titulo: "GitHub", descripcion: "Repositorio en la nube.", nivel: "Aprendizaje Activo", botonTexto: "EN PROCESO", estado: "proceso" },
    { id: 9, titulo: "Bootstrap", descripcion: "Framework CSS para diseño responsive rápido.", nivel: "Intermedio", botonTexto: "DOMINADO", estado: "completado" }
  ];

  return (
    <section id="tech-stack" className="habilidades-section">
      <div className="habilidades-container">
        <div className="habilidades-grid">
          {skillsData.map((skill) => (
            <div key={skill.id} className="skill-card">

              <div className="skill-header">
                <div className="skill-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                </div>

                <span className={`skill-badge ${skill.estado === 'proceso' ? 'badge-yellow' : 'badge-green'}`}>
                  {skill.botonTexto}
                </span>
              </div>

              <div className="skill-body">
                <h3 className="skill-title">{skill.titulo}</h3>
                <p className="skill-desc">{skill.descripcion}</p>
                <span className="skill-level">{skill.nivel}</span>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;