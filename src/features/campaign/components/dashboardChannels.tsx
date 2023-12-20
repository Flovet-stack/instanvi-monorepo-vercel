import dynamic from 'next/dynamic';
import React, { FC, useState } from 'react';
import { ApexOptions } from 'react-apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => {
  const [channels, setChannels] = useState<boolean>(true);

  const options: ApexOptions = {
    series: [
      {
        name: 'STOCK ABC',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 10, 11, 12],
      },
    ],
    chart: {
      type: 'area',
      height: 350,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 0.5,
    },
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    xaxis: {
      type: '',
    },
    yaxis: {
      opposite: false,
    },
    legend: {
      horizontalAlign: 'left',
    },
  };

  return (
    <div className="mt-5  md:mt-0">
      <div>
        <div
          className={`grid grid-cols-2 gap-4 mt-8 mb-20 ${
            !channels ? 'hidden' : ''
          }`}
        >
          <div className="flex border border-gray-100 rounded-lg bg-white p-5">
            <div className=" m-2 w-1/3">
              <div className="flex ">
                <div
                  className={
                    'flex justify-evenly items-center bg-gray-50 rounded-full h-10 w-10 -ml-3'
                  }
                >
                  <img
                    className="h-7 w-7 rounded-full"
                    src="../../images/radio 1.svg"
                    alt=""
                  />
                </div>
                <div className="flex justify-evenly items-center ml-2">
                  <h1 className="text-xl">TRADITIONAL MEDIA</h1>
                </div>
              </div>
              <div className="flex  align-center border border-gray-300 rounded py-2 pl-2 mt-5">
                <img
                  src="../../images/calendar-event-fill.svg"
                  className="w-6 h-6 mx-2"
                  alt=""
                />
                <p className="pl-2">Dec 10, 2020 - Jan 9, 2021</p>
              </div>
              <div className="">
                <div className="flex justify-between pl-4 py-3 text-gray-400 font-semibold">
                  <p>Campaign</p>
                  <p className="font-normal text-black mr-2">22</p>
                </div>
                <div className="flex justify-between pl-4 py-3 text-gray-400 font-semibold">
                  <p>Total Audience</p>
                  <p className="font-normal text-black">1,500.00</p>
                </div>
                <div className="flex justify-between pl-4 py-3 text-gray-400 font-semibold">
                  <p>Budget</p>
                  <p className="font-normal text-black">-2,930.99XAF</p>
                </div>
                <div className="flex justify-between bg-gray-100 rounded py-8 px-4">
                  <p className="font-semibold">Engagements</p>
                  <p className="text-4xl font-bold">521</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded w-full m-2 flex justify-evenly items-center">
              <Chart
                series={options.series}
                options={options}
                type="area"
                width={420}
                height={350}
              />
            </div>
          </div>
          <div className="flex border border-gray-100 rounded-lg bg-white p-5">
            <div className=" m-2 w-1/3">
              <div className="flex items-center">
                <div
                  className={
                    'flex justify-evenly items-center bg-gray-50 rounded-full h-12 w-12 -ml-3'
                  }
                >
                  <img
                    className="h-7 w-7 rounded-full"
                    src="../../images/web.svg"
                    alt=""
                  />
                </div>
                <div className="flex justify-evenly items-center ml-2">
                  <h1 className="text-xl">WEB</h1>
                </div>
              </div>
              <div className="flex  align-center border border-gray-300 rounded py-2 pl-2 mt-5">
                <img
                  src="../../images/calendar-event-fill.svg"
                  className="w-6 h-6 mx-2"
                  alt=""
                />
                <p className="pl-2">Dec 10, 2020 - Jan 9, 2021</p>
              </div>
              <div className="">
                <div className="flex justify-between pl-4 py-3 text-gray-400 font-semibold">
                  <p>Campaign</p>
                  <p className="font-normal text-black mr-2">22</p>
                </div>
                <div className="flex justify-between pl-4 py-3 text-gray-400 font-semibold">
                  <p>Total Audience</p>
                  <p className="font-normal text-black">1,500.00</p>
                </div>
                <div className="flex justify-between pl-4 py-3 text-gray-400 font-semibold">
                  <p>Budget</p>
                  <p className="font-normal text-black">-2,930.99XAF</p>
                </div>
                <div className="flex justify-between bg-gray-100 rounded py-8 px-4">
                  <p className="font-semibold">Engagements</p>
                  <p className="text-4xl font-bold">434.00</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded w-full m-2 flex justify-evenly items-center">
              <Chart
                series={options.series}
                options={options}
                type="area"
                width={420}
                height={350}
              />
            </div>
          </div>
          <div className="flex border border-gray-100 rounded-lg bg-white p-5">
            <div className=" m-2 w-1/3">
              <div className="flex items-center">
                <div
                  className={
                    'flex justify-evenly items-center bg-gray-50 rounded-full h-10 w-10 -ml-3'
                  }
                >
                  <img
                    className="h-7 w-7 rounded-full"
                    src="../../images/social.svg"
                    alt=""
                  />
                </div>
                <div className="flex justify-evenly items-center ml-2">
                  <h1 className="text-xl">SOCIAL MEDIA</h1>
                </div>
              </div>
              <div className="flex  align-center border border-gray-300 rounded py-2 pl-2 mt-5">
                <img
                  src="../../images/calendar-event-fill.svg"
                  className="w-6 h-6 mx-2"
                  alt=""
                />
                <p className="pl-2">Dec 10, 2020 - Jan 9, 2021</p>
              </div>
              <div className="">
                <div className="flex justify-between pl-4 py-3 text-gray-400 font-semibold">
                  <p>Campaign</p>
                  <p className="font-normal text-black mr-2">22</p>
                </div>
                <div className="flex justify-between pl-4 py-3 text-gray-400 font-semibold">
                  <p>Total Audience</p>
                  <p className="font-normal text-black">1,500.00</p>
                </div>
                <div className="flex justify-between pl-4 py-3 text-gray-400 font-semibold">
                  <p>Budget</p>
                  <p className="font-normal text-black">-2,930.99XAF</p>
                </div>
                <div className="flex justify-between bg-gray-100 rounded py-8 px-4">
                  <p className="font-semibold">Engagements</p>
                  <p className="text-4xl font-bold">56,845</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded w-full m-2 flex justify-evenly items-center">
              <Chart
                series={options.series}
                options={options}
                type="area"
                width={420}
                height={350}
              />
            </div>
          </div>
          <div className="flex border border-gray-100 rounded-lg bg-white p-5">
            <div className=" m-2 w-1/3">
              <div className="flex items-center">
                <div
                  className={
                    'flex justify-evenly items-center bg-gray-50 rounded-full h-10 w-10 -ml-3'
                  }
                >
                  <img className="h-7 w-7" src="../../images/file.svg" alt="" />
                </div>
                <div className="flex justify-evenly items-center ml-2">
                  <h1 className="text-xl">PRINT & DISPLAY</h1>
                </div>
              </div>
              <div className="flex  align-center border border-gray-300 rounded py-2 pl-2 mt-5">
                <img
                  src="../../images/calendar-event-fill.svg"
                  className="w-6 h-6 mx-2"
                  alt=""
                />
                <p className="pl-2">Dec 10, 2020 - Jan 9, 2021</p>
              </div>
              <div className="">
                <div className="flex justify-between pl-4 py-3 text-gray-400 font-semibold">
                  <p>Campaign</p>
                  <p className="font-normal text-black mr-2">22</p>
                </div>
                <div className="flex justify-between pl-4 py-3 text-gray-400 font-semibold">
                  <p>Total Audience</p>
                  <p className="font-normal text-black">1,500.00</p>
                </div>
                <div className="flex justify-between pl-4 py-3 text-gray-400 font-semibold">
                  <p>Budget</p>
                  <p className="font-normal text-black">-2,930.99XAF</p>
                </div>
                <div className="flex justify-between bg-gray-100 rounded py-8 px-4">
                  <p className="font-semibold">Engagements</p>
                  <p className="text-4xl font-bold">2,564</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded w-full m-2 flex justify-evenly items-center">
              <Chart
                series={options.series}
                options={options}
                type="area"
                width={420}
                height={350}
              />
            </div>
          </div>
          <div className="flex border border-gray-100 rounded-lg bg-white p-5">
            <div className=" m-2 w-1/3">
              <div className="flex items-center">
                <div
                  className={
                    'flex justify-evenly items-center bg-gray-50 rounded-full h-10 w-10 -ml-3'
                  }
                >
                  <img
                    className="h-7 w-7"
                    src="../../images/calendar 1.svg"
                    alt=""
                  />
                </div>
                <div className="flex justify-evenly items-center ml-2">
                  <h1 className="text-xl">EVENTS & SPONSORSHIP</h1>
                </div>
              </div>
              <div className="flex  align-center border border-gray-300 rounded py-2 pl-2 mt-5">
                <img
                  src="../../images/calendar-event-fill.svg"
                  className="w-6 h-6 mx-2"
                  alt=""
                />
                <p className="pl-2">Dec 10, 2020 - Jan 9, 2021</p>
              </div>
              <div className="">
                <div className="flex justify-between pl-4 py-3 text-gray-400 font-semibold">
                  <p>Campaign</p>
                  <p className="font-normal text-black mr-2">22</p>
                </div>
                <div className="flex justify-between pl-4 py-3 text-gray-400 font-semibold">
                  <p>Total Audience</p>
                  <p className="font-normal text-black">1,500.00</p>
                </div>
                <div className="flex justify-between pl-4 py-3 text-gray-400 font-semibold">
                  <p>Budget</p>
                  <p className="font-normal text-black">-2,930.99XAF</p>
                </div>
                <div className="flex justify-between bg-gray-100 rounded py-8 px-4">
                  <p className="font-semibold">Engagements</p>
                  <p className="text-4xl font-bold">56,845</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded w-full m-2 flex justify-evenly items-center">
              <Chart
                series={options.series}
                options={options}
                type="area"
                width={420}
                height={350}
              />
            </div>
          </div>
          <div className="flex border border-gray-100 rounded-lg bg-white p-5">
            <div className=" m-2 w-1/3">
              <div className="flex items-center">
                <div
                  className={
                    'flex justify-evenly items-center bg-gray-50 rounded-full h-10 w-10 -ml-3'
                  }
                >
                  <img
                    className="h-7 w-7"
                    src="../../images/chat-line.svg"
                    alt=""
                  />
                </div>
                <div className="flex justify-evenly items-center ml-2">
                  <h1 className="text-xl">TELEMARKETING ETC...</h1>
                </div>
              </div>
              <div className="flex  align-center border border-gray-300 rounded py-2 pl-2 mt-5">
                <img
                  src="../../images/calendar-event-fill.svg"
                  className="w-6 h-6 mx-2"
                  alt=""
                />
                <p className="pl-2">Dec 10, 2020 - Jan 9, 2021</p>
              </div>
              <div className="">
                <div className="flex justify-between pl-4 py-3 text-gray-400 font-semibold">
                  <p>Campaign</p>
                  <p className="font-normal text-black mr-2">22</p>
                </div>
                <div className="flex justify-between pl-4 py-3 text-gray-400 font-semibold">
                  <p>Total Audience</p>
                  <p className="font-normal text-black">1,500.00</p>
                </div>
                <div className="flex justify-between pl-4 py-3 text-gray-400 font-semibold">
                  <p>Budget</p>
                  <p className="font-normal text-black">-2,930.99XAF</p>
                </div>
                <div className="flex justify-between bg-gray-100 rounded py-8 px-4">
                  <p className="font-semibold">Engagements</p>
                  <p className="text-4xl font-bold">7125</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded w-full m-2 flex justify-evenly items-center">
              <Chart
                series={options.series}
                options={options}
                type="area"
                width={420}
                height={350}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
