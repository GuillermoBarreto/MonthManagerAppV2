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
    <section aria-label="Monthly summary">
      <h2>Summary</h2>
      <dl>
        <div>
          <dt>Total income</dt>
          <dd>{usd.format(income)}</dd>
        </div>
        <div>
          <dt>Total expenses</dt>
          <dd>{usd.format(expenses)}</dd>
        </div>
        <div>
          <dt>Balance</dt>
          <dd>{usd.format(balance)}</dd>
        </div>
      </dl>
    </section>
  );
}
