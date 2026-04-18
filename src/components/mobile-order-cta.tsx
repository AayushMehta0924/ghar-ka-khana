"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileOrderCta() {
  const pathname = usePathname();
  if (pathname === "/order") return null;
  return (
    <div className="md:hidden fixed bottom-3 inset-x-3 z-30">
      <Link
        href="/order"
        className="flex items-center justify-center rounded-full bg-saffron px-6 py-4 text-base font-semibold text-white shadow-lg shadow-saffron/30"
      >
        Order a tiffin
      </Link>
    </div>
  );
}
