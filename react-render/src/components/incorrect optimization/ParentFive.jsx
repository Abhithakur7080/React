import React, { useState } from "react";
import { MemoizedChildFive } from "./ChildFive";

const ParentFive = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Abhi");

  //this type of props passed to child no any effect of memo because of pass through new reference
  const person = {
    fname: "Bruce",
    lname: "Wyne"
  }
  const handleClick = () => {}
  //---------------
  console.log("ParentFive Render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("Abhijeet")}>Change Name</button>
      {/* <MemoizedChildFive name={name} person={person} /> */}
      <MemoizedChildFive name={name} handleClick={handleClick} />
    </div>
  );
};

export default ParentFive;
