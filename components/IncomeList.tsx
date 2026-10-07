import { Transaction } from "../types/finance";
import { usd } from "../utils/format";

interface Props {
  items: Transaction[];
  onDelete: (id: string) => void;
}

export default function IncomeList({ items, onDelete }: Props) {
  return (
    <div>
      <h3>Income</h3>
      {items.map((t) => (
        <div key={t.id}>
          {t.category}: {usd.format(t.amount)}
          <button
            onClick={() => onDelete(t.id)}
            aria-label={`Delete ${label}: ${t.category} ${usd.format(t.amount)}`}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}
