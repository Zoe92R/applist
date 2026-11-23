import {
  ArrowUp,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Circle,
  CircleAlert,
  CircleCheck,
  CircleDashed,
  Columns3,
  ExternalLink,
  ListFilter,
  LoaderCircle,
  Pencil,
  Plus,
  Search,
  Star,
  Trash2,
  X,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/components/ui/cn";

const icons = {
  "plus": Plus,
  "x": X,
  "columns-3": Columns3,
  "chevron-down": ChevronDown,
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  "chevron-up": ChevronUp,
  "arrow-up": ArrowUp,
  "external-link": ExternalLink,
  "star": Star,
  "circle": Circle,
  "circle-check": CircleCheck,
  "circle-dashed": CircleDashed,
  "circle-alert": CircleAlert,
  "check": Check,
  "search": Search,
  "list-filter": ListFilter,
  "pencil": Pencil,
  "trash-2": Trash2,
  "loader-circle": LoaderCircle,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;
export const iconNames = Object.keys(icons) as IconName[];

export type IconSize = "sm" | "md";

const sizes: Record<IconSize, string> = {
  sm: "size-4",
  md: "size-5",
};

type IconRule = {
  style?: string;
  filledStyle?: string;
  color?: string;
  filledColor?: string;
};

const iconRules: Partial<Record<IconName, IconRule>> = {
  "star": { filledColor: "text-star-500" },
  "circle-check": { filledStyle: "[&>path]:stroke-white", color: "text-success-700" },
  "loader-circle": { style: "motion-safe:animate-spin" },
};

export type IconProps = {
  name: IconName;
  size?: IconSize;
  filled?: boolean;
  label?: string;
  className?: string;
};

export function Icon({
  name,
  size = "md",
  filled = false,
  label,
  className = "",
}: IconProps) {
  const Glyph = icons[name];
  const rule = iconRules[name];
  return (
    <Glyph
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
      fill={filled ? "currentColor" : "none"}
      strokeWidth={2}
      className={cn(
        sizes[size],
        "shrink-0",
        "text-neutral-600",
        rule?.style,
        filled && rule?.filledStyle,
        className,
        rule?.color,
        filled && rule?.filledColor,
      )}
    />
  );
}
