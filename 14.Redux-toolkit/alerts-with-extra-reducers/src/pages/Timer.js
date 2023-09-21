import { TimerActions } from "../components/TimerActions";
import { Time } from "../components/Time";
import { useSelector, useDispatch } from "react-redux";
import { alertSelector, resetAlert } from "../redux/reducers/alertReducer";
export const Timer = () => {

  const dispatch = useDispatch();

  // get alert message here
  const message = useSelector(alertSelector);

  // create effect to reset alert message here
  if (message) {
    setTimeout(() => { dispatch(resetAlert()) }, 2000);
  }
  return (
    <div className="page">
      {/* conditionally show the below div with alert message */}
      <div className="alert">{message}</div>
      <h1>Simple Timer</h1>
      <Time />
      <TimerActions />
    </div>
  );
};
