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

**One content discrepancy noticed in passing (not a citation issue, left for your call):**
the LGPD breach-notification timeline differs between two files — `grid.json` says "2 business
days (preliminary) + 5 business days (supplementary)" while `timeBasedObligations.json` says
"3 business days (ANPD Resolution 15/2024), supplement within 20 business days." The latter
matches ANPD Resolution 15/2024. Flagging for you to reconcile; I did not change it.
