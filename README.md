# NexaPlay

NexaPlay is a production-ready Next.js 15 foundation for a premium gaming platform. This initial version focuses on architecture, layout, tooling, and deployment readiness only; the game store experience is intentionally not implemented yet.

## Tech Stack

- Next.js 15 with App Router
- React 19
- TypeScript
- Tailwind CSS
- ESLint
- Vercel-ready configuration

## Project Structure

```txt
src/
  app/                  App Router entry points, metadata, and global styles
  components/
    layout/             Reusable Header, Sidebar, Footer, and AppShell
    ui/                 Shared presentation components
  config/               Navigation and future app configuration
  lib/                  Shared utilities
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Deployment

The project is configured for Vercel defaults. Import the GitHub repository into Vercel and use the standard Next.js framework preset. No custom build command is required beyond `npm run build`.
