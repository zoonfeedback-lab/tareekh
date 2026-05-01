"use client";

import Link from "next/link";
import { useMemberAccess } from "@/components/member-access-provider";

export function MembersGate() {
  const { isMember, setIsMember, ready } = useMemberAccess();

  if (!ready || isMember) {
    return null;
  }

  return (
    <section className="shell pb-16">
      <div className="panel mx-auto max-w-4xl p-8 md:p-10">
        <p className="gold-label">Members only</p>
        <h2 className="mt-4 font-display text-3xl tracking-[0.08em] text-parchment">
          The reading circle is presently closed.
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-mist/85">
          This directory is reserved for accepted members. You can preview the
          ethos of the circle, submit an application, or enter through a mock
          access state for the frontend demo.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => setIsMember(true)}
            className="border border-gold px-5 py-3 text-xs uppercase tracking-[0.3em] text-parchment transition hover:bg-gold hover:text-ink"
          >
            Enter as member
          </button>
          <Link
            href="/join"
            className="border border-lineBright px-5 py-3 text-xs uppercase tracking-[0.3em] text-goldSoft transition hover:border-gold hover:text-parchment"
          >
            Apply to join
          </Link>
        </div>
      </div>
    </section>
  );
}
