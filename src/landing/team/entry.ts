import type { LandingEntry } from '../../types';

const assetsBasePath = '/landings/team/assets';
const cssPath = '/landings/team/team.css';

export const teamEntry: LandingEntry = {
    id: 'team',
    publicAssets: {
        basePath: assetsBasePath,
        cssPath,
    },
    seo: {
        image: `${assetsBasePath}/team-og.webp`,
        openGraphImage: `${assetsBasePath}/team-og.webp`,
    },
    i18n: {
        es: () => import('./i18n/es').then((m) => m.cardContent),
    }
};
