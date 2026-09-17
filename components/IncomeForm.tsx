import { useState } from "react";
import { Transaction } from "../types/finance";

interface Props {
  onAdd: (t: Transaction) => void;
}

export default function IncomeForm({ onAdd }: Props) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const value = Number(amount);
    const trimmedCategory = category.trim();
    if (!Number.isFinite(value) || value <= 0 || !trimmedCategory) return;

    onAdd({
      id: crypto.randomUUID(),
      type: "income",
      amount: value,
      category: trimmedCategory,
      date: new Date().toISOString(),
    });

    setAmount("");
    setCategory("");
  }

  return (
    <form onSubmit={submit}>
      <h3>Add Income</h3>
      <input
        placeholder="Amount"
        type="number"
        min="0.01"
        step="0.01"
        required
        aria-label="Income amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        placeholder="Category"
        required
        aria-label="Income category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}