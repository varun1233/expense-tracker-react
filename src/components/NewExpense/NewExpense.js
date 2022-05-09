import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { v4 as uuid } from "uuid";
import { useState } from "react";

const NewExpense = ({ onAddExpense }) => {
  const [showForm, setShowForm] = useState(false);
  const onSaveExpenseHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: uuid() };
    onAddExpense(expenseData);
    setShowForm(false);
  };
  const onToggleFormHandler = () => {
    setShowForm((prevState) => !prevState);
  };
  return (
    <div className="new-expense">
      {!showForm && (
        <button onClick={onToggleFormHandler}>Add New Expense</button>
      )}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseHandler}
          onToggleForm={onToggleFormHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};
export default NewExpense;
