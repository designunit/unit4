# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Next.js 15 (App Router) portfolio website for Design Unit 4, an architectural design studio. The site is bilingual (Russian/English), uses MDX for content, and outputs a standalone build for containerized deployment. No backend or database — all content is file-based in Git.

## Commands

- `npm run dev` — dev server with Turbo mode
- `npm run build` — production build
- `npm run lint` — ESLint checks
- `npm run format` — ESLint auto-fix

No test suite is configured.

## Code Style (enforced by ESLint)

- 4-space indentation
- Single quotes (with escape avoidance)
- No semicolons
- Unix line breaks (LF)
- Trailing commas in multiline
- File must end with newline
- No `console`, `alert`, `debugger`, `var`
- Use `import type { ... }` for type-only imports (`@typescript-eslint/consistent-type-imports`)
- Explicit function return types (warning level)
- Components cannot import from `src/server` or `pages`

## Architecture

### Routing

```
src/app/
├── layout.tsx            # Root layout (header, footer, Roboto font, metadata, Yandex Metrika)
├── page.tsx              # Homepage (hero, project tables, team, contacts)
├── [slug]/
│   ├── page.tsx          # Dynamic project pages (static generation via generateStaticParams)
│   ├── layout.tsx        # Project page layout wrapper
│   └── mdx.tsx           # MDX-to-React component mappings
├── not-found.tsx
└── sitemap.ts
```

### Content System

Project content lives in `/data/*.mdx` files with the naming convention `{slug}.{locale}.mdx` (e.g., `model4.ru.mdx`, `model4.en.mdx`).

**Data flow:** `data/*.mdx` → `src/api.ts` (getPages, getPageBySlug) → page components → MDX rendering via `next-mdx-remote`

Frontmatter fields: `cover`, `excerpt`, `location`, `year`, `tags[]`

The title is extracted from the first `# Heading` in the MDX body, not from frontmatter. Dates use `dd.MM.yyyy` format.

### MDX Components

Custom components available in MDX content are mapped in `src/app/[slug]/mdx.tsx`: Image (with captions), ImageSet, Carousel, BeforeAfter, UnitHighlight, Embed, Video, OymyakonSankey, etc.

Heavy components (Carousel, OymyakonSankey) use dynamic imports to reduce bundle size.

### Styling

CSS Modules (`.module.css`) for component-scoped styles. CSS custom properties for shared values like `--content-padding`. No CSS-in-JS.

### i18n

Locales: `ru` (default), `en`. Translation files at `src/ru.json` and `src/en.json`. Tags are translated via these locale files.

### Path Alias

`@/*` maps to `./src/*` (configured in tsconfig.json).

### Homepage Data

Project listings on the homepage are hard-coded arrays in the IndexTables component, not dynamically sourced from MDX files.

### Project-Specific Components

Some projects have custom visualization components stored in `src/special/` (e.g., Oymyakon Sankey diagram, Heterotopia custom styling).

## Adding a New Project

1. Create `data/{slug}.ru.mdx` and `data/{slug}.en.mdx` with frontmatter
2. Place images in `/public/images/`
3. Optionally add the project to homepage arrays in the IndexTables component

## Key Config

- `next.config.js`: standalone output, unoptimized images, 40+ legacy redirects, i18n config
- Node 20.x required
