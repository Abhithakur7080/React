import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  console.log("Parent Render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setCount(0)}>Set 0</button>
      <button onClick={() => setCount(5)}>Set 5</button>
      <Child/>
    </div>
  );
};

export default Parent;
