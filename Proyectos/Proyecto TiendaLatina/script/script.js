document.addEventListener('DOMContentLoaded', function() {
    // Menú Hamburguesa
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    
    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
            menuToggle.innerHTML = navbar.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }
    
    // Menú de servicios con categorías
    document.addEventListener('DOMContentLoaded', function() {
    
        // Menú de servicios con categorías - VERSIÓN CORREGIDA
        const serviciosLink = document.getElementById('servicios-link');
        const serviciosMenu = document.getElementById('servicios-menu');
        const categoriaBtns = document.querySelectorAll('.categoria-btn');
        const serviciosCategorias = document.querySelectorAll('.servicios-categoria');
    
        if (serviciosLink && serviciosMenu) {
            // Mostrar/ocultar menú al hacer clic
            serviciosLink.addEventListener('click', function(e) {
                e.preventDefault();
                const isMobile = window.innerWidth <= 768;
                
                if (isMobile) {
                    serviciosMenu.style.display = serviciosMenu.style.display === 'flex' ? 'none' : 'flex';
                }
            });
    
            // Cambiar categorías - FUNCIÓN CORREGIDA
            categoriaBtns.forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    const categoria = this.dataset.categoria;
                    
                    // Remover clase active de todos los botones
                    categoriaBtns.forEach(b => b.classList.remove('active'));
                    // Añadir clase active al botón clickeado
                    this.classList.add('active');
                    
                    // Ocultar todas las categorías
                    serviciosCategorias.forEach(cat => {
                        cat.classList.remove('active');
                    });
                    
                    // Mostrar solo la categoría seleccionada
                    document.querySelector(`.servicios-categoria[data-categoria="${categoria}"]`).classList.add('active');
                });
            });
    
            // Cerrar al hacer clic fuera (solo móvil)
            document.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    if (!e.target.closest('.menu-servicios') && serviciosMenu.style.display === 'flex') {
                        serviciosMenu.style.display = 'none';
                    }
                }
            });
        }
    }
    
    // Cargar servicios de ejemplo
    const servicios = [
        { nombre: "Clases de Español", categoria: "Educación", precio: "15€/hora" },
        { nombre: "Reparaciones Eléctricas", categoria: "Hogar", precio: "25€/hora" },
        { nombre: "Catering Latino", categoria: "Eventos", precio: "30€/persona" },
        { nombre: "Peluquería", categoria: "Belleza", precio: "20€" },
        { nombre: "Limpieza Profunda", categoria: "Hogar", precio: "15€/hora" },
        { nombre: "Traducciones", categoria: "Educación", precio: "0.10€/palabra" }
    ];
    
    const servicesContainer = document.getElementById('services-container');
    
    if (servicesContainer) {
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
    }
    
    // Filtros de servicios
    document.querySelectorAll('.filtro-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            // Aquí iría la lógica real de filtrado
        });
    });

    // Menú de contacto
const contactoLink = document.getElementById('contacto-link');
const contactoMenu = document.getElementById('contacto-menu');

if (contactoLink && contactoMenu) {
    contactoLink.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Cerrar otros menús abiertos
        if (serviciosMenu) serviciosMenu.style.display = 'none';
        
        // Alternar menú de contacto
        contactoMenu.style.display = contactoMenu.style.display === 'block' ? 'none' : 'block';
    });
    
    // Cerrar al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.menu-contacto') && contactoMenu.style.display === 'block') {
            contactoMenu.style.display = 'none';
        }
    });
}
    
    // Animación GSAP para el hero
    if (window.innerWidth >= 768 && typeof gsap !== 'undefined') {
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
});