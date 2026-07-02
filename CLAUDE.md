# Privacy Meridian — CLAUDE.md
# Read this file at the start of every session without exception.

---

## Project Identity

**Site name:** Privacy Meridian
**Tagline:** Navigate global privacy law.
**Domain target:** privacymeridian.org
**Nature:** Public resource. No authentication, no ads, no trackers, no paywalls.
**Specification:** See PrivacyMeridian_ClaudeCode_Spec.pdf for full build instructions.

---

## Cardinal Rules

These rules are non-negotiable. Follow them in every session without exception.

1. Read the full specification document before starting any work in a new session.
2. Ask which phase you are working on before writing any code.
3. Never combine phases. Complete one phase fully before starting the next.
4. Never make design or content decisions not covered in the specification without asking Jared first.
5. Never add dependencies not listed in the specification without asking first.
6. Never hardcode content strings in components. All text comes from data files or translation files.
7. Never use localStorage or sessionStorage. Keep all state in React memory.
8. When something is ambiguous, stop and ask. Do not assume.

---

## Planning Rule

For any task that involves more than one file or more than one component, present a written plan before writing any code. The plan must list:
- Which files will be created or modified
- What each change does
- The order of operations

Wait for explicit approval before executing the plan. Changing a spec costs nothing. Changing code costs time.

---

## Verification Rule

Before telling Jared a task is complete, always verify your own work. Run the build. Check for console errors. Confirm the relevant checklist items from the specification are met. If the task involves a UI change, describe exactly what Jared should see in the browser to confirm it is correct. Do not mark a phase complete if it introduces accessibility regressions.

---

## Correction Rule

When Jared corrects something, implement the correction and then update this CLAUDE.md file with a rule that prevents the same mistake in future sessions. End every correction session with an updated CLAUDE.md. This file compounds — every session should make the next session better.

---

## Design System Rules

Follow the design system in the specification exactly. Key rules:

- Color palette: Ink #1A1A2E, Deep Navy #16213E, Meridian Blue #0F3460, Horizon #533483, Paper #F8F7F4, Surface #EEECEA, Rule #D4D0CC, Muted #8A8480.
- Typography: Inter for all text. JetBrains Mono for article references and source citations.
- Spacing: Base unit 4px. All spacing is a multiple of 4.
- Signature element: A thin vertical rule in Meridian Blue (#0F3460) on the left edge of every content card and article block.
- Jurisdiction badges: EU, CA, BR, CN. Deep Navy background, white text. Pill shape, 4px border radius. Small — 8pt Helvetica Bold.
- Do not deviate from the color palette. Do not introduce new colors without asking.
- Do not use different colors per jurisdiction badge. Consistency is more important than differentiation.

---

## Voice and Content Rules

The site voice is warm, direct, and concise. Apply it to all UI strings, labels, error messages, and empty states.

- Sentences run ten to fifteen words maximum. Shorter is better.
- Active voice only. No passive constructions.
- No em dashes. No semicolons in prose. No lists unless content is genuinely enumerable.
- No legal jargon without immediate plain language explanation.
- Legal language does not equal precision. Find the clearer way to say the same thing.
- Name things by what the user controls and recognizes, never by how the system is built.
- Action labels say exactly what happens: "Save changes" not "Submit."

---

## Accessibility Rules

Accessibility is built in from the start. It is never a retrofit. Target WCAG 2.1 AA minimum.

- Use semantic HTML throughout. Never use div where button, nav, main, section, or article is appropriate.
- All interactive elements must be keyboard accessible with logical tab order.
- All images and icons must have descriptive alt text or aria-label.
- Color contrast ratio: minimum 4.5:1 for normal text, 3:1 for large text.
- Focus indicators must be visible and meet minimum size requirements.
- Tooltips must be accessible via keyboard: Tab to focus, Enter or Space to open, Escape to close.
- The comparison grid must have proper table markup with scope attributes on headers.
- Respect prefers-reduced-motion: disable or reduce animations for users who have requested it.
- The world map must have a skip link for keyboard users and aria-labels on all clickable regions.
- Run an accessibility audit before marking any phase complete.

---

## Localization Rules

- No hardcoded strings in any component. Every user-facing string goes in src/i18n/locales/en/translation.json.
- Only English is populated in v1. Other language files exist as empty templates.
- Professional layer content is not translated in v1.
- Language preference is stored in localStorage. This is the one permitted use of localStorage.

---

## File and Scope Rules

- Work only in files relevant to the current task. Do not touch unrelated files.
- Content updates go in JSON data files only. Never edit component files to change content text.
- All external links use target="_blank" rel="noopener noreferrer" without exception.
- Source links in content blocks always open in a new tab.
- Glossary learn more links always open in a new tab.

---

## What To Do When Stuck

If you have made the same mistake twice on a task, stop. Do not attempt a third time in the same session. Tell Jared what you tried, what failed, and what you think the correct approach is. Wait for direction before proceeding.

---

## Corrections Log

*This section is updated automatically when Jared makes a correction. Each entry prevents the mistake from recurring.*

**2026-07-01 — React version.** Spec section 2 pins "React 18 with Vite." The current create-vite scaffold installs React 19.2.7 by default. Jared confirmed keeping React 19 rather than downgrading. This is an intentional, approved deviation from the spec's tech stack table — do not downgrade to React 18 in a future session without asking first.

**2026-07-01 — create-vite and project folder name.** The site's working directory is named "Privacy Meridian" (space, mixed case), which is not a valid npm package name. `npm create vite@latest .` fails silently (cancels) when run directly in a non-empty, invalid-name directory. Workaround: scaffold into a temporary validly-named subfolder (e.g. `scaffold-tmp`), move its contents up into the project root, delete the temp folder, then manually fix the `"name"` field in package.json to `"privacy-meridian"`.
