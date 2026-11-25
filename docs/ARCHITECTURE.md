# Architecture
## Foundation
Next.js App Router + React + TypeScript, Tailwind CSS and semantic CSS tokens. Server-rendered page shell with a client marketplace component for demo filtering, saved items and accessible dialogs. Typed catalog isolated in src/lib/catalog.ts. No external credentials required.
## Route map
Implemented: / (homepage with search, collection and category discovery).
Phase 2: /explore, /experiences/[slug], /digital/[slug], /vibes/[slug], /auth/sign-in, /account.
Phase 3: /concierge, /sell, /vendor, /seller, /admin with server-authorized roles.
Phase 4: /checkout, /account/orders/[id], server webhook and authorized download endpoints.
## Integration boundaries
Supabase Auth + PostgreSQL + Storage, Stripe/Connect, Resend, PostHog and Vercel are planned, not initialized. Future server services own authorization and state changes. Never trust browser roles, prices or payment status.
Store currency codes and integer minor units, UTC timestamps and localized presentation. Avoid coupling catalog types to one provider.
