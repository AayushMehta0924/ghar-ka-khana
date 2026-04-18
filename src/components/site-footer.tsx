import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { site, whatsappHref, navLinks } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-cream-200 bg-cream-100">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-script text-2xl text-saffron-700">Ghar Ka</p>
          <p className="font-serif text-2xl font-semibold">Khana</p>
          <p className="mt-3 text-sm text-ink-soft max-w-sm">
            Fresh, homemade Indian tiffins delivered daily in Tempe, AZ. Run by
            one person, cooked with love.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-ink-soft/70 mb-3">
            Explore
          </p>
          <ul className="space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-saffron">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/order" className="hover:text-saffron">
                Order
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-ink-soft/70 mb-3">
            Reach us
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-saffron"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.phoneRaw}`}
                className="inline-flex items-center gap-2 hover:text-saffron"
              >
                <Phone className="h-4 w-4" /> {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 hover:text-saffron"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
            </li>
            <li className="inline-flex items-center gap-2 text-ink-soft">
              <MapPin className="h-4 w-4" /> {site.serviceArea}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream-200">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-ink-soft/70 md:px-6">
          © {new Date().getFullYear()} {site.name}. All dishes cooked fresh in a
          home kitchen in Tempe, AZ.
        </p>
      </div>
    </footer>
  );
}
