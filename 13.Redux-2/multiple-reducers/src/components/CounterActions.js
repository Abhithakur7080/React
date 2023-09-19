import { useSelector } from "react-redux";
// add action creators imports here
import { incrementCounter, decrementCounter, resetCounter } from "../redux/actions/counterActions"
import { useDispatch } from "react-redux";

export const CounterActions = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="actions">
      {/* disptach action to decrease count here */}
      <button onClick={()=> {dispatch(decrementCounter())}} disabled={count <= 0}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
          alt="dec"
        />
      </button>
      {/* disptach action to increase count here */}
      <button onClick={() => dispatch(incrementCounter())} disabled={count >= 10}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
          alt="inc"
        />
      </button>
      {/* disptach action to reset count here */}
      <button onClick={() => dispatch(resetCounter())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/9923/9923627.png"
          alt="reset"
        />
      </button>
    </div>
  );
};
