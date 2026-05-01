import { cn } from "@/lib/utils";

type CrescentMarkProps = {
  size?: number;
  className?: string;
};

export function CrescentMark({
  size = 40,
  className
}: CrescentMarkProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={cn("shrink-0", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="50"
        cy="50"
        r="34"
        fill="transparent"
        stroke="#c8b99a"
        strokeOpacity="0.45"
        strokeWidth="2"
      />
      <circle cx="44" cy="50" r="19" fill="#c8b99a" />
      <circle cx="53" cy="42" r="16" fill="#0a0a0a" />
    </svg>
  );
}
