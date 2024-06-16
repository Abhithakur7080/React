import React, { useCallback, useMemo, useState } from "react";
import { MemoizedChildSix } from "./ChildSix";

const ParentSix = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Abhi");

  const person = {
    fname: "Bruce",
    lname: "Wyne"
  }
  const memoizePerson = useMemo(() => person, [])
  const handleClick = () => {}
  const memoizedHandleClick = useCallback(handleClick, [])

  console.log("ParentSix Render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("Abhijeet")}>Change Name</button>
      <MemoizedChildSix name={name} handleClick={memoizedHandleClick} />
    </div>
  );
};

export default ParentSix;
