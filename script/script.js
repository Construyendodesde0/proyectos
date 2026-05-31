// =============================================
// TRADUCCIONES – página principal
// =============================================
const translations = {
    es: {
        titulo:             'Matanga la Changa! | Servicios al instante',
        bienvenida:         'Conectamos talento en Argentina',
        lema:               'Encontrá u ofrecé servicios con confianza.',
        serviciosPopulares: 'Servicios Populares',
        contacto:           'Contáctanos vía:',
        derechos:           '© 2026 Matanga la Changa!. Todos los derechos reservados.',
        menuInicio:         'Inicio',
        menuServicios:      'Servicios',
        menuContacto:       'Contacto',
        whatsapp:           'WhatsApp',
        abrirChat:          'Abrir Chat',
        instagram:          'Instagram',
        seguir:             'Seguir',
        explorarServicios:  'Explorar Servicios',
        'footer.legal':     '*Página destinada única y exclusivamente a la promoción de emprendimientos. No cobramos comisión por trabajos realizados.*',
        // Botones de categoría
        cat_belleza:    'Belleza',
        cat_hogar:      'Hogar',
        cat_educacion:  'Educación',
        cat_salud:      'Salud',
        cat_transporte: 'Transporte',
        cat_otros:      'Otros',
        // Listas de servicios
        categorias: {
            Belleza:    ['Peluquería', 'Barbería', 'Tintes', 'Maquillaje profesional', 'Depilación', 'Extensiones de pestañas', 'Masajes relajantes', 'Manicure/Pedicure'],
            Hogar:      ['Limpieza de hogar', 'Jardinería', 'Electricista', 'Plomería', 'Mudanzas', 'Cuidado de mascotas', 'Armado de muebles', 'Pintura de paredes'],
            Educacion:  ['Clases de portugués', 'Clases de inglés', 'Clases de matemáticas', 'Asesoría académica', 'Clases de música', 'Talleres de cocina', 'Tutorías para niños', 'Preparación de CV'],
            Salud:      ['Fisioterapia', 'Nutricionista', 'Entrenador personal', 'Terapia psicológica', 'Masajes terapéuticos', 'Acupuntura', 'Yoga a domicilio', 'Reiki'],
            Transporte: ['Transporte privado', 'Recogida en aeropuerto', 'Mensajería', 'Alquiler de camioneta', 'Traslados médicos', 'Servicio de taxi', 'Transporte para eventos', 'Guía turístico'],
            Otros:      ['Fotografía', 'Diseño gráfico', 'Reparación de celulares', 'Asesoría legal', 'Traducciones', 'Organización de eventos', 'Servicios IT', 'Venta de productos artesanales']
        }
    },
    en: {
        titulo:             'Matanga la Changa! | Services on demand',
        bienvenida:         'We connect talent in Argentina',
        lema:               'Find or offer services with confidence.',
        serviciosPopulares: 'Popular Services',
        contacto:           'Contact us via:',
        derechos:           '© 2026 Matanga la Changa!. All rights reserved.',
        menuInicio:         'Home',
        menuServicios:      'Services',
        menuContacto:       'Contact',
        whatsapp:           'WhatsApp',
        abrirChat:          'Open Chat',
        instagram:          'Instagram',
        seguir:             'Follow',
        explorarServicios:  'Explore Services',
        'footer.legal':     '*This page is solely intended for the promotion of entrepreneurship. We do not charge commission for completed jobs.*',
        cat_belleza:    'Beauty',
        cat_hogar:      'Home',
        cat_educacion:  'Education',
        cat_salud:      'Health',
        cat_transporte: 'Transport',
        cat_otros:      'Other',
        categorias: {
            Belleza:    ['Hair Salon', 'Barbershop', 'Hair Coloring', 'Professional Makeup', 'Waxing', 'Eyelash Extensions', 'Relaxing Massages', 'Manicure/Pedicure'],
            Hogar:      ['Home Cleaning', 'Gardening', 'Electrician', 'Plumbing', 'Moving', 'Pet Care', 'Furniture Assembly', 'Wall Painting'],
            Educacion:  ['Portuguese Classes', 'English Classes', 'Math Classes', 'Academic Advising', 'Music Classes', 'Cooking Workshops', 'Children Tutoring', 'CV Preparation'],
            Salud:      ['Physiotherapy', 'Nutritionist', 'Personal Trainer', 'Psychological Therapy', 'Therapeutic Massages', 'Acupuncture', 'Home Yoga', 'Reiki'],
            Transporte: ['Private Transport', 'Airport Pickup', 'Courier', 'Van Rental', 'Medical Transfers', 'Taxi Service', 'Event Transportation', 'Tourist Guide'],
            Otros:      ['Photography', 'Graphic Design', 'Phone Repair', 'Legal Advice', 'Translations', 'Event Organization', 'IT Services', 'Sale of Handicrafts']
        }
    },
    pt: {
        titulo:             'Matanga la Changa! | Serviços na hora',
        bienvenida:         'Conectamos talentos na Argentina',
        lema:               'Encontre ou ofereça serviços com confiança.',
        serviciosPopulares: 'Serviços Populares',
        contacto:           'Contacte-nos através de:',
        derechos:           '© 2026 Matanga la Changa!. Todos os direitos reservados.',
        menuInicio:         'Início',
        menuServicios:      'Serviços',
        menuContacto:       'Contato',
        whatsapp:           'WhatsApp',
        abrirChat:          'Abrir Chat',
        instagram:          'Instagram',
        seguir:             'Seguir',
        explorarServicios:  'Explorar Serviços',
        'footer.legal':     '*Página destinada única e exclusivamente à promoção de empreendimentos. Não cobramos comissão por trabalhos realizados.*',
        cat_belleza:    'Beleza',
        cat_hogar:      'Lar',
        cat_educacion:  'Educação',
        cat_salud:      'Saúde',
        cat_transporte: 'Transporte',
        cat_otros:      'Outros',
        categorias: {
            Belleza:    ['Cabeleireiro', 'Barbearia', 'Tintura', 'Maquiagem profissional', 'Depilação', 'Extensão de cílios', 'Massagens relaxantes', 'Manicure/Pedicure'],
            Hogar:      ['Limpeza de casa', 'Jardinagem', 'Eletricista', 'Encanamento', 'Mudanças', 'Cuidado de animais', 'Montagem de móveis', 'Pintura de paredes'],
            Educacion:  ['Aulas de português', 'Aulas de inglês', 'Aulas de matemática', 'Assessoria acadêmica', 'Aulas de música', 'Oficinas de culinária', 'Aulas particulares para crianças', 'Preparação de CV'],
            Salud:      ['Fisioterapia', 'Nutricionista', 'Personal Trainer', 'Terapia psicológica', 'Massagens terapêuticas', 'Acupuntura', 'Yoga em domicílio', 'Reiki'],
            Transporte: ['Transporte privado', 'Recepção no aeroporto', 'Mensageiro', 'Aluguel de van', 'Transferências médicas', 'Serviço de táxi', 'Transporte para eventos', 'Guia turístico'],
            Otros:      ['Fotografia', 'Design gráfico', 'Reparo de celulares', 'Assessoria jurídica', 'Traduções', 'Organização de eventos', 'Serviços de TI', 'Venda de produtos artesanais']
        }
    }
};

// =============================================
// FUNCIÓN CAMBIAR IDIOMA
// =============================================
function changeLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    // Título de la pestaña
    document.title = t.titulo;

    // Elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.textContent = t[key];
    });

    // Botones de categoría (tienen data-i18n)
    // ya cubiertos por el bucle anterior

    // Listas de servicios (data-translate="Categoria.index")
    document.querySelectorAll('[data-translate]').forEach(el => {
        const [categoria, index] = el.getAttribute('data-translate').split('.');
        const texto = t.categorias?.[categoria]?.[parseInt(index)];
        if (texto !== undefined) el.textContent = texto;
    });

    // Guardar preferencia
    localStorage.setItem('language', lang);
}

// =============================================
// FUNCIONES DE MENÚ
// =============================================
function closeSubmenus() {
    const contactoMenu = document.getElementById('contacto-menu');
    contactoMenu?.classList.remove('visible');
}

function closeAllMenus() {
    const navbar   = document.querySelector('.navbar');
    const body     = document.body;
    navbar?.classList.remove('active');
    body.classList.remove('menu-open');
    toggleIcon(false);
    closeSubmenus();
}

function toggleIcon(isOpen) {
    const icon = document.querySelector('.menu-toggle i');
    if (!icon) return;
    if (isOpen) {
        icon.classList.replace('fa-bars', 'fa-times');
    } else {
        icon.classList.replace('fa-times', 'fa-bars');
    }
}

// =============================================
// DOM READY
// =============================================
document.addEventListener('DOMContentLoaded', function () {

    // AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, offset: 100, easing: 'ease-in-out', once: true });
    }

    // Idioma guardado
    const savedLang = localStorage.getItem('language') || 'es';
    changeLanguage(savedLang);

    // ---- Menú contacto (desktop) ----
    const contactoLink  = document.getElementById('contacto-link');
    const contactoMenu  = document.getElementById('contacto-menu');
    const contactoModal = document.getElementById('contacto-modal');
    const closeBtn      = document.getElementById('contacto-modal-close');

    if (contactoLink && contactoMenu) {
        contactoLink.addEventListener('click', function (e) {
            e.preventDefault();
            if (window.innerWidth > 768) {
                contactoMenu.classList.toggle('visible');
            }
        });

        document.addEventListener('click', function (e) {
            if (!contactoLink.contains(e.target) && !contactoMenu.contains(e.target)) {
                contactoMenu.classList.remove('visible');
            }
        });
    }

    // ---- Modal contacto (móvil) ----
    if (contactoLink && contactoModal && closeBtn) {
        contactoLink.addEventListener('click', function (e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                contactoModal.classList.add('open');
            }
        });

        closeBtn.addEventListener('click', () => contactoModal.classList.remove('open'));
        contactoModal.querySelector('.contacto-modal__backdrop')
            ?.addEventListener('click', () => contactoModal.classList.remove('open'));
    }

    // ---- Menú hamburguesa ----
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar     = document.querySelector('.navbar');
    const body       = document.body;

    // Overlay para cerrar al tocar fuera
    if (!document.querySelector('.navbar-overlay')) {
        const overlay = document.createElement('div');
        overlay.className = 'navbar-overlay';
        document.body.appendChild(overlay);
        overlay.addEventListener('click', closeAllMenus);
    }

    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            const wasActive = navbar.classList.contains('active');
            closeAllMenus();
            if (!wasActive) {
                navbar.classList.add('active');
                body.classList.add('menu-open');
                toggleIcon(true);
            }
        });
    }

    // Cerrar menú al navegar (móvil)
    document.querySelectorAll('.nav-list a, .language-buttons button').forEach(el => {
        el.addEventListener('click', () => {
            if (window.innerWidth <= 768) closeAllMenus();
        });
    });

    // Cerrar si clic fuera del navbar
    document.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
            if (!e.target.closest('.navbar, .menu-toggle, .menu-contacto')) {
                closeAllMenus();
            }
        }
    });

    // ---- Categorías de servicios ----
    const categoriaBtns      = document.querySelectorAll('.categoria-btn');
    const serviciosCategorias = document.querySelectorAll('.servicios-categoria');

    function activarCategoria(categoria) {
        categoriaBtns.forEach(b => b.classList.remove('active'));
        document.querySelector(`.categoria-btn[data-categoria="${categoria}"]`)?.classList.add('active');

        serviciosCategorias.forEach(cat => {
            const matches = cat.getAttribute('data-categoria') === categoria;
            cat.classList.toggle('active', matches);
            cat.style.display = matches
                ? (window.innerWidth <= 768 ? 'block' : 'flex')
                : 'none';
        });
    }

    categoriaBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            activarCategoria(this.getAttribute('data-categoria'));
        });
    });

    // Activar primera categoría al cargar
    if (categoriaBtns.length > 0) {
        activarCategoria(categoriaBtns[0].getAttribute('data-categoria'));
    }

    // Ajustar display al redimensionar
    window.addEventListener('resize', function () {
        const isMobile = window.innerWidth <= 768;
        serviciosCategorias.forEach(cat => {
            if (cat.classList.contains('active')) {
                cat.style.display = isMobile ? 'block' : 'flex';
            }
        });
    });
});