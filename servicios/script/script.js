document.addEventListener('DOMContentLoaded', function() {
    // =============================================
    // AOS (Animate On Scroll) – Inicialización
    // =============================================
    AOS.init({
        once: false,          // Las animaciones pueden repetirse al hacer scroll hacia arriba
        duration: 600,        // Duración de la animación (en ms)
        easing: 'ease-in-out',
        delay: 0              // Sin delay; las tarjetas aparecerán al entrar en viewport
    });

    // Agregar atributo data-aos a cada sección de categoría con retraso incremental
    document.querySelectorAll('.categoria-servicios').forEach((el, i) => {
        el.setAttribute('data-aos', 'fade-in');
        el.setAttribute('data-aos-delay', 100 + i * 100);
    });

    // =============================================
    // 1. PANEL DE EMPRENDEDORES (Publica tu negocio)
    // =============================================
    const btnEmprendedor   = document.getElementById('btnEmprendedor');
    const panelEmprendedor = document.getElementById('panelEmprendedor');
    const cerrarPanel      = document.getElementById('cerrarPanel');
    const btnMostrarQR     = document.getElementById('btnMostrarQR');
    const cryptoSection    = document.getElementById('cryptoSection');
    const btnMbway         = document.getElementById('btnMbway');
    const mbwaySection     = document.getElementById('mbwaySection');

    // Abrir panel principal
    btnEmprendedor.addEventListener('click', () => {
        panelEmprendedor.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    // Cerrar panel principal
    cerrarPanel.addEventListener('click', () => {
        panelEmprendedor.style.display = 'none';
        cryptoSection.style.display      = 'none';
        mbwaySection.style.display       = 'none';
        document.body.style.overflow     = 'auto';
    });

    // Alternar sección de Crypto
    btnMostrarQR.addEventListener('click', () => {
        const isCryptoVisible = cryptoSection.style.display === 'block';
        cryptoSection.style.display = isCryptoVisible ? 'none' : 'block';
        mbwaySection.style.display  = 'none'; // Asegura que MB Way esté cerrado
    });

    // Alternar sección de MB Way
    btnMbway.addEventListener('click', () => {
        const isMbwayVisible = mbwaySection.style.display === 'block';
        mbwaySection.style.display = isMbwayVisible ? 'none' : 'block';
        cryptoSection.style.display = 'none'; // Asegura que Crypto esté cerrado
    });

    // =============================================
    // 2. ACORDEÓN DE CATEGORÍAS (Servicios)
    // =============================================
    const categorias = document.querySelectorAll('.categoria-servicios');

    // Cerrar todas las categorías al cargar la página
    categorias.forEach(categoria => {
        cerrarCategoria(categoria);

        // Evento click para cada encabezado de categoría
        const header = categoria.querySelector('.categoria-header');
        header.addEventListener('click', function(e) {
            e.stopPropagation();

            if (categoria.classList.contains('active')) {
                cerrarCategoria(categoria);
            } else {
                abrirCategoria(categoria);
            }
        });
    });

    // Función para abrir categoría
    function abrirCategoria(categoria) {
        categoria.classList.add('active');
        const contenido = categoria.querySelector('.servicios-contenido');
        contenido.style.maxHeight   = contenido.scrollHeight + 'px';
        contenido.style.opacity     = '1';
        contenido.style.visibility  = 'visible';
    }

    // Función para cerrar categoría
    function cerrarCategoria(categoria) {
        categoria.classList.remove('active');
        const contenido = categoria.querySelector('.servicios-contenido');
        contenido.style.maxHeight   = '0';
        contenido.style.opacity     = '0';
        contenido.style.visibility  = 'hidden';
    }

    // Ajustar alturas al redimensionar la ventana
    window.addEventListener('resize', function() {
        categorias.forEach(categoria => {
            if (categoria.classList.contains('active')) {
                const contenido = categoria.querySelector('.servicios-contenido');
                contenido.style.maxHeight = contenido.scrollHeight + 'px';
            }
        });
    });
});


// =============================================
// 3. FUNCIÓN DE CAMBIO DE IDIOMA
// =============================================
function changeLanguage(lang) {
    // Ejemplo de redireccionamiento a versiones por idioma
    switch (lang) {
        case 'es':
            window.location.href = '/es/index.html';
            break;
        case 'en':
            window.location.href = '/en/index.html';
            break;
        case 'pt':
            window.location.href = '/pt/index.html';
            break;
        default:
            console.warn('Idioma no soportado: ' + lang);
    }
}
