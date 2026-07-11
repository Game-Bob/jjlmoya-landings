import fs from 'node:fs';
import path from 'node:path';
import type { LandingCardContent, LandingDefinition } from '../types';

export interface LandingLocaleCase {
    landingId: string;
    locale: string;
    content: LandingCardContent;
}

export interface LandingExportValidationResult {
    passed: boolean;
    failures: string[];
}

export function getFiles(dir: string, extensions?: string[]): string[] {
    const results: string[] = [];
    if (!fs.existsSync(dir)) return results;

    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            if (!['tests', 'node_modules', '.astro'].includes(entry.name)) {
                results.push(...getFiles(fullPath, extensions));
            }
        } else if (!extensions || extensions.some((extension) => entry.name.endsWith(extension))) {
            results.push(fullPath);
        }
    }

    return results;
}

export function relativePath(filePath: string): string {
    return path.relative(process.cwd(), filePath).replace(/\\/g, '/');
}

export function collectStrings(value: unknown): string[] {
    if (typeof value === 'string') return [value];
    if (!value || typeof value !== 'object') return [];
    if (Array.isArray(value)) return value.flatMap(collectStrings);
    return Object.values(value).flatMap(collectStrings);
}

export function normalizeText(value: unknown): string {
    return collectStrings(value).join(' ').normalize('NFC');
}

export async function landingLocaleCases(landings: LandingDefinition[]): Promise<LandingLocaleCase[]> {
    const cases: LandingLocaleCase[] = [];

    for (const landing of landings) {
        for (const [locale, loader] of Object.entries(landing.entry.i18n)) {
            if (!loader) continue;
            cases.push({
                landingId: landing.entry.id,
                locale,
                content: await loader(),
            });
        }
    }

    return cases;
}

export async function validateLandingExports(landings: LandingDefinition[]): Promise<LandingExportValidationResult> {
    const failures: string[] = [];

    for (const landing of landings) {
        if (typeof landing.LandingComponent !== 'function') {
            failures.push(`${landing.entry.id}: LandingComponent is not a function (${typeof landing.LandingComponent})`);
            continue;
        }

        try {
            const result = await landing.LandingComponent();
            if (!result || typeof result !== 'object') {
                failures.push(`${landing.entry.id}: LandingComponent import returned invalid result`);
            }
        } catch (error) {
            failures.push(`${landing.entry.id}: LandingComponent execution error - ${error instanceof Error ? error.message : 'unknown'}`);
        }
    }

    return {
        passed: failures.length === 0,
        failures,
    };
}
