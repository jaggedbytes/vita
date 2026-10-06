This is a [Next.js](https://nextjs.org/) project with [Sanity.io](https://www.sanity.io/) for content.

## Prerequisites

- Node.js 24.x
- [pnpm](https://pnpm.io/) 10.x (`corepack enable` recommended)

## Setup

```bash
pnpm install
cp .env.example .env
```

Fill in `.env` with your Sanity project values (and optional Google Analytics id). See `.env.example` for the required keys.

## Development

Start the Next.js app:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Edit `pages/index.tsx` and related components; the page hot-reloads as you save.

Start Sanity Studio in another terminal:

```bash
pnpm studio
```

Open [http://localhost:3333](http://localhost:3333). Schema lives under `sanity/`.

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Next.js development server |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | ESLint via `next lint` |
| `pnpm studio` | Sanity Studio development server |

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)

## Deploy on Vercel

The easiest way to deploy is the [Vercel Platform](https://vercel.com/new). Set the same environment variables from `.env.example` in the Vercel project settings.
