/* ============================================
   MAIN.JS - JavaScript Principal FUNDAMENTE
   ============================================ */

// === VARIABLES GLOBALES ===
const navbar = document.getElementById('navbar');
const navbarToggle = document.getElementById('navbarToggle');
const navbarMenu = document.getElementById('navbarMenu');
const navbarLinks = document.querySelectorAll('.navbar-link');
const dropdownItems = document.querySelectorAll('.navbar-item.dropdown');

// === NAVBAR: SCROLL EFFECT ===
let lastScrollTop = 0;
let scrollTimeout;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Añadir clase 'scrolled' cuando se hace scroll
    if (scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});

// === NAVBAR: MENÚ MÓVIL ===
navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
    document.body.style.overflow = navbarMenu.classList.contains('active') ? 'hidden' : '';
});

// === NAVBAR: DROPDOWN EN MÓVIL - CORREGIDO ===
dropdownItems.forEach(item => {
    const link = item.querySelector('.navbar-link');
    const dropdownMenu = item.querySelector('.dropdown-menu');
    
    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            e.stopPropagation(); // Evita que el click se propague
            
            // Toggle del dropdown actual
            item.classList.toggle('active');
            
            // Cerrar otros dropdowns abiertos
            dropdownItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
        }
    });
    
    // Manejar clicks en los items del dropdown
    if (dropdownMenu) {
        const dropdownLinks = dropdownMenu.querySelectorAll('.dropdown-link');
        dropdownLinks.forEach(dropdownLink => {
            dropdownLink.addEventListener('click', (e) => {
                // Permitir navegación pero cerrar el menú móvil
                if (window.innerWidth <= 768) {
                    setTimeout(() => {
                        navbarToggle.classList.remove('active');
                        navbarMenu.classList.remove('active');
                        document.body.style.overflow = '';
                        item.classList.remove('active');
                    }, 200);
                }
            });
        });
    }
});

// Cerrar menú al hacer click en un link normal (no dropdown)
navbarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const parentItem = link.closest('.navbar-item');
        
        // Si NO es un dropdown Y es un link interno (#)
        if (!parentItem.classList.contains('dropdown') && link.getAttribute('href').startsWith('#')) {
            navbarToggle.classList.remove('active');
            navbarMenu.classList.remove('active');
            document.body.style.overflow = '';
            
            // Remover active de todos los links
            navbarLinks.forEach(l => l.classList.remove('active'));
            // Añadir active al link clickeado
            link.classList.add('active');
        }
    });
});

// Cerrar menú al hacer click fuera (pero no cerrar dropdown si se hace click dentro)
document.addEventListener('click', (e) => {
    const isClickInsideNavbar = navbar.contains(e.target);
    const isClickOnDropdown = e.target.closest('.navbar-item.dropdown');
    
    if (!isClickInsideNavbar && navbarMenu.classList.contains('active')) {
        navbarToggle.classList.remove('active');
        navbarMenu.classList.remove('active');
        document.body.style.overflow = '';
        
        // Cerrar todos los dropdowns
        dropdownItems.forEach(item => {
            item.classList.remove('active');
        });
    }
});
// === PARALLAX EFFECT ===
const parallaxLayers = document.querySelectorAll('.parallax-layer');

window.addEventListener('scroll', () => {
    // Solo aplicar parallax en pantallas grandes
    if (window.innerWidth <= 768) return;
    
    const scrolled = window.pageYOffset;
    
    parallaxLayers.forEach(layer => {
        const speed = layer.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        layer.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });
});

// === ANIMACIÓN: CONTADOR DE ESTADÍSTICAS ===
const statNumbers = document.querySelectorAll('.stat-number');
let hasAnimated = false;

const animateCounter = (element, target, duration = 2000) => {
    let startTime = null;
    const startValue = 0;
    
    const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing function (easeOutExpo)
        const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        const currentValue = Math.floor(startValue + (target - startValue) * easeOutExpo);
        element.textContent = currentValue;
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            element.textContent = target;
        }
    };
    
    requestAnimationFrame(animate);
};

// Intersection Observer para activar contador cuando sea visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            statNumbers.forEach(stat => {
                const target = parseInt(stat.dataset.target);
                animateCounter(stat, target);
            });
        }
    });
}, { threshold: 0.5 });

// Observar las estadísticas
const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// === SMOOTH SCROLL ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Ignorar # solo
        if (href === '#') {
            e.preventDefault();
            return;
        }
        
        const target = document.querySelector(href);
        
        // Solo hacer smooth scroll si el target existe en la página actual
        if (target) {
            e.preventDefault();
            
            const navbarHeight = navbar ? navbar.offsetHeight : 0;
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
        // Si el target NO existe (estás en otra página), dejar que navegue normalmente
        // El navegador cargará index.html y automáticamente hará scroll al hash
    });
});

// === ANIMACIÓN: FORMAS FLOTANTES ===
const floatingShapes = document.querySelectorAll('.floating-shape');

floatingShapes.forEach((shape, index) => {
    // Posiciones aleatorias iniciales
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;
    
    shape.style.left = `${randomX}%`;
    shape.style.top = `${randomY}%`;
    
    // Animación de entrada
    setTimeout(() => {
        shape.style.opacity = '0.6';
    }, index * 200);
});

// === ANIMACIÓN: PARTÍCULAS ===
const particles = document.querySelectorAll('.particle');

particles.forEach((particle, index) => {
    // Posiciones aleatorias
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;
    
    particle.style.left = `${randomX}%`;
    particle.style.top = `${randomY}%`;
    
    // Tamaño aleatorio
    const randomSize = Math.random() * 4 + 2;
    particle.style.width = `${randomSize}px`;
    particle.style.height = `${randomSize}px`;
});

// === SCROLL REVEAL ANIMATION ===
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos con clase 'reveal' (para futuras secciones)
document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
});

// === NAVBAR: ACTIVE LINK ON SCROLL ===
const sections = document.querySelectorAll('section[id]');

const highlightNavOnScroll = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navbarLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

window.addEventListener('scroll', highlightNavOnScroll);

// === PRELOADER (OPCIONAL) ===
window.addEventListener('load', () => {
    // Si hay un hash en la URL al cargar
    if (window.location.hash) {
        const hash = window.location.hash;
        const target = document.querySelector(hash);
        
        if (target) {
            // LIMPIAR EL HASH INMEDIATAMENTE (sin delay)
            history.replaceState(null, null, window.location.pathname);
            
            // Luego hacer scroll
            const navbarHeight = navbar ? navbar.offsetHeight : 0;
            const targetPosition = target.offsetTop - navbarHeight;
            
            setTimeout(() => {
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }, 100);
        }
    }
});

// === RESPONSIVE: CERRAR DROPDOWN AL CAMBIAR TAMAÑO ===
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (window.innerWidth > 768) {
            navbarToggle.classList.remove('active');
            navbarMenu.classList.remove('active');
            document.body.style.overflow = '';
            
            // Cerrar dropdowns activos
            dropdownItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    }, 250);
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

// === PERFORMANCE: THROTTLE SCROLL EVENTS ===
const throttle = (func, delay) => {
    let timeoutId;
    let lastExecTime = 0;
    
    return function(...args) {
        const currentTime = Date.now();
        
        if (currentTime - lastExecTime < delay) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                lastExecTime = currentTime;
                func.apply(this, args);
            }, delay);
        } else {
            lastExecTime = currentTime;
            func.apply(this, args);
        }
    };
};

// === MOUSEMOVE PARALLAX (EFECTO SUTIL) ===
const hero = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content');

if (hero && window.innerWidth > 768) {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    
    hero.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });
    
    const animateParallaxMouse = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;
        
        parallaxLayers.forEach((layer, index) => {
            const speed = (index + 1) * 5;
            const x = currentX * speed;
            const y = currentY * speed;
            layer.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        });
        
        requestAnimationFrame(animateParallaxMouse);
    };
    
    animateParallaxMouse();
}

// === BOTÓN CTA: EFECTO RIPPLE ===
const buttons = document.querySelectorAll('.btn, .navbar-cta');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// === LAZY LOADING IMÁGENES ===
const lazyImages = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// === CONSOLA: MENSAJE DE BIENVENIDA ===
console.log('%c¡Bienvenido a FUNDAMENTE! 🎉', 'color: #FF6B35; font-size: 24px; font-weight: bold;');
console.log('%cFundación Integral de Desarrollo', 'color: #4CAF50; font-size: 14px;');
console.log('%cTransformando vidas en Ciudad Córdoba desde 2022', 'color: #666; font-size: 12px;');

// === DETECTAR MODO OSCURO DEL SISTEMA ===
const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

const handleDarkMode = (e) => {
    if (e.matches) {
        console.log('🌙 Modo oscuro detectado');
    } else {
        console.log('☀️ Modo claro detectado');
    }
};

darkModeQuery.addEventListener('change', handleDarkMode);
handleDarkMode(darkModeQuery);

// === ANALYTICS: TRACKING DE INTERACCIONES (Placeholder) ===
const trackEvent = (category, action, label) => {
    console.log(`📊 Event: ${category} - ${action} - ${label}`);
};

// Tracking de clicks en CTAs
document.querySelectorAll('.btn, .navbar-cta').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const text = btn.textContent.trim();
        trackEvent('CTA', 'Click', text);
    });
});

// === ACCESSIBILITY: FOCUS VISIBLE ===
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('user-is-tabbing');
});

// === ERROR HANDLING ===
window.addEventListener('error', (e) => {
    console.error('❌ Error detectado:', e.message);
});

// === QUIÉNES SOMOS: ANIMACIÓN DE ENTRADA ===
const quienesSomosSection = document.querySelector('.quienes-somos');

const quienesSomosObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            
            // Animar elementos internos secuencialmente
            const elements = entry.target.querySelectorAll('.section-label, .section-title, .section-description, .content-image, .content-text');
            
            elements.forEach((el, index) => {
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, index * 100);
            });
            
            quienesSomosObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

if (quienesSomosSection) {
    // Preparar elementos para animación
    const animatedElements = quienesSomosSection.querySelectorAll('.section-label, .section-title, .section-description, .content-image, .content-text');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    
    quienesSomosObserver.observe(quienesSomosSection);
}

// === VALORES: ANIMACIÓN STAGGER ===
const valoresItems = document.querySelectorAll('.valor-item');

const valoresObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.valor-item');
            
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, index * 150);
            });
            
            valoresObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});

const valoresGrid = document.querySelector('.valores-grid');
if (valoresGrid) {
    // Preparar items para animación
    valoresItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    
    valoresObserver.observe(valoresGrid);
}

// === BOTÓN CONOCE MÁS: SMOOTH SCROLL ===
const btnConoceMas = document.querySelector('.btn-conoce-mas');

if (btnConoceMas) {
    btnConoceMas.addEventListener('click', (e) => {
        const targetHref = btnConoceMas.getAttribute('href');
        
        // Si es un link interno (#), hacer smooth scroll
        if (targetHref && targetHref.startsWith('#')) {
            e.preventDefault();
            
            const targetSection = document.querySelector(targetHref);
            
            if (targetSection) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
        // Si es un link externo (./pages/...), dejar que navegue normalmente
        // No hacer preventDefault(), el navegador lo manejará
        
        // Tracking del evento
        trackEvent('Quiénes Somos', 'Click', 'Botón Conoce Más');
    });
}

// === PARALLAX IMAGEN QUIÉNES SOMOS ===
const quienesSomosImage = document.querySelector('.content-image .main-image');

if (quienesSomosImage && window.innerWidth > 768) {
    window.addEventListener('scroll', throttle(() => {
        const rect = quienesSomosImage.getBoundingClientRect();
        const scrollPercent = 1 - (rect.top / window.innerHeight);
        
        if (scrollPercent > 0 && scrollPercent < 1) {
            const translateY = scrollPercent * 30;
            quienesSomosImage.style.transform = `translateY(${translateY}px)`;
        }
    }, 10));
}

// === CONTADOR DE BADGE (2022) - ANIMACIÓN ===
const badgeNumber = document.querySelector('.badge-number');

if (badgeNumber) {
    const badgeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = 2022;
                animateCounter(badgeNumber, target, 1500);
                badgeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    badgeObserver.observe(badgeNumber);
}

// ============================================
// SECCIÓN EQUIPO - JAVASCRIPT
// ============================================

// === EQUIPO: ANIMACIÓN DE ENTRADA ESCALONADA ===
const equipoSection = document.querySelector('.equipo');
const teamMembers = document.querySelectorAll('.team-member');

const equipoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animar header de sección
            const header = entry.target.querySelector('.section-header');
            if (header) {
                header.style.opacity = '1';
                header.style.transform = 'translateY(0)';
            }

            // Animar tarjetas con delay escalonado
            const members = entry.target.querySelectorAll('.team-member');
            members.forEach((member, index) => {
                setTimeout(() => {
                    member.style.opacity = '1';
                    member.style.transform = 'translateY(0)';
                }, index * 200);
            });

            // Animar mensaje del equipo
            const mensaje = entry.target.querySelector('.equipo-mensaje');
            if (mensaje) {
                setTimeout(() => {
                    mensaje.style.opacity = '1';
                    mensaje.style.transform = 'translateY(0)';
                }, members.length * 200);
            }

            equipoObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Inicializar animaciones de equipo
if (equipoSection) {
    // Preparar header para animación
    const sectionHeader = equipoSection.querySelector('.section-header');
    if (sectionHeader) {
        sectionHeader.style.opacity = '0';
        sectionHeader.style.transform = 'translateY(30px)';
        sectionHeader.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    }

    // Preparar mensaje para animación
    const equipoMensaje = equipoSection.querySelector('.equipo-mensaje');
    if (equipoMensaje) {
        equipoMensaje.style.opacity = '0';
        equipoMensaje.style.transform = 'translateY(30px)';
        equipoMensaje.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    }

    // Observar la sección
    equipoObserver.observe(equipoSection);
}

// === EQUIPO: ANIMACIÓN DE ESTADÍSTICAS ===
const memberStats = document.querySelectorAll('.member-stats');

const memberStatsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statValues = entry.target.querySelectorAll('.stat-value');
            
            statValues.forEach(statValue => {
                const text = statValue.textContent.trim();
                const hasPlus = text.includes('+');
                const targetValue = parseInt(text.replace(/\D/g, ''));
                
                // Animar contador
                let currentValue = 0;
                const duration = 1500;
                const increment = targetValue / (duration / 16);
                
                const counter = setInterval(() => {
                    currentValue += increment;
                    
                    if (currentValue >= targetValue) {
                        currentValue = targetValue;
                        clearInterval(counter);
                    }
                    
                    statValue.textContent = hasPlus 
                        ? `${Math.floor(currentValue)}+` 
                        : Math.floor(currentValue);
                }, 16);
            });
            
            memberStatsObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

// Observar estadísticas de cada miembro
memberStats.forEach(stats => {
    memberStatsObserver.observe(stats);
});

// === EQUIPO: TRACKING DE CLICKS EN BOTONES "VER PERFIL" ===
const btnVerPerfil = document.querySelectorAll('.btn-ver-perfil');

btnVerPerfil.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const memberCard = btn.closest('.team-member');
        const memberName = memberCard.querySelector('.member-name').textContent.trim();
        
        trackEvent('Equipo', 'Click Ver Perfil', memberName);
        console.log(`📊 Click en perfil de: ${memberName}`);
        
        // Aquí puedes agregar la funcionalidad del modal si lo necesitas
        // Por ejemplo: openMemberModal(btn.dataset.modal);
    });
});

// === EQUIPO: ANIMACIÓN DE "QUOTE" AL HACER VISIBLE ===
const memberQuotes = document.querySelectorAll('.member-quote');

const quotesObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInQuote 0.8s ease-out forwards';
            quotesObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

memberQuotes.forEach(quote => {
    quotesObserver.observe(quote);
});

// === EQUIPO: HOVER TRACKING (INTERÉS) ===
teamMembers.forEach(member => {
    const card = member.querySelector('.member-card');
    const memberName = member.querySelector('.member-name').textContent.trim();
    let hoverTime = 0;
    let hoverInterval;
    
    card.addEventListener('mouseenter', () => {
        hoverInterval = setInterval(() => {
            hoverTime += 100;
        }, 100);
    });
    
    card.addEventListener('mouseleave', () => {
        clearInterval(hoverInterval);
        
        // Si pasó más de 3 segundos hovereando
        if (hoverTime > 3000) {
            trackEvent('Equipo', 'Interés Alto', memberName);
            console.log(`👀 Interés alto en: ${memberName}`);
        }
        
        hoverTime = 0;
    });
});

// === AGREGAR ESTILOS CSS DINÁMICOS PARA EFECTOS ===
const equipoStyles = document.createElement('style');
equipoStyles.textContent = `
    /* Animación de quote */
    @keyframes fadeInQuote {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(equipoStyles);

// === LOG DE INICIALIZACIÓN ===
console.log('✅ Sección Equipo inicializada correctamente');
console.log(`👥 ${teamMembers.length} miembros del equipo detectados`);
console.log(`📊 ${memberStats.length} conjuntos de estadísticas para animar`);

// ============================================
// MODAL DE PERFIL DEL EQUIPO
// ============================================

// Cargar datos del equipo (asegúrate de incluir el script en el HTML)
// <script src="./data/info.js"></script>

// === CREAR ESTRUCTURA DEL MODAL ===
function createModalStructure() {
    const modalHTML = `
        <div class="modal-perfil" id="modalPerfil">
            <button class="modal-close" id="modalClose" aria-label="Cerrar modal">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
            </button>
            
            <div class="modal-content-wrapper">
                <!-- Header con imagen -->
                <div class="modal-header">
                    <img src="" alt="" class="modal-header-image" id="modalHeaderImage">
                    <div class="modal-header-overlay">
                        <img src="" alt="" class="modal-avatar" id="modalAvatar">
                        <div class="modal-header-info">
                            <h2 class="modal-nombre" id="modalNombre"></h2>
                            <p class="modal-rol" id="modalRol"></p>
                            <p class="modal-especialidad" id="modalEspecialidad">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                                </svg>
                                <span></span>
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Tabs y contenido -->
                <div class="modal-body">
                    <!-- Navegación de tabs -->
                    <div class="modal-tabs">
                        <button class="modal-tab active" data-tab="informacion">Información</button>
                        <button class="modal-tab" data-tab="experiencia">Experiencia</button>
                        <button class="modal-tab" data-tab="logros">Logros & Habilidades</button>
                        <button class="modal-tab" data-tab="galeria">Galería</button>
                    </div>

                    <!-- Contenido: Información -->
                    <div class="modal-tab-content active" id="tab-informacion">
                        <div class="info-section">
                            <div>
                                <h3 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 1rem;">Biografía</h3>
                                <p class="biografia-text" id="modalBiografia"></p>
                            </div>

                            <div>
                                <h3 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 1rem;">Contacto</h3>
                                <div class="contacto-grid">
                                    <div class="contacto-item">
                                        <div class="contacto-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                                <polyline points="22,6 12,13 2,6"/>
                                            </svg>
                                        </div>
                                        <div class="contacto-info">
                                            <h4>Email</h4>
                                            <p id="modalEmail"></p>
                                        </div>
                                    </div>

                                    <div class="contacto-item">
                                        <div class="contacto-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                            </svg>
                                        </div>
                                        <div class="contacto-info">
                                            <h4>Teléfono</h4>
                                            <p id="modalTelefono"></p>
                                        </div>
                                    </div>
                                </div>

                                <div class="redes-sociales" id="modalRedes"></div>
                            </div>

                            <div>
                                <h3 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 1rem;">Educación</h3>
                                <div id="modalEducacion"></div>
                            </div>
                        </div>
                    </div>

                    <!-- Contenido: Experiencia -->
                    <div class="modal-tab-content" id="tab-experiencia">
                        <div class="experiencia-timeline" id="modalExperiencia"></div>
                    </div>

                    <!-- Contenido: Logros -->
                    <div class="modal-tab-content" id="tab-logros">
                        <div class="logros-grid" id="modalLogros"></div>
                        <div class="habilidades-container">
                            <h3>Habilidades</h3>
                            <div class="habilidades-grid" id="modalHabilidades"></div>
                        </div>
                    </div>

                    <!-- Contenido: Galería -->
                    <div class="modal-tab-content" id="tab-galeria">
                        <div class="galeria-grid" id="modalGaleria"></div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// === ABRIR MODAL ===
function openModal(memberId) {
    const member = teamData[memberId];
    if (!member) return;

    const modal = document.getElementById('modalPerfil');
    const overlay = document.getElementById('modal-overlay');

    // Llenar datos básicos
    document.getElementById('modalHeaderImage').src = member.imagenModal;
    document.getElementById('modalAvatar').src = member.imagenPrincipal;
    document.getElementById('modalNombre').textContent = member.nombre;
    document.getElementById('modalRol').textContent = member.rol;
    document.getElementById('modalEspecialidad').querySelector('span').textContent = member.especialidad;
    document.getElementById('modalBiografia').textContent = member.biografia;
    document.getElementById('modalEmail').textContent = member.email;
    document.getElementById('modalTelefono').textContent = member.telefono;

    // Redes sociales
    const redesHTML = `
        <a href="${member.redes.linkedin}" target="_blank" class="red-social" aria-label="LinkedIn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
        </a>
        <a href="${member.redes.facebook}" target="_blank" class="red-social" aria-label="Facebook">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
        </a>
        <a href="https://instagram.com/${member.redes.instagram.replace('@', '')}" target="_blank" class="red-social" aria-label="Instagram">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
        </a>
    `;
    document.getElementById('modalRedes').innerHTML = redesHTML;

    // Educación
    const educacionHTML = member.educacion.map(edu => `
        <div class="experiencia-item" style="margin-left: 0;">
            <div class="experiencia-header">
                <h4 class="experiencia-cargo">${edu.titulo}</h4>
                <span class="experiencia-periodo">${edu.año}</span>
            </div>
            <p class="experiencia-organizacion">${edu.institucion}</p>
        </div>
    `).join('');
    document.getElementById('modalEducacion').innerHTML = educacionHTML;

    // Experiencia
    const experienciaHTML = member.experiencia.map(exp => `
        <div class="experiencia-item">
            <div class="experiencia-header">
                <h4 class="experiencia-cargo">${exp.cargo}</h4>
                <span class="experiencia-periodo">${exp.periodo}</span>
            </div>
            <p class="experiencia-organizacion">${exp.organizacion}</p>
            <p class="experiencia-descripcion">${exp.descripcion}</p>
        </div>
    `).join('');
    document.getElementById('modalExperiencia').innerHTML = experienciaHTML;

    // Logros
    const logrosHTML = member.logros.map(logro => `
        <div class="logro-card">
            <div class="logro-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
            </div>
            <p class="logro-text">${logro}</p>
        </div>
    `).join('');
    document.getElementById('modalLogros').innerHTML = logrosHTML;

    // Habilidades
    const habilidadesHTML = member.habilidades.map(hab => `
        <span class="habilidad-tag">${hab}</span>
    `).join('');
    document.getElementById('modalHabilidades').innerHTML = habilidadesHTML;

    // Galería
    const galeriaHTML = member.galeria.map((img, index) => `
        <div class="galeria-item">
            <img src="${img}" alt="Galería ${index + 1}" class="galeria-imagen">
            <div class="galeria-overlay">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                </svg>
            </div>
        </div>
    `).join('');
    document.getElementById('modalGaleria').innerHTML = galeriaHTML;

    // Mostrar modal
    overlay.classList.add('active');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Tracking
    trackEvent('Modal', 'Abrir Perfil', member.nombre);
}

// === CERRAR MODAL ===
function closeModal() {
    const modal = document.getElementById('modalPerfil');
    const overlay = document.getElementById('modal-overlay');
    const modalContentWrapper = modal.querySelector('.modal-content-wrapper');

    overlay.classList.remove('active');
    modal.classList.remove('active');
    document.body.style.overflow = '';

    // Resetear scroll del modal a la parte superior
    if (modalContentWrapper) {
        modalContentWrapper.scrollTop = 0;
    }

    // Resetear a la primera tab
    setTimeout(() => {
        document.querySelectorAll('.modal-tab').forEach(tab => tab.classList.remove('active'));
        document.querySelectorAll('.modal-tab-content').forEach(content => content.classList.remove('active'));
        document.querySelector('.modal-tab[data-tab="informacion"]').classList.add('active');
        document.getElementById('tab-informacion').classList.add('active');
    }, 300);
}
// === CAMBIAR TABS ===
function setupTabNavigation() {
    const tabs = document.querySelectorAll('.modal-tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;
            
            // Remover active de todos
            tabs.forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.modal-tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Activar el seleccionado
            tab.classList.add('active');
            document.getElementById(`tab-${tabName}`).classList.add('active');
            
            // Tracking
            trackEvent('Modal', 'Cambiar Tab', tabName);
        });
    });
}

// === INICIALIZAR MODAL ===
document.addEventListener('DOMContentLoaded', () => {
    // Crear estructura del modal
    createModalStructure();
    
    // Setup de tabs
    setupTabNavigation();
    
    // Botón cerrar
    document.getElementById('modalClose').addEventListener('click', closeModal);
    
    // Cerrar al hacer click en el overlay
    document.getElementById('modal-overlay').addEventListener('click', closeModal);
    
    // Cerrar con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modal = document.getElementById('modalPerfil');
            if (modal.classList.contains('active')) {
                closeModal();
            }
        }
    });
    
    // Conectar botones "Ver Perfil"
    document.querySelectorAll('.btn-ver-perfil').forEach(btn => {
        btn.addEventListener('click', () => {
            const memberId = btn.dataset.modal;
            openModal(memberId);
        });
    });
});

console.log('✅ Sistema de modales inicializado correctamente');

// ============================================
// LIGHTBOX PARA GALERÍA DE IMÁGENES
// ============================================

class ImageLightbox {
    constructor() {
        this.currentIndex = 0;
        this.images = [];
        this.isOpen = false;
        this.createLightbox();
        this.setupEventListeners();
    }

    createLightbox() {
        const lightboxHTML = `
            <div class="lightbox-overlay" id="lightbox">
                <button class="lightbox-close" id="lightboxClose" aria-label="Cerrar">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                </button>
                
                <button class="lightbox-nav prev" id="lightboxPrev" aria-label="Anterior">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M15 18l-6-6 6-6"/>
                    </svg>
                </button>
                
                <button class="lightbox-nav next" id="lightboxNext" aria-label="Siguiente">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 18l6-6-6-6"/>
                    </svg>
                </button>
                
                <div class="lightbox-container">
                    <div class="lightbox-loading" id="lightboxLoading"></div>
                    <img src="" alt="" class="lightbox-image" id="lightboxImage" style="display: none;">
                </div>
                
                <div class="lightbox-counter" id="lightboxCounter">1 / 1</div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', lightboxHTML);

        this.lightbox = document.getElementById('lightbox');
        this.lightboxImage = document.getElementById('lightboxImage');
        this.lightboxLoading = document.getElementById('lightboxLoading');
        this.lightboxCounter = document.getElementById('lightboxCounter');
        this.closeBtn = document.getElementById('lightboxClose');
        this.prevBtn = document.getElementById('lightboxPrev');
        this.nextBtn = document.getElementById('lightboxNext');
    }

    setupEventListeners() {
        // Cerrar lightbox
        this.closeBtn.addEventListener('click', () => this.close());
        this.lightbox.addEventListener('click', (e) => {
            if (e.target === this.lightbox) {
                this.close();
            }
        });

        // Navegación
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());

        // Teclado
        document.addEventListener('keydown', (e) => {
            if (!this.isOpen) return;

            switch (e.key) {
                case 'Escape':
                    this.close();
                    break;
                case 'ArrowLeft':
                    this.prev();
                    break;
                case 'ArrowRight':
                    this.next();
                    break;
            }
        });

        // Detectar clicks en imágenes de galería
        this.setupGalleryClicks();
    }

    setupGalleryClicks() {
        // Para la galería dentro del modal de perfil
        document.addEventListener('click', (e) => {
            const galeriaItem = e.target.closest('.galeria-item');
            if (galeriaItem) {
                e.preventDefault();
                const imagen = galeriaItem.querySelector('.galeria-imagen');
                if (imagen) {
                    // Obtener todas las imágenes de la galería actual
                    const galeriaGrid = galeriaItem.closest('.galeria-grid');
                    const todasLasImagenes = Array.from(galeriaGrid.querySelectorAll('.galeria-imagen'));
                    const imagenesSrc = todasLasImagenes.map(img => img.src);
                    const index = todasLasImagenes.indexOf(imagen);

                    this.open(imagenesSrc, index);
                }
            }
        });
    }

    open(images, startIndex = 0) {
        this.images = images;
        this.currentIndex = startIndex;
        this.isOpen = true;

        this.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';

        this.loadImage(this.currentIndex);
        this.updateNavigation();
        
        trackEvent('Lightbox', 'Abrir', `Imagen ${this.currentIndex + 1}`);
    }

    close() {
        this.lightbox.classList.remove('active');
        document.body.style.overflow = '';
        this.isOpen = false;

        setTimeout(() => {
            this.lightboxImage.style.display = 'none';
            this.lightboxImage.src = '';
        }, 300);
        
        trackEvent('Lightbox', 'Cerrar', '');
    }

    loadImage(index) {
        this.lightboxLoading.style.display = 'block';
        this.lightboxImage.style.display = 'none';

        const img = new Image();
        img.onload = () => {
            this.lightboxImage.src = this.images[index];
            this.lightboxLoading.style.display = 'none';
            this.lightboxImage.style.display = 'block';
            this.updateCounter();
        };
        img.onerror = () => {
            this.lightboxLoading.style.display = 'none';
            console.error('Error al cargar la imagen');
            this.close();
        };
        img.src = this.images[index];
    }

    prev() {
        if (this.images.length <= 1) return;
        
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.loadImage(this.currentIndex);
        this.updateNavigation();
        
        trackEvent('Lightbox', 'Navegación', 'Anterior');
    }

    next() {
        if (this.images.length <= 1) return;
        
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.loadImage(this.currentIndex);
        this.updateNavigation();
        
        trackEvent('Lightbox', 'Navegación', 'Siguiente');
    }

    updateCounter() {
        this.lightboxCounter.textContent = `${this.currentIndex + 1} / ${this.images.length}`;
    }

    updateNavigation() {
        // Ocultar botones de navegación si solo hay una imagen
        if (this.images.length <= 1) {
            this.prevBtn.style.display = 'none';
            this.nextBtn.style.display = 'none';
        } else {
            this.prevBtn.style.display = 'flex';
            this.nextBtn.style.display = 'flex';
        }
    }
}

// Inicializar el lightbox cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = new ImageLightbox();
    console.log('✅ Lightbox de galería inicializado');
});

/* ============================================
   GALERÍA FUNDAMENTE - JAVASCRIPT AISLADO
   ============================================ */

// === CLASE PRINCIPAL DE GALERÍA FUNDAMENTE ===
class FundamenteGallery {
    constructor() {
        this.currentPage = 0;
        this.itemsPerPage = 3;
        this.totalItems = galleryData.length;
        this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        this.grid = document.getElementById('fundamenteGaleriaGrid');
        this.btnMas = document.getElementById('fundamenteBtnMas');
        this.instagramBox = document.getElementById('fundamenteInstagramBox');
        
        this.init();
    }

    init() {
        if (!this.grid || !this.btnMas) {
            console.warn('⚠️ Elementos de galería no encontrados');
            return;
        }

        // Cargar primera página
        this.loadPage(0);
        
        // Setup de eventos
        this.setupEvents();
        
        // Setup de lightbox
        this.setupLightbox();
        
        // Setup de video modal
        this.setupVideoModal();
        
        console.log('✅ Galería FUNDAMENTE inicializada');
        console.log(`📸 ${this.totalItems} items en galería, ${this.totalPages} páginas`);
    }

    loadPage(pageIndex) {
        const startIndex = pageIndex * this.itemsPerPage;
        const endIndex = Math.min(startIndex + this.itemsPerPage, this.totalItems);
        
        for (let i = startIndex; i < endIndex; i++) {
            const item = galleryData[i];
            this.createGalleryItem(item, i - startIndex);
        }

        this.currentPage = pageIndex;
        this.updateButton();
    }

    createGalleryItem(item, delayIndex) {
        const isVideo = item.type === 'video';
        
        const galleryItem = document.createElement('div');
        galleryItem.className = 'fundamente-item';
        galleryItem.dataset.id = item.id;
        galleryItem.dataset.type = item.type;
        galleryItem.dataset.orientation = item.orientation;
        
        // Estructura HTML del item
        galleryItem.innerHTML = `
            <div class="fundamente-media-box">
                ${isVideo 
                    ? `<video class="fundamente-media" muted loop playsinline>
                           <source src="${item.src}" type="video/mp4">
                       </video>`
                    : `<img class="fundamente-media" src="${item.src}" alt="${item.alt}" loading="lazy">`
                }
                
                <div class="fundamente-overlay">
                    <div class="fundamente-icono-media ${isVideo ? 'es-video' : ''}">
                        ${isVideo 
                            ? `<svg viewBox="0 0 24 24" fill="currentColor">
                                   <path d="M8 5v14l11-7z"/>
                               </svg>`
                            : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                   <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                                   <circle cx="12" cy="12" r="3"/>
                               </svg>`
                        }
                    </div>
                    <div class="fundamente-descripcion">
                        <p>${item.descripcion}</p>
                    </div>
                </div>

                <span class="fundamente-tipo-badge ${isVideo ? 'es-video' : ''}">
                    ${isVideo ? '📹 Video' : '📷 Foto'}
                </span>
            </div>
        `;

        // Añadir al grid
        this.grid.appendChild(galleryItem);

        // Animación de entrada escalonada
        setTimeout(() => {
            galleryItem.classList.add('visible');
        }, delayIndex * 150);

        // Event listeners
        this.setupItemEvents(galleryItem, item);
    }

    setupItemEvents(galleryItem, item) {
        const mediaElement = galleryItem.querySelector('.fundamente-media');
        
        // Hover para videos (preview)
        if (item.type === 'video') {
            galleryItem.addEventListener('mouseenter', () => {
                mediaElement.play().catch(e => console.log('Autoplay bloqueado'));
            });

            galleryItem.addEventListener('mouseleave', () => {
                mediaElement.pause();
                mediaElement.currentTime = 0;
            });

            // Click para abrir modal de video
            galleryItem.addEventListener('click', () => {
                this.openVideoModal(item.src);
                this.trackEvent('Galería', 'Click Video', item.descripcion);
            });
            
            // Añadir cursor pointer solo para videos
            galleryItem.style.cursor = 'pointer';
        } else {
            // Para imágenes: NO hacer nada al hacer click
            // Simplemente mostrar sin interacción
            galleryItem.style.cursor = 'default';
            
            // Opcional: puedes agregar un efecto hover sutil
            galleryItem.addEventListener('mouseenter', () => {
                // Solo un efecto visual suave, sin funcionalidad
            });
        }
    }

    updateButton() {
        const hasMorePages = this.currentPage < this.totalPages - 1;

        if (hasMorePages) {
            // Actualizar texto del botón
            const remainingItems = Math.min(
                this.itemsPerPage, 
                this.totalItems - (this.currentPage + 1) * this.itemsPerPage
            );
            
            this.btnMas.querySelector('.fundamente-texto-btn').textContent = 
                `Ver ${remainingItems} Foto${remainingItems > 1 ? 's' : ''} Más`;
        } else {
            // Cambiar a botón de Instagram
            this.btnMas.classList.add('btn-instagram');
            this.btnMas.innerHTML = `
                <svg class="fundamente-icono-btn" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span class="fundamente-texto-btn">Ver Más en Instagram</span>
            `;

            // Mostrar mensaje de Instagram
            this.instagramBox.style.display = 'block';
            setTimeout(() => {
                this.instagramBox.style.opacity = '1';
                this.instagramBox.style.transform = 'translateY(0)';
            }, 100);

            // Preparar para animación
            this.instagramBox.style.opacity = '0';
            this.instagramBox.style.transform = 'translateY(20px)';
            this.instagramBox.style.transition = 'all 0.6s ease';
        }
    }

    setupEvents() {
        this.btnMas.addEventListener('click', () => {
            const hasMorePages = this.currentPage < this.totalPages - 1;

            if (hasMorePages) {
                // Cargar siguiente página
                this.loadPage(this.currentPage + 1);
                this.trackEvent('Galería', 'Ver Más', `Página ${this.currentPage + 1}`);
            } else {
                // Ir a Instagram
                window.open('https://www.instagram.com/fundamenteorg', '_blank');
                this.trackEvent('Galería', 'Click Instagram', 'Botón Ver Más');
            }
        });
    }

    setupLightbox() {
        // Reutilizar el lightbox existente si está disponible
        if (!window.imageLightbox) {
            console.warn('⚠️ Lightbox no inicializado');
        }
    }

    openImageLightbox(imageSrc, alt) {
        if (window.imageLightbox) {
            window.imageLightbox.open([imageSrc], 0);
        } else {
            // Fallback: abrir en nueva pestaña
            window.open(imageSrc, '_blank');
        }
    }

    setupVideoModal() {
        this.videoModal = document.getElementById('fundamenteVideoModal');
        this.videoPlayer = document.getElementById('fundamenteVideoPlayer');
        this.videoClose = document.getElementById('fundamenteVideoCerrar');

        if (!this.videoModal || !this.videoPlayer || !this.videoClose) {
            console.warn('⚠️ Modal de video no encontrado');
            return;
        }

        // Cerrar modal
        this.videoClose.addEventListener('click', () => {
            this.closeVideoModal();
        });

        this.videoModal.addEventListener('click', (e) => {
            if (e.target === this.videoModal) {
                this.closeVideoModal();
            }
        });

        // ESC para cerrar
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.videoModal.classList.contains('activo')) {
                this.closeVideoModal();
            }
        });
    }

    openVideoModal(videoSrc) {
        this.videoPlayer.querySelector('source').src = videoSrc;
        this.videoPlayer.load();
        this.videoModal.classList.add('activo');
        document.body.style.overflow = 'hidden';
        
        // Autoplay
        this.videoPlayer.play().catch(e => console.log('Autoplay bloqueado'));
    }

    closeVideoModal() {
        this.videoPlayer.pause();
        this.videoPlayer.currentTime = 0;
        this.videoModal.classList.remove('activo');
        document.body.style.overflow = '';
    }

    trackEvent(category, action, label) {
        // Usa el trackEvent global si existe
        if (typeof trackEvent === 'function') {
            trackEvent(category, action, label);
        } else {
            console.log(`📊 Event: ${category} - ${action} - ${label}`);
        }
    }
}

// === ANIMACIÓN DE ENTRADA DE LA SECCIÓN ===
const fundamenteGaleriaSeccion = document.querySelector('.fundamente-galeria');

const fundamenteGaleriaObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            
            // Animar header
            const header = entry.target.querySelector('.fundamente-galeria-header');
            if (header) {
                header.style.opacity = '1';
                header.style.transform = 'translateY(0)';
            }
            
            fundamenteGaleriaObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// === INICIALIZACIÓN ===
document.addEventListener('DOMContentLoaded', () => {
    // Verificar que los datos existan
    if (typeof galleryData === 'undefined') {
        console.error('❌ galleryData no está definido. Asegúrate de incluir gallery.js antes de este script.');
        return;
    }

    // Inicializar galería
    const gallery = new FundamenteGallery();
    
    // Guardar instancia global para acceso desde otras partes
    window.fundamenteGallery = gallery;

    // Preparar animación de header
    if (fundamenteGaleriaSeccion) {
        const header = fundamenteGaleriaSeccion.querySelector('.fundamente-galeria-header');
        if (header) {
            header.style.opacity = '0';
            header.style.transform = 'translateY(30px)';
            header.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        }
        
        fundamenteGaleriaObserver.observe(fundamenteGaleriaSeccion);
    }
});

// === LOG DE CARGA ===
console.log('📸 Sistema de galería FUNDAMENTE cargado');
console.log(`Total de items: ${typeof galleryData !== 'undefined' ? galleryData.length : 0}`);

/* ============================================
   CÓMO AYUDAR - JAVASCRIPT
   ============================================ */

// === CONFIGURACIÓN ===
const WHATSAPP_NUMBER = '573216818455';
const WHATSAPP_BASE_URL = 'https://wa.me/';

// === DATOS DE TIPOS DE DONACIÓN ===
const tiposDonacion = {
    comida: {
        titulo: 'Alimentos',
        subtitulo: 'Gracias por querer ayudar combatiendo el hambre. Tu donación alimentará a familias necesitadas.',
        ejemplos: 'Ej: Arroz, pasta, aceite, enlatados, granos...',
        icono: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
                    <line x1="6" y1="1" x2="6" y2="4"/>
                    <line x1="10" y1="1" x2="10" y2="4"/>
                    <line x1="14" y1="1" x2="14" y2="4"/>
                </svg>`,
        colorClass: 'comida'
    },
    medicamentos: {
        titulo: 'Medicamentos',
        subtitulo: 'Tu donación de medicamentos puede salvar vidas. Ayúdanos a mantener nuestro botiquín comunitario.',
        ejemplos: 'Ej: Analgésicos, antipiréticos, gasas, alcohol...',
        icono: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <line x1="3" y1="9" x2="21" y2="9"/>
                    <line x1="9" y1="21" x2="9" y2="9"/>
                </svg>`,
        colorClass: 'medicamentos'
    },
    dinero: {
        titulo: 'Dinero',
        subtitulo: 'Tu aporte económico nos ayuda a sostener todos nuestros programas y llegar a más niños.',
        ejemplos: 'Especifica el monto que deseas donar',
        icono: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>`,
        colorClass: 'dinero'
    },
    ropa: {
        titulo: 'Ropa',
        subtitulo: 'Ropa en buen estado hace una gran diferencia. Ayuda a vestir a quienes más lo necesitan.',
        ejemplos: 'Ej: Ropa infantil talla 6-12, zapatos 35-40...',
        icono: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>
                </svg>`,
        colorClass: 'ropa'
    },
    otra: {
        titulo: 'Otra Donación',
        subtitulo: 'Cuéntanos qué tienes para donar. ¡Toda ayuda es bienvenida!',
        ejemplos: 'Describe qué deseas donar',
        icono: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>`,
        colorClass: 'otra'
    }
};

// === ELEMENTOS DEL DOM ===
const opcionesCards = document.querySelectorAll('.opcion-card');
const formularioDonacion = document.getElementById('formularioDonacion');
const btnVolver = document.getElementById('btnVolver');
const formDonacion = document.getElementById('formDonacion');
const formularioIcono = document.getElementById('formularioIcono');
const tipoDonacionTexto = document.getElementById('tipoDonacionTexto');
const formularioSubtitulo = document.getElementById('formularioSubtitulo');
const detallesDonacion = document.getElementById('detallesDonacion');

let tipoSeleccionado = null;

// === INICIALIZACIÓN ===
function initComoAyudar() {
    setupOpcionesClick();
    setupFormSubmit();
    setupVolverButton();
    
    console.log('✅ Sección "Cómo Ayudar" inicializada');
}

// === SETUP DE CLICKS EN OPCIONES ===
function setupOpcionesClick() {
    opcionesCards.forEach(card => {
        const btnSeleccionar = card.querySelector('.btn-seleccionar');
        
        btnSeleccionar.addEventListener('click', (e) => {
            e.stopPropagation();
            const tipo = card.dataset.tipo;
            seleccionarOpcion(tipo, card);
        });

        // También permitir click en toda la tarjeta
        card.addEventListener('click', () => {
            const tipo = card.dataset.tipo;
            seleccionarOpcion(tipo, card);
        });
    });
}

// === SELECCIONAR OPCIÓN ===
function seleccionarOpcion(tipo, card) {
    tipoSeleccionado = tipo;
    
    // Remover selección de todas las tarjetas
    opcionesCards.forEach(c => c.classList.remove('seleccionada'));
    
    // Marcar como seleccionada
    card.classList.add('seleccionada');
    
    // Mostrar formulario
    mostrarFormulario(tipo);
    
    // Tracking
    trackEvent('Donación', 'Seleccionar Tipo', tipo);
    
    // Scroll al formulario
    setTimeout(() => {
        formularioDonacion.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }, 300);
}

// === MOSTRAR FORMULARIO ===
function mostrarFormulario(tipo) {
    const datos = tiposDonacion[tipo];
    
    if (!datos) {
        console.error('Tipo de donación no encontrado:', tipo);
        return;
    }

    // Actualizar contenido del formulario
    tipoDonacionTexto.textContent = datos.titulo;
    formularioSubtitulo.textContent = datos.subtitulo;
    formularioIcono.innerHTML = datos.icono;
    formularioIcono.className = `formulario-icono opcion-icono ${datos.colorClass}`;
    
    // Actualizar placeholder de detalles
    detallesDonacion.placeholder = datos.ejemplos;
    
    // Mostrar formulario con animación
    formularioDonacion.style.display = 'block';
    
    setTimeout(() => {
        formularioDonacion.classList.add('visible');
    }, 50);
    
    // Resetear formulario
    formDonacion.reset();
}

// === OCULTAR FORMULARIO ===
function ocultarFormulario() {
    formularioDonacion.classList.remove('visible');
    
    setTimeout(() => {
        formularioDonacion.style.display = 'none';
    }, 300);
    
    // Remover selección
    opcionesCards.forEach(c => c.classList.remove('seleccionada'));
    tipoSeleccionado = null;
}

// === SETUP BOTÓN VOLVER ===
function setupVolverButton() {
    btnVolver.addEventListener('click', () => {
        ocultarFormulario();
        
        // Scroll a opciones
        document.querySelector('.donacion-opciones').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
        
        trackEvent('Donación', 'Click Volver', '');
    });
}

// === SETUP SUBMIT DEL FORMULARIO ===
function setupFormSubmit() {
    formDonacion.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Obtener valores del formulario
        const nombreDonante = document.getElementById('nombreDonante').value.trim();
        const detalles = document.getElementById('detallesDonacion').value.trim();
        const nombreBeneficiario = document.getElementById('nombreBeneficiario').value.trim();
        const mensajeAdicional = document.getElementById('mensajeAdicional').value.trim();
        
        // Validar campos requeridos
        if (!nombreDonante || !detalles) {
            alert('Por favor completa todos los campos requeridos');
            return;
        }
        
        // Construir mensaje de WhatsApp
        const mensaje = construirMensajeWhatsApp(
            tipoSeleccionado,
            nombreDonante,
            detalles,
            nombreBeneficiario,
            mensajeAdicional
        );
        
        // Abrir WhatsApp
        abrirWhatsApp(mensaje);
        
        // Tracking
        trackEvent('Donación', 'Enviar WhatsApp', tipoSeleccionado);
    });
}

// === CONSTRUIR MENSAJE DE WHATSAPP ===
function construirMensajeWhatsApp(tipo, nombre, detalles, beneficiario, mensaje) {
    const datos = tiposDonacion[tipo];
    
    let mensajeCompleto = `¡Hola! Quiero hacer una donación a FUNDAMENTE\n\n`;
    mensajeCompleto += `    *Tipo de donación:* ${datos.titulo}\n`;
    mensajeCompleto += `    *Mi nombre:* ${nombre}\n\n`;
    mensajeCompleto += `    *Detalles de la donación:*\n${detalles}\n\n`;
    
    if (beneficiario) {
        mensajeCompleto += ` *A nombre de:* ${beneficiario}\n\n`;
    }
    
    if (mensaje) {
        mensajeCompleto += ` *Mensaje adicional:*\n${mensaje}\n\n`;
    }
    
    mensajeCompleto += `Me gustaría coordinar los detalles de la entrega. ¿Cuál es el siguiente paso?`;
    
    return mensajeCompleto;
}

// === ABRIR WHATSAPP ===
function abrirWhatsApp(mensaje) {
    const mensajeCodificado = encodeURIComponent(mensaje);
    const url = `${WHATSAPP_BASE_URL}${WHATSAPP_NUMBER}?text=${mensajeCodificado}`;
    
    // Abrir en nueva pestaña
    window.open(url, '_blank');
    
    // Mostrar confirmación
    mostrarConfirmacion();
}

// === MOSTRAR CONFIRMACIÓN ===
function mostrarConfirmacion() {
    // Crear overlay de confirmación
    const confirmacion = document.createElement('div');
    confirmacion.className = 'confirmacion-overlay';
    confirmacion.innerHTML = `
        <div class="confirmacion-card">
            <div class="confirmacion-icono">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
            </div>
            <h3>¡Mensaje Enviado!</h3>
            <p>Te hemos redirigido a WhatsApp. Pronto nos pondremos en contacto contigo para coordinar tu donación.</p>
            <button class="btn-cerrar-confirmacion">Entendido</button>
        </div>
    `;
    
    document.body.appendChild(confirmacion);
    
    // Agregar estilos
    agregarEstilosConfirmacion();
    
    // Mostrar con animación
    setTimeout(() => {
        confirmacion.classList.add('visible');
    }, 50);
    
    // Botón cerrar
    const btnCerrar = confirmacion.querySelector('.btn-cerrar-confirmacion');
    btnCerrar.addEventListener('click', () => {
        confirmacion.classList.remove('visible');
        setTimeout(() => {
            confirmacion.remove();
        }, 300);
        
        // Resetear formulario
        ocultarFormulario();
    });
    
    // Cerrar al hacer click fuera
    confirmacion.addEventListener('click', (e) => {
        if (e.target === confirmacion) {
            btnCerrar.click();
        }
    });
}

// === AGREGAR ESTILOS DE CONFIRMACIÓN ===
function agregarEstilosConfirmacion() {
    if (document.getElementById('confirmacion-styles')) return;
    
    const styles = document.createElement('style');
    styles.id = 'confirmacion-styles';
    styles.textContent = `
        .confirmacion-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(5px);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
            padding: 1rem;
        }
        
        .confirmacion-overlay.visible {
            opacity: 1;
        }
        
        .confirmacion-card {
            background: var(--color-white);
            padding: 3rem 2rem;
            border-radius: 24px;
            max-width: 500px;
            width: 100%;
            text-align: center;
            transform: scale(0.9);
            transition: transform 0.3s ease;
        }
        
        .confirmacion-overlay.visible .confirmacion-card {
            transform: scale(1);
        }
        
        .confirmacion-icono {
            width: 100px;
            height: 100px;
            margin: 0 auto 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%);
            color: var(--text-white);
            border-radius: 50%;
        }
        
        .confirmacion-card h3 {
            font-size: 2rem;
            font-weight: 900;
            color: var(--text-primary);
            margin-bottom: 1rem;
        }
        
        .confirmacion-card p {
            font-size: 1.1rem;
            color: var(--text-secondary);
            line-height: 1.7;
            margin-bottom: 2rem;
        }
        
        .btn-cerrar-confirmacion {
            padding: 1rem 2.5rem;
            background: var(--gradient-orange);
            color: var(--text-white);
            font-size: 1rem;
            font-weight: 600;
            border-radius: 50px;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .btn-cerrar-confirmacion:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-orange);
        }
        
        @media (max-width: 480px) {
            .confirmacion-card {
                padding: 2rem 1.5rem;
            }
            
            .confirmacion-icono {
                width: 80px;
                height: 80px;
            }
            
            .confirmacion-icono svg {
                width: 48px;
                height: 48px;
            }
            
            .confirmacion-card h3 {
                font-size: 1.6rem;
            }
            
            .confirmacion-card p {
                font-size: 1rem;
            }
        }
    `;
    
    document.head.appendChild(styles);
}

// === ANIMACIÓN DE ENTRADA DE LA SECCIÓN ===
const comoAyudarSection = document.querySelector('.como-ayudar');

const comoAyudarObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            
            // Animar header
            const header = entry.target.querySelector('.section-header');
            if (header) {
                header.style.opacity = '1';
                header.style.transform = 'translateY(0)';
            }
            
            comoAyudarObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// === INICIALIZACIÓN AL CARGAR EL DOM ===
document.addEventListener('DOMContentLoaded', () => {
    initComoAyudar();
    
    // Preparar animación de header
    if (comoAyudarSection) {
        const header = comoAyudarSection.querySelector('.section-header');
        if (header) {
            header.style.opacity = '0';
            header.style.transform = 'translateY(30px)';
            header.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        }
        
        comoAyudarObserver.observe(comoAyudarSection);
    }
});

// === LOG DE CARGA ===
console.log('💝 Sistema de donaciones inicializado');
console.log(`📱 WhatsApp configurado: ${WHATSAPP_NUMBER}`);

/* ============================================
   CONTACTO - JAVASCRIPT
   ============================================ */

// === CONFIGURACIÓN ===
const WHATSAPP_CONTACTO = '573216818455';
const WHATSAPP_URL_BASE = 'https://wa.me/';

// === ELEMENTOS DEL DOM ===
const formContacto = document.getElementById('formContacto');
const btnWhatsAppContacto = document.getElementById('btnWhatsAppContacto');

// === MAPEO DE ASUNTOS ===
const asuntosMap = {
    'informacion-programas': 'Información sobre programas',
    'voluntariado': 'Quiero ser voluntario',
    'donaciones': 'Consultas sobre donaciones',
    'alianzas': 'Propuesta de alianza',
    'otro': 'Otro tema'
};

// === INICIALIZACIÓN ===
function initContacto() {
    setupFormContacto();
    setupBtnWhatsAppDirecto();
    animarSeccionContacto();
    
    console.log('✅ Sección de Contacto inicializada');
    console.log(`📱 WhatsApp configurado: ${WHATSAPP_CONTACTO}`);
}

// === SETUP FORMULARIO DE CONTACTO ===
function setupFormContacto() {
    if (!formContacto) {
        console.warn('⚠️ Formulario de contacto no encontrado');
        return;
    }

    formContacto.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Obtener valores
        const nombre = document.getElementById('nombreContacto').value.trim();
        const email = document.getElementById('emailContacto').value.trim();
        const telefono = document.getElementById('telefonoContacto').value.trim();
        const asunto = document.getElementById('asuntoContacto').value;
        const mensaje = document.getElementById('mensajeContacto').value.trim();
        
        // Validar campos requeridos
        if (!nombre || !email || !asunto || !mensaje) {
            mostrarAlerta('Por favor completa todos los campos requeridos', 'error');
            return;
        }

        // Validar email
        if (!validarEmail(email)) {
            mostrarAlerta('Por favor ingresa un email válido', 'error');
            return;
        }
        
        // Construir mensaje para WhatsApp
        const mensajeWhatsApp = construirMensajeContacto(nombre, email, telefono, asunto, mensaje);
        
        // Enviar a WhatsApp
        enviarWhatsAppContacto(mensajeWhatsApp, asunto);
        
        // Tracking
        if (typeof trackEvent === 'function') {
            trackEvent('Contacto', 'Enviar Formulario', asunto);
        }
    });
}

// === CONSTRUIR MENSAJE DE CONTACTO ===
function construirMensajeContacto(nombre, email, telefono, asunto, mensaje) {
    const asuntoTexto = asuntosMap[asunto] || asunto;
    
    let mensajeCompleto = `¡Hola! Me comunico desde la web de FUNDAMENTE\n\n`;
    mensajeCompleto += `*Asunto:* ${asuntoTexto}\n\n`;
    mensajeCompleto += `*Nombre:* ${nombre}\n`;
    mensajeCompleto += `*Email:* ${email}\n`;
    
    if (telefono) {
        mensajeCompleto += `*Teléfono:* ${telefono}\n`;
    }
    
    mensajeCompleto += `\n*Mi mensaje:*\n${mensaje}\n\n`;
    mensajeCompleto += `Quedo atento a su respuesta. ¡Gracias!`;
    
    return mensajeCompleto;
}

// === ENVIAR A WHATSAPP ===
function enviarWhatsAppContacto(mensaje, asunto = '') {
    const mensajeCodificado = encodeURIComponent(mensaje);
    const url = `${WHATSAPP_URL_BASE}${WHATSAPP_CONTACTO}?text=${mensajeCodificado}`;
    
    // Abrir WhatsApp en nueva pestaña
    window.open(url, '_blank');
    
    // Mostrar confirmación
    mostrarConfirmacionContacto(asunto);
    
    // Resetear formulario después de un momento
    setTimeout(() => {
        formContacto.reset();
    }, 1000);
}

// === SETUP BOTÓN WHATSAPP DIRECTO ===
function setupBtnWhatsAppDirecto() {
    if (!btnWhatsAppContacto) {
        console.warn('⚠️ Botón WhatsApp directo no encontrado');
        return;
    }

    btnWhatsAppContacto.addEventListener('click', (e) => {
        e.preventDefault();
        
        const mensajeDirecto = '¡Hola! Me gustaría obtener más información sobre FUNDAMENTE. ¿Podrían ayudarme?';
        const mensajeCodificado = encodeURIComponent(mensajeDirecto);
        const url = `${WHATSAPP_URL_BASE}${WHATSAPP_CONTACTO}?text=${mensajeCodificado}`;
        
        window.open(url, '_blank');
        
        // Tracking
        if (typeof trackEvent === 'function') {
            trackEvent('Contacto', 'Click WhatsApp Directo', 'Botón Grande');
        }
    });
}

// === VALIDAR EMAIL ===
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// === MOSTRAR ALERTA ===
function mostrarAlerta(mensaje, tipo = 'info') {
    // Crear elemento de alerta
    const alerta = document.createElement('div');
    alerta.className = `alerta-contacto alerta-${tipo}`;
    
    const icono = tipo === 'error' 
        ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
               <circle cx="12" cy="12" r="10"/>
               <line x1="12" y1="8" x2="12" y2="12"/>
               <line x1="12" y1="16" x2="12.01" y2="16"/>
           </svg>`
        : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
               <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
               <polyline points="22 4 12 14.01 9 11.01"/>
           </svg>`;
    
    alerta.innerHTML = `
        <div class="alerta-contenido">
            <div class="alerta-icono">${icono}</div>
            <p class="alerta-texto">${mensaje}</p>
            <button class="alerta-cerrar" aria-label="Cerrar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
            </button>
        </div>
    `;
    
    document.body.appendChild(alerta);
    
    // Agregar estilos si no existen
    agregarEstilosAlerta();
    
    // Mostrar con animación
    setTimeout(() => {
        alerta.classList.add('visible');
    }, 10);
    
    // Botón cerrar
    const btnCerrar = alerta.querySelector('.alerta-cerrar');
    btnCerrar.addEventListener('click', () => {
        cerrarAlerta(alerta);
    });
    
    // Auto-cerrar después de 5 segundos
    setTimeout(() => {
        if (alerta.parentElement) {
            cerrarAlerta(alerta);
        }
    }, 5000);
}

// === CERRAR ALERTA ===
function cerrarAlerta(alerta) {
    alerta.classList.remove('visible');
    setTimeout(() => {
        if (alerta.parentElement) {
            alerta.remove();
        }
    }, 300);
}

// === AGREGAR ESTILOS DE ALERTA ===
function agregarEstilosAlerta() {
    if (document.getElementById('alerta-contacto-styles')) return;
    
    const styles = document.createElement('style');
    styles.id = 'alerta-contacto-styles';
    styles.textContent = `
        .alerta-contacto {
            position: fixed;
            top: 100px;
            right: 20px;
            z-index: 9999;
            background: white;
            border-radius: 16px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
            padding: 0;
            min-width: 320px;
            max-width: 400px;
            transform: translateX(calc(100% + 40px));
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .alerta-contacto.visible {
            transform: translateX(0);
        }
        
        .alerta-contenido {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1.25rem;
            position: relative;
        }
        
        .alerta-icono {
            flex-shrink: 0;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
        }
        
        .alerta-error .alerta-icono {
            background: #ffebee;
            color: #f44336;
        }
        
        .alerta-info .alerta-icono {
            background: #e3f2fd;
            color: #2196f3;
        }
        
        .alerta-texto {
            flex: 1;
            margin: 0;
            font-size: 0.95rem;
            color: var(--text-primary);
            line-height: 1.5;
        }
        
        .alerta-cerrar {
            position: absolute;
            top: 10px;
            right: 10px;
            background: none;
            border: none;
            color: var(--text-secondary);
            cursor: pointer;
            padding: 5px;
            border-radius: 50%;
            transition: all 0.2s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .alerta-cerrar:hover {
            background: rgba(0, 0, 0, 0.05);
            color: var(--text-primary);
        }
        
        @media (max-width: 480px) {
            .alerta-contacto {
                right: 10px;
                left: 10px;
                min-width: auto;
                max-width: none;
            }
        }
    `;
    
    document.head.appendChild(styles);
}

// === MOSTRAR CONFIRMACIÓN ===
function mostrarConfirmacionContacto(asunto) {
    const asuntoTexto = asuntosMap[asunto] || 'tu mensaje';
    
    const confirmacion = document.createElement('div');
    confirmacion.className = 'confirmacion-contacto-overlay';
    confirmacion.innerHTML = `
        <div class="confirmacion-contacto-card">
            <div class="confirmacion-contacto-icono">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
            </div>
            <h3>¡Mensaje Enviado!</h3>
            <p>Te hemos redirigido a WhatsApp con ${asuntoTexto}. Nuestro equipo te responderá lo antes posible.</p>
            <p class="confirmacion-horario">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                </svg>
                Horario de atención: Lun - Vie, 9:00 AM - 5:00 PM
            </p>
            <button class="btn-cerrar-confirmacion-contacto">Entendido</button>
        </div>
    `;
    
    document.body.appendChild(confirmacion);
    agregarEstilosConfirmacionContacto();
    
    setTimeout(() => {
        confirmacion.classList.add('visible');
    }, 50);
    
    // Botón cerrar
    const btnCerrar = confirmacion.querySelector('.btn-cerrar-confirmacion-contacto');
    btnCerrar.addEventListener('click', () => {
        confirmacion.classList.remove('visible');
        setTimeout(() => {
            confirmacion.remove();
        }, 300);
    });
    
    // Cerrar al hacer click fuera
    confirmacion.addEventListener('click', (e) => {
        if (e.target === confirmacion) {
            btnCerrar.click();
        }
    });
}

// === AGREGAR ESTILOS DE CONFIRMACIÓN ===
function agregarEstilosConfirmacionContacto() {
    if (document.getElementById('confirmacion-contacto-styles')) return;
    
    const styles = document.createElement('style');
    styles.id = 'confirmacion-contacto-styles';
    styles.textContent = `
        .confirmacion-contacto-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(5px);
            z-index: 10001;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
            padding: 1rem;
        }
        
        .confirmacion-contacto-overlay.visible {
            opacity: 1;
        }
        
        .confirmacion-contacto-card {
            background: white;
            padding: 3rem 2rem;
            border-radius: 24px;
            max-width: 500px;
            width: 100%;
            text-align: center;
            transform: scale(0.9);
            transition: transform 0.3s ease;
        }
        
        .confirmacion-contacto-overlay.visible .confirmacion-contacto-card {
            transform: scale(1);
        }
        
        .confirmacion-contacto-icono {
            width: 100px;
            height: 100px;
            margin: 0 auto 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
            color: white;
            border-radius: 50%;
        }
        
        .confirmacion-contacto-card h3 {
            font-size: 2rem;
            font-weight: 900;
            color: var(--text-primary);
            margin-bottom: 1rem;
        }
        
        .confirmacion-contacto-card p {
            font-size: 1.1rem;
            color: var(--text-secondary);
            line-height: 1.7;
            margin-bottom: 1rem;
        }
        
        .confirmacion-horario {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            font-size: 0.95rem;
            color: var(--text-secondary);
            margin-bottom: 2rem;
        }
        
        .btn-cerrar-confirmacion-contacto {
            padding: 1rem 2.5rem;
            background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
            color: white;
            font-size: 1rem;
            font-weight: 600;
            border-radius: 50px;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .btn-cerrar-confirmacion-contacto:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(37, 211, 102, 0.3);
        }
        
        @media (max-width: 480px) {
            .confirmacion-contacto-card {
                padding: 2rem 1.5rem;
            }
            
            .confirmacion-contacto-icono {
                width: 80px;
                height: 80px;
            }
            
            .confirmacion-contacto-card h3 {
                font-size: 1.6rem;
            }
            
            .confirmacion-contacto-card p {
                font-size: 1rem;
            }
        }
    `;
    
    document.head.appendChild(styles);
}

// === ANIMACIÓN DE ENTRADA DE LA SECCIÓN ===
function animarSeccionContacto() {
    const contactoSection = document.querySelector('.contacto');
    if (!contactoSection) return;

    const contactoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                
                const header = entry.target.querySelector('.section-header');
                if (header) {
                    header.style.opacity = '1';
                    header.style.transform = 'translateY(0)';
                }
                
                contactoObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Preparar header para animación
    const header = contactoSection.querySelector('.section-header');
    if (header) {
        header.style.opacity = '0';
        header.style.transform = 'translateY(30px)';
        header.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    }
    
    contactoObserver.observe(contactoSection);
}

// === INICIALIZACIÓN AL CARGAR EL DOM ===
document.addEventListener('DOMContentLoaded', () => {
    initContacto();
});

// === LOG DE CARGA ===
console.log('📞 Sistema de contacto cargado correctamente');


/* ============================================
   BOTÓN APOYAR AHORA - WHATSAPP DIRECTO
   ============================================ */

// === CONFIGURACIÓN ===
const WHATSAPP_APOYO = '573216818455';

// === SETUP BOTÓN APOYAR AHORA ===
function setupBotonApoyarAhora() {
    const btnApoyarAhora = document.getElementById('btnApoyarAhora');
    
    if (!btnApoyarAhora) {
        console.warn('⚠️ Botón Apoyar Ahora no encontrado');
        return;
    }

    btnApoyarAhora.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Mensaje por defecto
        const mensaje = '¡Hola! Me gustaría apoyar a la fundación FUNDAMENTE. ¿Cómo puedo ayudar?';
        
        // Codificar mensaje
        const mensajeCodificado = encodeURIComponent(mensaje);
        
        // Construir URL de WhatsApp
        const url = `https://wa.me/${WHATSAPP_APOYO}?text=${mensajeCodificado}`;
        
        // Abrir WhatsApp en nueva pestaña
        window.open(url, '_blank');
        
        // Tracking
        if (typeof trackEvent === 'function') {
            trackEvent('CTA', 'Click Apoyar Ahora', 'Navbar');
        }
        
        console.log('📱 Redirigiendo a WhatsApp para apoyo...');
    });
    
    console.log('✅ Botón "Apoyar Ahora" configurado correctamente');
}

// === INICIALIZACIÓN ===
document.addEventListener('DOMContentLoaded', () => {
    setupBotonApoyarAhora();
});

// === BOTÓN APOYAR DEL HERO ===
function setupBotonApoyarHero() {
    const btnApoyarHero = document.getElementById('btnApoyarHero');
    
    if (!btnApoyarHero) return;

    btnApoyarHero.addEventListener('click', (e) => {
        e.preventDefault();
        
        const mensaje = '¡Hola! Quiero apoyar a FUNDAMENTE. ¿Cómo puedo colaborar con sus programas?';
        const mensajeCodificado = encodeURIComponent(mensaje);
        const url = `https://wa.me/${WHATSAPP_APOYO}?text=${mensajeCodificado}`;
        
        window.open(url, '_blank');
        
        if (typeof trackEvent === 'function') {
            trackEvent('CTA', 'Click Apoyar', 'Hero Section');
        }
    });
}

// Agregar al DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    setupBotonApoyarAhora();
    setupBotonApoyarHero(); // <-- Agregar esta línea
});