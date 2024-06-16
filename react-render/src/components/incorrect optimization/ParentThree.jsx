import React, { useState } from "react";
import { MemoizedChildThree } from "./ChildThree";

const ParentThree = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Abhi");
  console.log("ParentThree Render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("Abhijeet")}>Change Name</button>
      <MemoizedChildThree name={name} >
        <strong>Hello</strong>
      </MemoizedChildThree>
    </div>
  );
};

export default ParentThree;
