import React from "react";
import styles from "../styles/Navbar.module.css";
import {useValue} from '../itemContext'
// import { useContext } from "react";
// import { itemContext } from "../itemContext";
// import { totalContext } from "../totalContext";

function Navbar() {
  // const value1 = useContext(itemContext);
  //desturucture
  // const {item} = value1;

  // const value2 = useContext(totalContext);
  //desturucture
  // const {total} = value1;

  const {item, total, reset, toggle} = useValue();

  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={toggle}>Cart</button>
        <button className={styles.button} onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Navbar;
