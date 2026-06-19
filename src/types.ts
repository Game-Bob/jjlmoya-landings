export type KnownLocale =
    | 'es' | 'en' | 'fr' | 'de' | 'it' | 'pt'
    | 'nl' | 'sv' | 'pl' | 'id' | 'tr' | 'ru'
    | 'ja' | 'ko' | 'zh';

export type LocaleLoader<T> = () => Promise<T>;
export type LocaleMap<T> = Partial<Record<KnownLocale, LocaleLoader<T>>>;

export interface LandingCardContent {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
}

export interface LandingEntry {
    id: string;
    i18n: LocaleMap<LandingCardContent>;
}

export interface LandingDefinition {
    entry: LandingEntry;
    LandingComponent: () => Promise<{ default: unknown }>;
}
