import type { KnownLocale } from '../../../types';
import * as es from './es';

const translations = {
    es,
};

export function getTranslation(locale: KnownLocale) {
    return translations[locale as keyof typeof translations] || translations.en;
}
