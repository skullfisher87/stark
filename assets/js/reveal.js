document.addEventListener('DOMContentLoaded', () => {
  const mainElement = document.querySelector('main');
  const footerElement = document.querySelector('footer');
  const allElements = document.querySelectorAll('h1, h2, img, div, main, article, section');

  // Filtra <nav> y <footer>
  const elementsToReveal = Array.from(allElements).filter(element => !element.closest('nav,footer'));

  // Configuración de ScrollReveal
  ScrollReveal().reveal(elementsToReveal, {
      opacity: 0,
      duration: 1000,
      easing: 'ease-in-out',
      reset: false
  });

  // Utiliza setTimeout para garantizar que el efecto de ScrollReveal se aplique
  setTimeout(() => {
    // Asegúrate de que el main esté visible después de la revelación
    if (mainElement) {
      mainElement.classList.remove('dn');
    }

    // El footer se muestra directamente sin transiciones
    if (footerElement) {
      footerElement.classList.remove('dn');
    }
  }, ); // Asegúrate de que el tiempo sea mayor o igual a la duración de ScrollReveal
});
