# Repo overview

Personal academic / portfolio site for **Francesco Lässig** (`flaessig.netlify.app`).
Built with **Hugo** using the **Wowchemy "Academic" starter v5** (loaded as a Hugo Module — there is no local theme directory).

- Hugo version is pinned in `netlify.toml` (`HUGO_VERSION = "0.108.0"`). Newer Hugo can break Wowchemy v5 — match the pinned version locally.
- Theme/module is fetched via `go.mod`; do not vendor it.
- Deploy: Netlify auto-builds from `main`. Production runs `hugo --gc --minify -b $URL`; deploy previews additionally pass `--buildFuture` so future-dated content shows up in PR previews only.

## Local dev

```sh
hugo server -D            # local preview
hugo --gc --minify        # production-equivalent build (output in public/)
```

`resources/`, `public/`, and `outfit-app/` are gitignored build artifacts / unused scratch (the `outfit-app/` folder is a leftover Next.js stub, not part of the site).

## Where content lives

| Path | What it is |
| --- | --- |
| `content/_index.md` | Landing page — drives every homepage section (about, portfolio filters, experience, papers, education). Edit experience/education entries here. |
| `content/authors/admin/_index.md` | Bio, role, social links, profile photo (`avatar.jpg`). |
| `content/post-external/<slug>/index.md` | Portfolio items (talks, projects, articles, apps). Each folder has its own `featured.{png,jpg}`. |
| `content/publication/<slug>/index.md` | Academic papers (rendered in the "Papers" section). Folders also contain `cite.bib` + `featured.*`. |
| `config/_default/` | `config.yaml` (Hugo + modules), `params.yaml` (appearance, SEO, footer, etc.), `menus.yaml` (navbar), `languages.yaml`. |
| `static/uploads/` | PDFs & files linked as `/uploads/<file>` (e.g. `resume.pdf`, `consciousness-and-unambiguous-representations.pdf`). |
| `static/{dark-souls-benchmark,pokemon-llm-survey}/` | Standalone static mini-sites served at their own paths. |
| `assets/media/buddhabrot.png` | Landing-page background; referenced by filename in `_index.md`. |

## Adding a portfolio item

Create `content/post-external/<slug>/index.md` with frontmatter like:

```yaml
---
title: ...
summary: ...
tags:
  - Current Work     # or LLMs / Consciousness / Darts / Other
categories:
  - Apps             # Apps | Articles | Posts | Presentations | Projects
date: "2026-02-01T00:00:00Z"   # optional; future dates only show in deploy previews
external_link: https://...     # makes the card link out instead of opening a detail page
image:
  caption: ''
  focal_point: Smart
---
```

Add a `featured.png` (or `.jpg`) alongside `index.md` — this is the card thumbnail. Transparent PNGs are used for logos that should sit on the card background (see `llm2llm`, `vireo-lerncoach`).

## Portfolio filter buttons

The landing page's "Contents" section shows tag-based filter buttons. The button list and the **default selected filter** are both defined in `content/_index.md` under the `portfolio` block (currently `Current Work`, `LLMs`, `Consciousness`, `Darts`, `Other`). A post is only reachable via a button if it carries the matching `tag`. When adding a new filter, update both the `buttons:` list there and the relevant items' `tags:`.

## Conventions

- Indent: 2 spaces, LF, UTF-8, trailing newline (see `.editorconfig`). Markdown keeps trailing whitespace.
- PDFs live in `static/uploads/` and are referenced as `/uploads/<file>`, not via Google Drive. There is a Netlify `Link: rel="canonical"` header configured for `consciousness-and-unambiguous-representations.pdf` in `netlify.toml`; keep that header if the file is renamed.
- Don't commit `.DS_Store`, build output (`public/`, `resources/`), or anything under `outfit-app/`.
