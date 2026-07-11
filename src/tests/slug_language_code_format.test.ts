import { describe, expect, it } from 'vitest';
import { ALL_LANDING_DEFINITIONS } from '../entries';

describe('Slug language code format validation', () => {
    ALL_LANDING_DEFINITIONS.forEach((landing) => {
        describe(`Landing: ${landing.entry.id}`, () => {
            it('slug should not end with 2-letter language codes like -ja, -ru, -ko', async () => {
                for (const [locale, loader] of Object.entries(landing.entry.i18n)) {
                    if (!loader) continue;
                    const content = await loader();

                    expect(
                        content.slug,
                        `Landing "${landing.entry.id}" locale "${locale}" slug ("${content.slug}") cannot end with a 2-letter language code (e.g., -ja, -ru, -ko).`,
                    ).not.toMatch(/-[a-z]{2}$/);
                }
            });
        });
    });
});
