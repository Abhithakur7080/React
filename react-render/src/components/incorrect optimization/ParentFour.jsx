import React, { useState } from "react";
import { MemoizedChildFour } from "./ChildFour";

const ParentFour = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Abhi");
  console.log("ParentFour Render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("Abhijeet")}>Change Name</button>
      <MemoizedChildFour name={name} />
    </div>
  );
};

export default ParentFour;
