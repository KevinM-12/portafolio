import './Banner.css';
import miFoto from '../../assets/miFoto.png';

const Banner = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">

        {/* 1. Etiqueta de Estado (Badge) */}
        <div className="status-badge">
          <span className="status-dot"></span>
          Disponible para nuevos proyectos
        </div>

        {/* 2. Foto de Perfil Circular */}
        <div className="profile-photo-container">
          <img src={miFoto} alt="Foto de Perfil" className="profile-photo" />
        </div>

        {/* 3. Título Principal */}
        <h1 className="hero-title">
          Kevin Jesús <br />
          <span className="text-cyan">Muños Vadivia</span>
        </h1>

        {/* 4. Subtítulo (Rol) */}
        <h2 className="hero-subtitle">
          Desarrollador Web | Estudiante de Programación y Sistemas - SENATI
        </h2>

        {/* 5. Descripción */}
        <p className="hero-description">
          Desarrollo aplicaciones web funcionales para resolver necesidades
          reales, combinando buenas prácticas de código, diseño responsive
          y soluciones modernas con React.
        </p>

        {/* 6. Botones de Acción */}
        <div className="hero-buttons">
          <a href="#proyectos" className="btn btn-primary">Ver Proyectos</a>
          <a href="#contacto" className="btn btn-secondary">Contáctame</a>
        </div>

      </div>

      {/* 7. Indicador de Scroll */}
      <div className="scroll-indicator">↓</div>
    </section>
  );
};

export default Banner;