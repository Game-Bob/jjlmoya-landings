import { describe, expect, it } from 'vitest';
import { ALL_LANDING_DEFINITIONS } from '../entries';
import { normalizeText } from './landing-test-helpers';

type LocaleWithDiacritics = keyof typeof DIACRITIC_RULES;

const DIACRITIC_RULES = {
    de: { language: 'German', expectedCharacters: 'a umlaut, o umlaut, u umlaut, eszett', characters: /[\u00e4\u00f6\u00fc\u00c4\u00d6\u00dc\u00df]/g, minPerThousandLetters: 0.1 },
    es: { language: 'Spanish', expectedCharacters: 'accented vowels, u umlaut, enye', characters: /[\u00e1\u00e9\u00ed\u00f3\u00fa\u00fc\u00f1\u00c1\u00c9\u00cd\u00d3\u00da\u00dc\u00d1]/g, minPerThousandLetters: 0.1 },
    fr: { language: 'French', expectedCharacters: 'French accented letters and ligatures', characters: /[\u00e0\u00e2\u00e6\u00e7\u00e9\u00e8\u00ea\u00eb\u00ee\u00ef\u00f4\u0153\u00f9\u00fb\u00fc\u00ff\u00c0\u00c2\u00c6\u00c7\u00c9\u00c8\u00ca\u00cb\u00ce\u00cf\u00d4\u0152\u00d9\u00db\u00dc\u0178]/g, minPerThousandLetters: 0.1 },
    it: { language: 'Italian', expectedCharacters: 'Italian accented vowels', characters: /[\u00e0\u00e8\u00e9\u00ec\u00ed\u00ee\u00f2\u00f3\u00f9\u00fa\u00c0\u00c8\u00c9\u00cc\u00cd\u00ce\u00d2\u00d3\u00d9\u00da]/g, minPerThousandLetters: 0.1 },
    pl: { language: 'Polish', expectedCharacters: 'Polish diacritics', characters: /[\u0105\u0107\u0119\u0142\u0144\u00f3\u015b\u017a\u017c\u0104\u0106\u0118\u0141\u0143\u00d3\u015a\u0179\u017b]/g, minPerThousandLetters: 0.1 },
    pt: { language: 'Portuguese', expectedCharacters: 'Portuguese accented letters', characters: /[\u00e1\u00e2\u00e3\u00e0\u00e7\u00e9\u00ea\u00ed\u00f3\u00f4\u00f5\u00fa\u00fc\u00c1\u00c2\u00c3\u00c0\u00c7\u00c9\u00ca\u00cd\u00d3\u00d4\u00d5\u00da\u00dc]/g, minPerThousandLetters: 0.1 },
    sv: { language: 'Swedish', expectedCharacters: 'a ring, a umlaut, o umlaut', characters: /[\u00e5\u00e4\u00f6\u00c5\u00c4\u00d6]/g, minPerThousandLetters: 0.1 },
    tr: { language: 'Turkish', expectedCharacters: 'Turkish special letters', characters: /[\u00e7\u011f\u0131\u00f6\u015f\u00fc\u00c7\u011e\u0130\u00d6\u015e\u00dc]/g, minPerThousandLetters: 0.1 },
} as const;

const LETTERS = /\p{L}/gu;

function letterCount(text: string): number {
    return text.match(LETTERS)?.length ?? 0;
}

function diacriticCount(text: string, locale: LocaleWithDiacritics): number {
    return text.match(DIACRITIC_RULES[locale].characters)?.length ?? 0;
}

function diacriticsPerThousandLetters(text: string, locale: LocaleWithDiacritics): number {
    const letters = letterCount(text);
    if (letters === 0) return 0;
    return diacriticCount(text, locale) / letters * 1000;
}

describe('Diacritics density validation', () => {
    ALL_LANDING_DEFINITIONS.forEach((landing) => {
        describe(`Landing: ${landing.entry.id}`, () => {
            Object.keys(DIACRITIC_RULES).forEach((locale) => {
                it(`${locale} keeps the expected accent and special-letter set`, async () => {
                    const typedLocale = locale as LocaleWithDiacritics;
                    const loader = landing.entry.i18n[typedLocale];
                    if (!loader) return;

                    const text = normalizeText(await loader());
                    const rule = DIACRITIC_RULES[typedLocale];
                    const letters = letterCount(text);
                    const matches = diacriticCount(text, typedLocale);
                    const density = diacriticsPerThousandLetters(text, typedLocale);

                    expect(
                        density,
                        [
                            `Possible spelling or encoding issue detected in ${landing.entry.id}/${typedLocale} (${rule.language}).`,
                            `The text has ${matches} special characters (${density.toFixed(2)} per 1000 letters, ${letters} letters analyzed).`,
                            `This locale should include ${rule.expectedCharacters}.`,
                            'If the count is 0 or near 0, accents, tildes, or special letters were probably stripped by encoding or normalization.',
                        ].join(' '),
                    ).toBeGreaterThanOrEqual(rule.minPerThousandLetters);
                });
            });
        });
    });
});
