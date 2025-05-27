document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    const serviciosLink = document.getElementById('servicios-link');
    const serviciosMenu = document.querySelector('.servicios-container');
    const contactoLink = document.getElementById('contacto-link');
    const contactoMenu = document.getElementById('contacto-menu');
    const categoriaBtns = document.querySelectorAll('.categoria-btn');
    const serviciosCategorias = document.querySelectorAll('.servicios-categoria');

    // Crear overlay si no existe
    if (!document.querySelector('.navbar-overlay')) {
        const overlay = document.createElement('div');
        overlay.className = 'navbar-overlay';
        document.body.appendChild(overlay);
        overlay.addEventListener('click', closeAllMenus);
    }

    // Menú Hamburguesa
    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', function(e) {
         e.stopPropagation();
            const wasActive = navbar.classList.contains('active');
        
        // Cerrar todo primero
        closeAllMenus();
        
        // Abrir solo si no estaba activo previamente
        if (!wasActive) {
            navbar.classList.add('active');
            body.classList.add('menu-open');
            toggleIcon(true);
            
            // Resetear submenús
            contactoMenu.classList.remove('active');
            contactoMenu.style.display = 'none';
            serviciosMenu.style.display = 'none';
        }
    });
}


    function toggleIcon(isOpen) {
        const icon = menuToggle.querySelector('i');
        if (icon) {
            icon.classList.replace(isOpen ? 'fa-bars' : 'fa-times', isOpen ? 'fa-times' : 'fa-bars');
        }
    }

    // Mostrar/Ocultar Servicios en móviles
    if (serviciosLink && serviciosMenu) {
        serviciosLink.addEventListener('click', function(e) {
  if (window.innerWidth <= 768) {
    closeAllMenus();
  }
});
    }

    // Mostrar/Ocultar Contacto en móviles
    if (contactoLink && contactoMenu) {
    contactoLink.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Solo actuar si el menú principal está abierto
        if (navbar.classList.contains('active')) {
            const isContactActive = contactoMenu.classList.contains('active');
            
            // Paso 1: Cerrar otros submenús
            serviciosMenu.classList.remove('active');
            serviciosMenu.style.display = 'none';
            
            // Paso 2: Toggle estado contacto
            contactoMenu.classList.toggle('active');
            contactoMenu.style.display = isContactActive ? 'none' : 'block';
            
            // Paso 3: Posicionamiento solo en móvil
            if (window.innerWidth <= 768) {
                const rect = contactoLink.getBoundingClientRect();
                contactoMenu.style.top = `${rect.bottom}px`;
                contactoMenu.style.left = '50%';
                contactoMenu.style.transform = 'translateX(-50%)';
            }
        }
    });
}


        // Submenús: cerrar "Servicios" y "Contacto"
    function closeSubmenus() {
-       serviciosMenu?.classList.remove('active');
-       contactoMenu?.classList.remove('active');
+       // Quitamos la clase y reseteamos el display
+       serviciosMenu?.classList.remove('active');
+       serviciosMenu && (serviciosMenu.style.display = 'none');
+       contactoMenu?.classList.remove('active');
+       contactoMenu && (contactoMenu.style.display = 'none');
    }

    // Cerrar todo
    function closeAllMenus() {
-       navbar?.classList.remove('active');
-       body.classList.remove('menu-open');
-       toggleIcon(false);
-       closeSubmenus();
+       // Cerrar hamburguesa
+       navbar?.classList.remove('active');
+       body.classList.remove('menu-open');
+       toggleIcon(false);
+       // Cerrar submenús
+       closeSubmenus();
    }


    // Cerrar si clic fuera
    document.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
            const clickedInside = e.target.closest('.navbar, .menu-contacto, .menu-servicios');
            if (!clickedInside) closeAllMenus();
        }
    });

    // Categorías de Servicios
    categoriaBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const categoria = this.getAttribute('data-categoria');

            categoriaBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            serviciosCategorias.forEach(cat => {
                const matches = cat.getAttribute('data-categoria') === categoria;
                cat.classList.toggle('active', matches);
                cat.style.display = matches
                    ? (window.innerWidth <= 768 ? 'block' : 'flex')
                    : 'none';
            });
        });
    });

    // Activar la primera categoría al cargar
    if (categoriaBtns.length > 0) categoriaBtns[0].click();

    // Responder al resize
    window.addEventListener('resize', function () {
        const isMobile = window.innerWidth <= 768;

        if (!isMobile && serviciosMenu) {
            serviciosMenu.classList.add('active');
            serviciosMenu.style.display = 'flex';
        }

        if (isMobile) {
            serviciosMenu?.classList.remove('active');
            contactoMenu?.classList.remove('active');
        }

        serviciosCategorias.forEach(cat => {
            cat.style.display = cat.classList.contains('active')
                ? (isMobile ? 'block' : 'flex')
                : 'none';
        });
    });

    // Inicialización
    if (window.innerWidth > 768 && serviciosMenu) {
        serviciosMenu.classList.add('active');
        serviciosMenu.style.display = 'flex';
    }

    if (contactoMenu) contactoMenu.classList.remove('active');
});
