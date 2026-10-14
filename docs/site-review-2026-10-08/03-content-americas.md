# 03 — Americas: California (CCPA/CPRA), Brazil (LGPD), Argentina, Uruguay

Format and rules as in README. Comparison cells get no article numbers.

---

## California (CCPA/CPRA) — `src/data/jurisdictions/ccpa.json` and the `ccpa` column

Statute text was checked on california.public.law, a mirror marked verified 5 Oct 2026,
because leginfo blocks automated tools. Leginfo links work fine in a normal browser.

### ERROR

**CA-E1. Household data**
- Where: `ccpa-right-to-know` › professionalLayer ("CCPA explicitly covers household-level
  data in addition to individual data") and gapRemediation.enterprise ("household data
  complexity requires verification protocols").
- Fix: **§1798.145(p)**: the duties in §§1798.105, .106, .110 and .115 (delete, correct and
  know) "shall not apply to household data". Remove or reverse the claim.
- Source: https://california.public.law/codes/civil_code_section_1798.145. Confidence: high
  (independently verified).

**CA-E2. Number of deletion exceptions**
- Where: `ccpa-right-to-delete` › professionalLayer. Now: "subject to nine exceptions".
- Fix: **eight** exceptions (§1798.105(d)). Confidence: high (independently verified).

**CA-E3. Consent for sensitive data**
- Where: `legalBases.json` › `consent` › `ccpa` › note. Now: "consent required only for
  specific cases such as minors and sensitive data".
- Fix: The CCPA requires **no consent** for sensitive personal information. Consumers get a
  "right to limit", which works as an opt-out. Consent is required in three cases:
  - selling or sharing data of consumers under 16 (opt-in; a parent for under 13)
    (§1798.120(c));
  - resuming selling or sharing after an opt-out (§1798.120(d));
  - joining a financial incentive programme (§1798.125(b)(3)).
- The cell currently contradicts `consentStandards.json` › `sensitive-explicit`. AB 1542, which
  would have banned sales of sensitive data, was vetoed 27 Sep 2026 (WilmerHale; secondary).
- Confidence: high.

### STILL PRESENT from 2026-10-03

**CA-S1. Revenue threshold**
- Where: `ccpa-scope` › professionalLayer ("$25 million") and `scope.json` › `threshold` ›
  `ccpa` ("$25M revenue").
- Fix: **$26,625,000** since 1 Jan 2025. It is adjusted for inflation every odd-numbered year
  (§1798.199.95(d)); the next adjustment is due Jan 2027. Suggest "about $26.6 million,
  adjusted for inflation every two years".
- Source: https://www.cppa.ca.gov/regulations/cpi_adjustment.html. Confidence: high.

**CA-S2. Fines**
- Where: `enforcementPenalties.json` › `max-fine` › `ccpa`. Now: "Up to $7,500 per violation."
- Fix: **$2,663** per violation, or **$7,988** if intentional or involving consumers the
  business knows are under 16. These are the 1 Jan 2025 figures. Same source. Confidence: high.

**CA-S3. Right-to-know citation**
- Where: `ccpa-right-to-know` › articleRef "Section 1798.100" and its sourceLink (label and
  URL).
- Fix: the right to know is in **§§1798.110 and 1798.115**, with the process in §1798.130.
  §1798.100 covers general duties and notice at collection. Link
  `…codes_displaySection.xhtml?lawCode=CIV&sectionNum=1798.110.` Confidence: high.

**CA-S4. Phase-in dates**
- Where: `ccpa-scope`. Now: "phase in through 2027".
- Fix:
  - Risk assessments apply from 1 Jan 2026, with attestations due to the CPPA by
    1 Apr 2028.
  - Automated-decision (ADMT) rules apply from **1 Jan 2027**.
  - Cybersecurity audit certifications are due 1 Apr 2028 (revenue over $100M), 1 Apr 2029
    ($50–100M) or 1 Apr **2030** (under $50M).
- Source: https://cppa.ca.gov/announcements/2025/20250923.html. Confidence: high.

**CA-S5. Nonprofits**
- Where: `ccpa-scope` ("does not apply to non-profits"), `scope.json` › `public-sector` note,
  and `grid.json` › `scope-applicability`.
- Fix: An entity that controls or is controlled by a covered business, shares its branding,
  and receives its consumers' data is itself covered (§1798.140(d)(2)). This can include a
  nonprofit. Joint ventures are covered too ((d)(3)). Confidence: high.

**CA-S6. Sensitive-data list incomplete**
- Where: `ccpa-right-to-limit-spi` and `grid.json` › `sensitive-data-categories` › `ccpa`.
- Fix: §1798.140(ae) also includes:
  - driver's licence, state ID and passport numbers;
  - account log-in with credentials;
  - citizenship or immigration status;
  - philosophical beliefs;
  - sex life and sexual orientation;
  - **neural data**.
  Change "is" to "includes". Confidence: high.

**CA-S7. Delete Act and DROP missing** (see file 01, D9)
- DROP opened to consumers 1 Jan 2026. From **1 Aug 2026** data brokers must check it at
  least every 45 days and delete matching records. It is free and reaches about 600 brokers.
- AB 883 may shorten 45 days to 30. **Verify first**: no signing date was confirmed.
- Source: https://privacy.ca.gov/drop/. Confidence: high.

**CA-S8. Stale "developing" cells**
- `grid.json` › `pia-requirement` › `ccpa` ("Regulations still developing"): risk-assessment
  rules have been in force since 1 Jan 2026.
- `grid.json` › `automated-decision-making` › `ccpa` ("No direct equivalent right") and
  `individualRights.json` › `automated-decisions` › `ccpa` ("rules developing"): the ADMT rules
  are adopted. From 1 Jan 2027 they give pre-use notice, a right to opt out of ADMT for
  significant decisions (with exceptions such as a human appeal), and access to ADMT
  information. **Verify first** the opt-out exceptions and access details; they come from
  law-firm summaries.
- Confidence: high on the dates.

### OUTDATED

**CA-O1. Breach-notice timing (California breach law, not the CCPA itself)**
- Where: `timeBasedObligations.json` › `breach-individuals` › `ccpa` ("Most expedient time
  possible") and `breach-authority` › `ccpa` ("Without unreasonable delay / No fixed hour
  threshold"); `grid.json` › `breach-notification-timeline` › `ccpa`.
- Fix: **SB 446, in force 1 Jan 2026**, amended Civ. Code §1798.82:
  - residents must be notified within **30 calendar days** of discovery or notification of
    the breach (delay allowed for law enforcement or to scope the breach);
  - a sample notice goes to the Attorney General within **15 calendar days** of notifying
    residents, when **more than 500** California residents are notified.
- Make clear this is California's breach statute, not the CCPA.
- Source: https://california.public.law/codes/civil_code_section_1798.82 (text updated
  1 Jan 2026). Confidence: high (confirmed by several reviewers).

**CA-O2. Deletion right changing on 1 Jan 2027 (SB 923)**
- Where: `ccpa-right-to-delete` (omission).
- Fix: SB 923 was signed 27 Sep 2026 and is operative **1 Jan 2027**. It extends deletion to
  data collected "from or about" the consumer, including data bought from brokers. Businesses
  may keep a minimal suppression record. Online-only businesses must offer a web form.
- **Verify first**: from law-firm alerts; the chaptered text was not seen. Confidence:
  medium-high.

**CA-O3. Opt-out signal updates**
- Where: `ccpa-right-to-opt-out` and glossary `gpc` (omission).
- Fix: AB 566 ("Opt Me Out Act", signed 8 Oct 2025) requires browsers to offer an opt-out
  preference signal from **1 Jan 2027**. The 2026 regulations also require businesses to show
  that a signal was honoured (e.g. "Opt-Out Request Honored"), from 1 Jan 2026.
- **Verify first** (secondary). Confidence: medium-high.

### MISLEADING
- **CA-M1.** `ccpa-right-to-delete` › plainSummary: "personal information the business has
  collected about them". Current law covers only data "collected from the consumer"
  (§1798.105(a)); the AG's FAQ agrees. This becomes "from or about" on 1 Jan 2027 (CA-O2), so
  state both the current rule and the change. Confidence: high.
- **CA-M2.** `ccpa-right-to-opt-out` › professionalLayer ("must not re-engage the consumer…
  for 12 months without explicit consent") and responseTimeline ("12-month moratorium on
  re-engagement"). After an opt-out the business may not sell or share at all **until the
  consumer consents** (§1798.120(d)); there is no end date. The 12 months only limits when the
  business may **ask** the consumer to opt back in (§1798.135(c)(4)). Readers may think sales
  resume after a year. Confidence: high.
- **CA-M3.** `ccpa-right-to-know` › professionalLayer: older data must be given "where
  technically feasible". The statute covers data collected on or after 1 Jan 2022 "unless
  doing so proves impossible or would involve a disproportionate effort" (§1798.130(a)(2)(B);
  11 CCR §7024(h)). Data-only: the comparisonFlag "12-month lookback" is also outdated.
  Confidence: medium-high.
- **CA-M4.** `grid.json` › `right-to-portability` › `ccpa`: "Portability not explicitly
  required." §1798.130(a)(3)(B)(iii) requires data "in a structured, commonly used,
  machine-readable format that may also be transmitted to another entity". The
  individualRights "partial" is fine. Confidence: high.
- **CA-M5.** `ccpa-non-discrimination`: omits that joining a financial incentive programme
  needs **prior opt-in consent**, revocable any time. It also omits that any price difference
  must be reasonably related to the value of the consumer's data (§1798.125(b)). Confidence:
  high.
- **CA-M6.** `individualRights.json` › `correction` › `ccpa`: "partial: Added by CPRA". The
  right to correct (§1798.106) has been a full right since 1 Jan 2023. "yes" fits the table's
  legend. Confidence: low-medium.
- **CA-M7.** `consentStandards.json` › `opt-in-default` › `ccpa`: "processing is allowed until
  the consumer objects". There is no general right to object. Processing must be reasonably
  necessary and proportionate (§1798.100(c)), and the opt-outs cover sale, sharing and
  sensitive-data use. Confidence: low-medium.
- **CA-M8.** Map representation: see file 01, D1.

### MINOR
- `ccpa-right-to-limit-spi`: omits that sensitive data used without the purpose of inferring
  characteristics is outside the right to limit (11 CCR §7027(a)).
- `ccpa-right-to-opt-out` › plainSummary: "must display a clear link". A business may skip the
  links if it honours opt-out preference signals as the regulations allow (§1798.135(b)(1)).
- `ccpa-scope` › personalImpact: "reaches any business trading on data about Californians".
  Only businesses meeting a threshold are covered.
- Agency name: since 5 Nov 2025 its public name is **"CalPrivacy"** (consumer site
  privacy.ca.gov). The formal name is unchanged. Suggest "California Privacy Protection Agency
  (CalPrivacy)" on first mention. Source: https://www.cppa.ca.gov/announcements/2025/20251105.html.
- `ccpa-right-to-correct`: "Unlike GDPR Article 16…". The GDPR duty to notify recipients is
  in **Article 19**. Check the sentence in context.
- Glossary items `gpc`, `verifiable-consumer-request` and
  `service-provider-contractor-third-party`: see file 01.
- DATA-ONLY: the glossary `breach-notification` jurisdiction field; the `ccpa-scope`
  comparisonFlag (nonprofit); `authority.name`.

### Verified OK
- 45 days plus one 45-day extension with notice.
- 15 business days for opt-out and limit requests.
- Opt-in for under-16s, with a parent for under-13s.
- Deletion: notice to service providers, contractors and third parties.
- Correction: "commercially reasonable efforts".
- §1798.125(b)(4) wording.
- The sensitive-data yes/no states in the tables; political opinions "no".
- The 100,000 consumer and 50% thresholds; government excluded.
- Private right of action for breaches only.
- CPPA and AG enforcement.
- Updated rules effective 1 Jan 2026; GPC must be honoured.
- The sale/sharing and cross-context advertising definitions.
- The "CPPA Regulations" link (fixed since 2026-10-03).

---

## Brazil (LGPD) — `src/data/jurisdictions/lgpd.json` and the `lgpd` column

### ERROR

**BR-E1. Public sector**
- Where: `lgpd-scope` › professionalLayer. Now: "Unlike GDPR, LGPD applies to both private
  and public sector entities."
- Fix: The GDPR also covers public authorities (Art 4(7)); the site's own `scope.json`
  public-sector row says so. Remove the contrast. Confidence: high.

**BR-E2. International transfers**
- Where: `lgpd-art33-36` › professionalLayer. Now: "seven mechanisms" and "ANPD published its
  first adequacy decision and standard contractual clauses in 2023".
- Fix:
  - Art 33 has **nine** items (I–IX).
  - The SCCs came in **Res. CD/ANPD 19/2024** (23 Aug 2024). Contracts had to adopt them by
    23 Aug 2025.
  - The **first adequacy decision** is **Res. CD/ANPD 32/2026** (26 Jan 2026), recognising
    the EU and EEA. The EU recognised Brazil the same day (Implementing Decision (EU)
    2026/179).
  - "GDPR SCCs, which have no automatic recognition" is true, but EU–Brazil transfers no longer
    need SCCs because of mutual adequacy.
- Source: planalto.gov.br (LGPD); ANPD official English text of Res. 32/2026; Mayer Brown;
  Trench Rossi. Confidence: high (adequacy independently verified).

**BR-E3. Transfer cells**
- Where: `internationalTransfers.json` › `lgpd`.
- Fix:
  - `sccs` "partial … still being finalized" → **yes**.
  - `adequacy` "still developing" → **yes** (Res. 32/2026).
  - `bcrs` "Recognized in principle, guidance developing" → **yes**. Res. 19/2024 sets an ANPD
    approval procedure (medium-high).
- Confidence: high.

**BR-E4. The 15-day deadline**
- Where:
  - `lgpd-art18-access` › professionalLayer, responseTimeline, assessTrigger, gapRemediation;
  - `lgpd-art18-deletion` › responseTimeline ("15 days from receipt of request");
  - `timeBasedObligations.json` › `dsr-standard` › `lgpd`;
  - `grid.json` › `dsr-response-timeline` and `right-to-correct` › `lgpd` ("Within 15 days").
- Fix:
  - A simplified confirmation or access reply is due **immediately**. Only the complete
    declaration has up to 15 days (Art 19).
  - Other Art 18 requests (deletion, correction) get an immediate reply, or reasons why
    action isn't immediate (Art 18 §4). Their deadlines were left to a future ANPD
    regulation (Art 18 §5); no final one was found.
  - Public bodies follow their own deadlines (Art 23 §3).
- Source: planalto.gov.br (compiled LGPD). Confidence: high.

### OUTDATED

**BR-O1. The ANPD's status**
- Where: `lgpd-scope` › professionalLayer, `enforcementPenalties.json` › `authority` › `lgpd`
  ("Guidance and enforcement are still maturing"), and glossary `anpd` (file 01).
- Fix:
  - Provisional Measure 1.317 (17 Sep 2025) was converted into **Law 15.352 of 25 Feb 2026**.
    It made the ANPD the **Agência Nacional de Proteção de Dados**, a special-regime autarchy
    under the Regulatory Agencies Law (13.848/2019). It had already been an autarchy since
    Law 14.460/2022.
  - "issuing its first significant fines" is **unsupported**. The only ANPD monetary fine found
    is R$14,400 (July 2023), per a tally of 6 Jul 2026 (secondary). Remove it, or check the
    ANPD enforcement dashboard first.
  - "Brazil's own standard contractual clauses… took effect that year [2025]": they took effect
    Aug 2024; only the grace period ended Aug 2025.
- Source: Law 15.352 (camara.leg.br); agenciagov; turivius (fines). Confidence: high (law
  independently verified; fines medium-high).

**BR-O2. ECA Digital (children)**
- Where: `consentStandards.json` › `children` › `lgpd` and `sensitiveData.json` ›
  `childrens-data` › `lgpd` (and file 01, D9).
- Fix:
  - LGPD Art 14 §1 requires consent from at least one parent for children.
  - The **ECA Digital** (Law 15.211/2025) has been in force since **17 Mar 2026** and is
    enforced by the ANPD. It requires age verification (self-declaration is banned), links
    under-16 accounts to a guardian, and bans profiling minors for advertising.
- Source: planalto; Mayer Brown (2026; secondary for details). Confidence: high.

**BR-O3. Legitimate interests guidance exists**
- Where: `lgpd-art7` › professionalLayer, assessTrigger and gapRemediation.enterprise ("ANPD
  guidance is still developing", "until clearer ANPD guidance emerges"); `legalBases.json` ›
  `legitimate-interests` › `lgpd` ("partial … still developing under ANPD").
- Fix: The ANPD published its Legitimate Interest Guide on 2 Feb 2024. Legitimate interest is
  a full statutory basis (Art 7 IX, Art 10), with a balancing test and not available for
  sensitive data. "yes" fits better.
- Source: Mattos Filho (search snippet); planalto. Confidence: medium-high.

### MISLEADING
- **BR-M1.** `lgpd-art7`: "legitimate interests… more narrowly applied than GDPR's". This is
  opinion. Remove or soften.
- **BR-M2.** `grid.json` › `automated-decision-making` › `lgpd`: "Right to review… Similar to
  GDPR." LGPD Art 20 gives only a right to **request review**; the human-reviewer paragraph was
  vetoed in 2019. The GDPR gives a right **not to be subject** to such decisions. Confidence:
  high.
- **BR-M3.** `individualRights.json` › `object` › `lgpd`: "yes". Art 18 §2 allows objection
  only to processing based on a consent waiver, and only in case of non-compliance with the
  law. Suggest "partial". Confidence: high.
- **BR-M4.** `legalBases.json` › `credit-protection` › `lgpd` and `lgpd-art7` ›
  professionalLayer: "Unique to LGPD". Argentina (Law 25.326 Art 26) and Uruguay (Law 18.331
  Art 22) also have credit-data regimes, and the same row marks them "yes". Confidence: high.
- **BR-M5.** `grid.json` › `dpo-requirement` › `lgpd`: "Encarregado mandatory for controllers.
  Broader requirement than GDPR". Small processing agents are exempt (Res. CD/ANPD 2/2022
  Art 11) unless they do high-risk processing; they must offer a contact channel instead.
  Confidence: medium-high.

### MINOR
- `lgpd.json` › `jurisdiction.fullName`: "Lei Geral de Proteção de Dados". The official name
  since Law 13.853/2019 is "Lei Geral de Proteção de Dados **Pessoais**".
- `lgpd-art48`: accurate. Optionally add that the small-agent doubling also applies to the
  20-day supplement (to 40) and to notice to individuals (Res. 15/2024 Art 6 §8, Art 9 §6).
  The smb gapRemediation should repeat "unless high-risk".
- `lgpd-art18-deletion`: omits Art 18 VI (deleting consent-based data) and §6 (immediately
  inform recipients).
- `grid.json` › `breach-individual-notification` › `lgpd`: no deadline given. It is 3 business
  days (Res. 15/2024 Art 9).
- `lgpd-scope` › personalImpact: "hundreds of millions" of CPF numbers leaked. Not checked;
  verify or soften.
- DATA-ONLY: `lgpd-art48` › comparisonFlags "2 days preliminary, 5 days supplementary"
  (should be 3 + 20 business days); the same stale figure in `gdpr.json` comparisonFlags and
  glossary `breach-notification` jurisdiction. **Rendered:** `pipl-art57` still says "LGPD's
  2-5 business day framework" (see file 04, CN-S2).

### Verified OK
- Art 3 scope; the ten Art 7 bases; Art 5 II sensitive categories.
- Art 8 §4–5; Art 11 I; Art 33 VIII.
- Art 52 fines (2% of Brazil revenue, capped at R$50M per infraction); Arts 22 and 42.
- Res. 15/2024: 3 business days to the ANPD and individuals, a 20-business-day supplement,
  and small agents doubled. The in.gov.br link is correct.
- All rendered LGPD links resolve correctly.

---

## Argentina (Law 25.326) — `src/data/jurisdictions/pdpa-ar.json` and the `pdpa-ar` column

### ERROR

**AR-E1. Year of the law**
- Where: notes in `timeBasedObligations.json` › `breach-authority` › `pdpa-ar` and
  `breach-individuals` › `pdpa-ar`, and `sensitiveData.json` › `biometric` › `pdpa-ar`. Now:
  "The 1998 law…"
- Fix: Law 25.326 dates from **2000** (sanctioned 4 Oct 2000, published 2 Nov 2000).
- Source: infoleg. Confidence: high.

### STILL PRESENT
- **AR-S1.** `pdpa-ar-transfers` › professionalLayer lists consent among the Art 12(2)
  exceptions and says "medical emergencies". Art 12(2) lists:
  - international judicial cooperation;
  - medical data exchange needed for treatment or epidemiological research;
  - bank and stock-exchange transfers;
  - treaty-based transfers;
  - intelligence cooperation (omitted on the page).

  The **consent** exception comes from **Decree 1558/2001, Art 12**. The plainSummary is fine
  in practice. Confidence: high.
- **AR-S2.** `pdpa-ar-scope` omits:
  - Argentina has been a party to Convention 108 since 2019;
  - it ratified the **108+** protocol (Law 27.699; deposited 17 Apr 2023);
  - the EU reaffirmed its 2003 adequacy decision on 15 Jan 2024.

  "Reform bills pending, none enacted" is still accurate. The AAIP-backed bill 3397-D-2026 was
  filed 16 Jul 2026. Confidence: high.
- **AR-S3.** `individualRights.json` › `automated-decisions` › `pdpa-ar`: "no". Art 20 bars
  judicial decisions and administrative acts from resting solely on automated profiling, and
  declares such acts void. With AAIP Res. 4/2019 this supports "**partial**". Confidence: high.

### OUTDATED
- **AR-O1.** `sensitiveData.json` › `genetic` › `pdpa-ar`: "treated as health-related in
  practice". AAIP **Res. 255/2022** (15 Dec 2022) declares genetic data sensitive where it
  identifies a person and reveals health information, or could be used to discriminate.
  Source: https://www.argentina.gob.ar/normativa/nacional/norma-376740/texto. Confidence: high.
- **AR-O2.** `internationalTransfers.json` › `bcrs` › `pdpa-ar`: "recognized in practice,
  guidance developing". AAIP **Res. 159/2018** set formal BCR guidelines. **Verify first**
  (search snippet). Confidence: medium.

### MISLEADING
- **AR-M1.** `consentStandards.json` › `sensitive-explicit` › `pdpa-ar`: "Sensitive data needs
  specific consent." Art 7(2) allows sensitive data only for general-interest reasons
  authorised by law, or for statistics and science where people cannot be identified. It does
  not frame a consent route. Confidence: medium.
- **AR-M2.** `consentStandards.json` › `easy-withdrawal` › `pdpa-ar`: "yes". Consent is
  revocable (Decree 1558/2001 Art 5), but nothing requires withdrawal to be as easy as giving.
  Suggest "partial". Confidence: medium.

### MINOR
- `pdpa-ar-breach` › personalImpact: "guidance calls for prompt notice to the AAIP and affected
  people". Res. 47/2018 recommends notice to the AAIP. Notifying individuals reportedly comes
  from Res. 332/2020. **Verify first.**
- `enforcementPenalties.json` › `max-fine` › `pdpa-ar`: optionally add the figures. The
  statute sets ARS 1,000–100,000 per sanction (Art 31). AAIP Res. 126/2024 sets graduated and
  cumulative caps up to ARS 50M (secondary).

### Prior claim that was WRONG (no action)
- `internationalTransfers.json` › `consent-transfer` › `pdpa-ar` "yes" is **correct**, because
  of Decree 1558/2001 Art 12.

### Verified OK
- Arts 1–2 scope (covers legal persons too); Art 5 consent and exceptions; Art 7(1).
- Art 14: 10 calendar days, free every 6 months, habeas data.
- Art 16: 5 business days, blocking, notice onward.
- Art 26 credit data; Art 27(3); Art 31.
- EU adequacy 2003 / 2024; AAIP adequate-country list and model clauses.
- The biometric "partial" state (only its "1998" note is wrong).
- All links resolve.

---

## Uruguay (Law 18.331) — `src/data/jurisdictions/lpdp-uy.json` and the `lpdp-uy` column

### ERROR

**UY-E1. Automated decisions**
- Where: `individualRights.json` › `automated-decisions` › `lpdp-uy`. Now: "no — No specific
  automated-decision right."
- Fix: **Art 16** (reworded by Law 18.719) gives a right not to be subject to decisions with
  significant legal effects based on automated evaluation of personality. It also gives a right
  to information on the criteria and program used. Law 20.075 (2022) added an information duty
  (Art 13 G) and a regulator power (Art 34 I). Use "**yes**".
- Source: https://www.impo.com.uy/bases/leyes/18331-2008. Confidence: high.

**UY-E2. Breach deadline for individuals**
- Where: `timeBasedObligations.json` › `breach-individuals` › `lpdp-uy`. Now: "72 hours…
  informed alongside the URCDP."
- Fix: The **72 hours applies to the URCDP only** (Decree 64/020 Art 4). Affected people must
  be informed **immediately** (Law 19.670 Art 38), meaning those who suffered a significant
  impact, in clear and simple language. No hour count applies. The cell also contradicts the
  site's own `lpdp-uy-breach` page.
- Source: impo.com.uy (Law 19.670; Decree 64/020). Confidence: high.

### STILL PRESENT
- **UY-S1.** `lpdp-uy-consent`: articleRef "Article 9" and source label "Ley 18.331 Article
  9", but the block carries the sensitive-data rule (express written consent). That rule is
  **Art 18**; health data under professional secrecy is Art 19. Retitle to "Articles 9 and 18"
  or split the block. Confidence: high.
- **UY-S2.** `lpdp-uy-scope`:
  - It omits Uruguay's ratification of the **108+** protocol (5 Aug 2021).
  - It says the DPO, impact-assessment and breach duties came "through implementing decrees".
    They come from **Law 19.670** (Arts 38–40, and Art 12 on impact assessment) and are
    implemented by **Decree 64/020**. The large-volume DPO threshold is in Decree 64/020 Art 14:
    more than 35,000 people.
  - "reach organizations abroad that process data about people in Uruguay" is imprecise. Law
    19.670 Art 37 covers offering goods or services to people in Uruguay, analysing their
    behaviour, international law or contract, and means located in Uruguay.
  - Also fix `scope.json` › `territorial-reach` and `extraterritorial` › `lpdp-uy`, which cite
    only "means located in Uruguay".
  - Confidence: high.

### Correction of the 2026-10-03 claim (apply this version)
- **UY-C1.** `sensitiveData.json` › `biometric` › `lpdp-uy`: the note "Addressed through URCDP
  guidance, not itemized" is wrong. **Law 19.924** (18 Dec 2020), Arts 86–87, added a
  statutory definition of biometric data (Art 4 Ñ) and Art 18-BIS, which allows biometric
  processing after an impact assessment. It did **not** make biometric data sensitive, so keep
  "partial" and fix the note.
- `sensitiveData.json` › `genetic` › `lpdp-uy`: genetic data is **not** itemized. The
  2026-10-03 claim that Law 19.924 added it was wrong.
- Source: impo.com.uy (Law 18.331 as amended). Confidence: high.

### MISLEADING
- **UY-M1.** `lpdp-uy-breach` › plainSummary ("inform affected people once the impact is
  known") and responseTimeline ("Individuals: once impacts are determined").
  - The law says inform **immediately** (Law 19.670 Art 38).
  - Containment must start within 24 hours (Decree 64/020 Art 3).
  - The post-incident report is mandatory ("deberá"), not merely "expected".
  - Confidence: high.

### MINOR
- `lpdp-uy-transfers`: omits that the URCDP requires prior authorisation for transfers based
  on contract clauses. Model clause sets exist (Res. 41/021, 50/022 and 8/026, Council of
  Europe 108+ clauses, Apr 2026). **Verify first** (search snippets).
- `enforcementPenalties.json` › `max-fine` › `lpdp-uy`: optionally add the Art 35 cap of
  500,000 UI.
- "First non-European state to join Convention 108": consistent with Council of Europe records
  (2013), but no source stating "first" was opened. **Verify first.**
- Links: file 01, L14.

### Verified OK
- Art 1 human right; Art 3 scope; Art 9 consent and exceptions.
- Art 14 (5 business days); Art 15 (5 business days).
- Art 18 express written consent; Art 22 credit data; Art 23 transfer exceptions including
  consent.
- Decree 64/020: 72 hours to the URCDP. Law 19.670 Art 40: DPO.
- EU adequacy 2012, reaffirmed Jan 2024.
- Links resolve.
