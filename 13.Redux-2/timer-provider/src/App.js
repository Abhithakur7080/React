import "./styles.css";
import { Actions } from "./components/Actions";
import { Timer } from "./components/Timer";
//  add redux imports here
import { Provider } from "react-redux"
import { store } from "./store"

export default function App() {
  return (
    <div className="App">

      <h1>Simple Timer</h1>
      <Provider store={store}>
        <Timer />
        <Actions />
      </Provider>

    </div>
  );
}
