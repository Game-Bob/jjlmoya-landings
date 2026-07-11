import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { ALL_LANDING_DEFINITIONS } from '../entries';
import { getFiles, relativePath } from './landing-test-helpers';

function h1Count(content: string): number {
    return content.match(/<h1[\s>]/gi)?.length ?? 0;
}

function landingFileForFolder(folderName: string): string | undefined {
    const files = getFiles(`${process.cwd()}\\src\\landing`, ['.astro'])
        .filter((file) => file.endsWith('\\landing.astro') || file.endsWith('/landing.astro'));
    return files.find((file) => file.includes(`\\${folderName}\\`) || file.includes(`/${folderName}/`));
}

describe('Landing H1 validation', () => {
    ALL_LANDING_DEFINITIONS.forEach((landing) => {
        it(`${landing.entry.id} should contain exactly one <h1>`, async () => {
            const enContent = await landing.entry.i18n.en?.();
            const file = landingFileForFolder(landing.entry.id) ?? (enContent ? landingFileForFolder(enContent.slug) : undefined);
            if (!file) {
                throw new Error(`Could not find landing.astro for landing "${landing.entry.id}"`);
            }
            const displayPath = relativePath(file);
            const content = readFileSync(file, 'utf-8');

            expect(
                h1Count(content),
                `Landing "${landing.entry.id}" in ${displayPath} must contain exactly one <h1>.`,
            ).toBe(1);
        });
    });
});
