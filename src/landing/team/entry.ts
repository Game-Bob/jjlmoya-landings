import type { LandingEntry } from '../../types';

export const teamEntry: LandingEntry = {
    id: 'team',
    i18n: {
        en: () => Promise.resolve({
            slug: 'team',
            title: 'Our Team',
            subtitle: 'Meet the team behind GameBob',
            description: 'Learn more about the creators, developers, and designers working on GameBob.'
        }),
        es: () => Promise.resolve({
            slug: 'equipo',
            title: 'Nuestro Equipo',
            subtitle: 'Conoce al equipo detrás de GameBob',
            description: 'Descubre más sobre los creadores, desarrolladores y diseñadores de GameBob.'
        })
    }
};
