# Privacy Meridian: Content Review Log

Log of content reviews and corrections, newest at the bottom. Every change was checked
against official sources before publishing.

Status legend for the first review pass below: ☐ not started · ◐ content pass done ·
✅ content and citations done

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

### Uruguay Law 18.331 (items CONFIRMED against impo.com.uy texts)
- **Automated decisions (error):** table now "yes". Art 16 (Law 18.719) gives a right not to
  face significant decisions based solely on automated evaluation, and to learn the criteria.
- **Breach (error):** individuals must be told **immediately** (Law 19.670 Art 38); the
  72 hours applies to the URCDP only (Decree 64/020 Art 4). Containment starts within 24 hours
  (Art 3); the post-incident report to the URCDP is mandatory.
- **Consent page:** reference now "Articles 9 and 18" (express written consent for sensitive
  data is Art 18). Table sensitive-data note adds "written".
- **Scope:** Law 19.670 Art 37 grounds (offering goods or services, analysing behaviour,
  contract or international law, means in Uruguay), in the page and two table cells. Duties
  come from Law 19.670, implemented by Decree 64/020. **Verifier corrected the review:** the
  35,000-person DPO threshold is Decree 64/020 Art 10 (not Art 14), and impact assessment is
  Law 18.331 Art 12 as rewritten by Law 19.670 Art 39.
- **Convention 108:** Uruguay *acceded* (not ratified) in 2013, the first non-European state;
  ratified 108+ in 2021 (Council of Europe releases, found via search).
- **Transfers:** clause-based transfers need prior URCDP authorisation (Art 23, Decree 414/009
  Arts 34-35); the resolutions *recommend* model clauses (latest: CoE 108+ clauses, Res.
  8/026). Exceptions list fixed (medical data for treatment, not "health emergencies").
  Table: SCC note and pre-approval row ("partial") updated.
- **Sensitive data:** biometric defined in law with a prior impact assessment (Law 19.924,
  Art 18-BIS), not sensitive; genetic not listed (now "no").
- **Other tables:** fines capped at 500,000 UI by law (Art 35); contested data is flagged as
  under review, blocking applies to marketing lists.
- **Open (not changed):** children (two cells), intra-group rules and non-discrimination
  cells: the verifier found no source for or against. Needs Jared's call. The
  `effectiveDate` 2008-08-11 is the promulgation date (published 18 Aug 2008); data only.
- Tooltip scan: same 262 popups (one dropped "processing" popup restored).

### File 07 log corrections applied (Americas)
- California: phase-in runs to 1 Apr 2030, not "through 2027".
- Brazil: ANPD status is Law 15.352 (25 Feb 2026); SCCs took effect Aug 2024; the "first
  significant fines" claim was unsupported in 2025 but a R$153.7M fine followed in Aug 2026.
- Argentina and Uruguay: the earlier "reviewed, no change" entries were wrong (see above).

## Batch 7: Asia-Pacific and Africa (review files 04 and 05), 2026-10-15

Same method as batches 5 and 6: one read-only verifier agent per law, then edits, tooltip
scan, build, browser check, one commit per law. grid.json items are moot.

### New Zealand Privacy Act 2020 (items CONFIRMED via OPC reproductions of the Act)
- **Access (error):** IPP 6 is a court-enforceable legal right only against public sector
  agencies (s 31). With private agencies the routes are a complaint, an access direction and
  the Human Rights Review Tribunal. Added the s 48 extension grounds (large, consultation, complex).
- **Fourteen principles, not thirteen:** IPP 3A (indirect-collection notice) has applied since
  1 May 2026, not to information collected before then. The collection page now covers it.
- **Transfers:** "expressly" applies to being told, not to authorising; added the
  "carries on business in NZ and subject to the Act" route. Table: prescribed-country list
  mechanism exists; binding schemes "partial"; individual authorisation "yes" (consistent with
  other laws that list consent as a route).
- **Tables:** children's data "partial" (IPP 4 care for children); genetic "partial" (Health
  Information Privacy Code covers test results, secondary copy only); extension grounds.
- **Other:** "Māori" spelling; Biometric Processing Privacy Code dates (new processing from
  3 Nov 2025, existing from 3 Aug 2026); removed "distinctive New Zealand feature" (Australia
  has the same statement-of-correction rule); old legislation.govt.nz header URL replaced.
- **Popup removed on purpose (D5):** the GDPR-style consent-withdrawal popup no longer
  attaches to the NZ collection page.
- Not changed: NZ$10,000 offence cap is still correct (no penalty reform enacted).
  Open consistency nit: `easy-withdrawal` is "partial" while its note says "no mechanism".

### India DPDP Act 2023 (items CONFIRMED against the Act and the gazetted DPDP Rules 2025)
- **Commencement (the main fix):** most duties are not in force yet. Rule 1 sets three phases:
  Board set-up on notification (13 Nov 2025); consent manager registration from 13 Nov 2026;
  everything else (notice, consent, rights, breach, children, transfers, Board powers,
  penalties) from **13 May 2027**. The overview now gives exact dates, and every affected page
  and table cell says "from 13 May 2027". The Board had no members as of 12 Aug 2026 (Lok
  Sabha answer). Until 2027, IT Act s.43A rules and CERT-In 6-hour reporting still apply.
- **Deadlines:** rights requests within a reasonable period of no more than 90 days (Rule
  14(3)), with no extension. Breach: Board without delay, detailed report within 72 hours.
- **Penalties:** added ₹200 crore for failing to notify a breach; removed "per instance".
- **Children:** exemptions for classes (healthcare, schools) and purposes (safety); guardian
  consent also covers people with disabilities.
- **Tables:** legal obligation "partial" (only State disclosures and court orders); contract
  note fixed; public data is outside the Act's scope; sensitive-consent "no"; localization note
  now describes Rule 13(4); size threshold describes the s.17(3) exemption power, not "lighter
  duties"; Board and private-action notes carry the 2027 start.
- **Other:** "first dedicated rules" now "first comprehensive rules" (2011 rules came first);
  transfers add Rule 15 (government orders on foreign-state access).
- Secondary-only: section-level commencement notice (G.S.R. 843(E)); no Board appointment
  after Aug 2026. Not added: a reported Oct 2026 Removal of Difficulties Order (not checked
  against the Gazette).
- Tooltip scan: identical popups before and after.

### Kenya Data Protection Act 2019 (items CONFIRMED against the Act and 2021 Regulations)
- **Errors fixed:** individuals are told "within a reasonably practical period", in writing (not
  "without undue delay"); no general extension exists, only for portability; localization
  covers six listed public-interest purposes (reg 26), not "sensitive categories" or payments;
  first ODPC penalty was Oppo Kenya, KES 5M, December 2022 (not 2023).
- **Deadlines:** access 7 days; restriction, objection, correction and deletion 14 days;
  portability 30 days (General Regulations 2021). The page no longer says "confirm before relying".
- **Transfers page:** now Sections 48-50. Necessity grounds are in s.48, s.49 is sensitive data
  only (consent plus safeguards), s.50 localization (strategic interests or revenue). Binding
  corporate rules recognised since 2021, with ODPC approval (table "yes").
- **Sensitive data:** political opinion is NOT listed (table "no"); property details are
  (financial row "partial"); children's data "partial" (s.33 parental consent, not sensitive);
  sensitive processing grounds in ss.45-46 don't include consent (table "partial").
- **Other:** restriction is a standalone right (table "yes"); research ground added to s.30;
  breach page adds the encryption exception and investigation delay; registration threshold is
  turnover and staff, not volume; the 2025 amendment is a draft proposal, not a tabled Bill.
- **Removed:** "late 2024 proposed rules... not in force" (the Data Sharing Code 2025 is now
  cited by the ODPC as existing; status unconfirmed, so the sentence was dropped).
- **Deferred to D9:** ODPC 2026 cross-border transfer guidance (verified: standard clauses,
  BCR approval, offshore cloud counts as a transfer).
- Tooltip scan: identical popups before and after.

### South Africa POPIA (items CONFIRMED against Act 4 of 2013 and the 2025 Regulations)
- **Errors fixed:** "Uniquely protects companies" removed (Argentina and Uruguay do too);
  transfers of special or children's data to non-adequate countries need the Regulator's prior
  authorisation (s.57(1)(d)), now on the page and in the table ("partial"); restriction has
  four grounds (s.14(6)), and objection is not one of them.
- **Penalties:** offences carry a fine, up to 10 years, **or both** (not "as an alternative");
  the R10M is an administrative fine via infringement notice (s.109). Tiered note fixed.
- **2025 Regulations:** the 30 days is for written notice of a correction or deletion outcome
  (reg 3.6), not a response deadline. Opt-out is not consent for direct marketing, but the
  existing-customer route remains. Access requests stay "within a reasonable time"; PAIA's
  30-day periods do not apply (s.25 imports only PAIA's form rules).
- **Breach portal:** mandatory since 1 April 2025 by Regulator statement (verifier corrected
  the review: not by the amended Regulations).
- **Tables:** BCRs "yes" (named in s.72); no model clauses; consent opt-in "yes" (consistency
  with GDPR and Kenya, review item T2); withdrawal "partial"; genetic "no" (not listed);
  deletion grounds widened; individuals can be responsible parties.
- **Other:** access includes who has had the data; recipients told of changes that affect
  decisions; prior-authorisation triggers listed accurately.
- Tooltip scan: identical popups before and after.

### South Korea PIPA (items CONFIRMED against the Act and Enforcement Decree, current to 11 Sep 2026)
- **2026 amendment (Act No. 21445, in force 11 Sep 2026):** top surcharge 10% of total revenue
  for repeat, 10-million-plus or order-defying violations (normally 3%); business owner is the
  final responsible person; notice of possible leaks. Citation now lists 2026.
- **2025 amendment corrected:** it tightened the domestic-agent rule (use the Korean subsidiary
  where one exists); the agent duty itself is older. It did not raise fines.
- **Breach:** individuals within 72 hours (Decree Art 39), not "without delay"; possible leaks
  covered since Sep 2026.
- **Errors fixed:** the justifiable-interest basis dates from 2011, not 2023; controllers tell
  the body that *gave* them the data of corrections (no duty to notify downstream recipients).
- **Transfers:** PIPC recognised the EU (Sep 2025), table "yes"; certification is a full route
  ("yes"); no standard-clause route ("no").
- **Tables:** extension is access postponement only; portability phasing in (large companies
  from 20 Feb 2027, date from a law.go.kr mirror); private action describes reversed burden,
  5x damages and statutory damages; consent note reflects seven bases.
- **Other:** urgent public-safety basis added; resident registration numbers cannot rest on
  consent; scope paragraph semicolon removed; EU adequacy now mutual.
- Not added: AI-development exception (passed Aug 2026, not yet in force); claimed ISMS-P 2027
  mandate (not found in PIPA).
- Tooltip scan: identical popups before and after.

### Japan APPI (items CONFIRMED against the APPI, PPC Rules and the 2026 amending Act)
- **2026 amendment status:** passed the Diet 10 Jul 2026, promulgated 17 Jul 2026, **not yet
  in force**. The main body starts on a cabinet-order date, by 16 Jul 2028 at the latest (no
  order yet). Only the criminal-penalty changes start earlier, on 17 Jan 2027. "Phasing in"
  replaced everywhere; citation updated.
- **Surcharge:** equal to gains from listed violations (e.g. unlawful third-party provision),
  not a general "first administrative fine". Processor change described accurately (direct
  scope duty, conditional exemption), not "relief".
- **Breach:** the trigger is a leak possibly caused by a wrongful-purpose act (e.g. a
  cyberattack); final report 30 days, or 60 for those cases (Rules Arts 7-8). Table updated.
- **Children:** PPC Q&A says guardian consent for roughly 12 to 15 and under, not "under 15".
- **Tables:** the ¥100M is a criminal fine on corporations (order defiance or database
  misuse); consent "partial" (needed only to exceed purpose, for sensitive data, third-party
  provision); international certification "partial" (Rules Art 16); court claims for
  disclosure, correction and cessation added to private action.
- **Other:** special care-required list now "including" disability, health-check and genetic results.
- Tooltip scan: identical popups before and after.

### China PIPL (items CONFIRMED against the PIPL on cac.gov.cn and CAC measures)
- **Deadlines (error):** PIPL sets no day count; requests must be accepted and handled
  promptly (Arts 45-46, Network Data Regulations Art 23). The "15 working days" came from 2019
  app rules for some correction and deletion requests only. Removed from three pages and the table.
- **Deletion (error):** Art 47 has six grounds (adds "stops providing the service"); it says
  nothing about entrusted parties or backups. Where deletion is not yet possible, stop all
  processing except storage and security. Processors return or delete under Art 21.
- **Legal bases:** seven, not six (adds HR management, news and public-opinion oversight, other
  cases by law). No legitimate-interests basis. Separate consent applies only in listed cases
  (sharing, publication, sensitive data, transfers abroad), not "per purpose". Table "partial".
- **Automated decisions:** explanation and refusal rights apply to decisions with a major
  impact; no human-review requirement; marketing needs a non-personalised option or easy refusal.
- **Transfers:** four Art 38 routes plus treaties (not five); separate consent is an extra
  requirement, not a route (table "partial"). 2024 Provisions thresholds stated exactly;
  certification has existed since 2021 (2026 measures detail it); standard contracts are
  filed, not approved; Art 40 localization has exemptions.
- **Breach:** duty covers leaks that may have occurred; individuals need not be told if harm is
  avoided (no "public announcement" substitute in Art 57). Removed "some sectors 24 hours";
  added the national incident measures (1 Nov 2025): 4 hours, 1 hour for critical operators,
  for relatively major incidents (thresholds from JunHe analysis, not added).
- **Other tables:** fines are 5% of prior-year turnover; non-discrimination note cites the
  no-refusal-of-service rule; racial and sexual-orientation data "may qualify".
- **Deferred to D9:** Order 25 small-handler rules, compliance audits, facial-recognition
  measures, Cybersecurity Law amendment (all verified by the agent).
- Tooltip scan: identical popups before and after.

### Unsupported table cells resolved (Jared's decisions, 2026-10-15)
A dedicated research agent checked statutes, decrees and regulator opinions (in Spanish for
Argentina and Uruguay). Findings: Uruguay's law has no good-faith principle; Argentina's decree
has a good-faith duty for collecting data only; none of Argentina, Uruguay, Kenya, South Africa
or Japan has a rule against penalising people for using their rights.
- **Non-discrimination:** Uruguay, Kenya, South Africa and Japan now "no: No specific rule in the
  law." Argentina stays "partial" with an honest note (general fair, good-faith collection duty).
  GDPR, UK and Swiss cells left as they are.
- **Uruguay group transfers:** "yes". Group codes of conduct registered with the regulator
  (Decree 414/009); the note adds that little guidance is published (Jared's wording choice).
- **Uruguay children (two cells):** stay "partial" with corrected notes. No fixed age in the law;
  the regulator expects parental consent (Dictamen 1/020); childhood law adds protection.

## New countries, 2026-10-18

### Canada (PIPEDA, federal) — new law page and comparison column
- Researched by a read-only agent against laws-lois.justice.gc.ca, priv.gc.ca and LEGISinfo.
  Every source link opened in a real browser (one redirected; updated to the final URL).
- Covers PIPEDA, with the federal/provincial split stated on the page, in the picker
  ("Canada (federal law)") and in a map note (Quebec, Alberta, BC have their own laws).
  Quebec's stricter rules are noted where they differ (portability, automated decisions,
  express consent for sensitive data, transfer impact assessments, penalties).
- Status as of Oct 2026: Bill C-27 died Jan 2025; successor Bill C-36 (Protecting Privacy and
  Consumer Data Act, first reading 15 Jun 2026) is not law; a data mobility amendment (S.C.
  2026, c. 3) passed but is not in force. The regulator cannot fine.
- Wired in per the CLAUDE.md New Country Checklist: pipeda.json, MapHomePage, countryStatus
  (124), mapCountries, all 53 comparison cells, legend note.
- Badge "CAN" (California already uses "CA"); flagged to Jared.
- Not added (secondary only): Bill C-36 penalty figures and regulator name; extraterritorial
  case law is described generally, not cited.
- Tooltip scan: 6 new popups, all fitting; existing 261 unchanged.

### Australia (Privacy Act 1988) — new law page and comparison column
- Researched by a read-only agent against legislation.gov.au and oaic.gov.au. All 7 source
  links opened in a real browser.
- Status as of Oct 2026: 2024 amendments in force (penalty tiers, infringement notices,
  prescribed-country mechanism, none prescribed yet); statutory tort since 10 Jun 2025;
  automated-decision transparency from 10 Dec 2026; children's code not yet registered; the
  "tranche 2" reform is an exposure draft only (Aug 2026), not introduced.
- First Privacy Act civil penalty (Australian Clinical Labs, A$5.8M, Oct 2025) cited from the
  OAIC release.
- Left out (agent flagged as unverified or from memory): statutory tort damages cap, My Health
  Records localization rule, credit code version name, draft bill contents.
- Wired in per the New Country Checklist (map code 036). Tooltip scan: 8 new popups; existing
  unchanged.

### Singapore (PDPA 2012) — new law page and comparison column
- Researched by a read-only agent against Singapore Statutes Online (current consolidation)
  and pdpc.gov.sg. All 5 source links opened in a real browser.
- Status as of Oct 2026: data portability (Part 6B) enacted in 2020 but never commenced;
  turnover-based penalty cap in force since 1 Oct 2022; Global CBPR and PRP added as
  transfer certifications on 2 Mar 2026. Marina Bay Sands decision (S$315,000, Oct 2025)
  cited from the PDPC decision PDF.
- No map shape at 110m scale, so Singapore is picker-only (like Malta).
- Left out (search snippets only): children's guidance specifics, NRIC guideline details,
  SingHealth fine figures.
- Glossary: the legitimate-interests availability line now mentions Singapore (exception),
  PIPEDA and Australia (not available).
- Tooltip scan: 7 new popups, all fitting; existing unchanged.

## Map-only tier, 2026-10-18
- A read-only agent listed every jurisdiction with a comprehensive (private-sector) privacy
  law in force on 18 Oct 2026, outside the 17 laws covered in detail. Laws from 2023 on were
  checked against official or gazette-linked sources; older laws against legal trackers
  (DLA Piper, UNCTAD). Exact in-force days for older laws were not checked one by one; the
  site does not show them.
- 91 countries are shown: 79 colored on the map (Map-Only Navy #647FA3, not clickable, named
  on hover) and all 91 in a text list under the map key ("Show the 91 countries...").
- Judgment calls (flagged to Jared): dependent territories (Jersey, Guernsey, Isle of Man,
  Gibraltar, Bermuda, Cayman, BVI, Faroe) left out; Hong Kong, Macau and Taiwan included;
  Kosovo listed in text only (no map code); Laos included although its law covers
  electronic data only; Chile shows its 1999 law until Law 21.719 applies (1 Dec 2026).
- Left out as passed but not in force: Egypt (full compliance due 31 Oct 2026), Sri Lanka
  (1 Jan 2027), Paraguay (~Nov 2027), Guyana, Belize, Saint Kitts and Nevis.
- Left out as uncertain: UAE (no executive regulations), Bangladesh, Trinidad and Tobago,
  Saint Lucia, Antigua and Barbuda, The Gambia, Djibouti, DR Congo, Burundi, Kuwait
  (sectoral only), Curaçao, Sint Maarten, Aruba.
- Follow-ups: Egypt and Chile change status within weeks of launch; revisit then.

## US states and Canadian provinces on the map, 2026-10-18 (Jared's UI review)
- Map now draws US states and Canadian provinces (Natural Earth 50m admin-1, public domain,
  simplified to 316 KB, self-hosted). California opens the CCPA page; every province opens
  PIPEDA for now.
- A read-only agent listed state laws from law-firm trackers (Covington, Venable, Morgan
  Lewis, Hunton, WilmerHale) dated June-Sept 2026; official links not opened. 18 states other
  than California have a comprehensive law in effect and take the map-only tint.
- Grey for now: Oklahoma, Louisiana (1 Jan 2027), Alabama (1 May 2027), Vermont (1 Jan 2028)
  are enacted but not in effect. Florida's Digital Bill of Rights (only $1B+ companies) is left
  out, as most trackers do (flagged to Jared). Massachusetts and Pennsylvania bills not enacted.
- Provinces with their own laws (Quebec, Alberta, BC) are listed in the map-only list under
  "Canadian provinces"; on the map they stay dark blue (PIPEDA).

## Review 2026-10-20, section 1 (fixed 2026-10-21)
Source: `docs/site-review-2026-10-20/README.md`. Two read-only verifier agents checked every
item first; their findings are in `docs/site-review-2026-10-20/verification-notes.md`.
- C1 (918631e, 2026-10-20): Cloudflare was injecting its Web Analytics beacon for browser
  requests on privacymeridian.org, though every dashboard setting showed it off (pages.dev had
  none). Fixed with `Cache-Control: ... no-transform` in `public/_headers`. P5: HSTS added in
  the same commit. Cloudflare's NEL header remains (no Free-plan setting found).
- E1 Korea `pipa-kr-breach`: possible leaks are told to people within 72 hours (Decree
  Art 39-3, so the review's "press only" doubt was wrong). The regulator report stays tied to
  confirmed leaks. Added the new remedies content of notices and the recovered-data proviso.
- E2 UK `ukgdpr-art17`: the malicious-allegation ground is UK-wide from 31 Mar 2026. Added
  the narrow meaning of "malicious".
- E3 China `pipl-art47`: five deletion grounds, not six (three fields).
- E4 China `pipl-art57`: CII within 1 hour to its protection department and police; central
  and state bodies 2 hours; others 4 hours to the provincial CAC; a 1M-person leak counts as
  relatively major.
- E5 Singapore `pdpa-sg-consent`: research is a Second Schedule exception (use and disclosure
  only), with its conditions. articleRef now names both Schedules.
- E6 Singapore `pdpa-sg-breach`: an account login with its password counts as significant
  harm on its own.
- E7 Canada `pipeda-scope`: the 23andMe breach was in 2023 (about 320,000 Canadians); the UK
  fine came in 2025.
- E8 map-only list (Jared, 2026-10-21): added Egypt (Law 151 of 2020; regulations Nov 2025),
  the UAE (Decree-Law 45 of 2021, in force 2022, regulations still pending) and DR Congo
  (Digital Code 2023, regulator not yet set up). This reverses the 2026-10-18 choice to leave
  them out. Sources are law firms plus u.ae; no gazette reached. Not added: Bangladesh (2026
  Act commencement unconfirmed), Belize, Guyana, Trinidad and Tobago (not in force), Greenland
  (territory rule). 82 countries now colored map-only (100 shapes with states and provinces).
- Tooltip scan before and after: same popups on the same words.
- M1 (Jared, 2026-10-21): grey legend now reads "No comprehensive law in effect", since grey
  also covers laws passed but not yet in force (Sri Lanka, Paraguay, some US states).

## Review 2026-10-20, section 2 (fixed 2026-10-21)
A read-only verifier checked each row against primary sources first (see
`docs/site-review-2026-10-20/verification-notes.md`). One commit, because the comparison files
mix several laws.
- M2 glossary `consent-withdrawal` (Jared chose reword): now says some laws accept implied
  or deemed consent and most allow withdrawal. It is used by 36 articles, not 9.
- M3 Australia: the court cap is the greater of A$50M and 3x benefit, or 30% of turnover if
  the benefit can't be valued. Individuals A$2.5M (law page and penalties table).
- M4 Australia legal bases: "many" secondary uses, not "most".
- M5 Canada: the mobility right, once in force, applies only to sectors set by regulation.
- M6 UK automated decisions: restricted with special category data, banned on recognised
  legitimate interests.
- M7 GDPR Art 21 plain summary: objection right limited to legitimate interests or public task.
- M9 Japan transfers: a recognised international certification (APEC CBPR) also qualifies.
- M10 NZ transfers: IPP 12(2) exceptions added. The plain summary lists all routes.
- M11 China Art 24: a non-personalised option OR an easy way to refuse.
- M12 India: "from 13 May 2027" on rights, consent and transfer text, plus 9 table cells.
- M13 India: the 90-day limit is for grievances only (Rule 14(3), G.S.R. 846(E)). Rights
  requests have no set deadline.
- M14 Brazil small agents: 15 days simplified, 30 days complete, not for high-risk processing.
- M15 easy withdrawal: Uruguay and Kenya now "partial". Korea left "yes" (support is
  secondary only).
- M17 India children's data: "partial". M18 Singapore per-purpose and non-discrimination:
  "partial".
- M19 About: says translated sources are labelled, and the not-yet-covered list relies on
  trackers. The China DigiChina links are now labelled "unofficial English translation".
- M20 Brazil: fine on ByteDance, TikTok's owner. The board-appeal deadline has passed.
- M22 Kenya: a Kenyan server or a serving copy in Kenya. The purpose list is open ("includes").
- **Held back (secondary sources only):** M8 Korea onward correction; M15 Korea note; M21
  India Board after August (kept "as of August 2026").
- **Waiting on Jared:** M16 (consent-model rows, an editorial scheme).
- Tooltip scan: same popups on the same words (282).
- M16 (Jared, 2026-10-21): row "Opt-in required by default" renamed "Consent required by default".
  GDPR, UK GDPR, LGPD, POPIA and Kenya are now "partial" in it (consent is one of several
  bases). LGPD, POPIA and Kenya are "partial" in the opt-out row (legitimate interests run
  until you object). Korea stays "no", with a note that its other bases are narrow.
- P1 (Jared, 2026-10-21): "not legal advice" line under each law title and in each Help for
  Organizations panel. Seven directive phrases ("is sufficient", "is the minimum") now read "is a
  reasonable starting point" (FADP, GDPR, LGPD, UK GDPR).

## Review 2026-10-20, section 3 (fixed 2026-10-21)
A read-only verifier checked each bullet (official sources for Singapore, UK, NZ, Kenya, POPIA,
OAIC and ICO). Applied:
- Korea: notices name statutory damages too; 5x damages cover gross negligence;
  non-discrimination note states the rule.
- Japan: 60 days where a wrongful purpose is suspected (law page and table); "fraud or other
  wrongful means".
- China: RMB 50M; Art 57 summary covers possible incidents and the notice exception;
  localisation glossary notes exemptions; political opinions "partial".
- Singapore: private-action wording; told of rejection (no reasons duty); certification split
  (CBPR any recipient, PRP intermediaries only) plus in-transit, publicly available and vital
  interests routes; s 26D(6)-(7) no-notice and waiver; business improvement covers related
  companies but never marketing; portability "not yet in force"; citation lists amendments.
- Australia: health-service small businesses; "state rules, where they exist"; children's
  capacity is assessed by organisations, with an optional presumption from 15 (OAIC); IP
  addresses as personal data depend on the law and facts (glossary).
- NZ: correction extension (s 65, not s 48 as the review said); portability "partial"
  (Customer and Product Data Act, banking from Dec 2025).
- UK: one-month clock starts at the latest of receipt, ID or fee; "complex or numerous";
  transfer certification "partial" (ICO: none approved).
- GDPR: Art 18 only in listed cases; Art 20 only data you provided, on consent or contract;
  Art 35 "evaluation ... including profiling".
- Canada: "income records". California: "The right to opt out has no direct GDPR equivalent".
- Brazil: deletion articleRef "Article 18, IV and VI". POPIA: correction or deletion outcomes;
  genetic "partial" (DNA analysis for identification is biometric). Kenya s 43 notice content.
- Glossary ropa adds criminal-record processing.
- Popups removed where they landed inside longer terms (12): personal-data in appi-scope,
  pipl-art24/40/44/38-43, pipa-kr-scope, popia-s11, kdpa-s30; consent-withdrawal and
  controller-processor in dpdp-scope; controller-processor in dpdp-rights;
  legitimate-interests in pdpa-sg-consent (a consent exception in Singapore). Scan: 270.
- **Held back:** Korea "leak" now includes forgery, alteration and damage (one law-firm source);
  Korea citation (a 2025 amendment unconfirmed); Brazil small-agent exception (Res 15/2024
  may have replaced it; unverified); Argentina/Uruguay non-discrimination (Jared chose
  Argentina "partial" on 2026-10-15); review's "sccs" wording (already correct).
- **For Jared later:** Kosovo drawn grey (shape has no id); Hong Kong and Macau sit inside
  China's shape on this map.
- Section 4 (2026-10-21): P3 translated headlines labelled, original headline given to screen
  readers. P4 footer "Last updated" comes from the latest commit date. P7 real 404 status for unknown
  addresses (404.html plus _redirects). P8 About says the site's host handles network addresses (Jared: never name the host on the site); "we
  collect nothing about you". P2 contact address is a to-do (needs Jared's email).
- 2026-10-21: Hong Kong (PDPO) and Macau (Law 8/2005) now drawn as their own map-only shapes
  over China, from Natural Earth 50m (public domain). Full pages are a later batch (Jared).
- 2026-10-21 (Jared): Compare scrolls to show the table after a law is added (short laptop
  screens hid it). Kosovo now coloured map-only (matched by name; its shape has no code).

## Style fixes from docs/style-review-2026-10-26.md (2026-10-29)
Mechanical pass only. The layout redesign (lists and callouts) is parked on local branch
`style-pass`. Applied to all 17 laws, the comparison tables, the glossary and UI text:
- American spelling (D3), serial commas, no semicolons in prose (long legal series became
  "First… Second…" sentences), D1 numbers, D2 day-month-year dates (California page),
  en dashes in reference ranges, "and" for "&", contractions expanded, "the GDPR" for noun uses (D5).
- 12 misplaced parentheses fixed (GDPR case citations and transfer mechanisms, Brazil Articles
  18 I-II and IV, Japan "not yet in force", Argentina Resolution 332/2020, PIPEDA reference,
  Uruguay UI note, glossary). Company "they" became "it" where the subject is singular.
- D7: the Appendix A closing lines marked CUT/TRIM, plus opinion kickers from Section 4.3.
- Tables: semicolons to periods; India's repeated sensitive-data note shortened to
  "No sensitive category."; key labels plainer. UI labels in sentence style (D6).
- Checks: a facts script found no change to any figure, date or citation (only en dashes and
  number style). Two popups dropped because their only matching word was in a cut kicker
  (pipa-kr-scope "consent", pipl-art40 "data localization"). Build, lint and browser OK.
- Held for Jared: the FADP name change to "Revised Federal Act on Data Protection" (it shows in
  map labels and the tab title), and the map-instructions color name.
- Before/after per law: docs/style-pass/fixes/.
