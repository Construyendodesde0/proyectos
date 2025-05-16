document.addEventListener('DOMContentLoaded', function() {
    // 1. Menú Hamburguesa Mejorado
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    const body = document.body;

    // Crear overlay para el menú
    if (!document.querySelector('.navbar-overlay')) {
        const overlay = document.createElement('div');
        overlay.className = 'navbar-overlay';
        document.body.appendChild(overlay);
        
        overlay.addEventListener('click', closeAllMenus);
    }

    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMenu();
        });
    }

    function toggleMenu() {
        navbar.classList.toggle('active');
        body.classList.toggle('menu-open');
        toggleIcon();
    }

    function closeAllMenus() {
        // Cerrar menú principal
        if (navbar) navbar.classList.remove('active');
        body.classList.remove('menu-open');
        
        // Cerrar otros menús
        if (serviciosMenu) serviciosMenu.style.display = 'none';
        if (contactoMenu) contactoMenu.style.display = 'none';
        
        // Restablecer icono
        if (menuToggle) {
            const icon = menuToggle.querySelector('i');
            icon.classList.replace('fa-times', 'fa-bars');
        }
    }

    function toggleIcon() {
        const icon = menuToggle.querySelector('i');
        if (navbar.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    }

    // 2. Menú de Servicios
    const serviciosLink = document.getElementById('servicios-link');
    const serviciosMenu = document.querySelector('.servicios-menu') || document.querySelector('.servicios-container');
    const categoriaBtns = document.querySelectorAll('.categoria-btn');
    const serviciosCategorias = document.querySelectorAll('.servicios-categoria');

    if (serviciosLink && serviciosMenu) {
        serviciosLink.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const isMobile = window.innerWidth <= 768;
            if (isMobile) {
                serviciosMenu.style.display = serviciosMenu.style.display === 'flex' ? 'none' : 'flex';
                if (serviciosMenu.style.display === 'flex') {
                    closeAllMenus();
                    navbar.classList.remove('active');
                }
            } else {
                serviciosMenu.style.display = 'flex';
            }
        });

        categoriaBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const categoria = this.getAttribute('data-categoria');

                categoriaBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                serviciosCategorias.forEach(cat => {
                    if (cat.getAttribute('data-categoria') === categoria) {
                        cat.classList.add('active');
                        cat.style.display = window.innerWidth <= 768 ? 'block' : 'flex';
                    } else {
                        cat.classList.remove('active');
                        cat.style.display = 'none';
                    }
                });
            });
        });

        // Mostrar primera categoría por defecto
        if (categoriaBtns.length > 0 && serviciosCategorias.length > 0) {
            categoriaBtns[0].click();
        }
    }

    // 3. Cargar servicios de ejemplo
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

    // 4. Filtros de servicios
    document.querySelectorAll('.filtro-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            // Aquí iría la lógica real de filtrado
        });
    });

    // 5. Menú de Contacto
    const contactoLink = document.getElementById('contacto-link');
    const contactoMenu = document.getElementById('contacto-menu');

    if (contactoLink && contactoMenu) {
        contactoLink.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            contactoMenu.style.display = contactoMenu.style.display === 'block' ? 'none' : 'block';
            if (serviciosMenu) serviciosMenu.style.display = 'none';
            if (contactoMenu.style.display === 'block') {
                closeAllMenus();
                navbar.classList.remove('active');
            }
        });
    }

    // Cerrar menús al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            // Menú de servicios
            if (serviciosMenu && !e.target.closest('.menu-servicios') && 
                !e.target.closest('#servicios-link') && 
                serviciosMenu.style.display === 'flex') {
                serviciosMenu.style.display = 'none';
            }
            
            // Menú de contacto
            if (contactoMenu && !e.target.closest('.menu-contacto') && 
                !e.target.closest('#contacto-link') && 
                contactoMenu.style.display === 'block') {
                contactoMenu.style.display = 'none';
            }
        }
    });

    // Cerrar menús al redimensionar a pantalla grande
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            if (navbar) navbar.classList.remove('active');
            body.classList.remove('menu-open');
            if (menuToggle) {
                const icon = menuToggle.querySelector('i');
                icon.classList.replace('fa-times', 'fa-bars');
            }
        }
    });
});