import type { LandingEntry } from '../../types';

export const teamEntry: LandingEntry = {
    id: 'team',
    i18n: {
        en: () => import('./i18n/en').then((m) => m.cardContent),
    }
};
