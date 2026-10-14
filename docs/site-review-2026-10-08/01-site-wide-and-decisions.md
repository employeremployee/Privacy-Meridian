# 01 — Decisions for Jared, and site-wide problems

These problems affect many pages or every visitor. Do the **decisions** first. Several fixes
below depend on them.

---

## Part A — DECISION NEEDED (Jared)

Do not implement these until Jared chooses. Present the options and wait.

### D1. How the United States appears on the map
- **Now:** `src/data/countryStatus.js` maps the whole US (ISO `840`) to `ccpa`. The legend
  calls every coloured country "Comprehensive law in effect", and `src/data/mapCountries.js`
  labels the picker option "United States (CCPA and CPRA)". A visitor in Texas is told the
  CCPA is their law.
- **Facts:** The US has no federal comprehensive privacy law. The CCPA protects California
  residents only. About 20 states have their own comprehensive laws in force, from vendor
  trackers (secondary). The 110m world map has no state outlines, so California cannot be
  coloured alone.
- **Options:**
  1. Keep the US coloured. Rename the option "United States: California only (CCPA/CPRA)" and
     add a hover or legend note: "No federal law. About 20 states have their own. Shown:
     California."
  2. Give the US its own legend tier, such as "State laws only".
  3. Grey the US and reach California only through the picker.

### D2. India legend wording (decision to keep India coloured is already made)
- Jared decided to keep India coloured (see `CONTENT-REVIEW.md`). Do not reverse that.
- **Conflict:** The legend says "Comprehensive law in effect", but India's core DPDP duties
  start **13 May 2027**. The comment in `src/data/countryStatus.js` lines 7–8 still says "only
  laws that are 100% live are colored. Everything else is grey."
- **Options:** Reword the legend tier, for example "Comprehensive law enacted". Or add a
  per-country "phasing in" note on hover or in the picker. **Either way, update the code
  comment to match the decision.**

### D3. Wording for grey countries (recommended fix; content decision per CLAUDE.md rule 4)
- **Now:** `translation.json` › `legend.none` = "No comprehensive law".
- **Problem:** Grey countries include Canada, Australia, Taiwan, Singapore, Mexico, Turkey,
  Nigeria, Thailand, Israel and Saudi Arabia, which all have data-protection laws. UNCTAD
  counts about 137 of 194 countries with such laws (secondary).
- **Recommended:** "Not covered on this site". Needs Jared's sign-off.

### D4. A "general information, not legal advice" notice
- **Now:** No such notice appears anywhere on the rendered site. The only one is line 30 of
  `LICENSE`, which is not displayed.
- **Decide:** the wording, and where it goes (footer, every law page, or both). The string
  goes in `translation.json`.

### D5. How glossary popups attach to text
- **Now:** `src/utils/tooltipTextMatch.jsx` wraps the **first** case-insensitive match of a
  term's words, whatever they mean in context. This puts wrong definitions on several pages
  (see Part C).
- `CLAUDE.md` (2026-07-02) records that auto-detection was chosen and that rewriting content
  into structured segments was **rejected**. Any change of approach needs Jared.
- **Options:**
  1. **Data-only fix:** remove the bad pairings from each article's `tooltipTerms` and fix
     the definitions. No code change.
  2. **Small code change:** let a `tooltipTerms` entry name the exact phrase to wrap, e.g.
     `{"id": "personal-data", "match": "personal information"}`, or add a `tooltipSkip` list.
  3. **Per-law definitions:** add an optional per-jurisdiction override to glossary terms.
- Option 1 alone fixes every confirmed problem below.

### D6. Legacy routes `/map`, `/topic`, `/regulation/...`
- Still reachable by URL (`src/App.jsx` lines 24–26). They know only 4 of the 14 laws, show
  stale `grid.json` content, and `/map` says "Countries in blue open full legal detail".
  That implies the UK, Switzerland and Japan have no law.
- **Options:** redirect them to `/`, remove them, or bring them up to date.

### D7. "Related Articles" links (cross-references)
- The 9 cross-reference links in the GDPR and PIPL articles navigate away from the map page to
  the legacy `/regulation/...` page. They land at the wrong scroll position and lose the
  visitor's selection (details in file 06, bug B1).
- **Options:** keep visitors on the map page (switch the topic and scroll to the article),
  or remove the links.

### D8. Show the Yes/Partial/No definitions on comparison tables?
- Each comparison JSON has a `states` legend explaining yes, partial and no, but **no
  component renders it**. "Partial" means different things in different tables.
- **Decide** whether to show a short key under each table.

### D9. Content additions (new articles or sentences)
These are real gaps, not errors. Jared decides whether to add them and how much.
- **GDPR has no "Legal Bases" topic.** There is no Article 6 article, though 12 other laws
  have one. It also has no sensitive-data (Art 9) article.
- **California:** Delete Act / DROP (live since 2026).
- **Brazil:** ECA Digital child-safety law (in force 17 Mar 2026).
- **China:** small-handler rules (Order 25, 1 Sep 2026), the Cybersecurity Law amendment
  (1 Jan 2026), compliance-audit measures (1 May 2025), facial-recognition measures
  (1 Jun 2025).
- **Kenya:** ODPC Cross-border Transfer Guidance Notes (Sep 2026).
- **UK:** the PECR changes under the Data (Use and Access) Act 2025 (cookie exemptions; PECR
  fines raised to UK GDPR levels).

### D10. Favicon
`public/favicon.svg` is the default Vite logo from the project template, not a Privacy
Meridian icon. A design decision is needed.

### D11. Draft flags in comparison data
All comparison JSON files carry `"draft": true` and a `draftNote` saying "Not yet verified.
Jared to confirm each cell…". Nothing on screen shows this. Decide whether to clear these
flags once the fixes in files 02–05 are done.

---

## Part B — Site text and map fixes

| ID | File › key | Now | Fix |
|---|---|---|---|
| S1 | `translation.json` › `legend.none` | "No comprehensive law" | See D3. |
| S2 | `translation.json` › `legend.enacted` | "Comprehensive law in effect" | See D1 and D2. |
| S3 | `translation.json` › `footer.lastUpdated` | "Last updated July 2026" | Content changed through October 2026. Update when the fixes ship. |
| S4 | `src/data/countryStatus.js` comment, lines 7–8 | "only laws that are 100% live are colored" | Align with the India decision (D2). |
| S5 | `src/data/mapCountries.js` › `GDPR_COUNTRIES` | Malta and Liechtenstein missing | The picker is a text list, so add **Malta** (EU) and **Liechtenstein** (EEA) even though the map topology lacks them. Typing either now returns "No country matches that name." |
| S6 | `translation.json` unused keys | `legend.developing`, `home.draftBadge`, `languageSelector.label` (parked) | Remove `legend.developing` and `home.draftBadge`. Keep `languageSelector.label` (the selector is parked per CLAUDE.md). `map.instructions` is used only by the legacy map. |
| S7 | Map topology (info only) | Hong Kong and Macau are too small to appear at 110m, so they render as part of China (PIPL). Taiwan is grey. | No action unless D3 changes. Both have their own laws. Low priority. |

---

## Part C — Glossary definitions (`src/data/glossary.json`)

These definitions render in popups. Fix the definition. Where the popup lands on the wrong
meaning, **also** remove the term from that article's `tooltipTerms` (Option 1 in D5).
Popup locations come from a scan of every automatic match (script in file 06).

| Term id | Problem | Correct statement | Shown on |
|---|---|---|---|
| `breach-notification` | **ERROR.** "Organizations must notify both regulators and affected individuals." Not universal. Argentina has no statutory duty. The GDPR notifies individuals only for high risk. Korea's PIPC report has thresholds. | Many laws require notice to a regulator, to affected people, or both. Who must be told, and when, differs by law. **Remove from `pdpa-ar-breach`'s `tooltipTerms`.** | kdpa-scope, lgpd-scope, lpdp-uy-scope, nzpa-breach, **pdpa-ar-breach**, pipa-kr-scope |
| `personal-data` | **ERROR on some pages.** "any information that can identify a living individual." POPIA, Argentina (Law 25.326 art 2, "personas de existencia ideal") and Uruguay (Law 18.331 art 2, "por extensión" to legal persons) also cover legal persons. Under Japan's APPI, IP addresses and cookie IDs alone are generally "personally referable information", not personal information (Baker McKenzie; secondary). | Add a caveat that some laws also cover companies. Or remove the term from POPIA, Argentina, Uruguay and APPI articles. | popia-scope (inside "personal information includes information about existing juristic persons", which directly contradicts it), popia-s11/s22/s23/s24/s72, pdpa-ar-scope/access/rectification, lpdp-uy-scope/rectification/breach, appi-* |
| `data-subject` | **ERROR on some pages.** "any living individual". Same problem as `personal-data`. | Same fix. | popia-*, lpdp-uy-*, plus others where it is fine |
| `legitimate-interests` | **ERROR on `appi-cease-use`.** Matches "the individual's rights or legitimate interests", meaning the person's own interests. The popup gives the GDPR legal basis, which APPI does not have (the site's own legalBases table marks APPI "no"). Also the definition omits the necessity step. Its link is the EDPB **consultation draft** v1.0 (Oct 2024); no final version was found. | **Remove from `appi-cease-use`.** Add the necessity step. Label the link as a consultation draft. | appi-cease-use (wrong); fine on gdpr, ukgdpr-art6 (see note), kdpa-s30, lgpd, pipa-kr-art15, pipl-art13, popia-s11 |
| `sensitive-data` | **ERROR on `ccpa-right-to-limit-spi`.** "Companies need specific legal justification." The same article says the CCPA uses an opt-out ("right to limit"), not a lawful basis. | Add a CCPA caveat, or remove from `ccpa-right-to-limit-spi`. | ccpa-right-to-limit-spi, gdpr-art30, gdpr-art37-39, pipl-art13 |
| `consent-withdrawal` | **ERROR on `fadp-breach`.** It matches "without consent", which there means the notifier's consent to criminal use of a breach notice. **MISLEADING elsewhere:** "must make withdrawing consent as easy as giving it" is a GDPR, UK and LGPD rule (GDPR Art 7(3)). The Swiss FADP, NZ Privacy Act and Japan's APPI have no such rule; the site's own table marks NZ "No formal consent-withdrawal mechanism". | **Remove from `fadp-breach`.** Make the "as easy as giving" sentence law-specific ("Under the GDPR…"), or remove the term from fadp-*, nzpa-ipp1-4 and appi-* articles. | 33 articles. See fadp-breach, fadp-lawfulness, fadp-transfers, nzpa-ipp1-4, appi-purpose, appi-transfers |
| `purpose-limitation` | **MISLEADING on `fadp-lawfulness`.** "can only be used for the reason it was originally collected… requires a new legal basis." GDPR Art 5(1)(b) bars only *incompatible* further processing (Art 6(4)). The FADP has no legal-basis model, as the same article says, and allows compatible processing (Art 6(3)). | Say "a purpose that is not compatible with the original one". Remove the "new legal basis" wording or make it GDPR-specific. | fadp-lawfulness |
| `tia` | **ERROR.** "an analysis a company must complete before sending personal data to a country outside the European Union." It is needed only for Art 46 tools (SCCs, BCRs), not for adequacy transfers (including DPF-certified US recipients) or Art 49 derogations. "EU" should be "EEA". Its link ("EDPB guidelines") lands on the EDPB **Public consultations** page. | Fix the definition. Link to EDPB Recommendations 01/2020 on supplementary measures (v2.0, 18 Jun 2021). Verify the URL. | gdpr-art44-49 |
| `sccs` | **MISLEADING.** "Each jurisdiction has its own equivalent mechanism." The site's own transfers table marks CCPA and DPDP "no". | "Several other laws have their own versions, such as the UK IDTA and Addendum, Brazil's ANPD clauses, China's standard contract, Argentina's model clauses and Kenya's ODPC clauses. Some laws have none." | gdpr-art44-49 |
| `schrems-ii` | **OUTDATED.** It doesn't mention what followed: the EU–US Data Privacy Framework (adequacy decision 10 Jul 2023); the General Court's dismissal of the *Latombe* challenge (T-553/23, 3 Sep 2025), with an appeal (C-703/25 P) pending; and the EDPB's 31 Jul 2026 letter asking the Commission to assess *Trump v. Slaughter* (US Supreme Court, 29 Jun 2026). The DPF remains in force. | Add one or two sentences. Keep it short; the details belong on gdpr-art44-49 (file 02). | gdpr-art44-49 |
| `opt-in-opt-out` | **ERROR.** "GDPR generally requires opt-in consent." Art 6(1) has six lawful bases and consent is one. Opt-in applies where consent is the basis relied on. | Fix the GDPR sentence. | appi-purpose, ccpa-right-to-opt-out, ccpa-right-to-limit-spi |
| `legal-basis` | **MISLEADING.** "Privacy laws require companies to have one before they start." True for GDPR, UK GDPR, LGPD, PIPL, POPIA and Kenya. Not true for CCPA, APPI, NZ, or the Swiss FADP for private actors. The site's own legalBases table says so. | "Many privacy laws require…" | gdpr-art13-14, gdpr-art17, pipl-art44 |
| `service-provider-contractor-third-party` | **ERROR.** "A third party… is not bound by the same contract restrictions." Cal. Civ. Code §1798.100(d) requires a contract with third parties that receive sold or shared data too, with mandatory terms. | Say third parties also need a contract, with different required terms. | ccpa-right-to-delete, ccpa-right-to-correct |
| `ropa` | **MISLEADING.** No mention of the Art 30(5) exemption: organisations under 250 employees are exempt unless processing is likely to risk rights, is not occasional, or includes special-category or criminal data. The hosting article gdpr-art30 states the exemption. | Add one sentence. | gdpr-art30 |
| `dpo-encarregado` | **MINOR.** "a person inside an organization." GDPR Art 37(6) allows a DPO on a service contract, and LGPD allows an external encarregado. On the Uruguay page the popup talks about Brazil. | "a person, inside or outside the organization…". Consider removing from lpdp-uy-scope. | lgpd-scope, lpdp-uy-scope |
| `anpd` | **OUTDATED.** "Autoridade Nacional de Proteção de Dados… Its regulatory guidance is still developing." Since **Law 15.352 of 25 Feb 2026** it is the **Agência Nacional de Proteção de Dados**, a regulatory agency (special-regime autarchy under Law 13.848/2019). It also enforces the ECA Digital child-safety law. | Rename and remove "still developing". | lgpd-scope, lgpd-art7, lgpd-art48, lgpd-art33-36 |
| `data-localization` | **MISLEADING.** "China's privacy law requires this for organizations above certain size thresholds." PIPL Art 40 covers critical information infrastructure operators and handlers reaching **data-volume** amounts set by the CAC, not company size. | Fix wording. | pipl-scope, pipl-art40 |
| `anonymization-pseudonymization` | **OUTDATED (medium-high).** "Pseudonymized data still is [personal data]." The Court of Justice (EDPS v SRB, C-413/23 P, 4 Sep 2025) held that pseudonymised data are personal data for the controller and anyone able to re-identify, but not necessarily for every recipient. | Add the nuance. | lgpd-art18-deletion |
| `gpc` | **MINOR.** "California businesses are legally required to honor…" The duty applies to CCPA-covered businesses that sell or share data, wherever they are located. The link (cppa.ca.gov/regulations/) does not mention GPC. | Fix the wording. Link to https://oag.ca.gov/privacy/ccpa (FAQ says GPC "must be honored by covered businesses"). | ccpa-right-to-opt-out |
| `verifiable-consumer-request` | **MINOR.** "Businesses must verify identity before responding." Opt-out and limit requests must **not** require verification (11 CCR §7026(d), §7027). It only renders on know, delete and correct pages, so the impact is low. | Optional caveat. | ccpa-right-to-know/delete/correct |
| `pia-dpia` | **MINOR.** "DPIA… used specifically in GDPR." India's DPDP Act (s.10) and Kenya's Act also use the term. | Optional. | gdpr-art35 |
| `meaningful-human-involvement` | **DATA/MINOR.** Its `jurisdiction` text calls PIPL Article 24 an "equivalent concept", but Art 24 has no human-involvement standard. The definition itself is fine. | Fix the hidden field. | gdpr-art22 |
| `edpb` | **DATA-ONLY.** "It is the primary source of authoritative GDPR guidance." The Court of Justice is the authoritative interpreter. No article uses this term, so it never renders. | Soften. Low priority. | none |
| `legitimate-interests` / `ropa` (PIPL wording) | **MINOR.** "Not a recognized basis under… PIPL in the same form": PIPL has no such basis at all. "Equivalent records obligations exist under… PIPL": PIPL only requires records for activities needing an impact assessment (Arts 55–56). | Fix if these sentences sit in rendered text. Several may be in the hidden `jurisdiction` field. | — |

**Also stale in hidden glossary `jurisdiction` fields (DATA-ONLY):** `breach-notification`
says "LGPD 2-5 business days" (it is 3 business days) and "CCPA/CPRA without unreasonable
delay" (superseded by SB 446; see file 03). Some entries still say "four v1 jurisdictions".

**Keep an eye on `ukgdpr-art6`.** Its `legitimate-interests` popup is correct today. If you
add "recognised legitimate interests" earlier in that text (file 02 asks for this), the popup
will jump to that phrase and become wrong. Re-run the tooltip scan afterwards.

### Popups landing inside a larger term (MINOR)
`personal-data` wraps words inside larger defined terms:
- "Sensitive personal data" (kdpa-s30)
- "Special personal information" (popia-s11)
- "personal information handling business operators" (appi-scope)
- "personal information controllers" (pipa-kr-scope)
- "personal information handlers" (pipl-art24)

`consent-withdrawal` wraps "consent" inside "consent managers" (dpdp-scope). Fix with D5
options 1 or 2.

---

## Part D — Source links

Real-browser checks show that EUR-Lex, California leginfo, NZ legislation and Kenya Law all
load. Scripted fetches were blocked by bot protection, which is not a site problem.

| ID | Where | Problem | Fix |
|---|---|---|---|
| L1 | `gdpr.json` › `gdpr-art17` and `gdpr-art33-34` › sourceLinks "EDPB guidelines" | Lands on the EDPB **Public consultations** page, confirmed in a real browser. | art33-34: link EDPB Guidelines 9/2022 on personal data breach notification. art17: no general Art 17 guideline exists. Remove the link, or link Guidelines 5/2019 (search engines) with an accurate label. Verify URLs. |
| L2 | `glossary.json` › `tia` › source | Same Public-consultations redirect. | EDPB Recommendations 01/2020 (see Part C). |
| L3 | `gdpr.json` › `gdpr-art21`; `glossary.json` › `legitimate-interests` | "EDPB Guidelines on Legitimate Interest" is the **v1.0 consultation draft**. | Label it "draft for consultation (2024)" or find a final version. |
| L4 | `gdpr.json` › labels "EDPB Transparency Guidelines", "EDPB Guidelines on Data Portability", "EDPB Guidelines on Automated Decision-Making", "EDPB PIA Guidelines" | These are **Article 29 Working Party** documents (WP260, WP242, WP251, WP248) later endorsed by the EDPB. | Relabel, e.g. "Article 29 Working Party guidelines (endorsed by the EDPB)". "PIA" should be "DPIA". |
| L5 | `gdpr.json` › every "Article N: EUR-Lex" link | All go to the whole regulation. | EUR-Lex pages have per-article anchors. Append `#art_13` and so on, confirmed in browser for `art_13`. |
| L6 | `ukgdpr.json` › "UK GDPR Article 6/15/17/33-34/Chapter V: legislation.gov.uk" | All go to `/eur/2016/679`, which opens on the preamble. | Use `/eur/2016/679/article/6`, `/article/15`, `/article/17`, `/article/33`, `/chapter/V`. Article/6, /15 and /17 were confirmed to load. |
| L7 | `fadp.json` › "FADP Article N: fedlex.admin.ch" | Whole act. | Fedlex anchors exist: `https://www.fedlex.admin.ch/eli/cc/2022/491/en#art_25`, `#art_24`, `#art_30`, `#art_16`. The FDPIC link opens in German; use `https://www.edoeb.admin.ch/en`. |
| L8 | `popia.json` › all 5 articles | Label "Protection of Personal Information Act: inforegulator.org.za" but the URL is gov.za. "Government Gazette: gov.za" goes to the gov.za homepage. | Relabel to "…: gov.za". Remove or deep-link the "Government Gazette" link. |
| L9 | `appi.json` › "APPI (English): ppc.go.jp" | Goes to the PPC English **homepage**, not the Act. | Use `https://www.ppc.go.jp/en/legal/`. Verify. |
| L10 | `pipa-kr.json` › "National Law Information Center (law.go.kr)" and "PIPC: pipc.go.kr" | Bare homepages. The PIPC link is a Korean landing page. | Deep-link the Act (law.go.kr/법령/개인정보보호법) or the KLRI English text, which may lag behind the 2026 amendments. Verify. |
| L11 | `nzpa.json` › all legislation links | The old URL `…/2020/0031/latest/LMS23223.html` redirects. | Use `https://www.legislation.govt.nz/act/public/2020/31/en/latest/`. |
| L12 | `ccpa.json` › `ccpa-right-to-know` | Links §1798.100. | Link §1798.110 (see file 03). |
| L13 | `pipl.json` › `pipl-scope` | The same DigiChina URL appears twice under two labels. No links support the 2024–2026 rules the text cites. | De-duplicate. Consider adding CAC links for the 2024 Provisions and later measures. |
| L14 | `lpdp-uy.json` › `lpdp-uy-breach` | Links only the URCDP homepage. | Add Decree 64/020 (`https://www.impo.com.uy/bases/decretos/64-2020`) and Law 19.670. |
| L15 | `glossary.json` › 25 terms with source "IAPP Privacy Glossary" | `https://iapp.org/resources/glossary` redirects to page 1 ("A" terms) of a 672-entry paginated glossary. None of the terms is on that page. | Use term-specific sources, or accept that the link goes to the glossary home. Minor. |
| L16 | `dpdp.json` › meity.gov.in links | In one browser test it redirected to the Hindi-language version of the page. Not confirmed reproducible. | Check again before launch. |
| L17 | `kdpa.json`, `pdpa-ar.json` (AAIP Res 47/2018), `lpdp-uy.json` | Regulator homepages used as sources. | Optional deep links. |

---

## Part E — Comparison-table framing (all 8 tables)

| ID | Problem | Fix |
|---|---|---|
| T1 | The `states` legend (yes/partial/no meanings) is never rendered. See D8. | — |
| T2 | `consentStandards.json` describes the GDPR as an "Opt-in framework" (row `opt-out-model`) and marks GDPR, UK and Kenya "yes" for `opt-in-default` ("where consent is the basis"), while POPIA, with the same structure, gets "partial — not the default". The GDPR is a lawful-basis framework, and legitimate-interest processing runs until the person objects. | Reframe the row as "Consent required when consent is the legal basis", or make the cells consistent. The tables already describe POPIA and Kenya in lawful-basis terms. |
| T3 | `internationalTransfers.json` legend "Available or required" mixes optional mechanisms (SCCs) with burdens (security assessment, localization). | Split the meaning, or add notes. |
| T4 | `grid.json` (legacy `/topic`) puts an "Additional Requirement" badge on cells that describe the **absence** of a requirement: CCPA "No mandatory privacy officer role", CCPA portability, CCPA automated decision-making. | Fix the `differenceType` values, or retire the legacy grid (D6). |
| T5 | Cells that contradict their own row's definition. | Listed per law in files 02–05. |
