import React from "react";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

interface Props {
  /** Selected month as a 0-based index (0 = January). */
  month: number;
  year: number;
  onChange: (month: number, year: number) => void;
}

const MonthSelector: React.FC<Props> = ({ month, year, onChange }) => {
  return (
    <div style={{ padding: "20px", border: "1px solid black" }}>
      <h2>Month Selector</h2>
      <p>
        Selected month: {MONTHS[month]} {year}
      </p>
      <div>
        <button onClick={() => onChange(month, year - 1)} aria-label="Previous year">
          &lt;
        </button>
        <span> {year} </span>
        <button onClick={() => onChange(month, year + 1)} aria-label="Next year">
          &gt;
        </button>
      </div>
      <div>
        {MONTHS.map((name, index) => (
          <button
            key={name}
            onClick={() => onChange(index, year)}
            disabled={index === month}
            aria-pressed={index === month}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MonthSelector;
