"use client";

import type { Member } from "@/data/members";
import { MemberAvatar } from "@/components/ui/member-avatar";
import { MembersGate } from "@/components/ui/members-gate";
import { MemberToggle } from "@/components/ui/member-toggle";
import { TierBadge } from "@/components/ui/tier-badge";
import { useMemberAccess } from "@/components/member-access-provider";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

export function MemberProfileClient({ member }: { member: Member }) {
  const { isMember, ready } = useMemberAccess();

  return (
    <div>
      <section className="shell pb-10">
        <div className="flex justify-end pt-4">
          <MemberToggle />
        </div>
      </section>

      {!ready || !isMember ? (
        <MembersGate />
      ) : (
        <section className="shell pb-16">
          <div className="panel p-8 md:p-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div className="flex flex-1 flex-col gap-6 md:flex-row md:items-start">
                <MediaPlaceholder
                  label="Portrait"
                  className="aspect-[4/5] w-full max-w-[220px] shrink-0"
                />
                <div>
                  <div className="flex items-center gap-4">
                    <MemberAvatar name={member.name} />
                    <div>
                      <p className="gold-label">Member profile</p>
                      <h1 className="mt-3 font-display text-4xl tracking-[0.08em] text-parchment">
                        {member.name}
                      </h1>
                    </div>
                  </div>
                  <p className="mt-3 text-sm uppercase tracking-[0.26em] text-goldSoft">
                    {member.id} / {member.location}
                  </p>
                </div>
              </div>
              <TierBadge tier={member.tier} />
            </div>

            <p className="mt-8 max-w-3xl text-xl leading-8 text-mist/86">
              {member.bio}
            </p>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <h2 className="font-display text-2xl tracking-[0.06em] text-parchment">
                  Contributions
                </h2>
                <div className="mt-5 space-y-4">
                  {member.contributions.map((item) => (
                    <div key={item.title} className="border-l border-line pl-4">
                      <p className="text-lg text-parchment">{item.title}</p>
                      <p className="mt-1 text-sm uppercase tracking-[0.24em] text-goldSoft">
                        {item.type} / {item.date}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-2xl tracking-[0.06em] text-parchment">
                    Recognition badges
                  </h2>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {member.badges.map((badge) => (
                      <span
                        key={badge}
                        className="border border-lineBright bg-lineBright/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-gold"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="font-display text-2xl tracking-[0.06em] text-parchment">
                    Initiatives
                  </h2>
                  <div className="mt-5 space-y-3">
                    {member.initiatives.map((initiative) => (
                      <div key={initiative} className="panel p-4">
                        <p className="text-lg text-mist">{initiative}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
