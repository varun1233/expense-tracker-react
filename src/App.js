import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const DUMMY_EXPENSES = [
  {
    id: uuid(),
    title: "JS Book",
    amount: 500,
    date: new Date(2021, 7, 14),
  },
  { id: uuid(), title: "Laptop Charger", amount: 1200, date: new Date(2021, 2, 12) },
  {
    id: uuid(),
    title: "Earphones",
    amount: 480,
    date: new Date(2022, 2, 28),
  },
  {
    id: uuid(),
    title: "New Desk (Wooden)",
    amount: 4500,
    date: new Date(2022, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
