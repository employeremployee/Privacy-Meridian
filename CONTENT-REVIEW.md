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

**⚠️ Decision for you (map coloring):** India is currently colored blue (enacted) on the map. Under the rule we just set ("only laws fully in force are colored, else grey"), India's core regime is not in force until ~2027, so India arguably belongs **grey** until then. It is a judgment call because the Board provisions *are* live. Tell me whether to grey India out now or keep it blue with the "phasing in" note. (Same test may apply to any other jurisdiction found not fully in force.)

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

## Remaining jurisdictions ☐
UK GDPR, FADP (Switzerland), PDPA (Argentina), LPDP (Uruguay),
PIPA (South Korea), NZPA (New Zealand), POPIA (South Africa), KDPA (Kenya) — pending.
Then Pass B: fill comparison-grid article/section citations (currently ~34% of cells).
