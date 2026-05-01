"use client";

import Link from "next/link";
import { members } from "@/data/members";
import { useMemberAccess } from "@/components/member-access-provider";
import { MemberAvatar } from "@/components/ui/member-avatar";
import { MembersGate } from "@/components/ui/members-gate";
import { MemberToggle } from "@/components/ui/member-toggle";
import { TierBadge } from "@/components/ui/tier-badge";

export function MembersClient() {
  const { isMember, ready } = useMemberAccess();

  return (
    <>
      <section className="shell pb-10">
        <div className="flex flex-col items-end gap-4">
          <MemberToggle />
          <Link
            href="/members/tiers"
            className="text-xs uppercase tracking-[0.28em] text-goldSoft hover:text-parchment"
          >
            Compare tiers
          </Link>
        </div>
      </section>

      <MembersGate />

      {ready && isMember ? (
        <section className="shell pb-16">
          <div className="grid gap-6 md:grid-cols-2">
            {members.map((member) => (
              <Link
                key={member.id}
                href={`/members/${member.id}`}
                className="panel flex items-start gap-5 p-6 transition hover:-translate-y-1"
              >
                <MemberAvatar name={member.name} />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="font-display text-2xl tracking-[0.06em] text-parchment">
                      {member.name}
                    </h2>
                    <TierBadge tier={member.tier} />
                  </div>
                  <p className="mt-2 text-sm uppercase tracking-[0.24em] text-goldSoft">
                    {member.id} / {member.location}
                  </p>
                  <p className="mt-4 text-lg leading-7 text-mist/80">
                    {member.bio}
                  </p>
                  <p className="mt-5 text-sm text-goldSoft">
                    {member.contributionCount} recorded contributions
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
