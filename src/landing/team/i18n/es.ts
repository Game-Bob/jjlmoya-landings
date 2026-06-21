import type { LandingCardContent } from '../../../types';

export const cardContent: LandingCardContent = {
    slug: 'team',
    title: 'Equipo GameBob',
    subtitle: 'Dirigido por gatos. Creado por un humano.',
    description: 'Una cálida y pequeña página sobre Bob, una junta directiva felina, un desarrollador en Mallorca y los compañeros recordados en el camino.'
};

export const pageContent = {
    hero: {
        kicker: 'En algún lugar de Mallorca',
        lead: 'DIRIGIDO POR GATOS. CREADO POR UN HUMANO.',
        stageLabel: 'Bob supervisando el estudio GameBob',
        sceneAlt: 'Escena pixel art de Bob supervisando una reunión de la junta mientras Juanjo trabaja en un portátil'
    },
    companyWorks: {
        eyebrow: 'Cómo funciona esta empresa',
        title: 'La Junta Felina',
        text: 'GameBob se organiza por autoridad real, no por fantasía corporativa. Bob y Terra dominan la junta. JJ implementa las decisiones.',
        secretDossier: 'Dossier técnico secreto',
        closeDossier: 'Cerrar dossier',
        members: {
            bob: {
                role: 'Gato Director Ejecutivo',
                status: 'Nivel de autoridad: Absoluto. Comedor profesional.',
                dossier: 'Máxima autoridad. Revisa la estrategia, la asignación de comida y si el rumbo actual merece un parpadeo.'
            },
            terra: {
                role: 'La Matriarach',
                status: 'El origen. Mira fijamente el código hasta que se siente juzgado.',
                dossier: 'Presencia senior. Mantiene a la junta equilibrada emocionalmente y audita en silencio decisiones sospechosas.'
            },
            ambar: {
                role: 'Supervisora Senior',
                status: 'Manteniendo el equilibrio de poder (a través de mimos extremos).',
                dossier: 'Supervisa la distribución de atención, la disponibilidad del regazo y el presupuesto de moral del departamento humano.'
            },
            ambarChiquilla: {
                role: 'Auditora Junior',
                status: 'Cazadora tímida. Especializada en el seguimiento del cursor del ratón.',
                dossier: 'Auditora de formato pequeño. Se especializa en la observación cuidadosa, la persecución del cursor y la escalada silenciosa.'
            },
            drac: {
                role: 'Operaciones de Campo',
                status: 'Alma de la fiesta. Viviendo su mejor vida en las calles.',
                dossier: 'Líder de operaciones externas. Mantiene la independencia de campo y aparece cuando las condiciones son personalmente aceptables.'
            },
            jj: {
                role: 'Desarrollador en Solitario',
                status: 'Depto. de Implementación. Estado: Superado en número.',
                dossier: 'Departamento de implementación. Construye, envía, traduce y mantiene la plataforma bajo la supervisión de la junta.'
            }
        }
    },
    teamComic: {
        eyebrow: 'Mini webcómic',
        title: 'Cada miembro del equipo tiene una escena, no solo una tarjeta.',
        scenes: {
            strategic: {
                title: 'Planificación estratégica',
                setting: 'Bob estudia un mapa del mundo e identifica regiones con logística de snacks prometedora.',
                speech: ['Más idiomas.', 'Más humanos.', 'Más comida.']
            },
            qa: {
                title: 'Garantía de calidad',
                setting: 'Una supervisora duerme sobre documentos etiquetados como extremadamente importantes hasta que el diseño se siente más calmado.',
                speech: ['Este botón necesita calidez.', 'Además, necesito la silla.']
            },
            implementation: {
                title: 'Implementación',
                setting: 'El humano escribe código mientras la junta aporta entradas inesperadas a través del teclado.',
                speech: ['Súbelo.', 'No, espera. Acaríciame primero.']
            }
        }
    },
    behindJoke: {
        eyebrow: 'Detrás de la broma',
        title: 'Las bromas son reales. El trabajo también.',
        text: 'Detrás de GameBob hay un desarrollador en solitario diseñando, construyendo, traduciendo y manteniendo todo desde Mallorca. El objetivo es simple: crear herramientas que sean útiles, visuales, rápidas y agradables de usar.',
        island: 'Mallorca'
    },
    translationComic: {
        eyebrow: 'El cómic de traducción',
        title: 'Bob vio el mapa del mundo y tomó una decisión empresarial.',
        spainFood: 'España significa comida.',
        worldFood: 'El mundo significa más comida.',
        humanAssignment: 'El humano entiende el encargo.',
        languagesLabel: 'Marcadores de posición de idiomas compatibles',
        text: 'GameBob se traduce con asistencia de IA. No hablo todos los idiomas del mundo. Prefiero hacer que las herramientas estén disponibles en todo el mundo, incluso si algunas traducciones son imperfectas, en lugar de mantener todo bloqueado en un solo idioma.',
        quote: 'Más idiomas. Más humanos. Más comida.'
    },
    productManifesto: {
        eyebrow: 'Filosofía de producto',
        title: 'Un pequeño manifiesto con huellas en los márgenes.',
        values: [
            'Útil',
            'Visual',
            'Rápido',
            'Divertido',
            'A veces raro',
            'Hecho con cariño'
        ]
    },
    memoryWall: {
        eyebrow: 'Muro del recuerdo',
        title: 'Para cada animal que sigue siendo parte de la historia.',
        text: 'Esto se convertirá en un cálido archivo de fotos, fechas, pequeños rituales y recuerdos. Amable más que triste: un lugar para todos los que dejaron huellas, ruido, calor y caos de horarios a su paso.',
        memories: {
            m1: 'Un lugar pequeño para una gran personalidad.',
            m2: 'Siesta favorita, sonido favorito, pequeño hábito favorito.',
            m3: 'Una historia que merece su propio rincón cálido.',
            m4: 'Para cada animal que hizo de la casa un equipo.'
        }
    },
    supportTransition: {
        eyebrow: 'La junta está abierta a',
        title: 'Ideas, informes de errores, correcciones de traducción y soporte del proyecto.',
        text: 'La junta ejecutiva no puede prometer respuestas rápidas. Principalmente porque son gatos. El departamento humano seguirá leyendo todo con cuidado.',
        linkText: 'Ir a Soporte',
        inbox: {
            ideas: 'ideas',
            bugs: 'errores',
            fixes: 'correcciones',
            support: 'soporte'
        }
    },
    teamRoster: {
        eyebrow: 'Equipo actual',
        title: 'Un estudio serio, supervisado por expertos poco serios.',
        text: 'Este es el primer paso: Bob lidera la página hoy, y el resto del equipo tiene tarjetas de marcador de posición listas para recibir nombres, fotos, historias y títulos adecuadamente ridículos.',
        members: {
            bob: {
                role: 'Oficial Ejecutivo de Siestas',
                bio: 'Gato negro, fundador del departamento de control de calidad silencioso y primer miembro del equipo GameBob.',
                tag: 'Aprobación final: duerme sobre ello'
            },
            c2: {
                name: 'Compañero gato 02',
                role: 'Control de Calidad del Caos',
                bio: 'Se especializa en clics inesperados, paseos por el teclado y en encontrar el único diseño que aún necesita amor.',
                tag: 'Nombre pendiente'
            },
            c3: {
                name: 'Compañero gato 03',
                role: 'Diseñador de Confort',
                bio: 'Mantiene el estudio suave, cálido y legalmente obligado a contener al menos un rincón acogedor.',
                tag: 'Nombre pendiente'
            },
            c4: {
                name: 'Compañero gato 04',
                role: 'Interruptor de Enfoque',
                bio: 'Proteges al proyecto del exceso de trabajo introduciendo descansos regulares en momentos inoportunos.',
                tag: 'Nombre pendiente'
            },
            c5: {
                name: 'Compañero gato 05',
                role: 'Auditor de Snacks',
                bio: 'Monitorea todas las decisiones relacionadas con la cocina y mantiene opiniones firmes sobre los cuencos vacíos.',
                tag: 'Nombre pendiente'
            },
            jj: {
                name: 'JJL Moya',
                role: 'Desarrollador en Solitario',
                bio: 'Construye los juegos, herramientas, textos, interfaces, sistemas y alguna que otra característica solicitada por una cola.',
                tag: 'Departamento humano'
            }
        }
    }
};
