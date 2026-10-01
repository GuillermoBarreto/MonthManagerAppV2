import React, { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import IncomeForm from "./components/IncomeForm";
import IncomeList from "./components/IncomeList";
import MonthSelector from "./components/MonthSelector";
import Summary from "./components/Summary";
import { Transaction } from "./types/finance";
import { loadTransactions, saveTransactions } from "./utils/storage";

function App() {
  const now = new Date();
  const [month, setMonth] = useState(now.getMonth());
  const [year, setYear] = useState(now.getFullYear());
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // Reload the visible month's transactions whenever the selection changes.
  useEffect(() => {
    setTransactions(loadTransactions(month, year));
  }, [month, year]);

  function persist(next: Transaction[]) {
    setTransactions(next);
    saveTransactions(month, year, next);
  }

  function addTransaction(transaction: Transaction) {
    persist([...transactions, transaction]);
  }

  function deleteTransaction(id: string) {
    persist(transactions.filter((t) => t.id !== id));
  }

  return (
    <div>
      <h1>Month Manager</h1>
      <MonthSelector
        month={month}
        year={year}
        onChange={(nextMonth, nextYear) => {
          setMonth(nextMonth);
          setYear(nextYear);
        }}
      />
      <ExpenseForm onAdd={addTransaction} />
      <IncomeForm onAdd={addTransaction} />
      <ExpenseList
        items={transactions.filter((t) => t.type === "expense")}
        onDelete={deleteTransaction}
      />
      <IncomeList
        items={transactions.filter((t) => t.type === "income")}
        onDelete={deleteTransaction}
      />
      <Summary transactions={transactions} />
    </div>
  );
}

export default App;
