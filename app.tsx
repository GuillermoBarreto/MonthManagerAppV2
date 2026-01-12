import React from 'react';
import ExpenseForm from './components/ExpenseForm';
import IncomeForm from './components/IncomeForm';
import MonthSelector from './components/MonthSelector';
import Summary from './components/Summary';

function App() {
  return (
    <div>
      <MonthSelector />
      <ExpenseForm />
      <IncomeForm />
      <Summary />
    </div>
  );
}

export default App;
