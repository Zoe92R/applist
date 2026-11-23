import { Icon } from "@/components/ui/Icon/Icon";

export type AvatarSize = "default" | "small";

const sizes: Record<AvatarSize, string> = {
  default: "size-9 text-sm",
  small: "size-7 text-xs",
};

const firstLetter = (word: string) => word.match(/\p{L}/u)?.[0] ?? "";

/** Initials from the name, else the first letter of the email, else "" (Avatar then shows a user icon). */
export function getInitials(name?: string | null, email?: string | null): string {
  const words = (name ?? "").trim().split(/\s+/).filter((w) => firstLetter(w));
  if (words.length > 0) {
    const first = firstLetter(words[0]);
    const last = words.length > 1 ? firstLetter(words[words.length - 1]) : "";
    return (first + last).toLocaleUpperCase();
  }
  return firstLetter(email ?? "").toLocaleUpperCase();
}

export type AvatarProps = {
  name?: string | null;
  email?: string | null;
  size?: AvatarSize;
};

/**
 * Always hidden from screen readers: the person's name is shown next to the avatar,
 * or carried by the label of the button or link around it.
 * Inside a `group` button or link, the fill darkens on hover and while it's expanded.
 */
export function Avatar({ name, email, size = "default" }: AvatarProps) {
  const initials = getInitials(name, email);

  return (
    <span
      aria-hidden
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-primary-50 font-medium text-primary-600 transition-colors group-hover:bg-primary-100 group-aria-expanded:bg-primary-100 ${sizes[size]}`}
    >
      {initials || <Icon name="user" size="sm" className="text-primary-600" />}
    </span>
  );
}
