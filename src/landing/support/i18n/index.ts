import type { KnownLocale } from '../../../types';
import * as en from './en';
import * as es from './es';

const translations = {
    en,
    es,
};

export function getTranslation(locale: KnownLocale) {
    return translations[locale as keyof typeof translations] || translations.en;
}
