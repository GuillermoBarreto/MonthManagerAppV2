import { Transaction } from "../types/finance";

const STORAGE_KEY = "month-manager-data";

export function loadTransactions(
  month: number,
  year: number
): Transaction[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];

  try {
    const data = JSON.parse(raw);
    return data[`${year}-${month}`] || [];
  } catch {
    // Corrupted storage data should not crash the app; start fresh.
    return [];
  }
}

export function saveTransactions(
  month: number,
  year: number,
  transactions: Transaction[]
) {
  const raw = localStorage.getItem(STORAGE_KEY);
  let data: Record<string, Transaction[]> = {};
  try {
    if (raw) data = JSON.parse(raw);
  } catch {
    // Corrupted storage data is replaced with a fresh store.
    data = {};
  }

  data[`${year}-${month}`] = transactions;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
