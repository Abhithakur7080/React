import React from "react";
import styles from "../styles/ItemCard.module.css";
// import { useContext } from "react";
// import { itemContext } from "../itemContext";
// import { totalContext } from "../totalContext";
import {useValue} from '../itemContext'

function ItemCard({ id, name, price }) {
  // const value1 = useContext(itemContext);
  //desturucture
  // const {item, setItem} = value1;

  // const value2 = useContext(totalContext);
  //desturucture
  // const {total, setTotal} = value1;

  const {handleAdd, handleRemove} = useValue();

  // const handleAdd = () => {
  //   // setTotal(total+price)
  //   setTotal((prev) => prev+price)
  //   setItem(item+1)
  // };

  // const handleRemove = () => {
  //   if(total<=0){
  //     return;
  //   }
  //   // setTotal(total-price)
  //   setTotal((prev) => prev-price)
  //   setItem(item-1)
  // };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd({ id, name, price })}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove({ id, name, price })}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
