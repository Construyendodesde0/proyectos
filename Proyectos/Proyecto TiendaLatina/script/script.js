// Menú Hamburguesa
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuToggle.innerHTML = navbar.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Cerrar menú al hacer clic en un enlace (móvil)
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navbar.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});

// Dark Mode
const btnModo = document.querySelector('.btn-modo');
btnModo.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        btnModo.innerHTML = '<i class="fas fa-sun"></i>';
        document.documentElement.style.setProperty('--blanco', '#1D3557');
        document.documentElement.style.setProperty('--azul', '#F5F5F5');
    } else {
        btnModo.innerHTML = '<i class="fas fa-moon"></i>';
        document.documentElement.style.setProperty('--blanco', '#F5F5F5');
        document.documentElement.style.setProperty('--azul', '#1D3557');
    }
});

// Animación GSAP para el hero
if (window.innerWidth >= 768) {
    gsap.from(".hero-content h1", { 
        opacity: 0, 
        y: 50, 
        duration: 1, 
        delay: 0.5 
    });

    gsap.from(".cta-button", { 
        opacity: 0, 
        y: 50, 
        duration: 1, 
        delay: 1 
    });
}

// Filtros de servicios (simulado)
document.querySelectorAll('.filtro-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        // Aquí iría la lógica real de filtrado
    });
});

// Cargar servicios de ejemplo
const servicios = [
    { nombre: "Clases de Español", categoria: "Educación", precio: "15€/hora" },
    { nombre: "Reparaciones Eléctricas", categoria: "Hogar", precio: "25€/hora" },
    { nombre: "Catering Latino", categoria: "Eventos", precio: "30€/persona" }
];

const servicesContainer = document.getElementById('services-container');

servicios.forEach(servicio => {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.innerHTML = `
        <div class="card-content">
            <h3>${servicio.nombre}</h3>
            <p><i class="fas fa-tag"></i> ${servicio.categoria}</p>
            <p><i class="fas fa-euro-sign"></i> ${servicio.precio}</p>
        </div>
    `;
    servicesContainer.appendChild(card);
});