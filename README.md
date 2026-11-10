# Portfolio Web

Personal portfolio — single-page static site built with Astro and Tailwind CSS v4, with a frontier-inspired visual identity (sepia/crimson palette, western typography).

## Stack

- [Astro](https://astro.build) (static output, Content Collections)
- Tailwind CSS v4 via `@tailwindcss/vite`
- TypeScript
- Hosted on Cloudflare Pages

## Development

Requires Node >= 22.12 and pnpm.

```sh
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # static output in ./dist
pnpm preview   # serve the production build locally
```

## Content

- **Projects**: add a Markdown file in `src/content/projects/` (title, description, tags, status, date, optional `repo` / `url`). No component changes needed.
