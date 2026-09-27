import { Transaction } from "../types/finance";

interface Props {
  transactions?: Transaction[];
}

export default function Summary({ transactions = [] }: Props) {
  const income = transactions
    .filter(t => t.type === "income")
    .reduce((s, t) => s + t.amount, 0);

  const expenses = transactions
    .filter(t => t.type === "expense")
    .reduce((s, t) => s + t.amount, 0);

  const balance = income - expenses;

  // toFixed(2) keeps floating-point sums like 0.1 + 0.2 from showing as 0.30000000000000004.
  return (
    <div>
      <h2>Summary</h2>
      <p>Total Income: ${income.toFixed(2)}</p>
      <p>Total Expenses: ${expenses.toFixed(2)}</p>
      <p>Balance: ${balance.toFixed(2)}</p>
    </div>
  );
}
