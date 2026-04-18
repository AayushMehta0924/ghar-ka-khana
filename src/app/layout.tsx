import type { Metadata } from "next";
import { Inter, Fraunces, Caveat } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileOrderCta } from "@/components/mobile-order-cta";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "opsz"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Homemade Indian Tiffin Service in Tempe`,
    template: `%s · ${site.name}`,
  },
  description:
    "Fresh, homemade desi tiffins delivered daily in Tempe, AZ. $8/day, free delivery within 10 miles. Menu rotates every day.",
  openGraph: {
    title: `${site.name} — Homemade Indian Tiffin in Tempe`,
    description:
      "Fresh, homemade desi tiffins delivered daily. $8/day. Free delivery in Tempe.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream-50 text-ink">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <MobileOrderCta />
      </body>
    </html>
  );
}
