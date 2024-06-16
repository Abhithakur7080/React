import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
  }
  return state;
};

const CounterOne = () => {
  /*
    in javascript
    const arr = [1, 2, 3, 4, 5]
    const reducer = (accumulator, current) => accumulator + current
    arr.reduce(reducer)//15
    */
   //in react
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <h3>Count - {count}</h3>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  );
};

export default CounterOne;
