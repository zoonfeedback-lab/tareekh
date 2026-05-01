import { initials } from "@/lib/utils";

export function MemberAvatar({ name }: { name: string }) {
  return (
    <div className="relative flex h-16 w-16 items-center justify-center border border-gold/40 bg-gradient-to-br from-gold/20 to-panel text-xl font-display text-parchment shadow-lantern">
      <span>{initials(name)}</span>
      <span className="absolute inset-1 border border-line/60" />
    </div>
  );
}
