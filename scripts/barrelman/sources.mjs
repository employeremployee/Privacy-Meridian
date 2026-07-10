// Curated feed list for Privacy Barrelman. The audience is privacy professionals
// (lawyers, DPOs), so this leans toward regulators, enforcement, and specialist
// legal/policy publications, with a strict privacy-relevance gate applied at
// fetch time. Deliberately multilingual: non-English sources broaden coverage
// beyond the US/EU and their titles are machine-translated to English.
//
// Dead feeds are skipped gracefully, so a broken URL never breaks the whole run.
//
// Per source:
//   category  default bucket: one of NEWS_CATEGORIES in taxonomy.js.
//   region    default region: one of NEWS_REGIONS (or 'unspecified').
//   lang      source language (ISO 639-1). Non-'en' titles get translated.
//   trusted   (optional) skip the privacy-relevance gate. Only for feeds that
//             are exclusively about privacy (regulators), which also lets their
//             non-English titles through without English keyword matching.
//   pathAllow (optional) keep only items whose URL path contains one of these.
//   pathDeny  (optional) drop items whose URL path contains one of these.

export const RSS_SOURCES = [
  // Regulators and enforcement (trusted: 100% privacy)
  { name: 'EDPB', feed: 'https://www.edpb.europa.eu/rss.xml_en', category: 'legal-regulatory', region: 'europe', lang: 'en', trusted: true, pathAllow: ['/news/'] },
  { name: 'CNIL', feed: 'https://www.cnil.fr/fr/rss.xml', category: 'legal-regulatory', region: 'europe', lang: 'fr', trusted: true },
  { name: 'Autoriteit Persoonsgegevens', feed: 'https://autoriteitpersoonsgegevens.nl/rss', category: 'legal-regulatory', region: 'europe', lang: 'nl', trusted: true },
  { name: 'noyb', feed: 'https://noyb.eu/en/rss', category: 'legal-regulatory', region: 'europe', lang: 'en', trusted: true, pathDeny: ['join', 'donate', 'support', 'project'] },
  { name: 'FTC', feed: 'https://www.ftc.gov/feeds/press-release-consumer-protection.xml', category: 'legal-regulatory', region: 'americas', lang: 'en' },

  // Specialist legal analysis
  { name: 'Hunton Privacy', feed: 'https://www.huntonprivacyblog.com/feed/', category: 'legal-regulatory', region: 'unspecified', lang: 'en' },
  { name: 'DLA Piper Privacy Matters', feed: 'https://privacymatters.dlapiper.com/feed/', category: 'legal-regulatory', region: 'unspecified', lang: 'en' },

  // Policy, research, and perspectives
  { name: 'Future of Privacy Forum', feed: 'https://fpf.org/feed/', category: 'policy-perspectives', region: 'unspecified', lang: 'en', pathDeny: ['donate', 'event', 'job'] },
  { name: 'EPIC', feed: 'https://epic.org/feed/', category: 'policy-perspectives', region: 'americas', lang: 'en', pathDeny: ['donate', 'take-action', 'campaign', 'membership'] },
  { name: 'Privacy International', feed: 'https://privacyinternational.org/rss.xml', category: 'policy-perspectives', region: 'unspecified', lang: 'en', pathDeny: ['donate', 'take-action', 'campaign', 'act-now'] },
  { name: 'Schneier on Security', feed: 'https://www.schneier.com/feed/atom/', category: 'policy-perspectives', region: 'unspecified', lang: 'en' },

  // Breaches and incidents
  { name: 'DataBreaches.net', feed: 'https://databreaches.net/feed/', category: 'breaches', region: 'unspecified', lang: 'en' },
  { name: 'The Record', feed: 'https://therecord.media/feed', category: 'breaches', region: 'unspecified', lang: 'en' },
  { name: 'Krebs on Security', feed: 'https://krebsonsecurity.com/feed/', category: 'breaches', region: 'americas', lang: 'en' },

  // Non-English sources (titles translated to English)
  { name: 'netzpolitik.org', feed: 'https://netzpolitik.org/feed/', category: 'policy-perspectives', region: 'europe', lang: 'de', pathDeny: ['spenden'] },
  { name: 'Derecho de la Red', feed: 'https://derechodelared.com/feed/', category: 'policy-perspectives', region: 'europe', lang: 'es' },
  { name: 'Segu-Info', feed: 'https://blog.segu-info.com.ar/feeds/posts/default?alt=rss', category: 'breaches', region: 'americas', lang: 'es' },
  { name: 'Tecnoblog', feed: 'https://tecnoblog.net/feed/', category: 'policy-perspectives', region: 'americas', lang: 'pt' },
  { name: 'Security NEXT', feed: 'https://www.security-next.com/feed', category: 'breaches', region: 'asia-pacific', lang: 'ja' },
  { name: 'DailySecu', feed: 'https://www.dailysecu.com/rss/allArticle.xml', category: 'breaches', region: 'asia-pacific', lang: 'ko' },
  { name: 'Habr Security', feed: 'https://habr.com/ru/rss/hub/infosecurity/all/', category: 'breaches', region: 'europe', lang: 'ru' },
  { name: 'Panoptykon', feed: 'https://panoptykon.org/rss.xml', category: 'policy-perspectives', region: 'europe', lang: 'pl', pathDeny: ['wesprzyj', 'przekaz', 'dotacja'] },
  { name: 'Niebezpiecznik', feed: 'https://niebezpiecznik.pl/feed/', category: 'breaches', region: 'europe', lang: 'pl' },

  // English-language, region-diversifying
  { name: 'MediaNama', feed: 'https://www.medianama.com/feed/', category: 'policy-perspectives', region: 'asia-pacific', lang: 'en' },
  { name: 'TechCabal', feed: 'https://techcabal.com/feed/', category: 'policy-perspectives', region: 'africa', lang: 'en' },
  { name: 'Wamda', feed: 'https://www.wamda.com/feed', category: 'policy-perspectives', region: 'middle-east', lang: 'en' },
]

// GDELT global firehose. Disabled: too noisy for a professional audience even
// with the relevance gate. Flip enabled to true to restore broad global reach.
export const GDELT_QUERY = {
  enabled: false,
  query: '(data privacy OR "data protection" OR "personal data") sourcelang:english',
  maxRecords: 40,
}

// Relevance gate: an item must mention at least one of these in its title or
// summary, or it is dropped. Multilingual so non-English privacy news is kept.
// Trusted sources (regulators) skip this gate entirely.
export const RELEVANCE_TERMS = [
  // English
  'privacy', 'data protection', 'personal data', 'personal information',
  'gdpr', 'ccpa', 'cpra', 'lgpd', 'pipl', 'pipeda', 'appi', 'dpdp',
  'data subject', 'data breach', 'data leak', 'breach of data',
  'biometric', 'facial recognition', 'surveillance', 'spyware', 'stalkerware',
  'consent', 'cookie', 'tracking', 'data broker', 'adtech', 'profiling',
  'dpo', 'data protection officer', 'supervisory authority', 'information commissioner',
  'right to be forgotten', 'right to erasure', 'data transfer', 'cross-border',
  'schrems', 'adequacy', 'data retention', 'data minimization', 'do not sell',
  'opt-out', 'health data', 'location data', "children's privacy", 'coppa',
  'wiretap', 'data processing', 'edpb', 'cnil', 'anpd',
  // French
  'données personnelles', 'vie privée', 'protection des données', 'rgpd', 'confidentialité', 'fuite de données',
  // German
  'datenschutz', 'personenbezogene daten', 'privatsphäre', 'dsgvo', 'überwachung', 'datenleck',
  // Dutch
  'persoonsgegevens', 'gegevensbescherming', 'datalek',
  // Spanish
  'protección de datos', 'datos personales', 'privacidad', 'vigilancia', 'filtración de datos',
  // Portuguese
  'proteção de dados', 'dados pessoais', 'privacidade', 'vigilância', 'vazamento de dados',
  // Japanese
  '個人情報', 'プライバシー', '情報漏洩', '情報漏えい', '監視', 'データ保護',
  // Chinese (simplified)
  '隐私', '个人信息', '数据保护', '数据泄露', '监控',
  // Russian
  'персональные данные', 'приватность', 'конфиденциальность', 'утечка данных', 'слежка', 'защита данных',
  // Polish
  'dane osobowe', 'prywatność', 'ochrona danych', 'rodo', 'wyciek danych', 'inwigilacja',
  // Korean
  '개인정보', '프라이버시', '정보 유출', '감시',
]

// Exclusion gate: drop solicitations, fundraising, and administrative pages that
// are not news. Matched against title and URL. Regulator agendas are NOT here,
// since those are legitimate current-event notices.
export const EXCLUDE_TERMS = [
  'donate', 'donation', 'become a member', 'membership drive',
  'join us', 'join our', 'join the', 'take action', 'sign the petition',
  'sign our petition', 'support us', 'support our work', 'fundrais',
  'giving tuesday', 'acknowledgement of receipt', 'acknowledgment of receipt',
  'save the date', 'nominate', 'call for nominations',
  'award recipient', 'career achievement', 'advisory board',
  // Non-English solicitation
  'spenden', 'jetzt spenden', 'przekaż', 'wesprzyj', 'пожертвовать', 'haz una donación',
]

// Words that collapse an item into a category. Checked title + summary, in this
// order (breach signals win, then legal/regulatory signals, else the source
// default carries). English-only, so non-English items keep their source default.
export const CATEGORY_HINTS = [
  {
    category: 'breaches',
    words: ['breach', 'data leak', 'leaked', 'hacked', 'ransomware', 'exposed', 'stolen data', 'data theft', 'compromised', 'exfiltrat', 'records exposed', 'misconfigur'],
  },
  {
    category: 'legal-regulatory',
    words: ['court', 'ruling', 'verdict', 'judgment', 'judgement', 'fine', 'fined', 'penalty', 'sanction', 'enforcement', 'investigat', 'probe', 'complaint', 'lawsuit', 'sued', 'sues', 'regulator', 'watchdog', 'bill', 'legislation', 'regulation', 'decision', 'guidance', 'consultation', 'agenda', 'plenary', 'settlement', 'injunction', 'order'],
  },
]

// Cross-border is a positive category, not a default. An article earns it only
// when it is about data moving or laws aligning BETWEEN countries: adequacy
// decisions, transfer mechanisms, treaties, equivalency, and the like. Checked
// against the title only, before the geographic hints.
export const CROSS_BORDER_TERMS = [
  'cross-border', 'cross border', 'transborder', 'trans-border',
  'data transfer', 'international transfer', 'onward transfer', 'data flows',
  'adequacy', 'equivalence', 'equivalency', 'mutual recognition',
  'data privacy framework', 'privacy shield', 'safe harbor', 'safe harbour',
  'standard contractual clauses', 'sccs', 'binding corporate rules',
  'schrems', 'transatlantic', 'eu-u.s.', 'eu-us', 'eu-uk', 'uk-us',
  'between the eu and', 'trade agreement', 'data pact', 'data bridge',
]

export const REGION_HINTS = [
  { region: 'europe', words: ['eu ', 'europe', 'gdpr', 'brussels', 'ireland', 'germany', 'france', 'italy', 'spain', 'uk ', 'britain'] },
  { region: 'americas', words: ['us ', 'united states', 'ftc', 'california', 'brazil', 'canada', 'mexico', 'argentina'] },
  { region: 'asia-pacific', words: ['china', 'japan', 'korea', 'india', 'australia', 'singapore', 'new zealand'] },
  { region: 'africa', words: ['kenya', 'nigeria', 'south africa', 'africa'] },
  { region: 'middle-east', words: ['israel', 'saudi', 'uae', 'qatar', 'middle east'] },
]
