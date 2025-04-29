document.addEventListener('DOMContentLoaded', () => {
  console.log('script03.js cargado correctamente.');

  // Función para crear efecto Ripple
  function createRipple(e, element) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    const rect = element.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    element.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  }

  // Ripple en el botón de Telegram
  const telegramButton = document.getElementById('telegram-button');
  if (telegramButton) {
    telegramButton.addEventListener('click', function(e) {
      createRipple(e, this);
      console.log('Botón de Telegram presionado.');
    });
  }

  // Ripple en botones de la cabecera
  document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function(e) {
      createRipple(e, this);
      console.log('Botón de navegación presionado.');
    });
  });

  // Ripple en imágenes de la galería (si existen)
  document.querySelectorAll('.gallery-image').forEach(img => {
    img.addEventListener('click', function(e) {
      createRipple(e, this);
      console.log('Imagen clickeada: efecto ripple activado.');
    });
  });

  // Efecto Fade-In usando IntersectionObserver
  const observerOptions = { threshold: 0.15 };
  const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => {
    fadeInObserver.observe(el);
  });

  // Funcionalidad Toggle para "Leer más" en las tarjetas con auto-cierre
  document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function(e) {
      createRipple(e, this);
      const moreContent = this.nextElementSibling;
      if (moreContent.style.display === "none" || moreContent.style.display === "") {
        moreContent.style.display = "block";
        this.textContent = "Leer menos";
        const currentButton = this;
        setTimeout(() => {
          if (moreContent.style.display === "block") {
            moreContent.style.display = "none";
            currentButton.textContent = "Leer más";
          }
        }, 5000);
      } else {
        moreContent.style.display = "none";
        this.textContent = "Leer más";
      }
    });
  });

  // Indicador de Progreso de Scroll
  const progressBar = document.createElement('div');
  progressBar.id = 'scroll-progress';
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
  });

  // Efecto de animación para tarjetas al hacer hover
  document.querySelectorAll('.article-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.02)';
      card.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
      card.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
    });
  });

  // Funcionalidad Accordion en la Guía de Opciones Binarias
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function() {
      const content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        document.querySelectorAll('.accordion-content').forEach(acc => {
          acc.style.maxHeight = null;
        });
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

  // Funcionalidad Scroll to Top
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  });
  
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
