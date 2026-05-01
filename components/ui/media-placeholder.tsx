import { cn } from "@/lib/utils";

type MediaPlaceholderProps = {
  label: string;
  className?: string;
  innerClassName?: string;
};

function buildPlaceholderSrc(label: string) {
  const text = encodeURIComponent(label.replace(/\s+/g, " ").trim());
  return `https://placehold.co/1200x800/171411/cab58e?text=${text}`;
}

export function MediaPlaceholder({
  label,
  className,
  innerClassName
}: MediaPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border border-line/60 bg-panelStrong/80",
        className
      )}
    >
      <img
        src={buildPlaceholderSrc(label)}
        alt={label}
        className="absolute inset-0 h-full w-full object-cover grayscale brightness-[0.48] contrast-125 sepia-[0.18]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,194,154,0.16),transparent_34%),linear-gradient(to_top,rgba(5,5,5,0.9),rgba(5,5,5,0.12)_55%,rgba(5,5,5,0.72)),linear-gradient(135deg,rgba(215,194,154,0.08),transparent_55%)]" />
      <div className="absolute inset-0 bg-manuscript-grid bg-[size:24px_24px] opacity-[0.05]" />
      <div
        className={cn(
          "absolute inset-3 border border-lineBright/25",
          innerClassName
        )}
      />
      <div className="relative flex h-full items-end p-4">
        <div className="border border-lineBright/40 bg-ink/78 px-3 py-2 backdrop-blur-sm">
          <p className="text-[11px] uppercase tracking-[0.3em] text-goldSoft">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}
