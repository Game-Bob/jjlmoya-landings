import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { relativePath } from './landing-test-helpers';

const landingDir = join(process.cwd(), 'src', 'landing');
const geometryReads = [
    'offsetWidth',
    'offsetHeight',
    'offsetTop',
    'offsetLeft',
    'clientWidth',
    'clientHeight',
    'clientTop',
    'clientLeft',
    'scrollWidth',
    'scrollHeight',
    'scrollTop',
    'scrollLeft',
    'getBoundingClientRect',
    'getClientRects',
    'computedStyle',
    'getComputedStyle',
];
const domWrites = [
    '.style.',
    '.classList.add',
    '.classList.remove',
    '.classList.toggle',
    '.appendChild',
    '.insertBefore',
    '.prepend',
    '.append',
    '.remove',
    '.innerHTML',
    '.textContent',
    '.setAttribute',
];

function findFiles(dir: string, extensions: string[]): string[] {
    const files: string[] = [];
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
        const fullPath = join(dir, entry.name);
        if (entry.isDirectory()) files.push(...findFiles(fullPath, extensions));
        else if (extensions.some((extension) => entry.name.endsWith(extension))) files.push(fullPath);
    }
    return files;
}

function findFormControls(content: string, tagName: 'input' | 'select'): RegExpMatchArray[] {
    return Array.from(content.matchAll(new RegExp(`<${tagName}\\b[^>]*>`, 'gi')));
}

function attrValue(tag: string, attr: string): string | null {
    const match = tag.match(new RegExp(`\\b${attr}\\s*=\\s*(?:"([^"]+)"|'([^']+)'|\\{([^}]+)\\})`, 'i'));
    return match?.[1] ?? match?.[2] ?? match?.[3] ?? null;
}

function booleanAttr(tag: string, attr: string): boolean {
    return new RegExp(`\\b${attr}\\b`, 'i').test(tag);
}

function hasExplicitLabel(content: string, id: string): boolean {
    const escapedId = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return (
        new RegExp(`<label\\b[^>]*\\bfor\\s*=\\s*["']${escapedId}["'][^>]*>`, 'i').test(content)
        || new RegExp(`<label\\b[^>]*\\bfor\\s*=\\s*\\{${escapedId}\\}[^>]*>`, 'i').test(content)
    );
}

function hasWrappingLabel(content: string, tag: RegExpMatchArray): boolean {
    const index = tag.index ?? content.indexOf(tag[0]);
    const before = content.slice(0, index);
    const labelOpen = before.lastIndexOf('<label');
    const labelClose = before.lastIndexOf('</label>');
    const nextLabelClose = content.indexOf('</label>', index + tag[0].length);
    return labelOpen > labelClose && nextLabelClose !== -1;
}

function hasAccessibleName(content: string, tag: RegExpMatchArray): boolean {
    const source = tag[0];
    if (attrValue(source, 'aria-label')) return true;
    if (attrValue(source, 'aria-labelledby')) return true;
    const id = attrValue(source, 'id');
    if (id && hasExplicitLabel(content, id)) return true;
    return hasWrappingLabel(content, tag);
}

function isIgnoredInput(tag: string): boolean {
    const type = attrValue(tag, 'type')?.toLowerCase() ?? 'text';
    const attributes = `${attrValue(tag, 'style') ?? ''} ${attrValue(tag, 'class') ?? ''}`.toLowerCase();
    const visuallyHiddenFile = type === 'file' && ['display:none', 'display: none', 'file-input'].some((pattern) => attributes.includes(pattern));
    return ['hidden', 'button', 'submit', 'reset'].includes(type) || booleanAttr(tag, 'aria-hidden') || visuallyHiddenFile;
}

function controlFailures(content: string, tagName: 'input' | 'select'): string[] {
    return findFormControls(content, tagName)
        .filter((tag) => tagName !== 'input' || !isIgnoredInput(tag[0]))
        .filter((tag) => !hasAccessibleName(content, tag))
        .map((tag) => tag[0]);
}

function hasDomWriteBeforeGeometryRead(content: string): boolean {
    const normalized = content.replace(/\s+/g, ' ');
    return domWrites.some((write) => {
        const writeIndex = normalized.indexOf(write);
        if (writeIndex === -1) return false;
        return geometryReads.some((read) => normalized.indexOf(read, writeIndex + write.length) !== -1);
    });
}

describe('PageSpeed best-practice guards', () => {
    const astroLandingFiles = findFiles(landingDir, ['.astro']);
    const scriptFiles = findFiles(landingDir, ['.astro', '.ts', '.js']);

    astroLandingFiles.forEach((file) => {
        const displayPath = relativePath(file);

        it(`${displayPath} labels every input with an explicit label`, () => {
            const content = readFileSync(file, 'utf-8');
            const failures = controlFailures(content, 'input');
            expect(failures, `Input controls without label, wrapping label, aria-label or aria-labelledby in ${displayPath}:\n${failures.join('\n')}`).toEqual([]);
        });

        it(`${displayPath} labels every select with an explicit label`, () => {
            const content = readFileSync(file, 'utf-8');
            const failures = controlFailures(content, 'select');
            expect(failures, `Select controls without label, wrapping label, aria-label or aria-labelledby in ${displayPath}:\n${failures.join('\n')}`).toEqual([]);
        });
    });

    scriptFiles.forEach((file) => {
        const displayPath = relativePath(file);

        it(`${displayPath} avoids static forced-reflow patterns`, () => {
            const content = readFileSync(file, 'utf-8');
            expect(
                hasDomWriteBeforeGeometryRead(content),
                `${displayPath} appears to read layout geometry after DOM/style mutations. Split writes and reads across frames or measure before mutating.`,
            ).toBe(false);
        });
    });
});
