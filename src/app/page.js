"use client";

import { LuTruck } from "react-icons/lu";
import { LuDollarSign } from "react-icons/lu";
import { TbUsers } from "react-icons/tb";
import { MdShoppingCart } from "react-icons/md";
import dynamic from "next/dynamic";
import "chart.js/auto";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), {
  ssr: false,
});

const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
});

const Doughnut = dynamic(
  () => import("react-chartjs-2").then((mod) => mod.Doughnut),
  {
    ssr: false,
  }
);

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  scales: {
    x: {
      grid: {
        display: false, // Hides the vertical grid lines
      },
    },
    y: {
      grid: {
        display: false, // Hides the horizontal grid lines
      },
    },
  },
};

const data = {
  labels: [
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
    "Dec",
  ],
  datasets: [
    {
      label: "",
      data: [
        2115, 1562, 1584, 1892, 1587, 1923, 2566, 2448, 2805, 3438, 2917, 3327,
      ],
      fill: true,
      "background-color": "rgb(219 234 254 / var(--tw-bg-opacity))",
      tension: 0.5,
    },
  ],
};

const data2 = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const data3 = [
  {
    label: "Label 1",
    value: 55,
    color: "rgba(0, 43, 73, 1)",
    cutout: "50%",
  },
  {
    label: "Label 2",
    value: 15,
    color: "rgba(0, 103, 160, 1)",
    cutout: "50%",
  },
  {
    label: "Label 3",
    value: 80,
    color: "rgba(83, 217, 217, 1)",
    cutout: "50%",
  },
];

const finalData = {
  labels: data3.map((item) => item.label),
  datasets: [
    {
      data: data3.map((item) => Math.round(item.value)),
      backgroundColor: data3.map((item) => item.color),
      borderColor: data3.map((item) => item.color),
      borderWidth: 1,
      dataVisibility: new Array(data3.length).fill(true),
    },
  ],
};

const options2 = {
  plugins: {
    responsive: true,
  },
  cutout: data3.map((item) => item.cutout),
};

export default function Home() {
  return (
    <div className="h-[calc(100dvh-25px)] overflow-scroll md:bg-[#f5f7fb] px-6 py-3 w-full">
      <h1 className="text-2xl font-semibold">Admin Dashboard</h1>

      <div className="p-2 flex gap-5 md:flex-nowrap flex-wrap">
        <div className="flex flex-wrap w-[50%] gap-5">
          <div className="p-5 bg-white rounded-md flex-grow flex-shrink basis-auto w-1/3">
            <div className="flex justify-between">
              <h5 className="text-[grey] font-semibold">Sales</h5>
              <div className="w-[40px] h-[40px] rounded-full bg-blue-200 flex justify-center items-center">
                <LuTruck className="text-xl text-blue-800" />
              </div>
            </div>
            <h1 className="text-3xl mt-4 mb-4">2.382</h1>
            <div className="flex items-center">
              <span className="text-sm text-red-500 font-semibold">-3.65%</span>
              <span className="ml-1 text-[grey]">Since last week</span>
            </div>
          </div>

          <div className="p-5 bg-white rounded-md flex-grow flex-shrink basis-auto w-1/3">
            <div className="flex justify-between">
              <h5 className="text-[grey] font-semibold">Earnings</h5>
              <div className="w-[40px] h-[40px] rounded-full bg-blue-200 flex justify-center items-center">
                <LuDollarSign className="text-xl text-blue-800" />
              </div>
            </div>
            <h1 className="text-3xl mt-4 mb-4">$21.300</h1>
            <div className="flex items-center">
              <span className="text-sm text-green-500 font-semibold">
                6.65%
              </span>
              <span className="ml-1 text-[grey]">Since last week</span>
            </div>
          </div>

          <div className="p-5 bg-white rounded-md flex-grow flex-shrink basis-auto w-1/3">
            <div className="flex justify-between">
              <h5 className="text-[grey] font-semibold">Visitors</h5>
              <div className="w-[40px] h-[40px] rounded-full bg-blue-200 flex justify-center items-center">
                <TbUsers className="text-xl text-blue-800" />
              </div>
            </div>
            <h1 className="text-3xl mt-4 mb-4">14.212</h1>
            <div className="flex items-center">
              <span className="text-sm text-green-500 font-semibold">
                5.25%
              </span>
              <span className="ml-1 text-[grey]">Since last week</span>
            </div>
          </div>

          <div className="p-5 bg-white rounded-md flex-grow flex-shrink basis-auto w-1/3">
            <div className="flex justify-between">
              <h5 className="text-[grey] font-semibold">Orders</h5>
              <div className="w-[40px] h-[40px] rounded-full bg-blue-200 flex justify-center items-center">
                <MdShoppingCart className="text-xl text-blue-800" />
              </div>
            </div>
            <h1 className="text-3xl mt-4 mb-4">2.382</h1>
            <div className="flex items-center">
              <span className="text-sm text-red-500 font-semibold">-3.65%</span>
              <span className="ml-1 text-[grey]">Since last week</span>
            </div>
          </div>
        </div>

        <div className="bg-white w-[50%] rounded-md p-2 flex flex-col">
          <h1 className="text-lg font-semibold text-[grey]">Line Chart</h1>
          <div className="flex-grow h-64 flex justify-center items-center">
            <Line data={data} options={options} />
          </div>
        </div>
      </div>

      <div className="p-2 flex gap-5 md:flex-nowrap flex-wrap">
        <div className="bg-white w-[50%] rounded-md p-2 flex flex-col">
          <h1 className="text-lg font-semibold text-[grey]">Bar Chart</h1>
          <div className="flex justify-center items-center flex-grow h-64">
            <Bar data={data2} options={options} />
          </div>
        </div>

        <div className="bg-white w-[50%] rounded-md p-2 flex flex-col">
          <h1 className="text-lg font-semibold text-[grey]">Doughnut Chart</h1>
          <div className="flex-grow h-64 flex justify-center items-center">
            <Doughnut data={finalData} options={options2} />
          </div>
        </div>
      </div>
    </div>
  );
}
