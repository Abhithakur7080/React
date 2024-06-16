import React, { useReducer } from "react";

// const initialState = {
//   firstCounter: 0,
// };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return {
//         firstCounter: state.firstCounter + action.value,
//       };
//     case "decrement":
//       return {
//         firstCounter: state.firstCounter - action.value,
//       };
//     case "reset":
//       return initialState;
//   }
//   return state;
// };
const initialState = {
    firstCounter: 0,
    secondCounter: 10
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return {
            ...state,
          firstCounter: state.firstCounter + action.value,
        };
      case "decrement":
        return {
            ...state,
          firstCounter: state.firstCounter - action.value,
        };
      case "increment2":
        return {
            ...state,
          secondCounter: state.secondCounter + action.value,
        };
      case "decrement2":
        return {
            ...state,
          secondCounter: state.secondCounter - action.value,
        };
      case "reset":
        return initialState;
    }
    return state;
  };

const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h3>Count - 1 - {count.firstCounter}</h3>
      <h3>Count - 2 - {count.secondCounter}</h3>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>Increment1</button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>Decrement1</button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>Increment1 5</button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>Decrement1 5</button>
      <br />
      <button onClick={() => dispatch({ type: "increment2", value: 1 })}>Increment2</button>
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>Decrement2</button>
      <button onClick={() => dispatch({ type: "increment2", value: 5 })}>Increment2 5</button>
      <button onClick={() => dispatch({ type: "decrement2", value: 5 })}>Decrement2 5</button>
      <br />
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default CounterTwo;
