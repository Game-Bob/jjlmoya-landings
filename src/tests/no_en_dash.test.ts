import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { getFiles, relativePath } from './landing-test-helpers';

function isContentFile(filePath: string): boolean {
    return filePath.includes(`${path.sep}i18n${path.sep}`);
}

const filesToTest = getFiles(path.join(process.cwd(), 'src')).filter(isContentFile);
const aiTypographyGarbage = [
    '\u2013',
    '\u2014',
    '\u2026',
    '\u201c',
    '\u201d',
    '\u2018',
    '\u2019',
    '\u00ab',
    '\u00bb',
    '\u200b',
    '\u201e',
];

describe('Typography garbage character validation', () => {
    filesToTest.forEach((filePath) => {
        const displayPath = relativePath(filePath);

        it(`should not contain typography garbage characters in ${displayPath}`, () => {
            const content = fs.readFileSync(filePath, 'utf-8');
            const hasAiPatterns = aiTypographyGarbage.some((char) => content.includes(char));
            expect(hasAiPatterns).toBe(false);
        });

        it(`should not contain space before colon in ${displayPath}`, () => {
            if (filePath.endsWith('fr.ts')) return;
            const content = fs.readFileSync(filePath, 'utf-8');
            expect(/ : /.test(content)).toBe(false);
        });

        it(`should not contain double hyphen in ${displayPath}`, () => {
            const content = fs.readFileSync(filePath, 'utf-8');
            expect(content).not.toContain('--');
        });
    });
});
