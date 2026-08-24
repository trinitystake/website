<div align="center">

<img src="static/img/trinity.svg" alt="" width="96" />

# Trinity Stake

**The Trinity Stake website, and the home of Katacomb VPN.**

[![Deploy](https://github.com/trinitystake/website/actions/workflows/deploy.yml/badge.svg)](https://github.com/trinitystake/website/actions/workflows/deploy.yml)
[![Docusaurus](https://img.shields.io/badge/Docusaurus-3.10-3ECC5F?logo=docusaurus&logoColor=white)](https://docusaurus.io/)
[![Node](https://img.shields.io/badge/Node-20%2B-5FA04E?logo=node.js&logoColor=white)](https://nodejs.org/)

[**Live site**](https://trinitystake.github.io/website/) · [Katacomb VPN](https://trinitystake.github.io/website/katacomb-vpn) · [Validator status](https://p2pscan.com/validator/sentvaloper1mcwvu4vpvfcnxduzpelehmgga282wtc0xux7se)

</div>

---

A Docusaurus 3 site with the docs and blog plugins switched off. Every page is a React
component under `src/pages`, the look comes from one stylesheet, and dark mode is the
only mode. It covers who Trinity Stake is, how to run and monitor a Sentinel node, and
the Katacomb VPN desktop client.

## Quick start

You need **Node 20 or newer** and **npm**. This project uses npm, not yarn: the lockfile
is `package-lock.json`.

```bash
npm install     # first time; use npm ci for an exact install from the lockfile
npm start       # dev server with live reload
```

The dev server runs at **http://localhost:3000/website/**. The `/website/` suffix is not a
typo, it is the `baseUrl` that matches the GitHub Pages path.

Other commands worth knowing:

```bash
npm run build   # production build into build/
npm run serve   # serve the built site locally, exactly as it will ship
npm run clear   # drop the Docusaurus cache when output looks stale
```

## Layout

| Path | What lives there |
| :--- | :--- |
| `src/pages/index.jsx` | Homepage: hero, About, Guides |
| `src/pages/katacomb-vpn.jsx` | Katacomb VPN: screenshots, downloads, verification, security model |
| `src/components/HomepageComponents.jsx` | `HomepageSection` and `HomepageCard`, the blocks both pages are built from |
| `src/components/icons.jsx` | Inline SVG icons |
| `src/css/custom.css` | The entire design: layout, hero, cards, accent colors |
| `src/theme/Footer/Layout/index.jsx` | Swizzled footer layout |
| `plugins/katacomb-release/` | Build time plugin that reads the latest Katacomb release |
| `static/img/` | Logos, screenshots, social card |
| `docusaurus.config.js` | Site metadata, navbar, footer, plugin registration |

## The Katacomb release plugin

The version, download links and file sizes on the Katacomb page are never edited by hand.
At build time, `plugins/katacomb-release` asks the GitHub API for the latest release of
[katacomb-vpn](https://github.com/trinitystake/katacomb-vpn) and publishes it as global
data, which the pages read through `usePluginData('katacomb-release')`.

Cutting a release on GitHub is therefore the whole update. The next build carries the new
version, links and artifact sizes across the site.

A successful build says which release it used:

```
[katacomb-release] using v3 from GitHub
```

If the API cannot be reached, because the build is offline or rate limited, the plugin
falls back to a release pinned near the top of `plugins/katacomb-release/index.js` so the
build still produces a working page instead of failing. **Keep that fallback current with
each release**, otherwise a rate limited build quietly publishes old download links.

## Deploying

There is nothing to run. [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
builds the site and publishes `build/` to the `gh-pages` branch on:

- **every push to `main`**
- **a daily run at 05:00 UTC**, which is how a new Katacomb release reaches the site
  without anyone touching this repo
- **manual runs**, from the Actions tab via *Run workflow*

Push a new Katacomb release and want it live now? Trigger the workflow by hand instead of
waiting for the nightly run.

## Good to know

- `onBrokenLinks` is set to `throw`. A dead internal link fails the build rather than
  shipping, so fix the link, do not soften the setting.
- Dark mode is the only mode. The toggle is disabled in `docusaurus.config.js`.
- `engines.node` in `package.json` still says `>=16.14`. That is stale: Docusaurus 3.10
  requires Node 20 or newer, and CI builds on Node 23.
- Leftovers from the Docusaurus template that nothing uses: `sidebars.js`, the empty
  `docs/` folder, `src/pages/markdown-page.md`, and the `deploy` script in `package.json`.
