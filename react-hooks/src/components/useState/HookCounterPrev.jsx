import React, { useState } from "react";

const HookCounterPrev = () => {
  const initialState = 0;
  const [count, setCount] = useState(initialState);

  const incrementFive = () => {
    for(let i=0; i<5; i++){
        // setCount(count + 1)//increment only 1 not increase 5 because previous value is always set initial value
        setCount(prevCount => prevCount+1)//it is okkk
    }
  }
  return (
    <div>
      count: {count}
      <button onClick={() => setCount(initialState)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  );
};

export default HookCounterPrev;
