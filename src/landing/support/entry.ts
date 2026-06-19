import type { LandingEntry } from '../../types';

export const supportEntry: LandingEntry = {
    id: 'support',
    i18n: {
        en: () => Promise.resolve({
            slug: 'support',
            title: 'Support',
            subtitle: 'Get help and support',
            description: 'Find contact information and support channels for GameBob services.'
        }),
        es: () => Promise.resolve({
            slug: 'soporte',
            title: 'Soporte',
            subtitle: 'Obtén ayuda y soporte',
            description: 'Encuentra información de contacto y canales de soporte para los servicios de GameBob.'
        })
    }
};
