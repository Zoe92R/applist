import type { HTMLAttributes } from "react";
import { cn } from "@/components/ui/cn";

export type TitleLevel = "page" | "modal" | "section";

export const titleStyles: Record<TitleLevel, string> = {
  page: "text-2xl font-medium text-neutral-900",
  modal: "text-lg font-medium text-neutral-900",
  section: "text-base font-medium text-neutral-900",
};

const tags = { page: "h1", modal: "h2", section: "h2" } as const;

export type TitleProps = HTMLAttributes<HTMLHeadingElement> & {
  level: TitleLevel;
};

export function Title({ level, className, ...props }: TitleProps) {
  const TitleTag = tags[level];
  return <TitleTag className={cn(titleStyles[level], className)} {...props} />;
}
