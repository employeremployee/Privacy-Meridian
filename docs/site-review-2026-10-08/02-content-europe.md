# 02 — Europe: EU GDPR, UK GDPR, Switzerland (FADP)

Each item gives: **Where** (file › article/row id › field), **Now** (short quote), **Fix**
(correct facts, to be written in the house voice), **Source**, and **Confidence**. Comparison
table cells must not gain article numbers (see README rule 4).

---

## EU GDPR — `src/data/jurisdictions/gdpr.json` and the `gdpr` column of all tables

### ERROR

**GDPR-E1. Territorial scope in the legacy grid**
- Where: `grid.json` › `scope-applicability` › `gdpr` › value.
- Now: "Any organization processing EU resident data regardless of size, location…"
- Fix: Art 3 applies to organisations established in the EU. It also applies to non-EU
  organisations that offer goods or services to people **in** the EU, or monitor their
  behaviour there. The test is location, not residence. Merely processing EU people's data
  from abroad is not enough.
- Source: GDPR Art 3(2), EUR-Lex; EDPB Guidelines 3/2018 on territorial scope. Confidence:
  high.

**GDPR-E2. "EU residents" in the scope table**
- Where: `scope.json` › `territorial-reach` › `gdpr`. Now: "EU establishment or EU residents".
- Fix: "people in the EU" (location, not residence). Same source. Confidence: high.

**GDPR-E3. DPO trigger in the legacy grid**
- Where: `grid.json` › `dpo-requirement` › `gdpr`.
- Now: "Mandatory DPO for public authorities, large-scale monitoring, and special category
  processing."
- Fix: A DPO is mandatory in three cases (Art 37(1)):
  - public authorities, except courts acting in their judicial capacity;
  - core activities of regular and systematic monitoring on a large scale;
  - core activities of large-scale processing of special-category or criminal-conviction data.
  Member State law can require more (Art 37(4)). Germany's BDSG s.38, for example, requires
  one where 20 or more people regularly handle personal data.
- Source: GDPR Art 37, EUR-Lex. Confidence: high.

### OUTDATED

**GDPR-O1. EU–US Data Privacy Framework status**
- Where: `gdpr-art44-49` › professionalLayer. Now: "…though legal challenge remains a risk."
- Fix:
  - The DPF adequacy decision was adopted 10 Jul 2023.
  - The General Court dismissed the *Latombe* challenge on 3 Sep 2025 (T-553/23). An appeal is
    pending (C-703/25 P, lodged 31 Oct 2025).
  - On 29 Jun 2026 the US Supreme Court decided *Trump v. Slaughter* (No. 25-332). It ended
    for-cause removal protection for FTC commissioners, overruling *Humphrey's Executor*.
  - On 31 Jul 2026 the EDPB wrote to the Commission asking it to assess the impact on the DPF
    decision (2023/1795).
  - **The DPF remains in force.**
- Source: EUR-Lex C/2025/6610; EDPB letter (edpb.europa.eu/system/files/2026-08/edpb_letter_20260731_us_supremecourt_judgment_trump_v_slaughter_en.pdf);
  Venable and Faegre Drinker on *Slaughter*. Confidence: high (independently verified).

**GDPR-O2. Access right: recipients**
- Where: `gdpr-art15` › professionalLayer and assessTrigger. Now: "recipient categories".
- Fix: The controller must give the **actual identity** of recipients. It may give only
  categories where identifying them is impossible, or where the request is manifestly
  unfounded or excessive.
- Source: CJEU C-154/21, *RW v Österreichische Post* (12 Jan 2023). Confidence: high.

**GDPR-O3. Access right: automated decisions**
- Where: `gdpr-art15` › professionalLayer (omission).
- Fix: Add Art 15(1)(h): the existence of automated decision-making and meaningful information
  about the logic involved. The Court requires an explanation of the procedure and principles
  actually applied. Trade-secret conflicts go to the authority or court to balance.
- Source: CJEU C-203/22, *Dun & Bradstreet Austria* (27 Feb 2025). Confidence: high.

### STILL PRESENT from the 2026-10-03 review

**GDPR-S1. Automated decisions (`gdpr-art22`)**
- personalImpact: "You are entitled to human involvement before it stands" is wrong.
  - Art 22(1) is a prohibition in principle on decisions based solely on automated processing
    with legal or similarly significant effects (CJEU C-634/21 *SCHUFA*, 7 Dec 2023).
  - Where an exception applies (contract or explicit consent), the person gets the right to
    obtain human intervention, express their view and **contest** the decision, after it is
    made (Art 22(3)).
  - For decisions authorised by law, that law must provide the safeguards.
- professionalLayer: the "three conditions" list is circular. The three cumulative conditions
  are:
  1. there is a decision;
  2. it is based solely on automated processing;
  3. it has legal or similarly significant effects.
- Also: `grid.json` › `automated-decision-making` › `gdpr` says "with legal effects". Add "or
  similarly significant effects". Confidence: high.

**GDPR-S2. Breach notification (`gdpr-art33-34`)**
- plainSummary and personalImpact state the 72-hour duty without its exception. Fix: report
  within 72 hours **unless the breach is unlikely to result in a risk** to people.
- professionalLayer omits:
  - "where feasible";
  - the duty to give reasons for a late report;
  - the Art 33(5) duty to document every breach;
  - the Art 34(3) exceptions to telling individuals: encryption, subsequent measures, or a
    public notice where individual notice would take disproportionate effort.
- Also: `grid.json` › `breach-notification-timeline` › `gdpr` "72 hours from awareness" lacks
  the risk qualifier. `timeBasedObligations.json` has it, so the two are inconsistent.
  Confidence: high.

**GDPR-S3. Transparency (`gdpr-art13-14`)**
- plainSummary: "This is the foundation of informed consent." Transparency applies whatever
  the legal basis. Say it is the foundation of transparency.
- personalImpact: "before you ever share it". Art 14 covers data you never shared.
- plainSummary: "as soon as possible afterward" is not the legal test.
- Fix (Art 14(3)): notice is due within a reasonable period and at the latest within one
  month. It is due earlier if the data is used to contact the person (first communication) or
  disclosed to another recipient (first disclosure). The earliest applies.
- responseTimeline omits the first-disclosure trigger (Art 14(3)(c)) and reads the triggers
  as alternatives. Confidence: high.

**GDPR-S4. Rectification (`gdpr-art16`)**
- "without unnecessary delay" should be "without undue delay", the statutory wording. The grid
  already uses it.
- plainSummary "must notify anyone they previously shared the data with" should add "unless
  that is impossible or takes disproportionate effort" (Art 19). Confidence: high.

**GDPR-S5. Erasure (`gdpr-art17`)**
- The refusal grounds omit:
  - freedom of expression and information (17(3)(a));
  - public health (17(3)(c));
  - archiving, research or statistics (17(3)(d)).
- "ongoing legal claim" should read "establishment, exercise or defence of legal claims".
- Ground 17(1)(c) also covers objection to direct marketing under Art 21(2), with no balancing
  test. Confidence: high.

**GDPR-S6. Records of processing (`gdpr-art30`)**
- The Art 30(5) small-organisation exemption also lifts when processing includes criminal
  convictions and offences data. Add that.
- personalImpact: "When you or a regulator ask, they cannot claim they lost track." Records go
  to the supervisory authority on request (Art 30(4)). Individuals use the Art 15 access right
  instead. Confidence: high.

**GDPR-S7. DPIA (`gdpr-art35`)**
- Add the Art 35(3) mandatory cases:
  - systematic and extensive evaluation, including profiling, with legal or similarly
    significant effects;
  - large-scale special-category or criminal data;
  - systematic large-scale monitoring of public areas.
- gapRemediation.smb: "The EDPB's mandatory trigger list" is wrong. Each supervisory authority
  publishes its own list (Art 35(4)).
- The prior review said Art 36 was missing. **That claim was wrong**: the text already covers
  prior consultation. Confidence: high.

**GDPR-S8. DPO (`gdpr-art37-39`)**
- professionalLayer omits:
  - criminal-conviction data;
  - the courts exception;
  - "regular and" before "systematic monitoring";
  - "core activities";
  - Art 37(4).
- personalImpact: "Inside large companies…" The duty depends on core activities, not size.
- gapRemediation.smb: "Many small businesses incorrectly believe they require a DPO" can be
  wrong for German organisations (BDSG s.38). Confidence: high.

### MISLEADING

**GDPR-M1. Consent framing**
- Where: `consentStandards.json` › `opt-out-model` › `gdpr` ("Opt-in framework") and
  `opt-in-default` › `gdpr` ("yes").
- Fix: The GDPR is a lawful-basis framework. Consent is one of six bases. See file 01 T2.
  Confidence: medium-high.

**GDPR-M2. Consent per purpose**
- Where: `consentStandards.json` › `per-purpose` › `gdpr`. Now: "related purposes can share
  consent."
- Fix: Recital 32 says consent should cover all purposes. Recital 43 says consent is presumed
  not freely given if separate operations can't be consented to separately. Confidence: medium.

**GDPR-M3. Public data**
- Where: `legalBases.json` › `public-data` › `gdpr`. Now: "applies mainly to special
  categories."
- Fix: "only". Art 9(2)(e) is a special-category condition, and ordinary public data still
  needs an Art 6 basis. Confidence: medium-high.

**GDPR-M4. Objection (`gdpr-art21`)**
- responseTimeline "immediate cessation required" and personalImpact "stop right away". Art
  21(3) says the data shall no longer be processed for direct marketing. The request must be
  acted on without undue delay and within one month (Art 12(3)).
- An Art 21(1) objection must be "on grounds relating to his or her particular situation",
  which the text omits. Confidence: medium.

**GDPR-M5. Enforcement authority**
- Where: `enforcementPenalties.json` › `authority` › `gdpr`. Now: "National DPAs and the EDPB".
- Fix: The EDPB settles disputes between authorities (Art 65). It does not enforce directly
  against organisations. Confidence: medium.

**GDPR-M6. EEA never mentioned**
- The GDPR page never says the GDPR has applied in Norway, Iceland and Liechtenstein since
  20 Jul 2018 (EEA Joint Committee Decision 154/2018).
- The transfers summary says "from the European Union"; it should say EEA. Confidence: high.

**GDPR-M7. Sensitive-data list**
- Where: `grid.json` › `sensitive-data-categories` › `gdpr`. The Art 9 list omits
  "philosophical beliefs". Confidence: high.

### MINOR / DATA-ONLY
- `gdpr.json` › `jurisdiction.authority` = "EDPB" (data-only). National supervisory
  authorities enforce.
- `gdpr-art33-34` › comparisonFlags: "LGPD requires notification within 2-5 business days"
  (data-only). LGPD is 3 business days.
- Link fixes: see file 01, links L1, L3, L4 and L5.

### Prior claim that was WRONG (no action)
- 2026-10-03 said `gdpr-art20` excludes observed data. **It doesn't.** The text excludes only
  inferred or derived data, which is correct. Optional: add that observed data (activity logs,
  location) counts as "provided" (WP29 WP242).

### Verified OK (no change needed)
- Art 12(3): one month plus two further months.
- Art 18: four cases.
- Art 19 recipients.
- Art 20 conditions.
- Art 21(3) absolute marketing objection.
- Art 22(2) exceptions.
- Art 33(1) 72 hours; Art 34(1) high risk.
- Art 35(4) lists; Art 36.
- Art 83 tiers: €10M or 2%, €20M or 4%, whichever is higher.
- Arts 79 and 82; Art 46(2); Art 49(1)(a); Art 9(1) categories; Art 7(3); Art 8.
- Header and citation.
- The GDPR Procedural Regulation (EU) 2025/2518 applies from 2 Apr 2027, so no change is needed
  yet.
- The Digital Omnibus is still a proposal (not law); current-law content is correct.

---

## UK GDPR — `src/data/jurisdictions/ukgdpr.json` and the `ukgdpr` column

### OUTDATED (fix first)

**UK-O1. The regulator's name**
- Where: `ukgdpr-scope` › professionalLayer. Now: "The Information Commissioner's Office
  enforces the law."
- Fix: Since **30 Sep 2026** the office of the Information Commissioner is abolished and its
  functions sit with the **Information Commission** (DUAA ss.118–119, commenced by SI
  2026/1015). The ICO website now titles itself "Information Commission's Office".
- Also: `enforcementPenalties.json` › `authority` › `ukgdpr` note. Data-only:
  `jurisdiction.authority.name`.
- Source: https://www.legislation.gov.uk/uksi/2026/1015/made. Confidence: high (independently
  verified).

**UK-O2. EU adequacy for the UK**
- Where: `ukgdpr-transfers` › professionalLayer. Now: "subject to renewal and reviews UK
  divergence".
- Fix: The Commission renewed both UK adequacy decisions (GDPR and LED) on **19 Dec 2025**
  (Implementing Decision (EU) 2025/2574). They are valid until **27 Dec 2031**, with a review
  after four years.
- Also add:
  - the DUAA "data protection test" for UK transfers (Art 45B, "not materially lower"), in
    force 5 Feb 2026;
  - the UK–US data bridge (SI 2023/1028), in force 12 Oct 2023.
- **Keep** the enterprise advice to monitor the EU decision. The Commission still reviews it
  and can suspend it. The 2026-10-03 claim against that advice was wrong.
- Source: EUR-Lex 2025/2574; legislation.gov.uk Art 45B and SI 2023/1028. Confidence: high.

**UK-O3. Subject access changes**
- Where: `ukgdpr-art15` › professionalLayer. Now: "on the same terms as the EU regulation".
- Fix: Since the DUAA:
  - Art 15(1A): only a "reasonable and proportionate search" is required (retrospective to
    1 Jan 2024).
  - Art 12A: the one-month clock starts at the latest of receipt, receipt of ID, or receipt of
    a fee, and it pauses while the controller asks for clarification. This applies to requests
    from 5 Feb 2026.
  - s.164A DPA 2018: organisations must run a complaints process and acknowledge complaints
    within 30 days, from 19 Jun 2026.
- Also update:
  - `ukgdpr-art15` and `ukgdpr-art17` › responseTimeline ("One calendar month from receipt");
  - `timeBasedObligations.json` › `dsr-standard` › `ukgdpr` ("From receipt, mirroring the EU
    GDPR").
- Source: legislation.gov.uk Art 15 and SI 2026/82. **Verify first** the exact Art 12A wording
  (that page returned 404; the wording comes from law-firm summaries). Confidence: high.

**UK-O4. Automated decisions**
- Where: `individualRights.json` › `automated-decisions` › `ukgdpr` ("yes", no note).
- Fix: Since 5 Feb 2026 Arts 22A–22D apply. A solely automated significant decision is banned
  only where it uses special-category data (unless conditions are met) or relies on
  recognised legitimate interests. Otherwise it is allowed with safeguards: information, the
  chance to make representations, human intervention, and the right to contest. Suggest
  "partial" with a note.
- Source: legislation.gov.uk Arts 22B and 22C. Confidence: high.

**UK-O5. "Retained" law**
- Where: `ukgdpr-scope`. "retained" should be "**assimilated** law" (Retained EU Law
  (Revocation and Reform) Act 2023 s.5, from 1 Jan 2024).
- `jurisdiction.citation`: add "as amended by the Data (Use and Access) Act 2025".
  Confidence: high.

**UK-O6. Legitimate interests in the table**
- Where: `legalBases.json` › `legitimate-interests` › `ukgdpr`. Now: "With a balancing test."
- Fix: add that recognised legitimate interests need no balancing test. Confidence: high.

**UK-O7. Reform advice**
- Where: `ukgdpr-art6` › gapRemediation.enterprise. Now: "monitor reform legislation that
  adjusts the legitimate interests framework".
- Fix: the reform is in force. Point to compliance with it. Confidence: medium.

### ERROR

**UK-E1. Six or seven legal bases (self-contradiction)**
- Where: `ukgdpr-scope` › professionalLayer. Now: "the same six legal bases, the same data
  subject rights…", and later "adds a seventh lawful basis".
- Fix: **seven** lawful bases since 5 Feb 2026, adding Art 6(1)(ea) "recognised legitimate
  interests". The rights are no longer identical: automated decisions and access changed.
- Source: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/lawful-basis/
  (says "the seven reasons"). Confidence: high.

**UK-E2. Recognised legitimate interests**
- Where: `ukgdpr-art6` › professionalLayer. Now: "recognized legitimate interests for which
  the balancing test is simplified".
- Fix: **No balancing test at all.** The processing must meet an Annex 1 condition:
  - disclosure for a public-task request;
  - national security, public security or defence;
  - emergencies;
  - crime;
  - safeguarding vulnerable individuals.
  Public authorities cannot use (ea) or (f) when performing their tasks.
- Note: the listed examples of legitimate interests (direct marketing, intra-group
  transmission, network security) are in **Art 6(11)**, not Art 6(9).
- Also fix:
  - `ukgdpr-art6` › plainSummary: "The six reasons are the same as under the EU's GDPR".
  - `ukgdpr-art6` › gapRemediation.smb: "one of the six bases".
- Source: legislation.gov.uk Art 6 and Annex 1; ICO DUAA guidance. Confidence: high.
- Then re-run the tooltip scan (see file 01, note on `ukgdpr-art6`).

**UK-E3. Territorial scope wording**
- Where: `ukgdpr-scope` › plainSummary and personalImpact. Now: "process personal information
  about people in the United Kingdom" / "any organization handling data about people in the
  UK".
- Fix: The law covers processing in the context of a UK establishment, wherever the
  processing happens. A non-UK organisation is covered only if it offers goods or services to,
  or monitors, people in the UK (Art 3). The page's professionalLayer already says this
  correctly. Confidence: high.

**UK-E4. "UK residents" in the scope table**
- Where: `scope.json` › `territorial-reach` › `ukgdpr`. Now: "UK establishment or UK
  residents" and note "Processing in the UK, or targeting…".
- Fix: the test is people **in** the UK, not residents. Establishment applies "regardless of
  whether the processing takes place in the UK". Confidence: high.

### MISLEADING
- **UK-M1.** `ukgdpr-art6` › personalImpact: "Uses without one, like unsolicited marketing,
  are not allowed." Direct marketing is a listed possible legitimate interest (Art 6(11)(a)).
  The rules on unsolicited calls, texts and emails come from **PECR**. Confidence:
  medium-high.
- **UK-M2.** `ukgdpr-art15` › plainSummary: "the most exercised privacy right in the UK" is
  **unverified**. What is supported: access is the largest category of complaints to the ICO
  (about 37% in 2022/23; secondary). Reword. Confidence: medium.
- **UK-M3.** `ukgdpr-art33-34` › plainSummary: "must report serious data breaches". The test
  is to report unless the breach is unlikely to result in a risk. The ICO says "If a risk is
  likely, you must notify us". Confidence: high.

### MINOR
- `ukgdpr-scope`: "data protection provisions took effect in February 2026" should be "mostly
  from 5 February 2026". Some provisions started 20 Aug 2025, Art 15(1A) is retrospective, and
  complaints started 19 Jun 2026.
- `ukgdpr-scope`: "UK data bridges test". The statutory name is the "**data protection
  test**" (Art 45B). "Data bridges" is the government's name for UK adequacy regulations.
- `ukgdpr-art17`: lists five grounds as if complete. It omits Art 17(1)(f) (children's online
  services data) and the new ground (g) added for England and Wales by the Victims and
  Prisoners Act 2024, in force 31 Mar 2026 (content of (g) not checked).
- `consentStandards.json` › `children` › `ukgdpr`: "the DPA 2018 sets it at 13". The age 13
  is now in UK GDPR Art 8(1) itself (SI 2019/419). Since 29 Apr 2026 the Children's Wellbeing
  and Schools Act 2026 lets ministers set it between 13 and 16; it has not been changed
  (secondary).
- PECR is never mentioned (see file 01, D9).
- **Unverified claims; verify or remove:**
  - `ukgdpr-art15`: "the ICO treats subject access as a priority enforcement area" and
    "employment requests dominate UK volumes".
  - `ukgdpr-art6`: the lawful basis must be "documented in the record of processing".
  - `ukgdpr-art17`: "the ICO expects backups to be addressed".
- DATA-ONLY: `effectiveDate` 2021-01-01 (the regime started at 11pm on 31 Dec 2020);
  `authority.name`.
- Links: file 01, L6.

### Verified OK
- The scope page's DUAA summary (seventh basis, Arts 22A–22D, cookie relaxation, transfer
  test).
- Fine maxima: £17.5m or 4%, and £8.7m or 2%, whichever is higher.
- 72 hours to the regulator and the high-risk test for individuals.
- IDTA, Addendum, BCRs and TRAs.
- The UK–US bridge in force.
- All six ICO links load and match their labels.

---

## Switzerland (FADP) — `src/data/jurisdictions/fadp.json` and the `fadp` column

### ERROR

**CH-E1. Contract basis**
- Where: `legalBases.json` › `contract` › `fadp` › note. Now: "Not enumerated; contract needs
  fall under the overriding-interest test."
- Fix: Art 31(2)(a) expressly lists processing "in direct connection with the conclusion or
  performance of a contract" as an overriding interest. "partial" is fine; "Not enumerated" is
  wrong.
- Source: https://www.fedlex.admin.ch/eli/cc/2022/491/en#art_31. Confidence: high.

**CH-E2. Response-time extension**
- Where: `timeBasedObligations.json` › `dsr-extension` › `fadp`. Now: "Reasonable extension /
  where justified by the volume of requests."
- Fix: The Data Protection Ordinance (Art 18) has no volume condition. If 30 days isn't
  possible, the controller must tell the person how long it will take. Refusal or deferral
  must be notified within the same deadline.
- Source: https://www.fedlex.admin.ch/eli/cc/2022/568/en. Confidence: high.

**CH-E3. Consent is not required to process sensitive data**
- Where: `fadp-lawfulness` › gapRemediation.smb ("obtain explicit consent for sensitive
  data"), `fadp-lawfulness` › assessTrigger ("…need justification, such as sensitive data or
  high-risk profiling"), and `consentStandards.json` › `sensitive-explicit` › `fadp`
  ("Explicit consent required for sensitive data").
- Fix: The FADP does not require consent or justification merely to process sensitive data
  or to run high-risk profiling. Justification is needed for breaches of personality rights,
  which include **disclosing** sensitive data to third parties (Art 30(2)(c)). Consent must be
  **explicit only where consent is the ground relied on** (Art 6(6)–(7)).
- Also check `fadp-lawfulness` › professionalLayer "must be explicit for sensitive data or
  high-risk profiling". Make it clear this applies only when consent is relied on.
- Source: fedlex FADP Arts 6, 30 and 31. Confidence: high.

### STILL PRESENT from 2026-10-03

**CH-S1. Fines**
- Where: `fadp-scope` › professionalLayer ("criminal fines on responsible individuals rather
  than administrative fines on companies") and `enforcementPenalties.json` › `max-fine` ›
  `fadp` note ("…not the company").
- Fix:
  - Fines of up to CHF 250,000 apply to responsible individuals and require **intent**.
  - Most offences (Arts 60(1), 61, 62) are prosecuted **only on complaint**. Arts 60(2) and
    63 are prosecuted ex officio.
  - Under **Art 64** the **business itself** can be fined up to **CHF 50,000** where
    identifying the responsible person would take disproportionate effort.
- Data-only: the `fadp-scope` comparisonFlag has the same gap.
- Source: fedlex FADP Arts 60–65. Confidence: high.

### MISLEADING
- **CH-M1.** `enforcementPenalties.json` › `authority` › `fadp`: "The FDPIC". The FDPIC
  investigates and issues orders, but **cannot fine**. The cantons prosecute and impose fines
  (Art 65(1)). The FDPIC can file a complaint (Art 65(2)). Confidence: high.
- **CH-M2.** `legalBases.json` › `public-interest` › `fadp`: "Federal bodies rely on a
  statutory-basis test rather than public interest as such." For private controllers, Art
  31(1) lists "an overriding private or public interest" as a justification. Fix the note,
  or use "yes". Confidence: medium-high.
- **CH-M3.** `consentStandards.json` › `easy-withdrawal` › `fadp`: "yes / Consent can be
  withdrawn at any time." The FADP has no withdrawal provision and no "as easy as giving"
  rule. In practice withdrawal works through objection (Art 30(2)(b)). Suggest "partial".
  Confidence: medium.
- **CH-M4.** `individualRights.json` › `restrict` › `fadp`: "Disputed data can be blocked
  pending resolution." "Blocking" is old-law wording. Now disputed data are marked as
  disputed (Art 32(3)), and a court can prohibit specific processing (Art 32(2)(a)). Federal
  bodies must restrict (Art 41(3)(a)). Confidence: medium.
- **CH-M5.** `fadp-breach` › personalImpact ("You learn of the danger in time to respond") and
  responseTimeline. Individuals are told only where needed for their protection **or where the
  FDPIC requests it**. Art 24(5) allows limiting, delaying or dispensing with notice. Add "or
  if the FDPIC requests" to the responseTimeline. Confidence: high.
- **CH-M6.** `fadp-access` › professionalLayer: misuse of access "has been curtailed by Swiss
  courts". This is now **statutory**: Art 26(1)(c) covers requests that are obviously
  unjustified, that do not serve data protection, or that are clearly frivolous. Confidence:
  high.

### MINOR
- `internationalTransfers.json` › `bcrs` › `fadp`: "partial". Art 16(2)(e) names BCRs
  approved by the FDPIC. Use "yes".
- `internationalTransfers.json` › `sccs` › `fadp`: "Swiss standard contractual clauses". The
  FDPIC recognises the EU SCCs (2021/914) with Swiss adaptations. There is no separate Swiss
  set (secondary).
- `internationalTransfers.json` › `certification` › `fadp`: keep the state. The 2026-10-03
  claim against it was wrong, because DPO Art 12 allows certification and codes of conduct.
  The note "guidance developing" is unverified.
- `individualRights.json` › `deletion` › `fadp`: "partial". Art 32(2)(c) gives an explicit
  deletion claim, so "yes" is arguable. Confidence: medium-low.
- `internationalTransfers.json` › `consent-transfer`: FADP is "yes" while GDPR and UK are
  "partial", for a similar derogation (Art 17(1)(a)). Make them consistent.
- `consentStandards.json` › `opt-in-default`: FADP is "partial" while NZ is "no", though
  neither has an opt-in default. Make them consistent.
- `scope.json` › `threshold` › `fadp`: "lighter record-keeping duties". DPO Art 24 is a full
  exemption for organisations under 250 employees, unless they process sensitive data on a
  large scale or do high-risk profiling.
- `fadp-scope` › personalImpact "covers any organization…": cantonal and communal bodies are
  excluded (Art 2).
- `fadp-lawfulness` › principles list: listing "security" is defensible (Art 30(2)(a) cites
  Arts 6 **and 8**). The 2026-10-03 claim was wrong. Consider adding storage limitation and
  recognisability (Art 6(3)–(4)).
- Optional: `fadp-transfers` could say the Swiss–US DPF has applied since 15 Sep 2024.
  `fadp-breach` could mention that the FDPIC may forward reports to the National Cyber Security
  Centre with consent (Art 24(5bis), 1 Apr 2025). It could also mention the separate 24-hour
  cyberattack reporting duty for critical-infrastructure operators under the Information
  Security Act (1 Apr 2025; search snippet).
- Links: file 01, L7.

### Verified OK
- In force 1 Sep 2023. The only substantive change since is Art 24(5bis).
- Art 2 scope; Art 3 effects in Switzerland; Art 14 representative (cumulative criteria).
- Art 24(1), (3), (4), (6), and the FDPIC online form.
- Art 25 minimum list, free of charge, 30 days (DPO Arts 18–19).
- Art 16 adequacy list (DPO Annex 1); FDPIC-recognised SCCs; Art 17 derogations.
- CHF 250,000 maximum.
- Art 34 federal bodies; Art 5(c) sensitive categories; Art 21 automated decisions; Art 28
  portability.
