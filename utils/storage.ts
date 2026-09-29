import { Transaction } from "../types/finance";

const STORAGE_KEY = "month-manager-data";

function isTransaction(value: unknown): value is Transaction {
  if (!value || typeof value !== "object") return false;
  const transaction = value as Transaction;
  return (
    typeof transaction.id === "string" &&
    (transaction.type === "income" || transaction.type === "expense") &&
    typeof transaction.amount === "number" &&
    Number.isFinite(transaction.amount) &&
    transaction.amount > 0 &&
    typeof transaction.category === "string" &&
    typeof transaction.date === "string"
  );
}

export function loadTransactions(
  month: number,
  year: number
): Transaction[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];

  try {
    const data = JSON.parse(raw);
    const list = data[`${year}-${month}`];
    // Stored data can be hand-edited or written by an older app version;
    // drop malformed entries instead of rendering them.
    return Array.isArray(list) ? list.filter(isTransaction) : [];
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
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    // Storage can be unavailable (private browsing) or full (quota exceeded);
    // neither should crash the app.
    console.error("Unable to save transactions.", error);
  }
}
