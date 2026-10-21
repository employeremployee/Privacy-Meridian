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
- Selected Blue #5B9BD5 (token `--color-selected-blue`). Approved 2026-07-08 as the map's selected-country fill, since Deep Navy was too close to Meridian Blue to read as "picked." Use only for the map selected state unless asked otherwise.
- Selected Border #9DC3E6 (soft sky blue). Approved 2026-10-03 as the map's selected-country border, replacing the old dark Meridian Blue outline, which read as too heavy. Borders were also thinned (selected 0.75px, enacted 0.5px). Map "developing" tier removed the same day: only laws fully in force are colored; everything else is grey.
- Comparison answer colors, approved 2026-10-18 (review item B6): **Yes Green #1B7A4B** and **Partial Amber #B45309**, defined in `src/components/comparisonStates.js`. Use them only for the Yes and Partial states in comparison tables and their key. **Selected Hover #4A8BC7**, in `src/components/MapExplorer.jsx`, is used only when hovering a selected map country. Do not reuse these three elsewhere without asking.
- Map-Only Navy #647FA3, approved 2026-10-18 (Jared chose "light navy tint"; exact shade picked for contrast: 3.04:1 against Meridian Blue, 3.84:1 against Paper, 2.68:1 against the no-law grey). Used only for map countries with a law in force that the site does not cover in detail (`src/data/mapOnlyLaws.js`) and their legend key. Those countries are not clickable or tab stops. The list under the legend gives the same information in text. Canada's badge is "CAN" because California uses "CA" (approved 2026-10-18).
- Favicon (`public/favicon.svg`), approved 2026-10-14: a tilted compass (design "E2"). Its rim uses Selected Border #9DC3E6 over Selected Blue #5B9BD5 (an approved second use of those two colors), with a Paper face and notch. The needle's north half is **Compass Red #B23A3A**, a color approved for the favicon only; its south half is Rule and Muted. The needle has a soft Ink shadow at 14% opacity. Do not use Compass Red elsewhere without asking.
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
- The site ships English-only (decided 2026-10-07). The language selector is removed and i18n is locked to English. The de/es/fr/pt/zh UI+glossary locale files remain parked in the repo (dormant, reversible) but are not reachable in the UI. Do not re-add the selector without asking.
- Professional (legal) layer content is English-only and is not translated. Jared cannot validate translations across these languages, so machine-translated legal content will not be published.
- The site stores NO language preference and no other state in localStorage. The earlier "one permitted localStorage use" (language) is retired — there is now no permitted localStorage use. Keep all state in React memory.
- The Privacy Barrelman headline translation (foreign news titles into English) is unrelated to UI localization and stays.

---

## File and Scope Rules

- Work only in files relevant to the current task. Do not touch unrelated files.
- Content updates go in JSON data files only. Never edit component files to change content text.
- All external links use target="_blank" rel="noopener noreferrer" without exception.
- Source links in content blocks always open in a new tab.
- Glossary learn more links always open in a new tab.

---

## New Country Checklist

Run this for every country or law added to the site (Canada, Australia, Singapore, and every later wave). Shared-code fixes (map focus ring, page titles, heading levels, popup names, table captions) apply automatically. These steps cover what depends on each country's data.

**Wire it in (all five, or the country is half-added):**
- `src/data/jurisdictions/<id>.json`: the law page, same schema as the existing 14.
- `src/pages/MapHomePage.jsx`: import the JSON and add it to `JURISDICTIONS_DATA`.
- `src/data/countryStatus.js`: map the ISO numeric code(s) to the law id so the country is colored and clickable.
- For a US state or Canadian province law: the US and Canada are drawn from `public/maps/us-canada-50m.json` (ids like "US-VA", "CA-QC"), not the world map. Map the id in `jurisdictionForRegion` in `src/components/MapExplorer.jsx`, and remove it from `MAP_ONLY_STATE_LAWS` / `MAP_ONLY_PROVINCE_LAWS` in `src/data/mapOnlyLaws.js`.
- `src/data/mapOnlyLaws.js`: remove the country from the map-only list once it is covered in detail.
- `src/data/mapCountries.js`: the picker label and every country option. Small or missing map shapes (Malta, Hong Kong) are picker-only.
- Every file in `src/data/comparison/`: add a cell for the new id in every row, using line-based edits (never re-serialize these files).

**Check before committing:**
- The map shape announces "Country: Law name. View details." (the label comes from `fullName`, so keep it accurate).
- The browser tab title reads well when the law is chosen ("name, region").
- Every source link opens the right page in a real browser, not just a scripted 200.
- Run the tooltip scan (`docs/site-review-2026-10-08/06`, section 7a). Every popup must fit its words in that law.
- Content follows house voice. Table cells carry no article or section numbers.
- Every claim is checked against the official text by a read-only verifier agent first. Claims backed only by secondary sources are flagged to Jared, not published.
- Run `npm run build` and `npm run lint`. Check the Explore and Compare views in the browser for console errors.
- Log the country in `CONTENT-REVIEW.md` and commit one law per commit.

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

**2026-07-02 — RegulationNav and TopicNav are now built (superseding the earlier "intentionally unbuilt" decision below).** The deferred URL-only approach kept resurfacing as real user-facing breakage ("By Regulation"/"By Topic" nav links going to a blank page) rather than a theoretical gap, so it was fixed directly: `src/components/RegulationNav.jsx` and `TopicNav.jsx` render card-grid pickers (4 jurisdictions; the 7 topic categories that actually have grid.json rows, filtered dynamically rather than hardcoded) and are shown by `RegulationPage`/`TopicPage` whenever no jurisdiction/category is selected in the URL, instead of blank `<main></main>`. Do not revert to the blank-fallback behavior.

**2026-07-02 — No /about route exists yet.** Footer's "about link" (spec section 6) has no defined destination anywhere in spec section 7's routing table. Per Jared, it renders as static, non-interactive placeholder text in Footer.jsx until a real destination is defined. Do not silently turn this into a real link without confirming what it should point to.

**2026-07-02 — Muted (#8A8480) fails contrast at normal text size against every other palette color.** Measured: 3.13:1 against Surface, 3.44:1 against Paper, 4.31:1 against Deep Navy — all below the 4.5:1 AA minimum for normal-size text. Per Jared: do not use Muted for readable body/label-size text. Use Ink (#1A1A2E) instead for secondary/metadata text on light backgrounds (e.g. Footer). Muted remains in the palette but is unverified for use below 18px — confirm contrast before using it anywhere new.

**2026-07-02 — Tooltip term placement is auto-detected, not manually authored.** Spec section 11's usage example (`<TooltipTerm termId="...">controller</TooltipTerm>`) implies manually wrapping specific words in JSX, but `professionalLayer` content is stored as flat prose strings in the jurisdiction JSON files, not pre-segmented markup. Per Jared: `src/utils/tooltipTextMatch.jsx` auto-detects which word(s) to wrap by deriving candidate phrases from each glossary term's `term` label (splitting paired terms like "Controller and Processor" into "controller"/"processor", extracting parenthetical abbreviations like "(DPO)") and matching the first case-insensitive occurrence in the text. If a term's derived candidates don't appear in a given article's prose, that term silently gets no tooltip in that article — this is expected, not a bug. Do not rewrite content JSON into structured tooltip segments without asking first; that was explicitly rejected as the approach.

**2026-07-02 — Scripted `.focus()` doesn't dispatch real focus events in the preview browser tool.** The preview tab isn't OS-focused, so `element.focus()` via `preview_eval` updates `document.activeElement` but never fires a `focus`/`focusin` event — this affects testing `:focus-visible` styles (hit in Phase 2) and Radix Tooltip's focus-to-open behavior (hit in Phase 4). Workaround: verify focus-dependent behavior via pointer events (`pointerenter`/`pointermove`) or by inspecting compiled CSS/component props instead of simulating focus directly. Real users tabbing in an actual foreground browser are unaffected — this is a testing-tool limitation, not a product bug.

**2026-07-02 — Reading DOM state immediately after `.click()` in `preview_eval` can read pre-render values.** Hit while testing `ModeToggle` in Phase 5: calling `button.click()` then reading `aria-checked` in the same synchronous block sometimes returned the stale (pre-click) value, even though the click handler had genuinely fired and state did update. Workaround: read resulting DOM state in a separate `preview_eval` call after the click (or after a `setTimeout`), not synchronously in the same expression. Don't mistake this render-timing artifact for a real state-management bug before double-checking with a follow-up read.

**2026-07-02 — grid.json rows now carry an `articleId` field per jurisdiction cell (not in the original spec schema).** Added to support spec section 10's "clicking a cell expands to show the full content block" requirement, which the original schema had no way to fulfill (no link from a grid row to an actual article). Only added where a jurisdiction's article data genuinely covers that row's specific point — verified by cross-checking each mapped article's `responseTimeline`/content against the row's stated value before adding the link. Some cells legitimately have no `articleId` (e.g. LGPD's "Article 18, III" correction right and PIPL's "Article 46" correction right aren't present as separate articles in our current `lgpd.json`/`pipl.json` data) — those cells render as static text, not a bug. Do not invent an `articleId` for an unmapped cell without verifying an actual matching article exists first.

**2026-07-02 — react-simple-maps needs `prop-types` installed explicitly, plus a Vite cache clear.** react-simple-maps@3.0.0's built dist files call `require('prop-types')` internally but never declare it as a dependency in package.json — a packaging bug from when prop-types commonly shipped bundled with React. This project's Vite version uses the newer Rolldown dev bundler, which can't resolve an unresolvable CJS `require()` the way esbuild used to, so the map fails to render with a `Calling require... doesn't expose the require function` error. Fix: `npm install prop-types` (approved by Jared as a necessary transitive fix, not a new capability) AND delete `node_modules/.vite` before restarting the dev server — installing the package alone did not clear Vite's stale dependency pre-bundle cache; a full cache clear + restart was required for the fix to take effect. If the map ever throws this error again (e.g. after a `node_modules` reinstall), check `prop-types` is still present before re-diagnosing from scratch.

**2026-07-02 — RegulationPage defaults to the data-subject-rights category when no categoryId is in the URL.** Previously `/regulation/:jurisdictionId` alone (no category) rendered blank — this broke the World Map's click target (spec's own route is jurisdiction-only) and would have broken any future direct jurisdiction link the same way. Jared approved defaulting to `data-subject-rights` (the one category with real content across all four jurisdictions) rather than leaving it blank. This also retroactively means "By Regulation" nav-style jurisdiction-only links now show real content instead of dead-ending — do not revert this default without checking whether that regresses the map or nav.

**2026-10-07 — Site is English-only; language selector removed; no localStorage.** Jared decided against publishing translations he cannot validate. The `<LanguageSelector />` was removed from `Header.jsx` and `src/i18n/index.js` is locked to English (`lng: 'en'`, `supportedLngs: ['en']`), with the localStorage language-preference read/write deleted. The de/es/fr/pt/zh UI+glossary locale files and `LanguageSelector.jsx` are kept on disk, parked and dormant, so languages can be re-enabled later if native-speaker proofing ever becomes available — do not delete them, and do not re-add the selector or any machine-translated legal content without asking. The site now uses no localStorage at all (the former language-pref exception is retired). The Privacy Barrelman's headline translation is separate and stays. Comparison tables also had their pinpoint article/section citations removed (commit f89225c); full citations remain in the per-jurisdiction article pages.

**2026-10-07 — Comparison tables carry no pinpoint article/section citations.** The 9 files in `src/data/comparison/` intentionally do NOT cite Article/Section/IPP numbers in their cells; that precision lives in the per-jurisdiction article pages (each article block's `articleRef` + source links), reachable via the Topic-grid click-to-expand. `grid.json` keeps its `articleId` links (which power the modal) but shows no "Article X:" prefix in the visible cell text. Do not re-add article numbers to the comparison data without asking — this was a deliberate reversal of the original request.

**2026-10-14 — v1 routes retired; their code deleted.** Per Jared (review decision D6), `/map`, `/topic/...` and `/regulation/...` now redirect to `/` in `src/App.jsx`. They only knew 4 of the 14 laws and showed stale content. Their code was deleted: `RegulationPage`, `TopicPage`, `MapPage`, `HomePage`, `WorldMap`, `ComparisonGrid`, `GridRow`, `DifferenceBadge`, `DifferenceToggle`, `Modal`, `RegulationNav`, `TopicNav`, `ModeToggle`, `EntrySelector`, `ModeContext`, and `src/data/comparison/grid.json`. This **supersedes** the 2026-07-02 entries about RegulationNav/TopicNav, the RegulationPage default category, and grid.json `articleId` fields; do not restore those pages. `LanguageSelector.jsx` stays parked on purpose. `jurisdictionRegions.js` stays because `countryStatus.js` imports its EU code list. Also per review decisions: "Related Articles" (`CrossReference.jsx`) are in-page buttons that switch topic, scroll to the article and focus it (D7); comparison tables with Yes/Partial/No show a key built from each table's own `states` data (D8); the US picker option reads "United States (California only)" with a note under the map key (D1).

**2026-10-18 — UI review decisions (Jared).** Interface text says "in effect", never "in force" (legend: "Comprehensive law in effect", "Law in effect, not yet covered", and grey "No comprehensive law in effect", which also covers laws passed but not yet in force; Jared, 2026-10-21); law pages keep the legal term "in force" until Jared's content review. The header has no News link: Privacy Barrelman is reached from the link beside Explore/Compare and the footer site map. The masthead title is large, in the page color, with its baseline on the bottom edge of the navy band (`.masthead-title` in `src/index.css`); keep that cut-out look. The footer is one line: "Explore and Compare Laws | Privacy Barrelman | About", then last updated, copyright and "No cookies, no trackers, no analytics." Jared removed the source attribution and the long not-legal-advice sentence from the footer (the About page carries the not-legal-advice note). The masthead tagline is indented so its N lines up with the title's P (`.masthead-tagline` in `src/index.css`). Barrelman drops celebrity and royal privacy stories with no data, law, hacking or surveillance word in the headline (`CELEBRITY_TERMS` and `DATA_CONTEXT_TERMS` in `scripts/barrelman/sources.mjs`). Clicking the selected country in Explore clears it. The US and Canada are drawn by state and province; there are no US/Canada notes under the map key.

**2026-10-19 — Masthead title in all capitals.** The lowercase y's tail dropped below the band edge into the matching page color, so the title read "Privacv". Jared chose all capitals (`text-transform: uppercase` on `.masthead-title`; the translation string stays "Privacy Meridian"). Capitals are wider, so `--masthead-size` is `clamp(1.75rem, 9vw, 7rem)` to fit phones. Changing the font would not help: nearly every y's tail falls below the line. Do not switch back to mixed case without solving the descender.

**2026-10-21 — Review section 4 site fixes.** The footer date comes from the latest commit at build time (`__LAST_UPDATED__` in `vite.config.js`), so it moves with content and code changes, not the 2-hourly news rebuilds. Unknown addresses return a real 404: the build copies `index.html` to `dist/404.html`, and `public/_redirects` serves `/barrelman` and `/about` with 200 and sends the retired v1 addresses to `/` with 301. Add any new route to `_redirects`, or it will return 404. Translated Barrelman headlines say "headline machine-translated", and screen readers also get the original headline.

**2026-10-21 — Do not name the hosting provider on the site (Jared).** Site text says "the site's host", never "Cloudflare". Internal docs and code comments may name it.
