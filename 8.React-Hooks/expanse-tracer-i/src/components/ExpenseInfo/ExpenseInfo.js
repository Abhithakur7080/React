import React from "react";
import styles from "./ExpenseInfo.module.css";
import { useState } from "react";
import { useEffect } from "react";

export default function ExpenseInfo(props) {
  const [grandTotal, setGrandTotal] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  
  useEffect(() => {
    let totalProfitAmount = 0;
    let totalExpenseAmount = 0;

    props.expense.forEach(transaction => {
      if (transaction.amount > 0) {
        totalProfitAmount += transaction.amount;
      } else {
        totalExpenseAmount += Math.abs(transaction.amount);
      }
    });

    setTotalProfit(totalProfitAmount);
    setTotalExpense(totalExpenseAmount);
    setGrandTotal(totalProfitAmount - totalExpenseAmount);
  }, [props.expense]);
  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        <h1>${grandTotal}</h1>
      </div>
      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
            +${totalProfit}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
            -${totalExpense}
          </p>
        </div>
      </div>
    </div>
  );
}
