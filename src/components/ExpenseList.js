import React from 'react';
import '../styles/ExpenseList.css';

function ExpenseList({ expenses, deleteExpense }) {
  // Calculate total expense
  const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="expense-list">
      <h2>Expense List</h2>
      <p>Total Expense: ${totalExpense.toFixed(2)}</p>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <span>{expense.description}</span>
            <span>${expense.amount}</span>
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
