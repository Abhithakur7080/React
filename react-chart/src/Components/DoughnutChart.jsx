import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const DoughnutChart = () => {
  const data = {
    labels: ["jan", "feb", "mar", "apr", "may"],
    datasets: [
      {
        label: "Sales for 2020 (M)",
        data: [3, 2, 2, 1, 5],
        tension: 0.5,
        fill: true,
        backgroundColor: [
          "rgba(255,99,132,1)",
          "rgba(255,205,86,1)",
          "rgba(54,162,235,1)",
          "rgba(255,159,64,1)",
          "rgba(153,102,255,1)",
        ],
      },
    ],
  };
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Doughnut Chart",
      },
    },
  };
  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
