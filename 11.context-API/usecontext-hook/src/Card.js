import { cardContext } from "./context";
import { useContext } from "react";
export const Card = () => {
  const value = useContext(cardContext);
  
  return (
    <div className="card" style={{ backgroundColor: value.color }}>
      <h3>{value.text}</h3>
    </div>
  );
};
