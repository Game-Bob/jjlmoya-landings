import { describe, expect, it } from 'vitest';
import { ALL_LANDING_DEFINITIONS } from '../entries';
import { validateLandingExports } from './landing-test-helpers';

describe('Landing exports pattern validation', () => {
    it('all landings should be registered', () => {
        expect(ALL_LANDING_DEFINITIONS.length).toBeGreaterThan(0);
    });

    ALL_LANDING_DEFINITIONS.forEach((landing) => {
        it(`${landing.entry.id}: LandingComponent should be a lazy-loaded function`, () => {
            expect(typeof landing.LandingComponent).toBe('function');
            expect(landing.LandingComponent).toBeInstanceOf(Function);
        });

        it(`${landing.entry.id}: entry should define an i18n map`, () => {
            expect(landing.entry.id).toBeTruthy();
            expect(Object.keys(landing.entry.i18n).length).toBeGreaterThan(0);
        });
    });

    it('all landing dynamic imports should work', async () => {
        const result = await validateLandingExports(ALL_LANDING_DEFINITIONS);
        if (!result.passed) {
            throw new Error(`Landing export validation failed:\n${result.failures.join('\n')}`);
        }
        expect(result.passed).toBe(true);
    });
});
