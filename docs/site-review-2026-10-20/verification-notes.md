# Verification notes: review 2026-10-20, section 1

Read-only verifier agents ran overnight on 2026-10-20. Nothing was edited. Under the
CLAUDE.md rule, claims backed only by secondary sources go to Jared before they are published.

## E8: map-only additions

Repo check: none of these countries is in `mapOnlyLaws.js` or `countryStatus.js`, and all eight
have a shape in `world-110m.json`. The agent reached no official gazette directly. u.ae was the
only government page it could read. Everything else comes from law firms and trackers.

| Country | Verdict | Law | Status | Confidence |
|---|---|---|---|---|
| Egypt (818) | ADD | Personal Data Protection Law No. 151 of 2020 | In force Oct 2020 (15th or 16th, unsettled). Executive Regulations: Ministerial Decree 816/2025 (1 Nov 2025). One-year compliance period ends about 1 Nov 2026, possibly end of 2026. | High (secondary: Al Tamimi, CMS, Baker McKenzie) |
| UAE (784) | ADD (Jared decides) | Federal Decree-Law No. 45 of 2021 | In force 2 Jan 2022 (official: u.ae). Executive regulations not confirmed issued. Chambers 2026 and Lexology say pending. | High on in force, medium on regulations |
| DR Congo (180) | Jared decides | Digital Code, Ordinance-Law No. 23/010 of 2023 | In force 11 Apr 2023. Data Protection Authority not yet set up. Telecom regulator acting since 2024, disputed. | Medium (DLA Piper; Droit-Numerique.cd) |
| Bangladesh (050) | Hold | Personal Data Protection Act 2026 (Act No. 63 of 2026), replacing the 2025 Ordinance | Published 10 Apr 2026. Commencement unconfirmed (gazette in Bangla). Enforcement reportedly about May 2027. | Medium-low |
| Belize (084) | Don't add | Data Protection Act 2021 | Passed. No commencement order found. | Medium-high |
| Guyana (328) | Don't add | Data Protection Act 2023 | Passed. No commencement order as of Apr 2026. | Medium-high |
| Trinidad & Tobago (780) | Don't add | Data Protection Act 2011 | Mostly not in force. Core private-sector duties and penalties are not in force. | Medium |
| Greenland (304) | Don't add under the current rule | Old Danish Act on Processing of Personal Data (2000), by Royal Decree 1238/2016 | Applies, but the territory rule excludes Greenland. Adding it means changing the rule (Jared). | High on facts |

Draft entries (same shape as the existing file):

```js
{ name: "Egypt", iso: "818", law: "Personal Data Protection Law No. 151 of 2020", onMap: true },
{ name: "United Arab Emirates", iso: "784", law: "Federal Decree-Law No. 45 of 2021 on Personal Data Protection", onMap: true },
{ name: "DR Congo", iso: "180", law: "Digital Code (Ordinance-Law No. 23/010 of 2023)", onMap: true },
```

Before the drafts are used, check the real entry shape in `mapOnlyLaws.js`. The agent's
`iso`/`onMap` field names may not match the file.

Sources:
- Egypt:
  - https://www.tamimi.com/law_update_articles/from-policy-to-practice-egypt-issues-executive-regulations-of-the-personal-data-protection-law/
  - https://cms.law/en/are/legal-updates/egypt-s-pdpl-executive-regulations-issued-one-year-compliance-countdown-begins
- UAE: https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws
- DR Congo: https://www.dlapiperdataprotection.com/?c=CD&t=law
- Bangladesh: https://securiti.ai/bangladesh-personal-data-protection-act-overview/
- Belize: https://www.nationalassembly.gov.bz/wp-content/uploads/2021/12/Act-No-45-of-2021-Data-Protection-Act.pdf
- Guyana: https://www.mofo.com/privacy-library/guyana
- Trinidad & Tobago: https://uwi.edu/data-protection/pg-external_tt.php
- Greenland: https://ft.dk/samling/20222/almdel/gru/spm/49/svar/1965752/2723436.pdf

## E1 to E7: law corrections

All seven were checked against official government text. SSO Singapore and law.go.kr were read
in the browser because plain fetches were blocked.

| Item | Verdict | Corrected facts | Source |
|---|---|---|---|
| E1 Korea `pipa-kr-breach` | CONFIRMED. **The review was wrong that the 72 hours is press-only:** Decree Art 39-3(1) sets 72 hours. | Possible leaks: notice to **individuals** within 72 hours, with **no PIPC report**. Actual leaks: individuals within 72 hours, plus PIPC/KISA within 72 hours above thresholds. Fix both the professionalLayer and the responseTimeline ("Possible leaks are covered too"). | law.go.kr, Act Art 34(2), (4); Decree Arts 39-2, 39-3 (in force 11 Sep 2026) |
| E2 UK `ukgdpr-art17` | CONFIRMED | UK-wide from 31 Mar 2026. A "malicious person" was convicted of a listed offence (such as harassment or stalking) against the data subject, or is under a stalking protection order protecting them. The controller must have investigated and taken no further action. | legislation.gov.uk/eur/2016/679/article/17; SI 2026/317 regs 2–3 |
| E3 China `pipl-art47` | CONFIRMED | **Five** grounds, in 3 fields. The site's list is otherwise right. Item 2 combines "service stopped" with "retention expired". | cac.gov.cn/2021-08/20/c_1631050028355286.htm |
| E4 China `pipl-art57` | PARTLY (incomplete) | Relatively major incidents or above. CII: within 1 hour to the protection department **and police**, not the CAC. Central and state organs: within 2 hours to their own cyberspace body. Others: within 4 hours to the provincial CAC. In force 1 Nov 2025. A leak of 1M+ people's data counts as relatively major. | cac.gov.cn/2025-09/15/c_1759583017717009.htm |
| E5 Singapore `pdpa-sg-consent` | CONFIRMED | Research is a **Second Schedule** exception, covering use and disclosure, not collection. Conditions: identifiable data needed, clear public benefit, no decisions affecting the person, published results don't identify them. For disclosure, consent must also be impracticable. articleRef adds "Second Schedule". | sso.agc.gov.sg/Act/PDPA2012 |
| E6 Singapore `pdpa-sg-breach` | CONFIRMED | Deemed significant harm: (1) name or ID plus Part 1 Schedule data, or (2) an account identifier plus password or other access data **on its own**. A bank account number counts as an account identifier. | sso.agc.gov.sg/SL/PDPA2012-S64-2021 regs 3–4 |
| E7 Canada `pipeda-scope` | CONFIRMED | Breach in **2023** (Apr–Sep, confirmed Oct). About 320,000 Canadians affected. The ICO fine (£2.31M) and the joint OPC/ICO findings came in June 2025. | priv.gc.ca nr-c_250617; PIPEDA Findings #2025-001; ico.org.uk |

**Extra issues the verifier found (not in the review):**
- Korea: the notice must now explain damages and mediation rights (Art 34(1) item 6). The review's
  section 3 also lists this.
- Korea: Decree Art 40(1) adds a proviso that no report is needed if the data was recovered or
  deleted and the risk is markedly low. The site leaves this out.
- Not re-verified: Korea's "tightest breach clocks" history sentence, and Canada's Tim Hortons
  2022 sentence.
