document.addEventListener('DOMContentLoaded', () => {
    // Elementos del DOM
    const contactTrigger = document.querySelector('.contact-trigger');
    const galleryTriggers = document.querySelectorAll('.gallery-trigger');
    
    // Modales
    const contactModal = document.getElementById('contact-modal');
    const peluqueriaGallery = document.getElementById('peluqueria-gallery');
    const pestanasGallery = document.getElementById('pestanas-gallery');
    const allModals = document.querySelectorAll('.modal-overlay');
    const closeButtons = document.querySelectorAll('.close-modal');

    // Función para abrir modales
    function openModal(modal) {
        // Cerrar todos los modales primero
        allModals.forEach(m => m.classList.remove('active'));
        // Abrir el modal solicitado
        modal.classList.add('active');
    }

    // Evento para el contacto
    contactTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(contactModal);
    });

    // Eventos para las galerías
    galleryTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const galleryType = trigger.dataset.gallery;
            const galleryModal = galleryType === 'peluqueria' ? peluqueriaGallery : pestanasGallery;
            openModal(galleryModal);
        });
    });

    // Cerrar modales
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal-overlay').classList.remove('active');
        });
    });

    // Cerrar al hacer clic fuera del contenido
    allModals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });

    // Configuración de WhatsApp (código existente)
    const selectBtns = document.querySelectorAll('.select-btn');
    selectBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const professionalCard = this.closest('.professional-card');
            const professional = professionalCard.dataset.professional;

            const whatsappNumbers = {
                'peluqueria': '351933597378',
                'pestanas': '351920223939'
            };

            const services = {
                'peluqueria': 'peluquería',
                'pestanas': 'pestañas/cejas'
            };

            const serviceName = services[professional];
            const whatsappNumber = whatsappNumbers[professional];
            const message = `Hola, estoy interesado/a en tus servicios de ${serviceName}`;

            window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
            contactModal.classList.remove('active');
        });
    });

    // Configuración de galerías (código existente)
    function setupGalleryControls(modal) {
        const slider = modal.querySelector('.gallery-slider');
        const slides = slider.querySelectorAll('.slide');
        let currentSlide = 0;
        
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
            currentSlide = index;
        }
        
        const prevBtn = modal.querySelector('.prev-btn');
        const nextBtn = modal.querySelector('.next-btn');
        
        prevBtn.addEventListener('click', () => {
            showSlide((currentSlide - 1 + slides.length) % slides.length);
        });
        
        nextBtn.addEventListener('click', () => {
            showSlide((currentSlide + 1) % slides.length);
        });
        
        showSlide(0);
    }

    // Configurar controles para cada galería
    setupGalleryControls(peluqueriaGallery);
    setupGalleryControls(pestanasGallery);

   
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
});