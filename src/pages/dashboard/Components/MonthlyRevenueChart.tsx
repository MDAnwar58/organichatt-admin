import React, { useState } from "react";
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

type Data = {
   x: string;
   y: number;
};

type Props = {
   datas: Data[];
   categories: string[];
};

export default function MonthlyRevenueChart({ datas, categories }: Props) {
   const [chartData, setChartData] = useState<{
      series: { name: string; data: { x: string; y: number }[] }[];
      options: ApexOptions;
   }>({
      series: [
         {
            name: "Monthly Revenue",
            data: datas,
         },
      ],
      options: {
         chart: {
            type: "area",
            height: "100%",
            stacked: true,
         },
         colors: ["#FF6C6C", "#4285F4", "#98B0EE"],
         dataLabels: {
            enabled: false,
         },
         stroke: {
            curve: "smooth",
         },
         fill: {
            type: "gradient",
            gradient: {
               opacityFrom: 0.6,
               opacityTo: 0.8,
            },
         },
         legend: {
            position: "top",
            horizontalAlign: "left",
         },
         xaxis: {
            categories: categories,
            labels: {
               style: {
                  fontSize: "12px",
               },
            },
         },
         yaxis: {
            labels: {
               formatter: function (val: number) {
                  return `${val}৳`; // Adds the "K" suffix for thousands
               },
            },
         },
         tooltip: {
            enabled: true,
            shared: true, // Enable tooltip for all series
            y: {
               formatter: function (
                  value: number,
                  { seriesIndex }: { seriesIndex: number }
               ) {
                  const labels = ["", "", ""]; // Units for each series
                  return `${value}৳ ${labels[seriesIndex]}`;
               },
            },
         },
      },
   });

   return (
      <div className="4lg:h-[430px] lg:h-[370px] 4md:h-[300px] md:h-[250px] sm:h-[350px] 6xs:h-[315px] 3xs:h-[275px] xs3:h-[225px] h-[200px]">
         <Chart
            options={chartData.options}
            series={chartData.series}
            type="area"
            height="100%"
         />
      </div>
   );
}
