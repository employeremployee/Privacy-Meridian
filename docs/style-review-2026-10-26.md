# Privacy Meridian: Style and Clarity Review (2026-10-26)

**For:** the site's Claude Code agent
**From:** a review session with Jared
**Scope:** All English text on privacymeridian.org: 17 law pages (110 article blocks), 8 comparison tables, the glossary, About, Barrelman and UI strings. That is about 47,000 words. The live site matched the repo at commit `6386a1b` when reviewed.
**Standard:** *The Chicago Manual of Style*, 18th edition (CMOS), plus the house voice rules in `CLAUDE.md`. Where they conflict, house rules win (for example, no semicolons in prose).
**Guiding principle:** Brevity is the soul of clarity. When in doubt, cut.

---

## 0. How to use this file

1. Read `CLAUDE.md` first. Its rules still apply: plan before editing, wait for Jared's approval, line-based edits, one law per commit, and `npm run build` and `npm run lint` before each commit.
2. **Settle Section 1 (decisions) with Jared before editing anything.** Several fixes depend on those answers.
3. This is a **style** pass, not a legal-accuracy pass. Do not change what a sentence claims. If a rewrite might shift meaning (merging clauses, moving a condition, cutting "generally"), flag it for Jared rather than guess. Keep every date, number, threshold and citation exactly as it is unless this file names a fix.
4. Work in this order: site-wide mechanical fixes (Section 3), then cutting kicker sentences (Section 4), then per-law restructuring (Section 6). The restructuring needs a schema change (Section 5) that Jared must approve first.
5. Content lives only in JSON. Never put text in components.

### How the review was done

- **Spelling:** `cspell` (en-US) across all extracted strings. No true typos found. The real problem is mixed **British and American spelling** (79 strings). See Appendix B.
- **Readability:** A Node script counted words per field and per sentence. It also checked for semicolons, ampersands, `%`, date formats, numerals, serial commas, passive voice, wordy phrases, hyphen ranges and parentheses.
- **Close reading:** A full read of every Summary, "What this means for you" and Professional layer block on all 17 law pages, plus the glossary, tables and UI strings.

### Headline numbers

| Measure | Result |
|---|---|
| Professional-layer paragraphs over 90 words | **97 of 110** (average 131, longest 246: `ccpa-scope`) |
| Professional-layer sentences over 25 words | 138 |
| "What this means for you" boxes ending in a stock kicker line | **91 of 110** (Appendix A) |
| The same stock sentence reused across laws | "Your data rarely stays…" or a close variant 15×, "You learn of the risk in time…" 15×, "Your protections travel with your data" 12×, "Silence from a company…" 11×, "A hidden record becomes something you can review" 8× |
| Semicolons (house rule says none in prose) | 48 strings (Appendix C) |
| British spellings in an otherwise American site | 79 strings (Appendix B) |
| Serial comma | Used about 198 times and missing about 190 times. Chicago requires it. |
| Dates | 49 day-month-year ("13 May 2027") and 12 month-day-year (all on the CCPA page) |
| Unbalanced parentheses | None. Badly *placed* parentheses: yes, see Section 3.6 |

---

## 1. Decisions for Jared (settle first)

| # | Question | Recommendation | Why |
|---|---|---|---|
| D1 | **Number style.** The site now mixes "7 days", "five business days", "fourteen principles" and "Children under eighteen". | CMOS 9.3 alternative rule: spell out one to nine, use numerals for 10 and up. Always use numerals with percent, money, hours in deadlines (72 hours) and in tables. | The CMOS general rule spells out to one hundred ("seventy-two hours"). That reads badly on a reference site. Chicago allows the alternative rule as long as it is used consistently. |
| D2 | **Date style.** | Month-day-year: "May 13, 2027". In running text, put a comma after the year ("On May 13, 2027, the rules…"). | CMOS 6.41 and 9.32. It matches the American spelling. The CCPA page already uses it. |
| D3 | **Spelling.** | American spelling everywhere (organization, recognized, authorization, behavior, defense, offense, center). Keep British spelling only inside official names and direct quotes. | CMOS follows Merriam-Webster. The site is already about 95% American. Mixed spelling on one page looks like an error (for example, `pipa-kr-transfers` has "PIPC-recognized" and "recognised" in one paragraph). |
| D4 | **Lists and callouts on law pages.** The professional layer is one flat string. Splitting it into a lead plus lists and callouts needs a schema and component change. | Approve the schema in Section 5. | Readers said paragraphs run too long. Most long paragraphs are really lists written as prose (grounds, bases, thresholds, deadlines). The house rule allows lists when content is "genuinely enumerable". These are. |
| D5 | **Article with law abbreviations.** "GDPR" appears 177 times, with "the" only 18 times. | Use "the GDPR", "the CCPA", "the UK GDPR", "the PIPL" and so on as nouns. Drop "the" when the abbreviation modifies a noun ("GDPR fines"). | CMOS 10.10: an abbreviation read as letters takes "the" if its spelled-out form would. One rule applied everywhere beats the current mix. |
| D6 | **Heading capitalization.** Article titles use headline style. UI labels mix "Response Timeline" and "How to Close the Gap" with "What this means for you" and "Map key". | Headline style for article titles. Sentence style for all UI labels and small headings. | CMOS 8.159–8.160 allows either. The problem is the mix. |
| D7 | **Kicker sentences.** | Approve cutting the 91 kicker lines in Appendix A, plus the professional-layer kickers in Section 4.3. | Jared's own direction: cut catchy last lines unless they clarify or punctuate. |

---

## 2. House style sheet (the rules the agent applies)

Apply these to every string you touch. Section numbers refer to CMOS 18.

**Brevity and voice**
- Sentences of 10 to 15 words. In the professional layer, allow up to 25. Split anything longer.
- One idea per sentence. One topic per paragraph. A paragraph should not exceed about 60 words. If it does, it probably holds a list.
- Use active voice. "We check every page," not "Every page is checked."
- Cut throat-clearing adverbs: *Critically, Notably, Strikingly, Importantly, Virtually, Fundamentally, Essentially*.
- Cut wordy phrases: "in the event of" → "if". "at the latest within one month" → "within one month". "whether or not it is based there" → "wherever it is based". "upon" → "on". "prior to" → "before". "in order to" → "to".
- Do not repeat in one block what the block's other layers already say. The Summary, "What this means for you" and the Professional layer should each add something new.

**Punctuation**
- **Serial comma always** (6.19): "access, correction, and erasure".
- **No semicolons in prose** (house rule). Use a period or a list. In table notes, use a period: "No sale concept. Objection to direct marketing is absolute."
- **No ampersands in prose or article references** (10.23): "Articles 13 and 14". "Legal & Regulatory" becomes "Legal and Regulatory".
- **En dash for number ranges** (6.83): "Articles 37–39", "Sections 3–17", "IPPs 1–4". **Exception:** "Article 28-8" (Korea, Japan) is an article *number*, not a range. Keep its hyphen.
- **Use "to" instead of a dash in running prose**: "Articles 37 to 39" (the site already does this in "What this means for you". Keep it.)
- **No em dashes** (house rule). The scan found none. Keep it that way.
- **Apostrophes:** use straight quotes everywhere to match the rest of the data. One curly apostrophe exists: `fadp.json` breach professional layer, "controller’s".
- **Slashes:** use "or" in prose (6.106). "special/sensitive category" becomes "special or sensitive category". Leave "CCPA/CPRA" as a fixed name.
- **Contractions:** none in data. Four table notes use "can't" or "isn't". Expand them.

**Parentheses** (6.97–6.102, and see Section 3.6)
- Keep a parenthetical short and next to the word it qualifies. Never split a subject from its verb with one.
- Never put a parenthesis inside a list item of a semicolon series.
- A citation goes inside the sentence ("In SCHUFA, Case C-634/21 (2023), the Court…"). Do not tack it on after the main clause.
- If the parenthetical is a full thought ("not yet in force"), make it a sentence or a callout.
- Spell out an abbreviation once, then use it: "Unidades Indexadas (UI)".

**Numbers, dates, money** (follow D1 and D2)
- "percent" in prose. "%" in tables (9.19).
- "three times", not "3x".
- "250 crore rupees" is opaque to most readers. Add the plain figure once: "250 crore rupees (2.5 billion rupees)".
- Currency with symbols in tables ("A$50M"). Spelled out in prose ("A$50 million").

**Plain language**
- Define every acronym on first use in the Summary and "What this means for you" layers, even if the professional layer defines it. Undefined there now: FDPIC, URCDP, AAIP, ANPD, PPC, CERT-In, ODPC, ACC, IRD.
- Gloss local ID numbers in two or three words the first time: "your CPF, Brazil's taxpayer number", "your NRIC, Singapore's identity card number". These details give the pages life. Keep them, but make them readable.
- Translationese: "Refusals must be founded" → "must give reasons". "give intimation to the Board" → "notify the Board".
- A company is "it", not "they" (CMOS 5.48 accepts singular *they* for people, not organizations). Fix: `gdpr-art15`, `gdpr-art18`, `gdpr-art19` summaries, `ukgdpr-art33-34` summary, `pa-au-correction` "What this means for you".

**Capitalization**
- Headline style (8.159): lowercase every preposition regardless of length. Fix these titles:
  - `dpdp-rights`, `kdpa-access`: "Rights **Over** Your Data" → "over"
  - `gdpr-art30`: "Everything You Do **With** Personal Data" → "with"
  - `pipl-art44`: "Know **About** and Control" → "about"
  - `lgpd-art18-access`: "Held **About** You" → "about"
  - `gdpr-art44-49`: "**Across** Borders" → "across"
  - `lgpd-art33-36`, `pa-au-transfers`, `pdpa-sg-transfers`, `pipeda-transfers`, `pipl-art38-43`: "**Outside**" → "outside"
  - `pipl-art40`: "**Inside** China" → "inside"
  - Glossary: "Right to be Forgotten" → "Right to Be Forgotten" (verbs are capitalized)
  - "Out of" in "Moving Personal Data Out of Japan" is correct ("out" is part of the verb). Leave it.

---

## 3. Site-wide mechanical fixes

These need no rewriting judgment. Make them per file, one law per commit, after D1 to D6 are settled.

### 3.1 Spelling (D3)
79 strings. See Appendix B for the full list. The worst clusters are `pa-au.json`, `pdpa-sg.json`, `lpdp-uy.json`, `lgpd.json` and the comparison table notes. Also:
- `lpdp-uy.json` breach "What this means for you": "cedula" → "cédula".
- `kdpa.json` transfers: "data centre" → "data center".

### 3.2 Serial commas
Missing in about 190 places, including article references ("APPs 3, 6 and 7", "Principles 4.5, 4.6 and 4.9.5"). Heaviest in `pipeda.json` (24), `gdpr.json` (21), `ccpa.json` and `pdpa-sg.json` (14 each). To find candidates, run this regex on each string and then check each hit by hand:
`/\b[\w-]+, [\w-]+(?: [\w-]+){0,2} (and|or) [\w-]+/`
Confirmed examples: "Restriction, objection, correction and deletion" (kdpa), "driver's license, state ID and passport numbers" (ccpa), "limit, delay or skip" (fadp), "access, correction or erasure" (dpdp), "Norway, Iceland and Liechtenstein" (gdpr).

### 3.3 Semicolons
48 strings. See Appendix C. Most are long legal series in the professional layer: GDPR Article 17 grounds, Article 18 circumstances, LGPD's ten bases, POPIA Section 72's five conditions, the CCPA thresholds. **Those should become lists (Section 5), not sentences.** The rest are table notes. Split them with a period.

### 3.4 Numbers and dates (D1, D2)
- Deadlines use both styles, sometimes in one law. Uruguay's summary says "five business days" and its timeline says "5 business days". Argentina does the same. Kenya has "7 days" and "14 days". Singapore has "3 calendar days". Apply D1 everywhere, including `responseTimeline`.
- 49 day-month-year dates to convert (D2). Add the comma after the year in running text.
- `%` in prose, 4 strings: `ccpa-scope`, `pa-au-scope`, `pdpa-sg-scope` and its enterprise gap note. Change to "percent". Tables keep `%`.
- `enforcementPenalties.json` Australia: "3x benefit" → "three times the benefit".

### 3.5 Article references (`articleRef`)
- `&` → "and": `gdpr-art13-14`, `gdpr-art33-34`, `ukgdpr-art33-34`, `lgpd-art18-access` ("Article 18, I & II").
- Hyphen ranges → en dash: "Articles 17–18", "Articles 37–39", "Articles 44–49", "Sections 4–7", "Sections 11–14", "Sections 13–18", "Sections 48–50", "Articles 30–31", "Articles 33–36", "Articles 34–35", "Articles 36–37", "Articles 38–43", "Articles 5–6", "Articles 16–18", "IPPs 1–4", "Regulations 10–12", "Sections 10.1–10.3". **Not** "Article 28-8".
- Mixed forms on one page: New Zealand uses "IPP6" and "IPP12" in references but "IPP 3A" in prose. Pick one ("IPP 6") and apply it.

### 3.6 Parentheses: every misplaced one
These are the cases where a parenthesis interrupts the sentence or sits where a reader trips on it.

| Where | Problem | Fix |
|---|---|---|
| `ccpa-scope` professional layer: "above $26,625,000 (the 2025 figure, adjusted for inflation every two years); annual buying…" | A parenthesis inside a semicolon series, so the series breaks mid-item. | Make it a list (Section 6). Move the note into its own sentence: "The revenue figure is for 2025 and rises with inflation every two years." |
| `gdpr-art15`: "(C-154/21)" and "(C-203/22, 2025)". `gdpr-art22`: "SCHUFA (C-634/21, 2023)" | Three citation forms in two articles. One names the case and two do not. The citations are tacked on after the claim. | Use one form everywhere: "In 2023, the Court of Justice held, in Case C-154/21, that…". If a case has a common name, use it once: "In SCHUFA (Case C-634/21, 2023), the Court…" |
| `gdpr-art44-49`: "adequacy decisions (Article 45), Standard Contractual Clauses (Article 46), Binding Corporate Rules (Article 47), and derogations… (Article 49)" | Four parentheticals in one sentence. | A four-item list with the article in each item. |
| `gdpr-art19`: "rectification (Article 16), erasure (Article 17), and restriction of processing (Article 18)" | Acceptable, but heavy. | A list, or drop the numbers. The cross-reference buttons already link these. |
| `lgpd-art18-access`: "The right to confirmation of processing and access to data (Article 18, I and II) mirrors GDPR Article 15." | The parenthesis splits subject from verb. | "Article 18, items I and II, give the right to confirm processing and access data. This mirrors Article 15 of the GDPR." |
| `lgpd-art18-deletion`: "Blocking (suspending processing) parallels…" | A definition in parentheses. | "Blocking, which suspends processing, parallels…" |
| `appi-purpose`, `appi-cease-use`: "The 2026 amendment (not yet in force) adds…" | A whole status claim hidden in parentheses, twice. | Move to the "Coming changes" callout (Section 5): "Not yet in force. Starts by July 2028 at the latest." |
| `pdpa-ar-breach`: "…for notifying the AAIP and affected people (Resolution 332/2020)." | Citation tacked on at the end. | "Under Resolution 332/2020, AAIP inspectors also check…" |
| `gdpr.json` comparison flag on LGPD: "(3 business days, then a 20-business-day supplement)" | The main content of the note sits in parentheses. | "LGPD uses two stages: notice within three business days, then more detail within 20." |
| `pipeda-breach` articleRef: "Division 1.1 (Sections 10.1-10.3)" | Hyphen range. | "Division 1.1, Sections 10.1–10.3" |
| `enforcementPenalties.json` Uruguay note: "Fines in indexed units (UI)" | Abbreviation never explained. | "Fines are set in Unidades Indexadas, an inflation-linked unit, and capped by law." |
| `fadp.json` `fullName`: "Federal Act on Data Protection (revised)" | The parenthesis shows up in map labels and the tab title: "Federal Act on Data Protection (revised), Switzerland". | "Revised Federal Act on Data Protection". Check the map announcement afterward. `fullName` drives it. |
| Glossary "Data Subject" jurisdiction line: "Equivalent: consumer (CCPA/CPRA), individual (PIPL)." | The definition says the same thing again. | Remove it from one of the two places. |
| Glossary "Breach Notification" line: "30 calendar days to residents (SB 446, 2026)" | A citation inside a list of deadlines. | "California: 30 calendar days to residents, under SB 446 (2026)." |

Parentheses that are fine and should stay: official names with parentheses ("Data (Use and Access) Act 2025"), "CalPrivacy (California Privacy Protection Agency)", acronym introductions in glossary titles ("Records of Processing Activities (RoPA)") and UI counts ("Countries ({{count}})").

---

## 4. Section by section: the law-page blocks

Every article block has the same parts. Here is guidance for each part, in page order.

### 4.1 Title (`surfaceLabel`)
- Fix the capitalization in Section 2.
- **Make titles consistent across laws.** One concept has several names today:
  - Breach: "…Is Compromised" (most) or "…Is Breached" (Australia, Singapore, PIPEDA).
  - Transfers: "Moving Personal Data Out of X" (most), "Sending Your Information Outside X" (Australia, PIPEDA), "Moving Personal Data Outside Brazil" or "…Across Borders" (GDPR).
  - Who is covered: "Organization" (most), "Business" (CCPA, Australia, Singapore, PIPEDA), "a Company" (LGPD).
  - Country suffix: most titles add "in Japan" and similar. Australia, Singapore and PIPEDA access and correction titles do not, while their other titles do.
- **Proposed standard set** (swap in the country name):
  - "Does [Country]'s Privacy Law Apply to Your Organization?"
  - "When [Country]'s Law Allows Your Data to Be Used"
  - "Your Right to See Your Data in [Country]"
  - "Your Right to Correct or Delete Your Data in [Country]"
  - "What Happens When Your Data Is Breached in [Country]" ("breached" is shorter and more common than "compromised")
  - "Sending Your Data out of [Country]"
- Keep "Data" in titles even where the law says "information". Readers search for "data". The professional layer can use each law's own term.

### 4.2 Summary (`plainSummary`)
Average 35 words, which is mostly good. Fixes:
- Cut summary kickers. They add no information:
  - `gdpr-art13-14`: "This is the foundation of transparency." Cut.
  - `gdpr-art35`: "This process helps identify and reduce risks before they cause harm." Cut. The "What this means for you" box says the same thing.
  - `gdpr-art37-39`: "Even when not legally required, many organizations appoint one voluntarily as a sign of commitment to privacy." Cut.
  - `gdpr-art20`: "This right exists so that companies cannot lock you in by holding your data hostage." Shorten to "It stops companies from locking you in."
  - `lgpd-art18-access`: "This right applies to any organization operating under Brazil's privacy law." Cut. The scope article covers it.
  - `ccpa-right-to-correct`: "This right did not exist under the original CCPA." Move to the professional layer. History is not a summary point.
- **Lead with the rule, then the deadline.** Most summaries already do. `pipl-scope` (42 words, one sentence) and `popia-s23` (37 words, one sentence) do not. Split them.
- **Misleading superlatives.** `pdpa-ar-access` calls Argentina's 10 days "one of the shortest access deadlines anywhere". The same site lists Uruguay at five business days and Kenya at seven days. Change to "shorter than most." Argentina and Uruguay both use "among the world's shortest" for five-business-day deadlines. Keep it once, on Uruguay, or cut both.

### 4.3 What this means for you (`personalImpact`)
This block works when it opens with a concrete, local scene: Optus and Medibank, Tim Hortons, Marina Bay Sands, Serasa, the 23andMe breach. **Keep those.** It fails at the end. 91 of 110 boxes close with a stock line that restates the sentence before it. Many are reused word for word across laws, so a reader comparing laws sees the same filler again and again.

**Rule:** End the box on the sentence that says what the law lets you do. Cut the line after it unless it adds a fact, a right or a duty. Appendix A gives a verdict for all 110 boxes: 91 cut, 2 trim, 17 keep.

Also:
- **Template openers repeat too.** "Your data may be sent to servers in other countries. Protection there is not always as strong." appears in nearly every transfers box. "Silence from a company deepens the harm" appears in 11 breach boxes. Where no local scene exists, use two sentences: what the law does and what you can do. Do not invent a scene.
- **Sentence fragments.** `gdpr-art16` "A mistaken default, a mixed-up record, a debt that was never yours." and `gdpr-art17` "An old post, a leaked photo, an address a stalker could use." CMOS allows fragments for effect, but these slow the reader. Fold each into the next sentence.
- **Redundancy with the summary.** `gdpr-art13-14` ends by repeating the summary's last fact. `fadp-breach` repeats the summary's rule about telling people.

**Before and after (`gdpr-art15`, 45 → 26 words):**
> *Before:* That hidden profile stays invisible until you look. Article 15 lets you request a full copy of what a company holds on you. People use it to uncover guesses about their health, income, or politics. It turns an unseen profile into something you can review and challenge.
>
> *After:* Article 15 lets you request a full copy of what a company holds on you. People use it to uncover guesses about their health, income, or politics.

**Professional-layer kickers.** These closing lines tell the reader what to think instead of telling them a fact. Cut or rewrite:

| Article | Closing line | Action |
|---|---|---|
| `gdpr-art13-14` | "Failure to provide this information at collection renders downstream processing legally vulnerable." | Cut |
| `gdpr-art16` | "…among the most frequently overlooked aspects of Article 16 compliance." | Cut, or move to the gap guidance |
| `gdpr-art19` | "This makes Article 19 a practical test of data mapping maturity." | Cut |
| `gdpr-art30` | "The RoPA is the operational backbone… Virtually every other obligation depends on its accuracy." | Cut both |
| `gdpr-art44-49` | "International transfers represent one of the highest-risk areas…" | Cut |
| `ccpa-right-to-opt-out` | "It is one of the most substantive structural differences…" | Move to a "Key difference" callout (Section 5) |
| `ccpa-right-to-limit-spi` | "This right has structural similarities to GDPR's special category…" | Move to a "Key difference" callout |
| `pipl-scope` | "It is structurally inspired by but substantively distinct from GDPR…" | Make it a "Key difference" callout listing the three differences |
| `pipl-art38-43` | "This is the most substantive structural difference from GDPR…" | Cut. The callout covers it |
| `pipl-art40` | "…one of the most architecturally significant provisions…" | Cut |
| `appi-purpose` | "The purpose-specification architecture makes… the backbone of Japanese compliance." | Cut |
| `appi-transfers` | "…an operational task, not a formality." | Cut |
| `dpdp-scope` | "Notably, the Act applies one uniform standard…" | Keep the fact. Drop "Notably," |
| `dpdp-breach` | "…breach handling is the DPDP regime's sharpest edge." | Keep the penalty figures. Cut the metaphor |
| `fadp-lawfulness` | "This inversion of the GDPR model is the FADP's most distinctive feature." | Make it a "Key difference" callout |
| `fadp-transfers` | "The overall architecture parallels GDPR Chapter V with Swiss-specific paperwork." | Cut |
| `pipa-kr-scope` | "PIPA's consent granularity and enforcement intensity make it one of the most operationally demanding regimes in Asia." | Cut |
| `pipa-kr-breach` | "Korea previously ran some of the world's tightest breach clocks…" | Cut |
| `pipa-kr-transfers` | "…consent remains the workhorse mechanism in practice." | "In practice, most transfers rely on consent." |
| `popia-s72` | "The substantially-similar-protection test makes vendor contract review the operational core…" | Cut |
| `pdpa-ar-breach` | "…so this is an area to monitor closely." | Cut the clause |
| `lpdp-uy-transfers` | "…and anchors its adequacy-first architecture." | Cut the clause |
| `nzpa-ipp1-4` | "Consent is not the central gatekeeper; necessity for a lawful purpose is, with use and disclosure limits carried by later principles." | "Necessity, not consent, is the main test. Later principles limit use and disclosure." |

Also cut opening adverbs wherever they appear: "Critically," (`ccpa-right-to-delete`), "Strikingly," (`dpdp-breach`), "Notably," (`dpdp-scope`).

### 4.4 Professional layer (`professionalLayer`)
This is the "paragraphs are too long" feedback. 97 of 110 run over 90 words. Most mix four kinds of content in one block: the core rule, a list (grounds, bases, contents), a "how this differs from the GDPR" comparison and "what changed or is coming" news. Section 5 proposes separating them. Until that ships, the minimum fix is:
- Break each block into paragraphs of no more than 60 words: rule, then detail, then exceptions.
- Put the comparison sentence ("Unlike GDPR…") at the end.
- Cut the kicker (Section 4.3).

### 4.5 Response timeline (`responseTimeline`)
Good format: short fragments, regulator first, then individuals. Fixes:
- Apply D1 numbers consistently ("5 business days" against a summary that says "five").
- `gdpr-art13-14` timeline (37 words) repeats the professional layer. Cut it to: "Direct collection: when obtained. Indirect: within one month, or sooner at first contact or disclosure."
- Use one pattern everywhere: "Regulator: … Individuals: …". UK GDPR, PIPEDA and Australia mostly follow it already.

### 4.6 Consider question (`assessTrigger`)
Average 24 words, and 41 run over 25 words. Most join two questions with "and is it…". Ask one question. Move the second into the gap guidance.
> *Before (`gdpr-art13-14`, 39 words):* Does your organization have a current, accurate privacy notice that covers all Article 13 and 14 required disclosures, and is it reviewed whenever processing purposes or legal bases change?
>
> *After (19 words):* Does your privacy notice cover every disclosure Articles 13 and 14 require, and do you update it when purposes change?

### 4.7 How to close the gap (`gapRemediation`)
Mostly short already (about 20 words). Fixes:
- Passive hedges: "Semi-annual review against your actual data flows is recommended." → "Review it twice a year against your actual data flows."
- "RoPA" appears in `gdpr-art13-14` enterprise text before the RoPA article defines it. Spell it out the first time.
- "decisioning" (`gdpr-art22` small business) → "decisions".

---

## 5. Proposed structure: lists and callouts (needs D4)

**The idea:** keep `professionalLayer` as the lead paragraph, about 40 to 70 words. Add optional fields that the component renders as a list or a callout. Text stays in JSON. Tooltip auto-matching (`tooltipTextMatch.jsx`) must run on the new fields too.

```jsonc
"professionalLayer": "Lead paragraph: the core rule in plain terms.",
"professionalList": {               // optional; renders as <ul>
  "intro": "Erasure is required when:",
  "items": ["The data is no longer needed for its purpose.", "..."]
},
"keyDifference": "Optional one or two sentences, shown as a callout headed 'How this differs from the GDPR'.",
"comingChanges": [                  // optional; renders as a small dated list headed 'What is changing'
  { "date": "2027-01-01", "text": "Automated decision-making rules apply." }
]
```

Why these three:
- **Lists:** most over-long paragraphs are enumerations (grounds, bases, required contents, thresholds, deadlines).
- **Key difference:** about 40 professional blocks end with a comparison to the GDPR. Readers comparing laws want exactly this, set apart.
- **What is changing:** amendment news (APPI 2026, India's phase-in, CCPA regulations, UK DUAA, Korea 2026, Brazil's ANPD, DPF litigation) now sits in the middle of the law text. That makes the paragraph long, and the content goes stale. Dated items are easier to scan and to keep current.

Render the callouts with the signature Meridian Blue left rule. Use existing palette tokens only, with no new colors. The new headings ("How this differs from the GDPR", "What is changing") go in `translation.json`.

This is a multi-file change: schema, `ContentBlock.jsx` or `ProfessionalLayer.jsx`, `translation.json` and 17 JSON files. It needs a written plan and Jared's approval first (CLAUDE.md Planning Rule). Pilot it on one law (GDPR), show Jared, then roll it out law by law.

**Worked example: `gdpr-art17` (154 words → about 30-word lead plus two lists):**
> **Lead:** Article 17 requires a controller to erase personal data without undue delay when one of six grounds applies. The right is not absolute.
>
> **Erasure is required when:**
> - the data is no longer needed for its original purpose
> - consent is withdrawn and no other legal basis applies
> - the person objects under Article 21(1) and no overriding grounds exist, or objects to direct marketing under Article 21(2)
> - the processing was unlawful
> - a legal obligation requires erasure
> - the data was collected for online services offered to a child
>
> **A controller may refuse when keeping the data is needed for:**
> - freedom of expression and information
> - a legal obligation or a public task
> - public health
> - archiving, research, or statistics, where erasure would seriously impair that work
> - establishing, exercising, or defending legal claims
>
> *(Gap guidance gets the operational notes: document refusal grounds, and plan for backups.)*

---

## 6. Section by section: each law

The longest blocks are listed first. "→ list" means it becomes a `professionalList` under Section 5. "→ changes" means amendment text moves to `comingChanges`. Apply Sections 2 to 4 to every law as well.

### European Union: GDPR (`gdpr.json`)
- `gdpr-art44-49` (192 words): mechanisms → list. The Data Privacy Framework timeline (2023 adoption, 2025 General Court ruling, 2026 Trump v. Slaughter, 2026 EDPB request) → changes. That leaves a lead of about 60 words.
- `gdpr-art15` (191 words): supplementary information → list. Use one form for case citations (Section 3.6). "Trade-secret conflicts go to the supervisory authority or a court to balance" → "A supervisory authority or court balances any conflict with trade secrets."
- `gdpr-art33-34` (156 words): the notice contents and the three Article 34 exemptions → lists.
- `gdpr-art17` (154 words): see the worked example in Section 5. The refusal grounds now run as four short sentences ("Public health is another ground. So is archiving…"). A list fixes that.
- `gdpr-art35` (151 words): the three "always required" cases and the four required contents → lists. "referred to throughout this site as a PIA" is useful. Keep it.
- `gdpr-art37-39` (141 words): appointment triggers → list. DPO protections: one 40-word sentence with five "must"s → list.
- `gdpr-art18` (123 words): four circumstances → list.
- `gdpr-art21`: two objection rights → two short paragraphs, or a two-row table.
- Summaries `gdpr-art15`, `gdpr-art18`, `gdpr-art19`: "they" → "it".

### California: CCPA/CPRA (`ccpa.json`)
- `ccpa-scope` (246 words, **the longest block on the site**): the three thresholds → list. Who else is covered (affiliates, joint ventures, non-profits) → a short paragraph. CPPA regulation dates (2026, 2027, 2028, 2030) → changes. Fix the parenthesis in Section 3.6.
- `ccpa-right-to-limit-spi` (176 words): the sensitive personal information categories → list. That alone cuts about 80 words of prose. The GDPR comparison → key difference.
- `ccpa-right-to-delete`: cut "Critically,". "upon a verifiable consumer request subject to eight exceptions" → "when a consumer makes a verified request. Eight exceptions apply, including…".
- `ccpa-right-to-opt-out`: the 2026 and 2027 GPC and AB 566 items → changes. The last two sentences → key difference.
- This page already uses month-day-year dates. If Jared picks day-month-year under D2, this page is the one to convert.

### China: PIPL (`pipl.json`)
- `pipl-art38-43` (229 words): the four routes → list. 2024 thresholds and exemptions → a second list. The 2024 relaxation and 2026 certification → changes. The GDPR comparison → key difference. Cut the "most substantive" kicker.
- `pipl-art57` (124 words): the 1-, 2- and 4-hour reporting tiers → list ("Critical infrastructure operators: within 1 hour, to their protection department and the police").
- `pipl-art13` (131 words): seven bases → list. The current prose groups them awkwardly ("The last two are…").
- `pipl-art47`: five deletion grounds now run in one sentence joined by "that… that… that…" → list.
- `pipl-scope`: make the closing line a key-difference callout with its three named differences.

### Brazil: LGPD (`lgpd.json`)
- `lgpd-scope` (192 words): the ByteDance fine, the ANPD's 2026 status and the EU adequacy news → changes. Keep the scope rule and the GDPR comparison.
- `lgpd-art7`: ten bases in a semicolon series → list.
- `lgpd-art18-access`, `lgpd-art18-deletion`: fix the parentheses (Section 3.6). In `lgpd-art18-deletion`, "three distinct remedies: anonymization, blocking, and deletion, where data is unnecessary…" is ambiguous. Does the condition apply to all three or only to deletion? Rewrite: "Where data is unnecessary, excessive, or unlawfully processed, Article 18, item IV, lets the person ask for anonymization, blocking, or deletion."
- `lgpd-art48`: "LGPD does not specify a fixed notification timeframe in the legislation" → "The statute sets no deadline." Then give the resolution's deadlines as a two-line list (standard and small agents).
- British spellings: "recognised" and "authorisation" (Appendix B).

### United Kingdom: UK GDPR (`ukgdpr.json`)
- `ukgdpr-scope` (164 words): the Data (Use and Access) Act changes → a "How the UK now differs from the EU" list (seventh lawful basis, new Articles 22A–22D, subject access, cookies, transfer test). The Information Commission change → changes.
- `ukgdpr-art17` (175 words): the malicious-allegation ground takes five sentences, and one starts with "Or". Rewrite it as one condition list: "The accuser was convicted of a listed offense against the person, or is under a stalking protection order protecting the person. The controller has investigated and decided to take no further action."
- `ukgdpr-art6`: the Annex 1 conditions → list.

### Switzerland: FADP (`fadp.json`)
- `fadp-scope` (141 words): "Unlike the GDPR, it has no general prohibition model" is jargon. Use the clearer line from `fadp-lawfulness` or cut it. The fines (CHF 250,000 for individuals, CHF 50,000 for businesses, cantonal prosecution, complaint needed) → list.
- `fadp-lawfulness`: the processing principles → list. The last line → key difference.
- `fadp-breach`: fix the curly apostrophe.
- "offences" → "offenses" (D3). "FDPIC" is undefined in "What this means for you".

### Japan: APPI (`appi.json`)
- `appi-scope` (222 words): about half is the 2026 amendment → changes, as dated items. Keep the in-force regime in the lead.
- `appi-purpose` (159 words): "special care-required personal information" is a literal translation of the legal term. Introduce it once: "sensitive data (the Act calls it 'special care-required' information)". Its categories → list. 2026 items → changes.
- `appi-cease-use`, `appi-purpose`: the "(not yet in force)" parentheses (Section 3.6).
- "PPC" is undefined in reader layers.

### India: DPDP Act (`dpdp.json`)
- "These rules apply from 13 May 2027" or a close variant appears in all five articles, sometimes twice in one block. Say it **once per page**, as a page-level note or the scope article's changes list. Remove it from the other blocks.
- `dpdp-scope` (203 words): the commencement timeline (November 13, 2025; November 13, 2026; May 13, 2027) → changes. The significant data fiduciary duties → list.
- `dpdp-consent` (169 words): the Section 7 legitimate uses → list.
- `dpdp-breach`: cut "Strikingly,". Gloss crore once. "give intimation to the Board" → "notify the Board".
- "CERT-In" is undefined.

### Kenya: Data Protection Act (`kdpa.json`)
- `kdpa-s48` (144 words): **ordering problem.** The last sentence ("The listed purposes include civil registration, elections…") belongs to the Section 50 sentence, but the server and data center sentence sits between them. Reorder so the purposes follow Section 50. Then the purposes → list.
- `kdpa-access`: the per-right deadlines → list, or a short table. "Rights requests denied must be explained" → "An organization that refuses a request must explain why."
- `kdpa-s43`: the notice contents (one long closing sentence) → list.
- "unauthorised", "data centre" (D3).

### South Africa: POPIA (`popia.json`)
- `popia-scope` (182 words): eight conditions → list. The April 2025 regulation amendments → changes.
- `popia-s72` (138 words): five conditions in a semicolon series → list.
- `popia-s23`: the professional layer's first sentence is about 70 words. Split it: what the person may obtain, then how (fee, format, advice on correction).

### South Korea: PIPA (`pipa-kr.json`)
- `pipa-kr-scope` (195 words): the 2020, 2023, 2024, 2025 and 2026 amendments → changes. That leaves a lead of about 60 words.
- `pipa-kr-breach` (177 words): the reporting thresholds → list. The 2026 possible-leak rule → changes. Cut the kicker.
- `pipa-kr-transfers`: "PIPC-recognized" and "recognised" in one paragraph (D3). Routes → list.

### Canada (federal): PIPEDA (`pipeda.json`)
- `pipeda-scope` (226 words): split into "Who it covers", "Enforcement" and changes (the June 2026 bill, the 2026 data mobility amendment).
- Most missing serial commas on the site are here (24).
- `pipeda-transfers` "What this means for you" ends well. Keep it.

### Australia: Privacy Act (`pa-au.json`)
- `pa-au-scope` (199 words): the penalty cap now spans two sentences ("…the greater of A$50 million and a second figure. That figure is…"). Rewrite as one list item: "Companies: the greater of A$50 million or three times the benefit obtained. If the benefit cannot be valued, use 30 percent of adjusted turnover instead of three times the benefit." Keep this exact logic. Do not flatten it into "the greatest of three figures". The 2025 tort and the 2026 dates → changes.
- `pa-au-collection`: the APP 3, 6 and 7 rules → three short paragraphs, each led by its principle.
- "organisation" appears throughout (D3). "Telcos" → "Phone companies".

### Singapore: PDPA (`pdpa-sg.json`)
- `pdpa-sg-consent` (212 words, 15 sentences): deemed consent, the First Schedule exceptions, legitimate interests, business improvement and research → a list of consent exceptions, one line each.
- `pdpa-sg-breach` (189 words): the two "deemed significant harm" cases and the notification deadlines → lists.
- "organisation" or "organisations" throughout (D3). Gloss NRIC.

### New Zealand: Privacy Act 2020 (`nzpa.json`)
- `nzpa-transfers` (136 words): one 75-word sentence lists six conditions → list.
- `nzpa-scope`, `nzpa-ipp1-4`: use one form, "IPP 3A" or "IPP3A". Replace the semicolon line (Section 4.3).
- "fourteen" → "14" (D1). "offences" (D3). Gloss ACC and IRD.

### Argentina: PDPA, Law 25,326 (`pdpa-ar.json`)
- Fix the "one of the shortest anywhere" claim (Section 4.2).
- `pdpa-ar-breach`: the Resolution 332/2020 parenthesis (Section 3.6).
- Same law, mixed spelling: "modernised" and "modernization".
- `pdpa-ar-transfers`: the Article 12 exceptions → list.

### Uruguay: Law 18,331 (`lpdp-uy.json`)
- "cedula" → "cédula". "analyse… behaviour" (D3).
- "Refusals must be founded" → "must give reasons" (`lpdp-uy-rectification`).
- `lpdp-uy-transfers`: exceptions → list. Trim the closing clause.
- Source link labels contain "impo" (the IMPO site). Write "IMPO".

---

## 7. Comparison tables (`src/data/comparison/`)
Notes average 8 words, which is good. Use line-based edits only (CLAUDE.md).
- **Semicolons:** about 40 notes use the "No X; Y." pattern. Change to "No X. Y."
- **Repetition:** India's sensitive-data column repeats "No sensitive-data category; one standard covers all personal data." in all 10 rows. Shorten each to "No sensitive category." The key and the law page explain the rest.
- **Key labels** (`states`): "Explicitly protected as a special/sensitive category" → "special or sensitive". "Granted conditionally, partially, or under a different mechanism" → "Granted only in part or through a different mechanism".
- **Contractions:** expand "can't" and "isn't" in 4 notes.
- "One-stop-shop" (GDPR authority note) → "One-stop shop" (CMOS 7.89: a compound noun is not hyphenated).
- **Mixed time units:** GDPR "1 month" against UK GDPR "One calendar month". Pick one form per table.
- British spellings in notes (Appendix B).

## 8. Glossary (`src/data/glossary.json`)
- "Right to be Forgotten" → "Right to Be Forgotten".
- **"Data Subject" definition contradicts itself.** "the living person whose personal data…" is followed by "Some laws… also cover companies." Rewrite: "A data subject is the person a piece of personal data is about. Some laws, like South Africa's, Argentina's and Uruguay's, also cover companies."
- **The jurisdiction line uses many formats:** "universal", "CCPA/CPRA specific", full sentences, "NZ". Use one pattern: "Used in: …" or "Applies to: …".
- **"Schrems II":** five dated facts in a 60-word definition. Keep the definition and the 2023 Data Privacy Framework fact. The litigation timeline lives on the GDPR transfers page.
- "PIA and DPIA": "DPIA, Data Protection Impact Assessment, is the term…" → "Data Protection Impact Assessment (DPIA) is the term…"

## 9. Site pages and UI strings (`translation.json`)
- **Map instructions:** "Tab or hover to highlighted countries to see which privacy law applies. Countries in blue open full legal detail." "Hover to" is ungrammatical, and the map now has two blues. Suggested: "Tab to or hover over a highlighted country to see its privacy law. Select a dark blue country for full details." Check the color name against the legend with Jared.
- **About, "How we research the laws":** three passive sentences. Make them active: "We check every law page against the official text and its regulator's guidance. Where we rely on an English translation, the source link says so. We leave out claims that rest only on secondary sources until we can confirm them."
- **About, "Roadmap: More to come.":** too thin to earn a heading. Write one concrete sentence or remove the section. Jared decides.
- **About, "What this site is":** starts with a fragment ("A public guide to…"). That is acceptable under a heading, but "Privacy Meridian is a public guide to…" reads better.
- **Barrelman `seedNotice`:** "The live feed turns on once the site is deployed." The site is deployed. Check whether this string can still appear. If not, delete it.
- **Barrelman categories:** "Legal & Regulatory" and "Policy & Perspectives" → "and".
- **Heading style (D6):** "Response Timeline", "Related Articles", "How to Close the Gap", "Help for Organizations", "Small Business" and "Mid-Market" against "What this means for you" and "Map key".
- **Dead strings** from retired v1 features: `mode.*`, `entrySelector.*`, `regulationNav.*`, `topicNav.*`, `modal.*`, `comparisonGrid.*`, `languageSelector.*` (`languageSelector` is parked on purpose). These do not show on the site. Ask Jared before deleting any.

---

## 10. Done checklist (per law commit)
- [ ] Sections 2 and 3 rules applied: spelling, serial commas, semicolons, numbers, dates, en dashes, parentheses
- [ ] Kickers cut per Appendix A and Section 4.3
- [ ] No claim, figure, date or citation changed (diff reviewed line by line)
- [ ] No paragraph over about 60 words. No sentence over 25 words in reader layers
- [ ] Tooltip scan still passes (`docs/site-review-2026-10-08/06`, section 7a). Shorter text can lose a tooltip match
- [ ] Map label and tab title still read well if `fullName` changed
- [ ] `npm run build` and `npm run lint` pass. Explore and Compare show no console errors
- [ ] Logged in `CONTENT-REVIEW.md`

---

## Appendix A: "What this means for you" closing lines, one verdict each

CUT means delete the sentence. The box then ends on the sentence before it. If that sentence now reads abruptly, the agent may tighten it, but must not add a new kicker.

| Article id | Last sentence of "What this means for you" | Verdict |
|---|---|---|
| `appi-scope` | It sets duties that match how much your data now travels. | CUT |
| `appi-purpose` | Silent repurposing is not allowed. | CUT |
| `appi-disclosure` | A hidden record becomes something you can review. | CUT |
| `appi-cease-use` | You regain a measure of control over it. | CUT |
| `appi-breach` | You learn of the risk in time to respond. | CUT |
| `appi-transfers` | Your protections travel with your data. | CUT |
| `ccpa-scope` | Its protections follow your data, not the company's address. | CUT |
| `ccpa-right-to-know` | That disclosure brings a hidden data trail into full view. | CUT |
| `ccpa-right-to-delete` | Less data in storage means less of you exposed. | CUT |
| `ccpa-right-to-correct` | Decisions about you then rest on accurate records. | CUT |
| `ccpa-right-to-opt-out` | You can switch off the sale of your data by default. | CUT |
| `ccpa-right-to-limit-spi` | Your most sensitive information is then kept to its intended purpose. | CUT |
| `ccpa-non-discrimination` | You can protect your privacy without losing fair treatment. | CUT |
| `dpdp-scope` | It sets India's first comprehensive rules for that data. | CUT |
| `dpdp-consent` | You can withdraw that consent as easily as you gave it. | KEEP. Adds a right (easy withdrawal). |
| `dpdp-rights` | Your information comes under your control, not just theirs. | CUT |
| `dpdp-breach` | You learn of the risk in time to respond. | CUT |
| `dpdp-transfers` | The rules aim to keep your data within reach of protection. | CUT |
| `fadp-scope` | It sets modern rules built on that strong privacy tradition. | CUT |
| `fadp-lawfulness` | Handling that oversteps those limits is unlawful. | CUT |
| `fadp-access` | What was hidden becomes something you can review. | CUT |
| `fadp-breach` | You are told where that is needed to protect you, or where the regulator asks. | KEEP. Adds a rule, but repeats the summary. Consider cutting the summary copy instead. |
| `fadp-transfers` | Your protections stay with your data across the border. | CUT |
| `gdpr-art13-14` | That holds even when it got your data from someone else. | TRIM. Cut. It repeats the summary's last fact. |
| `gdpr-art15` | It turns an unseen profile into something you can review and challenge. | CUT |
| `gdpr-art16` | Article 16 lets you require the correction, so decisions rest on accurate information. | TRIM. Cut ", so decisions rest on accurate information". End on "Article 16 lets you require the correction." |
| `gdpr-art17` | You regain a say over what remains attached to your name. | CUT |
| `gdpr-art18` | It then pauses until the question is resolved. | CUT |
| `gdpr-art19` | A single request reaches the copies you could not track yourself. | CUT |
| `gdpr-art20` | You can switch on your own terms rather than lose your history. | CUT |
| `gdpr-art21` | The targeting ends once you exercise that right. | CUT |
| `gdpr-art22` | Where an exception allows one, you can demand a human review and contest the result. | KEEP. Adds a right (human review). |
| `gdpr-art30` | That record is what makes real accountability possible. | CUT |
| `gdpr-art37-39` | You gain a dedicated contact responsible for protecting your rights. | CUT |
| `gdpr-art35` | Risks are assessed and reduced before they can affect you. | CUT |
| `gdpr-art33-34` | You are notified in time to secure your accounts. | CUT |
| `gdpr-art44-49` | Your safeguards continue to apply wherever the data goes. | CUT |
| `kdpa-scope` | It sets real limits on how your data is used. | CUT |
| `kdpa-s30` | Uses without a valid basis are not allowed. | CUT |
| `kdpa-access` | Your information stops being a one-way mirror. | CUT |
| `kdpa-s43` | You are alerted in time to protect your money and identity. | CUT |
| `kdpa-s48` | Your protections stay with the data across the border. | CUT |
| `lgpd-scope` | Your CPF and daily habits gain real legal protection. | CUT |
| `lgpd-art7` | Uses that fit none of them are not permitted. | CUT |
| `lgpd-art18-access` | You gain visibility into the information shaping decisions about you. | CUT |
| `lgpd-art18-deletion` | Removing it reduces how much of you is exposed. | CUT |
| `lgpd-art48` | You are informed in time to protect your accounts and your CPF. | CUT |
| `lgpd-art33-36` | Your safeguards travel with your data. | CUT |
| `lpdp-uy-scope` | It gives people real control over that information. | CUT |
| `lpdp-uy-consent` | Uses without a valid basis are not allowed. | CUT |
| `lpdp-uy-access` | What was out of view becomes something you can check. | CUT |
| `lpdp-uy-rectification` | Decisions about you then rest on accurate records. | CUT |
| `lpdp-uy-breach` | You learn in time to protect yourself. | CUT |
| `lpdp-uy-transfers` | Your rights follow the data across the border. | CUT |
| `nzpa-scope` | It sets fourteen clear principles for doing so. | CUT |
| `nzpa-ipp1-4` | Collection beyond that is not permitted. | CUT |
| `nzpa-access` | A hidden record becomes something you can review. | CUT |
| `nzpa-correction` | Records that guide those decisions stay accurate. | CUT |
| `nzpa-breach` | You are told in time to protect yourself. | CUT |
| `nzpa-transfers` | Your protections follow your information overseas. | CUT |
| `pa-au-scope` | The law now has real teeth. | CUT |
| `pa-au-collection` | You can also tell a business to stop sending you direct marketing. | KEEP. Adds a right (stop direct marketing). |
| `pa-au-access` | A hidden file becomes something you can check. | CUT |
| `pa-au-correction` | If they refuse, your side of the story stays attached. | KEEP. Adds a right. |
| `pa-au-breach` | You get the chance to protect yourself. | CUT |
| `pa-au-transfers` | Your protection travels with your data. | CUT |
| `pdpa-ar-scope` | It turns that constitutional promise into everyday rules. | CUT |
| `pdpa-ar-consent` | Collection without a valid basis is not permitted. | CUT |
| `pdpa-ar-access` | A hidden file becomes something you can inspect. | CUT |
| `pdpa-ar-rectification` | Decisions about you then rest on the truth. | CUT |
| `pdpa-ar-breach` | Its inspectors also check for a way to notify affected people. | KEEP. Adds a fact. |
| `pdpa-ar-transfers` | Your protections do not end at the border. | CUT |
| `pdpa-sg-scope` | It also sets up the national Do Not Call registry for marketing calls and messages. | KEEP. Adds a fact (Do Not Call registry). |
| `pdpa-sg-consent` | The business must explain what withdrawing means for you. | KEEP. Adds a duty. |
| `pdpa-sg-access` | You also learn who it was shared with over the past year. | KEEP. Adds a fact (one-year sharing history). |
| `pdpa-sg-correction` | Organisations must also stop keeping data they no longer need. | KEEP. Adds a duty. |
| `pdpa-sg-breach` | You get time to protect yourself. | CUT |
| `pdpa-sg-transfers` | Your rights do not stop at the border. | CUT |
| `pipa-kr-scope` | It sets strict rules to match those stakes. | CUT |
| `pipa-kr-art15` | Over-collection without a basis is not permitted. | CUT |
| `pipa-kr-access` | A hidden record becomes something you can review. | CUT |
| `pipa-kr-deletion` | You can shrink the trail you leave behind. | CUT |
| `pipa-kr-breach` | You are warned in time to act. | CUT |
| `pipa-kr-transfers` | Your protections stay with the data across the border. | CUT |
| `pipeda-scope` | PIPEDA sets your rights, yet its enforcement still relies mostly on recommendations and the courts. | KEEP. Punctuates the section: rights exist, but enforcement is weak. |
| `pipeda-consent` | Uses a reasonable person would find inappropriate are not allowed at all. | CUT |
| `pipeda-access` | A hidden file becomes something you can check. | CUT |
| `pipeda-correction` | Where a dispute remains, your side must be recorded. | KEEP. Adds a right. |
| `pipeda-breach` | You learn in time to protect yourself. | CUT |
| `pipeda-transfers` | You must be told that it may leave the country. | KEEP. Adds a duty. |
| `pipl-scope` | Those everyday interactions now carry clear legal limits. | CUT |
| `pipl-art13` | Some uses, such as sharing your data or sending it abroad, need your separate consent. | KEEP. Adds a rule (separate consent). |
| `pipl-art44` | The platform becomes answerable to you. | CUT |
| `pipl-art47` | You can remove the trail you leave behind. | CUT |
| `pipl-art24` | For marketing based on your profile, the company must offer an option not based on your profile, or an easy way to refuse. | KEEP. Adds a rule. |
| `pipl-art38-43` | Your separate consent is needed before your data leaves the country. | KEEP. Adds a rule (separate consent). |
| `pipl-art40` | Sensitive records remain under domestic protection. | CUT |
| `pipl-art57` | You are informed in time to secure your accounts. | CUT |
| `popia-scope` | It gives that information real legal protection. | CUT |
| `popia-s11` | Processing without a valid ground is not allowed. | CUT |
| `popia-s23` | A hidden record becomes something you can review. | CUT |
| `popia-s24` | Decisions about you then rest on accurate records. | CUT |
| `popia-s22` | You learn of the risk in time to act. | CUT |
| `popia-s72` | Your safeguards travel with your data. | CUT |
| `ukgdpr-scope` | Those companies must follow clear rules, wherever they are based. | CUT |
| `ukgdpr-art6` | Separate rules, known as PECR, also limit marketing calls, texts and emails. | KEEP. Adds a fact (PECR). |
| `ukgdpr-art15` | A hidden record becomes something you can check and question. | CUT |
| `ukgdpr-art17` | You regain a say over what stays on file. | CUT |
| `ukgdpr-art33-34` | You are notified in time to protect yourself. | CUT |
| `ukgdpr-transfers` | Your rights continue to apply once the data leaves the country. | CUT |

## Appendix B: British spellings to Americanize (D3)

Exceptions: official names and direct quotes. Source-link labels are excluded.

| File | Field | Words to change |
|---|---|---|
| appi.json | `categories[0].articles[0].professionalLayer` | offence |
| appi.json | `categories[4].articles[0].professionalLayer` | recognised |
| fadp.json | `categories[0].articles[0].professionalLayer` | offences |
| gdpr.json | `categories[0].articles[3].plainSummary` | defence |
| gdpr.json | `categories[0].articles[3].professionalLayer` | defence |
| kdpa.json | `categories[3].articles[0].professionalLayer` | unauthorised |
| kdpa.json | `categories[4].articles[0].professionalLayer` | centre |
| lgpd.json | `categories[0].articles[0].professionalLayer` | recognised |
| lgpd.json | `categories[4].articles[0].professionalLayer` | recognises, authorisation, recognised |
| lpdp-uy.json | `categories[0].articles[0].professionalLayer` | analyse, behaviour, modernised |
| lpdp-uy.json | `categories[4].articles[0].professionalLayer` | authorisation |
| lpdp-uy.json | `categories[4].articles[0].assessTrigger` | authorised |
| lpdp-uy.json | `categories[4].articles[0].gapRemediation.smb` | authorisation |
| nzpa.json | `categories[0].articles[0].professionalLayer` | offences, categorisation |
| nzpa.json | `categories[0].articles[0].comparisonFlags[0].note` | offences |
| nzpa.json | `categories[3].articles[0].plainSummary` | offence |
| nzpa.json | `categories[3].articles[0].professionalLayer` | offence |
| pa-au.json | `categories[0].articles[0].professionalLayer` | organisations |
| pa-au.json | `categories[1].articles[0].professionalLayer` | organisation |
| pa-au.json | `categories[2].articles[0].professionalLayer` | Organisations |
| pa-au.json | `categories[2].articles[0].responseTimeline` | Organisations |
| pa-au.json | `categories[2].articles[0].gapRemediation.enterprise` | organisation |
| pa-au.json | `categories[2].articles[1].responseTimeline` | Organisations |
| pa-au.json | `categories[3].articles[0].professionalLayer` | unauthorised |
| pa-au.json | `categories[3].articles[0].gapRemediation.midMarket` | penalise |
| pdpa-ar.json | `categories[0].articles[0].professionalLayer` | modernised |
| pdpa-ar.json | `categories[4].articles[0].professionalLayer` | organised |
| pdpa-sg.json | `categories[0].articles[0].plainSummary` | organisations |
| pdpa-sg.json | `categories[0].articles[0].professionalLayer` | organisation, organisations |
| pdpa-sg.json | `categories[1].articles[0].professionalLayer` | organisation |
| pdpa-sg.json | `categories[2].articles[0].plainSummary` | organisation |
| pdpa-sg.json | `categories[2].articles[0].professionalLayer` | organisation |
| pdpa-sg.json | `categories[2].articles[1].plainSummary` | organisation |
| pdpa-sg.json | `categories[2].articles[1].personalImpact` | Organisations |
| pdpa-sg.json | `categories[2].articles[1].professionalLayer` | organisation, organisations, anonymise |
| pdpa-sg.json | `categories[2].articles[1].gapRemediation.midMarket` | anonymised |
| pdpa-sg.json | `categories[3].articles[0].professionalLayer` | organisation |
| pdpa-sg.json | `categories[4].articles[0].plainSummary` | recognised |
| pdpa-sg.json | `categories[4].articles[0].professionalLayer` | organisation, localisation |
| pdpa-sg.json | `categories[4].articles[0].assessTrigger` | recognised |
| pipa-kr.json | `categories[0].articles[0].professionalLayer` | recognises |
| pipa-kr.json | `categories[4].articles[0].professionalLayer` | recognised |
| pipeda.json | `categories[0].articles[0].professionalLayer` | offences, recognises |
| pipeda.json | `categories[1].articles[0].comparisonFlags[0].note` | centred |
| pipeda.json | `categories[3].articles[0].professionalLayer` | offence |
| popia.json | `categories[0].articles[0].professionalLayer` | offences |
| popia.json | `categories[4].articles[0].professionalLayer` | authorisation |
| ukgdpr.json | `categories[0].articles[0].professionalLayer` | recognised |
| ukgdpr.json | `categories[1].articles[0].professionalLayer` | recognised, defence |
| ukgdpr.json | `categories[1].articles[0].assessTrigger` | recognised |
| ukgdpr.json | `categories[1].articles[0].gapRemediation.enterprise` | recognised |
| ukgdpr.json | `categories[2].articles[1].professionalLayer` | offence |
| consentStandards.json | `rows[3].jurisdictions.pdpa-sg.note` | organisations |
| consentStandards.json | `rows[5].jurisdictions.pa-au.note` | Organisations |
| enforcementPenalties.json | `rows[0].jurisdictions.nzpa.note` | offences |
| enforcementPenalties.json | `rows[0].jurisdictions.popia.note` | offences |
| enforcementPenalties.json | `rows[3].jurisdictions.popia.note` | offences |
| enforcementPenalties.json | `rows[3].jurisdictions.pipeda.value` | offences |
| individualRights.json | `rows[1].jurisdictions.popia.note` | authorised |
| individualRights.json | `rows[1].jurisdictions.pdpa-sg.note` | Organisations |
| individualRights.json | `rows[6].jurisdictions.ukgdpr.note` | recognised |
| internationalTransfers.json | `rows[0].jurisdictions.lgpd.note` | recognised |
| internationalTransfers.json | `rows[0].jurisdictions.pipa-kr.note` | recognised |
| internationalTransfers.json | `rows[1].jurisdictions.lpdp-uy.note` | authorisation |
| internationalTransfers.json | `rows[2].jurisdictions.kdpa.note` | recognised |
| internationalTransfers.json | `rows[4].jurisdictions.pipa-kr.note` | authorise |
| internationalTransfers.json | `rows[5].jurisdictions.lpdp-uy.note` | authorise |
| internationalTransfers.json | `rows[5].jurisdictions.popia.note` | authorisation |
| internationalTransfers.json | `rows[6].jurisdictions.pdpa-sg.note` | localisation |
| legalBases.json | `rows[2].jurisdictions.pa-au.note` | authorised |
| legalBases.json | `rows[2].jurisdictions.pdpa-sg.note` | authorises |
| legalBases.json | `rows[5].jurisdictions.ukgdpr.note` | Recognised |
| scope.json | `rows[0].jurisdictions.pa-au.value` | organisations |
| scope.json | `rows[0].jurisdictions.pdpa-sg.value` | organisations |
| scope.json | `rows[0].jurisdictions.pdpa-sg.note` | organisation |
| scope.json | `rows[1].jurisdictions.lpdp-uy.note` | analyse |
| scope.json | `rows[1].jurisdictions.pa-au.note` | organisations |
| scope.json | `rows[4].jurisdictions.lpdp-uy.note` | analysing, behaviour |
| scope.json | `rows[4].jurisdictions.pdpa-sg.note` | organisations |

## Appendix C: Strings with semicolons

Prose: split into sentences, or into a list where Section 5 applies. Table notes: change the semicolon to a period.

| File | Field | Text |
|---|---|---|
| ccpa.json | `categories[0].articles[0].professionalLayer` | The CCPA as amended by the CPRA applies to for-profit businesses that do business in California, collect personal information from Californi… |
| gdpr.json | `categories[0].articles[3].professionalLayer` | Article 17 requires erasure without undue delay when one of six grounds applies: the data is no longer necessary for the purpose collected; … |
| gdpr.json | `categories[0].articles[4].professionalLayer` | Article 18 allows data subjects to obtain restriction of processing in four circumstances: the accuracy of the data is contested and verific… |
| lgpd.json | `categories[1].articles[0].professionalLayer` | Article 7 establishes ten lawful bases for processing personal data under LGPD: consent; compliance with a legal or regulatory obligation; e… |
| nzpa.json | `categories[1].articles[0].professionalLayer` | Rather than enumerating legal bases, the Act regulates collection through principles. IPP1 permits collection only for a lawful purpose conn… |
| popia.json | `categories[4].articles[0].professionalLayer` | Section 72 prohibits transfer of personal information to a third party in a foreign country unless one of five conditions holds: the recipie… |
| consentStandards.json | `rows[0].jurisdictions.nzpa.note` | Principle-based collection; no blanket opt-in requirement. |
| consentStandards.json | `rows[1].jurisdictions.fadp.note` | The purpose must be recognizable; separate consent is not mandated. |
| consentStandards.json | `rows[2].jurisdictions.nzpa.note` | No special-category consent rule; the same principles apply. |
| consentStandards.json | `rows[3].jurisdictions.nzpa.note` | No formal consent-withdrawal mechanism; principle-based. |
| consentStandards.json | `rows[4].jurisdictions.fadp.note` | Closer to an opt-out posture; processing is lawful unless objected to. |
| consentStandards.json | `rows[4].jurisdictions.nzpa.note` | Principle-based; neither strict opt-in nor opt-out. |
| consentStandards.json | `rows[5].jurisdictions.fadp.note` | General principles apply; no fixed child-consent age. |
| enforcementPenalties.json | `rows[0].jurisdictions.nzpa.note` | A fine for specific offences; no GDPR-scale administrative fines. |
| individualRights.json | `rows[1].jurisdictions.nzpa.note` | No general erasure right; correction is provided instead. |
| individualRights.json | `rows[4].jurisdictions.gdpr.note` | No sale concept; objection to direct marketing is absolute. |
| individualRights.json | `rows[4].jurisdictions.lgpd.note` | No direct equivalent; processing rests on legal bases and consent. |
| individualRights.json | `rows[4].jurisdictions.ukgdpr.note` | No sale concept; objection to direct marketing is absolute. |
| individualRights.json | `rows[4].jurisdictions.fadp.note` | No sale concept; the person can object to certain processing. |
| individualRights.json | `rows[4].jurisdictions.pipa-kr.note` | Consent required before providing data to third parties; no sale opt-out as such. |
| individualRights.json | `rows[5].jurisdictions.ccpa.note` | Limited; opt-out and Limit-the-Use mechanisms rather than a general objection right. |
| individualRights.json | `rows[5].jurisdictions.dpdp.note` | No general objection right; withdrawing consent is the main lever. |
| internationalTransfers.json | `rows[1].jurisdictions.dpdp.note` | No standard-contractual-clause regime; transfers turn on the country list. |
| internationalTransfers.json | `rows[5].jurisdictions.dpdp.note` | No pre-approval; the government instead restricts specific countries. |
| legalBases.json | `rows[1].jurisdictions.appi.note` | No legal-basis framework; contract needs are handled through purpose limits. |
| legalBases.json | `rows[1].jurisdictions.nzpa.note` | No legal-basis framework; the principles govern collection and use. |
| legalBases.json | `rows[5].jurisdictions.appi.note` | No legitimate-interests basis; relies on consent and exemptions. |
| legalBases.json | `rows[5].jurisdictions.nzpa.note` | No named basis; the principles allow reasonable business use. |
| legalBases.json | `rows[5].jurisdictions.dpdp.note` | No general legitimate-interests basis; only enumerated legitimate uses. |
| scope.json | `rows[2].jurisdictions.ukgdpr.note` | Applies to any size; duties scale with risk. |
| scope.json | `rows[3].jurisdictions.fadp.note` | Federal bodies; cantonal bodies fall under cantonal law. |
| scope.json | `rows[4].jurisdictions.fadp.note` | Effects-based reach; foreign controllers may need a Swiss representative. |
| sensitiveData.json | `rows[0].jurisdictions.nzpa.note` | No special-category regime; the same principles cover all information. |
| sensitiveData.json | `rows[0].jurisdictions.dpdp.note` | No sensitive-data category; one standard covers all personal data. |
| sensitiveData.json | `rows[1].jurisdictions.dpdp.note` | No sensitive-data category; one standard covers all personal data. |
| sensitiveData.json | `rows[2].jurisdictions.dpdp.note` | No sensitive-data category; one standard covers all personal data. |
| sensitiveData.json | `rows[3].jurisdictions.dpdp.note` | No sensitive-data category; one standard covers all personal data. |
| sensitiveData.json | `rows[4].jurisdictions.dpdp.note` | No sensitive-data category; one standard covers all personal data. |
| sensitiveData.json | `rows[5].jurisdictions.dpdp.note` | No sensitive-data category; one standard covers all personal data. |
| sensitiveData.json | `rows[6].jurisdictions.dpdp.note` | No sensitive-data category; one standard covers all personal data. |
| sensitiveData.json | `rows[7].jurisdictions.gdpr.note` | Not a special category; protected as ordinary personal data. |
| sensitiveData.json | `rows[7].jurisdictions.pipa-kr.note` | Not a sensitive category; protected as ordinary data. |
| sensitiveData.json | `rows[7].jurisdictions.dpdp.note` | No sensitive-data category; one standard covers all personal data. |
| sensitiveData.json | `rows[8].jurisdictions.gdpr.note` | Not a special category; protected as ordinary personal data. |
| sensitiveData.json | `rows[8].jurisdictions.dpdp.note` | No sensitive-data category; one standard covers all personal data. |
| sensitiveData.json | `rows[9].jurisdictions.fadp.note` | General principles apply; no dedicated child category. |
| timeBasedObligations.json | `rows[2].jurisdictions.lgpd.note` | ANPD Resolution 15/2024, from awareness; supplement within 20 business days. |
| timeBasedObligations.json | `rows[2].jurisdictions.pdpa-ar.note` | The 2000 law has no breach-notification rule; AAIP guidance encourages notice. |
