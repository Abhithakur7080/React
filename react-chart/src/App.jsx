import React from "react";
import "./App.css";
import LineChart from "./Components/LineChart";
import BarChart from "./Components/BarChart";
import DoughnutChart from "./Components/DoughnutChart";

const App = () => {
  return (
    <div className="App">
      <div className="chart">
        <LineChart />
        <hr />
        <BarChart/>
        <hr />
        <DoughnutChart/>
      </div>
    </div>
  );
};

export default App;
