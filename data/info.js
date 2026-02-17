// ============================================
// DATA/INFO.JS - Información del Equipo FUNDAMENTE
// ============================================

const teamData = {
    clara: {
            id: 'clara',
            nombre: 'Clara Inés Estacio Saavedra',
            rol: 'Trabajadora Social',
            especialidad: 'Coordinación General & Estrategia',
            email: '',
            telefono: '',
            
            // Imágenes
            imagenPrincipal: './public/img/clara-estacio.jpeg',
            imagenModal: './public/img/FondoClara.jpg',
            galeria: [],
            
            // Información extendida
            biografia: 'Trabajadora Social con formación en Salud Oral y especialización en Gestión de la Ciencia, Tecnología e Innovación para la Paz Territorial. Su enfoque integral combina el trabajo social comunitario con estrategias innovadoras para el desarrollo territorial y la construcción de paz.',
            
            experiencia: [],
            
            educacion: [
                {
                    titulo: 'Diplomado en Líderes en Gestión de la Ciencia, Tecnología e Innovación para la Paz Territorial',
                    institucion: '',
                    año: ''
                },
                {
                    titulo: 'Trabajadora Social',
                    institucion: '',
                    año: ''
                },
                {
                    titulo: 'Tecnóloga en Salud Oral',
                    institucion: '',
                    año: ''
                }
            ],
            
            logros: [],
            
            habilidades: [
                'Trabajo Social',
                'Salud Oral',
                'Gestión de Ciencia y Tecnología',
                'Innovación Social',
                'Paz Territorial',
                'Desarrollo Comunitario'
            ],
            
            redes: {
                linkedin: '',
                facebook: '',
                instagram: ''
            }
    },
    
    carmenza: {
        id: 'carmenza',
        nombre: 'Carmenza Andrade Palta',
        rol: 'Ingeniera Industrial',
        especialidad: 'Especialista en Mercadeo',
        email: '',
        telefono: '',
        
        imagenPrincipal: './public/img/carmenzaAndrade.jpeg',
        imagenModal: './public/img/fondoCarmenza.jpg',
        galeria: [],
        
        biografia: 'Ingeniera Industrial con especialización en Mercadeo.',
        
        experiencia: [],
        
        educacion: [
            {
                titulo: 'Ingeniería Industrial',
                institucion: '',
                año: ''
            },
            {
                titulo: 'Especialización en Mercadeo',
                institucion: '',
                año: ''
            },
            {
                titulo: 'Diplomado en Negociación Dura',
                institucion: '',
                año: ''
            },
            {
                titulo: 'Diplomado en PNL - Programación Neurolingüística',
                institucion: '',
                año: ''
            },
            {
                titulo: 'Inglés',
                institucion: 'Seminole College USA',
                año: ''
            }
        ],
        
        logros: [],
        
        habilidades: [
            'Ingeniería Industrial',
            'Mercadeo',
            'Negociación Dura',
            'Programación Neurolingüística (PNL)'
        ],
        
        idiomas: [
            'Español',
            'Inglés'
        ],
        
        redes: {
            linkedin: '',
            facebook: '',
            instagram: ''
        }
    },
    
    david: {
        id: 'david',
        nombre: 'David Andrade Palta',
        rol: 'Administrador de Empresas',
        especialidad: 'Especialista en Administración Deportiva',
        email: '',
        telefono: '',
        
        imagenPrincipal: './public/img/DavidAndradePlata.jpg',
        imagenModal: './public/img/fondoDavid.jpg',
        galeria: [],
        
        biografia: '',
        
        experiencia: [],
        
        educacion: [],
        
        logros: [],
        
        habilidades: [],
        
        redes: {
            linkedin: '',
            facebook: '',
            instagram: ''
        }
    },
    
    oscar: {
        id: 'oscar',
        nombre: 'Oscar Aarón Lucumi',
        rol: 'Tecnólogo en Mercadeo',
        especialidad: 'Comunicación & Gestión de Proyectos',
        email: '',
        telefono: '',
        
        imagenPrincipal: './public/img/OscarAaronLucumi.png',
        imagenModal: './public/img/fondoOscar.jpg',
        galeria: [],
        
        biografia: '',
        
        experiencia: [],
        
        educacion: [],
        
        logros: [],
        
        habilidades: [],
        
        redes: {
            linkedin: '',
            facebook: '',
            instagram: ''
        }
    },

    wilson: {
        id: 'wilson',
        nombre: 'Wilson H.',
        rol: 'Administrador Público',
        especialidad: 'Gobierno & Políticas Públicas',
        email: '',
        telefono: '',
        
        // Imágenes
        imagenPrincipal: './public/img/WilsonH.jpg',
        imagenModal: './public/img/fondoWilson.jpg',
        galeria: [],
        
        // Información extendida
        biografia: 'Magíster en Gobierno y Políticas Públicas y Especialista en Proyectos de Desarrollo. Experto en conectar la gestión pública con el impacto social. Dedicado al diseño de proyectos territoriales y al fortalecimiento comunitario. Administrador Público de profesión y gestor social por vocación.',
        
        experiencia: [],
        
        educacion: [
            {
                titulo: 'Magíster en Gobierno y Políticas Públicas',
                institucion: '',
                año: ''
            },
            {
                titulo: 'Especialista en Proyectos de Desarrollo',
                institucion: '',
                año: ''
            },
            {
                titulo: 'Administrador Público',
                institucion: '',
                año: ''
            }
        ],
        
        logros: [],
        
        habilidades: [
            'Gestión Pública',
            'Políticas Públicas',
            'Proyectos de Desarrollo',
            'Diseño de Proyectos Territoriales',
            'Fortalecimiento Comunitario',
            'Gestión Social'
        ],
        
        redes: {
            linkedin: '',
            facebook: '',
            instagram: ''
        }
    }
};

// Exportar los datos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = teamData;
}