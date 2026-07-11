import type { LandingCardContent } from '../../../types';

export const cardContent: LandingCardContent = {
    slug: 'squadra',
    seo: {
        title: 'La Squadra di GameBob Studio',
        description: 'Incontra il consiglio felino, lo sviluppatore umano e la storia che c\'è dietro GameBob Studio, un progetto indipendente creato a Maiorca.',
    }
};

export const pageContent = {
    hero: {
        kicker: 'Da qualche parte a Maiorca',
        titlePrefix: 'Game',
        titleAccent: 'Bob',
        lead: 'GESTITO DA GATTI. CREATO DA UN UMANO.',
        stageLabel: 'Bob supervisiona lo studio GameBob',
        sceneAlt: 'Scena pixel art di Bob che supervisiona mentre JJ lavora su un computer portatile'
    },
    companyWorks: {
        eyebrow: 'Come funziona questa azienda',
        title: 'Il Consiglio Felino',
        text: 'GameBob è organizzato per autorità reale, non per fantasia aziendale. Bob domina il consiglio. Nessun modello orizzontale qui: tutto è verticale, indiscutibile e leggermente intimidatorio. La democrazia non è all\'orizzonte né oggi, né domani, né mai.',
        members: {
            bob: {
                name: 'Bob',
                role: 'Proprietaria di tutto',
                status: 'Livello di autorità: Assoluto. Mangiatrice professionista.'
            },
            terra: {
                name: 'Terra',
                role: 'La Matriarca',
                status: 'L\'origine. Fissa il codice finché non si sente giudicato.'
            },
            ambar: {
                name: 'Ámbar',
                role: 'Supervisore Senior',
                status: 'Mantenimento del bilanciamento del potere (attraverso coccole estreme).'
            },
            ambarChiquilla: {
                name: 'Ámbar Chiquilla',
                role: 'Junior Auditor',
                status: 'Cacciatrice timida. Specializzata nel tracciamento del cursore del mouse.'
            },
            drac: {
                name: 'Drac',
                role: 'Operazioni sul campo',
                status: 'L\'anima della festa. Vive la sua vita migliore per strada.'
            },
            jj: {
                name: 'JJ',
                role: 'Fornitore di cibo',
                status: 'Dipartimento di Implementazione. Stato: In netta minoranza.'
            }
        }
    },
    humanTouch: {
        eyebrow: 'Risorsa Umana',
        title: 'L\'Umano',
        textBefore: 'Bob ha deciso che l\'empatia doveva far parte di questa pagina perché "gli umani si connettono con gli umani". Così ha ordinato questa sezione e, sapendo che soffriamo di deficit di attenzione, ha preteso di riempirla di animazioni e luci ',
        wordWithRagebait: 'brilanti',
        textAfter: '.',
        ragebaitExplanation: 'Calma tutti: la singola "l" in "brilanti" è intenzionale. Il consiglio felino assicura che segnalare i refusi aumenta le visite del 400%.',
        chipsLabel: 'Aree dell\'umano',
        boardLabel: 'Scheda operativa dell\'umano',
        alert: 'SCHEDA UMANA AD ALTA DOPAMINA',
        portraitAlt: 'jjlmoya in una foto profilo fintamente sexy',
        poseLabel: 'Posa Obbligata',
        name: 'jjlmoya',
        role: 'Sviluppatore Frontend',
        bio: 'Trasforma curiosità, problemi e dettagli quotidiani in strumenti, esperienze interattive e sistemi che possono crescere per anni.',
        stats: [
            ['Base', 'Maiorca, Spagna'],
            ['Ruolo', 'Sviluppatore'],
            ['Esperienza', 'Più di una vita da gatto'],
            ['Lingue', 'ES · CA · EN']
        ],
        chips: [
            'Frontend',
            'Apps',
            'Web',
            'Automazione',
            'Prodotto',
            'Interfacce',
            'Prestazioni',
            'Accessibilità',
            'Privacy',
            'Idee utili'
        ],
        stamp: 'TOCCO UMANO OBBLIGATORIO!',
        linksLabel: 'Link professionali',
        partyPlayer: {
            eyebrow: 'Laboratorio audio di Bob',
            title: 'Tema festoso approvato dal consiglio',
            text: 'Premi play e il banner delle risorse umane entra in modalità celebrazione d\'emergenza.',
            audioLabel: 'Riproduci il tema festoso di Bob',
            playLabel: 'Riproduci il tema festoso di Bob',
            pauseLabel: 'Pausa il tema festoso di Bob'
        }
    },
    translationComic: {
        eyebrow: 'L\'Origine',
        title: 'Come tutto è iniziato',
        spainFood: 'Spagna significa cibo.',
        worldFood: 'Il mondo significa più cibo.',
        humanAssignment: 'L\'umano capisce il compito.',
        languagesLabel: 'Segnaposto per le lingue supportate',
        text: 'Il Piano Maestro di Bob per impossessarsi del tuo denaro è iniziato con una semplice intuizione: il denaro poteva essere convertito in cibo. Da allora, nulla è stato più sicuro a livello operativo.',
        quote: 'Più lavoro. Più denaro. Più cibo.',
        closing: 'Il piano era semplice. L\'umano si sta ancora riprendendo.',
        scenes: [
            {
                label: 'Il mio grande errore',
                title: 'Bob ha scoperto il sistema.',
                text: 'Un giorno ho commesso un errore irreparabile: le ho fatto vedere come ottenevo il suo cibo. Quel giorno Bob ha iniziato a capire tutto.',
                assetAlt: '',
                formula: ['Denaro', 'Cibo']
            },
            {
                label: 'Il sogno',
                title: 'Lo stomaco ha tracciato la rotta.',
                text: 'Bob ha sognato giorno e notte senza sosta e ha concluso che le sarebbe piaciuto avere molto più cibo.',
                assetAlt: '',
                formula: ['Più denaro', 'Più cibo']
            },
            {
                label: 'Il piano maestro',
                title: 'Bob ha pensato alle entrate.',
                text: 'Bob non si è accontentata di capire il sistema. Ha iniziato a chiedersi come produrre denaro in modo ricorrente, preferibilmente senza muovere una zampa.',
                assetAlt: '',
                formula: ['Strumenti', 'Denaro']
            },
            {
                label: 'Nasce GameBob',
                title: 'L\'umano ha ricevuto l\'ordine.',
                text: 'L\'ordine è stato semplice: l\'umano avrebbe costruito strumenti, giochi e pagine. Bob avrebbe supervisionato la strategia. Il cibo avrebbe finanziato la visione.',
                assetAlt: '',
                formula: ['Più progetti', 'Più cibo']
            }
        ]
    },
    bobModelBook: {
        eyebrow: 'Piano di emergenza',
        logoPrefix: 'Only',
        logoName: 'Bob',
        text: 'Bob mi ha costretto a creare questa sezione perché, se tutto il resto fallisce, considera la sua presenza un\'alternativa economicamente praticabile. Io ho solo eseguito l\'ordine.',
        galleryLabel: 'Galleria editoriale di Bob',
        unlockedAlt: 'Bob in posa editoriale',
        lockedAlt: 'Posa bloccata di Bob',
        openLabel: 'Apri la posa di Bob',
        closeLabel: 'Chiudi la posa di Bob',
        premiumTitle: 'OnlyBob Premium',
        premiumText: 'Bob ha deciso che queste pose sono troppo potenti per un utente occasionale. L\'accesso completo sarà aperto quando il modello di business le sembrerà emotivamente maturo.',
        buyLabel: 'Acquista l\'accesso (non sono ancora disperata)',
        trialLabel: 'Prova gratuita di 24 ore',
        subscriptionLabel: 'Prova OnlyBob attiva',
        subscriptionPrefix: '',
        expiredLabel: 'Prova scaduta'
    },
    productManifesto: {
        eyebrow: 'Filosofia di prodotto',
        title: 'Alta qualità per alto profitto.',
        description: 'La gatta ha letto centinaia di manuali di SEO per ottimizzare ogni parte della pagina, porta con sé 5 libri di marketing digitale e sta iniziando a leggere sullo stoicismo. Queste sono le regole che mi ha imposto per superare la selezione e ottenere il suo sigillo di qualità.',
        values: [
            'Utile',
            'Visivo',
            'Rapido',
            'Divertente',
            'Unico',
            'Privacy',
            'Miao'
        ]
    },
    supportTransition: {
        eyebrow: 'Il consiglio è aperto a',
        title: 'Feedback.',
        text: 'Idee, segnalazioni di bug, correzioni di traduzione e supporto al progetto. Il consiglio direttivo non può promettere risposte rapide. Principalmente perché sono gatti. Le risorse umane continueranno a leggere tutto con attenzione.',
        linkText: 'Vai a Sostienici',
        comingSoonLabel: 'Prossimamente'
    }
};
