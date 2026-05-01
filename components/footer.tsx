import Link from "next/link";
import { CrescentMark } from "@/components/ui/crescent-mark";

export function Footer() {
  return (
    <footer className="border-t border-line/50 bg-panel/60">
      <div className="shell flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <CrescentMark size={40} />
          <div>
            <p className="font-display text-lg tracking-[0.16em] text-parchment">
              Tareekh
            </p>
            <p className="text-xs tracking-[0.18em] text-goldSoft">
              تاریخ | Living manuscript
            </p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-5 text-xs uppercase tracking-[0.28em] text-goldSoft">
          <Link href="/">Home</Link>
          <Link href="/manifesto">Manifesto</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/members">Members</Link>
          <Link href="/join">Join</Link>
        </nav>
      </div>
    </footer>
  );
}
