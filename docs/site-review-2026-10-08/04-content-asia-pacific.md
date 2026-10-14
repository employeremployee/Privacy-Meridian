# 04 — Asia-Pacific: China (PIPL), South Korea (PIPA), Japan (APPI), New Zealand, India (DPDP)

Format and rules as in README. Comparison cells get no article numbers.

---

## China (PIPL) — `src/data/jurisdictions/pipl.json` and the `pipl` column

The PIPL text was checked against the DigiChina (Stanford) translation; other rules against
cac.gov.cn primary texts.

### ERROR

**CN-E1. "15 working days" is not a PIPL rule**
- Where (all of these):
  - `pipl-art44`, `pipl-art47`, `pipl-art24` › responseTimeline;
  - `grid.json` › `dsr-response-timeline` and `right-to-correct` › `pipl` ("Within 15 working
    days after verification");
  - `timeBasedObligations.json` › `dsr-standard` › `pipl`.
- Fix:
  - **PIPL Art 50** and **Network Data Security Management Regulations Art 23** (effective
    1 Jan 2025) require requests to be handled **promptly**. Neither sets a day count. The
    regulations contain no "working days" at all.
  - The 15-working-day figure comes from the 2019 rules for identifying unlawful app data
    collection (App违法违规收集使用个人信息行为认定方法, category 六). That rule covers
    **apps only**: correction, deletion and account cancellation needing manual handling, plus
    complaints. It does not cover access requests or Art 24 explanation requests.
  - Suggested wording: "No statutory deadline. Requests must be handled promptly."
- Also fix: `timeBasedObligations.json` › `dsr-extension` › `pipl` ("Reasonable extension / No
  fixed statutory maximum specified"). There is no deadline to extend. Suggest "No statutory
  deadline. Handle requests promptly."
- **Do not cite** the Jan 2026 draft app rules (which would set 15 working days for account
  cancellation). It is a draft, not law.
- Sources: https://www.cac.gov.cn/2024-09/30/c_1729384452307680.htm (regulations; independently
  verified: Art 23 says "及时", meaning promptly);
  https://www.cac.gov.cn/2019-12/27/c_1578986455686625.htm (2019 app rules). Confidence: high.

**CN-E2. Deletion: outside processors and backups**
- Where: `pipl-art47` › professionalLayer ("Where a personal information handler entrusts a
  third party with processing and deletion is required, the handler must notify the entrusted
  party to delete as well"), plus assessTrigger and all three gapRemediation tiers ("…entrusted
  third-party processors", "backup deletion").
- Fix: **Art 47 says nothing about entrusted parties or backups.** Art 21 separately requires
  an entrusted party to return or delete data when the entrustment ends.
- Art 47's grounds for deletion are:
  1. the purpose is achieved, impossible, or no longer needed;
  2. the handler stops providing the product or service, or the retention period expires;
  3. consent is withdrawn;
  4. the processing violates laws or agreements;
  5. other circumstances under law.
- Art 47(2): if the retention period hasn't expired, or deletion is technically difficult, the
  handler must stop processing except storage and necessary security measures. "Deletion upon
  backup system update" is not in the statute.
- Confidence: high.

### STILL PRESENT from 2026-10-03

**CN-S1. Transfer mechanisms**
- Where: `pipl-art38-43` › professionalLayer and assessTrigger ("PIPL's five transfer
  mechanisms").
- Fix: Art 38 lists **four** routes: CAC security assessment, certification, CAC standard
  contract, and other conditions set by law or the CAC. A separate paragraph covers treaties.
  Confidence: high.

**CN-S2. Breach notification**
- Where: `pipl-art57` › professionalLayer.
- Fix:
  - "individual notification may be replaced by public announcement" → Art 57(2): the handler
    **need not notify individuals** if its measures effectively avoid harm, but the regulator
    may still require notice. The statute has no "public announcement" substitute. The
    regulations' Art 11 lists announcement only as one channel for notifying.
  - "LGPD's 2-5 business day framework" → LGPD is **3 business days** (plus a 20-day
    supplement). Or remove the cross-law comparison.
- Also fix `grid.json` › `breach-individual-notification` › `pipl` ("May be replaced by public
  announcement…").
- plainSummary ("must notify… affected individuals immediately") omits the Art 57(2)
  exception. The duty also covers incidents that "have occurred or might have occurred". In
  the statute, "immediately" attaches to remedial measures. Confidence: high.

**CN-S3. Lawful bases and consent (`pipl-art13`)**
- "six lawful bases" → Art 13 has **seven** items:
  1. consent;
  2. a contract **or human-resources management** under labour rules and collective
     contracts;
  3. legal duties;
  4. public-health emergencies or protecting life and property;
  5. news reporting and public-opinion supervision in the public interest, within reasonable
     scope;
  6. information already lawfully made public, within reasonable scope;
  7. **other circumstances provided by law**.
- "PIPL requires separate consent for each processing purpose. Bundled consent is not
  permitted." Also in personalImpact ("You give permission purpose by purpose"), all
  gapRemediation tiers, and the comparisonFlag (data-only).
  - **Separate consent** (单独同意) is required only in Arts 23 (sharing with another handler),
    25 (public disclosure), 26 (public-area images), 29 (sensitive data) and 39 (cross-border
    transfer).
  - Re-consent is needed when the purpose changes (Art 14).
  - The anti-bundling rule is Art 16: a handler cannot refuse service because a person
    declines non-essential processing.
- "PIPL's analog is narrower" (legitimate interests) → PIPL has **no** legitimate-interests
  basis.
- Confidence: high.

**CN-S4. Automated decisions (`pipl-art24`)**
- Where: professionalLayer, assessTrigger, gapRemediation.midMarket ("Opt-out and human review
  mechanisms are required"), and `grid.json` › `automated-decision-making` › `pipl`.
- Fix: Art 24 requires transparency and fairness, and bars unreasonable price discrimination.
  For marketing pushes, the handler must offer non-personalised options **or** an easy way to
  refuse (alternatives, not both). Individuals may demand an **explanation** and may **refuse
  decisions made solely by automated means that have a major impact** on them. Art 24 does
  not mention "human review".
- personalImpact ("Article 24 lets you refuse decisions made solely by profiling") → only
  decisions with a major impact. Coming after the pricing example, it implies people can refuse
  algorithmic prices; the pricing rule is a duty on the handler. Confidence: high.

### OUTDATED

**CN-O1. Incident-reporting deadlines**
- Where: `pipl-art57` › professionalLayer and responseTimeline ("some sector-specific
  regulations requiring notification within 24 hours"); `grid.json` ›
  `breach-notification-timeline` › `pipl`; `timeBasedObligations.json` › `breach-authority` ›
  `pipl`.
- Fix: The **National Cybersecurity Incident Reporting Measures** (effective **1 Nov 2025**)
  require incidents rated "relatively major" or above to be reported within **4 hours** to the
  provincial CAC. That includes a leak of personal information of 1 million or more people.
  Critical-infrastructure operators have **1 hour**; central and state bodies have 2 hours.
  These are separate from PIPL Art 57, which sets no hour count.
- The regulations' only 24-hour rule (Art 10) concerns product flaws that endanger national
  security. It is not a personal-data breach rule.
- Source: Measures text (jswx.gov.cn reprint); cac.gov.cn 2025-09-15 announcement. Confidence:
  high.

**CN-O2. Rules now in force that the site omits** (decide scope with Jared, file 01 D9)
- **Simplified measures for small handlers** (CAC/MPS **Order No. 25**, effective **1 Sep
  2026**), for handlers of fewer than 100,000 people's data:
  - simplified notice and shared rules;
  - a self-check compliance audit at least every **5 years**;
  - simplified impact assessments;
  - listed cross-border exemptions;
  - leniency for minor violations.
  This is especially relevant to `pipl-scope` › gapRemediation.smb. Source:
  https://www.cac.gov.cn/2026-07/24/c_1786638889704872.htm (independently verified).
- **Cybersecurity Law amendment** (adopted 28 Oct 2025, effective 1 Jan 2026):
  - new Art 42(2) links personal-data processing to the Civil Code and PIPL;
  - personal-information violations are punished under "relevant laws" (PIPL Art 66);
  - fines for serious consequences are RMB 500,000–2 million, and RMB 2–10 million for
    particularly severe cases.
  Source: https://www.gov.cn/yaowen/liebiao/202510/content_7046194.htm.
- **Compliance Audit Measures** (effective 1 May 2025):
  - handlers of more than 10 million people's data audit at least every 2 years;
  - handlers of 1 million or more must designate a personal-information protection officer;
  - the CAC announcement of 18 Jul 2025 requires reporting the officer's details.
  Search snippets of official pages; medium-high.
- **Facial Recognition Security Management Measures** (effective 1 Jun 2025):
  - separate consent is required;
  - face recognition may not be the only verification option where alternatives exist;
  - a filing is due within 30 working days once 100,000 people's face data is stored.
  Search snippets; medium-high.

### MISLEADING

**CN-M1. The 2024 transfer relaxation**
- Where: `pipl-art38-43` › professionalLayer. Now: "exempting certain lower-risk transfers,
  such as those needed for international trade".
- Fix:
  - The 22 Mar 2024 Provisions (Art 3) exempt trade, transport and academic data **only when
    it contains no personal information or important data**.
  - The **personal-information** exemptions (Art 5) are:
    - contracts with the individual (cross-border shopping, payment, booking, visa);
    - cross-border HR management;
    - emergencies;
    - non-critical-infrastructure handlers sending fewer than **100,000** people's
      non-sensitive data since 1 January.
  - Thresholds:
    - a security assessment is required for critical-infrastructure operators, **1 million or
      more** people's non-sensitive data, **10,000 or more** people's sensitive data, or
      important data;
    - a standard contract or certification covers 100,000 to under 1 million non-sensitive, or
      under 10,000 sensitive.
  - Data counts as "important data" only once authorities notify or publish it.
- Source: https://www.cac.gov.cn/2024-03/22/c_1712776611775634.htm. Confidence: high.

**CN-M2. Certification is not new**
- Where: `pipl-art38-43`. Now: "A certification route for mid-sized exporters took effect
  January 1, 2026."
- Fix: The **Certification Measures** (CAC/SAMR Order 20) took effect 1 Jan 2026.
  Certification itself has been a statutory route since 2021 (Art 38(2)). Eligibility is the
  same band as the standard contract.
- Source: https://www.cac.gov.cn/2025-10/17/c_1762449728720008.htm. Confidence: high.

**CN-M3. Localization and security assessment are overstated**
- Where: `pipl-art40` ("must pass a CAC security assessment"); `grid.json` ›
  `data-localization` › `pipl` ("CAC security assessment required for transfers");
  `cross-border-transfer-mechanisms` › `pipl` ("…CAC standard contracts only").
- Fix: Art 40 allows exceptions where laws or CAC rules provide them (2024 Provisions Art 5;
  regulations Art 35). For handlers that aren't critical-infrastructure operators, an
  assessment is now triggered by **transfer** volume or important data, not processing volume.
  Confidence: high.

**CN-M4. Per-purpose consent cells**
- Where: `consentStandards.json` › `per-purpose` › `pipl` ("yes — Separate consent per
  purpose") and `grid.json` › `opt-out-vs-opt-in` › `pipl`.
- Fix: "partial" (see CN-S3). The cell currently outranks the GDPR's "partial". Confidence:
  high.

**CN-M5. Consent is not a standalone transfer route**
- Where: `internationalTransfers.json` › `consent-transfer` › `pipl` ("yes").
- Fix: separate consent (Art 39) is required **in addition to** an Art 38 mechanism. It is not
  a route on its own. Confidence: high.

**CN-M6. Small-business advice**
- Where: `pipl-scope` › gapRemediation.smb ("…consent and data localization requirements are
  operationally significant even at small scale").
- Fix: localization applies only to critical-infrastructure operators and handlers above CAC
  volume thresholds. Small handlers now have simplified rules (CN-O2). Confidence: high.

### MINOR
- `enforcementPenalties.json` › `max-fine` › `pipl`: "¥50M or 5% of annual revenue". Write
  **RMB 50 million or 5% of the previous year's turnover**. The APPI cell in the same table uses
  ¥ for yen.
- `individualRights.json` › `non-discrimination` › `pipl` note cites Art 24 pricing. The
  on-point rule is **Art 16** (no refusing service for declining or withdrawing consent).
- `sensitiveData.json` › `racial-ethnic` and `sexual-orientation` › `pipl` ("caught by the
  general sensitive-data definition"): Art 28 defines sensitive data by harm, with a
  non-exhaustive list. Say "may qualify". This also makes them consistent with
  `political-opinions` = "no".
- `pipl-art38-43` › personalImpact ("often a security review") and plainSummary ("government
  security review for larger organizations"): the trigger is critical-infrastructure status or
  transfer volume, not organisation size.
- `pipl-scope` › personalImpact ("any company handling data of people in China, including from
  abroad"): reach outside China is limited to providing products or services to people in
  China, analysing their behaviour, or other cases set by law (Art 3).
- `legalBases.json` › `public-interest` › `pipl`: Art 13(5) is limited to news reporting and
  public-opinion supervision within reasonable scope. State organs' tasks are covered by
  Art 34.
- `grid.json` › `right-to-portability` › `pipl`: acceptable. The conditions now exist in
  regulations Art 25 (four conditions).
- `pipl-art38-43` › gapRemediation.enterprise "CAC-approved SCC": the standard contract is
  **filed**, not approved. **Verify first.**
- `pipl-art44` "applies regardless of whether consent is the legal basis" is interpretation.
  Art 44 carries "unless laws or administrative regulations provide otherwise". Low.
- Glossary items (`data-localization`, `legitimate-interests`, `ropa`,
  `meaningful-human-involvement`): see file 01.
- Links: file 01, L13.
- Drafts that must **not** be presented as law: the Jan 2026 draft app rules, and the Aug 2026
  draft large-handler provisions (10 million threshold).
- DATA-ONLY: `pipl-art13` and `pipl-art57` comparisonFlags repeat the per-purpose and
  no-fixed-threshold claims.

### Verified OK
- Header (effective 1 Nov 2021); Art 3 scope; Art 53 representative.
- Art 28 sensitive list and minors under 14; Art 29 separate consent for sensitive data;
  Art 31 children; Art 15 withdrawal.
- Arts 44–47 rights; Art 24(3) refusal right.
- Legal-bases yes/no cells (except as noted).
- Art 66 maximum, suspension and personal liability; Art 69 presumed fault.
- Transfer cells for adequacy, SCC, BCR, certification, security assessment and localization.
- The March 2024 relaxation; the 1 Jan 2026 certification measures date.
- DigiChina and CAC links.

---

## South Korea (PIPA) — `src/data/jurisdictions/pipa-kr.json` and the `pipa-kr` column

Statute and decree text were checked on casenote.kr (a mirror of law.go.kr, which blocks
automated tools), plus the KLRI English text, Hunton, Newsis and Kim & Chang.

### ERROR

**KR-E1. Two different amendments merged into one "2025 amendment"**
- Where: `pipa-kr-scope` › professionalLayer. Now: "A 2025 amendment requires foreign
  operators to appoint a domestic representative and raises the top administrative fine to 10
  percent…"
- Fix: these are **two laws**.
  - **Act No. 20897** (promulgated 1 Apr 2025, in force **2 Oct 2025**) only tightened the
    domestic-agent rule (Art 31-2). A foreign controller meeting the thresholds (prior-year
    total revenue of KRW 1 trillion or more, 1 million+ Korean data subjects on a daily
    average, or a PIPC designation) **with a Korean subsidiary** must appoint that company as
    its agent, and must supervise the agent. The agent requirement itself dates from 2020 and
    was extended in 2023.
  - **Act No. 21445** (passed 12 Feb 2026, promulgated 10 Mar 2026, in force **11 Sep 2026**)
    added the **10% tier**:
    - The cap rises to 10% of **total revenue** (KRW 5 billion if revenue can't be
      calculated) in three cases (Art 64-2(2)): an intentional or grossly negligent repeat
      violation within 3 years; an intentional or grossly negligent violation affecting 10
      million or more people; or a breach after failing to follow a corrective order.
    - Only violations and orders after 11 Sep 2026 count.
    - Reductions are mandatory for investment in privacy safeguards, except for intent or gross
      negligence.
    - It also added breach notice when a leak is merely **possible** (Art 34(2)) and made the
      CEO or representative ultimately responsible. The CEO and CPO duties are from secondary
      sources only.
    - Mandatory ISMS-P certification for large controllers starts 1 Jul 2027.
- Sources: casenote.kr statute and supplementary provisions; Hunton; seoulz; Newsis.
  Confidence: high (independently verified).

**KR-E2. Citation**
- Where: `jurisdiction.citation`. Now: "substantially amended 2020, 2023, and 2025".
- Fix: add **2026** (Act No. 21445). The 2025 change was narrow, so "substantially" overstates
  it. Confidence: high.

**KR-E3. Legitimate interests was not added in 2023**
- Where: `legalBases.json` › `legitimate-interests` › `pipa-kr` ("added by the 2023
  amendment").
- Fix: the basis (Art 15(1)6: a justifiable interest that clearly overrides the person's
  rights) has been in the Act since before 2023. It appears in the KLRI 2020 translation.
  "partial" is fine. Confidence: high.

**KR-E4. Transfer cells**
- Where: `internationalTransfers.json` › `pipa-kr`.
- Fix:
  - `certification` "partial — ISMS-P supports but does not authorize transfer" → **yes**.
    Art 28-8(1)4 authorises transfer to a recipient holding PIPC-designated certification.
  - `adequacy` "partial — being developed" → **yes**. The PIPC recognised the **EU** as
    equivalent, in force **16 Sep 2025**. The EU is the only recognised jurisdiction so far.
- Source: statute (casenote); https://commission.europa.eu/news-and-media/news/joint-press-statement-commissioner-michael-mcgrath-and-chairperson-haksoo-ko-entry-force-korean-2025-09-16_en
  (independently verified). Confidence: high.

**KR-E5. Downstream recipients**
- Where: `pipa-kr-deletion` › professionalLayer. Now: "Downstream recipients must be informed
  of corrections and deletions."
- Fix: no such duty was found. Enforcement Decree Art 43(2) runs the other way: a controller
  that received data from another controller must tell **the provider** about the request.
  **Verify first.** Confidence: medium.

### STILL PRESENT / OUTDATED

**KR-S1. Breach notice to individuals**
- Where: `pipa-kr-breach` › professionalLayer, responseTimeline and plainSummary ("without
  delay"); `timeBasedObligations.json` › `breach-individuals` › `pipa-kr` ("Without delay").
- Fix: individuals must be notified within **72 hours** (Enforcement Decree Art 39), with
  exceptions for urgent containment or force majeure. The PIPC report is also 72 hours
  (Art 40).
- Also:
  - "Its 2023 implementing decree" → the current decree is No. 36671 (in force 11 Sep 2026).
  - Add the new notice duty for **possible** leaks (Art 34(2)).
  - Secondary sources say "leak" now includes forgery, alteration and damage, and that notices
    must include remedies. **Verify first** for those.
- Confidence: high on 72 hours.

**KR-S2. Fine cap**
- Where: `enforcementPenalties.json` › `max-fine` › `pipa-kr`. Now: "Up to 3% of total
  revenue."
- Fix: **up to 3%, or up to 10% of total revenue in aggravated cases** (since 11 Sep 2026).
  Confidence: high.

**KR-S3. Portability**
- Where: `individualRights.json` › `portability` › `pipa-kr`. Now: "being phased in".
- Fix: Art 35-2 has been in force since **March 2025**, starting with healthcare and
  telecoms. A decree approved Feb 2026 extends it to all sectors for large controllers,
  phasing in from Aug 2026 (secondary). "partial" can stay. Confidence: medium-high.

### MISLEADING
- **KR-M1.** `internationalTransfers.json` › `sccs` › `pipa-kr`: "partial — Contractual
  safeguards used…". Art 28-8 has **no standard-clause route**; its contract item is contract
  necessity plus disclosure. The PIPC announced plans for SCCs and BCRs in Sep 2026 (search
  snippet). Suggest "no (proposed)". Confidence: medium.
- **KR-M2.** `timeBasedObligations.json` › `dsr-extension` › `pipa-kr`: "May be extended once
  with notice." There is no one-time extension. Access may be **postponed** with notice of the
  reasons, and must be given once the reason ends. The only extension rule (up to 2 × 30 days)
  is for objections to automated decisions (Decree Art 44-3(5)). Confidence: medium.

### MINOR
- `enforcementPenalties.json` › `private-action` › `pipa-kr`: "Statutory damages… with an
  option for fixed compensation" is redundant. Accurate version:
  - damages with a reversed burden of proof (Art 39);
  - up to **5×** for intentional or grossly negligent leaks;
  - **or** statutory damages up to KRW 3 million (Art 39-2).
- `pipa-kr-art15`: the list omits item 7 (urgent public safety or public health, added 2023).
- `pipa-kr-scope` "extraterritorial reach": PIPA has no express clause. Reach comes from PIPC
  practice and the agent rule. The wording is fine but interpretive.
- Not yet in force (do not present as law): an amendment creating an AI-development exception
  passed the National Assembly on 20 Aug 2026. It takes effect 6 months after promulgation;
  the promulgation date is unverified.
- Links: file 01, L10.

### Prior claim that was WRONG (no action)
- `pipa-kr-art15` "The 2023 amendments eased the contract basis" is **correct**. The text
  changed from "inevitably necessary to execute and perform a contract" to "necessary to
  perform a contract, or to take steps at the data subject's request while concluding one".
  Keep it.

### Verified OK
- 10-day deadlines for access, correction, deletion and suspension (Decree Arts 41–44).
- PIPC report thresholds: 1,000+ people, sensitive or unique-identifier data, or outside
  unlawful access.
- Guardian consent under 14.
- Automated-decision rights (Art 37-2, from 15 Mar 2024); consent withdrawal.
- Art 28-8 route list and Art 28-9 suspension power.
- CPO duty with a small-business exception.
- Sensitive-data items.
- 2023 effective dates.
- EU adequacy for Korea (Dec 2021) still in place.

---

## Japan (APPI) — `src/data/jurisdictions/appi.json` and the `appi` column

### OUTDATED — the 2026 amendment is not yet in force

**JP-T1. Status wording**
- Where: `jurisdiction.citation`, `appi-scope`, `appi-purpose`, `appi-cease-use` (all say
  "phasing in").
- Fix: **Act No. 56 of 2026**:
  - passed the House of Councillors **10 Jul 2026** and was promulgated **17 Jul 2026**;
  - some penalty provisions start **17 Jan 2027**;
  - the main body starts on a date set by cabinet order, **no later than 16 Jul 2028**. That
    covers the statistics/AI exception, specific biometric information, under-16 rules,
    processor rules and the surcharge.
  - **No start-date order had been issued** when checked.

  Say "passed in 2026, not yet in force" rather than "phasing in".
- Source: https://www.ppc.go.jp/personalinfo/legal/r8kaiseihogohou (confirms the passage and
  promulgation dates); Miyake & Partners newsletter No. 22. Confidence: high.

### STILL PRESENT

**JP-S1. "Administrative fines for the first time"**
- Where: `appi-scope`.
- Fix: the 2026 Act adds an **administrative surcharge** (課徴金). It is narrow:
  - it takes away the **profit gained** from the violation; it is not tied to revenue;
  - it covers only four violation types: improper use (Art 19), deceptive acquisition (Art
    20(1)), third-party provision without consent (Art 27(1)), and breaches of the statistics
    exception;
  - it requires more than **1,000** people affected, a lack of due care, and harm that is not
    minor;
  - security-measure failures (Art 23) are excluded;
  - it is not yet in force.

  "For the first time" is also loose: the APPI already had small non-criminal fines (過料).
- Source: Baker McKenzie; Mori Hamada; Miyake newsletter. Confidence: high.

**JP-S2. ¥100M is a criminal fine**
- Where: `enforcementPenalties.json` › `max-fine` › `appi` ("Up to ¥100M", in a row titled
  "administrative fine").
- Fix: ¥100 million is a **court-imposed criminal fine** for corporations. Add a note on the
  surcharge that is coming. Confidence: high.

**JP-S3. Breach report deadline in the table**
- Where: `timeBasedObligations.json` › `breach-authority` › `appi` ("full report within 30
  days").
- Fix: 30 days, or **60 days** for breaches with a suspected unlawful purpose. The appi.json
  page itself is correct.
- Also `appi-breach` › professionalLayer: "intentional or wrongful acts" → "suspected unlawful
  purpose" (不正の目的), for both the reporting trigger and the 60-day rule. Confidence: high.

**JP-S4. Children's consent age**
- Where: `consentStandards.json` › `children` › `appi` and `sensitiveData.json` ›
  `childrens-data` › `appi` ("Guidelines expect guardian consent for children under 15").
- Fix: current PPC practice covers roughly ages **12–15 and younger**. The 2026 Act sets a
  statutory **under-16** rule (Arts 40-2, 35(9)–(10), 58-3), **not yet in force**.
  Confidence: high.

### MISLEADING
- **JP-M1.** `appi-scope` "relief for entrusted data processors": the 2026 Act also imposes a
  new direct duty on processors not to use data beyond the outsourced task (Art 30-3). Relief
  applies only to purely mechanical, contract-defined processing (Art 58-2). Not yet in force.
  Confidence: high.
- **JP-M2.** `internationalTransfers.json` › `certification` › `appi`: "no — Not a distinct
  transfer mechanism." A recipient certified under an international framework (APEC CBPR,
  and reportedly Global CBPR) satisfies the Art 28 equivalent-safeguards route (PPC Rules
  Art 16(ii)). Suggest "partial". Confidence: medium-high.

### MINOR
- The 2026 Act also, once in force:
  - lets operators skip individual breach notice for low-risk incidents (Art 26(2));
  - adds a consent exception for cases "clearly not contrary to the person's intention";
  - tightens opt-out provision.
- Glossary `personal-data` on APPI pages: see file 01.
- Links: file 01, L9.

### Verified OK
- Arts 17–18, 26, 28, 33, 34–35.
- 2020 amendment in force April 2022.
- Special care-required categories; opt-out via PPC notification.
- EEA and UK whitelist.
- Preliminary breach report in about 3–5 days; 1,000-person trigger.
- Mutual adequacy with the EU (2019); public sector included since the 2021 amendment;
  small-business exemption removed in 2017.
- The 2026 content as described on the site (statistics/AI exception, biometric category,
  under-16, processor rules).

---

## New Zealand — `src/data/jurisdictions/nzpa.json` and the `nzpa` column

Checked against legislation.govt.nz (version as at 23 Sep 2026) and privacy.org.nz.

### ERROR

**NZ-E1. Who the access right can be enforced against**
- Where: `nzpa-access` › professionalLayer. Now: "IPP6 confers a legal right of access to
  personal information held by any agency."
- Fix: under **s 31**, IPP 6(1) entitlements are legal rights enforceable in court **only for
  information held by a public-sector agency**. For private agencies the route is a complaint
  to the Privacy Commissioner, an access direction, or the Human Rights Review Tribunal.
- Source: https://www.legislation.govt.nz/act/public/2020/31/en/latest/ (s 31). Confidence:
  high.

### STILL PRESENT

**NZ-S1. "Thirteen" principles (the page contradicts itself)**
- Where: `nzpa-scope` › plainSummary, personalImpact, professionalLayer, assessTrigger,
  gapRemediation.smb.
- Fix: there are now **14** principles (IPPs 1–13 plus **IPP 3A**). IPP 3A has been in force
  since **1 May 2026** (Privacy Amendment Act 2025, No 53). The same page already mentions
  IPP 3A, so "thirteen" contradicts it. Confidence: high.

**NZ-S2. IPP 3A missing from the principles page**
- Where: `nzpa-ipp1-4` (all fields).
- Fix: add IPP 3A. Agencies must take reasonable steps to tell people when information about
  them is collected from someone else. Exceptions include information already known to the
  person, publicly available information, and non-identifying use. Section 25A excludes
  information collected before 1 May 2026.
- gapRemediation.midMarket ("Review indirect collection against IPP2 exceptions") is now
  incomplete.
- Source: legislation.govt.nz (s 22 IPP 3A, s 25A); https://www.privacy.org.nz/privacy-principles/3a/.
  Confidence: high.

**NZ-S3. Macron**
- Where: `nzpa-scope` › personalImpact. "Maori" → "**Māori**".

### MISLEADING
- **NZ-M1.** `nzpa-transfers` › plainSummary and professionalLayer ("only if" / "only
  where"):
  - The lists omit IPP 12(1)(b) (the recipient is itself subject to the Act) and IPP 12(2)
    (lifting the conditions for some law-enforcement and serious-threat disclosures).
  - The statute says the individual "authorises… after being expressly informed", not
    "expressly authorizes".
  - Confidence: medium.
- **NZ-M2.** `internationalTransfers.json` › `nzpa`:
  - `consent-transfer` "partial": the IPP 12(1)(a) authorisation is a standalone route. FADP,
    LGPD, POPIA and Kenya are marked "yes" for similar routes, so use "yes".
  - `certification` note "Not part of the transfer principle": IPP 12(1)(d) provides for
    prescribed binding schemes.
  - `adequacy` note "no formal adequacy list": IPP 12(1)(e) and s 214 provide for prescribed
    countries. None appear to have been prescribed (2020 sources; **verify first** for 2026).
    Say the mechanism exists but is unused.
- **NZ-M3.** `sensitiveData.json` › `childrens-data` › `nzpa`: "no". IPP 4 requires particular
  care when collecting from children or young people. The GDPR and UK, with similar heightened
  care, are "partial". Confidence: medium.

### MINOR
- `nzpa-access`: the 20-working-day deadline is given without the s 48 extension option.
- `nzpa-scope` Biometric Code: it applies to biometric processing, not all collection. Agencies
  already processing biometrics had until **3 Aug 2026**, which has passed.
- `sensitiveData.json` › `genetic` › `nzpa`: "no", yet health is "partial". The Health
  Information Privacy Code covers information from testing bodily substances. Medium-low.
- Penalty reform: the 2026 Cyber Security Action Plan proposes civil penalties under the
  Privacy Act. It is a proposal only, so the NZ$10,000 cap is still correct (secondary).
- `nzpa-correction` "distinctive New Zealand feature": **unverified**. Australia's APP 13 may
  have a similar statement mechanism.
- Links: file 01, L11.

### Fixed since 2026-10-03
- The 20-working-day deadline is no longer cited to IPP 6. It now matches s 44.

### Verified OK
- In force 1 Dec 2020; s 4 overseas agencies; s 11 agents.
- IPP 1–4 and 7 descriptions.
- s 44 (20 working days); s 48 extensions; s 63 corrections; ss 66–67 charging.
- ss 112–115 breach (serious harm; NotifyUs).
- NZ$10,000 offence cap (ss 118, 212).
- IPP 12 conditions and OPC model clauses.
- Biometric Code in force 3 Nov 2025.
- EU adequacy reaffirmed Jan 2024.
- No erasure, portability or objection rights.

---

## India (DPDP Act 2023) — `src/data/jurisdictions/dpdp.json` and the `dpdp` column

Note: India stays coloured on the map by Jared's decision (file 01, D2). The issue below is
**text that presents not-yet-commenced duties as live**.

### Commencement facts (use these everywhere)
- The DPDP Rules were notified **13 Nov 2025**, in three phases:
  - **13 Nov 2025:** Data Protection Board provisions and definitions.
  - **13 Nov 2026:** consent-manager registration (s 6(9), s 27(1)(d), Rule 4).
  - **13 May 2027:** everything else. That covers notice, consent, rights, breach intimation,
    children, significant data fiduciary (SDF) duties, transfers, and penalties (ss 28–34).
- A Jan 2026 MeitY proposal to shorten this to 12 months had **not** been notified as of
  Sep 2026 (secondary).
- The **Board had no Chair or members** as of 12 Aug 2026. Recruitment was advertised
  6 Jun 2026 (Lok Sabha Unstarred Question 3960, primary).
- **Sources:** PIB explainer
  (static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251117695301.pdf);
  Lok Sabha answer (sansad.in/getFile/lsapps/loksabhaquestions/annex/188/AU3960_GyWSTk.pdf);
  G.S.R. 843(E) (secondary).

### STILL PRESENT

**IN-S1. Duties presented as live**
- Where: `dpdp-breach`, `dpdp-rights`, `dpdp-consent`, `dpdp-transfers` (plainSummary,
  personalImpact, professionalLayer). Only `dpdp-scope` carries a commencement caveat.
- Fix: add "applies from 13 May 2027" to each. Confidence: high.

**IN-S2. Consent managers start earlier**
- Where: `dpdp-scope`. Now: "core obligations and rights in Sections 3 to 17, covering…
  consent managers… around mid-2027".
- Fix: consent-manager registration starts **13 Nov 2026**. Confidence: high.

**IN-S3. Breach penalty tiers**
- Where: `dpdp-breach`.
- Fix: ₹250 crore is correctly tied to security failures. Add the **₹200 crore** tier for
  failing to notify a breach (₹200 crore also applies to children's duties). Confidence: high.

**IN-S4. Children's tracking ban exemptions**
- Where: `dpdp-consent`. Now: "tracking, behavioral monitoring, and targeted advertising
  directed at children prohibited".
- Fix: add that the Rules exempt some classes and purposes (healthcare, education,
  real-time safety, and others). Confidence: high.

**IN-S5. Deadlines in the tables**
- Where: `timeBasedObligations.json` › `dsr-standard` / `dsr-extension` › `dpdp` ("As
  prescribed / to be set by rules"); `breach-authority` › `dpdp` ("Without delay");
  `dpdp-rights` › responseTimeline ("within the period prescribed by the DPDP Rules for the
  fiduciary class").
- Fix:
  - Rights requests: a **single maximum of 90 days** for all fiduciaries (Rule 14(3)).
  - Breach: tell the Board **without delay**, then send a **detailed report within 72 hours**
    (Rule 7(2)).
  - Both apply from 13 May 2027.
- Confidence: high.

**IN-S6. Localization**
- Where: `internationalTransfers.json` › `localization` › `dpdp`.
- Fix: the cell describes s 16 country restrictions, not localization. Add **Rule 13(4)**:
  the government can require significant data fiduciaries to keep specified data in India
  (from 2027). Also note no s 16 restricted-country list has been notified (secondary).
  Confidence: high.

**IN-S7. Sensitive data**
- Where: `consentStandards.json` › `sensitive-explicit` › `dpdp` ("partial", based on
  children's consent).
- Fix: "**no**". India has no sensitive-data category. Children are covered in the `children`
  row. Confidence: high.

### OUTDATED
- **IN-O1.** `dpdp-scope` and `dpdp-breach` omit that **IT Act s.43A and the 2011 SPDI Rules
  stay in force until s.44(2) commences on 13 May 2027**. Readers may think India has no
  data-protection duties today. CERT-In's 6-hour incident reporting is the live breach duty
  (not checked). **Verify first.** Confidence: medium.

### MISLEADING
- **IN-M1.** `enforcementPenalties.json` › `max-fine` › `dpdp`: "Per instance, imposed by the
  Data Protection Board". It reads as live. Penalties apply from 13 May 2027, and the Board
  had no members as of 12 Aug 2026. "Per instance" is not statutory wording. Confidence:
  medium.
- **IN-M2.** `legalBases.json` › `legal-obligation` › `dpdp` "yes" and `dpdp-consent` "legal
  obligations": s 7(d) covers only obligations to disclose information to the State, and
  s 7(e) covers judgments and orders. There is no general legal-obligation basis. Suggest
  "partial". Confidence: medium.
- **IN-M3.** `scope.json` › `threshold` › `dpdp`: "with lighter duties for smaller
  fiduciaries". Section 17(3) is only an enabling power, it applies from 2027, and no
  exemption has been notified. Confidence: medium.

### MINOR
- `legalBases.json` › `contract` › `dpdp` "partial / covered within enumerated legitimate
  uses" conflicts with `dpdp-consent`'s "no contract basis".
- `legalBases.json` › `public-data` › `dpdp` "yes": s 3(c)(ii) is a scope exclusion, not a
  lawful basis.
- `dpdp-transfers` omits Rule 15 (government conditions on making data available to foreign
  States).
- `dpdp-scope` › personalImpact: "India's first dedicated rules for that data" ignores the 2011
  SPDI Rules.
- DATA-ONLY: `effectiveDate` "2023-08-11" is the assent date, not commencement.
- Links: file 01, L16.

### Verified OK
- s 4–7 structure and s 7 legitimate uses (including employment).
- Rights including nomination.
- No sensitive category; children under 18 with verifiable parental consent.
- Penalties schedule: ₹250, 200, 200 and 150 crore, ₹10,000, and a ₹50 crore residual.
- Public-data exemption; data-principal duties.
