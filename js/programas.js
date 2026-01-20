/* ============================================
   PROGRAMAS.JS - JavaScript Página Individual
   ============================================ */

// === CONFIGURACIÓN ===
const WHATSAPP_NUMBER = '573216818455';
let programaActual = null;

// === MAPEO DE COLORES POR PROGRAMA ===
const coloresPrograma = {
    educacion: {
        primary: '#FF6B35',
        gradient: 'linear-gradient(135deg, #FF6B35 0%, #FF8C61 100%)'
    },
    deporte: {
        primary: '#4CAF50',
        gradient: 'linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%)'
    },
    recreacion: {
        primary: '#FFC107',
        gradient: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 100%)'
    },
    medioambiente: {
        primary: '#2E7D32',
        gradient: 'linear-gradient(135deg, #2E7D32 0%, #43A047 100%)'
    }
};

// === OBTENER PARÁMETRO DE URL ===
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// === CARGAR DATOS DEL PROGRAMA ===
function cargarPrograma() {
    const programaId = getUrlParameter('id');

    if (!programaId) {
        mostrarError('No se especificó un programa');
        return;
    }

    // Buscar en programasData
    const programa = programasData[programaId];

    if (!programa) {
        mostrarError(`Programa "${programaId}" no encontrado`);
        return;
    }

    programaActual = programa;

    // Aplicar colores del programa
    aplicarColoresPrograma(programaId);

    // Renderizar secciones
    renderHero(programa);
    renderResumen(programa);
    renderObjetivos(programa);
    renderProyectos(programa);
    renderActividades(programa);

    // Actualizar título de la página
    document.getElementById('page-title').textContent = `${programa.nombre} - FUNDAMENTE`;

    console.log('✅ Programa cargado:', programaId);
}

// === APLICAR COLORES DEL PROGRAMA ===
function aplicarColoresPrograma(programaId) {
    const colores = coloresPrograma[programaId];
    if (!colores) return;

    const root = document.documentElement;
    root.style.setProperty('--programa-color', colores.primary);
    root.style.setProperty('--programa-gradient', colores.gradient);
}

// === RENDERIZAR HERO ===
function renderHero(programa) {
    // Background
    const heroBackground = document.getElementById('heroBackground');
    heroBackground.style.backgroundImage = `url('${programa.hero.imagen}')`;

    // Breadcrumb
    document.getElementById('breadcrumbPrograma').textContent = programa.nombre;

    // Badge
    document.getElementById('heroBadge').textContent = programa.nombre;

    // Título y subtítulo
    document.getElementById('heroTitulo').textContent = programa.hero.titulo;
    document.getElementById('heroSubtitulo').textContent = programa.hero.subtitulo;

    // Estadísticas
    const statsContainer = document.getElementById('heroStats');
    statsContainer.innerHTML = programa.hero.estadisticas.map((stat, index) => `
        ${index > 0 ? '<div class="stat-separator"></div>' : ''}
        <div class="stat-item">
            <span class="stat-number">${stat.numero}${stat.sufijo}</span>
            <span class="stat-label">${stat.label}</span>
        </div>
    `).join('');
}

// === RENDERIZAR RESUMEN ===
function renderResumen(programa) {
    document.getElementById('resumenMision').textContent = programa.resumen.mision;
    document.getElementById('resumenVision').textContent = programa.resumen.vision;
    document.getElementById('resumenImpacto').textContent = programa.resumen.impacto;
}

// === RENDERIZAR OBJETIVOS ===
function renderObjetivos(programa) {
    const container = document.getElementById('objetivosGrid');
    
    container.innerHTML = programa.objetivos.map(objetivo => `
        <div class="objetivo-card">
            <h4>${objetivo.titulo}</h4>
            <p>${objetivo.descripcion}</p>
        </div>
    `).join('');
}

// === RENDERIZAR PROYECTOS ===
function renderProyectos(programa) {
    const container = document.getElementById('proyectosLista');
    
    container.innerHTML = programa.proyectosDestacados.map(proyecto => `
        <div class="proyecto-card">
            <div class="proyecto-imagen">
                <img src="${proyecto.imagen}" alt="${proyecto.nombre}" loading="lazy">
            </div>
            
            <div class="proyecto-contenido">
                <span class="proyecto-periodo">${proyecto.periodo}</span>
                <h3>${proyecto.nombre}</h3>
                <p>${proyecto.descripcion}</p>
                
                <ul class="proyecto-logros">
                    ${proyecto.logros.slice(0, 4).map(logro => `
                        <li>${logro}</li>
                    `).join('')}
                </ul>
                
                <div class="proyecto-beneficiarios">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    <span>${proyecto.beneficiarios}+ Beneficiarios</span>
                </div>
            </div>
        </div>
    `).join('');
}

// === RENDERIZAR ACTIVIDADES ===
function renderActividades(programa) {
    const container = document.getElementById('actividadesGrid');
    
    container.innerHTML = programa.actividades.map(actividad => `
        <div class="actividad-card">
            <div class="actividad-header">
                <h4>${actividad.nombre}</h4>
                <span class="actividad-frecuencia">${actividad.frecuencia}</span>
            </div>
            
            <div class="actividad-horario">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>${actividad.horario}</span>
            </div>
            
            <p class="actividad-descripcion">${actividad.descripcion}</p>
            
            <div class="actividad-info">
                <div class="actividad-info-item">
                    <span class="actividad-info-label">Cupos</span>
                    <span class="actividad-info-value">${actividad.cupos}</span>
                </div>
                <div class="actividad-info-item">
                    <span class="actividad-info-label">Edades</span>
                    <span class="actividad-info-value">${actividad.edades}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// === MOSTRAR ERROR ===
function mostrarError(mensaje) {
    const main = document.querySelector('main') || document.body;
    
    main.innerHTML = `
        <div style="
            min-height: 70vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            text-align: center;
        ">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" stroke-width="2" style="margin-bottom: 2rem;">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <h1 style="font-size: 2.5rem; color: #212121; margin-bottom: 1rem;">
                Oops, algo salió mal
            </h1>
            <p style="font-size: 1.2rem; color: #616161; margin-bottom: 2rem;">
                ${mensaje}
            </p>
            <a href="../index.html#programas" style="
                display: inline-flex;
                align-items: center;
                gap: 0.75rem;
                padding: 1rem 2rem;
                background: linear-gradient(135deg, #FF6B35 0%, #FF8C61 100%);
                color: white;
                text-decoration: none;
                border-radius: 50px;
                font-weight: 600;
                box-shadow: 0 10px 30px rgba(255, 107, 53, 0.3);
            ">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Volver a Programas
            </a>
        </div>
    `;
}

// === SETUP NAVBAR ===
function setupNavbar() {
    const navbar = document.getElementById('navbar');
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile toggle
    navbarToggle.addEventListener('click', () => {
        navbarToggle.classList.toggle('active');
        navbarMenu.classList.toggle('active');
        document.body.style.overflow = navbarMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Cerrar menú al hacer click en un link
    document.querySelectorAll('.navbar-link, .dropdown-link').forEach(link => {
        link.addEventListener('click', () => {
            navbarToggle.classList.remove('active');
            navbarMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// === SETUP BOTÓN APOYAR ===
function setupBotonApoyar() {
    const btnApoyar = document.getElementById('btnApoyarAhora');
    
    if (!btnApoyar) return;

    btnApoyar.addEventListener('click', (e) => {
        e.preventDefault();
        
        const mensaje = programaActual 
            ? `¡Hola! Quiero apoyar el programa de ${programaActual.nombre} de FUNDAMENTE. ¿Cómo puedo ayudar?`
            : '¡Hola! Quiero apoyar a la fundación FUNDAMENTE. ¿Cómo puedo ayudar?';
        
        const mensajeCodificado = encodeURIComponent(mensaje);
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensajeCodificado}`;
        
        window.open(url, '_blank');
        
        console.log('📱 WhatsApp abierto para apoyo');
    });
}

// === ANIMACIONES AL SCROLL ===
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar secciones
    document.querySelectorAll('.programa-resumen, .programa-objetivos, .programa-proyectos, .programa-actividades, .programa-ayudar').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(section);
    });
}

// === SMOOTH SCROLL ===
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                const navbar = document.getElementById('navbar');
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// === INICIALIZACIÓN ===
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Iniciando página de programa...');
    
    // Verificar que programasData exista
    if (typeof programasData === 'undefined') {
        console.error('❌ programasData no está definido');
        mostrarError('Error al cargar los datos del programa');
        return;
    }

    // Cargar programa
    cargarPrograma();

    // Setup de componentes
    setupNavbar();
    setupBotonApoyar();
    setupScrollAnimations();
    setupSmoothScroll();

    console.log('✅ Página de programa inicializada');
});

// === PREVENIR SCROLL HORIZONTAL ===
document.addEventListener('DOMContentLoaded', () => {
    const checkOverflow = () => {
        const body = document.body;
        const html = document.documentElement;
        
        const hasHorizontalScrollbar = Math.max(
            body.scrollWidth,
            html.scrollWidth
        ) > window.innerWidth;
        
        if (hasHorizontalScrollbar) {
            console.warn('⚠️ Desbordamiento horizontal detectado');
        }
    };
    
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
});

// === LOG DE CONSOLA ===
console.log('%c¡Bienvenido a FUNDAMENTE! 🎉', 'color: #FF6B35; font-size: 24px; font-weight: bold;');
console.log('%cFundación Integral de Desarrollo', 'color: #4CAF50; font-size: 14px;');