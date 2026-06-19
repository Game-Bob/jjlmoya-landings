import type { LandingDefinition } from './types';
import { teamEntry } from './landing/team/entry';
import { supportEntry } from './landing/support/entry';

export const ALL_LANDING_DEFINITIONS: LandingDefinition[] = [
    {
        entry: teamEntry,
        LandingComponent: () => import('./landing/team/landing.astro'),
    },
    {
        entry: supportEntry,
        LandingComponent: () => import('./landing/support/landing.astro'),
    },
];
