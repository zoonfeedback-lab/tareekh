import Image from "next/image";
import logo from "@/assets/logo.jpeg";
import { cn } from "@/lib/utils";

type CrescentMarkProps = {
  size?: number;
  className?: string;
};

export function CrescentMark({ size = 40, className }: CrescentMarkProps) {
  return (
    <div
      style={{ width: size, height: size }}
      className={cn("shrink-0 overflow-hidden rounded-full", className)}
    >
      <Image
        src={logo}
        alt="Tareekh logo"
        width={size}
        height={size}
        className="object-cover"
      />
    </div>
  );
}
