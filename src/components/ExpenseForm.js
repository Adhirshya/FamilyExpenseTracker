import React, { useState } from 'react';
import '../styles/ExpenseForm.css';

function ExpenseForm({ addExpense }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim() === '' || amount.trim() === '') {
      alert('Please enter both description and amount.');
      return;
    }

    const newExpense = {
      id: new Date().getTime(),
      description,
      amount: parseFloat(amount),
    };

    addExpense(newExpense);

    setDescription('');
    setAmount('');
  };

  return (
    <div className="expense-form">
      <h2>Add New Expense</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Amount ($)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
