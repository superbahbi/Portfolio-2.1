# Bobby Lee

A small personal site: a short about section, some older projects, and links.

Built with Next.js 14, TypeScript, and Tailwind CSS.

## Run locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit the content

- `src/lib/site.ts` — name, tagline, about text, and links
- `src/lib/project.tsx` — older projects
- `src/lib/experience.ts` — the previous-roles list
- `src/app/layout.tsx` — page title, description, and social metadata

Set `NEXT_PUBLIC_SITE_URL` in production so Open Graph URLs resolve to the live domain.

## Build

```bash
pnpm build
```
