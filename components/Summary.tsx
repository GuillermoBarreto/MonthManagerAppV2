import { Transaction } from "../types/finance";

interface Props {
  transactions?: Transaction[];
}

// Intl.NumberFormat handles grouping, rounding, and the currency symbol;
// toFixed(2) alone can't do any of that.
const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function Summary({ transactions = [] }: Props) {
  const income = transactions
    .filter(t => t.type === "income")
    .reduce((s, t) => s + t.amount, 0);

  const expenses = transactions
    .filter(t => t.type === "expense")
    .reduce((s, t) => s + t.amount, 0);

  const balance = income - expenses;

  return (
    <div>
      <h2>Summary</h2>
      <p>Total Income: {usd.format(income)}</p>
      <p>Total Expenses: {usd.format(expenses)}</p>
      <p>Balance: {usd.format(balance)}</p>
    </div>
  );
}
