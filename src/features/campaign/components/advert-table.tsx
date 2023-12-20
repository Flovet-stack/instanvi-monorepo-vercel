import Link from 'next/link';
import React, { FC } from 'react';

import Filter from './filter';

interface Advert {
  id: number;
  campaignName: string;
  tool: string;
  impressions: string;
  reach: string;
  cpm: string;
  egt: string;
  cpa: string;
  progress: string;
  spend: string;
  status: string;
}

const adverts: Advert[] = [
  // More people...
];

const AdvertTable: FC = () => {
  // const data = useContext(AuthContext);

  // const handleTransaction = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   if(data) data.setTransaction('Transaction');
  // };

  return (
    <div className="basis-1/3 my-8 bg-white rounded p-8">
      <div className="">
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <div className="leads flex">
            <h1 className="text-4xl">All Campaigns</h1>
            <div className="flex justify-evenly rounded-lg font-semibold text-gray-500 ml-10">
              <select
                name=""
                id=""
                className="rounded-lg border border-gray-200 w-full px-2 outline-none"
              >
                <option value="">Daily</option>
                <option value="">Weekly</option>
                <option value="">Monthly</option>
                <option value="">Annual</option>
              </select>
            </div>
          </div>

          <div className="flex justify-between mt-5">
            <div className="flex w-3/4 items-center gap-2">
              {adverts.length >= 10 ? (
                <div>
                  <Filter />
                </div>
              ) : (
                <div
                  onClick={() => alert('Not enough data to filter')}
                  className="cursor-pointer filter flex justify-evenly border border-gray-200 h-5 px-3 py-4 items-center rounded-lg "
                >
                  <img src="../../images/filter.svg" alt="" className="pr-2" />
                  <p className="pr-2">Filter</p>
                </div>
              )}
              <div className="sort flex justify-evenly border border-gray-200 h-5 px-3 py-4 items-center rounded-lg">
                <img src="../../images/sort.svg" alt="" className="pr-2" />
                <p className="pr-2">Sort</p>
              </div>
              <div className="relative flex flex-grow items-stretch focus-within:z-10 w-full">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  name="search"
                  id="search"
                  className="block w-3/4 rounded py-3 pl-10 text-gray-900 outline-none"
                  placeholder="Search Disputes.."
                />
              </div>
            </div>

            <button className="flex justify-between items-center bg-blue-100 rounded p-2 text-blue-500">
              <h1 className="px-2">Download Report</h1>
              <img src="../../images/download-5.svg" alt="" className="px-2" />
            </button>
          </div>

          <div className="mt-5 ml-3 overflow-x-auto">
            <table className={`min-w-full divide-y divide-gray-300 `}>
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-center text-xl font-bold text-gray-900 sm:pl-0"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-xl font-bold text-gray-900 text-left"
                  >
                    Campaign Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-xl font-bold text-gray-900 text-left"
                  >
                    Tool
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-xl font-bold text-gray-900 text-left"
                  >
                    Impressions
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-xl font-bold text-gray-900 text-left"
                  >
                    Reach
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-xl font-bold text-gray-900 text-left"
                  >
                    CPM
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-xl font-bold text-gray-900 text-left"
                  >
                    Egt
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-xl font-bold text-gray-900 text-left"
                  >
                    CPA
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-xl font-bold text-gray-900 text-center"
                  >
                    Progress
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-xl font-bold text-gray-900 text-center"
                  >
                    Spend
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-xl font-bold text-gray-900 text-left"
                  >
                    Status
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td>1</td>
                  <td>Huster</td>
                  <td>Hey</td>
                  <td>Gusy</td>
                  <td>1234</td>
                  <td>Sorry</td>
                  <td>Good</td>
                  <td>1234</td>
                  <td>night </td>
                  <td>Darling</td>
                  <td>1234</td>
                  <td>
                    <Link href={'Campaign/calender'}>
                      <button className="py-1 px-4 bg-green-500 text-white">
                        View
                      </button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertTable;
