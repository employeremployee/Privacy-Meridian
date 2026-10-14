# 07 — Corrections to the review log, and claims you should NOT act on

## Part A — Corrections to `CONTENT-REVIEW.md`

`CONTENT-REVIEW.md` is Jared's review log and is not displayed on the site. Several entries
are wrong or out of date. Update it as you apply the fixes in files 01–05.

| Section | What the log says | Correction |
|---|---|---|
| **South Korea** | "the 2025 amendment (domestic-representative mandate for foreign operators, top fine raised to 10% of total revenue in severe cases)" | Two separate laws. **Act No. 20897** (in force 2 Oct 2025) only tightened the existing domestic-agent rule. **Act No. 21445** (passed 12 Feb 2026, in force **11 Sep 2026**) added the 10% tier, notice of possible breaches, and CEO responsibility. See file 04, KR-E1. |
| **South Korea** | "added… the 2025 data-portability right" | Art 35-2 has been in force since **March 2025** (healthcare, telecoms). It is being extended to all sectors for large controllers by a 2026 decree (secondary). |
| **South Africa** | "data-subject-request channels widened with a 30-day response window" | The 30 days applies only to notifying the outcome of **correction, destruction or deletion** requests. Access is still "within a reasonable time" (s.23). See file 05, ZA-M2. |
| **South Africa** | "the Information Regulator launched an online breach-reporting portal" | Using the eServices portal has been **mandatory** since 1 Apr 2025 (secondary). |
| **Brazil** | "moved into active enforcement with its first significant fines" | **Unsupported.** The only ANPD monetary fine found is R$14,400 (2023). Remove the claim or verify it on the ANPD enforcement dashboard. |
| **Brazil** | "the ANPD became an autonomous regulatory agency (2025-09-17)" | That was Provisional Measure 1.317. It was converted into **Law 15.352 of 25 Feb 2026**, which created the **Agência Nacional de Proteção de Dados**. |
| **Brazil** | "Brazil's own standard contractual clauses for international transfers took effect in 2025 (grace period ended Aug 2025)" | The SCCs took effect **Aug 2024** (Res. 19/2024). Only the grace period ended in Aug 2025. Also log the **EU–Brazil mutual adequacy** (26 Jan 2026) and the **ECA Digital** law (in force 17 Mar 2026). |
| **Brazil — LGPD breach timeline "RESOLVED"** | All now read 3 + 20 business days | Rendered LGPD text is fixed. But **`pipl-art57` (rendered)** still says "LGPD's 2-5 business day framework". Three **data-only** leftovers remain: `lgpd-art48` comparisonFlags ("2 days preliminary, 5 days supplementary"), `gdpr-art33-34` comparisonFlags, and the glossary `breach-notification` `jurisdiction` field. |
| **India** | "core obligations and rights (Sections 3-17) take effect ~18 months later, around mid-2027" | Three phases. Board provisions 13 Nov 2025. **Consent-manager registration 13 Nov 2026.** Everything else **13 May 2027**. Also log that the Board had no members as of 12 Aug 2026. |
| **India — map coloring** | "keep India blue… a passed-but-phasing-in law stays colored" | Decision stands. But `src/data/countryStatus.js` lines 7–8 still say only fully live laws are coloured, and the legend says "in effect". See file 01, D2. |
| **California** | "the ADMT, risk-assessment, and cybersecurity-audit obligations phase in through 2027" | Cybersecurity audit certifications run to **1 Apr 2030**. ADMT starts 1 Jan 2027. Risk assessments started 1 Jan 2026, with attestations by 1 Apr 2028. |
| **China** | "a certification route took effect 2026-01-01" | The **Certification Measures** took effect then. Certification itself has been a PIPL route since 2021 (Art 38(2)). |
| **Japan** | "most provisions phase in via cabinet order within two years" | Promulgated 17 Jul 2026. Some penalty provisions start 17 Jan 2027. The main body starts by **16 Jul 2028**, and no start-date order has been issued. "Not yet in force" is more accurate than "phasing in". |
| **New Zealand** | "added IPP 3A… Updated nzpa.json scope" | IPP 3A was added to one sentence. But "**thirteen**" principles still appears 5 times on the same page, and the IPP 1–4 article omits 3A. See file 04, NZ-S1 and NZ-S2. |
| **Switzerland** | "reviewed, no change… content already current" | Not so. Errors remain: the fines regime (intent, complaint, Art 64 business fines up to CHF 50,000), the contract-basis cell, the consent-for-sensitive-data claim, and the extension rule. See file 02, CH-*. |
| **Argentina** | "reviewed, no change… Our content already states this accurately" | Errors remain: "1998 law" (it's 2000), consent attributed to Art 12 (it comes from Decree 1558/2001), the automated-decisions cell, and the genetic-data cell. See file 03, AR-*. |
| **Uruguay** | "reviewed, no change… content current" | Errors remain: the automated-decisions cell, 72 hours applied to individuals, the Art 9 vs Art 18 citation, and the scope attribution. See file 03, UY-*. |
| **EU — GDPR** | "reviewed, no content change" | The GDPR itself hasn't changed, but the site text has many unfixed items, and the Data Privacy Framework situation has moved on. See file 02, GDPR-*. |
| **Kenya** | "the pending Data Protection Amendment Bill 2025" | It is a **stakeholder draft**; no record of tabling was found. Also log the ODPC's Sep 2026 Cross-border Transfer Guidance Notes. |

---

## Part B — Claims from the 2026-10-03 review that were WRONG (do not act on them)

The first review (delivered in chat on 2026-10-03) made these claims. The 2026-10-08 re-check
found them **incorrect**. If you find instructions based on them anywhere, ignore those
instructions.

| # | 2026-10-03 claim | What's actually true |
|---|---|---|
| 1 | GDPR `gdpr-art20` wrongly excludes "observed" data from portability. | The text excludes only **inferred or derived** data, which is correct. No fix needed. |
| 2 | UK `ukgdpr-transfers` enterprise advice to "monitor the EU adequacy decision" should change. | The advice is **fine**. The Commission still reviews the decision and can suspend it. |
| 3 | Swiss `fadp-lawfulness` wrongly lists "security" among the processing principles. | **Defensible.** Art 30(2)(a) treats breaches of Arts 6 **and 8** alike. |
| 4 | Swiss certification transfer cell should not be "partial", because the FADP doesn't list certification. | DPO Art 12 **does** allow certification and codes of conduct as transfer safeguards. Only the "guidance developing" note is unverified. |
| 5 | Korea `pipa-kr-art15`: "The 2023 amendments eased the contract basis" is unverifiable. | **True.** The wording changed from "inevitably necessary" to "necessary". Keep it. |
| 6 | China's "15 working days" comes from the Network Data Security Management Regulations (2025). | **Wrong.** Those regulations contain no working-day deadline. The figure comes from a **2019 apps-only rule**. PIPL says "promptly". See file 04, CN-E1. |
| 7 | Argentina `consent-transfer` cell ("yes") is wrong because consent isn't in Art 12. | The cell is **correct**. Consent comes from Decree 1558/2001 Art 12. Only the law page's attribution needs fixing (file 03, AR-S1). |
| 8 | Uruguay Law 19.924 made **genetic and biometric** data sensitive. | **Wrong.** It added a definition of biometric data and an impact-assessment rule (Art 18-BIS). It made neither category sensitive. See file 03, UY-C1. |
| 9 | Korea's 10% fine came from a "2025 amendment" (from the owner's notes). | It came from the **2026** Act No. 21445. The 2025 Act only tightened the agent rule. |

---

## Part C — Items fixed since 2026-10-03 (for the log)

- LGPD breach timeline in rendered LGPD text: now 3 + 20 business days, with the small-agent
  rule.
- Source links: "over-promising" labels fixed in commits `eb2153d`, `af334cd`, `801c2e8` and
  `1527aa7`. The ICO links all resolve and match their labels.
- CCPA "CPPA Regulations" links now point to `cppa.ca.gov/regulations/`.
- NZ 20-working-day deadline no longer cited to IPP 6.
- Kenya portability cell ("yes", citation removed).
- India ₹250 crore figure now correctly tied to security failures.
- Comparison tables: pinpoint citations removed (`f89225c`), a deliberate CLAUDE.md rule.
