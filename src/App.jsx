import { useEffect, useLayoutEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Perfil from './components/Perfil/Perfil';
import Habilidades from './components/Habilidades/Habilidades';
import Proyectos from './components/Proyectos/Proyectos';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import './App.css';
import './index.css';

function App() {
  // Datos de la página (idioma y título) y marca "js" para las animaciones.
  // Se hace aquí porque index.html no se modifica.
  useLayoutEffect(() => {
    document.documentElement.classList.add('js');
    document.documentElement.lang = 'es';
    document.title = 'Kevin Muños | Desarrollador Web';
  }, []);

  // Animación de aparición: añade "is-visible" a cada elemento con clase
  // "reveal" cuando entra en pantalla.
  useEffect(() => {
    const elementos = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
      elementos.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('is-visible');
            observador.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elementos.forEach((el) => observador.observe(el));
    return () => observador.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <Perfil />
        <Habilidades />
        <Proyectos />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}

export default App;