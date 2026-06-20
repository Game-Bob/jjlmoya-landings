---
name: landing-page-builder
description: Build complete, highly visual and dynamic landing pages in the jjlmoya-landings Astro project. Use when Codex is asked to create, design, redesign, QA, or internationalize a landing section/page in this repo, especially pages inserted into another site without their own header or footer, with theme-light/theme-dark support, English-first design, and translations generated later from ./prompts/i18n/.
---

# Landing Page Builder

## Core Workflow

Build landings as complete web experiences, even when the output is mounted inside another page. Do not add a site header or footer unless the user explicitly asks for them.

Work English-first:

1. Implement the full design and content in English only.
2. QA only the English version until the user has manually tested and given OKQA.
3. Translate to the remaining locales only after OKQA.
4. Generate translations using the prompt files in `./prompts/i18n/`; do not hand-translate casually.

## Project Shape

Use the existing Astro landing structure:

- `src/landing/<slug>/landing.astro` for the page component.
- `src/landing/<slug>/entry.ts` for the landing entry metadata and locale imports.
- `src/landing/<slug>/i18n/en.ts` for the English card/content metadata.
- `src/entries.ts` to register new landings when needed.

Before editing, inspect nearby landings and shared types. Preserve local conventions for imports, indentation, CSS placement, and exported names.

## Design Rules

Make the page feel like a full landing page, not a small embedded widget:

- Create a complete first-to-last-page narrative with strong above-the-fold impact, content sections, proof/detail, and a closing section when appropriate.
- Keep it highly visual and dynamic: layered composition, motion, interaction states, responsive rhythm, and strong visual hierarchy.
- Use real assets, generated bitmap assets, CSS effects, or carefully built interactive visuals when the page needs visual richness.
- Avoid generic marketing filler; write concrete English copy that supports the page's goal.
- Support inherited themes through `.theme-light` and `.theme-dark`. Do not create a separate theme switcher.
- Scope styles to the landing root class so the embedded page does not leak styles into its host.
- Ensure the page works as an inserted section: no global body assumptions, no fixed header/footer dependencies, and no layout that requires owning the whole document chrome.

## English QA

After implementation, validate the English version before asking for manual testing:

- Run the repo's relevant checks, usually `npm run lint`, `npm run type-check`, and/or `npm run build` depending on the change.
- Start the dev server when visual QA is needed and inspect the landing in browser viewports.
- Check both `.theme-light` and `.theme-dark`.
- Check desktop and mobile layouts for text overflow, overlapping content, broken motion, missing assets, and awkward embedded-page behavior.
- Keep non-English locale files untouched until the user explicitly gives OKQA.

## Translation Phase

Only after the user gives OKQA:

1. Read the relevant target-language prompt from `./prompts/i18n/<locale>.md`.
2. Use that prompt's instructions to generate the locale file.
3. Add each locale import to the landing `entry.ts`.
4. Re-run checks after translation.

If prompts or target locales are unclear, inspect `./prompts/i18n/` and existing landing locale files before deciding.
