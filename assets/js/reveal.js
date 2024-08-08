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




    var menuToggle = document.getElementById('menu-toggle');
    var mobileMenu = document.getElementById('mobile-menu');
  
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('dn'); // Alternar visibilidad del menú hamburguesa
    });
  
    function adjustNavClass() {
      var nav = document.querySelector('header');
      if (window.innerWidth <= 1024) { 
        nav.classList.add('sticky', 'w-100', 'z-1');
        mobileMenu.classList.add('dn'); // Asegurarse de que el menú hamburguesa esté colapsado
        document.querySelectorAll('#mobile-menu li').forEach(function(menuItem) {
          var hasChildren = menuItem.querySelector('ul');
          if (hasChildren) {
            hasChildren.classList.add('dn'); // Ocultar menús desplegables en vista móvil
          }
        });
      } else {
        nav.classList.remove('sticky', 'w-100', 'z-1');
        mobileMenu.classList.add('dn'); // Asegurarse de que el menú hamburguesa esté colapsado
        document.querySelectorAll('nav li.relative').forEach(function(menuItem) {
          var hasChildren = menuItem.querySelector('ul');
          if (hasChildren) {
            hasChildren.classList.add('dn'); // Ocultar menús desplegables en vista de escritorio
          }
        });
      }
    }
  
    adjustNavClass();
    window.addEventListener('resize', adjustNavClass);
  
    // Manejar clics en menús móviles
    document.querySelectorAll('#mobile-menu li').forEach(function(menuItem) {
      var hasChildren = menuItem.querySelector('ul');
      if (hasChildren) {
        menuItem.addEventListener('click', function(event) {
          event.stopPropagation();
          hasChildren.classList.toggle('dn'); // Alternar visibilidad del menú desplegable
        });
      }
    });
  
    // Manejar clics en menús de escritorio
    document.querySelectorAll('nav li.relative').forEach(function(menuItem) {
      var hasChildren = menuItem.querySelector('ul');
      if (hasChildren) {
        menuItem.addEventListener('click', function(event) {
          event.stopPropagation();
          hasChildren.classList.toggle('dn'); // Alternar visibilidad del menú desplegable
        });
      }
    });

