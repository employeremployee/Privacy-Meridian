# 05 — Africa: South Africa (POPIA), Kenya (Data Protection Act 2019)

Format and rules as in README. Comparison cells get no article numbers.

---

## South Africa (POPIA) — `src/data/jurisdictions/popia.json` and the `popia` column

POPIA section text was checked mostly through popia.co.za (verbatim statute text) and gov.za.
The 2025 Regulations come from law-firm summaries (Alt Advisory, Covington), so treat those
items as **Verify first**.

### ERROR

**ZA-E1. "Uniquely" protects companies**
- Where: `popia-scope` › plainSummary. Now: "Uniquely, it also protects companies".
- Fix: POPIA does cover juristic persons, but it is not unique. Argentina's Law 25.326 (arts
  1–2, "personas de existencia ideal") and Uruguay's Law 18.331 (art 2) also cover legal
  persons, and both are on this site. Remove "uniquely". Confidence: high.

**ZA-E2. Prior authorisation for some transfers**
- Where: `internationalTransfers.json` › `security-assessment` › `popia` ("no / No government
  pre-approval of transfers"); `popia-s72` (omission).
- Fix: **s.57(1)(d)** requires the Information Regulator's **prior authorisation** before
  transferring special personal information or children's information to a third party in a
  foreign country without adequate protection. Use "partial" with a note, and mention it on
  `popia-s72`.
- Source: popia.co.za/section-57-processing-subject-to-prior-authorisation/. Confidence: high.

**ZA-E3. Restriction grounds**
- Where: `individualRights.json` › `restrict` › `popia` note ("…processing is objected to").
- Fix: objection is not a POPIA restriction ground. Section 14(6) lists four:
  1. the accuracy of the data is contested;
  2. the data is no longer needed but is kept as proof;
  3. the processing is unlawful and the person opposes destruction;
  4. the person asks for transmission to another system.
- Source: popia.co.za/section-14-retention-and-restriction-of-records/. Confidence: high.

### STILL PRESENT from 2026-10-03
- **ZA-S1.** `popia-s22`: "The Regulator provides an eServices portal for compromise
  notifications." Since **1 Apr 2025** the eServices portal is **mandatory** for s.22
  notifications, and email reports are no longer accepted (amended Regulations published
  17 Apr 2025). **Verify first** (secondary). Confidence: high.
- **ZA-S2.** `internationalTransfers.json` › `bcrs` › `popia`: "partial". Section 72(1)(a)
  names binding corporate rules, and s.72(2) defines them. Use "**yes**". Confidence: high.

### MISLEADING
- **ZA-M1. Penalties mix two regimes**
  - Where: `enforcementPenalties.json` › `max-fine` › `popia` ("Up to R10M or imprisonment / up
    to ten years' imprisonment as an alternative") and `popia-scope` ("Penalties reach R10
    million or imprisonment").
  - Fix: there are **two separate regimes**. Administrative fines go up to **R10 million**
    (s.109). Criminal offences carry a fine or up to 10 years' imprisonment, **or both**
    (s.107). "As an alternative" is wrong.
  - Confidence: high.
- **ZA-M2. The 2025 "30-day window" is overgeneralised**
  - Where: `popia-scope` ("set a 30-day response window").
  - Fix: under the amended Regulations (17 Apr 2025), the 30 days applies to notifying the
    outcome of **correction, destruction or deletion** requests. Access requests remain
    "within a reasonable time" (s.23).
  - Also update `popia-s24` › responseTimeline and `timeBasedObligations.json` ›
    `dsr-standard` / `dsr-extension` › `popia` ("No fixed statutory deadline", "No fixed
    maximum") to reflect the 30-day outcome notice for correction and deletion.
  - **Verify first** (Alt Advisory; secondary). Confidence: medium.
- **ZA-M3. PAIA timelines**
  - Where: `popia-s23` › responseTimeline. Now: "PAIA procedures apply a 30-day framework."
  - Fix: POPIA s.25 imports only PAIA ss.18 and 53, which are the request forms, not PAIA's
    30-day decision periods.
  - Confidence: medium.
- **ZA-M4. Direct marketing**
  - Where: `popia-scope`. Now: "tightened direct-marketing consent to require a positive
    opt-in".
  - Fix: correct for the 2025 Regulations (opt-out procedures are no longer valid consent).
    But the Act's s.69(3) existing-customer route, which works on an opt-out basis, still
    exists. Mention it.
  - Confidence: medium.

### MINOR
- `individualRights.json` › `deletion` › `popia` note ("where the party is no longer
  authorized to hold the data") understates the right. Section 24(1)(a) also covers data that
  is inaccurate, irrelevant, excessive, out of date, incomplete, misleading or unlawfully
  obtained.
- `individualRights.json` › `non-discrimination` › `popia` "partial": no non-retaliation
  provision was found. Low confidence.
- `internationalTransfers.json` › `sccs` › `popia` "yes": the Regulator has issued no official
  clauses, but contracts are a valid s.72 route. Low confidence. Consider a note.
- Links: file 01, L8. The label says "inforegulator.org.za" but the URL is gov.za, and
  "Government Gazette" goes to the gov.za homepage.

### Prior review claims (owner's notes in CONTENT-REVIEW.md)
- The "positive opt-in for direct marketing" claim is **confirmed**.
- "30-day DSR response window" is **overstated** (see ZA-M2).

### Verified OK
- Commencement 1 Jul 2020; ss.110 and 114(4) on 30 Jun 2021; s.58(2) on 1 Jul 2021. "Enforcement
  from July 1, 2021" is acceptable shorthand.
- s.11 grounds and the s.11(3) objection; ss.22, 23, 24; s.26 (criminal behaviour is listed).
- s.35(1)(a); s.69(1); s.72(1)(a)–(e); s.99 no-fault damages; s.109 R10M cap.
- Juristic persons are included; a child is under 18.

---

## Kenya (Data Protection Act 2019) — `src/data/jurisdictions/kdpa.json` and the `kdpa` column

The Act was checked through the Kenya Law edition (policyvault mirror), the Data Protection
(General) Regulations 2021 (ODPC PDF, primary), and the ODPC Guidance Notes for Cross-border
Data Transfers (2026, primary).

### ERROR

**KE-E1. Breach notice to individuals (table contradicts the page)**
- Where: `timeBasedObligations.json` › `breach-individuals` › `kdpa`. Now: "Without undue
  delay".
- Fix: s.43(1)(b) says "in writing within a reasonably practical period". The `kdpa-s43` page
  already says this correctly. Confidence: high.

**KE-E2. No general extension**
- Where: `timeBasedObligations.json` › `dsr-extension` › `kdpa`. Now: "Extension with notice /
  where the request is complex".
- Fix: the General Regulations give **no extension** for access, rectification, erasure,
  objection or restriction. Only **portability** can be extended (s.38(7)), in consultation
  with the Data Commissioner.
- Source: https://www.odpc.go.ke/wp-content/uploads/2024/03/THE-DATA-PROTECTION-GENERAL-REGULATIONS-2021-1.pdf.
  Confidence: high.

**KE-E3. Localization is not about sensitive data**
- Where: `internationalTransfers.json` › `localization` › `kdpa`. Now: "Strategic or sensitive
  categories may require local storage".
- Fix: sensitive data needs **consent plus safeguards** to leave Kenya (s.49), not local
  storage. Localization applies only to the strategic-interest purposes in General
  Regulations **reg 26**. Even there, keeping "at least one serving copy" in Kenya is enough.
- Confidence: high.

**KE-E4. First penalties**
- Where: `kdpa-scope` › professionalLayer. Now: "first penalties in 2023".
- Fix: the ODPC's first penalty was against **Oppo Kenya (KES 5 million) in December 2022**.
  Whitepath and Regus followed in April 2023.
- Source: Cliffe Dekker Hofmeyr alert, 28 Sep 2023 (search snippet). Confidence: medium-high.

### STILL PRESENT from 2026-10-03

**KE-S1. Which section says what (`kdpa-s48`)**
- Where: `kdpa-s48` › articleRef ("Sections 48-49") and professionalLayer.
- Fix:
  - **s.48** holds the transfer conditions, including the necessity grounds in s.48(c):
    contract, legal claims, vital interests, public interest, and compelling legitimate
    interests.
  - **s.49** covers **sensitive data only**: consent plus confirmed safeguards. The Data
    Commissioner may prohibit or suspend such transfers.
  - **s.50** is the localization power (strategic interests of the State).
  - "Consent after risk warning" comes from s.25(h) plus General Regulations reg 46.
  - Change articleRef to "Sections 48–50".
- Confidence: high.

**KE-S2. "Payments data"**
- Where: `kdpa-s48` › professionalLayer ("localization lever the regulations have applied to
  specific categories such as certain government and payments data").
- Fix: reg 26(2) lists:
  - civil registration and identity;
  - elections;
  - public-finance systems;
  - protected computer systems;
  - basic education;
  - primary and secondary health care.

  **Payments are not on the list.** Payments localization comes from separate Central Bank
  rules. Confidence: high.

**KE-S3. Fixed response deadlines**
- Where: `kdpa-access` › responseTimeline ("Prompt response under the General Regulations
  2021. Confirm the current prescribed period before relying on it."), plainSummary
  ("promptly"), and `timeBasedObligations.json` › `dsr-standard` › `kdpa` ("7 days… for
  responding to a request").
- Fix: the General Regulations set fixed periods:

  | Request | Deadline | Source |
  |---|---|---|
  | Access | **7 days**, free | reg 9(4), (6) |
  | Rectification | **14 days** | reg 10(4) |
  | Erasure | **14 days** | reg 12(3) |
  | Objection | **14 days** | reg 8(3) |
  | Restriction | **14 days** | reg 7(3) |
  | Portability | **30 days** | s.38(6), reg 11(3) |

  The table's "7 days" applies to access only.
- Source: ODPC General Regulations PDF (primary). Confidence: high.

**KE-S4. Sensitive-data cells**
- Where: `sensitiveData.json` › `kdpa`.
- Fix:
  - `political-opinions` › `kdpa` "yes / Political opinion listed as sensitive" → **no**. The
    s.2 definition does not list political opinion. A 2025 draft amendment would add it; it
    is not law.
  - `financial-account` › `kdpa` "property details are separate" → s.2 **does** list
    "property details" as sensitive. Use "partial". The `kdpa-s30` page already says so, so
    the table contradicts it.
- Confidence: high.

**KE-S5. Restriction is a full right**
- Where: `individualRights.json` › `restrict` › `kdpa`. Now: "partial".
- Fix: s.34(1)(a)–(d) is a standalone right on request. Use "**yes**". Confidence: high.

### OUTDATED

**KE-O1. ODPC cross-border guidance (2026) and BCRs**
- Where: `kdpa-s48` (all fields) and `internationalTransfers.json` › `bcrs` › `kdpa`
  ("partial / contemplated, guidance developing").
- Fix: the ODPC's **Guidance Notes for Cross-border Data Transfers** (2026; reported issued
  around 8 Sep 2026):
  - include **ODPC Standard Clauses** for controller-to-controller and controller-to-processor
    transfers;
  - set a **BCR approval process**;
  - say exporters **must notify** the ODPC of transfers;
  - treat offshore cloud processing as a transfer.

  BCRs have been recognised since 2021 (regs 42(c) and 43), so the `bcrs` cell should be
  "**yes**". Adequacy decisions by the Data Commissioner exist under reg 44.
- Source: https://www.odpc.go.ke/wp-content/uploads/2026/09/ODPC-%E2%80%93-Guidance-Notes-for-Cross-border-Data-Transfers.pdf
  (primary). Confidence: high. (Adding this is a content decision; see file 01, D9.)

### MISLEADING
- **KE-M1.** `kdpa-scope`: "a Data Protection Amendment Bill introduced in 2025". It is a
  **stakeholder draft** (prepared by DPGSK), and no record of it being tabled was found. Its
  content (adding political opinions and trade-union membership; changing "whichever is lower"
  to "higher" in s.63) is described correctly. "Not yet in force" is right. Say "a draft
  amendment" rather than "introduced". Confidence: medium.
- **KE-M2.** `consentStandards.json` › `sensitive-explicit` › `kdpa`: "Sensitive data requires
  consent or a specific condition". The s.45 grounds for processing sensitive data appear to
  contain no consent ground. Explicit consent appears for sensitive-data **transfers**
  (s.49(1)). **Verify first.** Confidence: medium-low.
- **KE-M3.** `enforcementPenalties.json` › `max-fine` › `kdpa`: "whichever is lower" is
  **correct** (s.63: KES 5 million or 1% of prior-year turnover, whichever is lower). Optionally
  note it is unusual, unlike the GDPR's "whichever is higher".

### MINOR
- `kdpa-s43`: the processor must notify the controller "without delay and where reasonably
  practicable, within 48 hours". The page simplifies this. It also omits the s.43(6)
  encryption exemption from telling individuals and the s.43(4) law-enforcement delay.
- `kdpa-s30`: the lawful grounds are presented as complete but omit **research**
  (s.30(1)(b)(viii)).
- `scope.json` › `threshold` › `kdpa`: "turnover and volume". Registration exemption criteria
  are turnover or revenue under KES 5 million **and** fewer than 10 employees, plus listed
  purposes. Data volume is not a criterion (Registration Regulations reg 13).
- `kdpa-scope`: "proposed further rules on compliance audits and data sharing… not yet in
  force". The 2026 ODPC guidance cites "Part 5 of the Data Sharing Code, 2025" as an existing
  instrument. **Unverified** whether it was gazetted. Check before editing.
- `individualRights.json` › `non-discrimination` › `kdpa` "partial": no non-retaliation
  provision was found. Low confidence.
- Reported but **unverified**: an 11 Sep 2026 ODPC draft notice adding sensitive-data
  categories under s.47 (one search snippet). Do not add without verifying.

### Fixed since 2026-10-03
- `individualRights.json` › `portability` › `kdpa`: the citation is gone, and "yes" is correct
  under s.38.

### Verified OK
- Commencement 25 Nov 2019; s.4 scope; Article 31 constitutional basis.
- s.26 rights; s.30 bases (except the missing research ground).
- s.32(1) and (4) consent rules; s.33 parental consent.
- s.35 automated decisions; s.36 objection; s.38 portability; s.40 rectification and erasure.
- s.43: 72 hours to the Commissioner, 48 hours processor to controller, written notice to
  individuals.
- ss.44–47 sensitive data (including property details).
- s.63 penalty; s.65 compensation.
- Comparison cells for access, correction, deletion, portability, automated decisions,
  objection, SCCs, consent-transfer, adequacy (reg 44 mechanism), max-fine, authority and
  private action.
