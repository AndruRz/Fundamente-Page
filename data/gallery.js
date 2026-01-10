/* ============================================
   GALLERY.JS - Datos de Galería FUNDAMENTE
   ============================================ */

const galleryData = [
    {
        id: 1,
        type: 'image', // 'image' o 'video'
        src: './public/img/masqueunregalounaesperanza.jpg',
        thumbnail: './public/img/masqueunregalounaesperanza.jpg', // Opcional
        orientation: 'horizontal', // 'horizontal' o 'vertical'
        alt: 'Más que un regalo, una esperanza.',
        descripcion: 'Transformando realidades en el Distrito de Aguablanca'
    },
    {
        id: 2,
        type: 'image',
        src: './public/img/Imapctoquedibujsonrisas.jpg',
        thumbnail: './public/img/Imapctoquedibujsonrisas.jpg',
        orientation: 'vertical',
        alt: 'Impacto que dibuja sonrisas',
        descripcion: 'Nuestra labor se refleja en la felicidad de nuestros niños.'
    },
    {
        id: 3,
        type: 'video',
        src: './public/video/lafelicidadnotieneprecio.mp4',
        thumbnail: './public/img/gallery/thumbs/video-1-thumb.jpg',
        orientation: 'horizontal',
        alt: 'Video de actividade con ls niños de barrios vunerables',
        descripcion: 'La Felicidad de un niño no tiene precio'
    },
    {
        id: 4,
        type: 'image',
        src: './public/img/entregaderopaalimentos.jpg',
        thumbnail: './public/img/entregaderopaalimentos.jpg',
        orientation: 'horizontal',
        alt: 'La verdadera riqueza está en ayudar.',
        descripcion: 'Llevamos alegría y donaciones al barrio La Paz. ¡Gracias a Dios por permitirnos servir!'
    },
    {
        id: 5,
        type: 'image',
        src: './public/img/apoyoanuevostalentos.jpg',
        thumbnail: './public/img/apoyoanuevostalentos.jpg',
        orientation: 'vertical',
        alt: 'Descubriendo nuevos talentos.',
        descripcion: 'Apoyamos el sueño de nuestras futuras atletas con pasión y compromiso'
    },
    {
        id: 6,
        type: 'video',
        src: './public/video/Fortalecimientosocialyalegría.mp4',
        thumbnail: './public/img/Fortalecimientosocialyalegría.jpg',
        orientation: 'vertical',
        alt: 'Unidos por el bienestar social.',
        descripcion: 'Capturando momentos mágicos y regalos que llenan el alma en el asentamiento La Paz.'
    },
    {
        id: 7,
        type: 'image',
        src: './public/img/entregadereaglosnavidad2025.jpg',
        thumbnail: './public/img/entregadereaglosnavidad2025.jpg',
        orientation: 'horizontal',
        alt: 'Cambiando el mundo paso a paso.',
        descripcion: 'Compartiendo bendiciones y transformando nuestro entorno con pequeñas grandes acciones.'
    },
    {
        id: 8,
        type: 'image',
        src: './public/img/entregadeequipodeportivo.jpg',
        thumbnail: './public/img/entregadeequipodeportivo.jpg',
        orientation: 'vertical',
        alt: 'Equipando sueños deportivos',
        descripcion: 'Fomentamos el talento y la vida sana entregando herramientas para el deporte'
    },
    {
        id: 9,
        type: 'video',
        src: './public/video/regaloutiles.mp4',
        thumbnail: './public/img/regaloutiles.jpg',
        orientation: 'horizontal',
        alt: 'Sembrando futuro con educación.',
        descripcion: 'Equipamos sueños con la entrega de útiles escolares. ¡Su felicidad es nuestra mayor recompensa!'
    }
];

// Función auxiliar para detectar automáticamente la orientación
// (útil si no quieres especificarla manualmente)
function detectOrientation(imageSrc) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = function() {
            const orientation = this.width >= this.height ? 'horizontal' : 'vertical';
            resolve(orientation);
        };
        img.onerror = function() {
            resolve('horizontal'); // Default
        };
        img.src = imageSrc;
    });
}

// Exportar datos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { galleryData, detectOrientation };
}