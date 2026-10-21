# Privacy Meridian — Legal & Compliance Review (2026-10-20)

Builder-ready findings from the second full review, done after launch. It covers all 17 laws,
the glossary, the map, site text, and the live site's compliance claims. Nine read-only
reviewers checked each item, mostly against primary sources. The 2026-10-08 review
(`docs/site-review-2026-10-08/`) is almost entirely fixed. This file lists **only what remains
or is new**.

## Rules for the builder agent

1. Read `CLAUDE.md` first. Follow the **Planning Rule**: present a plan and wait for Jared's
   approval before editing.
2. Items marked **DECISION (Jared)**: present the options and wait.
3. Content goes in JSON data files. UI strings go in `src/i18n/locales/en/translation.json`.
4. Comparison-table cells carry **no article or section numbers**. Edit them line by line;
   never re-serialise those files.
5. Write all new site text in the house voice: 10–15 word sentences, active voice, no em
   dashes, no semicolons. The "Fix" text below states the facts; rewrite it in the house
   voice.
6. **Verify first** marks items backed by secondary sources or memory. Confirm them against
   the official text before editing, or flag them to Jared.
7. After any `professionalLayer` or glossary edit, re-run the tooltip scan
   (`docs/site-review-2026-10-08/06-code-accessibility-privacy.md`, section 7a).
8. Verify before calling anything done. Run `npm run build` and `npm run lint`, check the
   Explore and Compare views for console errors, and log changes in `CONTENT-REVIEW.md`.

Format below: **Where** = file › article or row id › field. **Now** = current text. **Fix** =
correct facts. **Source**, **Confidence**.

---

## 1. Fix first

### C1. Cloudflare Web Analytics is live (HIGH, compliance). DECISION (Jared), done in the Cloudflare dashboard, not in code
- **Where:** the live site, at the Cloudflare edge. The tag is not in the repo.
- **Now:** Cloudflare injects `static.cloudflareinsights.com/beacon.min.js` (with
  `data-cf-beacon`) into served HTML for browser requests. Confirmed with a browser-like curl
  of `/about`. The site's CSP (`default-src 'self'`) blocks it in modern browsers and logs a
  console error. The footer still says "No cookies, no trackers, no analytics", and About says
  "uses no trackers or analytics".
- **Fix:** turn off Web Analytics / automatic setup for privacymeridian.org. Then re-check with
  `curl -H "Accept: text/html" -A "<Chrome UA>" https://privacymeridian.org/about | grep cloudflareinsights`,
  which should print nothing.
- **Also consider:** turning off Network Error Logging (the `NEL` and `Report-To` headers send
  failure reports to `a.nel.cloudflare.com`).
- **Keep the CSP** as a backstop.

### E1. Korea — the possible-leak duty doesn't include a regulator report
- **Where:** `pipa-kr.json` › `pipa-kr-breach` › professionalLayer.
- **Now:** "Since 11 September 2026, notice and reporting also cover possible leaks, on the same
  72-hour clock."
- **Fix:** New Art 34(2) requires telling **people who may be affected** about a possible leak.
  The report to the regulator (Art 34(4)) is still tied to an actual leak. The 72-hour timing
  for possible-leak notice comes from press reports only. Suggest: "Since 11 September 2026,
  affected people must also be told of a possible leak."
- **Source:** https://casenote.kr/법령/개인정보_보호법/제34조 (mirror of law.go.kr). High
  confidence on the reporting point; medium on 72 hours.

### E2. UK — the malicious-allegation erasure ground applies UK-wide
- **Where:** `ukgdpr.json` › `ukgdpr-art17` › professionalLayer.
- **Now:** "Since 31 March 2026 it also covers, in England and Wales, data processed because of
  a malicious allegation…"
- **Fix:** drop "in England and Wales". Art 17(1)(g), (4) and (5) apply UK-wide from
  31 Mar 2026. The Victims and Prisoners Act 2024 inserted them for England and Wales, and the
  Data (Use and Access) Act extended them to Scotland and Northern Ireland the same day.
  Optionally explain the narrow meaning of "malicious": the person was convicted of listed
  harassment or stalking offences against the data subject, or is under a stalking protection
  order.
- **Source:** https://www.legislation.gov.uk/eur/2016/679/article/17. High.

### E3. China — Art 47 has five deletion grounds, not six
- **Where:** `pipl.json` › `pipl-art47` › professionalLayer ("in six circumstances"),
  assessTrigger ("all six grounds"), gapRemediation.enterprise ("The six deletion grounds").
- **Fix:** **five**. "Stops providing the product or service" and "retention period expired"
  are a single item.
- **Source:** DigiChina PIPL translation. High.

### E4. China — who gets the 1-hour report
- **Where:** `pipl.json` › `pipl-art57` › professionalLayer and responseTimeline.
- **Now:** "…to the provincial CAC office within 4 hours, and critical operators within 1 hour."
- **Fix:** Critical-infrastructure incidents go within **1 hour to the protection department and
  public security organs**. Other operators report to the provincial CAC within 4 hours.
  Central and state bodies have 2 hours. Optionally add that a leak of 1 million or more
  people's data counts as a "relatively major" incident.
- **Source:** https://www.cac.gov.cn/2025-09/15/c_1759583017717009.htm (Measures Art 4). High.

### E5. Singapore — research is in the Second Schedule
- **Where:** `pdpa-sg.json` › `pdpa-sg-consent` › professionalLayer, and articleRef ("Sections
  13-18 and First Schedule").
- **Fix:** Research is a **Second Schedule** exception, covering use and disclosure only. It
  applies only where identifiable data is needed, there is a clear public benefit, and no
  decisions are made about the person. Change articleRef to "Sections 13-18 and First and
  Second Schedules".
- **Source:** https://sso.agc.gov.sg/Act/PDPA2012?ProvIds=Sc2-&ViewType=Within. High.

### E6. Singapore — login credentials alone count as significant harm
- **Where:** `pdpa-sg.json` › `pdpa-sg-breach` › professionalLayer.
- **Now:** "a name or ID number combined with financial, insurance, medical or account
  credential information".
- **Fix:** Under Reg 3(1)(b), an account identifier breached together with its password or
  other access data is significant harm **on its own**. The name or ID combination applies to
  the Part 1 Schedule data (financial, insurance, specified medical and similar).
- **Source:** https://sso.agc.gov.sg/SL/PDPA2012-S64-2021. High.

### E7. Canada — 23andMe breach year
- **Where:** `pipeda.json` › `pipeda-scope` › personalImpact.
- **Now:** "In 2025, a breach at 23andMe exposed genetic data of Canadians. The UK fined the
  company…"
- **Fix:** The breach happened in **2023**. The UK ICO fined 23andMe £2.31M in June 2025, and
  the joint findings with Canada's OPC came the same month.
- **Source:** ICO press release (ico-newsroom.prgloo.com, "ICO fines 23andMe £2.31 million…").
  High.

### E8. Map — UAE and Egypt are missing from the "law in effect" list
- **Where:** `src/data/mapOnlyLaws.js`. Both countries are grey and labelled "No comprehensive
  law".
- **Fix:** add two entries:
  - **UAE:** Federal Decree-Law No. 45 of 2021 on Personal Data Protection, in force
    2 Jan 2022. Its executive regulations are reportedly still pending. **DECISION (Jared):**
    decide whether to show laws in force whose regulations are pending.
  - **Egypt:** Personal Data Protection Law No. 151 of 2020, ISO 818. Executive regulations
    were issued by Ministerial Decree 816/2025 (Nov 2025), starting a one-year compliance
    period.
- **Source:** cms.law, tamimi.com (Egypt); Chambers 2026 UAE guide (secondary). **Verify
  first.** Confidence medium-high to high.
- **Possible further gaps** (single secondary sources; **verify first**): DR Congo (Digital
  Code 2023), Bangladesh (2025 Ordinance or 2026 Act), Belize, Guyana, Trinidad & Tobago
  (partly in force), and Greenland (the old Danish act applies there, not the GDPR).

---

## 2. Misleading wording

| ID | Where | Now | Fix | Conf. |
|---|---|---|---|---|
| M1 | `translation.json` › `legend.none` | "No comprehensive law" | "**No comprehensive law in effect**". Grey also covers laws passed but not yet in effect: Sri Lanka (core duties 1 Jan 2027), Paraguay, and Oklahoma, Louisiana, Alabama and Vermont. **DECISION (Jared)** on wording. | High |
| M2 | `glossary.json` › `consent-withdrawal` › definition | "Consent means you actively agreed… you can take that agreement back at any time." | Implied or deemed consent is valid under PIPEDA, Singapore, Australia, Japan and the FADP (the site's own tables say so). Withdrawal can need reasonable notice or be limited by contract (PIPEDA, Singapore). Suggested: "Consent means you agree to a use of your data. Some laws accept implied or deemed consent. Most let you withdraw it." Or remove the term from `tooltipTerms` on `pipeda-consent`, `pdpa-sg-consent`, `pdpa-sg-transfers`, `pa-au-collection`, `pa-au-transfers`, `appi-purpose`, `appi-transfers`, `fadp-lawfulness`, `fadp-transfers`. | High |
| M3 | `pa-au.json` › `pa-au-scope` › professionalLayer; `enforcementPenalties.json` › `max-fine` › `pa-au` | "greatest of A$50 million, three times the benefit, or 30% of adjusted turnover" / "Whichever is greatest" | s 13G(3), for companies: the greater of A$50M and either 3× the benefit (if determinable) **or**, if not, 30% of adjusted turnover. The turnover limb applies only when the benefit can't be calculated. Individuals face a lower cap (A$2.5M, **verify first**). These caps date from Dec 2022. | High (structure) |
| M4 | `legalBases.json` › `consent` › `pa-au` | "Consent is needed for sensitive data and most secondary uses" | APP 6.2 also allows reasonably expected related uses, uses required by law, and others. Say "many secondary uses" or list the alternatives. | High |
| M5 | `pipeda.json` › `pipeda-scope` › professionalLayer | "A 2026 amendment adding a data mobility right has passed but is not yet in force." | Bill C-15 (Royal Assent 26 Mar 2026) lets the government **create** data-mobility frameworks by regulation, starting with open banking. No mobility rights apply yet. | Medium-high |
| M6 | `individualRights.json` › `automated-decisions` › `ukgdpr` › note | "Banned only with special category data or recognised legitimate interests." | Banned when relying on recognised legitimate interests. With special category data, allowed with explicit consent, or contract/law plus the Art 9(2)(g) substantial public interest condition (Art 22B). Suggested: "Restricted with special category data, banned with recognised legitimate interests. Otherwise allowed with safeguards." | High |
| M7 | `gdpr.json` › `gdpr-art21` › plainSummary | "For other purposes, the company must stop unless they can demonstrate compelling legitimate grounds." | The general objection right applies only to processing based on legitimate interests or public task, and only on grounds relating to the person's particular situation. The professionalLayer already says this correctly. | High |
| M8 | `pipa-kr.json` › `pipa-kr-deletion` › professionalLayer | "…must promptly tell that body of corrections and deletions." | "…must promptly pass correction and deletion **requests** to that body" (Decree Art 43(2)). | Medium-high |
| M9 | `appi.json` › `appi-transfers` (professionalLayer, assessTrigger, gapRemediation) | Safeguards only "through contract or intra-group rules" | Add certified recipients (APEC CBPR; PPC Rules Art 16). The site's own `internationalTransfers` › `certification` › `appi` cell already says "partial". **Verify first.** | Medium-high |
| M10 | `nzpa.json` › `nzpa-transfers` › plainSummary and professionalLayer | "only if" / "only where" | Add the IPP 12(2) exception (law-enforcement and serious-threat disclosures). The plainSummary list also omits prescribed countries and schemes. | Medium |
| M11 | `pipl.json` › `pipl-art24` › personalImpact | Implies a right both to refuse profile-based marketing and to a non-personalised option | Under Art 24(2) the handler offers **either** non-personalised options **or** an easy way to refuse. | High |
| M12 | `dpdp.json` › `dpdp-rights` › plainSummary and personalImpact; `dpdp-consent` › personalImpact; `dpdp-transfers` › plainSummary; dpdp cells in `individualRights`, `consentStandards`, `legalBases`, `internationalTransfers` | Read as if the duties apply now | Add "from 13 May 2027" (consent managers from 13 Nov 2026), matching the time and penalty tables. | High |
| M13 | `dpdp.json` › `dpdp-rights` › responseTimeline; `timeBasedObligations.json` › `dsr-standard` / `dsr-extension` › `dpdp` | "Up to 90 days" for all rights requests | Rule 14(3)'s 90-day limit may apply to **grievance** responses (s 13), not to access or erasure requests. The professionalLayer already frames it as grievances. **Verify first** against the Gazette text (G.S.R. 843(E)). | Medium |
| M14 | `lgpd.json` › `lgpd-art18-access` › professionalLayer and responseTimeline; `timeBasedObligations.json` › `dsr-extension` › `lgpd` | "Small businesses get double the time" | Under Res. CD/ANPD 2/2022, small agents give the simplified reply within 15 days (Art 15) and the complete reply within 30 days (Art 14 III), unless their processing is high-risk. "Immediately" can't be doubled. | High |
| M15 | `consentStandards.json` › `easy-withdrawal` › `lpdp-uy`, `kdpa` | "yes / Consent may be withdrawn" | Use "partial", matching Argentina and South Africa. No rule found that withdrawal must be as easy as giving consent. Re-check `pipa-kr` "yes" for a supporting rule. | Medium-high |
| M16 | `consentStandards.json` › `opt-in-default` / `opt-out-model` | GDPR, UK, POPIA and Kenya marked "yes" for opt-in by default "where consent is the basis". LGPD, POPIA and Kenya marked "no" for opt-out, though all have a legitimate-interests basis. | Make the cells consistent. Rename the row to something like "Opt-in when consent is relied on". | High |
| M17 | `sensitiveData.json` › `childrens-data` › `dpdp` | "yes" (sensitive category) | "partial". India has no sensitive category; GDPR is "partial" for the same pattern. | High |
| M18 | `consentStandards.json` › `per-purpose` › `pdpa-sg`; `individualRights.json` › `non-discrimination` › `pdpa-sg` | "yes" / "no — No specific rule" | per-purpose → "partial" (consent attaches to notified purposes, with no unbundling rule). non-discrimination → "partial": s 14(2)(a) bars requiring consent beyond what the service needs, which matches the PIPL Art 16 cell. | Medium |
| M19 | `translation.json` › `about.sections.how.body` | "Every page is checked against the official text…" | Exempt the map-only list, which relies on trackers. For non-English laws say "or a reputable English translation". Label translated sources "(unofficial English translation)", e.g. DigiChina. | High |
| M20 | `lgpd.json` › `lgpd-scope` › professionalLayer | TikTok R$153.7M fine "can still be appealed" | The appeal window closed in Sept 2026. Say "could be appealed". The fine was on ByteDance Brasil. | Medium-high |
| M21 | `dpdp.json` › `dpdp-scope`; `enforcementPenalties.json` › `authority` › `dpdp` | Board "had not been appointed as of August 2026" | "as of October 2026". No appointment found since the 12 Aug Lok Sabha answer. | Medium |
| M22 | `kdpa.json` › `kdpa-s48`; `internationalTransfers.json` › `localization` › `kdpa` | "must use servers in Kenya" / "six purposes" | Reg 26(1) allows a Kenyan server or data centre **or** at least one serving copy stored in Kenya. The reg 26(2) list starts with "includes", so it may not be complete. | High |

---

## 3. Minor

- **Korea:**
  - `pipa-kr-breach`: notice must also explain legal remedies (Art 34(1) item 6). "Leak" now
    includes forgery, alteration and damage.
  - `enforcementPenalties` › `private-action` › `pipa-kr`: 5× damages cover gross negligence as
    well as intent.
  - citation: drop "substantially" before "amended 2020, 2023, 2025 and 2026".
  - `non-discrimination` note: cite Arts 16(3) and 22(5).
- **Japan:**
  - `appi-breach` › plainSummary and `timeBasedObligations` › `breach-authority` › `appi`:
    "suspected attacks" → "suspected wrongful purpose", which includes insider theft.
  - `appi-scope`: "fraud or hacking" → "fraud or other wrongful means" ("hacking" unverified).
- **China:**
  - `enforcementPenalties` › `max-fine` › `pipl`: "¥50M" → "RMB 50 million".
  - `pipl-art57` › plainSummary: add the Art 57(2) exception and "may have occurred".
  - Glossary `data-localization`: mention the exemptions.
  - `sensitiveData` › `political-opinions` › `pipl`: "partial", to match the other unlisted
    categories.
- **Singapore:**
  - `private-action` note: a lawsuit waits only if the regulator has decided.
  - `pdpa-sg-access`: "Rejections must be explained" → "People must be told of a rejection".
  - `pdpa-sg-transfers`: PRP certifications qualify only for data-intermediary recipients, CBPR
    for any recipient. Add the vital-interest and publicly-available routes.
  - `pdpa-sg-breach`: add the bars on notifying individuals and the PDPC waiver (s 26D(6)–(7)).
  - `pdpa-sg-consent`: business improvement also covers sharing between related companies, but
    not for marketing.
  - Portability: "never brought into force" → "not yet in force".
  - citation: "Act 26 of 2012, as amended" (also amended 2025 and 2026).
- **Australia:**
  - `pa-au-scope` › plainSummary: the health exception covers small businesses that **provide a
    health service** and hold health information.
  - "State laws" → "state rules, where they exist".
  - Children's consent cell: OAIC guidance presumes capacity at 15+ (**verify first**).
  - Children's code: registration is due 10 Dec 2026, but no commencement date is set.
  - Glossary `personal-data`: IP addresses are not settled personal information in Australia.
- **New Zealand:**
  - `nzpa-correction` › responseTimeline: add the s 48 extension.
  - `individualRights` › `portability` › `nzpa`: "partial" (Customer and Product Data Act 2025,
    open banking from 1 Dec 2025).
- **UK:**
  - `ukgdpr-art15` › gapRemediation.smb: the clock starts at the latest of receipt, ID or fee,
    not "from the day of receipt".
  - `timeBasedObligations` › `dsr-extension` › `ukgdpr`: "complex or numerous requests".
  - `internationalTransfers` › `certification` › `ukgdpr`: no UK transfer certification scheme
    is approved yet (**verify first**).
- **EU GDPR:**
  - `gdpr-art18` › personalImpact: restriction applies only in the four Art 18(1) cases.
  - `gdpr-art20` › plainSummary: portability covers only data you provided, processed by
    automated means on consent or contract.
  - `gdpr-art35`: "evaluation… including profiling", not "profiling" alone.
- **Canada and California:**
  - `sensitiveData` › `financial-account` › `pipeda`: "income records", not "income and
    financial records".
  - `ccpa-right-to-opt-out`: "This requirement has no direct GDPR equivalent" → "The right to opt
    out has no direct GDPR equivalent".
  - The Quebec, Alberta and BC map shapes open the PIPEDA page. This is intentional; consider a
    clearer label.
- **Brazil, Argentina and Uruguay:**
  - `lgpd-art48`: the small-agent exception also excludes national security.
  - `lgpd-art18-deletion` › articleRef: "Article 18, IV and VI".
  - `sccs` › `lgpd`: "required for transfers relying on standard clauses".
  - `non-discrimination`: Argentina is "partial", Uruguay is "no", for the same situation. Align
    them.
- **South Africa and Kenya:**
  - `timeBasedObligations` › `dsr-standard` › `popia`: "correction or deletion outcomes".
  - `sensitiveData` › `genetic` › `popia`: possibly "partial", since the "biometrics" definition
    includes DNA analysis (**verify first**).
  - `kdpa-s43`: notice content is nature, measures, recommended steps, identity of the
    unauthorised person, and contact point. Drop "likely consequences".
- **Glossary:**
  - `ropa`: the exemption-exclusions list omits criminal-conviction data.
  - `legitimate-interests` on the Singapore page: in Singapore it is a consent exception, not a
    legal basis.
- **Popups inside larger terms** (still present): personal-data inside "Sensitive personal
  data", "Special personal information", "personal information handlers / controllers /
  handling business operators" and "personal information protection certification".
  consent-withdrawal inside "Consent manager". `controller-processor` on DPDP pages, where the
  law uses "data fiduciary".
- **Map:**
  - Kosovo is listed in the key but drawn grey (no id).
  - Hong Kong and Macau sit inside China's PIPL shape.

---

## 4. Compliance (site-level)

| ID | Item | Recommendation |
|---|---|---|
| P1 | "Not legal advice" appears only on About. Law pages and Help for Organizations give directive guidance, e.g. "is sufficient", "the minimum". | **DECISION (Jared):** add a short notice in the Help for Organizations panel and on each law page. Soften "sufficient" and "the minimum". |
| P2 | No way to report an error or contact the publisher. The publisher is not named. | **DECISION (Jared):** add a contact or "report an error" address and name the publisher on About. Optionally add an accessibility statement. |
| P3 | Translated news headlines are not labelled. The original title shows only on hover. | Add "Machine-translated headline" to the card's language note. Make the original title keyboard-reachable. |
| P4 | Footer "Last updated" is a fixed string. There are no per-law review dates. | Show "Content last reviewed: <date>" per law from data, or generate the footer date at build time. |
| P5 | No HSTS header. | Add `Strict-Transport-Security: max-age=31536000; includeSubDomains` in `public/_headers`. |
| P6 | Cloudflare's managed robots.txt overrides the repo's own. | **DECISION (Jared):** keep it or turn it off. |
| P7 | Unknown URLs return HTTP 200 (single-page-app fallback). | Optional real 404 handling. |
| P8 | About says "collects nothing about you", but the host processes IP addresses. | Optional: say the host processes IP addresses to serve and protect the site, and link Cloudflare's privacy policy. |

**Verified clean:**
- No cookies, no local or session storage.
- No first-party analytics.
- Self-hosted fonts and maps.
- Strong CSP, Referrer-Policy, X-Frame-Options, Permissions-Policy and nosniff headers.
- HTTPS redirects.
- News links use noopener/noreferrer and have tracking parameters stripped.

---

## 5. Content gaps and calendar

**Gaps** (DECISION D9 from 2026-10-08, still open):
- California's Delete Act and DROP: live since 1 Jan 2026; brokers process deletions every
  45 days from 1 Aug 2026.
- Kenya's ODPC Cross-border Transfer Guidance Notes (8 Sep 2026), with ODPC Standard Clauses.
- China's small-handler Order No. 25 (in force 1 Sep 2026), the Cybersecurity Law amendment
  (1 Jan 2026), the Compliance Audit Measures (1 May 2025), and the facial-recognition measures
  (1 Jun 2025).

**Calendar:**

| Date | Action |
|---|---|
| 1 Dec 2026 | Chile: update the map-only entry to Law 21.719. |
| 10 Dec 2026 | Australia: automated-decision transparency starts. Check the children's code status. |
| 1 Jan 2027 | Add Oklahoma and Louisiana to the map-only US states. California's SB 923, AB 566 and ADMT rules become operative; update the "from 2027" wording. Sri Lanka's core duties start. |
| Jan 2027 | California's CPI adjustment of thresholds and fines is due. |
| 17 Jan 2027 | Japan's 2026 Act penalty increases start. Check whether the ¥100M corporate fine changes (PPC comparison table: https://www.ppc.go.jp/personalinfo/legal/r8kaiseihogohou/). |
| 13 May 2027 | India's DPDP core duties start. Remove the "from 13 May 2027" caveats. |
