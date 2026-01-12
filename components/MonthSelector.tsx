import React, { useState } from 'react';

const MonthSelector: React.FC = () => {
  const [month, setMonth] = useState('January');

  return (
    <div style={{ padding: '20px', border: '1px solid black' }}>
      <h2>Month Selector</h2>
      <p>Selected month: {month}</p>
      <button onClick={() => setMonth('January')}>January</button>
      <button onClick={() => setMonth('February')}>February</button>
      <button onClick={() => setMonth('March')}>March</button>
    </div>
  );
};

export default MonthSelector;
