import type { LandingDefinition } from './types';
import { teamEntry } from './landing/team/entry';

export const ALL_LANDING_DEFINITIONS: LandingDefinition[] = [
    {
        entry: teamEntry,
        LandingComponent: () => import('./landing/team/landing.astro'),
    }
];
