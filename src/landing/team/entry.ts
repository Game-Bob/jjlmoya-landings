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
        en: () => import('./i18n/en').then((m) => m.cardContent),
        fr: () => import('./i18n/fr').then((m) => m.cardContent),
        de: () => import('./i18n/de').then((m) => m.cardContent),
        it: () => import('./i18n/it').then((m) => m.cardContent),
        pt: () => import('./i18n/pt').then((m) => m.cardContent),
        nl: () => import('./i18n/nl').then((m) => m.cardContent),
        sv: () => import('./i18n/sv').then((m) => m.cardContent),
        pl: () => import('./i18n/pl').then((m) => m.cardContent),
        id: () => import('./i18n/id').then((m) => m.cardContent),
        tr: () => import('./i18n/tr').then((m) => m.cardContent),
        ru: () => import('./i18n/ru').then((m) => m.cardContent),
        ja: () => import('./i18n/ja').then((m) => m.cardContent),
        ko: () => import('./i18n/ko').then((m) => m.cardContent),
        zh: () => import('./i18n/zh').then((m) => m.cardContent),
    }
};
