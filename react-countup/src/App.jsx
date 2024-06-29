import React from "react";
import "./App.css";
import CountUp, { useCountUp } from "react-countup";

const App = () => {
  const countUpRef = React.useRef(null);
  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    duration: 5,
    end: 10000,
    startOnMount: false // resume on mounting time initally not 0 not count up
  });
  return (
    <div className="App">
      <h1 ref={countUpRef}></h1>
      <button onClick={start}>Start</button>
      <button onClick={reset}>Reset</button>
      <button onClick={pauseResume}>Pause / Resume</button>
      <button onClick={() => update(2000)}>Update to 2000</button>

      {/* another way */}
      <h1>
        <CountUp end={200} />
      </h1>
      <h1>
        <CountUp end={200} duration={5} />
      </h1>
      <h1>
        <CountUp start={500} end={1000} duration={5} />
      </h1>
      <h1>
        <CountUp end={1000} duration={5} prefix="$" decimals={2} />
      </h1>
      <h1>
        <CountUp end={1000} duration={5} suffix="USD" decimals={2} />
      </h1>
    </div>
  );
};

export default App;
