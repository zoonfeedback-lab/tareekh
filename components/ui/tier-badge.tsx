import { cn, getTierTone } from "@/lib/utils";

export function TierBadge({ tier }: { tier: string }) {
  return (
    <span
      className={cn(
        "inline-flex border px-3 py-1 text-[11px] uppercase tracking-[0.28em]",
        getTierTone(tier)
      )}
    >
      {tier}
    </span>
  );
}
