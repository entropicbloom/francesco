# Repo overview

Personal professional site for **Francesco Lässig** (`www.flaessig.com`, also `flaessig.netlify.app`).
Built with **Hugo** and a small set of custom templates in `layouts/`. There is no theme and no Go/npm dependency: the Hugo binary is the only build tool.

- Hugo version is pinned in `netlify.toml` (`HUGO_VERSION`). Match it locally.
- Deploy: Netlify auto-builds from `main`. Production runs `hugo --gc --minify -b $URL`; deploy previews additionally pass `--buildFuture` so future-dated content shows up in PR previews only.
- Consciousness essays and talks live on entropicbloom.com, not here. This site keeps only CV-level consciousness work (the intentionality paper, the ARC-INTREPID PhD entry, Qualiaheads).

## Local dev

```sh
hugo server -D            # local preview
hugo --gc --minify        # production-equivalent build (output in public/)
```

`resources/`, `public/`, `.hugo_build.lock`, and `outfit-app/` are gitignored build artifacts / unused scratch (the `outfit-app/` folder is a leftover Next.js stub, not part of the site).

## Where content lives

| Path | What it is |
| --- | --- |
| `content/_index.md` | Landing page front matter: role, intro, profile links, work filters, experience, education. Edit experience/education entries here. |
| `content/post-external/<slug>/index.md` | Portfolio cards (talks, projects, articles, apps). Each folder has its own `featured.{png,jpg}`. These have no pages of their own; cards link to `external_link`. |
| `content/publication/<slug>/index.md` | Papers. Listed in the homepage's "Papers" tab and rendered at `/publication/<slug>/`. Folders also contain `cite.bib` + optional `featured.*`. |
| `hugo.yaml` | Site config and `params` (description, job title, essays URL). |
| `layouts/` | Templates: `home.html` (landing page), `publication/page.html`, `404.html`, `baseof.html`, partials in `_partials/`, `home.redirects`, `home.llms.txt`, `robots.txt`. |
| `assets/css/main.css`, `assets/js/filter.js` | All styling (color tokens with light/dark variants at the top) and the Work tab script. |
| `assets/media/` | `buddhabrot.png` (hero background, also the social preview image), `avatar.jpg`, `icon.png` (favicon). |
| `static/uploads/` | PDFs & files linked as `/uploads/<file>` (e.g. `resume.pdf`, `consciousness-and-unambiguous-representations.pdf`). |
| `static/{cv,cv-short}.html` | Standalone CV pages, public on purpose but not linked from the site. |
| `static/{dark-souls-benchmark,pokemon-llm-survey}/` | Standalone static mini-sites served at their own paths. |

## Adding a portfolio item

Create `content/post-external/<slug>/index.md` with frontmatter like:

```yaml
---
title: ...
summary: ...
tags:
  - Current Work     # or Talks / Side Projects; must match a tab tag in content/_index.md
categories:
  - Apps             # Apps | Articles | Posts | Presentations | Projects
date: "2026-02-01T00:00:00Z"   # optional; future dates only show in deploy previews
external_link: https://...     # makes the card link out instead of opening a detail page
image:
  caption: ''
  focal_point: Center   # crop anchor for the 16:10 card image: Center, Top, Bottom, Left, Right, Smart
  fit: contain          # only for logos: show the whole image on a light tile instead of cropping
  padding: 11% 16%      # optional, with fit: contain; more padding = smaller logo (default 6% 9%)
---
```

Add a `featured.png` (or `.jpg`) alongside `index.md` — this is the card thumbnail. Logos use `fit: contain` (see `kontexus`, `llm2llm`, `vireo-lerncoach`). The card label comes from the first category.

## Work tabs

The "Work" section has tabs, listed under `work.tabs` in `content/_index.md` (currently `Current Work`, `Papers`, `Talks`, `Side Projects`). The first one is selected on page load; without JavaScript all panels show. A tab with `tag:` shows the cards carrying that tag; the tab with `papers: true` shows `content/publication/`. Each tab is reachable at `/#<slug>` (old links to `/#papers` and the "← All papers" link on paper pages rely on this). Within a tab, cards with a `weight` come first (ascending), then the rest newest first.

## SEO and agent files

- `layouts/_partials/head.html`: title, description, canonical, Open Graph, `Person` JSON-LD on the homepage.
- `layouts/_partials/citation-meta.html`: Google Scholar `citation_*` tags and `ScholarlyArticle` JSON-LD on paper pages. Authors listed as "and others" are skipped; the journal name is only emitted for journal articles (`publication_types: ["2"]`).
- `layouts/home.llms.txt` generates `/llms.txt` (plain-text summary for language models) from the same front matter as the homepage, so it stays in sync.
- `layouts/robots.txt` points to the sitemap.

## Old URLs

`layouts/home.redirects` generates Netlify's `_redirects`. It redirects flaessig.netlify.app to www.flaessig.com and sends the old Wowchemy URLs (per-card pages under `/post-external/`, `/tag/`, `/category/`, `/author/` pages) to their targets or the homepage. When removing a card, add a line for its old URL there if it might be indexed.

## Conventions

- Indent: 2 spaces, LF, UTF-8, trailing newline (see `.editorconfig`). Markdown keeps trailing whitespace.
- PDFs live in `static/uploads/` and are referenced as `/uploads/<file>`, not via Google Drive. There is a Netlify `Link: rel="canonical"` header configured for `consciousness-and-unambiguous-representations.pdf` in `netlify.toml`; keep that header if the file is renamed.
- Don't commit `.DS_Store`, build output (`public/`, `resources/`), or anything under `outfit-app/`.
