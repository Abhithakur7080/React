import React from "react";
import styles from "./ExpenseForm.module.css";
import { useState } from "react";

export default function ExpenseForm(props) {
  // Create state or ref for the inputs here
  const [expenseText, setExpenseText] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      text: expenseText,
      amount: parseFloat(expenseAmount)
    };

    props.addExpense(newExpense);
    // Reset the input fields
    setExpenseText("");
    setExpenseAmount("");
  };
    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        <h3>Add new transaction</h3>
        <label htmlFor="expenseText">Text</label>
        <input
          id="expenseText"
          className={styles.input}
          type="text"
          placeholder="Enter text..."
          required
          value={expenseText}
          onChange={(e) => setExpenseText(e.target.value)}
        />
        <div>
          <label htmlFor="expenseAmount">Amount</label>
          <div>(negative - expense,positive-income)</div>
        </div>
        <input
          className={styles.input}
          id="expenseAmount"
          type="number"
          placeholder="Enter amount..."
          required
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(e.target.value)}
        />
        <button className={styles.submitBtn}>Add Transaction</button>
      </form>
    );
}
