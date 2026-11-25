# Implementation plan
1. Foundation: inspect empty repository and runtime; document scope, route map and data model; establish Next.js/TypeScript/Tailwind; implement responsive editorial homepage and typed representative catalog; add functional demo search/filter/save/preview; validate lint, types, build and browser layouts.
2. Marketplace: real browse routes and query URL state, category/vibe pages, listing detail pages, Supabase auth, customer profile and persisted favorites.
3. Operations: applications and approval, seller/listing CRUD, moderated uploads, availability, request-to-book and concierge quotes, role-gated admin with audit logging.
4. Commerce: Stripe eligibility and Connect onboarding, server-calculated checkout, verified idempotent webhooks, secure delivery, orders, refunds, transactional notifications.
5. Launch: RLS security tests, accessibility/responsive/performance review, SEO, workflow tests and deployment runbook. Replace all demo inventory only after provider verification.
## Acceptance for phase 1
All 13 requested homepage sections; mobile navigation; keyboard-accessible controls; visible demo labels; working catalog filtering and empty states; no live commerce; reproducible setup and clean validation.
