import { describe, expect, it } from 'vitest';
import { ALL_LANDING_DEFINITIONS } from '../entries';

describe('I18n coverage validation', () => {
    const expectedLocales = Array.from(
        new Set(ALL_LANDING_DEFINITIONS.flatMap((landing) => Object.keys(landing.entry.i18n))),
    ).sort();

    ALL_LANDING_DEFINITIONS.forEach(({ entry }) => {
        describe(`Landing: ${entry.id}`, () => {
            it('should include every locale currently used by landings', () => {
                const registeredLocales = Object.keys(entry.i18n);
                expectedLocales.forEach((locale) => {
                    expect(
                        registeredLocales,
                        `Landing "${entry.id}" is missing locale "${locale}"`,
                    ).toContain(locale);
                });
            });

            it('all locale loaders should be functions', () => {
                expectedLocales.forEach((locale) => {
                    const loader = entry.i18n[locale as keyof typeof entry.i18n];
                    expect(
                        typeof loader,
                        `Landing "${entry.id}" locale "${locale}" loader is not a function`,
                    ).toBe('function');
                });
            });
        });
    });
});
