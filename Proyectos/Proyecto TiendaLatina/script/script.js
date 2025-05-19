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
        const serviciosMenu = document.querySelector('.servicios-container');
        const contactoMenu = document.getElementById('contacto-menu');
        
        if (serviciosMenu) serviciosMenu.style.display = 'none';
        if (contactoMenu) contactoMenu.style.display = 'none';
        
        // Restablecer icono
        if (menuToggle) {
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        }
    }

    function toggleIcon() {
        const icon = menuToggle.querySelector('i');
        if (icon) {
            if (navbar.classList.contains('active')) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        }
    }

    // 2. Menú de Servicios
    const serviciosLink = document.getElementById('servicios-link');
    const serviciosMenu = document.querySelector('.servicios-container');
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
                    closeOtherMenus('servicios');
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

    function closeOtherMenus(currentMenu) {
        const contactoMenu = document.getElementById('contacto-menu');
        
        if (currentMenu !== 'contacto' && contactoMenu) {
            contactoMenu.style.display = 'none';
        }
        
        if (currentMenu !== 'servicios' && serviciosMenu) {
            serviciosMenu.style.display = 'none';
        }
    }

    // 3. Menú de Contacto
    const contactoLink = document.getElementById('contacto-link');
    const contactoMenu = document.getElementById('contacto-menu');

    if (contactoLink && contactoMenu) {
        contactoLink.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            contactoMenu.style.display = contactoMenu.style.display === 'block' ? 'none' : 'block';
            if (contactoMenu.style.display === 'block') {
                closeOtherMenus('contacto');
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
                if (icon) {
                    icon.classList.replace('fa-times', 'fa-bars');
                }
            }
            
            // Asegurar que los menús se muestren correctamente en desktop
            if (serviciosMenu) serviciosMenu.style.display = 'flex';
            if (contactoMenu) contactoMenu.style.display = 'none';
            
            // Mostrar todas las categorías de servicios en desktop
            serviciosCategorias.forEach(cat => {
                cat.style.display = cat.classList.contains('active') ? 'flex' : 'none';
            });
        } else {
            // En móvil, asegurar que solo se muestre la categoría activa
            serviciosCategorias.forEach(cat => {
                if (cat.classList.contains('active')) {
                    cat.style.display = 'block';
                } else {
                    cat.style.display = 'none';
                }
            });
        }
    });

    // Inicialización
    if (window.innerWidth > 768 && serviciosMenu) {
        serviciosMenu.style.display = 'flex';
    }
    if (contactoMenu) {
        contactoMenu.style.display = 'none';
    }
});