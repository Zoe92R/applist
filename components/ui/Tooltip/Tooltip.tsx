"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import type { ReactElement, ReactNode } from "react";
import { cn } from "@/components/ui/cn";

export type TooltipProps = {
  content: ReactNode;
  children: ReactElement;
  side?: "top" | "bottom";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
};

export function Tooltip({
  content,
  children,
  side = "top",
  open,
  onOpenChange,
  className,
}: TooltipProps) {
  return (
    <TooltipPrimitive.Provider delayDuration={300}>
      <TooltipPrimitive.Root open={open} onOpenChange={onOpenChange}>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={side}
            sideOffset={8}
            collisionPadding={8}
            className={cn(
              "pointer-events-none z-50 rounded-md bg-neutral-700 px-2 py-1 text-xs font-medium whitespace-nowrap text-white shadow-sm",
              "origin-(--radix-tooltip-content-transform-origin) motion-safe:animate-tooltip-in motion-safe:data-[state=closed]:animate-tooltip-out",
              className,
            )}
          >
            {content}
            <TooltipPrimitive.Arrow width={10} height={5} className="fill-neutral-700" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
