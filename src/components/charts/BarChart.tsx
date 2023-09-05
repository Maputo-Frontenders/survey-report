"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const BarChart: React.FC<{ data: any }> = ({ data }) => {
  const options: ApexOptions = {
    series: data?.series,
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 1,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: data?.categories,
      labels: {
        style: {
          colors: "#fff",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#fff",
          fontSize: "0.8rem",
        },
      },
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

export default BarChart;
