// Curated feed list plus discovery queries for Privacy Barrelman. The audience is
// privacy professionals (lawyers, DPOs), so this leans toward regulators,
// enforcement, and specialist legal/policy publications, with a strict
// privacy-relevance gate applied at fetch time.
//
// Two tiers feed the pipeline:
//   1. RSS_SOURCES     a small trusted core of regulators + specialist analysis.
//   2. DISCOVERY_QUERIES  a per-language/region news search (via Google News)
//      that pulls breaking privacy stories from the whole press, in the local
//      language, and resolves each link back to the original publisher. This is
//      what catches a national law change from that country's own newspapers
//      before the wire services translate it.
//
// Dead feeds are skipped gracefully, so a broken URL never breaks the whole run.
//
// Per RSS source:
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

  // Specialist non-English voices worth keeping as named sources. Broad-language
  // breaking coverage now comes from DISCOVERY_QUERIES below, so single-country
  // security blogs (which reported minor local incidents) were retired in favor
  // of searching each country's whole press.
  { name: 'netzpolitik.org', feed: 'https://netzpolitik.org/feed/', category: 'policy-perspectives', region: 'europe', lang: 'de', pathDeny: ['spenden'] },
  { name: 'Panoptykon', feed: 'https://panoptykon.org/rss.xml', category: 'policy-perspectives', region: 'europe', lang: 'pl', pathDeny: ['wesprzyj', 'przekaz', 'dotacja'] },
]

// Discovery layer. Each entry is a privacy news search in one language/region.
// The query terms are written in the local language so we catch a story from the
// country's own outlets. `when:7d` keeps it to the last week; freshest items win
// after the feed is capped and sorted. lang drives translation + the card label.
export const DISCOVERY_QUERIES = [
  // East Asia
  { lang: 'ja', hl: 'ja', gl: 'JP', ceid: 'JP:ja', region: 'asia-pacific', q: '個人情報保護 OR プライバシー OR データ保護 OR 個人情報保護法 when:7d' },
  { lang: 'ko', hl: 'ko', gl: 'KR', ceid: 'KR:ko', region: 'asia-pacific', q: '개인정보 OR 프라이버시 OR 개인정보보호 OR "개인정보 유출" when:7d' },
  { lang: 'zh', hl: 'zh-TW', gl: 'TW', ceid: 'TW:zh-Hant', region: 'asia-pacific', q: '個人資料 OR 隱私 OR 資料保護 OR 個資法 when:7d' },
  { lang: 'zh', hl: 'zh-HK', gl: 'HK', ceid: 'HK:zh-Hant', region: 'asia-pacific', q: '私隱 OR 個人資料 OR 資料外洩 when:7d' },
  { lang: 'zh', hl: 'zh-CN', gl: 'CN', ceid: 'CN:zh-Hans', region: 'asia-pacific', q: '隐私 OR 个人信息 OR 数据保护 OR 数据泄露 when:7d' },

  // Europe
  { lang: 'de', hl: 'de', gl: 'DE', ceid: 'DE:de', region: 'europe', q: 'Datenschutz OR DSGVO OR Datenleck OR "personenbezogene Daten" when:7d' },
  { lang: 'fr', hl: 'fr', gl: 'FR', ceid: 'FR:fr', region: 'europe', q: '"protection des données" OR "données personnelles" OR RGPD OR "vie privée" when:7d' },
  { lang: 'es', hl: 'es', gl: 'ES', ceid: 'ES:es', region: 'europe', q: '"protección de datos" OR privacidad OR "datos personales" when:7d' },
  { lang: 'nl', hl: 'nl', gl: 'NL', ceid: 'NL:nl', region: 'europe', q: 'privacy OR persoonsgegevens OR datalek OR AVG when:7d' },
  { lang: 'it', hl: 'it', gl: 'IT', ceid: 'IT:it', region: 'europe', q: 'privacy OR "protezione dei dati" OR GDPR OR "dati personali" when:7d' },
  { lang: 'pl', hl: 'pl', gl: 'PL', ceid: 'PL:pl', region: 'europe', q: '"dane osobowe" OR prywatność OR RODO OR "wyciek danych" when:7d' },
  { lang: 'ru', hl: 'ru', gl: 'RU', ceid: 'RU:ru', region: 'europe', q: '"персональные данные" OR приватность OR "утечка данных" OR "защита данных" when:7d' },

  // Latin America
  { lang: 'es', hl: 'es-419', gl: 'MX', ceid: 'MX:es-419', region: 'americas', q: '"protección de datos" OR privacidad OR "datos personales" when:7d' },
  { lang: 'pt', hl: 'pt-BR', gl: 'BR', ceid: 'BR:pt-419', region: 'americas', q: '"proteção de dados" OR privacidade OR LGPD OR "dados pessoais" when:7d' },

  // Middle East
  { lang: 'ar', hl: 'ar', gl: 'SA', ceid: 'SA:ar', region: 'middle-east', q: '"حماية البيانات" OR "خصوصية البيانات" OR "البيانات الشخصية" OR "تسريب البيانات" when:7d' },

  // English, region-diversifying (local outlets, local privacy law)
  { lang: 'en', hl: 'en-US', gl: 'US', ceid: 'US:en', region: 'americas', q: '"data privacy" OR "data protection" when:7d' },
  { lang: 'en', hl: 'en-GB', gl: 'GB', ceid: 'GB:en', region: 'europe', q: '"data privacy" OR "data protection" OR "Information Commissioner" when:7d' },
  { lang: 'en', hl: 'en-IN', gl: 'IN', ceid: 'IN:en', region: 'asia-pacific', q: '"data privacy" OR "data protection" OR DPDP when:7d' },
  { lang: 'en', hl: 'en-AU', gl: 'AU', ceid: 'AU:en', region: 'asia-pacific', q: '"data privacy" OR "data protection" OR "Privacy Act" when:7d' },
  { lang: 'en', hl: 'en-NG', gl: 'NG', ceid: 'NG:en', region: 'africa', q: '"data privacy" OR "data protection" OR NDPR when:7d' },
  { lang: 'en', hl: 'en-ZA', gl: 'ZA', ceid: 'ZA:en', region: 'africa', q: '"data privacy" OR "data protection" OR POPIA when:7d' },
]

// Reputability policy for the discovery layer (permissive). Any resolved domain
// is accepted if the item is on-topic, EXCEPT domains on DENY_DOMAINS. Domains on
// TRUST_DOMAINS are preferred when the same story appears from several outlets.
// Both lists are seeds and grow reactively as junk or good sources show up.
export const TRUST_DOMAINS = new Set([
  // Global wires and press
  'reuters.com', 'apnews.com', 'bloomberg.com', 'ft.com', 'wsj.com', 'nytimes.com',
  'washingtonpost.com', 'theguardian.com', 'bbc.co.uk', 'bbc.com', 'economist.com',
  // Policy and tech press
  'politico.eu', 'politico.com', 'euractiv.com', 'techcrunch.com', 'theverge.com',
  'wired.com', 'arstechnica.com', 'therecord.media', 'cyberscoop.com', 'techpolicy.press',
  'lawfaremedia.org', 'iapp.org', 'biometricupdate.com', 'record.pt',
  // Japan
  'japantimes.co.jp', 'asahi.com', 'mainichi.jp', 'nikkei.com', 'yomiuri.co.jp', 'kyodonews.net',
  // Korea
  'koreaherald.com', 'koreatimes.co.kr', 'yna.co.kr', 'yonhapnewstv.co.kr', 'kbs.co.kr', 'khan.co.kr',
  // Greater China
  'scmp.com', 'rthk.hk', 'hk01.com', 'udn.com', 'ithome.com.tw', 'rti.org.tw', 'news.cn', 'xinhuanet.com',
  // Europe
  'elpais.com', 'elmundo.es', 'lemonde.fr', 'lefigaro.fr', 'spiegel.de', 'zeit.de',
  'heise.de', 'golem.de', 'faz.net', 'sueddeutsche.de', 'nrc.nl', 'volkskrant.nl',
  'nos.nl', 'corriere.it', 'repubblica.it', 'ansa.it',
  // Latin America
  'folha.uol.com.br', 'oglobo.globo.com', 'estadao.com.br', 'eluniversal.com.mx',
  // South Asia, Africa, Oceania
  'thehindu.com', 'indianexpress.com', 'medianama.com', 'techcabal.com',
  'abc.net.au', 'theconversation.com',
  // Regulators
  'edpb.europa.eu', 'cnil.fr', 'ico.org.uk', 'autoriteitpersoonsgegevens.nl', 'aepd.es',
  'garanteprivacy.it', 'ftc.gov', 'pdpc.gov.sg',
])

export const DENY_DOMAINS = new Set([
  // Press-release wires and syndication (not original reporting)
  'prnewswire.com', 'globenewswire.com', 'businesswire.com', 'einnews.com', 'einpresswire.com',
  'openpr.com', 'prweb.com', 'accesswire.com', 'newswire.ca', 'prlog.org', 'issuewire.com',
  'lelezard.com', 'citybiz.co', 'tradeflock.com',
  // Stock/crypto/market aggregators that surface off-topic on a loose keyword match
  'marketscreener.com', 'benzinga.com', 'simplywall.st', 'seekingalpha.com', 'tradingview.com',
  'moomoo.com', 'bolsamania.com', 'kalkinemedia.com', 'kalkine.com.au', 'yellow.com',
  'stocktitan.net', 'investing.com', 'coindesk.com', 'diariobitcoin.com',
  // Celebrity/entertainment outlets that match on "privacy" in a gossip context
  'gala.fr', 'film.wp.pl',
])

// GDELT global firehose. Removed: the discovery layer (Google News search per
// language/region) replaced it with far better precision and original sources.

// Relevance gate: an item must mention at least one of these in its title or
// summary, or it is dropped. Multilingual so non-English privacy news is kept.
// Trusted RSS sources (regulators) and discovery items (already vouched by their
// search query) skip this gate.
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
  // Italian
  'protezione dei dati', 'dati personali', 'riservatezza', 'violazione dei dati',
  // Japanese (personal-data specific: bare '情報漏洩'/'監視' let general security
  // and confidential-info stories through, so they are intentionally omitted)
  '個人情報', '個人データ', 'プライバシー', 'データ保護', '個人情報保護', '顔認証',
  // Chinese (simplified + traditional)
  '隐私', '个人信息', '数据保护', '数据泄露', '监控',
  '隱私', '個人資料', '資料保護', '資料外洩', '私隱', '個資',
  // Russian
  'персональные данные', 'приватность', 'конфиденциальность', 'утечка данных', 'слежка', 'защита данных',
  // Polish
  'dane osobowe', 'prywatność', 'ochrona danych', 'rodo', 'wyciek danych', 'inwigilacja',
  // Korean (personal-data specific; bare '감시'/'정보 유출' were too broad)
  '개인정보', '프라이버시', '개인정보보호', '얼굴 인식',
  // Arabic (bare 'خصوصية' also means "specialness/exclusivity", so it is
  // intentionally omitted in favor of the unambiguous data-privacy compounds)
  'خصوصية البيانات', 'خصوصية المعلومات', 'حماية البيانات', 'البيانات الشخصية', 'تسريب البيانات',
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
  'speaking engagements', 'upcoming speaking',
  // Non-English solicitation
  'spenden', 'jetzt spenden', 'przekaż', 'wesprzyj', 'пожертвовать', 'haz una donación',
  // Celebrity / human-interest "privacy" (a person pleading to be left alone),
  // which is not data-privacy news. Deliberately high-precision so it does not
  // catch legal coverage like "right to respect for private life" or a headline
  // about protecting users' privacy. Bare "privacy" stays a valid signal because
  // most bare-privacy stories are legitimate (regulators, AI, health data).
  'asks for privacy', 'ask for privacy', 'asking for privacy', 'asked for privacy',
  'request for privacy', 'requests for privacy', 'plea for privacy', 'pleads for privacy',
  'begs for privacy', 'wants privacy', 'craves privacy', 'fiercely private',
  'respect her privacy', 'respect his privacy', 'respecting her privacy', 'respecting his privacy',
  'privacy during this difficult', 'as they grieve', 'as they mourn',
  'pide privacidad', 'piden privacidad', 'solicita privacidad',
  'chiede privacy', 'chiede riservatezza', 'pede privacidade', 'pedem privacidade',
  'bittet um privatsphäre',
  // Entertainment/tabloid markers that never occur in data-privacy news
  'red carpet', 'baby bump', 'engagement ring', 'dating rumor', 'dating rumours', 'love life',
  'tapis rouge', 'alfombra roja', 'tappeto rosso', 'tapete vermelho', 'roter teppich',
  'vie amoureuse', 'vida amorosa', 'vita sentimentale', 'liebesleben',
]

// Words that collapse an item into a category. Checked title + summary, in this
// order (breach signals win, then legal/regulatory signals, else the source
// default carries). Multilingual so non-English items are categorized too.
export const CATEGORY_HINTS = [
  {
    category: 'breaches',
    words: [
      // English
      'breach', 'data leak', 'leaked', 'hacked', 'ransomware', 'exposed', 'stolen data',
      'data theft', 'compromised', 'exfiltrat', 'records exposed', 'misconfigur',
      // Other languages
      'datenleck', 'datenpanne', 'fuite de données', 'filtración', 'violación de datos',
      'vazamento', 'utyczka', 'wyciek danych', 'утечка', '情報漏洩', '個人情報漏', '個資外洩',
      '資料外洩', '데이터 유출', '개인정보 유출', '数据泄露', '数据泄漏', 'تسريب',
    ],
  },
  {
    category: 'legal-regulatory',
    words: [
      // English
      'court', 'ruling', 'verdict', 'judgment', 'judgement', 'fine', 'fined', 'penalty',
      'sanction', 'enforcement', 'investigat', 'probe', 'complaint', 'lawsuit', 'sued', 'sues',
      'regulator', 'watchdog', 'bill', 'legislation', 'regulation', 'decision', 'guidance',
      'consultation', 'agenda', 'plenary', 'settlement', 'injunction', 'order',
      // Other languages
      'amende', 'multa', 'bußgeld', 'geldstrafe', 'grzywna', 'штраф', 'sentenza',
      '罚款', '過料', '課徴金', '과징금', '벌금', '判决', '法改正', '改正法', '法案',
    ],
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
