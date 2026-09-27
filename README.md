# MonthManagerAppV2

Personal finance dashboard for tracking monthly income and expenses. Second iteration of the Month-Manager-App concept.

## Features

- Add income and expense transactions with category, amount, date, and notes
- Filter transactions by month
- Monthly summary with income vs. expense totals
- Data persists in the browser via localStorage

## Tech stack

- TypeScript + React
- localStorage for persistence (no backend)

## Components

- `ExpenseForm` / `ExpenseList` — expense entry and listing
- `IncomeForm` / `IncomeList` — income entry and listing
- `MonthSelector` — pick the month to view
- `Summary` — income vs. expense totals

## How to run

Open `app.tsx` in a React + TypeScript setup and render it as the root component. (No build config is committed yet.)
