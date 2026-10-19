# Cloudflare setup: your steps

Prepared 2026-10-19 by Compass. These are the steps that need you in a browser,
because they involve your accounts, passwords or approvals. Each step says what
Compass does next. Never paste a password or token into the chat. Paste tokens
only into the GitHub or Cloudflare screens named below.

## A. Install the Cloudflare plugin (1 minute)
1. In the Claude app, install the **Cloudflare** plugin from the card in the
   chat (or from the plugin directory). It is published by Cloudflare.
2. The first time Compass uses it, a Cloudflare sign-in page opens. Approve it.
   This lets Compass create the Pages project and check settings for you.

## B. Create the Cloudflare account (5 minutes)
1. Go to dash.cloudflare.com and sign up with your email. Choose the **Free**
   plan whenever asked.
2. Turn on two-step sign-in (My Profile, Authentication).

## C. Deploy token for GitHub (3 minutes)
1. In Cloudflare: My Profile, API Tokens, Create Token, Create Custom Token.
2. Name it `privacy-meridian-deploy`. Permissions: Account, Cloudflare Pages,
   Edit. Nothing else. Create it and copy it.
3. In GitHub: the Privacy-Meridian repository, Settings, Secrets and variables,
   Actions, New repository secret. Name `CLOUDFLARE_API_TOKEN`, paste the token.
4. Add a second secret named `CLOUDFLARE_ACCOUNT_ID`. The account ID is on the
   right side of your Cloudflare dashboard home page (Account ID, copy).

Compass then: creates the `privacy-meridian` Pages project, swaps the deploy
job to Cloudflare, runs it, and checks `privacy-meridian.pages.dev`.

## D. Refresh timer token (3 minutes)
1. In GitHub: your profile picture, Settings, Developer settings, Personal
   access tokens, **Fine-grained tokens**, Generate new token.
2. Name `privacy-meridian-refresh-timer`. Repository access: **Only select
   repositories**, choose Privacy-Meridian. Permissions: **Actions: Read and
   write**. Nothing else. Expiration: 1 year (set a calendar note to renew).
3. Copy the token. Compass will run the deploy of the timer and pause at the
   point where Cloudflare asks for the secret. You paste it there, in your
   terminal or the Cloudflare dashboard (Workers, privacy-meridian-refresh-timer,
   Settings, Variables, add secret `GITHUB_TOKEN`), not in the chat.

The timer code is in `docs/launch/refresh-timer/`.

## E. Domain (10 minutes, plus waiting)
1. Before anything else, check Namecheap: Domain List, Manage, **Advanced DNS**
   and **Email Forwarding**. Tell Compass what records exist, so nothing (such
   as email forwarding) breaks.
2. In Cloudflare: Add a domain, enter `privacymeridian.org`, choose Free.
   Cloudflare scans the existing records. Check they match what Namecheap had.
3. Cloudflare shows two nameservers. In Namecheap: Domain List, Manage,
   Nameservers, **Custom DNS**, enter both, save. The domain stays registered
   and billed at Namecheap.
4. Wait for Cloudflare to say the domain is active (minutes to a few hours).

Compass then: connects `privacymeridian.org` and `www` to the Pages project,
sets `www` to redirect to the bare address, updates the site's feed address,
checks security headers and links, and turns off the old GitHub Pages site.

## Keep OFF in Cloudflare
Web Analytics, Zaraz, Bot Fight Mode, Email Address Obfuscation, Rocket
Loader. These add scripts or cookies, which the site promises not to use.
