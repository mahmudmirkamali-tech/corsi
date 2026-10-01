export const SPLIT = {
  hourly: 5,
  coach: 4,
  kish: 0.5,
  network: 0.5,
} as const;

export type Ledger = {
  hours: number;
  total: number;
  coach: number;
  kish: number;
  network: number;
};

export function splitHours(hours: number): Ledger {
  const safe = Math.max(1, Math.min(40, Math.round(hours) || 1));
  return {
    hours: safe,
    total: safe * SPLIT.hourly,
    coach: safe * SPLIT.coach,
    kish: safe * SPLIT.kish,
    network: safe * SPLIT.network,
  };
}

const FA = "۰۱۲۳۴۵۶۷۸۹";

export function faNum(value: number): string {
  const raw = Number.isInteger(value) ? String(value) : value.toFixed(1).replace(/\.0$/, "");
  return raw.replace(/\d/g, (d) => FA[Number(d)] ?? d).replace(".", "٫");
}
