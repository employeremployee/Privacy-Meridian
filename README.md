# Privacy Meridian

**Navigate global privacy law.**
Live site: **[privacymeridian.org](https://privacymeridian.org)**

Privacy Meridian is a free public guide to privacy laws around the world, written in plain language. Pick a country on the map to read its law. Or compare up to five laws side by side, topic by topic.

The site is built for two audiences. People can learn what a law means for them. Privacy professionals get the detail behind it, with links to the official sources.

---

## What it does

- **Interactive world map.** 17 laws are covered in detail: the GDPR, the UK GDPR, the CCPA/CPRA, Brazil's LGPD, China's PIPL, Japan's APPI, India's DPDP Act, and laws in Switzerland, Canada, Australia, Singapore, South Korea, New Zealand, South Africa, Kenya, Argentina, and Uruguay. Another 94 countries, 18 US states, and 3 Canadian provinces with a privacy law in effect are shown and listed.
- **Law pages.** Each topic has a plain summary, "What this means for you", a professional layer with article references, response deadlines, and source links.
- **Help for organizations.** Optional guidance for small, mid-market, and enterprise teams on closing compliance gaps.
- **Compare view.** Side-by-side tables across eight topics, including individual rights, legal bases, breach deadlines, international transfers, and enforcement.
- **Glossary popups.** Legal terms are explained in place, and they work with a keyboard as well as a mouse.
- **Privacy Barrelman.** A privacy news feed that refreshes throughout the day. It draws on regulators, courts, and trusted outlets worldwide, and translates foreign-language headlines into English.

## Privacy by design

A privacy site should practice what it explains.

- No cookies, no trackers, no analytics, no ads, and no accounts.
- No browser storage. All state lives in memory.
- Fonts, map data, and the news feed are self-hosted, so a visit makes no third-party requests.
- A strict Content Security Policy, HSTS, and `no-referrer`. A `no-transform` header stops the host from injecting scripts.
- News links have tracking parameters removed, and news cards load no images.

## Accessibility

The site targets WCAG 2.1 AA. Accessibility was part of the build from the start.

- Every control works from the keyboard. The map has a skip link, labelled regions, and a visible focus ring.
- Comparison tables use proper table markup and header scopes.
- Screen readers get announcements for map selections, and original headlines for translated news.
- The site respects reduced-motion settings and keeps text contrast at AA levels.

## How the content is checked

- Every law page is checked against the official text and its regulator's guidance. Claims backed only by secondary sources are held back until confirmed.
- Changes go through recorded reviews: legal accuracy, plain-language style, and accessibility. Decisions are logged in [`CONTENT-REVIEW.md`](CONTENT-REVIEW.md) and [`docs/`](docs/).
- The site is educational. It is not legal advice.

## Built with

| Area | Tools |
|---|---|
| App | React 19, Vite, React Router |
| Styling | Tailwind CSS v4, with a custom palette and self-hosted Inter and JetBrains Mono |
| Map | react-simple-maps, with Natural Earth data (public domain) |
| UI parts | Radix UI popover and tooltip, and i18next for interface text |
| News pipeline | Node scripts using rss-parser and cheerio. The feed is built and deployed every two hours by GitHub Actions on a schedule |
| Quality | Oxlint, plus scripted checks for glossary popups, facts, and style rules |

Content lives in JSON data files (`src/data/`). Interface text lives in `src/i18n/locales/en/translation.json`. Components contain no hard-coded copy.

## Running it locally

```bash
npm install
npm run dev
```

Other scripts: `npm run build`, `npm run lint`, and `npm run preview`.

## License

Copyright © 2026 Privacy Meridian. All rights reserved. See [LICENSE](LICENSE).
