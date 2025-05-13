document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    
    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', () => {
            // Alternar clase 'active' en el navbar
            navbar.classList.toggle('active');
            
            // Cambiar ícono (hamburguesa a X)
            const icon = menuToggle.querySelector('i');
            if (navbar.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
});
    // Menú de servicios con categorías - VERSIÓN FUNCIONAL
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
            } else {
                serviciosMenu.style.display = 'flex'; // Siempre mostrar en desktop
            }
        });

        // Cambiar categorías - VERSIÓN CORREGIDA
        categoriaBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const categoria = this.getAttribute('data-categoria');
                
                // Remover clase active de todos los botones
                categoriaBtns.forEach(b => b.classList.remove('active'));
                // Añadir clase active al botón clickeado
                this.classList.add('active');
                
                // Ocultar todas las categorías y mostrar solo la seleccionada
                serviciosCategorias.forEach(cat => {
                    if (cat.getAttribute('data-categoria') === categoria) {
                        cat.classList.add('active');
                        cat.style.display = 'block';
                    } else {
                        cat.classList.remove('active');
                        cat.style.display = 'none';
                    }
                });
            });
        });

        // Inicializar mostrando la primera categoría
        if (categoriaBtns.length > 0 && serviciosCategorias.length > 0) {
            categoriaBtns[0].click(); // Simular click en el primer botón
        }

        // Cerrar al hacer clic fuera (solo móvil)
        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                if (!e.target.closest('.menu-servicios') && 
                    !e.target.closest('#servicios-link') && 
                    serviciosMenu.style.display === 'flex') {
                    serviciosMenu.style.display = 'none';
                }
            }
        });
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
            if (!e.target.closest('.menu-contacto') && !e.target.closest('#contacto-link') && contactoMenu.style.display === 'block') {
                contactoMenu.style.display = 'none';
            }
        });
    }
    
   