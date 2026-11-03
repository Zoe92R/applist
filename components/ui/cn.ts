import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Joins class names and resolves Tailwind conflicts, so a className passed
// to a component overrides its defaults (cn("h-9 px-3", "h-10") → "px-3 h-10").
// Pass the consumer's className last.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
