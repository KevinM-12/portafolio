import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import './Contacto.css';

const Contacto = () => {
  // Datos que escribe el usuario en el formulario
  const [formulario, setFormulario] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  // true mientras se envía el correo
  const [cargando, setCargando] = useState(false);

  // Cada vez que el usuario escribe, se guarda en el estado
  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value
    });
  };

  // Se ejecuta al enviar el formulario
  const manejarEnvio = async (e) => {
    e.preventDefault();
    setCargando(true);

    try {
      // Las variables deben coincidir con las de la plantilla de EmailJS
      const templateParams = {
        nombre: formulario.nombre,
        email: formulario.email,
        mensaje: formulario.mensaje
      };

      // Envía el correo con las credenciales del archivo .env
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Alerta de éxito
      Swal.fire({
        title: '¡Mensaje Enviado!',
        text: 'Gracias por contactarme. Te responderé a la brevedad.',
        icon: 'success',
        confirmButtonColor: '#00d8ff',
        background: '#111a2e',
        color: '#ffffff'
      });

      // Limpia el formulario
      setFormulario({ nombre: '', email: '', mensaje: '' });
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);

      // Alerta de error
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al enviar el mensaje. Inténtalo más tarde.',
        icon: 'error',
        confirmButtonColor: '#00d8ff',
        background: '#111a2e',
        color: '#ffffff'
      });
    } finally {
      // Se ejecuta siempre: el botón vuelve a su estado normal
      setCargando(false);
    }
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
              {/* Ítem Email */}
              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <span className="item-label">Email</span>
                  <p className="item-text">kmunosvaldivia@gmail.com</p>
                </div>
              </div>

              {/* Ítem Teléfono */}
              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <span className="item-label">Teléfono</span>
                  <p className="item-text">+51 987 261 858</p>
                </div>
              </div>

              {/* Ítem LinkedIn */}
              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <div>
                  <span className="item-label">LinkedIn</span>
                  <a
                    className="item-text item-link"
                    href="https://www.linkedin.com/in/kmv1507"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver mi perfil
                  </a>
                </div>
              </div>

              {/* Ítem Ubicación */}
              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <span className="item-label">Ubicación</span>
                  <p className="item-text">Perú</p>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: FORMULARIO */}
          <div className="contacto-form-wrapper reveal">
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
                  required
                  disabled={cargando}
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
                  placeholder="tu@email.com"
                  required
                  disabled={cargando}
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
                  disabled={cargando}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-submit"
                disabled={cargando}
              >
                {cargando ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
