import { cn } from "@/lib/utils";

export function OrnamentalDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-4", className)}>
      <span className="h-px w-24 bg-ornament-fade" />
      <span className="relative h-5 w-5 rotate-45 border border-lineBright/70">
        <span className="absolute inset-[26%] -rotate-45 rounded-full border border-gold/60" />
      </span>
      <span className="h-px w-24 bg-ornament-fade" />
    </div>
  );
}
