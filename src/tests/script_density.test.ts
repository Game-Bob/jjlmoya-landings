import { describe, expect, it } from 'vitest';
import { ALL_LANDING_DEFINITIONS } from '../entries';
import { normalizeText } from './landing-test-helpers';

type ScriptLocale = keyof typeof SCRIPT_RULES;

const SCRIPT_RULES = {
    ja: { language: 'Japanese', scriptName: 'kana/kanji', scriptCharacters: /[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}]/gu, minScriptRatio: 0.45 },
    ko: { language: 'Korean', scriptName: 'hangul', scriptCharacters: /\p{Script=Hangul}/gu, minScriptRatio: 0.55 },
    ru: { language: 'Russian', scriptName: 'cyrillic', scriptCharacters: /\p{Script=Cyrillic}/gu, minScriptRatio: 0.65 },
    zh: { language: 'Chinese', scriptName: 'han', scriptCharacters: /\p{Script=Han}/gu, minScriptRatio: 0.45 },
} as const;

const LETTERS = /\p{L}/gu;

function letterCount(text: string): number {
    return text.match(LETTERS)?.length ?? 0;
}

function scriptCount(text: string, locale: ScriptLocale): number {
    return text.match(SCRIPT_RULES[locale].scriptCharacters)?.length ?? 0;
}

function scriptRatio(text: string, locale: ScriptLocale): number {
    const letters = letterCount(text);
    if (letters === 0) return 0;
    return scriptCount(text, locale) / letters;
}

describe('Native script density validation', () => {
    ALL_LANDING_DEFINITIONS.forEach((landing) => {
        describe(`Landing: ${landing.entry.id}`, () => {
            Object.keys(SCRIPT_RULES).forEach((locale) => {
                it(`${locale} keeps most translated text in its native script`, async () => {
                    const typedLocale = locale as ScriptLocale;
                    const loader = landing.entry.i18n[typedLocale];
                    if (!loader) return;

                    const rule = SCRIPT_RULES[typedLocale];
                    const text = normalizeText(await loader());
                    const letters = letterCount(text);
                    const matches = scriptCount(text, typedLocale);
                    const ratio = scriptRatio(text, typedLocale);

                    expect(
                        ratio,
                        [
                            `Possible broken translation detected in ${landing.entry.id}/${typedLocale} (${rule.language}).`,
                            `The text has ${matches} ${rule.scriptName} characters out of ${letters} analyzed letters (${(ratio * 100).toFixed(1)}%).`,
                            `Most translatable content should be written in ${rule.scriptName} script.`,
                        ].join(' '),
                    ).toBeGreaterThanOrEqual(rule.minScriptRatio);
                });
            });
        });
    });
});
