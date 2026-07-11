import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { getFiles, relativePath } from './landing-test-helpers';

describe('Image format constraints', () => {
    const srcDir = path.join(process.cwd(), 'src');
    const allFiles = getFiles(srcDir);

    it('should not contain any PNG or JPG files', () => {
        const forbiddenExtensions = ['.png', '.jpg', '.jpeg', '.gif'];
        const forbiddenFiles = allFiles.filter((file) =>
            forbiddenExtensions.some((ext) => file.toLowerCase().endsWith(ext))
        );

        expect(
            forbiddenFiles.map(relativePath),
            'Found non-webp image files in the project. Use only WebP format.'
        ).toEqual([]);
    });

    it('should not reference non-webp image formats in source code', () => {
        const codeFiles = allFiles.filter((file) =>
            ['.ts', '.tsx', '.js', '.jsx', '.astro', '.css'].some((ext) => file.endsWith(ext))
        );

        const forbiddenPattern = /\.(png|jpg|jpeg|gif)\b/i;
        const violations: string[] = [];

        for (const file of codeFiles) {
            const content = fs.readFileSync(file, 'utf-8');
            if (forbiddenPattern.test(content)) {
                violations.push(relativePath(file));
            }
        }

        expect(
            violations,
            'Code files referencing forbidden image extensions (.png, .jpg, .jpeg, .gif). Convert to WebP and update references.'
        ).toEqual([]);
    });
});
