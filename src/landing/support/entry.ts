import type { LandingEntry } from '../../types';

export const supportEntry: LandingEntry = {
    id: 'support-us',
    i18n: {
        en: () => import('./i18n/en').then((m) => m.cardContent),
        es: () => import('./i18n/es').then((m) => m.cardContent),
    }
};
