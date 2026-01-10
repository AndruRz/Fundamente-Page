/* ============================================
   PROGRAMAS.JS - DATA DE PROGRAMAS FUNDAMENTE
   ============================================ */

const programasData = {
    // ========================================
    // PROGRAMA 1: EDUCACIÓN
    // ========================================
    educacion: {
        // Información básica
        id: 'educacion',
        nombre: 'Programa de Educación',
        tagline: 'Construyendo Futuros a Través del Conocimiento',
        
        // Hero de la página
        hero: {
            titulo: 'Educación que Transforma',
            subtitulo: 'Brindamos refuerzo escolar, alfabetización y herramientas educativas para que los niños de Ciudad Córdoba alcancen su máximo potencial académico',
            imagen: '../public/img/tallerdepintura-educacion.jpg',
            estadisticas: [
                { numero: 200, label: 'Niños beneficiados', sufijo: '+' },
                { numero: 85, label: 'Mejora académica', sufijo: '%' },
                { numero: 15, label: 'Talleres mensuales', sufijo: '' }
            ]
        },

        // Resumen del programa
        resumen: {
            mision: 'Fortalecer el aprendizaje y desarrollo académico de los niños y niñas de Ciudad Córdoba a través de programas de refuerzo escolar, alfabetización y talleres educativos que complementen su formación.',
            vision: 'Ser reconocidos como el principal programa de apoyo educativo en el Distrito de Aguablanca, reduciendo la deserción escolar y mejorando significativamente el rendimiento académico de nuestra comunidad.',
            impacto: 'Desde 2022, hemos apoyado a más de 200 niños con refuerzo escolar personalizado, logrando un 85% de mejora en sus calificaciones y reduciendo la deserción escolar en un 40% en la zona.'
        },

        // Objetivos específicos
        objetivos: [
            {
                icono: 'book-open',
                titulo: 'Reducir la Deserción Escolar',
                descripcion: 'Mantener a los niños motivados y comprometidos con su educación mediante apoyo continuo y seguimiento personalizado.'
            },
            {
                icono: 'trending-up',
                titulo: 'Mejorar el Rendimiento Académico',
                descripcion: 'Incrementar las calificaciones promedio en un 80% mediante refuerzo en las materias de mayor dificultad.'
            },
            {
                icono: 'users',
                titulo: 'Fortalecer Habilidades de Lectura',
                descripcion: 'Desarrollar clubes de lectura que fomenten el amor por los libros y mejoren la comprensión lectora.'
            },
            {
                icono: 'award',
                titulo: 'Alfabetización Digital',
                descripcion: 'Introducir a los niños en el uso básico de computadoras y herramientas digitales para el siglo XXI.'
            }
        ],

        // Proyectos destacados
        proyectosDestacados: [
            {
                id: 'refuerzo-matematicas',
                nombre: 'Refuerzo en Matemáticas y Ciencias',
                descripcion: 'Programa intensivo de apoyo en matemáticas y ciencias para estudiantes de primaria con dificultades académicas.',
                periodo: '2023 - Actualidad',
                beneficiarios: 120,
                logros: [
                    'Aumento del 90% en calificaciones de matemáticas',
                    '35 estudiantes recuperaron el año escolar',
                    'Creación de 4 grupos de estudio permanentes',
                    'Desarrollo de material didáctico propio'
                ],
                imagen: './public/img/programas/educacion/proyecto-matematicas.jpg',
                galeria: [
                    './public/img/programas/educacion/matematicas-1.jpg',
                    './public/img/programas/educacion/matematicas-2.jpg',
                    './public/img/programas/educacion/matematicas-3.jpg',
                    './public/img/programas/educacion/matematicas-4.jpg'
                ],
                testimonios: [
                    {
                        nombre: 'María Rodríguez',
                        rol: 'Madre de beneficiaria',
                        texto: 'Mi hija pasó de perder matemáticas a ser una de las mejores de su clase. Las profesoras del programa son increíbles y muy dedicadas.',
                        foto: './public/img/testimonios/maria-rodriguez.jpg',
                        video: null
                    },
                    {
                        nombre: 'Carlos Andrés, 11 años',
                        rol: 'Estudiante del programa',
                        texto: 'Antes odiaba las matemáticas, ahora son mi materia favorita. Los profes nos enseñan de una forma muy divertida.',
                        foto: './public/img/testimonios/carlos-andres.jpg',
                        video: './public/video/testimonios/carlos-matematicas.mp4'
                    }
                ],
                metricas: {
                    participacion: 95,
                    satisfaccion: 92,
                    mejora: 90,
                    retencion: 88
                }
            },

            {
                id: 'club-lectura',
                nombre: 'Club de Lectura "Mil y Un Cuentos"',
                descripcion: 'Espacio creativo donde los niños descubren el placer de leer a través de cuentos, talleres de escritura creativa y actividades lúdicas.',
                periodo: '2022 - Actualidad',
                beneficiarios: 80,
                logros: [
                    '15 talleres de lectura mensuales',
                    'Biblioteca comunitaria con 500+ libros',
                    '3 concursos de cuento corto realizados',
                    '50 niños leyendo 2+ libros al mes'
                ],
                imagen: './public/img/programas/educacion/proyecto-lectura.jpg',
                galeria: [
                    './public/img/programas/educacion/lectura-1.jpg',
                    './public/img/programas/educacion/lectura-2.jpg',
                    './public/img/programas/educacion/lectura-3.jpg',
                    './public/img/programas/educacion/lectura-4.jpg'
                ],
                testimonios: [
                    {
                        nombre: 'Ana Lucía Perea',
                        rol: 'Coordinadora del Club',
                        texto: 'Ver cómo los niños pasan de no querer leer a pelearse por llevarse un libro a casa es simplemente mágico. Hemos creado una comunidad de pequeños lectores.',
                        foto: './public/img/testimonios/ana-lucia.jpg',
                        video: './public/video/testimonios/ana-club-lectura.mp4'
                    },
                    {
                        nombre: 'Sofía, 9 años',
                        rol: 'Participante del Club',
                        texto: 'Ahora leo todos los días. Mi libro favorito es "Matilda". Cuando sea grande quiero escribir mis propios cuentos.',
                        foto: './public/img/testimonios/sofia-lectora.jpg',
                        video: null
                    }
                ],
                metricas: {
                    participacion: 98,
                    satisfaccion: 96,
                    mejora: 85,
                    retencion: 94
                }
            }
        ],

        // Actividades regulares
        actividades: [
            {
                nombre: 'Refuerzo Escolar Personalizado',
                frecuencia: 'Lunes a Viernes',
                horario: '2:00 PM - 5:00 PM',
                descripcion: 'Apoyo individualizado en tareas escolares y preparación para exámenes.',
                cupos: 40,
                edades: '6-14 años'
            },
            {
                nombre: 'Taller de Lectura Recreativa',
                frecuencia: 'Miércoles y Viernes',
                horario: '3:00 PM - 4:30 PM',
                descripcion: 'Sesiones de lectura compartida, narración de cuentos y actividades lúdicas.',
                cupos: 25,
                edades: '5-10 años'
            },
            {
                nombre: 'Alfabetización Digital',
                frecuencia: 'Sábados',
                horario: '9:00 AM - 12:00 PM',
                descripcion: 'Introducción a computadoras, internet y herramientas educativas digitales.',
                cupos: 20,
                edades: '10-15 años'
            },
            {
                nombre: 'Club de Tareas',
                frecuencia: 'Martes y Jueves',
                horario: '2:30 PM - 4:30 PM',
                descripcion: 'Espacio para que los niños hagan sus deberes con supervisión y apoyo.',
                cupos: 35,
                edades: '7-13 años'
            }
        ],

        // Recursos necesarios
        necesidades: [
            {
                categoria: 'Material Escolar',
                items: [
                    'Cuadernos y lápices',
                    'Libros de texto y lectura',
                    'Material didáctico (cartulinas, marcadores, etc.)',
                    'Mochilas escolares'
                ]
            },
            {
                categoria: 'Tecnología',
                items: [
                    'Computadoras portátiles',
                    'Tablets educativas',
                    'Proyector',
                    'Impresora'
                ]
            },
            {
                categoria: 'Mobiliario',
                items: [
                    'Mesas y sillas',
                    'Estanterías para biblioteca',
                    'Pizarras',
                    'Iluminación adecuada'
                ]
            },
            {
                categoria: 'Talento Humano',
                items: [
                    'Profesores voluntarios',
                    'Tutores universitarios',
                    'Psicopedagogos',
                    'Coordinador académico'
                ]
            }
        ],

        // Próximos pasos y metas 2026
        futuro: {
            titulo: '¿Qué Viene para 2026?',
            descripcion: 'Continuamos expandiendo nuestro impacto educativo con nuevas iniciativas y programas innovadores.',
            metas: [
                {
                    objetivo: 'Alcanzar 300 niños beneficiados',
                    plazo: 'Junio 2026',
                    progreso: 67
                },
                {
                    objetivo: 'Crear aula de informática equipada',
                    plazo: 'Marzo 2026',
                    progreso: 40
                },
                {
                    objetivo: 'Lanzar programa de becas escolares',
                    plazo: 'Agosto 2026',
                    progreso: 25
                },
                {
                    objetivo: 'Biblioteca con 1000+ libros',
                    plazo: 'Diciembre 2026',
                    progreso: 50
                }
            ],
            nuevosProyectos: [
                'Tutorías virtuales con universitarios',
                'Programa de inglés básico',
                'Festival de Ciencias para niños',
                'Red de padres alfabetizadores'
            ]
        },

        // Cómo ayudar específicamente a este programa
        comoAyudar: {
            voluntariado: [
                'Ser tutor/a de refuerzo escolar',
                'Liderar talleres de lectura',
                'Enseñar alfabetización digital',
                'Apoyar con tareas y deberes'
            ],
            donaciones: [
                'Material escolar (cuadernos, lápices)',
                'Libros infantiles y juveniles',
                'Equipos tecnológicos',
                'Donación monetaria mensual'
            ],
            alianzas: [
                'Colegios que donen material educativo',
                'Universidades que envíen tutores',
                'Empresas tecnológicas (equipos)',
                'Editoriales que donen libros'
            ]
        },

        // Galería general del programa
        galeria: [
            {
                tipo: 'imagen',
                src: './public/img/programas/educacion/galeria-1.jpg',
                alt: 'Niños en clase de refuerzo',
                descripcion: 'Sesión de refuerzo escolar en matemáticas'
            },
            {
                tipo: 'imagen',
                src: './public/img/programas/educacion/galeria-2.jpg',
                alt: 'Club de lectura',
                descripcion: 'Club de lectura "Mil y Un Cuentos"'
            },
            {
                tipo: 'video',
                src: './public/video/programas/educacion/resumen-programa.mp4',
                thumbnail: './public/img/programas/educacion/video-thumb.jpg',
                alt: 'Video resumen del programa',
                descripcion: 'Resumen de actividades educativas 2024'
            },
            {
                tipo: 'imagen',
                src: './public/img/programas/educacion/galeria-3.jpg',
                alt: 'Taller de computación',
                descripcion: 'Taller de alfabetización digital'
            },
            {
                tipo: 'imagen',
                src: './public/img/programas/educacion/galeria-4.jpg',
                alt: 'Entrega de diplomas',
                descripcion: 'Graduación de estudiantes destacados'
            },
            {
                tipo: 'imagen',
                src: './public/img/programas/educacion/galeria-5.jpg',
                alt: 'Biblioteca comunitaria',
                descripcion: 'Nuestra biblioteca comunitaria'
            }
        ],

        // FAQs del programa
        faqs: [
            {
                pregunta: '¿El programa tiene algún costo?',
                respuesta: 'No, todos nuestros programas educativos son completamente gratuitos para las familias de la comunidad.'
            },
            {
                pregunta: '¿Qué edades pueden participar?',
                respuesta: 'Nuestros programas están diseñados para niños entre 5 y 15 años, divididos en grupos según edad y nivel educativo.'
            },
            {
                pregunta: '¿Cómo puedo inscribir a mi hijo/a?',
                respuesta: 'Puedes contactarnos por WhatsApp al 321 455 4594 o visitar nuestra sede en Ciudad Córdoba para más información sobre inscripciones.'
            },
            {
                pregunta: '¿Qué materiales debe llevar el niño?',
                respuesta: 'Solo sus cuadernos y útiles escolares básicos. Nosotros proporcionamos material adicional cuando es necesario.'
            },
            {
                pregunta: '¿Hay seguimiento del progreso académico?',
                respuesta: 'Sí, hacemos seguimiento mensual y entregamos reportes a los padres sobre el avance de cada niño.'
            }
        ],

        // Contacto específico del programa
        contacto: {
            coordinador: 'Clara Inés Estacio Saavedra',
            email: 'educacion@fundamente.org',
            telefono: '+57 321 455 4594',
            horarioAtencion: 'Lunes a Viernes, 2:00 PM - 6:00 PM'
        }
    },

    // ========================================
    // PROGRAMA 2: DEPORTE
    // ========================================
    deporte: {
        // Información básica
        id: 'deporte',
        nombre: 'Programa de Deporte',
        tagline: 'Formando Campeones Dentro y Fuera de la Cancha',
        
        // Hero de la página
        hero: {
            titulo: 'Deporte que Forma Valores',
            subtitulo: 'Promovemos la actividad física, el trabajo en equipo y la disciplina como herramientas fundamentales para el desarrollo integral de niños y jóvenes',
            imagen: './public/img/programas/deporte/hero-deporte.jpg',
            estadisticas: [
                { numero: 150, label: 'Deportistas activos', sufijo: '+' },
                { numero: 8, label: 'Disciplinas ofrecidas', sufijo: '' },
                { numero: 20, label: 'Entrenamientos semanales', sufijo: '' }
            ]
        },

        // Resumen del programa
        resumen: {
            mision: 'Alejar a los niños y jóvenes de entornos de riesgo mediante la práctica deportiva, fomentando hábitos saludables, disciplina, respeto y trabajo en equipo que contribuyan a su desarrollo integral.',
            vision: 'Convertirnos en la escuela deportiva de referencia en el Distrito de Aguablanca, formando no solo deportistas de alto rendimiento, sino ciudadanos ejemplares con valores sólidos.',
            impacto: 'Desde 2022, hemos mantenido a más de 150 jóvenes activos en el deporte, reduciendo su exposición a situaciones de riesgo en un 70% y mejorando su salud física y emocional de manera significativa.'
        },

        // Objetivos específicos
        objetivos: [
            {
                icono: 'shield',
                titulo: 'Alejar de Entornos de Riesgo',
                descripcion: 'Brindar espacios seguros donde los jóvenes ocupen su tiempo libre de manera positiva, alejándolos de la violencia y las drogas.'
            },
            {
                icono: 'heart',
                titulo: 'Fomentar Hábitos Saludables',
                descripcion: 'Promover la actividad física regular, alimentación balanceada y cuidado del cuerpo como estilo de vida.'
            },
            {
                icono: 'users',
                titulo: 'Desarrollar Trabajo en Equipo',
                descripcion: 'Enseñar valores de cooperación, solidaridad y respeto mediante deportes colectivos e individuales.'
            },
            {
                icono: 'trophy',
                titulo: 'Formar Líderes Deportivos',
                descripcion: 'Identificar y potenciar talentos deportivos que puedan representar a la comunidad en competencias.'
            }
        ],

        // Proyectos destacados
        proyectosDestacados: [
            {
                id: 'escuela-futbol',
                nombre: 'Escuela de Fútbol "Águilas de Córdoba"',
                descripcion: 'Programa de formación futbolística que combina entrenamiento técnico con valores y acompañamiento psicosocial para niños y jóvenes de la comunidad.',
                periodo: '2022 - Actualidad',
                beneficiarios: 85,
                logros: [
                    '3 equipos en diferentes categorías (sub-10, sub-13, sub-16)',
                    'Campeones torneo intercomunas 2023',
                    '12 jugadores seleccionados para pruebas en clubes profesionales',
                    'Participación en 15+ torneos locales',
                    '0 casos de deserción por violencia en participantes'
                ],
                imagen: './public/img/programas/deporte/proyecto-futbol.jpg',
                galeria: [
                    './public/img/programas/deporte/futbol-1.jpg',
                    './public/img/programas/deporte/futbol-2.jpg',
                    './public/img/programas/deporte/futbol-3.jpg',
                    './public/img/programas/deporte/futbol-4.jpg'
                ],
                testimonios: [
                    {
                        nombre: 'Jorge Henao',
                        rol: 'Entrenador - Licenciado en Educación Física',
                        texto: 'Lo más gratificante no es ganar partidos, sino ver cómo estos niños llegan con problemas de conducta y en 6 meses son completamente diferentes. El fútbol los transforma.',
                        foto: './public/img/testimonios/jorge-henao.jpg',
                        video: './public/video/testimonios/jorge-futbol.mp4'
                    },
                    {
                        nombre: 'Kevin Moreno, 14 años',
                        rol: 'Capitán Sub-16',
                        texto: 'Antes andaba en la calle sin hacer nada. Ahora entreno todos los días y sueño con ser futbolista profesional. Mis profesores dicen que hasta mejoré en el colegio.',
                        foto: './public/img/testimonios/kevin-moreno.jpg',
                        video: null
                    },
                    {
                        nombre: 'Luz Marina Perea',
                        rol: 'Madre de beneficiario',
                        texto: 'Mi hijo cambió totalmente desde que entró a las Águilas. Ahora es responsable, hace sus tareas y lo más importante, está alejado de las malas amistades.',
                        foto: './public/img/testimonios/luz-marina.jpg',
                        video: null
                    }
                ],
                metricas: {
                    participacion: 96,
                    satisfaccion: 94,
                    mejora: 88,
                    retencion: 91
                }
            },

            {
                id: 'baloncesto-femenino',
                nombre: 'Baloncesto Femenino "Leonas del Distrito"',
                descripcion: 'Escuela de baloncesto exclusiva para niñas y jóvenes, promoviendo el empoderamiento femenino, autoestima y liderazgo a través del deporte.',
                periodo: '2023 - Actualidad',
                beneficiarios: 45,
                logros: [
                    '2 equipos competitivos (sub-14 y sub-17)',
                    'Subcampeonas Copa Aguablanca 2024',
                    'Programa de mentoría: deportistas universitarias con niñas',
                    '100% de participantes mejoraron su autoestima',
                    'Alianza con Liga Vallecaucana de Baloncesto'
                ],
                imagen: './public/img/programas/deporte/proyecto-baloncesto.jpg',
                galeria: [
                    './public/img/programas/deporte/baloncesto-1.jpg',
                    './public/img/programas/deporte/baloncesto-2.jpg',
                    './public/img/programas/deporte/baloncesto-3.jpg',
                    './public/img/programas/deporte/baloncesto-4.jpg'
                ],
                testimonios: [
                    {
                        nombre: 'Daniela Mosquera',
                        rol: 'Entrenadora - Ex-jugadora profesional',
                        texto: 'Este programa no solo enseña baloncesto, enseña a las niñas que pueden lograr lo que se propongan. Ver su evolución como deportistas y como personas es increíble.',
                        foto: './public/img/testimonios/daniela-mosquera.jpg',
                        video: './public/video/testimonios/daniela-leonas.mp4'
                    },
                    {
                        nombre: 'Valentina Torres, 15 años',
                        rol: 'Jugadora destacada',
                        texto: 'Antes era muy tímida. El basquet me enseñó a creer en mí misma. Ahora soy capitana del equipo y me siento capaz de todo.',
                        foto: './public/img/testimonios/valentina-torres.jpg',
                        video: null
                    }
                ],
                metricas: {
                    participacion: 98,
                    satisfaccion: 97,
                    mejora: 92,
                    retencion: 95
                }
            },

            {
                id: 'multideportivo',
                nombre: 'Programa Multideportivo "Sábados Activos"',
                descripcion: 'Jornadas deportivas los sábados donde los niños pueden explorar diferentes disciplinas: atletismo, voleibol, patinaje, ultimate frisbee y más.',
                periodo: '2022 - Actualidad',
                beneficiarios: 70,
                logros: [
                    'Rotación mensual de 6 disciplinas deportivas',
                    '15 niños descubrieron su vocación deportiva',
                    'Creación de equipo de ultimate frisbee (único en la comuna)',
                    'Participación en olimpiadas barriales'
                ],
                imagen: './public/img/programas/deporte/proyecto-multideportivo.jpg',
                galeria: [
                    './public/img/programas/deporte/multi-1.jpg',
                    './public/img/programas/deporte/multi-2.jpg',
                    './public/img/programas/deporte/multi-3.jpg',
                    './public/img/programas/deporte/multi-4.jpg'
                ],
                testimonios: [
                    {
                        nombre: 'Camilo Vargas',
                        rol: 'Coordinador deportivo',
                        texto: 'La idea es que todos los niños encuentren un deporte que les apasione. No todos nacieron para el fútbol, algunos son velocistas, otros grandes en voleibol.',
                        foto: './public/img/testimonios/camilo-vargas.jpg',
                        video: null
                    }
                ],
                metricas: {
                    participacion: 89,
                    satisfaccion: 90,
                    mejora: 85,
                    retencion: 87
                }
            }
        ],

        // Actividades regulares
        actividades: [
            {
                nombre: 'Entrenamiento de Fútbol',
                frecuencia: 'Lunes, Miércoles y Viernes',
                horario: '4:00 PM - 6:00 PM',
                descripcion: 'Práctica técnica, táctica y partidos formativos para todas las categorías.',
                cupos: 90,
                edades: '8-17 años'
            },
            {
                nombre: 'Baloncesto Femenino',
                frecuencia: 'Martes y Jueves',
                horario: '4:30 PM - 6:30 PM',
                descripcion: 'Entrenamiento especializado en fundamentos y estrategia de baloncesto.',
                cupos: 50,
                edades: '10-18 años'
            },
            {
                nombre: 'Sábados Multideportivos',
                frecuencia: 'Sábados',
                horario: '8:00 AM - 12:00 PM',
                descripcion: 'Exploración de diferentes deportes en jornadas recreativas.',
                cupos: 80,
                edades: '6-15 años'
            },
            {
                nombre: 'Voleibol Mixto',
                frecuencia: 'Miércoles y Sábados',
                horario: '3:00 PM - 5:00 PM',
                descripcion: 'Práctica de voleibol para niños y niñas de todos los niveles.',
                cupos: 40,
                edades: '10-16 años'
            },
            {
                nombre: 'Acondicionamiento Físico',
                frecuencia: 'Lunes a Viernes',
                horario: '6:00 AM - 7:00 AM',
                descripcion: 'Rutinas de ejercicio para mejorar condición física general.',
                cupos: 30,
                edades: '14-20 años'
            }
        ],

        // Recursos necesarios
        necesidades: [
            {
                categoria: 'Implementos Deportivos',
                items: [
                    'Balones de fútbol, baloncesto y voleibol',
                    'Uniformes deportivos',
                    'Conos, petos y material de entrenamiento',
                    'Redes y arcos portátiles'
                ]
            },
            {
                categoria: 'Infraestructura',
                items: [
                    'Mantenimiento de cancha sintética',
                    'Iluminación para entrenamientos nocturnos',
                    'Graderías',
                    'Vestidores y baños'
                ]
            },
            {
                categoria: 'Seguridad y Salud',
                items: [
                    'Botiquín deportivo',
                    'Hidratación (termo y vasos)',
                    'Seguro deportivo',
                    'Fisioterapeuta'
                ]
            },
            {
                categoria: 'Talento Humano',
                items: [
                    'Entrenadores certificados',
                    'Preparador físico',
                    'Psicólogo deportivo',
                    'Nutricionista'
                ]
            }
        ],

        // Próximos pasos y metas 2026
        futuro: {
            titulo: 'Visión Deportiva 2026',
            descripcion: 'Expandir nuestras disciplinas deportivas y consolidar una academia integral de formación deportiva.',
            metas: [
                {
                    objetivo: 'Alcanzar 250 deportistas activos',
                    plazo: 'Diciembre 2026',
                    progreso: 60
                },
                {
                    objetivo: 'Inaugurar cancha de baloncesto techada',
                    plazo: 'Julio 2026',
                    progreso: 35
                },
                {
                    objetivo: 'Crear escuela de natación',
                    plazo: 'Octubre 2026',
                    progreso: 15
                },
                {
                    objetivo: 'Formar 5 entrenadores de la comunidad',
                    plazo: 'Agosto 2026',
                    progreso: 40
                }
            ],
            nuevosProyectos: [
                'Escuela de atletismo y velocidad',
                'Programa de natación comunitaria',
                'Liga interna de deportes',
                'Campamentos deportivos vacacionales',
                'Intercambios con otras fundaciones'
            ]
        },

        // Cómo ayudar específicamente a este programa
        comoAyudar: {
            voluntariado: [
                'Ser entrenador/a deportivo',
                'Apoyar como árbitro en partidos',
                'Organizar torneos y eventos',
                'Acompañar en entrenamientos'
            ],
            donaciones: [
                'Balones e implementos deportivos',
                'Uniformes y zapatos deportivos',
                'Equipamiento de canchas',
                'Donación para transporte a torneos'
            ],
            alianzas: [
                'Clubes deportivos profesionales',
                'Universidades con programas deportivos',
                'Empresas de implementos deportivos',
                'Ligas deportivas regionales'
            ]
        },

        // Galería general del programa
        galeria: [
            {
                tipo: 'imagen',
                src: './public/img/programas/deporte/galeria-1.jpg',
                alt: 'Entrenamiento de fútbol',
                descripcion: 'Sesión de entrenamiento Águilas de Córdoba'
            },
            {
                tipo: 'imagen',
                src: './public/img/programas/deporte/galeria-2.jpg',
                alt: 'Partido de baloncesto',
                descripcion: 'Leonas del Distrito en acción'
            },
            {
                tipo: 'video',
                src: './public/video/programas/deporte/resumen-deportivo.mp4',
                thumbnail: './public/img/programas/deporte/video-thumb.jpg',
                alt: 'Resumen deportivo 2024',
                descripcion: 'Lo mejor del año deportivo 2024'
            },
            {
                tipo: 'imagen',
                src: './public/img/programas/deporte/galeria-3.jpg',
                alt: 'Celebración de campeonato',
                descripcion: 'Celebrando el campeonato intercomunas'
            },
            {
                tipo: 'imagen',
                src: './public/img/programas/deporte/galeria-4.jpg',
                alt: 'Sábados multideportivos',
                descripcion: 'Jornada de sábados activos'
            },
            {
                tipo: 'imagen',
                src: './public/img/programas/deporte/galeria-5.jpg',
                alt: 'Entrega de uniformes',
                descripcion: 'Entrega de nuevos uniformes deportivos'
            },
            {
                tipo: 'video',
                src: './public/video/programas/deporte/testimonio-equipo.mp4',
                thumbnail: './public/img/programas/deporte/video-thumb-2.jpg',
                alt: 'Testimonios de deportistas',
                descripcion: 'Historias de nuestros deportistas'
            }
        ],

        // FAQs del programa
        faqs: [
            {
                pregunta: '¿Necesito experiencia previa para participar?',
                respuesta: 'No, aceptamos principiantes y deportistas de todos los niveles. Tenemos grupos según experiencia y edad.'
            },
            {
                pregunta: '¿El programa incluye uniformes?',
                respuesta: 'Sí, proporcionamos uniformes de entrenamiento. Para competencias oficiales, gestionamos donaciones o patrocinios.'
            },
            {
                pregunta: '¿Hay exámenes médicos?',
                respuesta: 'Realizamos valoraciones físicas básicas. Para deportes de alto rendimiento, recomendamos chequeo médico previo.'
            },
            {
                pregunta: '¿Participan en torneos externos?',
                respuesta: 'Sí, nuestros equipos participan regularmente en torneos intercomunas, intercolegiales y ligas locales.'
            },
            {
                pregunta: '¿Qué pasa si mi hijo/a falta a entrenamientos?',
                respuesta: 'Entendemos que pueden surgir imprevistos. Pedimos avisar con anticipación y mantener un mínimo de 80% de asistencia.'
            },
            {
                pregunta: '¿Solo fútbol y baloncesto?',
                respuesta: 'Principalmente esos dos, pero en Sábados Activos exploramos voleibol, atletismo, ultimate frisbee y más.'
            }
        ],

        // Contacto específico del programa
        contacto: {
            coordinador: 'David Andrade Palta',
            email: 'deporte@fundamente.org',
            telefono: '+57 321 455 4594',
            horarioAtencion: 'Lunes a Sábado, 3:00 PM - 7:00 PM'
        }
    },

    // ========================================
    // PROGRAMA 3: RECREACIÓN
    // ========================================
    recreacion: {
        // Información básica
        id: 'recreacion',
        nombre: 'Programa de Recreación',
        tagline: 'Espacios para Ser Niños, Crear y Soñar',
        
        // Hero de la página
        hero: {
            titulo: 'Recreación que Inspira',
            subtitulo: 'Creamos espacios seguros y lúdicos donde los niños desarrollan su creatividad, imaginación y habilidades socioemocionales a través del juego y las artes',
            imagen: './public/img/programas/recreacion/hero-recreacion.jpg',
            estadisticas: [
                { numero: 180, label: 'Participantes', sufijo: '+' },
                { numero: 12, label: 'Actividades mensuales', sufijo: '' },
                { numero: 100, label: 'Familias beneficiadas', sufijo: '+' }
            ]
        },

        // Resumen del programa
        resumen: {
            mision: 'Proporcionar espacios seguros de recreación y arte donde los niños puedan ser niños, desarrollando su personalidad, creatividad y vínculos afectivos sanos en un ambiente libre de violencia.',
            vision: 'Ser el principal referente de recreación comunitaria en el Distrito de Aguablanca, reconocidos por transformar el tiempo libre de los niños en experiencias significativas que fortalecen su desarrollo integral.',
            impacto: 'Desde 2022, hemos brindado más de 180 espacios recreativos mensuales, beneficiando a 180+ niños que ahora cuentan con alternativas sanas de entretenimiento, reduciendo en un 65% su exposición a entornos de riesgo durante el tiempo libre.'
        },

        // Objetivos específicos
        objetivos: [
            {
                icono: 'smile',
                titulo: 'Garantizar el Derecho al Juego',
                descripcion: 'Asegurar que todos los niños tengan acceso a espacios de juego y recreación seguros, inclusivos y estimulantes.'
            },
            {
                icono: 'palette',
                titulo: 'Estimular la Creatividad',
                descripcion: 'Desarrollar talleres artísticos y culturales que potencien la imaginación, expresión y talentos de cada niño.'
            },
            {
                icono: 'heart',
                titulo: 'Fortalecer Vínculos Afectivos',
                descripcion: 'Crear espacios donde los niños construyan amistades sanas, aprendan a relacionarse y desarrollen inteligencia emocional.'
            },
            {
                icono: 'sun',
                titulo: 'Promover Bienestar Emocional',
                descripcion: 'Ofrecer actividades que reduzcan el estrés, mejoren el estado de ánimo y fortalezcan la salud mental infantil.'
            }
        ],

        // Proyectos destacados
        proyectosDestacados: [
            {
                id: 'vacaciones-recreativas',
                nombre: 'Vacaciones Recreativas "Verano Feliz"',
                descripcion: 'Programa intensivo de actividades lúdicas, artísticas y deportivas durante períodos vacacionales, diseñado para que los niños disfruten sus vacaciones en un entorno seguro y divertido.',
                periodo: 'Vacaciones escolares - 2022 a la fecha',
                beneficiarios: 120,
                logros: [
                    '6 jornadas vacacionales realizadas (3 por año)',
                    'Promedio de 120 niños por jornada',
                    'Talleres de teatro, danza, pintura, manualidades',
                    'Excursiones a parques y museos',
                    '95% de satisfacción de padres y niños',
                    'Alimentación incluida en todas las jornadas'
                ],
                imagen: './public/img/programas/recreacion/proyecto-vacaciones.jpg',
                galeria: [
                    './public/img/programas/recreacion/vacaciones-1.jpg',
                    './public/img/programas/recreacion/vacaciones-2.jpg',
                    './public/img/programas/recreacion/vacaciones-3.jpg',
                    './public/img/programas/recreacion/vacaciones-4.jpg'
                ],
                testimonios: [
                    {
                        nombre: 'Mariana Castillo',
                        rol: 'Coordinadora de Recreación',
                        texto: 'Ver cómo los niños llegan el primer día tímidos y el último día no se quieren ir, es la prueba de que estamos haciendo bien las cosas. Creamos recuerdos que durarán toda la vida.',
                        foto: './public/img/testimonios/mariana-castillo.jpg',
                        video: './public/video/testimonios/mariana-recreacion.mp4'
                    },
                    {
                        nombre: 'Andrea Jiménez',
                        rol: 'Madre de 2 beneficiarios',
                        texto: 'Estas vacaciones son una bendición. Mis hijos están felices, seguros y yo puedo trabajar tranquila sabiendo que están bien cuidados y pasándola increíble.',
                        foto: './public/img/testimonios/andrea-jimenez.jpg',
                        video: null
                    },
                    {
                        nombre: 'Samuel, 8 años',
                        rol: 'Participante',
                        texto: 'Las vacaciones con FUNDAMENTE son lo mejor. Hice muchos amigos, aprendí a pintar y fuimos a la piscina. ¡Quiero que sean vacaciones todo el año!',
                        foto: './public/img/testimonios/samuel-niño.jpg',
                        video: null
                    }
                ],
                metricas: {
                    participacion: 97,
                    satisfaccion: 95,
                    mejora: 90,
                    retencion: 93
                }
            },

            {
                id: 'talleres-arte',
                nombre: 'Talleres de Arte y Cultura "Pequeños Artistas"',
                descripcion: 'Espacio permanente de exploración artística donde los niños descubren y desarrollan sus talentos en pintura, teatro, danza, música y manualidades.',
                periodo: '2022 - Actualidad',
                beneficiarios: 95,
                logros: [
                    'Montaje de 2 obras de teatro comunitarias',
                    'Exposición anual de arte infantil',
                    'Coro infantil con 25 niños',
                    'Grupo de danza folclórica (15 niños)',
                    'Participación en eventos culturales de la ciudad',
                    'Desarrollo de autoestima en 90% de participantes'
                ],
                imagen: './public/img/programas/recreacion/proyecto-arte.jpg',
                galeria: [
                    './public/img/programas/recreacion/arte-1.jpg',
                    './public/img/programas/recreacion/arte-2.jpg',
                    './public/img/programas/recreacion/arte-3.jpg',
                    './public/img/programas/recreacion/arte-4.jpg'
                ],
                testimonios: [
                    {
                        nombre: 'Carlos Mosquera',
                        rol: 'Instructor de Teatro',
                        texto: 'El arte tiene el poder de sacar lo mejor de cada niño. He visto niños que no hablaban convertirse en protagonistas de obras de teatro. Es mágico.',
                        foto: './public/img/testimonios/carlos-mosquera.jpg',
                        video: './public/video/testimonios/carlos-teatro.mp4'
                    },
                    {
                        nombre: 'Isabella, 10 años',
                        rol: 'Participante del taller de pintura',
                        texto: 'Antes no sabía que me gustaba pintar. Ahora hago cuadros y los pongo en mi casa. Mis papás están orgullosos y yo también.',
                        foto: './public/img/testimonios/isabella-arte.jpg',
                        video: null
                    }
                ],
                metricas: {
                    participacion: 92,
                    satisfaccion: 96,
                    mejora: 88,
                    retencion: 89
                }
            },

            {
                id: 'ludoteca-comunitaria',
                nombre: 'Ludoteca Comunitaria "El Rincón Mágico"',
                descripcion: 'Espacio permanente equipado con juegos, juguetes y materiales didácticos donde los niños pueden jugar libremente bajo supervisión, fomentando el aprendizaje a través del juego.',
                periodo: '2023 - Actualidad',
                beneficiarios: 60,
                logros: [
                    'Biblioteca de 200+ juegos didácticos',
                    'Apertura 5 días a la semana',
                    'Rotación mensual de actividades temáticas',
                    'Celebración de cumpleaños comunitarios',
                    'Espacio de juego libre y dirigido',
                    'Promedio de 30 niños diarios'
                ],
                imagen: './public/img/programas/recreacion/proyecto-ludoteca.jpg',
                galeria: [
                    './public/img/programas/recreacion/ludoteca-1.jpg',
                    './public/img/programas/recreacion/ludoteca-2.jpg',
                    './public/img/programas/recreacion/ludoteca-3.jpg',
                    './public/img/programas/recreacion/ludoteca-4.jpg'
                ],
                testimonios: [
                    {
                        nombre: 'Patricia Viveros',
                        rol: 'Encargada de la Ludoteca',
                        texto: 'La ludoteca se ha convertido en el segundo hogar de muchos niños. Aquí aprenden jugando, hacen amigos y sobre todo, son felices en un ambiente seguro.',
                        foto: './public/img/testimonios/patricia-viveros.jpg',
                        video: null
                    },
                    {
                        nombre: 'Julián González',
                        rol: 'Padre de beneficiaria',
                        texto: 'Mi hija sale del colegio y va directo a la ludoteca. Allí hace tareas, juega y se divierte. Como padre, me da tranquilidad saber que está en buenas manos.',
                        foto: './public/img/testimonios/julian-gonzalez.jpg',
                        video: null
                    }
                ],
                metricas: {
                    participacion: 94,
                    satisfaccion: 93,
                    mejora: 86,
                    retencion: 91
                }
            }
        ],

        // Actividades regulares
        actividades: [
            {
                nombre: 'Ludoteca Abierta',
                frecuencia: 'Lunes a Viernes',
                horario: '2:00 PM - 6:00 PM',
                descripcion: 'Espacio de juego libre con supervisión, juegos de mesa, rompecabezas y actividades lúdicas.',
                cupos: 40,
                edades: '4-12 años'
            },
            {
                nombre: 'Taller de Pintura y Dibujo',
                frecuencia: 'Martes y Jueves',
                horario: '3:00 PM - 5:00 PM',
                descripcion: 'Exploración artística con técnicas de pintura, dibujo y arte creativo.',
                cupos: 25,
                edades: '6-14 años'
            },
            {
                nombre: 'Teatro Infantil',
                frecuencia: 'Miércoles y Viernes',
                horario: '4:00 PM - 6:00 PM',
                descripcion: 'Desarrollo de habilidades escénicas, expresión corporal y montaje de obras.',
                cupos: 30,
                edades: '8-15 años'
            },
            {
                nombre: 'Danza y Expresión Corporal',
                frecuencia: 'Lunes y Miércoles',
                horario: '4:30 PM - 6:00 PM',
                descripcion: 'Clases de danza urbana, folclórica y expresión a través del movimiento.',
                cupos: 35,
                edades: '7-16 años'
            },
            {
                nombre: 'Manualidades Creativas',
                frecuencia: 'Sábados',
                horario: '9:00 AM - 12:00 PM',
                descripcion: 'Creación de manualidades, reciclaje creativo y proyectos artísticos.',
                cupos: 30,
                edades: '5-13 años'
            },
            {
                nombre: 'Cine al Parque',
                frecuencia: 'Último viernes del mes',
                horario: '6:00 PM - 9:00 PM',
                descripcion: 'Proyección de películas infantiles al aire libre con palomitas incluidas.',
                cupos: 100,
                edades: 'Todas las edades'
            }
        ],

        // Recursos necesarios
        necesidades: [
            {
                categoria: 'Material Artístico',
                items: [
                    'Pinturas, pinceles y lienzos',
                    'Papel, cartulinas y materiales de manualidades',
                    'Instrumentos musicales básicos',
                    'Disfraces y vestuarios para teatro'
                ]
            },
            {
                categoria: 'Juegos y Ludoteca',
                items: [
                    'Juegos de mesa educativos',
                    'Juguetes didácticos',
                    'Libros de cuentos infantiles',
                    'Material deportivo recreativo'
                ]
            },
            {
                categoria: 'Infraestructura',
                items: [
                    'Espacio techado para talleres',
                    'Mesas y sillas infantiles',
                    'Estanterías y almacenamiento',
                    'Equipo de sonido'
                ]
            },
            {
                categoria: 'Talento Humano',
                items: [
                    'Instructores de arte',
                    'Recreacionistas',
                    'Psicólogo infantil',
                    'Monitores de ludoteca'
                ]
            }
        ],

        // Próximos pasos y metas 2026
        futuro: {
            titulo: 'Horizonte Recreativo 2026',
            descripcion: 'Ampliar y diversificar nuestras actividades recreativas para llegar a más niños y familias.',
            metas: [
                {
                    objetivo: 'Atender 250 niños en recreación',
                    plazo: 'Diciembre 2026',
                    progreso: 72
                },
                {
                    objetivo: 'Construir parque infantil comunitario',
                    plazo: 'Septiembre 2026',
                    progreso: 30
                },
                {
                    objetivo: 'Crear escuela de música infantil',
                    plazo: 'Julio 2026',
                    progreso: 20
                },
                {
                    objetivo: 'Realizar festival de arte infantil',
                    plazo: 'Noviembre 2026',
                    progreso: 45
                }
            ],
            nuevosProyectos: [
                'Escuela de circo y malabares',
                'Taller de fotografía para niños',
                'Club de ciencia recreativa',
                'Programa de ajedrez infantil',
                'Campamentos recreativos de fin de semana'
            ]
        },

        // Cómo ayudar específicamente a este programa
        comoAyudar: {
            voluntariado: [
                'Liderar talleres artísticos',
                'Ser monitor/a de ludoteca',
                'Enseñar música o danza',
                'Apoyar en vacaciones recreativas'
            ],
            donaciones: [
                'Juguetes y juegos de mesa',
                'Material artístico (pinturas, pinceles)',
                'Disfraces y vestuarios',
                'Instrumentos musicales',
                'Libros de cuentos'
            ],
            alianzas: [
                'Escuelas de arte y música',
                'Tiendas de juguetes',
                'Universidades con programas de pedagogía',
                'Artistas locales que dicten talleres'
            ]
        },

        // Galería general del programa
        galeria: [
            {
                tipo: 'imagen',
                src: './public/img/programas/recreacion/galeria-1.jpg',
                alt: 'Taller de pintura',
                descripcion: 'Niños creando arte en el taller de pintura'
            },
            {
                tipo: 'imagen',
                src: './public/img/programas/recreacion/galeria-2.jpg',
                alt: 'Obra de teatro',
                descripcion: 'Presentación de teatro infantil'
            },
            {
                tipo: 'video',
                src: './public/video/programas/recreacion/resumen-recreacion.mp4',
                thumbnail: './public/img/programas/recreacion/video-thumb.jpg',
                alt: 'Resumen de actividades recreativas',
                descripcion: 'Lo mejor de nuestras actividades 2024'
            },
            {
                tipo: 'imagen',
                src: './public/img/programas/recreacion/galeria-3.jpg',
                alt: 'Vacaciones recreativas',
                descripcion: 'Verano Feliz - Vacaciones 2024'
            },
            {
                tipo: 'imagen',
                src: './public/img/programas/recreacion/galeria-4.jpg',
                alt: 'Ludoteca en acción',
                descripcion: 'Niños jugando en El Rincón Mágico'
            },
            {
                tipo: 'imagen',
                src: './public/img/programas/recreacion/galeria-5.jpg',
                alt: 'Taller de danza',
                descripcion: 'Grupo de danza folclórica'
            },
            {
                tipo: 'video',
                src: './public/video/programas/recreacion/cine-parque.mp4',
                thumbnail: './public/img/programas/recreacion/video-thumb-2.jpg',
                alt: 'Cine al Parque',
                descripcion: 'Noche de Cine al Parque'
            }
        ],

        // FAQs del programa
        faqs: [
            {
                pregunta: '¿Cuál es la edad mínima para participar?',
                respuesta: 'Aceptamos niños desde los 4 años en adelante, con actividades diseñadas específicamente para cada grupo de edad.'
            },
            {
                pregunta: '¿Los talleres tienen algún costo?',
                respuesta: 'No, todas nuestras actividades recreativas son completamente gratuitas para las familias de la comunidad.'
            },
            {
                pregunta: '¿Necesito inscribir a mi hijo previamente?',
                respuesta: 'Para talleres permanentes sí recomendamos inscripción. Para la ludoteca abierta, los niños pueden asistir libremente.'
            },
            {
                pregunta: '¿Qué debo llevar a las vacaciones recreativas?',
                respuesta: 'Solo ropa cómoda, gorra, bloqueador solar y botella de agua. Nosotros proporcionamos materiales y alimentación.'
            },
            {
                pregunta: '¿Hay supervisión de adultos en todo momento?',
                respuesta: 'Sí, todos los espacios cuentan con monitores capacitados que supervisan constantemente a los niños.'
            },
            {
                pregunta: '¿Puedo participar como voluntario en los talleres?',
                respuesta: 'Por supuesto. Siempre necesitamos talento humano. Contáctanos para conocer las oportunidades disponibles.'
            }
        ],

        // Contacto específico del programa
        contacto: {
            coordinador: 'Carmenza Andrade Palta',
            email: 'recreacion@fundamente.org',
            telefono: '+57 321 455 4594',
            horarioAtencion: 'Lunes a Viernes, 2:00 PM - 6:00 PM'
        }
    },

// ========================================
    // PROGRAMA 4: MEDIO AMBIENTE
    // ========================================
    medioambiente: {
        // Información básica
        id: 'medio-ambiente',
        nombre: 'Programa de Medio Ambiente',
        tagline: 'Sembrando Conciencia, Cosechando Futuro',
        
        // Hero de la página
        hero: {
            titulo: 'Cuidando Nuestro Planeta',
            subtitulo: 'Formamos eco-líderes comprometidos con el medio ambiente a través de educación ambiental, reciclaje, huertos urbanos y acciones comunitarias que transforman nuestro entorno',
            imagen: './public/img/programas/medio-ambiente/hero-ambiente.jpg',
            estadisticas: [
                { numero: 120, label: 'Eco-líderes formados', sufijo: '+' },
                { numero: 5, label: 'Huertos comunitarios', sufijo: '' },
                { numero: 3, label: 'Toneladas recicladas', sufijo: '+' }
            ]
        },

        // Resumen del programa
        resumen: {
            mision: 'Fomentar la conciencia ambiental en niños, jóvenes y familias de Ciudad Córdoba, promoviendo prácticas sostenibles de reciclaje, agricultura urbana y cuidado del entorno que generen cambios positivos y duraderos en la comunidad.',
            vision: 'Ser la comunidad referente en sostenibilidad ambiental del Distrito de Aguablanca, con ciudadanos conscientes que protegen y cuidan activamente su entorno, generando un impacto positivo en el ecosistema urbano.',
            impacto: 'Desde 2022, hemos capacitado a más de 120 eco-líderes, establecido 5 huertos urbanos productivos, reciclado más de 3 toneladas de residuos y realizado 24 jornadas de limpieza comunitaria que han transformado el paisaje de nuestro barrio.'
        },

        // Objetivos específicos
        objetivos: [
            {
                icono: 'leaf',
                titulo: 'Formar Eco-Ciudadanos',
                descripcion: 'Educar a niños y jóvenes en prácticas ambientales responsables que puedan replicar en sus hogares y comunidad.'
            },
            {
                icono: 'recycle',
                titulo: 'Promover el Reciclaje',
                descripcion: 'Implementar sistemas de separación, recolección y transformación de residuos sólidos en la comunidad.'
            },
            {
                icono: 'tree',
                titulo: 'Desarrollar Agricultura Urbana',
                descripcion: 'Crear huertos comunitarios que provean alimentos frescos y enseñen sobre soberanía alimentaria.'
            },
            {
                icono: 'globe',
                titulo: 'Mejorar el Entorno Comunitario',
                descripcion: 'Realizar acciones de embellecimiento, limpieza y restauración de espacios públicos del barrio.'
            }
        ],

        // Proyectos destacados
        proyectosDestacados: [
            {
                id: 'huertos-urbanos',
                nombre: 'Red de Huertos Urbanos Comunitarios',
                descripcion: 'Creación y mantenimiento de huertos urbanos en espacios públicos donde las familias cultivan hortalizas, aromáticas y plantas medicinales, promoviendo la seguridad alimentaria y el contacto con la naturaleza.',
                periodo: '2022 - Actualidad',
                beneficiarios: 85,
                logros: [
                    '5 huertos urbanos establecidos',
                    '45 familias cultivando sus propios alimentos',
                    'Cosecha mensual de 150+ kg de hortalizas',
                    'Ahorro promedio de $80,000 COP/familia en alimentos',
                    '25 especies de plantas cultivadas',
                    'Capacitaciones en compostaje y agricultura orgánica',
                    'Mercado verde mensual para venta de excedentes'
                ],
                imagen: './public/img/programas/medio-ambiente/proyecto-huertos.jpg',
                galeria: [
                    './public/img/programas/medio-ambiente/huertos-1.jpg',
                    './public/img/programas/medio-ambiente/huertos-2.jpg',
                    './public/img/programas/medio-ambiente/huertos-3.jpg',
                    './public/img/programas/medio-ambiente/huertos-4.jpg'
                ],
                testimonios: [
                    {
                        nombre: 'Don Luis Arboleda',
                        rol: 'Líder de huerto comunitario',
                        texto: 'Nunca imaginé que en pleno barrio podríamos tener un huerto tan hermoso. Ahora tenemos cilantro, tomate, lechuga fresca. Los niños aprenden de dónde viene la comida.',
                        foto: './public/img/testimonios/luis-arboleda.jpg',
                        video: './public/video/testimonios/luis-huerto.mp4'
                    },
                    {
                        nombre: 'Rosa Elena Mina',
                        rol: 'Participante del huerto',
                        texto: 'El huerto cambió mi vida. Ahora como más saludable, ahorro dinero y comparto con los vecinos. Es un espacio de paz en medio del barrio.',
                        foto: './public/img/testimonios/rosa-mina.jpg',
                        video: null
                    },
                    {
                        nombre: 'Mateo, 12 años',
                        rol: 'Eco-líder juvenil',
                        texto: 'Me encanta venir al huerto. Sembré una mata de tomate y ya tiene frutos. Aprendí que cuidar las plantas es cuidar el planeta.',
                        foto: './public/img/testimonios/mateo-ecolider.jpg',
                        video: null
                    }
                ],
                metricas: {
                    participacion: 94,
                    satisfaccion: 96,
                    mejora: 91,
                    retencion: 88
                }
            },

            {
                id: 'brigadas-reciclaje',
                nombre: 'Brigadas Eco-Escolares de Reciclaje',
                descripcion: 'Programa educativo donde niños y jóvenes aprenden sobre separación de residuos, reciclaje creativo y realizan campañas de recolección en sus colegios y barrio.',
                periodo: '2023 - Actualidad',
                beneficiarios: 75,
                logros: [
                    '4 brigadas eco-escolares activas',
                    '2.5 toneladas de material reciclable recolectado',
                    'Puntos de reciclaje en 3 colegios',
                    'Talleres de reciclaje creativo (arte con reciclaje)',
                    '15 campañas de concientización realizadas',
                    'Alianza con cooperativa de recicladores',
                    'Reducción del 30% de basura en zonas de intervención'
                ],
                imagen: './public/img/programas/medio-ambiente/proyecto-reciclaje.jpg',
                galeria: [
                    './public/img/programas/medio-ambiente/reciclaje-1.jpg',
                    './public/img/programas/medio-ambiente/reciclaje-2.jpg',
                    './public/img/programas/medio-ambiente/reciclaje-3.jpg',
                    './public/img/programas/medio-ambiente/reciclaje-4.jpg'
                ],
                testimonios: [
                    {
                        nombre: 'Profesora Gloria Henao',
                        rol: 'Coordinadora Ambiental - Colegio Simón Bolívar',
                        texto: 'La brigada eco-escolar transformó la cultura del colegio. Los niños son ahora guardianes del medio ambiente, enseñan a sus compañeros y hasta a los profesores.',
                        foto: './public/img/testimonios/gloria-henao.jpg',
                        video: './public/video/testimonios/gloria-brigada.mp4'
                    },
                    {
                        nombre: 'Camila Rodríguez, 13 años',
                        rol: 'Líder de brigada eco-escolar',
                        texto: 'Ser parte de la brigada me enseñó que nosotros los jóvenes podemos hacer la diferencia. Cada botella que reciclamos es un paso para salvar el planeta.',
                        foto: './public/img/testimonios/camila-rodriguez.jpg',
                        video: null
                    }
                ],
                metricas: {
                    participacion: 96,
                    satisfaccion: 93,
                    mejora: 89,
                    retencion: 92
                }
            },

            {
                id: 'jornadas-limpieza',
                nombre: 'Jornadas de Limpieza y Embellecimiento Comunitario',
                descripcion: 'Movilizaciones comunitarias mensuales para limpiar calles, parques y zonas verdes, complementadas con siembra de árboles y murales ecológicos.',
                periodo: '2022 - Actualidad',
                beneficiarios: 200,
                logros: [
                    '24 jornadas de limpieza realizadas',
                    'Participación de 200+ personas por jornada',
                    '8 toneladas de basura recolectadas',
                    '150 árboles sembrados',
                    '6 murales ecológicos pintados',
                    '3 parques infantiles recuperados',
                    'Reducción del 40% de basura en espacios públicos'
                ],
                imagen: './public/img/programas/medio-ambiente/proyecto-limpieza.jpg',
                galeria: [
                    './public/img/programas/medio-ambiente/limpieza-1.jpg',
                    './public/img/programas/medio-ambiente/limpieza-2.jpg',
                    './public/img/programas/medio-ambiente/limpieza-3.jpg',
                    './public/img/programas/medio-ambiente/limpieza-4.jpg'
                ],
                testimonios: [
                    {
                        nombre: 'Jairo Caicedo',
                        rol: 'Líder comunitario',
                        texto: 'Las jornadas nos unieron como barrio. Ver a familias enteras limpiando juntas, niños sembrando árboles... eso es construir comunidad y futuro.',
                        foto: './public/img/testimonios/jairo-caicedo.jpg',
                        video: './public/video/testimonios/jairo-limpieza.mp4'
                    },
                    {
                        nombre: 'Jennifer Palacios',
                        rol: 'Voluntaria ambiental',
                        texto: 'Participar en las jornadas me hizo valorar más mi barrio. Ahora cuido que no boten basura en las calles y animo a otros a hacer lo mismo.',
                        foto: './public/img/testimonios/jennifer-palacios.jpg',
                        video: null
                    }
                ],
                metricas: {
                    participacion: 91,
                    satisfaccion: 89,
                    mejora: 85,
                    retencion: 87
                }
            }
        ],

        // Actividades regulares
        actividades: [
            {
                nombre: 'Club de Eco-Líderes',
                frecuencia: 'Sábados',
                horario: '9:00 AM - 12:00 PM',
                descripcion: 'Formación continua en temas ambientales, liderazgo y desarrollo de proyectos ecológicos.',
                cupos: 30,
                edades: '10-17 años'
            },
            {
                nombre: 'Mantenimiento de Huertos',
                frecuencia: 'Martes y Jueves',
                horario: '3:00 PM - 5:00 PM',
                descripcion: 'Cuidado de cultivos, riego, siembra y cosecha en los huertos comunitarios.',
                cupos: 45,
                edades: 'Todas las edades'
            },
            {
                nombre: 'Taller de Compostaje',
                frecuencia: 'Primer sábado del mes',
                horario: '10:00 AM - 12:00 PM',
                descripcion: 'Aprendizaje sobre compostaje casero y manejo de residuos orgánicos.',
                cupos: 25,
                edades: 'Adultos y jóvenes 14+'
            },
            {
                nombre: 'Reciclaje Creativo',
                frecuencia: 'Viernes',
                horario: '3:00 PM - 5:00 PM',
                descripcion: 'Transformación de material reciclable en objetos útiles y decorativos.',
                cupos: 20,
                edades: '8-15 años'
            },
            {
                nombre: 'Jornada de Limpieza Mensual',
                frecuencia: 'Último sábado del mes',
                horario: '7:00 AM - 12:00 PM',
                descripcion: 'Limpieza comunitaria de calles, parques y zonas verdes del barrio.',
                cupos: 100,
                edades: 'Todas las edades'
            },
            {
                nombre: 'Cine Foro Ambiental',
                frecuencia: 'Segundo viernes del mes',
                horario: '6:00 PM - 8:00 PM',
                descripcion: 'Proyección de documentales sobre medio ambiente y discusión comunitaria.',
                cupos: 50,
                edades: '12+ años'
            }
        ],

        // Recursos necesarios
        necesidades: [
            {
                categoria: 'Herramientas de Jardinería',
                items: [
                    'Palas, azadones y rastrillos',
                    'Regaderas y mangueras',
                    'Semillas y plántulas',
                    'Tierra abonada y compost'
                ]
            },
            {
                categoria: 'Reciclaje',
                items: [
                    'Canecas de separación (orgánico, reciclable, no reciclable)',
                    'Bolsas para recolección',
                    'Báscula para pesar material',
                    'Punto de acopio temporal'
                ]
            },
            {
                categoria: 'Educación Ambiental',
                items: [
                    'Material didáctico (cartillas, afiches)',
                    'Cámara para documentar actividades',
                    'Proyector para talleres',
                    'Uniformes para brigadas'
                ]
            },
            {
                categoria: 'Talento Humano',
                items: [
                    'Ingeniero ambiental',
                    'Agrónomo o técnico agrícola',
                    'Educadores ambientales',
                    'Coordinador de proyectos'
                ]
            }
        ],

        // Próximos pasos y metas 2026
        futuro: {
            titulo: 'Visión Verde 2026',
            descripcion: 'Expandir nuestro impacto ambiental y consolidar a Ciudad Córdoba como barrio sostenible.',
            metas: [
                {
                    objetivo: 'Establecer 10 huertos urbanos',
                    plazo: 'Diciembre 2026',
                    progreso: 50
                },
                {
                    objetivo: 'Reciclar 10 toneladas de residuos',
                    plazo: 'Diciembre 2026',
                    progreso: 30
                },
                {
                    objetivo: 'Sembrar 500 árboles',
                    plazo: 'Noviembre 2026',
                    progreso: 30
                },
                {
                    objetivo: 'Formar 200 eco-líderes certificados',
                    plazo: 'Octubre 2026',
                    progreso: 60
                }
            ],
            nuevosProyectos: [
                'Planta de compostaje comunitaria',
                'Biofiltro para aguas grises',
                'Proyecto de energía solar en sede',
                'App móvil de reciclaje barrial',
                'Granja de lombricompost',
                'Eco-tienda de productos del huerto'
            ]
        },

        // Cómo ayudar específicamente a este programa
        comoAyudar: {
            voluntariado: [
                'Liderar talleres de educación ambiental',
                'Apoyar mantenimiento de huertos',
                'Participar en jornadas de limpieza',
                'Ser mentor de eco-líderes juveniles'
            ],
            donaciones: [
                'Herramientas de jardinería',
                'Semillas y plántulas',
                'Canecas de reciclaje',
                'Material educativo ambiental',
                'Árboles para siembra'
            ],
            alianzas: [
                'Universidades (ingeniería ambiental, agronomía)',
                'Viveros y tiendas de jardinería',
                'Cooperativas de recicladores',
                'Empresas con programas de RSE ambiental',
                'Secretaría de Medio Ambiente'
            ]
        },

        // Galería general del programa
        galeria: [
            {
                tipo: 'imagen',
                src: './public/img/programas/medio-ambiente/galeria-1.jpg',
                alt: 'Huerto comunitario',
                descripcion: 'Familias trabajando en el huerto'
            },
            {
                tipo: 'imagen',
                src: './public/img/programas/medio-ambiente/galeria-2.jpg',
                alt: 'Brigada de reciclaje',
                descripcion: 'Eco-líderes recolectando material reciclable'
            },
            {
                tipo: 'video',
                src: './public/video/programas/medio-ambiente/resumen-ambiental.mp4',
                thumbnail: './public/img/programas/medio-ambiente/video-thumb.jpg',
                alt: 'Resumen actividades ambientales',
                descripcion: 'Nuestro impacto ambiental 2024'
            },
            {
                tipo: 'imagen',
                src: './public/img/programas/medio-ambiente/galeria-3.jpg',
                alt: 'Jornada de limpieza',
                descripcion: 'Comunidad unida limpiando el barrio'
            },
            {
                tipo: 'imagen',
                src: './public/img/programas/medio-ambiente/galeria-4.jpg',
                alt: 'Siembra de árboles',
                descripcion: 'Niños sembrando árboles nativos'
            },
            {
                tipo: 'imagen',
                src: './public/img/programas/medio-ambiente/galeria-5.jpg',
                alt: 'Cosecha comunitaria',
                descripcion: 'Primera cosecha del huerto'
            },
            {
                tipo: 'video',
                src: './public/video/programas/medio-ambiente/testimonio-huerto.mp4',
                thumbnail: './public/img/programas/medio-ambiente/video-thumb-2.jpg',
                alt: 'Testimonios huerto urbano',
                descripcion: 'Familias cuentan su experiencia'
            }
        ],

        // FAQs del programa
        faqs: [
            {
                pregunta: '¿Necesito conocimientos previos de jardinería?',
                respuesta: 'No, enseñamos desde cero. Tenemos capacitaciones continuas para todos los niveles de experiencia.'
            },
            {
                pregunta: '¿Puedo llevarme productos del huerto?',
                respuesta: 'Sí, los participantes activos del huerto pueden llevarse parte de la cosecha según su participación.'
            },
            {
                pregunta: '¿Qué hago con el material reciclable que recolecto?',
                respuesta: 'Puedes traerlo a nuestro punto de acopio los sábados de 9am a 12pm, o avisarnos para recolección en jornadas especiales.'
            },
            {
                pregunta: '¿Las jornadas de limpieza son solo para adultos?',
                respuesta: 'No, son actividades familiares. Los niños mayores de 8 años pueden participar acompañados de un adulto.'
            },
            {
                pregunta: '¿Cómo puedo ser eco-líder certificado?',
                respuesta: 'Debes asistir al Club de Eco-Líderes durante 6 meses, completar 80% de asistencia y desarrollar un proyecto ambiental.'
            },
            {
                pregunta: '¿Qué plantas puedo cultivar en el huerto?',
                respuesta: 'Cultivamos hortalizas (tomate, lechuga, cilantro), aromáticas (albahaca, menta) y plantas medicinales (sábila, manzanilla).'
            }
        ],

        // Contacto específico del programa
        contacto: {
            coordinador: 'Clara Inés Estacio Saavedra',
            email: 'ambiente@fundamente.org',
            telefono: '+57 321 455 4594',
            horarioAtencion: 'Martes a Sábado, 9:00 AM - 1:00 PM'
        }
    }
};

// Exportar para uso en otras partes del sitio
if (typeof module !== 'undefined' && module.exports) {
    module.exports = programasData;
}

console.log('✅ Datos de los Programas de Educación y Deporte cargados correctamente');