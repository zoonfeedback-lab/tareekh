"use client";

import { useMemberAccess } from "@/components/member-access-provider";

export function MemberToggle() {
  const { isMember, setIsMember, ready } = useMemberAccess();

  if (!ready) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => setIsMember(!isMember)}
      className="border border-line px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-goldSoft transition hover:border-gold hover:text-parchment"
    >
      {isMember ? "Leave member view" : "Preview member view"}
    </button>
  );
}
