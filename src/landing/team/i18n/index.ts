import type { KnownLocale } from '../../../types';
import * as es from './es';
import * as en from './en';
import * as fr from './fr';
import * as de from './de';
import * as it from './it';
import * as pt from './pt';
import * as nl from './nl';
import * as sv from './sv';
import * as pl from './pl';
import * as id from './id';
import * as tr from './tr';
import * as ru from './ru';
import * as ja from './ja';
import * as ko from './ko';
import * as zh from './zh';

const translations = {
    es,
    en,
    fr,
    de,
    it,
    pt,
    nl,
    sv,
    pl,
    id,
    tr,
    ru,
    ja,
    ko,
    zh,
};

export function getTranslation(locale: KnownLocale) {
    return translations[locale as keyof typeof translations] || translations.en;
}
