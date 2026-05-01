export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function getTierTone(tier: string) {
  switch (tier) {
    case "Scholar":
      return "border-gold bg-gold/10 text-parchment";
    case "Contributor":
      return "border-lineBright bg-lineBright/10 text-gold";
    default:
      return "border-line bg-panelStrong/70 text-mist";
  }
}
