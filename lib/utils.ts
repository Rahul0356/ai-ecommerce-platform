import { clsx, type ClassValue } from "clsx"
import { Currency } from "lucide-react"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formal a price amount with currency symbol
 * @param amount - The price amount to format
 * @param currency - The currency symbol to use
 * @returns The formatted price string
 */
export function formatPrice(
  amount: number | null | undefined,
 currency = "£"
) : string {
  return `${currency}${(amount ?? 0).toFixed(2)}`;
}
