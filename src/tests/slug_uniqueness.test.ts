import { describe, expect, it } from 'vitest';
import { ALL_LANDING_DEFINITIONS } from '../entries';
import type { LandingCardContent } from '../types';

const sharingLocales = ['ja', 'ko', 'zh'];

interface ValidateParams {
    landingId: string;
    locale: string;
    content: LandingCardContent;
    enSlug: string;
    slugs: Map<string, string>;
}

const validateLocaleSlug = ({
    landingId,
    locale,
    content,
    enSlug,
    slugs,
}: ValidateParams) => {
    expect(
        content.slug,
        `Landing "${landingId}" locale "${locale}" has an invalid slug ("${content.slug}"). Slugs must be transliterated (only a-z, 0-9, and -).`,
    ).toMatch(/^[a-z0-9-]+$/);

    if (locale === 'en') return;

    if (sharingLocales.includes(locale)) {
        expect(
            content.slug,
            `Landing "${landingId}" locale "${locale}" must use the same slug as "en" ("${enSlug}").`,
        ).toBe(enSlug);
    } else {
        expect(
            content.slug,
            `Landing "${landingId}" locale "${locale}" has the same slug as "en" ("${enSlug}"). Cada slug tiene que estar en su propio idioma`,
        ).not.toBe(enSlug);

        if (slugs.has(content.slug)) {
            const previousLocale = slugs.get(content.slug);
            expect(
                false,
                `Landing "${landingId}" locales "${locale}" and "${previousLocale}" share the same slug ("${content.slug}"). Cada slug tiene que estar en su propio idioma`,
            ).toBe(true);
        }
        slugs.set(content.slug, locale);
    }
};

describe('Slug localization and uniqueness validation', () => {
    ALL_LANDING_DEFINITIONS.forEach((landing) => {
        describe(`Landing: ${landing.entry.id}`, () => {
            it('every locale should have a unique, translated slug', async () => {
                const slugs = new Map<string, string>();
                const locales = Object.keys(landing.entry.i18n);
                const enLoader = landing.entry.i18n.en;
                const enSlug = enLoader ? (await enLoader()).slug : '';

                for (const locale of locales) {
                    const loader = landing.entry.i18n[locale as keyof typeof landing.entry.i18n];
                    if (!loader) continue;
                    validateLocaleSlug({
                        landingId: landing.entry.id,
                        locale,
                        content: await loader(),
                        enSlug,
                        slugs,
                    });
                }
            });
        });
    });
});
