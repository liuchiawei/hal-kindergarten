# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 project for ハル幼稚園 (Hal Kindergarten), a kindergarten website built with:
- **Next.js 15.5.6** with App Router and Turbopack
- **React 19.1.0**
- **TypeScript** with strict mode enabled
- **Tailwind CSS v4** for styling
- **shadcn/ui** components (New York style variant)
- **Motion** (v12) for animations
- **pnpm** as the package manager

The site uses Japanese language (lang="ja") and is deployed on Vercel.

## Development Commands

```bash
# Start development server with Turbopack
pnpm dev

# Build for production with Turbopack
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint
```

## Project Structure

- **App Router**: Pages are in [src/app/](src/app/)
  - [src/app/layout.tsx](src/app/layout.tsx) - Root layout with Geist fonts
  - [src/app/page.tsx](src/app/page.tsx) - Homepage
  - [src/app/globals.css](src/app/globals.css) - Global Tailwind styles

- **Components**: shadcn/ui components in [src/components/ui/](src/components/ui/)
  - Includes: button, sheet, input, separator, tooltip, skeleton, sidebar
  - All styled with Tailwind CSS variables and CVA

- **Utilities**: [src/lib/utils.ts](src/lib/utils.ts) - cn() helper for className merging

- **Hooks**: Custom hooks in [src/hooks/](src/hooks/)
  - [src/hooks/use-mobile.ts](src/hooks/use-mobile.ts) - Mobile detection hook

## Import Aliases

```typescript
"@/*" → "./src/*"           // Configured in tsconfig.json
"@/components" → components // shadcn alias
"@/ui" → components/ui      // shadcn alias
"@/lib" → lib               // shadcn alias
"@/hooks" → hooks           // shadcn alias
```

## shadcn/ui Configuration

- **Style**: new-york
- **Base color**: neutral
- **Icon library**: lucide-react
- **RSC**: Enabled (React Server Components)
- **CSS Variables**: Enabled

Add new components using: `pnpm dlx shadcn@latest add [component-name]`

## Key Technologies

- **Turbopack**: Used for both dev and build (--turbopack flag)
- **Tailwind CSS v4**: Uses @tailwindcss/postcss and modern config
- **Motion**: Modern animation library (replaces framer-motion)
- **Geist Font**: Auto-optimized via next/font/google
