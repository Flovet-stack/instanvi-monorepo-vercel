import AdvertTable from "../../features/campaign/components/advert-table";
import dynamic from "next/dynamic";
import React, { FC, useState } from "react";
import { HeaderLayout } from "@/layouts/header-layout";
import Statistics from "@/features/campaign/components/Statistics";
import FormAdvert from "@/features/campaign/components/FormAdvert";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Dashboard: FC = () => {
  const [overview, setOverview] = useState<boolean>(true);
  const [newAdvert, setNewAdvert] = useState<boolean>(false)

  const options: any = {
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 0.8,
    },
    title: {
      text: "Product Trends by Month",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  };

  return (
    <HeaderLayout>
      <div className="bg-gray-300">
        <div className={"flex  h-full justify-center bg-[#f5f5f5] px-auto pb-8"}>
          <div className="flex flex-col h-fit w-10/12">
            <div className="flex border-b my-5">

            </div>
            {/* Overview */}
            <div className={overview ? "" : "hidden"}>
              <Statistics setNewAdvert={setNewAdvert} />

              <div className="basis-1/3 my-8 bg-white rounded p-8">
                <Chart
                  series={options.series}
                  options={options}
                  type="line"
                  height={500}
                />
              </div>

              <AdvertTable />

            </div>
          </div>
        </div>

        <FormAdvert
          newAdvert={newAdvert}
          setNewAdvert={setNewAdvert}
        />

      </div>
    </HeaderLayout>

  );
}


export default Dashboard