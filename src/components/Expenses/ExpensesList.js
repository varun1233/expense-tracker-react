import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ filteredExpenses }) => {
  return (
    <ul className="expenses-list">
      {filteredExpenses && filteredExpenses.length === 0 ? (
        <h2 className="expenses-list__fallback">No Expenses Found</h2>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense}></ExpenseItem>
        ))
      )}
    </ul>
  );
};

export default ExpensesList;
