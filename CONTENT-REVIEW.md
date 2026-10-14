# Privacy Meridian — Content Review (for Jared's sign-off)

Per-jurisdiction review of the 14 privacy laws: accuracy, amendments, added/removed
sections (#1), plus comparison-grid article citations (#5). Every change below is a
**proposal for your review** — edit or reject any of it before we push live. Sources
are listed so you can verify. Content remains draft until you confirm.

Status legend: ☐ not started · ◐ content pass done · ✅ content + citations done

---

## Japan — APPI ◐

**Headline finding:** our content predates the **2026 APPI amendment** (passed the
Diet 2026-07-10, promulgated 2026-07-17; most provisions phase in via cabinet order
within two years, so they are promulgated-but-not-yet-fully-in-force).

Proposed changes to `appi.json`:
1. **Citation / dates** — note the 2026 amendment alongside the 2020 one, and flag it as phasing in (not yet fully in force).
2. **AI / statistical-processing exemption** — new consent exemption letting businesses collect publicly available sensitive data and share personal data with third parties for statistical processing (incl. AI development), subject to transparency + contractual safeguards. (This is the Asahi/Nikkei "AI開発への個人情報提供、同意不要に" story.) Add to the purpose/legal-bases article.
3. **Children** — parental consent for under-16s, plus enhanced deletion/suspension rights for children. Add to data-subject-rights.
4. **Biometric data** — new "Specific Biometric Personal Information" category (e.g. facial recognition): heightened transparency, expanded deletion rights, and no third-party provision via opt-out. Add to legal-bases / sensitive-data handling.
5. **Administrative fines** — APPI historically had criminal penalties but **no administrative monetary fines**; the 2026 amendment adds them for the first time. Note in scope/enforcement.
6. **Processor relief** — entrusted processors exempt from most general APPI duties where robust contractual safeguards exist.

Approach: present the 2026 changes as "promulgated 2026, phasing in," so the page stays accurate about what is in force today while flagging what is coming.

Sources:
- Baker McKenzie, "Japan: APPI Reform - Key Changes" (2026-05) — https://www.bakermckenzie.com/en/insight/publications/2026/05/japan-appi-reform-key-changes
- Mori Hamada, "Proposed Amendments to Japan's APPI (2026)" — https://www.morihamada.com/en/insights/newsletters/138006
- A&O Shearman, "Amendments to the APPI promulgated" — https://www.aoshearman.com/en/insights/ao-shearman-on-data/amendments-to-the-act-on-the-protection-of-personal-information-promulgated
- Biometric Update, "Japan introduces new rules on biometric data in APPI amendment bill" (2026-04) — https://www.biometricupdate.com/202604/japan-introduces-new-rules-on-biometric-data-in-appi-amendment-bill

---

## India — DPDP Act ◐

**Headline finding:** our content presented the DPDP regime as operational, but it is phased in. The **DPDP Rules were notified 13 November 2025** with **staggered commencement**: the Data Protection Board provisions are in force now, but the **core obligations and rights (Sections 3-17) take effect ~18 months later, around mid-2027.** Until then those duties are not yet enforceable.

Proposed changes to `dpdp.json`:
1. **Scope professionalLayer** — rewrote the implementation sentence to state the Nov 2025 notification, the staggered commencement, and that Sections 3-17 (notice, consent, rights, breach, etc.) are not yet enforceable until ~mid-2027. (Done.)
2. The substantive descriptions (consent + Section 7 legitimate uses, no sensitive-data category, nomination right, no-threshold breach notice, blacklist transfers, 250 crore penalty, consent managers) check out against the Act and need no change.

**Map coloring (resolved 2026):** Jared decided to **keep India blue** with the "phasing in" note, since the Act is effectively law. No map change. (This also sets the precedent: a passed-but-phasing-in law stays colored, with the status noted in content rather than greyed out.)

Sources:
- Press Information Bureau, "DPDP Rules, 2025 Notified" — https://www.pib.gov.in/PressReleasePage.aspx?PRID=2190655&reg=48&lang=2
- Shardul Amarchand Mangaldas, "Enforcement of the DPDP Act and notification of the DPDP rules" — https://www.amsshardul.com/insight/enforcement-of-the-dpdp-act-and-notification-of-the-dpdp-rules/
- India Briefing, "DPDP Rules 2025" — https://www.india-briefing.com/news/dpdp-rules-2025-india-data-protection-law-compliance-40769.html/

---

## California — CCPA/CPRA ◐
**Finding:** the CPPA finalized major new regulations (approved 2025-09-23) on automated decision-making technology (ADMT), risk assessments, and cybersecurity audits. Revisions to existing duties took effect 2026-01-01; the ADMT, risk-assessment, and cybersecurity-audit obligations phase in through 2027. Added a note to `ccpa.json` scope. Rest of content checks out.
Sources: White & Case — https://www.whitecase.com/insight-alert/cppa-finalizes-rules-admt-risk-assessments-and-cybersecurity-audits-requirements ; CPPA — https://cppa.ca.gov/announcements/2025/20250923.html

## China — PIPL ◐
**Finding:** our transfers article described the original strict regime. The CAC *relaxed* cross-border rules via the March 2024 Provisions on Promoting and Regulating Cross-Border Data Flows (higher thresholds, exemptions for trade/HR), and a certification route took effect 2026-01-01. Added a note to the `pipl.json` transfers article. (PIPL source links already swapped to DigiChina in commit c9301b7.)
Sources: Freshfields — https://riskandcompliance.freshfields.com/post/102j3jy/china-introduces-revised-cross-border-data-transfer-rules ; Benesch — https://www.beneschlaw.com/insight/china-officially-promulgates-new-cross-border-data-transfer-requirements/

## EU — GDPR ✅ (reviewed, no content change)
**Finding:** the GDPR itself (Regulation 2016/679) is unchanged and current. A "Digital Omnibus" reform was *proposed* 2025-11-19 (personal-data definition, breach notification single entry point, AI/ML and cookie provisions, record-keeping relief) but is **not adopted** and drew critical EDPB/EDPS opinions. Left current-law content intact; flagging the proposal here as a watch item, not a change. Revisit if/when adopted.
Sources: EDPB/EDPS Joint Opinion 2/2026 — https://www.edpb.europa.eu/news/digital-omnibus-edpb-and-edps-support-simplification-and-competitiveness-while-raising-key_en

## Brazil — LGPD ◐
**Finding:** the ANPD became an autonomous regulatory agency (2025-09-17) and moved into active enforcement with its first significant fines; Brazil's own standard contractual clauses for international transfers took effect in 2025 (grace period ended Aug 2025). Updated the `lgpd.json` scope (it had said the ANPD was "still developing its regulatory guidance").
Sources: Trench Rossi Watanabe — https://www.trenchrossi.com/en/legal-alerts/brazilian-data-protection-authority-becomes-a-regulatory-agency-and-assumes-new-responsibilities-for-the-digital-protection-of-children-and-adolescents/ ; Mayer Brown (Brazil SCCs) — https://www.mayerbrown.com/en/insights/publications/2025/08/end-of-grace-period-implementation-of-brazils-standard-contractual-clauses-in-international-transfers-of-personal-data

---

## United Kingdom — UK GDPR ◐
**Finding:** the Data (Use and Access) Act 2025 is now in force (data-protection provisions commenced Feb 2026). Adds a seventh lawful basis (recognised legitimate interests), replaces Article 22 with new Articles 22A-22D, relaxes some cookie-consent rules, and adds a UK "data bridges" transfer test. Updated `ukgdpr.json` scope (it only vaguely noted divergence).
Sources: ICO — https://ico.org.uk/about-the-ico/what-we-do/legislation-we-cover/data-use-and-access-act-2025/the-data-use-and-access-act-2025-what-does-it-mean-for-organisations/ ; DLA Piper — https://privacymatters.dlapiper.com/2026/02/uk-commencement-of-the-data-protection-provisions-in-the-data-use-and-access-act/

## South Korea — PIPA ◐
**Finding:** added the 2024 enforcement decree (AI automated-decision rules, CPO qualifications), the 2025 data-portability right, and the 2025 amendment (domestic-representative mandate for foreign operators, top fine raised to 10% of total revenue in severe cases). Updated `pipa-kr.json` citation + scope.
Sources: Library of Congress — https://www.loc.gov/item/global-legal-monitor/2025-06-23/south-korea-amended-personal-information-protection-act-expands-individuals-control-over-personal-data/ ; Private AI — https://www.private-ai.com/en/2024/03/18/south-korea-pipa/

## New Zealand — Privacy Act 2020 ◐
**Finding:** added IPP 3A (notice on indirect collection, in force May 2026, via the Privacy Amendment Act 2025) and the Biometric Processing Privacy Code (in force Nov 2025). Updated `nzpa.json` scope.
Sources: IAPP — https://iapp.org/news/a/nz-privacy-amendment-act-broadens-privacy-notification-obligation-to-meet-global-practice ; Nat Law Review — https://natlawreview.com/article/new-zealand-privacy-amendment-act-2025-introduces-new-notification-requirements

## Switzerland — FADP ✅ (reviewed, no change)
Revised FADP in force since 1 Sept 2023; content already current. No material 2024-2026 amendment found.

## Argentina — PDPA (Law 25.326) ✅ (reviewed, no change)
Law 25.326 (2000) remains binding; EU adequacy intact. GDPR-aligned replacement bills are pending in Congress (e.g. 644-S-2025, 1948-D-2025) but none enacted. Our content already states this accurately.
Source: Lexology — https://www.lexology.com/library/detail.aspx?g=d696be0e-4476-4c8c-83f9-6360dd701d70

## Uruguay — LPDP (Law 18.331) ✅ (reviewed, no change)
Law 18.331 (2008), EU adequacy (2012), first non-European ratifier of Convention 108. No material 2024-2025 amendment found; content current.

## South Africa — POPIA ◐
**Finding:** POPIA Regulations amended effective 17 April 2025 — direct-marketing consent now requires a positive opt-in, data-subject-request channels widened with a 30-day response window, and the Information Regulator launched an online breach-reporting portal. Updated `popia.json` scope.
Sources: Bowmans — https://bowmanslaw.com/insights/south-africa-popia-regulations-get-a-makeover-what-you-need-to-know/ ; Alt Advisory — https://altadvisory.africa/2025/04/22/south-africa-info-regulator-issues-new-popia-regulations/

## Kenya — DPA 2019 ◐
**Finding:** noted late-2024 ODPC draft rules (compliance audits, data-sharing code) and the pending Data Protection Amendment Bill 2025 (adds political opinions and trade-union membership to sensitive data, revises penalties), flagged as not yet in force. Updated `kdpa.json` scope.
Source: Digital Policy Alert — https://digitalpolicyalert.org/digest/dpa-digital-digest-kenya

---

## Pass A complete — all 14 laws reviewed ✅

---

## Comparison tables — citations removed (#5, reversed direction) ✅

**Decision (2026-10-05):** We reversed the original #5 plan. Instead of *adding* article
numbers to every comparison cell, we **removed the pinpoint article/section references from
the comparison tables entirely.** The tables are an at-a-glance scanning tool; the pinpoint
precision belongs in the per-jurisdiction article pages, where each article block already
carries its own `articleRef` heading and source links.

Why: a wrong citation on a public legal reference is worse than none, each pinpoint is a
maintenance burden as laws amend, and the detail layer already holds the authoritative
citations (verified live — clicking a Topic-grid cell still opens the full article with its
article number and sources intact).

What changed (9 files in `src/data/comparison/`):
- All 8 Compare-matrix files (`scope`, `individualRights`, `legalBases`, `consentStandards`,
  `sensitiveData`, `internationalTransfers`, `enforcementPenalties`, `timeBasedObligations`)
  and `grid.json`.
- Rule applied: stripped Article/Section/IPP numbers and sub-paragraphs; kept the plain
  explanation; dropped a note that was *only* a citation; kept cross-references to **other**
  laws (e.g. "mirrors the EU GDPR", "Credit Information Act", "ANPD Resolution 15/2024");
  dropped a cell's reference to its own column's law as redundant.
- `grid.json`: stripped the "Article 16:" prefixes from the visible cell text but **kept the
  `articleId` links** that power click-to-expand. Verified the modal still opens the full
  article.
- No component code changed. Build passes; JSON validates.

**LGPD breach-notification timeline — RESOLVED (Oct 2026, confirmed by Jared).**
The breach article's summary already had the correct figure (3 business days + 20-day
supplement, per ANPD Resolution 15/2024), but the gap-remediation guidance and `grid.json`
still carried a stale "2-day + 5-day." All now read 3 business days with a 20-business-day
supplement. Also added, in the LGPD breach detail page: startups and small businesses
(ANPD Resolution 2/2022) get double the deadline, 6 business days, unless they do high-risk
processing. (Verified via ANPD Resolution 15/2024 + 2/2022 and law-firm summaries.)

---

## 2026-10-08 site review: Batch 1 (Oct 2026)

Source: `docs/site-review-2026-10-08/` (file 01, Parts B and C). Approved by Jared 2026-10-14.

**Jared's decisions so far:**
- D1 (US on map): keep the US colored, labelled "California only" with a note. *Not yet built.*
- D2/D3 (legend wording): handle as a separate project that adds all countries with enacted
  privacy laws (e.g. Canada, Singapore, Australia). *Scoping to come.*
- D5 (glossary popups): fix by removing mismatched pairings in the data. No code change.
- D4, D6 to D11, P4: still open.

**Glossary definitions corrected** (`src/data/glossary.json`, rendered in popups):
breach-notification (not every law notifies both regulator and individuals), personal-data and
data-subject (some laws also cover companies; Japan treats cookie IDs alone separately),
legitimate-interests (adds the necessity step; source labelled as the 2024 consultation
draft), sensitive-data (California uses a right to limit), consent-withdrawal ("as easy as
giving" is a GDPR-type rule, not universal), purpose-limitation (compatible use), tia (only
for Art 46 tools, not adequacy; EEA; now links EDPB Recommendations 01/2020 v2.0), sccs (other
laws' versions; some laws have none), schrems-ii (Data Privacy Framework 2023, Latombe
T-553/23 upheld it 3 Sep 2025, appeal C-703/25 P pending, EDPB July 2026 letter on *Trump v.
Slaughter*), opt-in-opt-out (GDPR opt-in only where consent is the basis), legal-basis
("many" laws), service-provider-contractor-third-party (third parties need a contract too),
ropa (Art 30(5) small-organisation exemption), dpo-encarregado (can be external), anpd (now
the Agência Nacional, Law 15.352/2026; enforces ECA Digital), data-localization (data
volume, not company size), anonymization-pseudonymization (EDPS v SRB, C-413/23 P, 4 Sep
2025), gpc (covered businesses anywhere; links the California AG CCPA page), verifiable-
consumer-request (opt-out and limit requests need no verification), pia-dpia (Kenya and India
use DPIA too). Hidden fields also fixed: stale "v1 jurisdictions" wording, LGPD "2-5 days",
PIPL wording, meaningful-human-involvement, edpb.

Facts checked before editing: Latombe judgment and appeal (EUR-Lex OJ notice C/2025/6610),
EDPS v SRB, EDPB Recommendations 01/2020 v2.0 (PDF opened), California AG CCPA page (opened
in a real browser; mentions the global privacy control).

**Popups removed where they landed on the wrong meaning** (D5): breach-notification on
pdpa-ar-breach, legitimate-interests on appi-cease-use, consent-withdrawal on fadp-breach,
dpo-encarregado on lpdp-uy-scope. Tooltip scan before and after: only these 4 changed.

**Site text and map data:** Malta and Liechtenstein added to the country picker (both open
the GDPR page). Unused text keys `legend.developing` and `home.draftBadge` removed.

**Not yet done from Part C (minor):** popups that sit inside a longer defined term (e.g.
"personal data" inside "Sensitive personal data" on kdpa-s30). The dormant non-English
glossary translations were not updated; they are not shown while the site is English-only.

## 2026-10-08 site review: Batch 2, source links (Oct 2026)

Source: file 01, Part D. Every new or changed URL was opened in a real browser and checked
against its label before editing.

- **GDPR:** every "Article N: EUR-Lex" link now jumps to that article (`#art_N`; all 16
  anchors confirmed). Breach article links EDPB Guidelines 9/2022. The erasure article's EDPB
  link is removed (no general erasure guideline exists; it landed on Public consultations).
  The four WP29 documents are relabelled "Article 29 Working Party guidelines on … (endorsed
  by the EDPB)", with "PIA" corrected to "DPIAs". The legitimate-interest link is labelled as
  the 2024 consultation draft. The glossary's automated-decision source matches.
- **UK GDPR:** Article 6, 15, 17 and 33 links and the Chapter V link open those provisions
  instead of the preamble.
- **Switzerland:** Fedlex links jump to Arts 16, 24, 25 and 30. FDPIC links open the English
  site.
- **South Africa:** the Act link is labelled gov.za (was inforegulator). The gov.za homepage
  "Government Gazette" link is removed.
- **Japan:** APPI links open the PPC "Laws and Policies" page, not the homepage.
- **South Korea:** the Act link opens the official Korean text on law.go.kr. PIPC links open
  the PIPC English site.
- **New Zealand:** legislation links use the new URL (the old one redirected).
- **California:** the right-to-know article now cites Sections 1798.110 and 1798.115 and
  links §1798.110 (file 03, CA-S3).
- **China:** removed the duplicate DigiChina link on the overview.
- **Uruguay:** breach article now links Decree 64/020 and Law 19.670 Arts 37 to 40 (a 2018
  budget law whose Arts 37 to 40 cover data protection).

**Open, needs Jared:** India's MeitY link redirects, after a few seconds, to the Hindi-script
domain, and that page no longer shows the DPDP Act (issue L16 reproduced). The Act's official
home, India Code (indiacode.nic.in, handle 22037), blocked the test browser with an edge
error, so it could not be verified. Link left unchanged.

**Not changed:** the 25 glossary "IAPP Privacy Glossary" links (minor, L15), and the optional
regulator deep links in L17.

**India link resolved (L16):** India Code moved to `indiacode.gov.in` (found by Jared). All 5
DPDP links now open the Act's page there (`/act/c058fa9f-…`), which lists all 44 sections,
the 2025 Rules and gazette notifications. Opened and confirmed in a real browser.

## 2026-10-08 site review: Batch 3, decisions D1, D6, D7, D8 (Oct 2026)

- **D1 (US):** picker option is now "United States (California only)"; typing "California"
  finds it. A note under the map key reads "United States: no federal privacy law. The map
  shows California's law."
- **D6 (old routes):** `/map`, `/topic/...` and `/regulation/...` redirect to the home map.
  Their code (15 components and pages) and the legacy `grid.json` were deleted. This makes
  every `grid.json` item in files 01 to 05 moot (e.g. T4 badges, CCPA and LGPD grid cells).
- **D7 (Related Articles):** the 9 links in GDPR and PIPL articles stay on the map page. A
  click scrolls to the related article and moves keyboard focus to it (respects reduced
  motion). Fixes bug B1 in file 06.
- **D8 (table key):** the five Yes/Partial/No tables show "What the answers mean" under the
  table, using each table's own definitions. Value tables (scope, timelines, enforcement) have
  no key.
- Build passes; lint is now fully clean (the old ModeContext warning went with the deleted
  code). Bundle about 14 KB smaller. Checked in the browser: redirects, picker, related-article
  scroll and focus, table key, US note, no console errors.

## 2026-10-08 site review: Batch 4, decisions D4, P4, D11 (Oct 2026)

- **D4 (legal notice):** footer on every page now says "Privacy Meridian explains privacy laws
  in plain language. It is general information, not legal advice."
- **P4 (privacy note):** footer also says "This site collects nothing about you. No cookies,
  no trackers, no analytics." (True today: the review found zero outside requests, no cookies
  and no browser storage.) **Keep it true:** when moving to Cloudflare Pages, leave Web
  Analytics, Zaraz and similar features off (file 06, P2).
- **D11 (draft flags):** removed the hidden `draft`/`draftNote` flags from all 8 comparison
  files and the 10 newer law files. Nothing on screen changes.
- **D10 (favicon):** done. Jared chose design "E2": a tilted compass with a light blue rim, a red north needle (Compass Red #B23A3A, approved for the favicon only), a white north notch and a soft shadow (14% opacity, offset reduced by a third). Recorded in CLAUDE.md design rules.

## 2026-10-08 site review: Batch 5, Europe (Oct 2026)

Method: three research agents independently re-checked every file-02 item against primary
sources (EUR-Lex, CJEU judgments, the EDPB letter, Fedlex in German and French,
legislation.gov.uk). Edits were then written in the house voice. `grid.json` items skipped
(file deleted).

### EU GDPR (all items CONFIRMED by the verifier)
- **Transfers (Arts 44-49):** says "out of the European Economic Area". Adds that the GDPR has
  applied in Norway, Iceland and Liechtenstein since July 2018 (EEA Decision 154/2018). Data
  Privacy Framework: adequacy for certified US recipients (Decision 2023/1795). Upheld by the
  General Court in *Latombe* (T-553/23, 3 Sep 2025); appeal C-703/25 P pending. *Trump v.
  Slaughter* (29 Jun 2026) and the EDPB's 31 Jul 2026 request that the Commission assess it.
  The framework remains in force. "Transfer Impact Assessment" is now described as the check
  Schrems II required, not a term from the judgment.
- **Access (Art 15):** must name actual recipients (C-154/21, 2023). Adds Art 15(1)(h) and the
  duty to explain the procedure and principles actually applied (C-203/22, 2025).
- **Automated decisions (Art 22):** a general prohibition (SCHUFA, C-634/21). The three
  conditions are now listed correctly. Human intervention and contest rights attach to the
  contract and consent exceptions; laws authorising decisions must set their own safeguards.
  "Entitled to human involvement before it stands" removed.
- **Breach (Arts 33-34):** the 72-hour duty now carries its exception everywhere. Adds "where
  feasible", reasons for delay, the contact-point item, documenting every breach, and the
  Art 34(3) exceptions.
- **Transparency (Arts 13-14):** foundation of transparency, not consent. Art 14 timing
  (reasonable period, one month, earlier on first communication or disclosure).
- **Rectification (Art 16):** "without undue delay"; Art 19 qualifier added.
- **Erasure (Art 17):** all five Art 17(3) exemptions; Art 21(2) marketing objection ground.
- **Objection (Art 21):** "particular situation" condition; no "immediate" deadline (one
  month, Art 12(3)); notice "clearly and separately, at the latest" at first communication.
- **Records (Art 30):** exemption also lifts for criminal data; records go to regulators, not
  individuals.
- **DPIA (Art 35):** the three Art 35(3) mandatory cases; each authority publishes its own list.
- **DPO (Arts 37-39):** courts exception, "regular and systematic", core activities, criminal
  data, national rules (Germany: 20+ people constantly doing automated processing).
- **Tables:** scope says "people in the EU", not residents. Consent rows: GDPR is a
  lawful-basis framework (opt-out row now "partial"); consent per purpose is "yes". Children:
  16, or a national age of at least 13. Public data: exemption applies only to special
  categories. Enforcement: national authorities enforce; the EDPB settles disputes.
- Hidden data: authority now "national supervisory authorities"; LGPD flag now 3 days.
- Tooltip scan before/after: all popups still land on the right words.
- **Log correction (file 07):** the earlier note "EU GDPR reviewed, no content change" was
  incomplete. The law hadn't changed, but the site text had the errors above.

### Switzerland FADP (all items CONFIRMED; wording checked in the official German text)
- **Fines (overview + tables):** CHF 250,000 fines need intent. Most offences are prosecuted
  only on complaint. A business can be fined up to CHF 50,000 where finding the responsible
  person is disproportionate (Art 64). Cantonal authorities prosecute and fine; the FDPIC
  investigates and orders but cannot fine (Art 65).
- **Natural persons:** removed the error "Unlike GDPR, the FADP protects only natural
  persons." The GDPR also covers only natural persons; the contrast is with the old Swiss law.
  (New issue found by the verifier.)
- **Scope:** cantonal and communal bodies follow cantonal law.
- **Lawfulness:** consent is not required just to process sensitive data. Explicit consent is
  needed only where consent is relied on. Disclosing sensitive data to third parties added as
  a personality violation (Art 30(2)(c)). Principles list adds recognizability and storage
  limitation.
- **Access:** misuse limits are now statutory (Art 26(1)(c)), not just case law.
- **Breach:** individuals are told where needed or where the FDPIC asks; notice can be limited
  or replaced by a public announcement; FDPIC may forward reports to the Federal Office for
  Cybersecurity with consent (since Apr 2025).
- **Transfers:** BCRs approved by the FDPIC; codes and certification; US adequate for
  Swiss-US DPF organisations since Sep 2024.
- **Tables:** contract and credit checks are listed overriding interests; public interest can
  justify private processing ("yes"); no opt-in default ("no", matching NZ); explicit consent
  only where relied on; withdrawal "partial"; restriction = marking as disputed; EU SCCs with
  Swiss adaptations; BCRs "yes"; consent transfer "partial" (matching GDPR/UK); 30-day
  extension rule; FDPIC can request individual notice; record-keeping exemption under 250
  employees.
- Tooltip scan: no popup moved.
- **Log correction (file 07):** the earlier "Switzerland reviewed, no change" was wrong.

### UK GDPR (all items CONFIRMED against legislation.gov.uk and EUR-Lex)
- **Regulator:** since 30 Sep 2026 the **Information Commission** enforces the law (DUAA
  ss.118-119; SI 2026/1015). Updated on the overview, breach article and enforcement table.
- **Seven lawful bases:** fixed the self-contradiction ("same six" vs "a seventh").
  Recognised legitimate interests (Art 6(1)(ea), from 5 Feb 2026) need **no** balancing test
  but must meet an Annex 1 condition; public authorities can't use (ea) or (f) for their tasks.
- **Access:** reasonable and proportionate search (from 1 Jan 2024); the one-month clock starts
  at the latest of request, ID or fee; for access requests only, it pauses while awaiting
  clarification (Art 12A, from 5 Feb 2026); complaints process with 30-day acknowledgement (from
  19 Jun 2026). Verifier corrected the review: the clarification pause is access-only.
- **Automated decisions (table):** now "partial". Banned only with special category data or
  recognised legitimate interests; otherwise allowed with safeguards (Arts 22A-22D).
- **Transfers:** EU adequacy for the UK renewed 19 Dec 2025, valid to 27 Dec 2031. UK-US data
  bridge (Oct 2023). New approvals use the "data protection test" (not materially lower).
- **Scope:** people *in* the UK, not residents; UK establishment counts wherever processing
  happens. "Assimilated" law (not "retained"). Citation now notes the 2025 Act.
- **Erasure:** adds the children's online services ground, direct-marketing objection, the
  2026 malicious-allegation ground (England and Wales), and missing refusal grounds.
- **Breach:** report unless unlikely to be a risk (was "serious breaches").
- **Unverified claims resolved:** removed "employment requests dominate"; replaced "priority
  enforcement area" and "most exercised right" with supported wording; lawful-basis record
  wording now matches the regulator's guidance; backups claim kept (supported).
- **Tables:** consent per purpose "yes"; lawful-basis framing; children's age is 13 in Art 8,
  now changeable by ministers up to 16; legitimate interests note; public data; response time.
- Tooltip scan: identical popups before and after (the Art 6 popup stays on the right words).
- **Not done (waits for D9 UK/PECR content):** PECR fines now reach UK GDPR levels (DUAA
  s.115, Sch 13, from 5 Feb 2026). The exact tier split needs a full read of the substituted
  s.157(2) before it goes on the site.

## Batch 6: Americas (review file 03), 2026-10-14

Method as batch 5: one read-only verifier agent per law, checked against statute and
regulator texts, then edits, tooltip scan, build, browser check, one commit per law.
grid.json items are moot (file deleted in batch 3).

### California CCPA/CPRA (items CONFIRMED against Civ. Code and 11 CCR, eff. 1 Jan 2026)
- **Household data (error):** the right-to-know duties do **not** apply to household data
  (s.1798.145(p)). Removed the opposite claim; households still count toward 100,000.
- **Deletion:** eight exceptions, not nine. The right covers data collected *from* the
  consumer now; SB 923 (Ch. 482, 2026) extends it to data collected *about* them from
  1 Jan 2027, with a suppression record and a web form for online-only businesses. Added the
  disproportionate-effort excuse for third-party notice.
- **Consent (table):** sensitive data needs no consent. Consent applies only to sale/sharing of
  under-16s, resuming after an opt-out, and financial incentives. AB 1542 was vetoed.
- **Figures:** revenue threshold $26,625,000; fines $2,663 / $7,988; breach damages $107-$799
  (CPPA CPI adjustment, 1 Jan 2025). Next adjustment due Jan 2027.
- **Phase-in:** risk assessments from 2026 (pre-2026 processing by 31 Dec 2027, submissions by
  1 Apr 2028); ADMT from 1 Jan 2027 (table now names the opt-out and access rights); audit
  certifications 1 Apr 2028 to 1 Apr 2030.
- **Scope:** non-profits can be covered as affiliates of a covered business; joint ventures and
  voluntary certifiers covered; must "do business in California". Agency is now
  **CalPrivacy** (public name since Nov 2025).
- **Opt-out:** no sale or sharing until the consumer consents; the 12 months only limits when
  the business may ask. Signal-processed status required since 2026; AB 566 browser signal
  from 1 Jan 2027. Links not required if signals are honoured as the rules allow.
- **Sensitive data:** full statutory list (adds IDs, citizenship, philosophical beliefs, mail
  contents, neural data, sex life); right starts once you ask; inferring-characteristics carve-out.
- **Other:** lookback is "impossible or disproportionate effort", not "technically feasible";
  financial incentives need opt-in consent and value-related pricing; correction is "yes" in the
  table; GDPR recipient notice is Art 19 (not 16); removed internal "v1" wording.
- **Breach cells:** California's breach law (Civ. Code s.1798.82, SB 446): 30 calendar days to
  residents; AG sample notice within 15 days if over 500 residents.
- **Deferred to D9:** Delete Act / DROP (AB 883 shortens 45 days to 30, Ch. 507, 2026).
- Secondary-only: SB 446 signing date; 1 Jan 2027 operative dates (statutory default).
- Tooltip scan: identical popups before and after.

### Brazil LGPD (items CONFIRMED against the compiled LGPD on planalto and ANPD resolutions)
- **Public sector (error):** removed "Unlike GDPR, LGPD applies to public bodies". GDPR does too.
- **Transfers (error):** Art 33 has nine grounds, not seven. ANPD standard clauses came in
  Res. 19/2024 (Aug 2024; contracts had until Aug 2025). First adequacy decision is Res.
  32/2026 (26 Jan 2026) for the EU and EEA; the EU recognised Brazil the same day
  (Decision (EU) 2026/179). Table: adequacy, SCCs and global corporate rules now "yes".
- **Deadlines (error):** a simplified access reply is due immediately, the complete one within
  15 days (Art 19). Other Art 18 rights need an immediate reply or reasons; the law leaves a
  fixed deadline to a future ANPD rule (Art 18 s.5). Small agents get double time unless
  high-risk (Res. 2/2022). Table: "Immediately, or 15 days"; extension cell fixed.
- **ANPD:** Law 15.352 (25 Feb 2026) made it the Agência Nacional de Proteção de Dados.
  **Verifier corrected the review:** the ANPD did issue a large fine, R$153.7 million against
  TikTok over children's data (DOU 25 Aug 2026, appealable). The page now says this instead of
  "first significant fines in 2025".
- **Legitimate interests:** the ANPD guide exists (Feb 2024). Removed "narrower than GDPR" and
  "guidance still developing". Table now "yes". Credit protection no longer "unique".
- **Children:** parental consent (Art 14) and the ECA Digital (Law 15.211/2025, in force
  17 Mar 2026: age checks, guardian-linked accounts, no ad profiling) added to two table cells.
- **Rights table:** automated decisions "partial" (request review only; human review vetoed);
  objection "partial" (only unlawful processing without consent); non-discrimination note
  now states Art 21's rule.
- **Other:** official name "Lei Geral de Proteção de Dados Pessoais"; deletion page adds
  Art 18 VI and the duty to tell recipients; impact reports are on ANPD request, not general;
  breach page adds the 40-day supplement for small agents and the integrity exception; the
  stale "2 days / 5 days" flag and PIPL's "LGPD 2-5 business days" now say 3 business days.
- **Softened:** CPF leak no longer says "hundreds of millions" (only secondary sources).
- Not changed: portability cell (no ANPD rule found, but absence not provable); planalto links
  still point at the original text rather than the compiled one (editorial, optional).
- Tooltip scan: identical popups before and after.

### Argentina Law 25.326 (items CONFIRMED against infoleg, Decree 1558/2001 and AAIP resolutions)
- **Year (error):** three table notes said "the 1998 law". It is from 2000.
- **Transfers:** Art 12 exceptions now listed correctly (medical data for treatment or
  epidemiological research, not "medical emergencies"; intelligence cooperation added).
  Consent comes from Decree 1558/2001 (express consent), not the law; decree link added.
  Binding corporate rules: AAIP Res. 159/2018 guidelines; table now "yes".
- **Scope:** EU adequacy kept in the Commission's Jan 2024 review; 108+ ratified Apr 2023.
  Reform bill 3397-D-2026 is early-stage; "not yet enacted" stays accurate.
- **Tables:** automated decisions "partial" (Art 20 bars court and government decisions resting
  solely on profiling; AAIP Res. 4/2019 adds an explanation right); genetic data sensitive under
  Res. 255/2022 when identifying plus health or discrimination risk; sensitive data "partial"
  (no statutory consent route); withdrawal "partial"; children follow maturity, not "best
  interest" (Res. 4/2019); fines ARS 100,000 per fine, ARS 50M stacked cap (Art 31, Res. 126/2024).
- **Breach:** guidance recommends reporting to the AAIP (Res. 47/2018); notifying individuals
  appears only as an inspection item (Res. 332/2020). Removed "prompt notice to affected people".
- **Consent page:** exceptions include scientific relationships and legal obligations.
- **Open (not changed):** `individualRights` non-discrimination "General good-faith principle":
  the verifier found no source for or against. Needs Jared's call.
- Secondary-only: Convention 108 accession year (not stated on the page).
- Tooltip scan: identical popups before and after.
