import React, { useContext } from "react";
import { CountContext } from "./Root";

const ComponentD = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      Component - D ({countContext.countState})
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment-D
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Decrement-D
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset-D</button>
    </div>
  );
};

export default ComponentD;
