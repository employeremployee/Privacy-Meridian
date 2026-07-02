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

**2026-07-02 — Tailwind v4, not v3.** Spec section 3's file tree and Phase 2 instructions assume classic Tailwind v3 (`tailwind.config.js` + PostCSS + autoprefixer). The scaffold installed Tailwind v4, which uses a CSS-first `@theme` block (in `src/index.css`) instead of a JS config file, and plugs into Vite via `@tailwindcss/vite` instead of PostCSS. Jared approved keeping v4. There is no `tailwind.config.js` in this project — the palette lives in `src/index.css`. Do not "restore" a config file in a future session.

**2026-07-02 — Fonts are self-hosted, not loaded from Google Fonts.** Spec section 5.2 says to load Inter and JetBrains Mono via Google Fonts `<link>` tags. Jared chose to self-host instead, since sending visitor IPs to Google on every page load is in tension with the site's own "no trackers" identity. Font files (OFL-licensed) live in `public/fonts/`, referenced via `@font-face` in `src/index.css`. Do not add Google Fonts `<link>` tags in index.html in a future session.

**2026-07-02 — Localization is live from Phase 2 onward, not deferred to Phase 9.** Cardinal Rule 6 ("never hardcode content strings") has no phase exception. Starting in Phase 2, `Header.jsx`, `Footer.jsx`, and `EntrySelector.jsx` all source their text via `useTranslation()`/`t()` against `src/i18n/locales/en/translation.json`. Phase 9's "extract all UI strings" instruction should be read as a verification/cleanup pass (build the language selector, confirm nothing was missed), not as permission to write literal JSX text in earlier phases.

**2026-07-02 — No accessibility-audit tooling dependency added.** Spec section 13 says to "run axe-core or Lighthouse" before marking a phase complete, but neither appears in section 2's dependency table. Jared chose not to add axe-core as a devDependency. Accessibility verification is done manually (keyboard nav, focus visibility, contrast ratios checked via browser tools) plus the `design:accessibility-review` skill, with no new project dependency. Ask before adding an automated a11y-testing package in a future session.

**2026-07-02 — RegulationNav (jurisdiction/category picker) is intentionally unbuilt.** It's listed in the component architecture (spec section 6) but no phase in the build sequence explicitly assigns building it — a gap between the architecture table and the phase instructions. Jared chose to leave the site URL-only for reaching content (e.g. `/regulation/gdpr/data-subject-rights` by hand) rather than build a picker now. Don't treat the missing click-path as a bug; it's expected until a future phase (or Jared) decides to close this gap.

**2026-07-02 — No /about route exists yet.** Footer's "about link" (spec section 6) has no defined destination anywhere in spec section 7's routing table. Per Jared, it renders as static, non-interactive placeholder text in Footer.jsx until a real destination is defined. Do not silently turn this into a real link without confirming what it should point to.

**2026-07-02 — Muted (#8A8480) fails contrast at normal text size against every other palette color.** Measured: 3.13:1 against Surface, 3.44:1 against Paper, 4.31:1 against Deep Navy — all below the 4.5:1 AA minimum for normal-size text. Per Jared: do not use Muted for readable body/label-size text. Use Ink (#1A1A2E) instead for secondary/metadata text on light backgrounds (e.g. Footer). Muted remains in the palette but is unverified for use below 18px — confirm contrast before using it anywhere new.

**2026-07-02 — Tooltip term placement is auto-detected, not manually authored.** Spec section 11's usage example (`<TooltipTerm termId="...">controller</TooltipTerm>`) implies manually wrapping specific words in JSX, but `professionalLayer` content is stored as flat prose strings in the jurisdiction JSON files, not pre-segmented markup. Per Jared: `src/utils/tooltipTextMatch.jsx` auto-detects which word(s) to wrap by deriving candidate phrases from each glossary term's `term` label (splitting paired terms like "Controller and Processor" into "controller"/"processor", extracting parenthetical abbreviations like "(DPO)") and matching the first case-insensitive occurrence in the text. If a term's derived candidates don't appear in a given article's prose, that term silently gets no tooltip in that article — this is expected, not a bug. Do not rewrite content JSON into structured tooltip segments without asking first; that was explicitly rejected as the approach.

**2026-07-02 — Scripted `.focus()` doesn't dispatch real focus events in the preview browser tool.** The preview tab isn't OS-focused, so `element.focus()` via `preview_eval` updates `document.activeElement` but never fires a `focus`/`focusin` event — this affects testing `:focus-visible` styles (hit in Phase 2) and Radix Tooltip's focus-to-open behavior (hit in Phase 4). Workaround: verify focus-dependent behavior via pointer events (`pointerenter`/`pointermove`) or by inspecting compiled CSS/component props instead of simulating focus directly. Real users tabbing in an actual foreground browser are unaffected — this is a testing-tool limitation, not a product bug.

**2026-07-02 — Reading DOM state immediately after `.click()` in `preview_eval` can read pre-render values.** Hit while testing `ModeToggle` in Phase 5: calling `button.click()` then reading `aria-checked` in the same synchronous block sometimes returned the stale (pre-click) value, even though the click handler had genuinely fired and state did update. Workaround: read resulting DOM state in a separate `preview_eval` call after the click (or after a `setTimeout`), not synchronously in the same expression. Don't mistake this render-timing artifact for a real state-management bug before double-checking with a follow-up read.
