const brokers = [
  {
    name: "Deriv",
    image: "_imagenes/deriv_logo.png",
    deposit: 5,
    review: "Deriv, antes conocida como Binary.com, es un bróker con sede en las Islas del Canal y operado por Deriv Group. Se estableció en 2020 como parte del 20 aniversario de la empresa matriz. Está registrada en Malta, Labuan y Vanuatu, y cuenta con una amplia variedad de activos y plataformas avanzadas.",
    rating: 5,
    advantages: [
      "Variedad de activos (índices, forex, criptomonedas, acciones)",
      "Plataforma MT5 y opciones avanzadas de trading",
      "Ejecución rápida de operaciones",
      "Retiro flexible y rápido",
      "Cuenta demo para practicar sin riesgo",
      "Soporte en varios idiomas"
    ],
    disadvantages: [
      "No disponible en algunos países",
      "Soporte limitado los fines de semana",
      "Verificación de identidad requerida para ciertos retiros"
    ],
    link: "https://deriv.com/es?t=rDGaixLNbzxVhYT0YntAMGNd7ZgqdRLk&utm_source=affiliate_191972&utm_medium=affiliate&utm_campaign=MyAffiliates&utm_content=&referrer",
    strategy: "Scalping en MT5: Usa la plataforma MT5 de Deriv para scalping en pares de forex como EUR/USD durante sesiones de alta volatilidad (Londres/Nueva York). Configura un gráfico de 1 minuto con un ATR (14) y RSI (14) para identificar entradas rápidas. Coloca stop-loss ajustados (5-10 pips) y toma ganancias en 10-15 pips."
  },
  {
    name: "IQ Option",
    image: "_imagenes/iq_option_logo.png",
    deposit: 10,
    review: "IQ Option es una de las plataformas de trading más populares, ideal para traders novatos gracias a su bajo depósito y a su interfaz intuitiva. Ofrece acceso a múltiples mercados y herramientas analíticas.",
    rating: 5,
    advantages: [
      "Depósito inicial de $10 USD",
      "Plataforma intuitiva y fácil de usar",
      "Excelente app móvil (Android & iOS)",
      "Acceso a cuenta demo",
      "Variedad de activos (opciones binarias, CFDs, Forex, criptomonedas)",
      "Educación continua y recursos para traders"
    ],
    disadvantages: [
      "Verificación de identidad requerida para retiros",
      "Comisiones en algunos métodos de retiro",
      "Funciones avanzadas solo en cuentas VIP",
      "Restricciones para algunos países"
    ],
    link: "https://affiliate.iqbroker.com/redir/?aff=372902&aff_model=revenue&afftrack=",
    strategy: "Trading Móvil con Opciones Binarias: Aprovecha la app móvil de IQ Option para operar opciones binarias en activos volátiles como criptomonedas (BTC/USD). Usa un gráfico de 5 minutos con medias móviles (EMA 20/50) para confirmar tendencias. Opera en dirección de la tendencia con vencimientos de 15-30 minutos."
  },
  {
    name: "Binolla",
    image: "_imagenes/binolla_logo.png",
    deposit: 10,
    review: "Binolla es una plataforma digital que permite operar con opciones binarias en divisas, ofreciendo pagos competitivos en operaciones exitosas y una cuenta demo para practicar. No disponible para residentes de algunos países.",
    rating: 5,
    advantages: [
      "Interfaz intuitiva y fácil de usar",
      "Contenido educativo para traders",
      "Accesible en dispositivos móviles",
      "Retiros rápidos",
      "Diversos activos financieros"
    ],
    disadvantages: [
      "Requiere validación de cuenta",
      "No disponible para residentes de EE. UU. y otros países",
      "No ofrece servicio de copy trading"
    ],
    link: "https://binolla.com/?lid=16577",
    strategy: "Opciones Digitales en Divisas: Usa Binolla para operar opciones digitales en pares de divisas como USD/JPY. Configura un gráfico de 15 minutos con niveles de soporte/resistencia y un indicador MACD. Entra en rupturas confirmadas con vencimientos de 1 hora para maximizar pagos."
  },
  {
    name: "Olymp Trade",
    image: "_imagenes/olymp-trade-logo.png",
    deposit: 10,
    review: "Olymp Trade es muy popular por su facilidad de acceso y bajas barreras de entrada. Ideal para principiantes, ofrece tanto trading de opciones como CFDs, con abundantes recursos educativos.",
    rating: 5,
    advantages: [
      "Depósito bajo de $10 USD",
      "Comisiones competitivas",
      "Amplia oferta educativa",
      "Cuenta demo disponible",
      "Plataforma amigable y multilingüe"
    ],
    disadvantages: [
      "Verificación completa requerida",
      "Funciones avanzadas solo para cuentas VIP",
      "Restricciones geográficas"
    ],
    link: "https://olymptrade.com/?affiliate_id=2374394&subid1=&subid2=",
    strategy: "Swing Trading con CFDs: Utiliza Olymp Trade para swing trading en índices como el S&P 500. Configura un gráfico de 1 hora con medias móviles (SMA 50/200) y un indicador Stochastic. Entra en cruces de medias confirmados por sobreventa/sobrecompra, con objetivos de 50-100 pips."
  },
  {
    name: "Pocket Option",
    image: "_imagenes/pocketoption_logo.png",
    deposit: 5,
    review: "Pocket Option destaca por su bono de bienvenida, variedad de activos y opciones de pago flexibles. Su diseño amigable lo hace apto para traders principiantes y experimentados.",
    rating: 5,
    advantages: [
      "Bonos de bienvenida atractivos",
      "Plataforma sencilla",
      "Variedad de activos (forex, criptomonedas, acciones, índices)",
      "Opciones de pago variadas",
      "Ejecución rápida de órdenes"
    ],
    disadvantages: [
      "Comisiones por retiro en ciertos métodos",
      "Limitado en algunos países",
      "Retiro mínimo alto en algunos casos"
    ],
    link: "https://u3.shortink.io/smart/kHbc0MQql6kufA",
    strategy: "Copy Trading en Criptos: Aprovecha la función de copy trading de Pocket Option para seguir a traders exitosos en criptomonedas como ETH/USD. Configura un gráfico de 30 minutos con un indicador Bollinger Bands para confirmar entradas. Asigna un 2% de tu capital por operación copiada."
  },
  {
    name: "ExpertOption",
    image: "_imagenes/expert-option-logo.png",
    deposit: 10,
    review: "ExpertOption es una plataforma intuitiva y versátil, adecuada tanto para principiantes como para traders experimentados, con múltiples mercados y activos disponibles.",
    rating: 4,
    advantages: [
      "Bajas comisiones",
      "Plataforma fácil de usar",
      "Depósito inicial accesible",
      "Atención al cliente 24/7",
      "Cuenta demo gratuita"
    ],
    disadvantages: [
      "Funciones exclusivas para cuentas VIP",
      "Comisiones en algunos métodos de retiro",
      "Disponible solo en ciertos países"
    ],
    link: "https://eo.shortlify.com/244450823",
    strategy: "Day Trading en Acciones: Usa ExpertOption para day trading en acciones como Apple. Configura un gráfico de 5 minutos con un indicador VWAP y niveles de Fibonacci. Entra en retrocesos confirmados por volumen alto, con stop-loss de 1% y objetivos de 2-3%."
  },
  {
    name: "Exnova",
    image: "_imagenes/exnova_logo.png",
    deposit: 10,
    review: "Exnova ofrece una interfaz simple y eficaz para operar en forex, criptomonedas, acciones e índices, con tres tipos de cuenta y un enfoque en la seguridad del usuario.",
    rating: 5,
    advantages: [
      "Regulación confiable por la IFMRRC",
      "Acceso a múltiples mercados",
      "Excelente soporte 24/7",
      "Cuenta demo disponible",
      "Plataforma intuitiva"
    ],
    disadvantages: [
      "Diseño similar a otros brokers populares",
      "Verificación en algunas regiones",
      "Comisiones en ciertos métodos de retiro"
    ],
    link: "https://exnova.com/lp/start-trading/?aff=372902&aff_model=revenue&afftrack=",
    strategy: "Trading de Noticias: Usa Exnova para operar noticias económicas en forex (USD/CAD). Configura un gráfico de 1 minuto con un indicador ATR para medir volatilidad. Entra tras anuncios importantes (NFP, tasas de interés) with vencimientos de 5-10 minutos."
  },
  {
    name: "IQcent",
    image: "_imagenes/closeoption_logo.png",
    deposit: 100,
    review: "IQCent no está regulado y se orienta a traders experimentados. A pesar de contar con una interfaz avanzada, su falta de regulación y comisiones relativamente altas lo hacen menos recomendable para principiantes.",
    rating: 3,
    advantages: [
      "Interfaz avanzada",
      "Amplia variedad de activos",
      "Depósitos y retiros sencillos",
      "Material educativo para traders avanzados"
    ],
    disadvantages: [
      "No disponible en algunos países",
      "Comisiones elevadas en ciertos métodos",
      "Verificación necesaria antes de retiros",
      "Orientado a traders con experiencia"
    ],
    link: "https://in.trck.gg/track/ODE1MS4xMTczMTUuOy43NzcyLjAuMC4wLjAuMC4wLjAuMA",
    strategy: "Trading Avanzado en CFDs: Usa IQCent para operar CFDs en commodities como oro. Configura un gráfico de 4 horas con un indicador Ichimoku y niveles de soporte/resistencia. Entra en tendencias confirmadas con stop-loss de 2% y objetivos de 4-5%."
  },
  {
    name: "Quotex",
    image: "_imagenes/gcoption_logo.png",
    deposit: 10,
    review: "Quotex ofrece más de 400 instrumentos financieros y cuenta con diferentes tipos de cuenta (Demo, Estándar y VIP). Aunque su interfaz es intuitiva, es importante tener en cuenta los riesgos propios del trading.",
    rating: 3,
    advantages: [
      "Depósito mínimo accesible",
      "Gran variedad de instrumentos",
      "Facilidad para depósitos y retiros",
      "Diseño profesional"
    ],
    disadvantages: [
      "No disponible en algunos países",
      "Verificación requerida para retiros",
      "No admite Skrill o Neteller"
    ],
    link: "https://broker-qx.pro/?lid=1212221",
    strategy: "Trading de Rupturas: Usa Quotex para operar rupturas en pares exóticos como USD/TRY. Configura un gráfico de 15 minutos con un indicador ADX y niveles de pivote. Entra en rupturas con ADX > 25, con stop-loss de 20 pips y objetivos de 40-50 pips."
  }
];

function renderBrokers() {
  const brokerCards = document.getElementById("broker-cards");
  brokerCards.innerHTML = brokers.map((broker, index) => `
    <div class="broker-card" data-tilt data-tilt-max="10" data-tilt-speed="400" data-tilt-perspective="500">
      <img src="${broker.image}" alt="${broker.name}" loading="lazy">
      <h3>${broker.name}</h3>
      <p class="rating">${"⭐".repeat(broker.rating)}</p>
      <span class="deposit-chip">Depósito Mínimo: $${broker.deposit} USD</span>
      <div class="review-scroll">${broker.review}</div>
      <div class="card-details">
        <button class="detail-btn" data-index="${index}" data-type="advantages">Ventajas</button>
        <button class="detail-btn" data-index="${index}" data-type="disadvantages">Desventajas</button>
      </div>
      <a href="${broker.link}" target="_blank" rel="noopener noreferrer" class="btn">Explora ${broker.name}</a>
    </div>
  `).join("");

  const strategiesGrid = document.getElementById("strategies-grid");
  strategiesGrid.innerHTML = brokers.map(broker => `
    <div class="strategy-card">
      <h4>${broker.name}</h4>
      <p>${broker.strategy}</p>
    </div>
  `).join("");

  document.querySelectorAll(".detail-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      const index = this.getAttribute("data-index");
      const type = this.getAttribute("data-type");
      const broker = brokers[index];
      showModal(type === "advantages" ? `Ventajas de ${broker.name}` : `Desventajas de ${broker.name}`, broker[type], type);
    });
  });

  // Initialize carousel for library images only
  initializeCarousel('library-image');

  // Animación de entrada
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = `fadeIn 0.6s ease-out forwards`;
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".broker-card, .tool-card, .strategy-card, .book-card, .review-card").forEach(card => {
    observer.observe(card);
  });

  // Inicializar Vanilla Tilt
  VanillaTilt.init(document.querySelectorAll(".broker-card"), {
    max: 10,
    speed: 400,
    perspective: 500,
    glare: true,
    "max-glare": 0.3
  });
}

function initializeCarousel(type) {
  const carousel = document.querySelector(`#${type}-carousel`);
  const items = carousel.children;
  const description = document.querySelector(`#${type}-description`);
  let currentIndex = 0;

  function updateCarousel() {
    Array.from(items).forEach((item, index) => {
      item.style.display = index === currentIndex ? 'block' : 'none';
    });
    description.textContent = items[currentIndex].querySelector('img').dataset.description;
  }

  document.querySelector(`.carousel-prev[data-carousel="${type}"]`).addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
  });

  document.querySelector(`.carousel-next[data-carousel="${type}"]`).addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  });

  updateCarousel();
}

function showModal(title, list, type) {
  const modal = document.getElementById("modal");
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-list").innerHTML = list.map(item => `<li class="${type === 'advantages' ? 'advantage' : 'disadvantage'}">${item}</li>`).join("");
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.body.style.overflow = "auto";
}

function calculateRiskManagement() {
  const balance = parseFloat(document.getElementById("account-balance").value);
  const riskPercent = parseFloat(document.getElementById("risk-percent").value);
  const stopLoss = parseFloat(document.getElementById("stop-loss").value);
  
  if (isNaN(balance) || isNaN(riskPercent) || isNaN(stopLoss)) {
    document.getElementById("risk-result").textContent = "Por favor, completa todos los campos con valores numéricos.";
    return;
  }
  
  if (balance <= 0 || riskPercent <= 0 || stopLoss <= 0) {
    document.getElementById("risk-result").textContent = "Todos los valores deben ser mayores que cero.";
    return;
  }
  
  const riskAmount = (balance * (riskPercent / 100)).toFixed(2);
  const positionSize = (riskAmount / stopLoss).toFixed(2);
  document.getElementById("risk-result").textContent = `Riesgo por operación: $${riskAmount} | Tamaño de posición: ${positionSize} lotes`;
}

function calculateProfitGoal() {
  const balance = parseFloat(document.getElementById("profit-balance").value);
  const goalPercent = parseFloat(document.getElementById("profit-goal").value);
  const period = document.getElementById("profit-period").value;
  
  if (isNaN(balance) || isNaN(goalPercent)) {
    document.getElementById("profit-result").textContent = "Por favor, completa todos los campos con valores numéricos.";
    return;
  }
  
  if (balance <= 0 || goalPercent <= 0) {
    document.getElementById("profit-result").textContent = "Todos los valores deben ser mayores que cero.";
    return;
  }
  
  const profit = (balance * (goalPercent / 100)).toFixed(2);
  let result;
  
  if (period === "month") {
    const daily = (profit / 20).toFixed(2);
    result = `Ganancia mensual: $${profit} | Diario (20 días): $${daily}`;
  } else if (period === "week") {
    const daily = (profit / 5).toFixed(2);
    result = `Ganancia semanal: $${profit} | Diario (5 días): $${daily}`;
  } else {
    result = `Ganancia diaria: $${profit}`;
  }
  
  document.getElementById("profit-result").textContent = result;
}

document.addEventListener("DOMContentLoaded", () => {
  renderBrokers();
  
  // Telegram Banner
  setTimeout(() => {
    const banner = document.getElementById("telegram-banner");
    if (!localStorage.getItem('bannerClosed')) {
      banner.style.display = "flex";
    }
  }, 5000);
  
  document.querySelector(".banner-close").addEventListener("click", () => {
    document.getElementById("telegram-banner").style.display = "none";
    localStorage.setItem('bannerClosed', 'true');
  });
  
  // Modal close handlers
  document.querySelector(".close-button").addEventListener("click", closeModal);
  
  window.addEventListener("click", (e) => {
    if (e.target === document.getElementById("modal")) {
      closeModal();
    }
  });
  
  // Comment form
  document.getElementById("comment-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("comment-name").value.trim();
    const text = document.getElementById("comment-text").value.trim();
    
    if (name && text) {
      const commentList = document.getElementById("comment-list");
      const comment = document.createElement("div");
      comment.className = "comment";
      comment.innerHTML = `<p><strong>${name}:</strong> ${text}</p>`;
      comment.style.animation = "slideUp 0.5s ease-in-out";
      commentList.appendChild(comment);
      document.getElementById("comment-form").reset();
      
      comment.scrollIntoView({ behavior: 'smooth' });
    }
  });
  
  // Particle.js for background
  particlesJS("particles-js", {
    particles: {
      number: { 
        value: 120, 
        density: { 
          enable: true, 
          value_area: 800 
        } 
      },
      color: { 
        value: ["#00f7ff", "#ff00ff", "#7b00ff"] 
      },
      shape: { 
        type: "circle" 
      },
      opacity: { 
        value: 0.6,
        random: true
      },
      size: { 
        value: 5, 
        random: true 
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.3,
        width: 1
      },
      move: { 
        enable: true, 
        speed: 3, 
        direction: "none", 
        random: true,
        out_mode: "out"
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: { 
        onhover: { 
          enable: true, 
          mode: "grab" 
        }, 
        onclick: { 
          enable: true, 
          mode: "push" 
        } 
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1
          }
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  });

  // Particle.js for hero
  particlesJS("hero-particles", {
    particles: {
      number: { 
        value: 80, 
        density: { 
          enable: true, 
          value_area: 800 
        } 
      },
      color: { 
        value: ["#00f7ff", "#ff00ff", "#ffffff"] 
      },
      shape: { 
        type: ["circle", "triangle", "star"] 
      },
      opacity: { 
        value: 0.7,
        random: true
      },
      size: { 
        value: 6, 
        random: true 
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: "#00f7ff",
        opacity: 0.4,
        width: 1
      },
      move: { 
        enable: true, 
        speed: 4, 
        direction: "none", 
        random: true,
        out_mode: "out"
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: { 
        onhover: { 
          enable: true, 
          mode: "repulse" 
        }, 
        onclick: { 
          enable: true, 
          mode: "push" 
        } 
      },
      modes: {
        repulse: {
          distance: 120,
          duration: 0.4
        },
        push: {
          particles_nb: 6
        }
      }
    },
    retina_detect: true
  });
});

function changeLanguage(lang) {
  const elements = {
    "es": {
      "title": "Mejores Brokers 2025 - Biteonix",
      "hero-title": "Domina el Mercado en 2025",
      "hero-text": "Descubre los mejores brokers de Latinoamérica y alcanza tus metas financieras con plataformas confiables y estrategias probadas.",
      "hero-btn": "Empieza tu Éxito",
      "strategies-title": "Estrategias Personalizadas por Broker",
      "tools-title": "Calculadoras para Traders",
      "library-title": "Biblioteca de Trading",
      "library-text": "Descarga guías gratuitas para dominar el arte del trading.",
      "library-video": "_videos/trading_tutorial.mp4",
      "reviews-title": "Reseñas de los Mejores Brokers",
      "payment-title": "Métodos de Pago Seguros",
      "additional-title": "Guía Esencial para Traders",
      "comments-title": "Comparte tu Experiencia",
      "download-title": "Descarga Nuestro Script",
      "footer-text": "© 2025 Biteonix. Forja tu camino al éxito financiero.",
      "language-es": "Español",
      "language-en": "English",
      "language-pt": "Português"
    },
    "en": {
      "title": "Best Brokers 2025 - Biteonix",
      "hero-title": "Master the Market in 2025",
      "hero-text": "Discover the best brokers in Latin America and achieve your financial goals with reliable platforms and proven strategies.",
      "hero-btn": "Start Your Success",
      "strategies-title": "Custom Strategies by Broker",
      "tools-title": "Calculators for Traders",
      "library-title": "Trading Library",
      "library-text": "Download free guides to master the art of trading.",
      "library-video": "_videos/trading_tutorial_en.mp4",
      "reviews-title": "Reviews of the Best Brokers",
      "payment-title": "Secure Payment Methods",
      "additional-title": "Essential Guide for Traders",
      "comments-title": "Share Your Experience",
      "download-title": "Download Our Script",
      "footer-text": "© 2025 Biteonix. Forge your path to financial success.",
      "language-es": "Spanish",
      "language-en": "English",
      "language-pt": "Portuguese"
    },
    "pt": {
      "title": "Melhores Corretores 2025 - Biteonix",
      "hero-title": "Domine o Mercado em 2025",
      "hero-text": "Descubra os melhores corretores da América Latina e alcance suas metas financeiras com plataformas confiáveis e estratégias comprovadas.",
      "hero-btn": "Comece Seu Sucesso",
      "strategies-title": "Estratégias Personalizadas por Corretor",
      "tools-title": "Calculadoras para Traders",
      "library-title": "Biblioteca de Trading",
      "library-text": "Baixe guias gratuitos para dominar a arte do trading.",
      "library-video": "_videos/trading_tutorial_pt.mp4",
      "reviews-title": "Avaliações dos Melhores Corretores",
      "payment-title": "Métodos de Pagamento Seguros",
      "additional-title": "Guia Essencial para Traders",
      "comments-title": "Compartilhe Sua Experiência",
      "download-title": "Baixe Nosso Script",
      "footer-text": "© 2025 Biteonix. Forje seu caminho para o sucesso financeiro.",
      "language-es": "Espanhol",
      "language-en": "Inglês",
      "language-pt": "Português"
    }
  };

  document.title = elements[lang]["title"];
  document.querySelector("header h1").textContent = elements[lang]["title"];
  document.querySelector(".hero h2").textContent = elements[lang]["hero-title"];
  document.querySelector(".hero p").textContent = elements[lang]["hero-text"];
  document.querySelector(".hero-btn").textContent = elements[lang]["hero-btn"];
  document.querySelector(".strategies-section h3").textContent = elements[lang]["strategies-title"];
  document.querySelector(".tools-section h3").textContent = elements[lang]["tools-title"];
  document.querySelector(".library-section h3").textContent = elements[lang]["library-title"];
  document.querySelector(".library-section p").textContent = elements[lang]["library-text"];
  document.querySelector(".library-section video source").setAttribute("src", elements[lang]["library-video"]);
  document.querySelector(".reviews-container h3").textContent = elements[lang]["reviews-title"];
  document.querySelector(".payment-methods-container h3").textContent = elements[lang]["payment-title"];
  document.querySelector(".additional-info-container h3").textContent = elements[lang]["additional-title"];
  document.querySelector(".comments-section h3").textContent = elements[lang]["comments-title"];
  document.querySelector(".download-section h3").textContent = elements[lang]["download-title"];
  document.querySelector("footer p").textContent = elements[lang]["footer-text"];
  document.querySelector(".language-selector button:nth-child(1)").textContent = elements[lang]["language-es"];
  document.querySelector(".language-selector button:nth-child(2)").textContent = elements[lang]["language-en"];
  document.querySelector(".language-selector button:nth-child(3)").textContent = elements[lang]["language-pt"];
  
  const video = document.querySelector(".library-section video");
  if (video) {
    video.load();
  }
}