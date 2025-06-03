document.addEventListener('DOMContentLoaded', function () {

// Control del panel de emprendedores
        const btnEmprendedor = document.getElementById('btnEmprendedor');
        const panelEmprendedor = document.getElementById('panelEmprendedor');
        const cerrarPanel = document.getElementById('cerrarPanel');
        const btnMostrarQR = document.getElementById('btnMostrarQR');
        const cryptoSection = document.getElementById('cryptoSection');

        btnEmprendedor.addEventListener('click', () => {
            panelEmprendedor.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });

        cerrarPanel.addEventListener('click', () => {
            panelEmprendedor.style.display = 'none';
            cryptoSection.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        btnMostrarQR.addEventListener('click', () => {
            cryptoSection.style.display = cryptoSection.style.display === 'block' ? 'none' : 'block';
        });
    });

    const btnMbway = document.getElementById('btnMbway');
const mbwaySection = document.getElementById('mbwaySection');

btnMbway.addEventListener('click', () => {
    mbwaySection.style.display = mbwaySection.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('DOMContentLoaded', function() {
    const categorias = document.querySelectorAll('.categoria-servicios');
    const mainContainer = document.querySelector('.servicios-main');
    
    // Opción: Abrir primera categoría por defecto (opcional)
    if (categorias.length > 0) {
        abrirCategoria(categorias[0]);
    }
    
    categorias.forEach(categoria => {
        const header = categoria.querySelector('.categoria-header');
        
        header.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Cierra todas las demás categorías primero (opcional)
            // categorias.forEach(cat => {
            //     if (cat !== categoria) {
            //         cerrarCategoria(cat);
            //     }
            // });
            
            // Alternar la categoría clickeada
            if (categoria.classList.contains('active')) {
                cerrarCategoria(categoria);
            } else {
                abrirCategoria(categoria);
            }
            
            // Ajustar el layout
            requestAnimationFrame(() => {
                ajustarLayout();
            });
        });
    });
    
    function abrirCategoria(categoria) {
        categoria.classList.add('active');
        const contenido = categoria.querySelector('.servicios-contenido');
        contenido.style.maxHeight = contenido.scrollHeight + 'px';
    }
    
    function cerrarCategoria(categoria) {
        categoria.classList.remove('active');
        categoria.querySelector('.servicios-contenido').style.maxHeight = '0';
    }
    
    function ajustarLayout() {
        // Esta función asegura que el contenedor principal tenga espacio suficiente
        let alturaTotal = 0;
        
        categorias.forEach(cat => {
            alturaTotal += cat.offsetHeight;
        });
        
        mainContainer.style.minHeight = alturaTotal + 'px';
        
        // Forzar reflow en los elementos vecinos
        categorias.forEach(cat => {
            cat.style.transform = 'translateZ(0)';
        });
    }
    
    // Manejar redimensionamiento de ventana
    window.addEventListener('resize', function() {
        categorias.forEach(categoria => {
            if (categoria.classList.contains('active')) {
                const contenido = categoria.querySelector('.servicios-contenido');
                contenido.style.maxHeight = contenido.scrollHeight + 'px';
            }
        });
        ajustarLayout();
    });
});