// Privacy Meridian feed refresh timer (Cloudflare Worker, Cron Trigger).
//
// GitHub's free scheduler runs the "every 2 hours" feed job only every 3.5 to
// 8 hours. This Worker runs on Cloudflare's own schedule (see wrangler.toml)
// and asks GitHub to start the "Refresh and deploy Barrelman" workflow, so the
// feed rebuilds on time. The GitHub schedule stays in place as a backup.
//
// Secret (set with `wrangler secret put GITHUB_TOKEN`, never committed):
//   GITHUB_TOKEN - a fine-grained GitHub token limited to the
//                  employeremployee/Privacy-Meridian repository, with only
//                  "Actions: Read and write" permission.

const REPO = 'employeremployee/Privacy-Meridian'
const WORKFLOW = 'barrelman-refresh.yml'
const BRANCH = 'v2-map-first'

async function startRefresh(env) {
  const res = await fetch(`https://api.github.com/repos/${REPO}/actions/workflows/${WORKFLOW}/dispatches`, {
    method: 'POST',
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${env.GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'privacy-meridian-refresh-timer',
    },
    body: JSON.stringify({ ref: BRANCH }),
  })
  // GitHub answers 204 No Content when the run is queued.
  if (res.status !== 204) {
    throw new Error(`GitHub dispatch failed: ${res.status} ${await res.text()}`)
  }
}

export default {
  async scheduled(_event, env, ctx) {
    ctx.waitUntil(startRefresh(env))
  },
}
