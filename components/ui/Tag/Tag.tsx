"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/components/ui/cn";
import { Tooltip } from "@/components/ui/Tooltip/Tooltip";

export type TagSize = "default" | "small";

const pill =
  "inline-flex items-center rounded-md bg-white px-1.5 text-xs font-medium whitespace-nowrap text-neutral-700 border border-neutral-300";
const pillSizes: Record<TagSize, string> = { default: "h-5.5", small: "h-5" };

const overflow =
  "inline-flex items-center rounded-md bg-neutral-100 px-1.5 text-xs font-medium whitespace-nowrap text-neutral-600";

export type TagProps = {
  children: string;
  size?: TagSize;
  className?: string;
};

export function Tag({ children, size = "default", className = "" }: TagProps) {
  return <span className={cn(pill, pillSizes[size], className)}>{children}</span>;
}

export function TagOverflow({
  tags,
  size = "default",
  className = "",
}: {
  tags: string[];
  size?: TagSize;
  className?: string;
}) {
  const list = tags.join(", ");
  return (
    <Tooltip content={list} className="max-w-64 whitespace-normal">
      <span className={cn(overflow, pillSizes[size], className)}>
        <span aria-hidden>+{tags.length}</span>
        <span className="sr-only">
          {tags.length} more: {list}
        </span>
      </span>
    </Tooltip>
  );
}

type TagListProps = {
  tags: string[];
  max?: number;
  size?: TagSize;
  wrap?: boolean;
};

export function TagList({ tags, max, size = "default", wrap = false }: TagListProps) {
  if (max === undefined && !wrap) return <FittedTagList tags={tags} size={size} />;
  return (
    <div className={cn("flex items-center gap-2", wrap && "flex-wrap")}>
      <TagRow tags={tags} shown={max ?? tags.length} size={size} />
    </div>
  );
}

function FittedTagList({ tags, size }: { tags: string[]; size: TagSize }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(tags.length);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const measure = measureRef.current;
    if (!container || !measure) return;

    const update = () => {
      const items = Array.from(measure.children as HTMLCollectionOf<HTMLElement>);
      const chip = items.pop()!;
      const last = items[items.length - 1];
      setShown(
        countFitting({
          starts: items.map((el) => el.offsetLeft),
          end: last ? last.offsetLeft + last.offsetWidth : 0,
          chipWidth: chip.offsetWidth,
          width: container.clientWidth,
        }),
      );
    };

    const observer = new ResizeObserver(update);
    observer.observe(container);
    observer.observe(measure);
    return () => observer.disconnect();
  }, [tags, size]);

  return (
    <div ref={containerRef} className="relative flex w-full min-w-0 items-center gap-2 overflow-hidden">
      <TagRow tags={tags} shown={shown} size={size} />
      <div ref={measureRef} aria-hidden className="invisible absolute top-0 left-0 flex gap-2">
        <TagRow tags={tags} shown={tags.length} size={size} />
        <TagOverflow tags={tags} size={size} />
      </div>
    </div>
  );
}

function countFitting({
  starts,
  end,
  chipWidth,
  width,
}: {
  starts: number[];
  end: number;
  chipWidth: number;
  width: number;
}) {
  const total = starts.length;
  const fits = (n: number) => (n === total ? end : starts[n] + chipWidth) <= width;
  let n = total;
  while (n > 0 && !fits(n)) n--;
  return n;
}

function TagRow({ tags, shown, size }: { tags: string[]; shown: number; size: TagSize }) {
  const hidden = tags.slice(shown);
  return (
    <>
      {tags.slice(0, shown).map((t) => (
        <Tag key={t} size={size}>
          {t}
        </Tag>
      ))}
      {hidden.length > 0 && <TagOverflow tags={hidden} size={size} />}
    </>
  );
}
