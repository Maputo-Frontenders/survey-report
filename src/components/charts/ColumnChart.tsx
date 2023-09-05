"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const ColumnChart: React.FC<{ data: any }> = ({ data }) => {
  const options: ApexOptions = {
    series: data?.series,
    chart: {
      toolbar: {
        show: false,
      },
    },
    legend: {
      position: "bottom",
    },
    plotOptions: {
      bar: {
        borderRadius: 1,
        horizontal: false,
        columnWidth: "55%",
      },
    },
    xaxis: {
      categories: data?.categories,
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: "#fff",
          fontSize: "0.8rem",
        },
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return `${val}`;
        },
      },
      cssClass: "text-black",
    },
    colors: ["#e2363c"],
  };

  return (
    <div className="w-full">
      {<ReactApexChart options={options} series={options.series} type="bar" />}
    </div>
  );
};

export default ColumnChart;
