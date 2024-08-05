document.addEventListener('DOMContentLoaded', () => {
  const allElements = document.querySelectorAll('h1, h2, img, div, article, main');
  
  // Filtra <nav>
  const elementsToReveal = Array.from(allElements).filter(element => !element.closest('nav, footer'));

  ScrollReveal().reveal(elementsToReveal, {
      opacity: 0,
      duration: 1000,
      easing: 'ease-in-out',
      reset: false 
  });
});