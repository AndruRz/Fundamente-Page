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

    const programa = programasData[programaId];

    if (!programa) {
        mostrarError(`Programa "${programaId}" no encontrado`);
        return;
    }

    programaActual = programa;

    aplicarColoresPrograma(programaId);

    // Renderizar TODAS las secciones
    renderHero(programa);
    renderResumen(programa);
    renderObjetivos(programa);
    renderProyectos(programa);
    renderActividades(programa);
    renderNecesidades(programa);           // ← NUEVO
    renderFuturo(programa);                // ← NUEVO
    renderComoAyudar(programa);            // ← NUEVO
    renderGaleria(programa);               // ← NUEVO
    renderFaqs(programa);                  // ← NUEVO
    renderContactoEspecifico(programa);    // ← NUEVO
    setupBotonesContacto(programa);        // ← NUEVO

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
                
                ${proyecto.enlaceWeb ? `
                    <div class="proyecto-enlace-web">
                        <a href="${proyecto.enlaceWeb}" target="_blank" rel="noopener noreferrer" class="btn-enlace-web">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"/>
                                <line x1="2" y1="12" x2="22" y2="12"/>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                            </svg>
                            Visitar sitio web del Club Dynamo
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                <polyline points="15 3 21 3 21 9"/>
                                <line x1="10" y1="14" x2="21" y2="3"/>
                            </svg>
                        </a>
                    </div>
                ` : ''}
            </div>
        </div>
    `).join('');
}

// === RENDERIZAR ACTIVIDADES ===
function renderActividades(programa) {
    const container = document.getElementById('actividadesGrid');
    
    if (!programa.actividades || programa.actividades.length === 0) {
        container.innerHTML = `
            <div class="mensaje-vacio">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                </svg>
                <p>Aún no tenemos Actividades Regulares, pero pensamos en tenerlas próximamente</p>
            </div>
        `;
        return;
    }
    
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

// === RENDERIZAR NECESIDADES ===
function renderNecesidades(programa) {
    const container = document.getElementById('necesidadesGrid');
    
    if (!programa.necesidades || programa.necesidades.length === 0) {
        container.innerHTML = `
            <div class="mensaje-vacio">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <p>Próximamente publicaremos las necesidades específicas del programa</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = programa.necesidades.map(categoria => `
        <div class="necesidad-categoria">
            <h4>${categoria.categoria}</h4>
            <ul>
                ${categoria.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

// === RENDERIZAR FUTURO / METAS ===
function renderFuturo(programa) {
    if (!programa.futuro) return;
    
    // Título y descripción
    document.getElementById('futuroTitulo').textContent = programa.futuro.titulo;
    document.getElementById('futuroDescripcion').textContent = programa.futuro.descripcion;
    
    // Metas con barras de progreso
    const metasContainer = document.getElementById('metasLista');
    metasContainer.innerHTML = programa.futuro.metas.map(meta => `
        <div class="meta-item">
            <div class="meta-header">
                <h4>${meta.objetivo}</h4>
                <span class="meta-plazo">${meta.plazo}</span>
            </div>
            <div class="meta-progreso">
                <div class="progreso-bar">
                    <div class="progreso-fill" style="width: ${meta.progreso}%"></div>
                </div>
                <span class="progreso-porcentaje">${meta.progreso}%</span>
            </div>
        </div>
    `).join('');
    
    // Nuevos proyectos
    const proyectosContainer = document.getElementById('proyectosTags');
    proyectosContainer.innerHTML = programa.futuro.nuevosProyectos.map(proyecto => `
        <span class="proyecto-tag">${proyecto}</span>
    `).join('');
}

// === RENDERIZAR CÓMO AYUDAR ===
function renderComoAyudar(programa) {
    if (!programa.comoAyudar) return;
    
    const container = document.getElementById('ayudarGrid');
    
    const secciones = [
        { titulo: 'Voluntariado', icon: 'users', items: programa.comoAyudar.voluntariado },
        { titulo: 'Donaciones', icon: 'gift', items: programa.comoAyudar.donaciones },
        { titulo: 'Alianzas', icon: 'handshake', items: programa.comoAyudar.alianzas }
    ];
    
    container.innerHTML = secciones.map(seccion => `
        <div class="ayudar-card">
            <h4>${seccion.titulo}</h4>
            <ul class="ayudar-lista">
                ${seccion.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

// === RENDERIZAR GALERÍA ===
function renderGaleria(programa) {
    const container = document.getElementById('galeriaGrid');
    
    if (!programa.galeria || programa.galeria.length === 0) {
        container.innerHTML = `
            <div class="mensaje-vacio">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                </svg>
                <p>Próximamente agregaremos más fotos y videos del programa</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = programa.galeria.map((item, index) => `
        <div class="galeria-item" data-index="${index}">
            ${item.tipo === 'video' 
                ? `<video src="${item.src}" poster="${item.thumbnail || ''}" class="galeria-media"></video>
                   <div class="galeria-play-icon">
                       <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
                           <path d="M8 5v14l11-7z"/>
                       </svg>
                   </div>`
                : `<img src="${item.src}" alt="${item.alt}" class="galeria-media" loading="lazy">`
            }
            <div class="galeria-overlay">
                <p>${item.descripcion}</p>
            </div>
        </div>
    `).join('');
}

// === RENDERIZAR FAQs ===
function renderFaqs(programa) {
    const container = document.getElementById('faqsLista');
    
    if (!programa.faqs || programa.faqs.length === 0) {
        container.innerHTML = `
            <div class="mensaje-vacio">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
                <p>Próximamente agregaremos preguntas frecuentes</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = programa.faqs.map((faq, index) => `
        <div class="faq-item">
            <button class="faq-pregunta" data-faq="${index}">
                <span>${faq.pregunta}</span>
                <svg class="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"/>
                </svg>
            </button>
            <div class="faq-respuesta">
                <p>${faq.respuesta}</p>
            </div>
        </div>
    `).join('');
    
    // Setup de acordeón
    setupFaqsAccordion();
}

// === ACCORDION DE FAQs ===
function setupFaqsAccordion() {
    const faqButtons = document.querySelectorAll('.faq-pregunta');
    
    faqButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const faqItem = btn.closest('.faq-item');
            const isActive = faqItem.classList.contains('active');
            
            // Cerrar todos
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Abrir el clickeado si no estaba activo
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
}

// === RENDERIZAR CONTACTO ESPECÍFICO ===
function renderContactoEspecifico(programa) {
    if (!programa.contacto) return;
    
    document.getElementById('coordinadorNombre').textContent = programa.contacto.coordinador;
    document.getElementById('coordinadorEmail').textContent = programa.contacto.email;
    document.getElementById('coordinadorTelefono').textContent = programa.contacto.telefono;
    document.getElementById('coordinadorHorario').textContent = `Horario: ${programa.contacto.horarioAtencion}`;
}

// === SETUP BOTONES DE CONTACTO ===
function setupBotonesContacto(programa) {
    if (!programa.contacto) return;
    
    const botones = document.querySelectorAll('#btnContactarPrograma, #btnContactarCoordinador');
    
    botones.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const mensaje = `¡Hola! Me comunico desde la web de FUNDAMENTE. Me gustaría obtener más información sobre el programa de ${programa.nombre}. ¿Podrían ayudarme?`;
            const mensajeCodificado = encodeURIComponent(mensaje);
            const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensajeCodificado}`;
            
            window.open(url, '_blank');
            
            console.log('📱 WhatsApp abierto para contactar coordinador');
        });
    });
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