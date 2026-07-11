import type { LandingEntry } from '../../types';

const assetsBasePath = '/landings/team/assets';
const cssPath = '/landings/team/team.css';
const openGraphImage = `${assetsBasePath}/team-og.webp`;

export const teamEntry: LandingEntry = {
    id: 'team',
    publicAssets: {
        basePath: assetsBasePath,
        cssPath,
    },
    seo: {
        title: 'GameBob Team',
        description: 'A warm team landing about Bob, the feline board of directors, one solo developer in Mallorca, and the companions remembered along the way.',
        image: openGraphImage,
        openGraphImage,
    },
    i18n: {
        en: () => import('./i18n/en').then((m) => m.cardContent),
        es: () => import('./i18n/es').then((m) => m.cardContent),
    }
};
