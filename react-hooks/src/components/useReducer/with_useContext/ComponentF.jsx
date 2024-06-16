import React, { useContext } from "react";
import { CountContext } from "./Root";

const ComponentF = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      Component - F ({countContext.countState})
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment-F
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Decrement-F
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset-F</button>
    </div>
  );
};

export default ComponentF;
