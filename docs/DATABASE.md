# Planned relational model (not migrated)
UUID primary keys, created_at/updated_at timestamps, foreign keys and explicit status constraints throughout.
- users (Supabase auth) → profiles (one-to-one); vendors and digital_sellers belong to users and require admin approval.
- categories, locations, vibes are public taxonomy; listings reference vendor/category/location; listing_media references listings; listing_vibes join listings/vibes.
- digital_products reference seller/category; product_vibes join products/vibes; product_files store private object keys, never public file URLs.
- availability references listings, indexed by listing and date range; favorites reference user and exactly one listing/product with unique owner/target indexes.
- booking_requests reference customer/listing and requested interval; bookings reference accepted request and verified payment.
- orders reference customer/currency; order_items snapshot product, price, license and quantity.
- concierge_requests reference customer; quotes reference request; quote_items snapshot sourced services and amounts.
- payments record unique provider intent/event IDs; payouts reference seller; reviews require fulfilled transactions; notifications belong to users; reports reference reporting user and moderated entity; append-only audit_logs record actor/action/target.
## Security and invariants
RLS: public reads only approved published inventory; customers read/write their own permitted records; sellers manage only their inventory and scoped orders; admin checks enforced server-side. Never expose payment or private profile details through public views.
Private storage for originals and purchases; public moderated previews only. Short-lived download links require server-verified paid order ownership.
Physical state: requested → availability_confirmed → terms_accepted → payment_pending → confirmed → fulfilled. Only verified payment can confirm.
Digital state: pending → paid → fulfilled; verified provider webhook authorizes delivery. Unique webhook event index and transactional transitions prevent duplicate processing.
Concierge: submitted → reviewing → quoted → approved → payment_pending → paid → coordinating → fulfilled.
Index foreign keys, published catalog filters, seller/status, customer/date and payment provider IDs. Concurrency-safe availability constraints and refund/revocation rules must be settled before implementation.
