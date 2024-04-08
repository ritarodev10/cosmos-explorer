import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateShort(timestamp: number): string {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  return `${day} ${month}, ${formattedHours}:${formattedMinutes} ${ampm}`;
}

export function formatToPercent(value1: number, value2: number): number {
  return Number((((value1 - value2) / value2) * 100).toFixed(2));
}

export function formatCurrency(value: number, decimalPlaces: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(value);
}

export function formatNumber(value: number, decimalPlaces: number): number {
  return Number(value.toFixed(decimalPlaces));
}

export function capitalizePathname(pathname: string) {
  return pathname
    .slice(1)
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function convertToStandardUnit(atomicValue: number) {
  const scaleFactor = 10 ** 12;
  const standardUnitValue = atomicValue / scaleFactor;
  return standardUnitValue.toFixed(2);
}

export function formatNumberWithSpaces(number: number) {
  return number.toLocaleString("fr-FR").replace(/\s/g, " ");
}

export function truncateHash(hash: string) {
  return `${hash.slice(0, 8)}...${hash.slice(-8)}`;
}

export function timeAgo(dateString: string) {
  const now = new Date();
  const past = new Date(dateString);
  const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return `${diffInSeconds}s ago`;
  } else if (diffInSeconds < 3600) {
    return `${Math.floor(diffInSeconds / 60)}min ago`;
  } else if (diffInSeconds < 86400) {
    return `${Math.floor(diffInSeconds / 3600)}h ago`;
  } else {
    return `${Math.floor(diffInSeconds / 86400)}d ago`;
  }
}

export function formatTimestamp(timestamp: string): string {
  const date = new Date(timestamp);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-based in JavaScript
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  return `${day}.${month}.${year}, ${hours}:${minutes}:${seconds}`;
}
