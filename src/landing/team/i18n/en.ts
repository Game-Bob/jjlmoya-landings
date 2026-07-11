import type { LandingCardContent } from '../../../types';

export const cardContent: LandingCardContent = {
    slug: 'team',
    title: 'GameBob Team',
    subtitle: 'Run by cats. Built by one human.',
    description: 'A warm, tiny team page about Bob, a feline board of directors, one solo developer in Mallorca, and the companions remembered along the way.'
};

export const pageContent = {
    hero: {
        kicker: 'Somewhere in Mallorca',
        titlePrefix: 'Game',
        titleAccent: 'Bob',
        lead: 'RUN BY CATS. BUILT BY ONE HUMAN.',
        stageLabel: 'Bob supervising the GameBob studio',
        sceneAlt: 'Pixel-art scene of Bob supervising a board meeting while Juanjo works on a laptop'
    },
    companyWorks: {
        eyebrow: 'How this company works',
        title: 'The Feline Board',
        text: 'GameBob is organized by actual authority, not by corporate fantasy. Bob and Terra dominate the board. JJ implements the decisions.',
        secretDossier: 'Secret technical dossier',
        closeDossier: 'Close dossier',
        members: {
            bob: {
                name: 'Bob',
                role: 'Chief Executive Cat',
                status: 'Authority level: Absolute. Professional eater.',
                dossier: 'Maximum authority. Reviews strategy, snack allocation and whether the current direction deserves a blink.'
            },
            terra: {
                name: 'Terra',
                role: 'The Matriarch',
                status: 'The origin. Stares at code until it feels judged.',
                dossier: 'Senior presence. Keeps the board emotionally calibrated and silently audits suspicious decisions.'
            },
            ambar: {
                name: 'Ambar',
                role: 'Senior Supervisor',
                status: 'Maintaining balance of power (via extreme clinginess).',
                dossier: 'Oversees attention distribution, lap availability and the human department morale budget.'
            },
            ambarChiquilla: {
                name: 'Ambar Chiquilla',
                role: 'Junior Auditor',
                status: 'Timid hunter. Specialized in mouse cursor tracking.',
                dossier: 'Small-format auditor. Specializes in careful observation, cursor pursuit and gentle escalation.'
            },
            drac: {
                name: 'Drac',
                role: 'Field Operations',
                status: 'Party animal. Living his best life on the streets.',
                dossier: 'External operations lead. Maintains field independence and appears when the conditions are personally acceptable.'
            },
            jj: {
                name: 'JJ',
                role: 'Solo Developer',
                status: 'Implementation Dept. Status: Outnumbered.',
                dossier: 'Implementation department. Builds, ships, translates and maintains the platform under board supervision.'
            }
        }
    },
    teamComic: {
        eyebrow: 'Mini webcomic',
        title: 'Every team member gets a scene, not just a card.',
        scenes: {
            strategic: {
                title: 'Strategic planning',
                setting: 'Bob studies a map of the world and identifies regions with promising snack logistics.',
                speech: ['More languages.', 'More humans.', 'More food.'],
                propLabel: 'map'
            },
            qa: {
                title: 'Quality assurance',
                setting: 'A supervisor sleeps on documents labeled extremely important until the layout feels calmer.',
                speech: ['This button needs warmth.', 'Also, I require the chair.'],
                propLabel: 'papers'
            },
            implementation: {
                title: 'Implementation',
                setting: 'The human writes code while the board contributes unexpected input through the keyboard.',
                speech: ['Ship it.', 'No, wait. Pet me first.'],
                propLabel: 'keyboard'
            }
        }
    },
    behindJoke: {
        eyebrow: 'Behind the joke',
        title: 'The jokes are real. The work is too.',
        text: 'Behind GameBob there is one solo developer designing, building, translating and maintaining everything from Mallorca. The goal is simple: make tools that are useful, visual, fast and pleasant to use.',
        island: 'Mallorca'
    },
    humanTouch: {
        eyebrow: 'Human resource',
        title: 'The Human',
        textBefore: 'Bob decided that empathy had to be an essential part of this page because "humans connect with humans". So she ordered this section, and knowing we suffer from attention deficits, demanded it be filled with animations and ',
        wordWithRagebait: 'vright lights',
        textAfter: '.',
        ragebaitExplanation: 'Everyone relax: the "v" in vright is there on purpose. Feline board analytics guarantee that correcting typos increases visits by 400%.',
        chipsLabel: 'Human areas',
        boardLabel: 'Human operations file',
        alert: 'HIGH-DOPAMINE HUMAN FILE',
        portraitAlt: 'jjlmoya in a falsely seductive profile photo',
        poseLabel: 'Mandatory pose',
        name: 'jjlmoya',
        role: 'Frontend Developer',
        bio: 'Turns curiosities, problems and everyday details into tools, interactive experiences and systems that can grow for years.',
        stats: [
            ['Base', 'Mallorca, Spain'],
            ['Role', 'Developer'],
            ['Experience', 'More than one feline lifetime'],
            ['Languages', 'ES · CA · EN']
        ],
        chips: [
            'Frontend',
            'Apps',
            'Websites',
            'Automation',
            'Product',
            'Interfaces',
            'Performance',
            'Accessibility',
            'Privacy',
            'Useful ideas'
        ],
        stamp: 'MANDATORY HUMAN TOUCH!',
        linksLabel: 'Professional links',
        partyPlayer: {
            eyebrow: 'Bob audio lab',
            title: 'Board-approved party track',
            text: 'Press play and the human resource banner enters emergency celebration mode.',
            audioLabel: 'Play Bob party track',
            playLabel: 'Play Bob party track',
            pauseLabel: 'Pause Bob party track'
        }
    },
    translationComic: {
        eyebrow: 'The translation comic',
        title: 'How it all started',
        spainFood: 'Spain means food.',
        worldFood: 'The world means more food.',
        humanAssignment: 'The human understands the assignment.',
        languagesLabel: 'Supported language placeholders',
        text: 'Bob\'s Master Plan to take over your money began with a simple revelation: money could become food. Since then, nothing was operationally safe again.',
        quote: 'More work. More money. More food.',
        closing: 'The plan was simple. The human is still recovering.',
        scenes: [
            {
                label: 'My great mistake',
                title: 'Bob discovered the system.',
                text: 'One day I made an irreparable mistake: I let her see how I got her food. That day Bob started to understand everything.',
                assetAlt: '',
                formula: ['Money', 'Food']
            },
            {
                label: 'The dream',
                title: 'The stomach set the course.',
                text: 'Bob dreamed day and night without stopping and concluded that she would like to have much, much more food.',
                assetAlt: '',
                formula: ['More money', 'More food']
            },
            {
                label: 'The master plan',
                title: 'Bob thought about revenue.',
                text: 'Bob was not satisfied with understanding the system. She started wondering how to produce recurring money, preferably without moving a paw.',
                assetAlt: '',
                formula: ['Tools', 'Money']
            },
            {
                label: 'GameBob is born',
                title: 'The human received the order.',
                text: 'The order was simple: the human would build tools, games and pages. Bob would supervise strategy. Food would finance the vision.',
                assetAlt: '',
                formula: ['More projects', 'More food']
            }
        ]
    },
    bobModelBook: {
        eyebrow: 'Emergency plan',
        logoPrefix: 'Only',
        logoName: 'Bob',
        text: 'Bob forced me to create this section because, if everything else fails, she considers her presence an economically viable alternative. I only implemented the order.',
        galleryLabel: 'Editorial gallery of Bob',
        unlockedAlt: 'Bob in an editorial pose',
        lockedAlt: 'Locked Bob pose',
        openLabel: 'Open Bob pose',
        closeLabel: 'Close Bob pose',
        premiumTitle: 'OnlyBob Premium',
        premiumText: 'Bob has decided these poses are too powerful for casual scrolling. Full access will open when she considers the business model emotionally mature.',
        buyLabel: 'Buy access (she is not desperate yet)',
        trialLabel: 'Free 24-hour preview',
        subscriptionLabel: 'OnlyBob trial active',
        subscriptionPrefix: '',
        expiredLabel: 'Trial expired'
    },
    productManifesto: {
        eyebrow: 'Product philosophy',
        title: 'High quality for high benefit.',
        description: 'The cat has read hundreds of SEO manuals to optimise every piece of the page, has five digital marketing books under her belt and is starting to read about stoicism. These are the rules she set for passing the vetting and earning her seal of quality.',
        values: [
            'Useful',
            'Visual',
            'Fast',
            'Playful',
            'Unique',
            'Privacy',
            'Meow'
        ]
    },
    memoryWall: {
        eyebrow: 'Memory wall',
        title: 'For every animal still part of the story.',
        text: 'This will become a warm archive of photos, dates, little rituals and memories. Gentle rather than sad: a place for everyone who left pawprints, noise, warmth and timing chaos behind.',
        memories: {
            m1: { name: 'Memory slot 01', line: 'A small place for a big personality.' },
            m2: { name: 'Memory slot 02', line: 'Favorite nap, favorite sound, favorite tiny habit.' },
            m3: { name: 'Memory slot 03', line: 'A story that deserves its own warm corner.' },
            m4: { name: 'Memory slot 04', line: 'For every animal who made the house a team.' }
        }
    },
    supportTransition: {
        eyebrow: 'The board is open to',
        title: 'Feedback.',
        text: 'Ideas, bug reports, translation fixes and project support. The executive board cannot promise fast replies. Mostly because they are cats. The human resource will still read everything with care.',
        linkText: 'Support Us!',
        comingSoonLabel: 'Coming soon',
        inbox: {
            ideas: 'ideas',
            bugs: 'bugs',
            fixes: 'fixes',
            support: 'support'
        }
    },
    teamRoster: {
        eyebrow: 'Current team',
        title: 'A serious studio, supervised by unserious experts.',
        text: 'This is the first rough pass: Bob leads the page today, and the rest of the team has placeholder cards ready to receive names, photos, stories, and properly ridiculous titles.',
        members: {
            bob: {
                name: 'Bob',
                role: 'Executive Nap Officer',
                bio: 'Black cat, founder of the quiet QA department, and the first member of the GameBob team.',
                tag: 'Final approval: sleeps on it'
            },
            c2: {
                name: 'Cat teammate 02',
                role: 'Chaos QA',
                bio: 'Specializes in unexpected clicks, keyboard walks, and finding the one layout that still needs love.',
                tag: 'Name pending'
            },
            c3: {
                name: 'Cat teammate 03',
                role: 'Comfort Designer',
                bio: 'Keeps the studio soft, warm, and legally required to contain at least one cozy corner.',
                tag: 'Name pending'
            },
            c4: {
                name: 'Cat teammate 04',
                role: 'Focus Interruptor',
                bio: 'Protects the project from overwork by introducing regular breaks at inconvenient times.',
                tag: 'Name pending'
            },
            c5: {
                name: 'Cat teammate 05',
                role: 'Snack Auditor',
                bio: 'Monitors all kitchen-related decisions and maintains strong opinions about empty bowls.',
                tag: 'Name pending'
            },
            jj: {
                name: 'JJL Moya',
                role: 'Solo Developer',
                bio: 'Builds the games, tools, copy, interfaces, systems, and the occasional feature requested by a tail.',
                tag: 'Human department'
            }
        }
    }
};
