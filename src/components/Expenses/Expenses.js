import { useState } from "react";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = ({ expenses }) => {
  const currentYear = new Date().getFullYear().toString()
  const [filteredYear, setFilteredYear] = useState(currentYear);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onFilterChange={filterChangeHandler}
          selected={filteredYear}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
};
export default Expenses;
