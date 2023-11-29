import dynamic from "next/dynamic";
import React, { FC } from 'react';
import Chart from "react-apexcharts";

interface Options {
  series: {
    name: string;
    data: number[];
  }[];
  chart: {
    height: number;
    type: string;
    dropShadow: {
      enabled: boolean;
      color: string;
      top: number;
      left: number;
      blur: number;
      opacity: number;
    };
    toolbar: {
      show: boolean;
    };
  };
  colors: string[];
  dataLabels: {
    enabled: boolean;
  };
  stroke: {
    curve: string;
    width: string;
  };
  grid: {
    borderColor: string;
    row: {
      colors: string[];
      opacity: number;
    };
  };
  xaxis: {
    categories: string[];
    title: {
      text: string;
    };
  };
  yaxis: {
    title: {
      text: string;
    };
    min: number;
    max: number;
  };
  legend: {
    position: string;
    horizontalAlign: string;
    floating: boolean;
    offsetY: number;
    offsetX: number;
  };
}

const options: Options = {
  series: [
    {
      name: "High - 2013",
      data: [14, 12, 12, 13, 14, 15, 12]
    },
  ],
  chart: {
    height: 400,
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    toolbar: {
      show: true
    }
  },
  colors: ['#77B6EA', '#545454'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    width: "1"
  },
  grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#f3f3f3', 'transparent'],
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    title: {
      text: 'Month'
    }
  },
  yaxis: {
    title: {
      text: 'Temperature'
    },
    min: 10,
    max: 16
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -20,
    offsetX: -5
  }
};

const Tools2: FC = () => {
  return (
    <div className="mt-10">
      <div className={`grid grid-cols-2 gap-4 mt-8   mb-20`}>
        <div className="border border-gray-100 rounded-lg bg-white p-5">
          <div className="flex justify-between">
            <div className="flex items-center  ml-4">
              <p className="font-bold text-xl">CALLS</p>
              <div className="  rounded-lg font-semibold text-gray-500 ml-10">
                <input
                  type="month"
                  name=""
                  id=""
                  className="rounded-lg bg-white border border-gray-200 py-1.5 w-4/5 px-2 outline-none"
                />
              </div>
            </div>

            <div className="flex gap-2 mr-2">
              <div className="flex justify-evenly px-2">
                <div className="bg-blue-400 w-2 h-2 rounded-full mt-3 mr-2"></div>
                <div>
                  <p className="text-xl">Numbers</p>
                  <p className="text-lg font-bold">02</p>
                </div>
              </div>
              <div className="flex justify-evenly px-2">
                <div className="bg-blue-400 w-2 h-2 rounded-full mt-3 mr-2"></div>
                <div>
                  <p className="text-xl">Dials</p>
                  <p className="text-lg font-bold">1,065</p>
                </div>
              </div>
              <div className="flex justify-evenly px-2">
                <div className="bg-green-400 w-2 h-2 rounded-full mt-3 mr-2"></div>
                <div>
                  <p className="text-xl">Connections</p>
                  <p className="text-lg font-bold">3,902</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded mt-3 h-72 flex justify-evenly items-center">
            <Chart
              series={options.series}
              options={options}
              type="line"
              height={260}
              width={620}
            />
          </div>
        </div>
        <div className="border border-gray-100 rounded-lg bg-white p-5">
          <div className="flex justify-between">
            <div className="flex items-center  ml-4">
              <p className="text-2xl font-bold">USSD CODES</p>
              <div className="  rounded-lg font-semibold text-gray-500 ml-10">
                <input
                  type="month"
                  name=""
                  id=""
                  className="rounded-lg bg-white border border-gray-200 py-1.5 w-4/5 px-2 outline-none"
                />
              </div>
            </div>

            <div className="flex gap-2 mr-2">
              <div className="flex justify-evenly px-2">
                <div className="bg-blue-400 w-2 h-2 rounded-full mt-3 mr-2"></div>
                <div>
                  <p className="text-xl">Application</p>
                  <p className="text-lg font-bold">02</p>
                </div>
              </div>
              <div className="flex justify-evenly px-2">
                <div className="bg-blue-400 w-2 h-2 rounded-full mt-3 mr-2"></div>
                <div>
                  <p className="text-xl">Refferes</p>
                  <p className="text-lg font-bold">1,065</p>
                </div>
              </div>
              <div className="flex justify-evenly px-2">
                <div className="bg-green-400 w-2 h-2 rounded-full mt-3 mr-2"></div>
                <div>
                  <p className="text-xl">Total Links</p>
                  <p className="text-lg font-bold">3,902</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded mt-3 h-72 flex justify-evenly items-center">
            <Chart
              series={options.series}
              options={options}
              type="line"
              height={260}
              width={620}
            />
          </div>
        </div>
        <div className="border border-gray-100 rounded-lg bg-white p-5">
          <div className="flex justify-between">
            <div className="flex items-center  ml-4">
              <p className="text-2xl font-bold">LINKS</p>
              <div className="  rounded-lg font-semibold text-gray-500 ml-10">
                <input
                  type="month"
                  name=""
                  id=""
                  className="rounded-lg bg-white border border-gray-200 py-1.5 w-4/5 px-2 outline-none"
                />
              </div>
            </div>

            <div className="flex gap-2 mr-2">
              <div className="flex justify-evenly px-2">
                <div className="bg-orange-400 w-2 h-2 rounded-full mt-3 mr-2"></div>
                <div>
                  <p className="text-xl">Campaigns</p>
                  <p className="text-lg font-bold">11</p>
                </div>
              </div>
              <div className="flex justify-evenly px-2">
                <div className="bg-blue-400 w-2 h-2 rounded-full mt-3 mr-2"></div>
                <div>
                  <p className="text-xl">reffered</p>
                  <p className="text-lg font-bold">1,065</p>
                </div>
              </div>
              <div className="flex justify-evenly px-2">
                <div className="bg-green-400 w-2 h-2 rounded-full mt-3 mr-2"></div>
                <div>
                  <p className="text-xl">Total leads</p>
                  <p className="text-lg font-bold">3,902</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded mt-3 h-72 flex justify-evenly items-center">
            <Chart
              series={options.series}
              options={options}
              type="line"
              height={260}
              width={620}
            />
          </div>
        </div>
        <div className="border border-gray-100 rounded-lg bg-white p-5">
          <div className="flex justify-between">
            <div className="flex items-center  ml-4">
              <p className="text-2xl font-bold">GIVEAWAYS</p>
              <div className="  rounded-lg font-semibold text-gray-500 ml-10">
                <input
                  type="month"
                  name=""
                  id=""
                  className="rounded-lg bg-white border border-gray-200 py-1.5 w-4/5 px-2 outline-none"
                />
              </div>
            </div>

            <div className="flex gap-2 mr-2">
              <div className="flex justify-evenly px-2">
                <div className="bg-orange-400 w-2 h-2 rounded-full mt-3 mr-2"></div>
                <div>
                  <p className="text-xl">Campaigns</p>
                  <p className="text-lg font-bold">11</p>
                </div>
              </div>
              <div className="flex justify-evenly px-2">
                <div className="bg-blue-400 w-2 h-2 rounded-full mt-3 mr-2"></div>
                <div>
                  <p className="text-xl">Visitors</p>
                  <p className="text-lg font-bold">1,065</p>
                </div>
              </div>
              <div className="flex justify-evenly px-2">
                <div className="bg-green-400 w-2 h-2 rounded-full mt-3 mr-2"></div>
                <div>
                  <p className="text-xl">Enteries</p>
                  <p className="text-lg font-bold">3,902</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded mt-3 h-72 flex justify-evenly items-center">
            <h1>Chart</h1>
          </div>
        </div>
        <div className="border border-gray-100 rounded-lg bg-white p-5">
          <div className="flex justify-between">
            <div className="flex items-center  ml-4">
              <p className="text-2xl font-bold">FORMS</p>
              <div className="  rounded-lg font-semibold text-gray-500 ml-10">
                <input
                  type="month"
                  name=""
                  id=""
                  className="rounded-lg bg-white border border-gray-200 py-1.5 w-4/5 px-2 outline-none"
                />
              </div>
            </div>

            <div className="flex gap-2 mr-2">
              <div className="flex justify-evenly px-2">
                <div className="bg-orange-400 w-2 h-2 rounded-full mt-3 mr-2"></div>
                <div>
                  <p className="text-xl">Campaigns</p>
                  <p className="text-lg font-bold">02</p>
                </div>
              </div>
              <div className="flex justify-evenly px-2">
                <div className="bg-blue-400 w-2 h-2 rounded-full mt-3 mr-2"></div>
                <div>
                  <p className="text-xl">Visitors</p>
                  <p className="text-lg font-bold">1,065</p>
                </div>
              </div>
              <div className="flex justify-evenly px-2">
                <div className="bg-green-400 w-2 h-2 rounded-full mt-3 mr-2"></div>
                <div>
                  <p className="text-xl">Submissions</p>
                  <p className="text-lg font-bold">3,902</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded mt-3 h-72 flex justify-evenly items-center">
            <h1>Chart</h1>
          </div>
        </div>
        <div className="border border-gray-100 rounded-lg bg-white p-5">
          <div className="flex justify-between">
            <div className="flex items-center w-1/6 ml-4">
              <p>Total leads vs Reffered leads</p>
            </div>

            <div className="flex w-1/2 gap-2 mr-2">
              <div className="flex justify-evenly px-2">
                <div className="bg-blue-400 w-2 h-2 rounded-full mt-3 mr-2"></div>
                <div>
                  <p className="text-xl">Reffered</p>
                  <p className="text-lg font-bold">1,065</p>
                </div>
              </div>
              <div className="flex justify-evenly px-2">
                <div className="bg-green-400 w-2 h-2 rounded-full mt-3 mr-2"></div>
                <div>
                  <p className="text-xl">Total leads</p>
                  <p className="text-lg font-bold">3,902</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded mt-3 h-72 flex justify-evenly items-center">
            <h1>Chart</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools2;