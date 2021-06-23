import { useEffect, useState } from "react";
import axios from "axios";
import stackline_frontend_assessment_data_2021 from "../stackline_frontend_assessment_data_2021.json"
import Chart from "chart.js";

export default function LineChart() {
  // below is an example of an API call
  const [data, setData] = useState(stackline_frontend_assessment_data_2021[0]);
  const [sales, setSales] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://hn.algolia.com/api/v1/search?query=example',
      );
      setSales(result.data);
    };
    fetchData();
  }, []);

  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL","AUG", "SEP", "OCT", "NOV", "DEC"];

  const retailInfo = () => {
    return data.sales.map((sale) => {
      return sale.retailSales
    })
  }

  const wholesale = () => {
    return data.sales.map((sale) => {
      return sale.wholesaleSales
    })
  }

  useEffect(() => {
    let config = {
      type: "line",
      data: {
        labels: months,
        datasets: [
          {
            display: false,
            backgroundColor: "gray",
            borderColor: "gray",
            data: wholesale(),
            fill: false,
            tension: 0.3
          },
          {
            fill: false,
            backgroundColor: "blue",
            borderColor: "blue",
            data: retailInfo(),
            tension: 0.3
          },
        ],
      },
      options: {
        maintainAspectRatio: true,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "white",
        },
        legend: {
          labels: {
            fontColor: "black",
          },
          align: "end",
          position: "bottom",
          display: false
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "gray",
                maxTicksLimit: 12
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "white",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "white",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "rgba(255, 255, 255, 0.15)",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    var ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h2 className="text-white text-sm mt-2">Retail Sales</h2>
            </div>
          </div>
        </div>
        <div className="px-8 flex-auto mx-8">
          {/* Chart */}
          <div className="relative h-30-vh">
            <canvas id="line-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
