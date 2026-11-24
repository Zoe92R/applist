import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/components/ui/cn";
import { Icon, type IconName } from "@/components/ui/Icon/Icon";

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "link" | "icon";
export type ButtonSize = "default" | "small";

export const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-primary-600 text-white shadow-xs",
  secondary: "bg-primary-50 text-primary-600 aria-expanded:bg-primary-100",
  tertiary: "text-neutral-700",
  link: "gap-1 rounded-sm text-sm font-medium text-primary-600 underline-offset-2",
  icon: "size-9 rounded-lg text-neutral-500",
};

const hoverVariants: Record<ButtonVariant, string> = {
  primary: "enabled:hover:bg-primary-700",
  secondary: "enabled:hover:bg-primary-100",
  tertiary: "enabled:hover:bg-neutral-100 enabled:hover:text-neutral-900",
  link: "enabled:hover:text-primary-700 enabled:hover:underline",
  icon: "enabled:hover:bg-neutral-100 enabled:hover:text-neutral-700",
};

export const buttonSizes: Record<ButtonSize, string> = {
  default: "h-9 px-3",
  small: "relative h-8 px-2.5 after:absolute after:inset-x-0 after:-inset-y-1.5",
};

const leadingIconPadding: Record<ButtonSize, string> = { default: "pl-2.5", small: "pl-2" };

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: IconName;
  children?: ReactNode;
};

const base =
  "inline-flex cursor-pointer items-center justify-center transition-colors duration-75 disabled:cursor-default disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600";

const box = "gap-2 rounded-lg text-sm font-medium";
const boxedVariants: Record<ButtonVariant, boolean> = {
  primary: true,
  secondary: true,
  tertiary: true,
  link: false,
  icon: false,
};

export function Button({
  variant = "primary",
  size = "default",
  loading = false,
  icon,
  className = "",
  type = "button",
  onClick,
  children,
  ...props
}: ButtonProps) {
  const boxed = boxedVariants[variant];
  const hasLeadingIcon = loading || !!icon;
  const minWidth = variant === "primary" && size === "default" ? "min-w-24" : "";

  return (
    <button
      type={type}
      aria-busy={loading || undefined}
      aria-disabled={loading || undefined}
      onClick={(event) => {
        if (loading) {
          event.preventDefault();
          return;
        }
        onClick?.(event);
      }}
      className={cn(
        base,
        boxed && [box, buttonSizes[size], hasLeadingIcon && leadingIconPadding[size]],
        buttonVariants[variant],
        loading ? "cursor-default" : hoverVariants[variant],
        minWidth,
        className,
      )}
      {...props}
    >
      {hasLeadingIcon && (
        <Icon name={loading ? "loader-circle" : icon!} size="sm" className="text-current" />
      )}
      {children}
    </button>
  );
}
