"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { CrescentMark } from "@/components/ui/crescent-mark";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/manifesto", label: "Manifesto" },
  { href: "/blog", label: "Blog" },
  { href: "/members", label: "Members" },
  { href: "/join", label: "Join" }
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-ink/80 backdrop-blur-xl">
      <div className="shell flex items-center justify-between gap-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-parchment">
          <CrescentMark size={40} />
          <div>
            <p className="font-display text-lg tracking-[0.18em]">Tareekh</p>
            <p className="text-sm tracking-[0.18em] text-goldSoft">تاریخ</p>
          </div>
        </Link>

        <button
          type="button"
          className="inline-flex border border-line px-3 py-2 text-xs uppercase tracking-[0.28em] text-gold md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === item.href
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "border-b pb-1 text-xs uppercase tracking-[0.3em] transition-colors",
                  active
                    ? "border-gold text-parchment"
                    : "border-transparent text-goldSoft hover:text-parchment"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {open ? (
        <div className="border-t border-line/60 bg-panel/95 md:hidden">
          <div className="shell flex flex-col gap-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.24em] text-goldSoft"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
