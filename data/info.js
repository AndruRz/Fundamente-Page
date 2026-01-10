// ============================================
// DATA/INFO.JS - Información del Equipo FUNDAMENTE
// ============================================

const teamData = {
    clara: {
        id: 'clara',
        nombre: 'Clara Inés Estacio Saavedra',
        rol: 'Ingeniera Industrial',
        especialidad: 'Coordinación General & Estrategia',
        email: 'clara.estacio@fundamente.org',
        telefono: '+57 123 456 7890',
        
        // Imágenes
        imagenPrincipal: './public/img/team/clara-estacio.jpg',
        imagenModal: './public/img/FondoClara.jpg',
        galeria: [
            './public/img/team/gallery/clara-1.jpg',
            './public/img/team/gallery/clara-2.jpg',
            './public/img/team/gallery/clara-3.jpg'
        ],
        
        // Información extendida
        biografia: 'Ingeniera Industrial con más de 10 años de experiencia en gestión de proyectos sociales y desarrollo comunitario. Fundadora y directora de FUNDAMENTE, ha liderado iniciativas que han transformado la vida de cientos de familias en Ciudad Córdoba.',
        
        experiencia: [
            {
                cargo: 'Directora General',
                organizacion: 'FUNDAMENTE',
                periodo: '2022 - Presente',
                descripcion: 'Coordinación estratégica y dirección general de la fundación.'
            },
            {
                cargo: 'Gerente de Proyectos Sociales',
                organizacion: 'Fundación Solidaridad',
                periodo: '2018 - 2022',
                descripcion: 'Gestión de programas de desarrollo comunitario en el Valle del Cauca.'
            },
            {
                cargo: 'Coordinadora de Programas',
                organizacion: 'ONG Desarrollo Integral',
                periodo: '2013 - 2018',
                descripcion: 'Implementación de proyectos educativos y sociales.'
            }
        ],
        
        educacion: [
            {
                titulo: 'Ingeniería Industrial',
                institucion: 'Universidad del Valle',
                año: '2012'
            },
            {
                titulo: 'Especialización en Gerencia Social',
                institucion: 'Universidad Javeriana',
                año: '2016'
            }
        ],
        
        logros: [
            'Impacto directo en más de 500 vidas',
            'Implementación de 15 programas sociales exitosos',
            '3 reconocimientos por labor comunitaria',
            'Alianzas estratégicas con 8 organizaciones'
        ],
        
        habilidades: [
            'Gestión de Proyectos',
            'Liderazgo Estratégico',
            'Desarrollo Comunitario',
            'Captación de Recursos',
            'Trabajo en Equipo'
        ],
        
        redes: {
            linkedin: 'https://linkedin.com/in/clara-estacio',
            facebook: 'https://facebook.com/clara.estacio',
            instagram: '@clara.fundamente'
        }
    },
    
    carmenza: {
        id: 'carmenza',
        nombre: 'Carmenza Andrade Palta',
        rol: 'Trabajadora Social',
        especialidad: 'Desarrollo Comunitario & Bienestar Social',
        email: 'carmenza.andrade@fundamente.org',
        telefono: '+57 123 456 7891',
        
        imagenPrincipal: './public/img/team/carmenza-andrade.jpg',
        imagenModal: './public/img/fondoCarmenza.jpg',
        galeria: [
            './public/img/team/gallery/carmenza-1.jpg',
            './public/img/team/gallery/carmenza-2.jpg',
            './public/img/team/gallery/carmenza-3.jpg'
        ],
        
        biografia: 'Trabajadora Social apasionada por el desarrollo comunitario con más de 15 años de experiencia en intervención social y acompañamiento a familias vulnerables. Su enfoque humanista y empático ha sido clave en el éxito de los programas de FUNDAMENTE.',
        
        experiencia: [
            {
                cargo: 'Coordinadora de Trabajo Social',
                organizacion: 'FUNDAMENTE',
                periodo: '2022 - Presente',
                descripcion: 'Liderazgo en programas de desarrollo comunitario y bienestar familiar.'
            },
            {
                cargo: 'Trabajadora Social Senior',
                organizacion: 'Secretaría de Bienestar Social',
                periodo: '2015 - 2022',
                descripcion: 'Atención integral a familias en situación de vulnerabilidad.'
            },
            {
                cargo: 'Trabajadora Social',
                organizacion: 'Fundación Carvajal',
                periodo: '2008 - 2015',
                descripcion: 'Implementación de proyectos de intervención social.'
            }
        ],
        
        educacion: [
            {
                titulo: 'Trabajo Social',
                institucion: 'Universidad del Valle',
                año: '2008'
            },
            {
                titulo: 'Maestría en Desarrollo Social',
                institucion: 'Pontificia Universidad Javeriana',
                año: '2014'
            }
        ],
        
        logros: [
            'Atención a más de 300 familias',
            'Diseño de 5 programas de intervención comunitaria',
            'Reconocimiento Municipal por Labor Social 2020',
            'Formación de 20 líderes comunitarios'
        ],
        
        habilidades: [
            'Intervención Social',
            'Acompañamiento Familiar',
            'Desarrollo Comunitario',
            'Mediación de Conflictos',
            'Trabajo con Comunidades'
        ],
        
        redes: {
            linkedin: 'https://linkedin.com/in/carmenza-andrade',
            facebook: 'https://facebook.com/carmenza.andrade',
            instagram: '@carmenza.fundamente'
        }
    },
    
    david: {
        id: 'david',
        nombre: 'David Andrade Palta',
        rol: 'Administrador de Empresas',
        especialidad: 'Especialista en Administración Deportiva',
        email: 'david.andrade@fundamente.org',
        telefono: '+57 123 456 7892',
        
        imagenPrincipal: './public/img/DavidAndradePlata.jpg',
        imagenModal: './public/img/fondoDavid.jpg',
        galeria: [
            './public/img/team/gallery/david-1.jpg',
            './public/img/team/gallery/david-2.jpg',
            './public/img/team/gallery/david-3.jpg'
        ],
        
        biografia: 'Administrador de Empresas especializado en Administración Deportiva con 8 años de experiencia en la gestión de programas deportivos y recreativos. Su pasión por el deporte como herramienta de transformación social lo llevó a ser parte fundamental de FUNDAMENTE.',
        
        experiencia: [
            {
                cargo: 'Coordinador de Programas Deportivos',
                organizacion: 'FUNDAMENTE',
                periodo: '2022 - Presente',
                descripcion: 'Dirección y gestión de programas deportivos y recreativos.'
            },
            {
                cargo: 'Gerente de Escuelas Deportivas',
                organizacion: 'Instituto del Deporte de Cali',
                periodo: '2018 - 2022',
                descripcion: 'Administración de escuelas de formación deportiva.'
            },
            {
                cargo: 'Coordinador Deportivo',
                organizacion: 'Club Deportivo Aguablanca',
                periodo: '2015 - 2018',
                descripcion: 'Gestión de actividades deportivas comunitarias.'
            }
        ],
        
        educacion: [
            {
                titulo: 'Administración de Empresas',
                institucion: 'Universidad ICESI',
                año: '2014'
            },
            {
                titulo: 'Especialización en Administración Deportiva',
                institucion: 'Universidad Autónoma de Occidente',
                año: '2017'
            }
        ],
        
        logros: [
            'Formación de más de 200 deportistas',
            'Implementación de 8 disciplinas deportivas',
            'Organización de 12 torneos comunitarios',
            'Alianza con 5 clubes deportivos'
        ],
        
        habilidades: [
            'Gestión Deportiva',
            'Planificación de Programas',
            'Formación de Entrenadores',
            'Logística de Eventos',
            'Desarrollo de Talentos'
        ],
        
        redes: {
            linkedin: 'https://linkedin.com/in/david-andrade',
            facebook: 'https://facebook.com/david.andrade',
            instagram: '@david.fundamente'
        }
    },
    
    oscar: {
        id: 'oscar',
        nombre: 'Oscar Aarón Lucumi',
        rol: 'Tecnólogo en Mercadeo',
        especialidad: 'Comunicación & Gestión de Proyectos',
        email: 'oscar.lucumi@fundamente.org',
        telefono: '+57 123 456 7893',
        
        imagenPrincipal: './public/img/OscarAaronLucumi.png',
        imagenModal: './public/img/fondoOscar.jpg',
        galeria: [
            './public/img/hero-bg-layer-1.jpeg',
            './public/img/team/gallery/oscar-2.jpg',
            './public/img/team/gallery/oscar-3.jpg'
        ],
        
        biografia: 'Tecnólogo en Mercadeo con 6 años de experiencia en comunicación social y gestión de proyectos. Su creatividad y habilidad para contar historias ha sido fundamental para visibilizar el impacto de FUNDAMENTE y conectar con la comunidad.',
        
        experiencia: [
            {
                cargo: 'Coordinador de Comunicaciones',
                organizacion: 'FUNDAMENTE',
                periodo: '2022 - Presente',
                descripcion: 'Gestión de comunicaciones y marketing social de la fundación.'
            },
            {
                cargo: 'Gestor de Proyectos',
                organizacion: 'Agencia Impacto Social',
                periodo: '2019 - 2022',
                descripcion: 'Coordinación de proyectos de comunicación para ONGs.'
            },
            {
                cargo: 'Asistente de Mercadeo',
                organizacion: 'Fundación Paz y Bien',
                periodo: '2017 - 2019',
                descripcion: 'Apoyo en estrategias de comunicación y marketing.'
            }
        ],
        
        educacion: [
            {
                titulo: 'Tecnología en Mercadeo',
                institucion: 'SENA',
                año: '2016'
            },
            {
                titulo: 'Diplomado en Comunicación Social',
                institucion: 'Universidad Santiago de Cali',
                año: '2019'
            }
        ],
        
        logros: [
            'Liderazgo en 25+ proyectos de comunicación',
            'Incremento del 150% en visibilidad digital',
            'Creación de 10 campañas de impacto social',
            'Alianzas con 6 medios de comunicación'
        ],
        
        habilidades: [
            'Marketing Digital',
            'Comunicación Estratégica',
            'Gestión de Proyectos',
            'Creación de Contenido',
            'Redes Sociales'
        ],
        
        redes: {
            linkedin: 'https://linkedin.com/in/oscar-lucumi',
            facebook: 'https://facebook.com/oscar.lucumi',
            instagram: '@oscar.fundamente'
        }
    }
};

// Exportar los datos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = teamData;
}