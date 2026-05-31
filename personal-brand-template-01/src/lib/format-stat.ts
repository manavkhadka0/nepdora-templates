import type { StatFormat } from "@/lib/content";

export function formatStatValue(
  value: number,
  suffix: string,
  format: StatFormat = "plain",
): string {
  if (format === "compact" && value >= 1_000_000) {
    const millions = value / 1_000_000;
    const rounded =
      millions >= 10
        ? Math.round(millions).toString()
        : millions % 1 === 0
          ? millions.toString()
          : millions.toFixed(1);
    return `${rounded}M${suffix}`;
  }

  if (format === "compact" && value >= 1_000) {
    const thousands = value / 1_000;
    const rounded =
      thousands % 1 === 0 ? thousands.toString() : thousands.toFixed(1);
    return `${rounded}K${suffix}`;
  }

  return `${value.toLocaleString()}${suffix}`;
}
