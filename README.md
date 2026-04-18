# Ghar Ka Khana

Homemade Indian tiffin service in Tempe, AZ — website.

Fresh, home-cooked desi food delivered daily. $8/day, free delivery within 10 miles. Menu rotates every day. Payments via Zelle or Venmo (never on-site).

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com) (CSS-based theme via `@theme`)
- [lucide-react](https://lucide.dev) icons
- Google Fonts: Fraunces (serif), Inter (sans), Caveat (script)
- Deploys to Vercel

## Local dev

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Project structure

```
src/
  app/                 # App Router pages
    page.tsx           # Home
    menu/              # Our menu
    about/             # About the chef
    testimonials/      # Customer stories
    order/             # Native order form → Google Form
    contact/           # Contact + payment details
    layout.tsx         # Shared shell
    globals.css        # Tailwind + brand theme
  components/          # UI components (header, footer, cards, forms)
  content/             # Static content (dishes, testimonials, chef)
  lib/site.ts          # Site-wide config (phone, WhatsApp, pricing, Google Form URL)
public/
  favicon.svg
```

## Order form → Google Form

[`src/components/order-form.tsx`](src/components/order-form.tsx) submits to the existing Google Form via `POST` into a hidden `<iframe>` (no backend, no CORS).

**To wire up real field IDs:** in Google Forms, click the kebab menu → *Get pre-filled link* → fill one of every field → *Get link*. The `entry.XXXXXX` values in the resulting URL are the real IDs — paste them into `FIELD_IDS` at the top of `order-form.tsx`.

## TODO before launch

- [ ] Replace chef bio placeholder in `src/content/chef.ts`
- [ ] Replace 3 fake testimonials in `src/content/testimonials.ts`
- [ ] Swap dish emojis for real food photos (add to `public/menu/` and wire up `<DishCard>`)
- [ ] Supply real Google Form `entry.*` IDs in `order-form.tsx`
- [ ] Confirm Gmail, Venmo handle, and Zelle number in `src/lib/site.ts`
- [ ] Add `public/qr/whatsapp.png` and `public/qr/zelle.png`

## Deploy

Connected to Vercel — auto-deploys on push to `main`.
