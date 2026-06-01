document.addEventListener('DOMContentLoaded', function () {

    AOS.init({
        once: false,
        duration: 600,
        easing: 'ease-in-out',
        delay: 0
    });

    document.querySelectorAll('.categoria-servicios').forEach((el, i) => {
        el.setAttribute('data-aos', 'fade-in');
        el.setAttribute('data-aos-delay', 100 + i * 100);
    });

    // =============================================
    // PANEL DE EMPRENDEDORES
    // =============================================
    const btnEmprendedor   = document.getElementById('btnEmprendedor');
    const panelEmprendedor = document.getElementById('panelEmprendedor');
    const cerrarPanel      = document.getElementById('cerrarPanel');
    const btnMostrarQR     = document.getElementById('btnMostrarQR');
    const cryptoSection    = document.getElementById('cryptoSection');
    const btnMbway         = document.getElementById('btnMbway');
    const mbwaySection     = document.getElementById('mbwaySection');

    btnEmprendedor.addEventListener('click', () => {
        panelEmprendedor.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    cerrarPanel.addEventListener('click', () => {
        panelEmprendedor.style.display = 'none';
        cryptoSection.style.display    = 'none';
        mbwaySection.style.display     = 'none';
        document.body.style.overflow   = 'auto';
    });

    btnMostrarQR.addEventListener('click', () => {
        const visible = cryptoSection.style.display === 'block';
        cryptoSection.style.display = visible ? 'none' : 'block';
        mbwaySection.style.display  = 'none';
    });

    btnMbway.addEventListener('click', () => {
        const visible = mbwaySection.style.display === 'block';
        mbwaySection.style.display  = visible ? 'none' : 'block';
        cryptoSection.style.display = 'none';
    });

    // =============================================
    // ACORDEÓN DE CATEGORÍAS
    // =============================================
    const categorias = document.querySelectorAll('.categoria-servicios');

    categorias.forEach(categoria => {
        cerrarCategoria(categoria);

        const header = categoria.querySelector('.categoria-header');
        header.addEventListener('click', function (e) {
            e.stopPropagation();
            if (categoria.classList.contains('active')) {
                cerrarCategoria(categoria);
            } else {
                abrirCategoria(categoria);
            }
        });
    });

    function abrirCategoria(categoria) {
        categoria.classList.add('active');
        const contenido = categoria.querySelector('.servicios-contenido');
        contenido.style.maxHeight  = contenido.scrollHeight + 'px';
        contenido.style.opacity    = '1';
        contenido.style.visibility = 'visible';
    }

    function cerrarCategoria(categoria) {
        categoria.classList.remove('active');
        const contenido = categoria.querySelector('.servicios-contenido');
        contenido.style.maxHeight  = '0';
        contenido.style.opacity    = '0';
        contenido.style.visibility = 'hidden';
    }

    window.addEventListener('resize', function () {
        categorias.forEach(categoria => {
            if (categoria.classList.contains('active')) {
                const contenido = categoria.querySelector('.servicios-contenido');
                contenido.style.maxHeight = contenido.scrollHeight + 'px';
            }
        });
    });

    // =============================================
    // TRADUCCIONES
    // =============================================
    const translations = {
        'es': {
            'page_title': 'Matanga la Changa! | Nuestros Servicios',
            'discover_services': 'Descubre Nuestros Servicios',
            'lang_es': 'ES', 'lang_en': 'EN', 'lang_pt': 'PT',
            'publish_business': 'Publica tu negocio',
            'appear_here': '¿Quieres aparecer aquí?',
            'your_name': 'Tu nombre',
            'business_name': 'Nombre del negocio',
            'whatsapp': 'WhatsApp',
            'select_category': 'Selecciona tu categoría',
            'beauty': 'Belleza', 'home': 'Hogar', 'education': 'Educación',
            'health': 'Salud', 'transport': 'Transporte', 'other': 'Otros',
            'request_info': 'Solicitar información',
            'pay_crypto': 'Pagar con crypto',
            'view_options': 'Ver opciones',
            'pay_mp': 'Pagar con MercadoPago',
            'pay_with_mp': 'Pagar con MP',
            'usdc_payment': 'Pago con USDC',
            'one_month': '1 mes', 'one_year': '1 año',
            'send_receipt': 'Enviar comprobante',
            'mp_payment': 'Pago con MercadoPago',
            'mbway_number': 'Alias MP: matanga.la.changa',
            'popular': 'Popular', 'new': 'Nuevo',
            'other_services': 'Otros Servicios',
            'footer_text': '© 2026 Matanga la Changa!. Todos los derechos reservados.',

            // Belleza
            'beauty_hair_salon': 'Peluquería',
            'beauty_hair_salon_desc': 'Cortes, peinados y tratamientos capilares profesionales',
            'beauty_hair_salon_price': 'Desde $10.000',
            'beauty_barber': 'Barbería',
            'beauty_barber_desc': 'Cortes clásicos y modernos para hombre',
            'beauty_barber_price': 'Desde $10.000',
            'beauty_hair_coloring': 'Tintes',
            'beauty_hair_coloring_desc': 'Coloración profesional con productos de calidad',
            'beauty_hair_coloring_price': 'Desde $25.000',
            'beauty_makeup': 'Maquillaje profesional',
            'beauty_makeup_desc': 'Para eventos especiales, bodas y ocasiones importantes',
            'beauty_makeup_price': 'Desde $35.000',
            'beauty_waxing': 'Depilación',
            'beauty_waxing_desc': 'Técnicas modernas de depilación indolora',
            'beauty_waxing_price': 'Desde $25.000',
            'beauty_eyelashes': 'Extensiones de pestañas',
            'beauty_eyelashes_desc': 'Pestañas postizas de alta calidad',
            'beauty_eyelashes_price': 'Desde $20.000',
            'beauty_massage': 'Masajes relajantes',
            'beauty_massage_desc': 'Terapia de relajación muscular',
            'beauty_massage_price': 'Desde $15.000/hora',
            'beauty_manicure': 'Manicure/Pedicure',
            'beauty_manicure_desc': 'Cuidado profesional de uñas',
            'beauty_manicure_price': 'Desde $10.000',

            // Hogar
            'home_cleaning': 'Limpieza de hogar',
            'home_cleaning_desc': 'Limpieza profesional de todas las áreas de su hogar',
            'home_cleaning_price': 'Desde $7.000/hora',
            'home_gardening': 'Jardinería',
            'home_gardening_desc': 'Mantenimiento de jardines y áreas verdes',
            'home_gardening_price': 'Desde $10.000/hora',
            'home_electrician': 'Electricista',
            'home_electrician_desc': 'Reparaciones e instalaciones eléctricas',
            'home_electrician_price': 'Desde $10.000/hora',
            'home_plumbing': 'Plomería',
            'home_plumbing_desc': 'Reparación de cañerías y problemas de agua',
            'home_plumbing_price': 'Desde $15.000/hora',
            'home_moving': 'Mudanzas',
            'home_moving_desc': 'Servicio completo de mudanzas con personal calificado',
            'home_moving_price': 'Desde $50.000',
            'home_pets': 'Cuidado de mascotas',
            'home_pets_desc': 'Paseo y cuidado de sus animales',
            'home_pets_price': 'Desde $10.000/hora',
            'home_furniture': 'Armado de muebles',
            'home_furniture_desc': 'Ensamblaje profesional de todo tipo de muebles',
            'home_furniture_price': 'Desde $15.000/hora',
            'home_painting': 'Pintura de paredes',
            'home_painting_desc': 'Pintura interior y exterior con acabados perfectos',
            'home_painting_price': 'Desde $10.000/m²',

            // Educación
            'edu_portuguese': 'Clases de portugués',
            'edu_portuguese_desc': 'Clases personalizadas para todos los niveles',
            'edu_portuguese_price': 'Desde $10.000/hora',
            'edu_english': 'Clases de inglés',
            'edu_english_desc': 'Enfoque comunicativo para aprender rápido',
            'edu_english_price': 'Desde $10.000/hora',
            'edu_math': 'Clases de matemáticas',
            'edu_math_desc': 'Apoyo escolar y universitario',
            'edu_math_price': 'Desde $12.000/hora',
            'edu_academic': 'Asesoría académica',
            'edu_academic_desc': 'Orientación para trabajos y proyectos',
            'edu_academic_price': 'Desde $15.000/hora',
            'edu_music': 'Clases de música',
            'edu_music_desc': 'Piano, guitarra, canto y más',
            'edu_music_price': 'Desde $15.000/hora',
            'edu_cooking': 'Talleres de cocina',
            'edu_cooking_desc': 'Aprende a cocinar como un profesional',
            'edu_cooking_price': 'Desde $35.000/sesión',
            'edu_tutoring': 'Tutorías para niños',
            'edu_tutoring_desc': 'Apoyo escolar personalizado',
            'edu_tutoring_price': 'Desde $15.000/hora',
            'edu_cv': 'Preparación de CV',
            'edu_cv_desc': 'Crea un currículum que destaque',
            'edu_cv_price': 'Desde $5.000',

            // Salud
            'health_physio': 'Fisioterapia',
            'health_physio_desc': 'Rehabilitación y tratamiento de lesiones',
            'health_physio_price': 'Desde $20.000/sesión',
            'health_nutrition': 'Nutricionista',
            'health_nutrition_desc': 'Planes alimenticios personalizados',
            'health_nutrition_price': 'Desde $20.000/consulta',
            'health_trainer': 'Entrenador personal',
            'health_trainer_desc': 'Rutinas de ejercicio a medida',
            'health_trainer_price': 'Desde $20.000/sesión',
            'health_therapy': 'Terapia psicológica',
            'health_therapy_desc': 'Apoyo emocional y mental',
            'health_therapy_price': 'Desde $15.000/sesión',
            'health_massage': 'Masajes terapéuticos',
            'health_massage_desc': 'Alivio de tensiones y dolores musculares',
            'health_massage_price': 'Desde $25.000/hora',
            'health_acupuncture': 'Acupuntura',
            'health_acupuncture_desc': 'Terapia alternativa para diversos males',
            'health_acupuncture_price': 'Desde $20.000/sesión',
            'health_yoga': 'Yoga a domicilio',
            'health_yoga_desc': 'Clases personalizadas en tu hogar',
            'health_yoga_price': 'Desde $15.000/sesión',
            'health_reiki': 'Reiki',
            'health_reiki_desc': 'Terapia energética para bienestar',
            'health_reiki_price': 'Desde $15.000/sesión',

            // Transporte
            'transport_private': 'Transporte privado',
            'transport_private_desc': 'Traslados seguros y puntuales',
            'transport_private_price': 'Desde $2.000/km',
            'transport_airport': 'Recogida en aeropuerto',
            'transport_airport_desc': 'Servicio puerta a puerta',
            'transport_airport_price': 'Desde $25.000',
            'transport_courier': 'Mensajería',
            'transport_courier_desc': 'Entrega rápida de paquetes',
            'transport_courier_price': 'Desde $10.000',
            'transport_van': 'Alquiler de camioneta',
            'transport_van_desc': 'Para mudanzas o transporte de mercadería',
            'transport_van_price': 'Desde $40.000/día',
            'transport_medical': 'Traslados médicos',
            'transport_medical_desc': 'Ambulancia no urgente',
            'transport_medical_price': 'Desde $40.000',
            'transport_taxi': 'Servicio de taxi',
            'transport_taxi_desc': '24 horas los 7 días de la semana',
            'transport_taxi_price': 'Según taxímetro',
            'transport_events': 'Transporte para eventos',
            'transport_events_desc': 'Bodas, fiestas y convenciones',
            'transport_events_price': 'Desde $50.000',
            'transport_guide': 'Guía turístico',
            'transport_guide_desc': 'Conoce la ciudad con expertos',
            'transport_guide_price': 'Desde $20.000/hora',

            // Otros
            'other_photo': 'Fotografía',
            'other_photo_desc': 'Sesiones profesionales para eventos',
            'other_photo_price': 'Desde $30.000',
            'other_design': 'Diseño gráfico',
            'other_design_desc': 'Logos, folletos y material publicitario',
            'other_design_price': 'Desde $25.000',
            'other_phone': 'Reparación de celulares',
            'other_phone_desc': 'Pantallas, baterías y problemas de software',
            'other_phone_price': 'Desde $15.000',
            'other_legal': 'Asesoría legal',
            'other_legal_desc': 'Consulta con profesionales del derecho',
            'other_legal_price': 'Desde $40.000/hora',
            'other_translation': 'Traducciones',
            'other_translation_desc': 'Documentos oficiales y técnicos',
            'other_translation_price': 'Desde $500/palabra',
            'other_events': 'Organización de eventos',
            'other_events_desc': 'Bodas, cumpleaños y eventos corporativos',
            'other_events_price': 'Desde $100.000',
            'other_it': 'Servicios IT',
            'other_it_desc': 'Soporte técnico y desarrollo web',
            'other_it_price': 'Desde $20.000/hora',
            'other_crafts': 'Venta de productos artesanales',
            'other_crafts_desc': 'Arte y manualidades únicas',
            'other_crafts_price': 'Precios variables'
        },
        'en': {
            'page_title': 'Matanga la Changa! | Our Services',
            'discover_services': 'Discover Our Services',
            'lang_es': 'ES', 'lang_en': 'EN', 'lang_pt': 'PT',
            'publish_business': 'Publish your business',
            'appear_here': 'Do you want to appear here?',
            'your_name': 'Your name',
            'business_name': 'Business name',
            'whatsapp': 'WhatsApp',
            'select_category': 'Select your category',
            'beauty': 'Beauty', 'home': 'Home', 'education': 'Education',
            'health': 'Health', 'transport': 'Transport', 'other': 'Other',
            'request_info': 'Request information',
            'pay_crypto': 'Pay with crypto',
            'view_options': 'View options',
            'pay_mp': 'Pay with MercadoPago',
            'pay_with_mp': 'Pay with MP',
            'usdc_payment': 'Payment with USDC',
            'one_month': '1 month', 'one_year': '1 year',
            'send_receipt': 'Send receipt',
            'mp_payment': 'Payment with MercadoPago',
            'mbway_number': 'MP Alias: matanga.la.changa',
            'popular': 'Popular', 'new': 'New',
            'other_services': 'Other Services',
            'footer_text': '© 2026 Matanga la Changa!. All rights reserved.',

            // Beauty
            'beauty_hair_salon': 'Hair Salon',
            'beauty_hair_salon_desc': 'Professional haircuts, hairstyles and hair treatments',
            'beauty_hair_salon_price': 'From $10,000',
            'beauty_barber': 'Barbershop',
            'beauty_barber_desc': "Classic and modern men's haircuts",
            'beauty_barber_price': 'From $10,000',
            'beauty_hair_coloring': 'Hair Coloring',
            'beauty_hair_coloring_desc': 'Professional coloring with quality products',
            'beauty_hair_coloring_price': 'From $25,000',
            'beauty_makeup': 'Professional Makeup',
            'beauty_makeup_desc': 'For special events, weddings and important occasions',
            'beauty_makeup_price': 'From $35,000',
            'beauty_waxing': 'Waxing',
            'beauty_waxing_desc': 'Modern painless hair removal techniques',
            'beauty_waxing_price': 'From $25,000',
            'beauty_eyelashes': 'Eyelash Extensions',
            'beauty_eyelashes_desc': 'High quality false eyelashes',
            'beauty_eyelashes_price': 'From $20,000',
            'beauty_massage': 'Relaxing Massages',
            'beauty_massage_desc': 'Muscle relaxation therapy',
            'beauty_massage_price': 'From $15,000/hour',
            'beauty_manicure': 'Manicure/Pedicure',
            'beauty_manicure_desc': 'Professional nail care',
            'beauty_manicure_price': 'From $10,000',

            // Home
            'home_cleaning': 'Home Cleaning',
            'home_cleaning_desc': 'Professional cleaning of all areas of your home',
            'home_cleaning_price': 'From $7,000/hour',
            'home_gardening': 'Gardening',
            'home_gardening_desc': 'Maintenance of gardens and green areas',
            'home_gardening_price': 'From $10,000/hour',
            'home_electrician': 'Electrician',
            'home_electrician_desc': 'Electrical repairs and installations',
            'home_electrician_price': 'From $10,000/hour',
            'home_plumbing': 'Plumbing',
            'home_plumbing_desc': 'Pipe repair and water problems',
            'home_plumbing_price': 'From $15,000/hour',
            'home_moving': 'Moving',
            'home_moving_desc': 'Complete moving service with qualified personnel',
            'home_moving_price': 'From $50,000',
            'home_pets': 'Pet Care',
            'home_pets_desc': 'Walking and care of your animals',
            'home_pets_price': 'From $10,000/hour',
            'home_furniture': 'Furniture Assembly',
            'home_furniture_desc': 'Professional assembly of all types of furniture',
            'home_furniture_price': 'From $15,000/hour',
            'home_painting': 'Wall Painting',
            'home_painting_desc': 'Interior and exterior painting with perfect finishes',
            'home_painting_price': 'From $10,000/m²',

            // Education
            'edu_portuguese': 'Portuguese Classes',
            'edu_portuguese_desc': 'Personalized classes for all levels',
            'edu_portuguese_price': 'From $10,000/hour',
            'edu_english': 'English Classes',
            'edu_english_desc': 'Communicative approach to learn quickly',
            'edu_english_price': 'From $10,000/hour',
            'edu_math': 'Math Classes',
            'edu_math_desc': 'School and university support',
            'edu_math_price': 'From $12,000/hour',
            'edu_academic': 'Academic Advising',
            'edu_academic_desc': 'Guidance for papers and projects',
            'edu_academic_price': 'From $15,000/hour',
            'edu_music': 'Music Classes',
            'edu_music_desc': 'Piano, guitar, singing and more',
            'edu_music_price': 'From $15,000/hour',
            'edu_cooking': 'Cooking Workshops',
            'edu_cooking_desc': 'Learn to cook like a professional',
            'edu_cooking_price': 'From $35,000/session',
            'edu_tutoring': 'Children Tutoring',
            'edu_tutoring_desc': 'Personalized school support',
            'edu_tutoring_price': 'From $15,000/hour',
            'edu_cv': 'CV Preparation',
            'edu_cv_desc': 'Create a standout resume',
            'edu_cv_price': 'From $5,000',

            // Health
            'health_physio': 'Physiotherapy',
            'health_physio_desc': 'Rehabilitation and injury treatment',
            'health_physio_price': 'From $20,000/session',
            'health_nutrition': 'Nutritionist',
            'health_nutrition_desc': 'Personalized meal plans',
            'health_nutrition_price': 'From $20,000/consultation',
            'health_trainer': 'Personal Trainer',
            'health_trainer_desc': 'Custom exercise routines',
            'health_trainer_price': 'From $20,000/session',
            'health_therapy': 'Psychological Therapy',
            'health_therapy_desc': 'Emotional and mental support',
            'health_therapy_price': 'From $15,000/session',
            'health_massage': 'Therapeutic Massages',
            'health_massage_desc': 'Relief of tension and muscle pain',
            'health_massage_price': 'From $25,000/hour',
            'health_acupuncture': 'Acupuncture',
            'health_acupuncture_desc': 'Alternative therapy for various ailments',
            'health_acupuncture_price': 'From $20,000/session',
            'health_yoga': 'Home Yoga',
            'health_yoga_desc': 'Personalized classes in your home',
            'health_yoga_price': 'From $15,000/session',
            'health_reiki': 'Reiki',
            'health_reiki_desc': 'Energy therapy for well-being',
            'health_reiki_price': 'From $15,000/session',

            // Transport
            'transport_private': 'Private Transport',
            'transport_private_desc': 'Safe and punctual transfers',
            'transport_private_price': 'From $2,000/km',
            'transport_airport': 'Airport Pickup',
            'transport_airport_desc': 'Door to door service',
            'transport_airport_price': 'From $25,000',
            'transport_courier': 'Courier',
            'transport_courier_desc': 'Fast package delivery',
            'transport_courier_price': 'From $10,000',
            'transport_van': 'Van Rental',
            'transport_van_desc': 'For moving or merchandise transport',
            'transport_van_price': 'From $40,000/day',
            'transport_medical': 'Medical Transfers',
            'transport_medical_desc': 'Non-emergency ambulance',
            'transport_medical_price': 'From $40,000',
            'transport_taxi': 'Taxi Service',
            'transport_taxi_desc': '24 hours a day, 7 days a week',
            'transport_taxi_price': 'According to taximeter',
            'transport_events': 'Event Transportation',
            'transport_events_desc': 'Weddings, parties and conventions',
            'transport_events_price': 'From $50,000',
            'transport_guide': 'Tourist Guide',
            'transport_guide_desc': 'Get to know the city with experts',
            'transport_guide_price': 'From $20,000/hour',

            // Other
            'other_photo': 'Photography',
            'other_photo_desc': 'Professional sessions for events',
            'other_photo_price': 'From $30,000',
            'other_design': 'Graphic Design',
            'other_design_desc': 'Logos, brochures and advertising material',
            'other_design_price': 'From $25,000',
            'other_phone': 'Phone Repair',
            'other_phone_desc': 'Screens, batteries and software problems',
            'other_phone_price': 'From $15,000',
            'other_legal': 'Legal Advice',
            'other_legal_desc': 'Consultation with legal professionals',
            'other_legal_price': 'From $40,000/hour',
            'other_translation': 'Translations',
            'other_translation_desc': 'Official and technical documents',
            'other_translation_price': 'From $500/word',
            'other_events': 'Event Organization',
            'other_events_desc': 'Weddings, birthdays and corporate events',
            'other_events_price': 'From $100,000',
            'other_it': 'IT Services',
            'other_it_desc': 'Technical support and web development',
            'other_it_price': 'From $20,000/hour',
            'other_crafts': 'Sale of Handicrafts',
            'other_crafts_desc': 'Unique art and crafts',
            'other_crafts_price': 'Variable prices'
        },
        'pt': {
            'page_title': 'Matanga la Changa! | Nossos Serviços',
            'discover_services': 'Descubra Nossos Serviços',
            'lang_es': 'ES', 'lang_en': 'EN', 'lang_pt': 'PT',
            'publish_business': 'Publique seu negócio',
            'appear_here': 'Quer aparecer aqui?',
            'your_name': 'Seu nome',
            'business_name': 'Nome do negócio',
            'whatsapp': 'WhatsApp',
            'select_category': 'Selecione sua categoria',
            'beauty': 'Beleza', 'home': 'Lar', 'education': 'Educação',
            'health': 'Saúde', 'transport': 'Transporte', 'other': 'Outros',
            'request_info': 'Solicitar informações',
            'pay_crypto': 'Pagar com cripto',
            'view_options': 'Ver opções',
            'pay_mp': 'Pagar com MercadoPago',
            'pay_with_mp': 'Pagar com MP',
            'usdc_payment': 'Pagamento com USDC',
            'one_month': '1 mês', 'one_year': '1 ano',
            'send_receipt': 'Enviar comprovante',
            'mp_payment': 'Pagamento com MercadoPago',
            'mbway_number': 'Alias MP: matanga.la.changa',
            'popular': 'Popular', 'new': 'Novo',
            'other_services': 'Outros Serviços',
            'footer_text': '© 2026 Matanga la Changa!. Todos os direitos reservados.',

            // Beleza
            'beauty_hair_salon': 'Cabeleireiro',
            'beauty_hair_salon_desc': 'Cortes, penteados e tratamentos capilares profissionais',
            'beauty_hair_salon_price': 'A partir de $10.000',
            'beauty_barber': 'Barbearia',
            'beauty_barber_desc': 'Cortes clássicos e modernos para homens',
            'beauty_barber_price': 'A partir de $10.000',
            'beauty_hair_coloring': 'Tintura',
            'beauty_hair_coloring_desc': 'Coloração profissional com produtos de qualidade',
            'beauty_hair_coloring_price': 'A partir de $25.000',
            'beauty_makeup': 'Maquiagem profissional',
            'beauty_makeup_desc': 'Para eventos especiais, casamentos e ocasiões importantes',
            'beauty_makeup_price': 'A partir de $35.000',
            'beauty_waxing': 'Depilação',
            'beauty_waxing_desc': 'Técnicas modernas de depilação indolor',
            'beauty_waxing_price': 'A partir de $25.000',
            'beauty_eyelashes': 'Extensão de cílios',
            'beauty_eyelashes_desc': 'Cílios postiços de alta qualidade',
            'beauty_eyelashes_price': 'A partir de $20.000',
            'beauty_massage': 'Massagens relaxantes',
            'beauty_massage_desc': 'Terapia de relaxamento muscular',
            'beauty_massage_price': 'A partir de $15.000/hora',
            'beauty_manicure': 'Manicure/Pedicure',
            'beauty_manicure_desc': 'Cuidado profissional com unhas',
            'beauty_manicure_price': 'A partir de $10.000',

            // Lar
            'home_cleaning': 'Limpeza de casa',
            'home_cleaning_desc': 'Limpeza profissional de todas as áreas da sua casa',
            'home_cleaning_price': 'A partir de $7.000/hora',
            'home_gardening': 'Jardinagem',
            'home_gardening_desc': 'Manutenção de jardins e áreas verdes',
            'home_gardening_price': 'A partir de $10.000/hora',
            'home_electrician': 'Eletricista',
            'home_electrician_desc': 'Reparos e instalações elétricas',
            'home_electrician_price': 'A partir de $10.000/hora',
            'home_plumbing': 'Encanamento',
            'home_plumbing_desc': 'Reparo de tubulações e problemas de água',
            'home_plumbing_price': 'A partir de $15.000/hora',
            'home_moving': 'Mudanças',
            'home_moving_desc': 'Serviço completo de mudanças com pessoal qualificado',
            'home_moving_price': 'A partir de $50.000',
            'home_pets': 'Cuidado de animais',
            'home_pets_desc': 'Passeio e cuidado de seus animais',
            'home_pets_price': 'A partir de $10.000/hora',
            'home_furniture': 'Montagem de móveis',
            'home_furniture_desc': 'Montagem profissional de todos os tipos de móveis',
            'home_furniture_price': 'A partir de $15.000/hora',
            'home_painting': 'Pintura de paredes',
            'home_painting_desc': 'Pintura interior e exterior com acabamentos perfeitos',
            'home_painting_price': 'A partir de $10.000/m²',

            // Educação
            'edu_portuguese': 'Aulas de português',
            'edu_portuguese_desc': 'Aulas personalizadas para todos os níveis',
            'edu_portuguese_price': 'A partir de $10.000/hora',
            'edu_english': 'Aulas de inglês',
            'edu_english_desc': 'Abordagem comunicativa para aprender rápido',
            'edu_english_price': 'A partir de $10.000/hora',
            'edu_math': 'Aulas de matemática',
            'edu_math_desc': 'Apoio escolar e universitário',
            'edu_math_price': 'A partir de $12.000/hora',
            'edu_academic': 'Assessoria acadêmica',
            'edu_academic_desc': 'Orientação para trabalhos e projetos',
            'edu_academic_price': 'A partir de $15.000/hora',
            'edu_music': 'Aulas de música',
            'edu_music_desc': 'Piano, guitarra, canto e mais',
            'edu_music_price': 'A partir de $15.000/hora',
            'edu_cooking': 'Oficinas de culinária',
            'edu_cooking_desc': 'Aprenda a cozinhar como um profissional',
            'edu_cooking_price': 'A partir de $35.000/sessão',
            'edu_tutoring': 'Aulas particulares para crianças',
            'edu_tutoring_desc': 'Apoio escolar personalizado',
            'edu_tutoring_price': 'A partir de $15.000/hora',
            'edu_cv': 'Preparação de CV',
            'edu_cv_desc': 'Crie um currículo que se destaque',
            'edu_cv_price': 'A partir de $5.000',

            // Saúde
            'health_physio': 'Fisioterapia',
            'health_physio_desc': 'Reabilitação e tratamento de lesões',
            'health_physio_price': 'A partir de $20.000/sessão',
            'health_nutrition': 'Nutricionista',
            'health_nutrition_desc': 'Planos alimentares personalizados',
            'health_nutrition_price': 'A partir de $20.000/consulta',
            'health_trainer': 'Personal Trainer',
            'health_trainer_desc': 'Rotinas de exercícios sob medida',
            'health_trainer_price': 'A partir de $20.000/sessão',
            'health_therapy': 'Terapia psicológica',
            'health_therapy_desc': 'Apoio emocional e mental',
            'health_therapy_price': 'A partir de $15.000/sessão',
            'health_massage': 'Massagens terapêuticas',
            'health_massage_desc': 'Alívio de tensões e dores musculares',
            'health_massage_price': 'A partir de $25.000/hora',
            'health_acupuncture': 'Acupuntura',
            'health_acupuncture_desc': 'Terapia alternativa para diversos males',
            'health_acupuncture_price': 'A partir de $20.000/sessão',
            'health_yoga': 'Yoga em domicílio',
            'health_yoga_desc': 'Aulas personalizadas em sua casa',
            'health_yoga_price': 'A partir de $15.000/sessão',
            'health_reiki': 'Reiki',
            'health_reiki_desc': 'Terapia energética para bem-estar',
            'health_reiki_price': 'A partir de $15.000/sessão',

            // Transporte
            'transport_private': 'Transporte privado',
            'transport_private_desc': 'Transferências seguras e pontuais',
            'transport_private_price': 'A partir de $2.000/km',
            'transport_airport': 'Recepção no aeroporto',
            'transport_airport_desc': 'Serviço porta a porta',
            'transport_airport_price': 'A partir de $25.000',
            'transport_courier': 'Mensageiro',
            'transport_courier_desc': 'Entrega rápida de pacotes',
            'transport_courier_price': 'A partir de $10.000',
            'transport_van': 'Aluguel de van',
            'transport_van_desc': 'Para mudanças ou transporte de mercadorias',
            'transport_van_price': 'A partir de $40.000/dia',
            'transport_medical': 'Transferências médicas',
            'transport_medical_desc': 'Ambulância não urgente',
            'transport_medical_price': 'A partir de $40.000',
            'transport_taxi': 'Serviço de táxi',
            'transport_taxi_desc': '24 horas por dia, 7 dias por semana',
            'transport_taxi_price': 'De acordo com taxímetro',
            'transport_events': 'Transporte para eventos',
            'transport_events_desc': 'Casamentos, festas e convenções',
            'transport_events_price': 'A partir de $50.000',
            'transport_guide': 'Guia turístico',
            'transport_guide_desc': 'Conheça a cidade com especialistas',
            'transport_guide_price': 'A partir de $20.000/hora',

            // Outros
            'other_photo': 'Fotografia',
            'other_photo_desc': 'Sessões profissionais para eventos',
            'other_photo_price': 'A partir de $30.000',
            'other_design': 'Design gráfico',
            'other_design_desc': 'Logos, folhetos e material publicitário',
            'other_design_price': 'A partir de $25.000',
            'other_phone': 'Reparo de celulares',
            'other_phone_desc': 'Telas, baterias e problemas de software',
            'other_phone_price': 'A partir de $15.000',
            'other_legal': 'Assessoria jurídica',
            'other_legal_desc': 'Consulta com profissionais do direito',
            'other_legal_price': 'A partir de $40.000/hora',
            'other_translation': 'Traduções',
            'other_translation_desc': 'Documentos oficiais e técnicos',
            'other_translation_price': 'A partir de $500/palavra',
            'other_events': 'Organização de eventos',
            'other_events_desc': 'Casamentos, aniversários e eventos corporativos',
            'other_events_price': 'A partir de $100.000',
            'other_it': 'Serviços de TI',
            'other_it_desc': 'Suporte técnico e desenvolvimento web',
            'other_it_price': 'A partir de $20.000/hora',
            'other_crafts': 'Venda de produtos artesanais',
            'other_crafts_desc': 'Arte e artesanato únicos',
            'other_crafts_price': 'Preços variáveis'
        }
    };

    function setLanguage(lang) {
        document.querySelectorAll('.language-buttons button').forEach(btn => {
            btn.classList.remove('active');
        });
        document.getElementById(`${lang}Btn`).classList.add('active');
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[lang]?.[key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
            const key = el.getAttribute('data-translate-placeholder');
            if (translations[lang]?.[key]) {
                el.placeholder = translations[lang][key];
            }
        });

        document.querySelectorAll('option[data-translate]').forEach(option => {
            const key = option.getAttribute('data-translate');
            if (translations[lang]?.[key]) {
                option.innerHTML = translations[lang][key];
            }
        });

        localStorage.setItem('language', lang);
    }

    // Botones de idioma
    document.getElementById('esBtn').addEventListener('click', () => setLanguage('es'));
    document.getElementById('enBtn').addEventListener('click', () => setLanguage('en'));
    document.getElementById('ptBtn').addEventListener('click', () => setLanguage('pt'));

    // Idioma guardado o por defecto
    const savedLang = localStorage.getItem('language') || 'es';
    setLanguage(savedLang);

});