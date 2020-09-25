import React from "react";
import "./styles.css";
import Chart from "chart.js";

export default function App() {
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const data = [1, 2, 3, 4, 5, 6, null, 5, null, null, null, null];

  while (data[0] == null) {
    data.shift(); // remove leading null
    labels.shift(); // remove corresponding label
  }

  while (data[data.length - 1] == null) {
    data.pop(); // remove tailing null
    labels.pop(); // remove corresponding label
  }

  var myChart = new Chart("myChart", {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Exceptionnel",
          data: data
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ],
        xAxes: [
          {
            offset: true,
            gridLines: {
              display: true
            }
          }
        ]
      }
    }
  });

  return (
    <div className="App">
      <canvas id="myChart" height="90"></canvas>
    </div>
  );
}
