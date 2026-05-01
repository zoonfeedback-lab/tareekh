import Image from "next/image";
import logo from "@/assets/logo.jpeg";
import { initials } from "@/lib/utils";

export function MemberAvatar({ name }: { name: string }) {
  return (
    <div className="relative flex h-16 w-16 items-center justify-center">
      <Image
        src={logo}
        alt={`${name} avatar`}
        width={64}
        height={64}
        className="rounded-full object-cover"
      />
      <span className="absolute inset-0 flex items-center justify-center text-xl font-display text-parchment">
        {initials(name)}
      </span>
      <span className="absolute inset-1 border border-line/60 rounded-full" />
    </div>
  );
}
