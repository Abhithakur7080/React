import React from "react";
import styles from "./ExpenseList.module.css";
import Transaction from "../Transaction/Transaction";

export default function ExpenseList(props) {

    return (
      <div className={styles.expenseListContainer}>
        <h3>Transactions</h3>
        <ul className={styles.transactionList}>
          {/* Display transactions here */}
          {props.expense.map((transaction, index) => (
          <Transaction key={transaction.id} expense={transaction} index={index} />
        ))}
        </ul>
      </div>
    );
}
