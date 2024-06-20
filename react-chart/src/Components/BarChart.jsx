import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const BarChart = () => {
  const data = {
    labels: ["jan", "feb", "mar", "apr", "may"],
    datasets: [
      {
        label: "Sales for 2020 (M)",
        data: [3, 2, 2, 1, 5],
        tension: 0.5,
        fill: true,
        borderColor: ["rgba(255,206,86,0.4)"],
        backgroundColor: ["rgba(255,206,86,0.4)"],
        pointBackgroundColor: ["rgba(255,206,86,0.4)"],
        pointBorderColor: ["rgba(255,206,86,0.4)"],
      },
      {
        label: "Sales for 2021 (M)",
        data: [1, 3, 2, 2, 3],
        tension: 0.5,
        fill: true,
        borderColor: ["rgba(54,162,235,0.5)"],
        backgroundColor: ["rgba(54,162,235,0.5)"],
      },
    ],
  };
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Bar Chart",
      },
      tooltip: {
        position: "average",
        yAlign: "bottom",
        backgroundColor: "black",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        min: 0,
        max: 6,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };
  return <Bar data={data} options={options} />;
};

export default BarChart;
