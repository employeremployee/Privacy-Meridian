# Privacy Meridian launch checklist

Prepared 2026-10-18. Everything up to step 1 is done and committed locally on
`map-and-content-updates`. Nothing has been pushed. Steps marked **(Jared)**
need your accounts or a decision.

## Already done (local)
- Content review of all 14 original laws, plus Canada, Australia and Singapore.
- Map-only tier: 91 countries with a law in force, 79 colored on the map.
- Accessibility fixes, news feed cleanup, security headers (`public/_headers`).
- Footer date, page description, `robots.txt` and `sitemap.xml`.

## 1. Review and push (Jared, with Compass)
1. Look over the site locally (`npm run dev`), especially the new countries and
   the map-only list under the map key.
2. Approve or adjust the judgment calls listed at the end of this file.
3. Pull in GitHub Desktop first, then push `map-and-content-updates`.
4. Merge `map-and-content-updates` into `v2-map-first`.
5. Make `v2-map-first` the repository's default branch. Scheduled feed
   refreshes only run on the default branch.

## 2. Cloudflare Pages (Jared)
1. Create a free Cloudflare account, and a Pages project named
   `privacy-meridian` using Direct Upload.
2. Create an API token with only "Cloudflare Pages: Edit" permission.
3. Add `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` as GitHub repository
   secrets.
4. DONE 2026-10-19: the deploy workflow now publishes to Cloudflare Pages
   (project privacy-meridian, Direct Upload, no Git connection).
5. Run the workflow once by hand and check the `*.pages.dev` address.
6. Make the 2-hour feed refresh reliable. GitHub's free scheduler has been
   running the "every 2 hours" job only every 3.5 to 8 hours (checked
   2026-10-19), which can trip the 5-hour "may be out of date" notice. Use a
   free Cloudflare scheduled task (Cron Trigger) to start the workflow every
   2 hours through GitHub's workflow-dispatch API. It needs a GitHub token
   limited to "Actions: write" on this repository only. Keep the GitHub
   schedule as a backup.
7. In Cloudflare, keep these OFF: Web Analytics, Zaraz, Bot Fight Mode,
   Email Address Obfuscation, Rocket Loader.

## 3. Domain (Jared)
DONE 2026-10-19. Nameservers moved from Namecheap to Cloudflare (remy, wally).
The registration stays at Namecheap. `privacymeridian.org` is a custom domain
on the Pages project (CNAME @ to privacy-meridian.pages.dev, proxied). `www`
is a proxied CNAME with a 301 redirect rule to the bare address, and Always
Use HTTPS is on. Namecheap's email-forwarding MX and SPF records were kept
(no forwarders in use). AI training crawlers are blocked through Cloudflare's
managed robots.txt.

## 4. After the domain works (Compass)
1. DONE: `LIVE_FEED_URL` in `src/pages/BarrelmanPage.jsx` now points to
   `https://privacymeridian.org/news.json`.
2. DONE 2026-10-19: live site checked. Security headers present, `/barrelman`,
   `/about` and `/news.json` return 200, www and http redirect correctly, no
   injected scripts and no cookies.
3. Turn off GitHub Pages for the repository.
4. At Namecheap, turn off auto-renew for PremiumDNS (renews 7 Jul 2027). It
   is unused now that Cloudflare runs DNS.

## Judgment calls made overnight (please confirm)
- Map-only list leaves out dependent territories (Jersey, Guernsey, Isle of
  Man, Gibraltar, Bermuda, Cayman, BVI, Faroe). Hong Kong, Macau and Taiwan
  are included. Kosovo is in the text list only. Laos is included although its
  law covers electronic data only.
- Page description (in `index.html`): "Compare privacy laws around the world
  in plain language. Explore 17 laws in detail, side by side."
- Footer now reads "Last updated October 2026".

## Watch soon after launch
- Egypt's law reaches full compliance on 31 Oct 2026, and Chile's new law
  applies from 1 Dec 2026. Both change the map-only list.
- Australia's automated-decision rule starts 10 Dec 2026.
- Korea, India and Japan pages carry future dates that will need updating as
  they pass.
