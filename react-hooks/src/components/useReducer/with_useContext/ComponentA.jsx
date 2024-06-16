import React, { useContext } from "react";
import { CountContext } from "./Root";

const ComponentA = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      Component - A ({countContext.countState})
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment-A
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Decrement-A
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset-A</button>
    </div>
  );
};

export default ComponentA;
