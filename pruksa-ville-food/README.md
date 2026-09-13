# Pruksa Ville Food

Village food-ordering web application.

## Included
- Customer and merchant sign-up with Village Admin approval
- In-app registration notifications
- Village Admin approval screen
- Merchant shop setup, QR upload, and food-photo upload
- Customer menu, cart, and order creation
- Supabase Auth, Database, and Storage integration

## Deployment
The active site is deployed through ChatGPT Sites. The application source is in `index.html`.

## Supabase resources
- Tables: profiles, shops, menu_items, orders, order_items, payment_slips, messages, notifications
- Buckets: shop-qr, payment-slips, food-images
- The `food-images` bucket accepts JPG, PNG, and WEBP up to 5 MB.

## Initial Village Admin
After a user signs up, set that profile's `role` to `admin` and `approval_status` to `approved` in the Supabase SQL editor. This is intentionally a one-time trusted setup step; users cannot grant themselves admin access.
