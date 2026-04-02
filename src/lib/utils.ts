import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

export function normalizePhone(phone: string): string {
  return phone.replace(/[\s().-]/g, "");
}
