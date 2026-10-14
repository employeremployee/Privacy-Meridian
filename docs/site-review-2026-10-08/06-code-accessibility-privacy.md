# 06 — Code review: accessibility, functional bugs, privacy, news pipeline, build, deployment

This is **code work**. Under CLAUDE.md, present a plan and get Jared's approval before
starting, and don't combine it with content edits. Line numbers are at commit `1527aa7`.
Re-check them before editing.

---

## 1. Privacy and trackers — CLEAN (keep it that way)

Checked live in a browser on the home/explore, compare and news views, and by reading all
source:
- **Zero** requests to outside servers.
- No cookies, no `localStorage`, no `sessionStorage`, no IndexedDB, no iframes.
- Fonts (`public/fonts/`) and the map file (`public/maps/world-110m.json`) are self-hosted.
- The only fetch is the site's own `news.json` (`src/pages/BarrelmanPage.jsx` line 42).
- Every outbound link uses `rel="noopener noreferrer"`, so destination sites never learn which
  page the click came from.
- News cards are text-only. No third-party images load.
- The news pipeline (`scripts/barrelman/fetch-news.mjs`) runs only in GitHub Actions. Google
  News and DeepL are contacted by the build job, never by visitors' browsers.

**Hardening (optional, recommended before launch):**

| ID | Item | Fix |
|---|---|---|
| P1 | Some published news links keep their sites' tracking tags (e.g. items with `cre=`, `utm_` and similar). `canonical()` strips `utm_`/`fbclid`/`gclid`/`mc_` only for duplicate-checking. The published `url` (`fetch-news.mjs` ~line 409, `url: res.url \|\| item.url`) keeps them. | Strip known tracking parameters from the published URL too. Consider adding `cre`, `mod`, `loc`, `rfunc`, `tj`, `tr`, `pos` and `spm` to the list. |
| P2 | Moving to **Cloudflare Pages** (planned): some Cloudflare features inject scripts or cookies. | Keep these **off** for the site: Web Analytics (automatic setup), Zaraz, Bot Fight Mode / JS challenges, Email Address Obfuscation, Rocket Loader. Confirm in the dashboard after setup. |
| P3 | No security headers. | Add a `public/_headers` file (Cloudflare Pages format). Everything is same-origin, so a strict policy works. The map uses inline `style` attributes, so `style-src` needs `'unsafe-inline'`. Starting point to test (needs Jared's approval): `Content-Security-Policy: default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'`, `Referrer-Policy: no-referrer`, `Permissions-Policy: interest-cohort=(), browsing-topics=()`, `X-Content-Type-Options: nosniff`. Test the dev and production builds after adding it. |
| P4 | The site has no privacy statement, and "About" is placeholder text. | **DECISION NEEDED (Jared):** optionally add a short "This site collects nothing about you" note. |

---

## 2. Accessibility (WCAG 2.1 AA)

The automated scan (axe-core 4.10.2, **injected into the browser tab for testing only, not
added to the project**) found **0 violations** on the explore view with Brazil selected, the
compare view with three laws, and the news page. The failures below were found by hand.
Per CLAUDE.md, do **not** add an a11y testing dependency without asking Jared.

### Failures (fix these)

**A1. Map countries show no keyboard focus (WCAG 2.4.7) — highest priority**
- Where: `src/components/MapExplorer.jsx` lines 114–124 (styles) and line 31 (`FOCUS_CLASS`).
  The legacy `WorldMap.jsx` has the same pattern.
- Cause: react-simple-maps applies the `style.hover` object when a country is focused
  (`node_modules/react-simple-maps/dist/index.js`, about line 556). Every state object sets an
  inline `outline: 'none'`, which overrides the Tailwind `focus-visible:outline` classes. The
  hover fill change is #0F3460 → #16213E, a contrast of **1.27:1**, which is invisible. A white
  outline would also be invisible on the light background.
- Confirmed live: a focused US path had `:focus-visible` true and computed `outline-style:
  none`.
- Fix idea: remove `outline: 'none'` from the hover and pressed states, or apply a clearly
  visible focus style (thick contrasting stroke, or a distinct fill) when the path is focused.
  Track focus in state; `onFocus`/`onBlur` are already wired. Check 3:1 contrast against both
  the country fill and the map background. There are 41 focusable countries.

**A2. Header home link focus is invisible (WCAG 2.4.7 / 1.4.11)**
- Where: `src/components/Header.jsx` line 9: `focus-visible:outline-meridian-blue` on the
  `bg-deep-navy` header.
- Contrast is **1.27:1**. This is the **first tab stop on every page**.
- Fix: use `focus-visible:outline-white`, as the News link beside it does.

**A3. Placeholder text contrast 3.27:1 (WCAG 1.4.3)**
- Where: `src/components/CountryCombobox.jsx` line 139. The placeholder is "Type a country
  name". Tailwind's default placeholder colour is 50% of `ink` on `paper`.
- The input's label is screen-reader-only (line 127), so the placeholder is the only visible
  instruction inside the box.
- Fix: give the placeholder colour at least 4.5:1 (e.g. `placeholder:text-ink` at a stronger
  opacity, checked against `paper`), or add a visible label.

**A4. Explore/Compare control misuses tab roles (WCAG 4.1.2)**
- Where: `src/pages/MapHomePage.jsx` lines 131–150: `role="tablist"` and `role="tab"`, but no
  `role="tabpanel"`, no `aria-controls`, and no arrow-key support.
- Fix: either make them plain toggle buttons with `aria-pressed` (simplest, matching the topic
  buttons), or implement the full tabs pattern. `src/hooks/useRovingRadioGroup.js` already
  exists for arrow keys.

**A5. 28 EU countries share one accessible name (WCAG 2.4.6 / 4.1.2)**
- Where: `src/components/MapExplorer.jsx` lines 106–108. The label is "View {{law full name}}
  privacy law", so every EU/EEA country reads "View General Data Protection Regulation privacy
  law" with no country name. The US reads as the California law (see file 01, D1).
- Fix: include the country name, e.g. "France: General Data Protection Regulation. View
  details." Add a new translation key, with no hardcoded strings.

**A6. Untranslated news headlines lack a `lang` attribute (WCAG 3.1.2)**
- Where: `src/components/NewsCard.jsx` line 34 (`<h3>{item.title}</h3>`).
- When DeepL translation is missing (for example quota exhausted, or local builds), foreign
  headlines render as raw Chinese, Russian or other text, read with an English voice. The
  `title` attribute (original headline) has the same issue.
- Fix: when `item.originalTitle` is absent and `item.lang !== 'en'`, set `lang={item.lang}` on
  the `<h3>`.

**A7. Page title never changes (WCAG 2.4.2)**
- `document.title` stays "Privacy Meridian" on every route and view.
- Fix: set a title per route ("Privacy Barrelman · Privacy Meridian", "Page not found ·
  Privacy Meridian"), and ideally per selected law. Strings go in `translation.json`.

### Lesser issues (fix when convenient)
- **Glossary popups have no accessible name.** Radix `Popover.Content` renders
  `role="dialog"` with no label (`src/components/TooltipTerm.jsx`). Add `aria-label` or
  `aria-labelledby` pointing at the term heading.
- **Heading levels.** Article titles are `<h2>` (`src/components/SurfaceLabel.jsx` line 5)
  under the law's own `<h2>` (`DrilldownReadout.jsx` line 27). Make article titles `<h3>` and
  their sub-headings `<h4>`. Check the legacy pages too.
- **`<nav>` misused.** It wraps groups of toggle buttons (`MapHomePage.jsx` line 238;
  `DrilldownReadout.jsx` line 31, both labelled "Topic"). Use `role="group"` with
  `aria-label` instead. `<nav>` is for navigation links.
- **No feedback after choosing a country.** The law's content appears below the map, but
  nothing is announced and focus stays in the combobox. Screen-reader users must get past 41
  map stops (or use the skip link) to reach it. Fix: announce the change in a live region, or
  move focus to the law heading.
- **Combobox details** (`CountryCombobox.jsx`):
  - `aria-controls` points at a listbox that doesn't exist while closed;
  - multi mode lacks `aria-multiselectable="true"`;
  - single mode marks all 28 GDPR countries `aria-selected` when GDPR is chosen;
  - no Home/End keys;
  - no announcement of the result count.
- **Mouse wheel over the map zooms it** (d3-zoom's default). Scrolling up over the map zooms in
  instead of scrolling the page. Consider requiring Ctrl+wheel, or adding zoom buttons. Touch
  zoom is disabled on purpose, and the country picker is the alternative on phones, which is
  acceptable.
- **Comparison tables have no `<caption>`.** The topic `<h2>` sits above the table, but the
  table itself has no accessible name. Add `aria-labelledby`.
- **New-tab links.** Source and "Learn more" links open new tabs without saying so. News cards
  already say "Opens in a new tab". Advisory only.

### Passing (keep)
- Skip link for the map works and becomes visible on focus.
- Comparison table markup uses `scope` on headers.
- `prefers-reduced-motion` is respected (`src/index.css`).
- Glossary popups open with Enter/Space, close with Escape, and return focus to the term.
- `lang="en"` is set on `<html>`.
- No horizontal scroll at phone width (375px).
- Body text contrast passes (ink on paper and surface).

---

## 3. Functional bugs

**B1. "Related Articles" links leave the map and land in the wrong place**
- Where: `src/components/CrossReference.jsx` line 28 links to
  `/regulation/{id}/{category}#{articleId}`.
- From the home page these 9 links (GDPR Arts 16–19 and 21; PIPL Arts 38–43 → 40) navigate
  away from the map to the legacy page. React Router does not scroll to the hash: in testing,
  Article 18 sat about 1,300px above the visible area. The visitor's map selection is lost.
- See file 01, D7, for the options.

**B2. Legacy routes still live** (`src/App.jsx` lines 24–26)
- `/map` (4 laws; misleading instructions), `/topic` (stale `grid.json`) and
  `/regulation/...` (4-law picker, so `/regulation/ukgdpr` shows a picker without the UK).
- See file 01, D6.

**B3. Malta and Liechtenstein missing from the country picker** (`src/data/mapCountries.js`).
See file 01, S5.

**B4. Favicon** is the default Vite template logo (`public/favicon.svg`). See file 01, D10.

**B5. Hardcoded string** "n/a" in `src/components/ComparisonCell.jsx` line 14. CLAUDE.md
Cardinal Rule 6 says strings belong in `translation.json`.

**B6. Colours not in the approved palette** (CLAUDE.md Design System Rules: "Do not introduce
new colors without asking"):
- `#1B7A4B` (yes) and `#B45309` (partial) in `src/components/ComparisonCell.jsx` lines 5–6;
- `#4A8BC7` (`selectedHover`) in `src/components/MapExplorer.jsx` line 22.

Ask Jared to approve them or replace them.

---

## 4. Privacy Barrelman news pipeline (content quality)

This review covers the **local** `public/news.json` (generated 2026-08-07). The live site
rebuilds it every 2 hours in GitHub Actions, so check a fresh build too.

| ID | Problem | Fix |
|---|---|---|
| N1 | Dutch "datalek" (data breach) stories are filed as Policy & Perspectives. About 11 items: #5, 8, 10, 11, 20, 23, 27, 28, 33, 36, 49. | Add `datalek`, `datalekken` (and other languages' breach words) to the breaches category hints in `scripts/barrelman/sources.mjs`. |
| N2 | Other misfilings: #51 (Korean hacking story) is Policy; #32 (court data leak) is Legal because "court" matched; #112 (OAIC pixel decision) and #99 (Madison Square Garden facial recognition) are Breaches; regulator actions #1, #34, #55, #4, #69, #0 and #21 are Policy. One story (the Indian Supreme Court DPDP case) is split across categories. | Review the category hints. Regulator enforcement should usually be Legal & Regulatory. |
| N3 | Off-topic items: #94 FTC Celsius (crypto), #104 FTC Hopper (fees), #26 Prince George royal privacy, #73 paid press release, #44 NetApp, #75 "quantum-ready data protection" marketing, #96 botnet takedown, #14 Vivaldi Radio. Borderline: #85, #24, #48, #56. | Tighten relevance or exclusion terms. The FTC feed brings non-privacy consumer-protection news. |
| N4 | Near-duplicates: 11 WhatsApp age-verification items, 8 Indian Supreme Court DPDP items, about 11 CEVA leak items, 4 Mentana items. #40 and #42 are the same article. | Add similar-title de-duplication (current dedupe is exact title or URL only). |
| N5 | Bad stored URLs: #27 stores a DPG Media consent-wall URL instead of the Tweakers article; #40 links to `?page=3`. Some source names are aggregators (v.daum.net, aol.com, Yahoo Finance). "thehindu.com" and "The Hindu" appear for the same outlet. | Detect consent-wall redirects; normalise source names. |
| N6 | Untranslated headlines lack `lang`. | See A6. |
| N7 | `region` is often wrong but is not displayed. | Low priority. |

What's working: the `lang` field matched the headline language on all 118 items, and
"refreshed through the day" matches the 2-hour cron.

---

## 5. Build, dependencies, code quality

| ID | Item | Detail | Fix |
|---|---|---|---|
| Q1 | Build | Passes (`vite build`). | — |
| Q2 | Lint | 1 warning: `src/context/ModeContext.jsx:15` (`only-export-components`). | Move `useMode` to its own file, or ignore. |
| Q3 | Bundle size | One 916 KB JS file (277 KB gzipped). `src/i18n/index.js` lines 4–8 import the 5 parked locale files, and the glossary includes 5 dormant translations. All 14 law JSONs load up front. | Optional: lazy-load parked locales or drop their import while dormant, and code-split law data. Needs Jared's OK (CLAUDE.md keeps the locale files parked on purpose). |
| Q4 | `npm audit` | 4 high-severity advisories in runtime packages: **d3-color** ReDoS (via react-simple-maps; the site parses no user colours); **react-router** 7.12–7.18.1 RSC-mode CSRF (not applicable to a static single-page app); **source-map-js** (build-time). None is practically exploitable here. | `npm update react-router-dom` to 7.18.4 and run `npm audit fix`. Re-test the map after any d3 change. |
| Q5 | react-simple-maps | Pinned at 3.0.0, which needed `legacy-peer-deps` (`.npmrc`) and an explicit `prop-types` install (CLAUDE.md log). Version **5.0.5** exists (published Sep 2026). | **Ask Jared first.** An upgrade may remove both workarounds, but it is a major version jump. |
| Q6 | Dead code | `src/pages/HomePage.jsx` (not routed), `src/components/EntrySelector.jsx`, `src/components/ModeToggle.jsx` (ModeContext only serves legacy routes). `LanguageSelector.jsx` is parked on purpose. Leave it. | Remove after the legacy-route decision (D6). |
| Q7 | Unused data flags | Comparison JSONs carry `draft: true` and a `draftNote`. Translation keys `legend.developing` and `home.draftBadge` are unused. | See file 01, D11 and S6. |
| Q8 | Empty folder | `dist/assets/globe/` appears empty in the build output. | Harmless. Investigate only if curious. |

---

## 6. Deployment (GitHub Pages now, Cloudflare Pages planned)

| ID | Item | Fix |
|---|---|---|
| X1 | `.github/workflows/barrelman-refresh.yml` sets `VITE_BASE: /Privacy-Meridian/` for GitHub Pages. | On Cloudflare with `privacymeridian.org`, the base must be `/`. Vite correctly rewrites the favicon, assets and font URLs for any base (verified). |
| X2 | The workflow copies `index.html` to `404.html` as the single-page-app fallback. Deep links (e.g. `/barrelman`) load correctly but return HTTP **404** status. | On Cloudflare Pages, leaving out `404.html` gives single-page-app behaviour with status 200. Revisit when moving. |
| X3 | The news feed is built in CI and never committed. The bot no longer commits `news.json`. | The Cloudflare setup must keep the 2-hour fetch-and-build step, or the 5-hour "stale feed" banner will appear. |
| X4 | Actions are pinned to version tags (`@v4`), not commit hashes. | Optional supply-chain hardening: pin to full commit hashes. |
| X5 | Scheduled (cron) workflows run only on the repository's default branch. | Make sure the deploy branch (`v2-map-first`) is the default branch, or the 2-hour refresh won't run. |

---

## 7. Verification tools for the builder

### 7a. Tooltip scan — run after any `professionalLayer` or glossary edit
This reproduces `src/utils/tooltipTextMatch.jsx` and prints every popup with surrounding text,
so you can spot wrong-meaning matches. Save it as `scripts/tooltip-scan.mjs` **only if Jared
approves adding a file**; otherwise run it from a temp folder with the path adjusted.

```js
import fs from 'fs'
const root = './src/data/'
const g = JSON.parse(fs.readFileSync(root + 'glossary.json', 'utf8'))
const esc = (t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
function cands(term) {
  const c = []
  const label = term.term
  for (const m of label.matchAll(/\(([^)]+)\)/g)) c.push(m[1])
  const w = label.replace(/\([^)]*\)/g, '').trim()
  w.split(' / ').forEach((p) => c.push(...p.split(/,| and /).map((s) => s.trim()).filter(Boolean)))
  c.push(w.trim())
  return [...new Set(c.filter(Boolean))].sort((a, b) => b.length - a.length)
}
for (const f of fs.readdirSync(root + 'jurisdictions')) {
  const d = JSON.parse(fs.readFileSync(root + 'jurisdictions/' + f, 'utf8'))
  for (const c of d.categories) for (const a of c.articles) {
    const text = a.professionalLayer
    const acc = []
    for (const id of a.tooltipTerms || []) {
      const term = g.terms.find((t) => t.id === id)
      if (!term) { console.log('MISSING TERM', f, a.id, id); continue }
      let found = null
      for (const cand of cands(term)) {
        const m = new RegExp('\\b' + esc(cand) + 's?\\b', 'i').exec(text)
        if (m) {
          const s = m.index, e = s + m[0].length
          if (!acc.some((x) => s < x.e && e > x.s)) { found = { id, s, e }; break }
        }
      }
      if (found) acc.push(found)
    }
    for (const m of acc) {
      const ctx = text.slice(Math.max(0, m.s - 75), Math.min(text.length, m.e + 45))
      console.log(`${f.replace('.json', '')} | ${a.id} | ${m.id} | "${text.slice(m.s, m.e)}" | ...${ctx}...`)
    }
  }
}
```
Run from the project root: `node <path-to>/tooltip-scan.mjs > tooltip-matches.txt`, then read
each line and ask whether the popup's definition fits those words in that law.

### 7b. Link check
After editing `sourceLinks` or glossary sources, open every changed link **in a real browser**
and confirm the page matches the label. Scripted checks get blocked by EUR-Lex, California
leginfo, law.go.kr, Kenya Law and NZ legislation (bot protection), so a script failure there
is not proof of a broken link. Known real-browser redirect to watch: the EDPB
`…/general-guidance/guidelines-recommendations-best-practices_en` URL lands on Public
consultations.

### 7c. Manual accessibility checks (no new dependency)
1. Tab through the home page from the top. Every focused control, **including map
   countries and the header logo link**, must show a clearly visible focus indicator.
2. Choose a country with the keyboard only (combobox, then Enter) and confirm the content is
   reachable.
3. Check placeholder and text contrast with browser dev tools (4.5:1 for normal text).
4. With a screen reader or the accessibility tree, confirm map countries announce the country
   name.
5. Run `npm run build` and `npm run lint`, and check the browser console for errors.
