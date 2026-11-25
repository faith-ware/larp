# LARP
Access is the flex.

## Current state
Phase 1, increment 1: Next.js App Router foundation with a responsive development-preview page. This is not the complete homepage or a functioning marketplace. No live inventory, authentication, payments or external services are enabled.

## Local development
Use Node.js 24 LTS and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. No environment credentials are required for this increment. `.env.example` lists planned integration variables; never commit populated secrets.

## Verification
```sh
npm run lint
npm run typecheck
npm run build
```

The static preview has no domain workflows requiring unit tests yet. Verify the rendered page at runtime as well as the production build. Add meaningful automated tests when interactive catalog behavior is introduced.

## Project map
- `src/app`: route, root layout, brand tokens and base styles.
- `docs/PRODUCT.md`: scope and unresolved decisions.
- `docs/ARCHITECTURE.md`: technical boundaries and planned routes.
- `docs/DATABASE.md`: proposed schema and security invariants, not migrations.
- `docs/ROADMAP.md`: phased implementation plan.
- `docs/CHANGELOG.md`: completed increments and checks.

Next increment: complete homepage navigation, editorial sections and clearly labeled demo catalog. Future integrations: Supabase, Stripe/Connect, Resend and PostHog, deployed through Vercel after launch review.
