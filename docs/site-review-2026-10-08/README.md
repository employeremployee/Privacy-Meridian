# Privacy Meridian — Full Site Review (2026-10-08)

Start here. This folder holds every finding from the October 2026 accuracy and code review,
written as instructions a builder agent can act on without the original conversation.

**Review date:** 2026-10-07 to 2026-10-09. **Code reviewed at commit:** `1527aa7` on branch
`map-and-content-updates` (working tree clean). If the code has moved on, re-check each item
before editing.

## What was reviewed

1. **Accuracy of all content:** 14 law pages (`src/data/jurisdictions/*.json`), 8 comparison
   tables plus the legacy grid (`src/data/comparison/*.json`), 34 glossary terms
   (`src/data/glossary.json`), site text (`src/i18n/locales/en/translation.json`), map data
   (`src/data/countryStatus.js`, `mapCountries.js`, `jurisdictionRegions.js`), all 75 source
   links, and the Privacy Barrelman news feed.
2. **Code review:** build, lint, accessibility (WCAG 2.1 AA), privacy/trackers, functional
   bugs, dependencies, deployment.

## How the findings were produced

- Nine fact-checking agents, one per law or law group. Each checked its law **everywhere it
  appears**: the law page, every comparison-table column, and the glossary.
- They used primary sources wherever possible: official statute text, gazettes and regulator
  sites. Where an official site blocked automated access, they used a mirror of the statute
  text: California (california.public.law), Korea (casenote.kr) and Kenya (policyvault).
- A second pass then re-verified the highest-stakes 2025–2026 claims directly against
  official sources. See "Independently verified developments" below.

## Rules for the builder agent (read before changing anything)

1. **Read `CLAUDE.md` first.** Follow its Planning Rule. Present a written plan listing files,
   changes and order, and wait for Jared's approval before editing.
2. **Never decide an item marked `DECISION NEEDED (Jared)`.** Present the options and wait.
3. **Content changes go in JSON data files only.** UI strings go in
   `src/i18n/locales/en/translation.json`. Never put content text in components.
4. **Comparison tables carry no article or section numbers.** This is a deliberate rule in
   `CLAUDE.md`. Correct the facts in those cells, but do not add pinpoint citations.
   Citations belong on the law pages (`articleRef` and `sourceLinks`).
5. **Write new site text in the house voice** (CLAUDE.md "Voice and Content Rules"): 10–15
   word sentences, active voice, no em dashes, no semicolons in prose. The "Should say" text
   in these files states the correct *facts*. Rewrite it in the house voice.
6. **Items marked `Verify first`** rest on law-firm or secondary sources, or on a single
   source. Confirm them against the official text before editing. If you can't, tell Jared.
7. **Glossary tooltips move when text changes.** Tooltips attach to the first matching phrase
   in `professionalLayer` (see `src/utils/tooltipTextMatch.jsx`). After editing any
   `professionalLayer`, re-run the tooltip scan in `06-code-accessibility-privacy.md` and
   check that each tooltip still lands on the right words.
8. **Data-only fields** (`comparisonFlags`, `effectiveDate`, `authority`, `sourceUrls`,
   `draft`, `draftNote`, glossary `jurisdiction`) are not shown on the site. Fix them last,
   or when you are already editing that block.
9. **Log what you change** in `CONTENT-REVIEW.md`, Jared's review log. Also apply the log
   corrections in `07-review-log-corrections.md`.
10. **Verify before calling anything done** (CLAUDE.md Verification Rule): run the build,
    check for console errors, and re-run the tooltip scan. For UI changes, tell Jared
    exactly what to look for in the browser.

## Files in this folder

| File | What it covers |
|---|---|
| `01-site-wide-and-decisions.md` | Decisions only Jared can make, plus problems visitors see on every page: map key, map coloring, missing legal notice, footer, glossary definitions and mismatched tooltips, links, comparison-table framing, legacy routes. |
| `02-content-europe.md` | EU GDPR, UK GDPR, Switzerland (FADP) |
| `03-content-americas.md` | California (CCPA/CPRA), Brazil (LGPD), Argentina, Uruguay |
| `04-content-asia-pacific.md` | China (PIPL), South Korea (PIPA), Japan (APPI), New Zealand, India (DPDP) |
| `05-content-africa.md` | South Africa (POPIA), Kenya |
| `06-code-accessibility-privacy.md` | Accessibility failures, functional bugs, privacy hardening, news pipeline, build, dependencies, deployment, and verification tools |
| `07-review-log-corrections.md` | Corrections to `CONTENT-REVIEW.md`, and claims from the 2026-10-03 review that turned out wrong (do not act on those) |

## Suggested order of work

1. **Decisions.** Get Jared's answers to the `DECISION NEEDED` items in file 01.
2. **Site-wide content fixes** (file 01): map key, legal notice, footer, glossary definitions,
   tooltip mismatches, links.
3. **ERROR items** in files 02–05. These state something legally wrong.
4. **OUTDATED items** in files 02–05. The law changed and the site didn't.
5. **MISLEADING, then MINOR items** in files 02–05.
6. **Code and accessibility** (file 06). This is code work, so plan it as its own phase.
7. **Review-log corrections** (file 07).

## Severity key

| Label | Meaning |
|---|---|
| **ERROR** | States something legally wrong. |
| **OUTDATED** | Was correct, but the law or facts have changed. |
| **STILL** | Flagged in the 2026-10-03 review and still unfixed. The severity is given next to it. |
| **MISLEADING** | Technically defensible, but likely to mislead a reader. |
| **MINOR** | Small precision, wording or completeness issue. |
| **DATA-ONLY** | In a field the site does not display. Low priority. |

## Which fields visitors see

- **Law pages:** `jurisdiction.fullName`, `jurisdiction.citation`, `jurisdiction.badge`.
- **Each article:** `articleRef`, `surfaceLabel`, `plainSummary`, `personalImpact`,
  `professionalLayer`, `crossReferences`, `responseTimeline`, `sourceLinks`.
- **With "Help for Organizations" ticked:** also `assessTrigger` and `gapRemediation`
  (`smb`, `midMarket`, `enterprise`).
- **Comparison tables:** each cell's `value` or `state` (yes, partial, no) plus its `note`,
  and the row `label`.
- **Glossary:** the `term`, `definition` and `source` link, shown as a popup on matched words.
  The `tooltipTerms` list on each article decides which popups appear.

## Independently verified developments (2025–2026)

Each of these was confirmed in the second pass against official or multiple independent
sources. Content may rely on them.

| Development | Date | Source |
|---|---|---|
| UK regulator becomes the **Information Commission** (ICO office abolished; DUAA ss.118–119) | 30 Sep 2026 | SI 2026/1015, legislation.gov.uk/uksi/2026/1015/made |
| EU renews UK adequacy (GDPR + LED), valid to **27 Dec 2031**, review after 4 years | 19 Dec 2025 | Implementing Decision (EU) 2025/2574; Hunton, eucrim, RPC |
| EU–Brazil **mutual adequacy**: EU Decision (EU) 2026/179; ANPD Resolution CD/ANPD 32/2026 | 26 Jan 2026 (in force 27–28 Jan) | ANPD official English text; Kennedys, White & Case, eucrim |
| Korea PIPC recognises the **EU as equivalent** (mutual with EU's 2021 Korea decision) | 16 Sep 2025 | European Commission joint press statement |
| Korea PIPA amendment, Act No. 21445: **10% of total revenue** tier and more | Passed 12 Feb 2026, promulgated 10 Mar 2026, in force 11 Sep 2026 | Statute text (casenote mirror), Hunton, seoulz |
| US Supreme Court *Trump v. Slaughter* (No. 25-332), 6–3, overrules *Humphrey's Executor* | 29 Jun 2026 | Venable, Faegre Drinker, others |
| EDPB letter to the Commission on the impact of *Trump v. Slaughter* on the EU–US Data Privacy Framework | 31 Jul 2026 | EDPB PDF (Ref. Ares(2026)7540711) |
| Brazil **Law 15.352/2026**: ANPD becomes the *Agência* Nacional de Proteção de Dados, a regulatory agency | 25 Feb 2026 | Câmara/planalto; congressoemfoco, agenciagov |
| China **Order No. 25**, simplified measures for small handlers (fewer than 100,000 people) | Effective 1 Sep 2026 | cac.gov.cn/2026-07/24/c_1786638889704872.htm |
| China Network Data Security Management Regulations: **no working-day deadline** for individual requests (Art 23 says "promptly") | Effective 1 Jan 2025 | cac.gov.cn/2024-09/30/c_1729384452307680.htm |
| California **§1798.145(p)**: know, delete and correct duties do not apply to household data | Current law | california.public.law (statute text) |
| California **§1798.105(d)** has **8** deletion exceptions | Current law | california.public.law (statute text) |
