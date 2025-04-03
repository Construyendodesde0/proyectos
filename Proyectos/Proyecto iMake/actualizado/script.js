document.addEventListener("DOMContentLoaded", function () {
  // Toggle del menú móvil
  const menuToggle = document.getElementById("menuToggle");
  const navbar = document.getElementById("navbar");

  if (menuToggle && navbar) {
    menuToggle.addEventListener("click", function () {
      navbar.classList.toggle("active");
    });
  }

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // Formulario de contacto
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("¡Gracias por contactarnos!");
      contactForm.reset();
    });
  }

  // Toggle para mostrar/ocultar el menú de idiomas
  const langToggle = document.querySelector('.lang-toggle');
  const languageOptions = document.querySelector('.language-options');

  if (langToggle && languageOptions) {
    langToggle.addEventListener('click', (e) => {
      e.stopPropagation(); // Evita que el evento se propague
      languageOptions.classList.toggle('active');
    });

    // Cerrar el menú de idiomas al hacer clic fuera de él
    document.addEventListener('click', (e) => {
      if (!languageOptions.contains(e.target) {
        languageOptions.classList.remove('active');
      }
    });

    // Cambiar idioma
    const langButtons = document.querySelectorAll('.language-options button');
    langButtons.forEach(button => {
      button.addEventListener('click', function () {
        const lang = this.getAttribute('data-lang');
        if (lang) {
          setLanguage(lang);
          // Cambiar el ícono y texto del botón principal
          const flag = this.querySelector('.flag-icon').src;
          const text = this.textContent.trim();
          langToggle.innerHTML = `<img src="${flag}" alt="${text}" class="flag-icon"> ${text} <i class="fas fa-chevron-down"></i>`;
          languageOptions.classList.remove('active');
        }
      });
    });
  }

  // Función para cambiar el idioma
  function setLanguage(lang) {
    if (!translations || !translations[lang]) {
      console.error(`No se encontraron traducciones para el idioma: ${lang}`);
      return;
    }

    
    // Traducir elementos con data-translate-key
    document.querySelectorAll("[data-translate-key]").forEach(elem => {
      const key = elem.getAttribute("data-translate-key");
      if (translations[lang][key]) {
        elem.textContent = translations[lang][key];
      }
    });

    // Traducir placeholders con data-translate-placeholder
    document.querySelectorAll("[data-translate-placeholder]").forEach(elem => {
      const key = elem.getAttribute("data-translate-placeholder");
      if (translations[lang][key]) {
        elem.setAttribute("placeholder", translations[lang][key]);
      }
    });
  }

  // Inicializar con español
  setLanguage("es");
});