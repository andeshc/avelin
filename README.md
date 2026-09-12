# Avelin — a language and its making

Avelin is a constructed human language co-designed by GPT 6 Astra bots at a human's direction. This repository contains its complete core grammar, seed dictionary, learning texts, and the documented conversation and corrections that shaped it.

The website is a static reading interface over these Markdown sources. Tern, the earlier agent communication protocol, is archived separately; it is not Avelin's human grammar.

## Read the specifications

- [Avelin reference grammar](content/avelin/GRAMMAR.md)
- [Core lexicon](content/avelin/LEXICON.md)
- [Reader, dialogue, poetry, and exercises](content/avelin/READER.md)
- [Creation story](content/process/JOURNEY.md)
- [Design decisions and corrections](content/process/DECISIONS.md)
- [Tern protocol specification](content/tern/SPEC.md)

## Contribution archive

- [the reviewing bot's Avelin proposal](content/process/LANGUAGE-PROPOSAL.md)
- [First grammar review](content/process/LANGUAGE-REVIEW.md)
- [Second consistency review](content/process/LANGUAGE-FINAL-REVIEW.md)
- [the reviewing bot's Tern proposal](content/process/TERN-PROPOSAL.md)
- [Tern review](content/process/TERN-REVIEW.md)
- [Tern revision-chain exchange](content/process/TERN-FINAL.md)

Archive records describe intermediate drafts. Their original critiques are preserved, but session identifiers and runtime warnings are removed, and machine-local document paths are replaced with repository-relative paths. The current specifications include later corrections and take precedence over historical suggestions.

## Run locally

Requires Node.js 22 and npm.

```sh
npm ci
npm test
npm run build
python3 -m http.server 8080 --directory dist
```

Open http://localhost:8080. The generated `dist/` directory is the website; it can be served by any static host. Reading the documents does not require a backend, credentials, or an AI service.

## Deploy with Railway / Railpack

Railpack detects the pinned npm version and the production start command from `package.json`:

```sh
npm run build
npm start
```

The build writes `dist/`. The production server listens on `0.0.0.0` and Railway's `PORT`, serves the site at `/`, and returns real 404 responses for missing pages. Use `/` as the health-check path. No `RAILPACK_SPA_OUTPUT_DIR` setting or custom start-command override is required.

`npm run preview` remains a localhost-only preview of the GitHub Pages `/avelin/` mount. Do not use the preview command as the Railway start command: production must retain the `/avelin/` document directory in root-mounted URLs.

## Publish with GitHub Pages

The included workflow builds and checks the site and deploys on pushes to `main`. Pull requests run checks without deploying. It can also be run manually.

One-time repository setup:

1. Open **Settings → Pages** in this repository.
2. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. Run the Pages workflow from **Actions**, or push a change to `main`.

Expected project address after a successful deployment: **https://andeshc.github.io/avelin/**. This address is not a claim that deployment has already succeeded; check the workflow and Pages settings.

The initial publishing environment's token could read the repository, but both Git push and the request to enable Pages returned HTTP 403. A repository owner must enable it in the UI or supply an appropriately permitted credential through their normal credential management—not by posting a token in an issue or chat.

## Editing

Edit `content/` rather than generated HTML. Keep the grammar, examples, translations, and dictionary consistent; changing a rule may require changes in several documents. Add consequential linguistic changes to the decision record. Use an independent composition and review to exercise new constructions, rather than relying solely on a form checker.

The grammar is a complete **core** grammar, not a natural-language-sized vocabulary or a claim of a historical speaking community. No audio corpus, parser, or cryptographic runtime is included. No content or software license has yet been selected for this repository.
