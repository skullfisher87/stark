document.addEventListener('DOMContentLoaded', () => {
  // Selecciona el elemento main y el footer
  const mainElement = document.querySelector('main');
  const footerElement = document.querySelector('footer');

  // Asegúrate de que el main esté oculto inicialmente
  if (mainElement) {
    mainElement.classList.add('hidden');
  }

  // El footer se muestra directamente sin transiciones
  if (footerElement) {
    footerElement.classList.remove('hidden');
  }

  // Selecciona todos los elementos que deseas revelar con ScrollReveal
  const allElements = document.querySelectorAll('h1, h2, img, div, article,section');

  // Filtra los elementos <nav> para que no se les aplique ScrollReveal
  const elementsToReveal = Array.from(allElements).filter(element => !element.closest('nav'));

  // Inicializa ScrollReveal
  const sr = ScrollReveal({
    opacity: 0,
    duration: 1000,
    easing: 'ease-in-out',
    reset: false
  });

  // Aplica ScrollReveal a los elementos seleccionados
  sr.reveal(elementsToReveal);

  // Una vez que ScrollReveal está listo, elimina la clase 'hidden' del main
  sr.sync().then(() => {
    if (mainElement) {
      mainElement.classList.remove('hidden');
    }
  });
});
