import Image from "next/image";
import logoMark from "@/app/icon.svg";
import { cn } from "@/components/ui/cn";

export type LogoSize = "sm" | "md";

const markSizes: Record<LogoSize, string> = {
  sm: "size-9", // 36px
  md: "size-10", // 40px
};

export function Logo({ size = "md", className = "" }: { size?: LogoSize; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-display text-xl font-extrabold tracking-tight text-primary-600",
        className,
      )}
    >
      <Image src={logoMark} alt="" className={cn(markSizes[size], "shrink-0")} />
      <span>Applyst</span>
    </span>
  );
}
