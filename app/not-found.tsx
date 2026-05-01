import Link from "next/link";
import { OrnamentalDivider } from "@/components/ui/ornamental-divider";

export default function NotFound() {
  return (
    <section className="shell py-20">
      <div className="panel mx-auto max-w-3xl p-10 text-center">
        <p className="gold-label">Missing folio</p>
        <h1 className="mt-4 font-display text-4xl tracking-[0.08em] text-parchment">
          This page has slipped from the archive.
        </h1>
        <OrnamentalDivider className="py-8" />
        <p className="mx-auto max-w-2xl text-lg leading-8 text-mist/82">
          The route may be unfinished, renamed, or unavailable in this volume
          of the manuscript.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex border border-gold px-5 py-3 text-xs uppercase tracking-[0.3em] text-parchment transition hover:bg-gold hover:text-ink"
        >
          Return home
        </Link>
      </div>
    </section>
  );
}
