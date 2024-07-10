import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | undefined): string {
  if (!date) return "Unknown";
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatCreatedAt(timestamp: string | Date): string {
  const now = new Date();
  const created = new Date(timestamp);
  const diff = Math.floor((now.getTime() - created.getTime()) / 1000); // difference in seconds

  let timeAgo;
  if (diff < 60) {
    timeAgo = `${diff}s`;
  } else if (diff < 3600) {
    timeAgo = `${Math.floor(diff / 60)}m`;
  } else if (diff < 86400) {
    timeAgo = `${Math.floor(diff / 3600)}h`;
  } else if (diff < 2592000) {
    timeAgo = `${Math.floor(diff / 86400)}d`;
  } else if (diff < 31536000) {
    timeAgo = `${Math.floor(diff / 2592000)}mo`;
  } else {
    timeAgo = `${Math.floor(diff / 31536000)}y`;
  }
  return timeAgo;
}
