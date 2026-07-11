import fs from 'node:fs';
import path from 'node:path';
import { describe, it } from 'vitest';
import { getFiles } from './landing-test-helpers';

const srcDir = path.join(process.cwd(), 'src');
const files = getFiles(path.join(srcDir, 'landing'), ['.ts']).filter((file) => file.includes(`${path.sep}i18n${path.sep}`));

describe('Landing titles - separator validation', () => {
    it.each(files)('Verify that titles in %s do not contain | or -', (filePath) => {
        const content = fs.readFileSync(filePath, 'utf-8');
        const relativePath = path.relative(process.cwd(), filePath);
        const titlePatterns = [
            /const\s+title\s*=\s*['"]([^'"]+)['"]/g,
            /title\s*:\s*['"]([^'"]+)['"]/g,
        ];
        const findings: string[] = [];

        for (const pattern of titlePatterns) {
            let match: RegExpExecArray | null;
            while ((match = pattern.exec(content)) !== null) {
                const title = match[1];
                if (title.includes('|') || title.includes('-')) {
                    findings.push(title);
                }
            }
        }

        if (findings.length > 0) {
            const list = findings.map((finding) => `  - "${finding}"`).join('\n');
            throw new Error(`Forbidden separators (| or -) found in titles in ${relativePath}:\n${list}`);
        }
    });
});
