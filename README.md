# Eve Studio — website

The marketing site and documentation for **[Eve Studio](https://github.com/ianborders/eve-studio)** — the desktop control center for [Eve](https://eve.dev) agents.

**Live:** [evestudio.dev](https://evestudio.dev)

This repo is intentionally separate from the [app repo](https://github.com/ianborders/eve-studio) (the Electron product, shipped as signed GitHub Releases). The site is a Next.js app deployed on Vercel and auto-deploys on push to `main`.

## Stack

- **[Next.js 16](https://nextjs.org)** (App Router) + **React 19**
- **[Tailwind CSS v4](https://tailwindcss.com)** with `@tailwindcss/typography` for docs prose
- **MDX** (`@next/mdx`) for documentation pages
- **[Geist](https://vercel.com/font)** + **Space Mono** via `next/font`

## Structure

```
app/
  layout.tsx            # root layout: fonts, metadata, icons
  page.tsx              # the landing page (hero, features, "Built on Eve", CTA)
  globals.css           # theme tokens + docs code styling
  opengraph-image.png   # social share card
  icon.png              # favicon
  apple-icon.png        # iOS home-screen icon
  docs/
    layout.tsx          # docs shell (header + sidebar + prose)
    nav.ts              # sidebar navigation tree
    DocsSidebar.tsx     # sidebar (active-link highlighting)
    page.mdx            # /docs (Introduction)
    <slug>/page.mdx     # every other docs page
public/
  brand/                # Eve mark assets
  shots/                # app screenshots
```

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build
pnpm start      # serve the production build
```

## Writing docs

Each documentation page is one MDX file. To add a page:

1. Create `app/docs/<slug>/page.mdx`:

   ```mdx
   export const metadata = {
     title: "<Title> — Eve Studio Docs",
     description: "<one sentence>",
   };

   # <Title>

   Content…
   ```

2. Add it to the sidebar in [`app/docs/nav.ts`](app/docs/nav.ts).

Prose is styled with Tailwind Typography; fenced code blocks render dark, inline code as light pills (see `globals.css`). Cross-link other docs with plain `/docs/...` links.

## Deploy

The Vercel project is connected to this repo, so **any push to `main` deploys to production** ([evestudio.dev](https://evestudio.dev)); pull requests get preview URLs. No manual CLI step needed.

## License

MIT.
