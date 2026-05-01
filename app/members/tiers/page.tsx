import { tiers } from "@/data/tiers";
import { PageHero } from "@/components/ui/page-hero";
import { TierBadge } from "@/components/ui/tier-badge";

export default function MemberTiersPage() {
  return (
    <div>
      <PageHero
        eyebrow="Membership paths"
        title="Tiers of the Circle"
        subtitle="Three modes of belonging for those who observe carefully, contribute responsibly, and steward inheritance with maturity."
      />

      <section className="shell pb-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className="panel flex h-full flex-col p-8">
              <div className="flex items-center justify-between gap-4">
                <TierBadge tier={tier.name} />
                <span className="text-xs uppercase tracking-[0.28em] text-goldSoft">
                  {tier.priceNote}
                </span>
              </div>
              <h2 className="mt-6 font-display text-3xl tracking-[0.08em] text-parchment">
                {tier.name}
              </h2>
              <p className="mt-4 text-lg leading-7 text-mist/82">
                {tier.subtitle}
              </p>
              <p className="mt-5 text-sm uppercase tracking-[0.26em] text-goldSoft">
                {tier.emphasis}
              </p>
              <div className="mt-8 space-y-3">
                {tier.perks.map((perk) => (
                  <div key={perk} className="border-l border-line pl-4 text-lg text-mist/86">
                    {perk}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
