import React, { FC } from 'react';

import Filter from './filter';

interface Lead {
  fullname: string;
  phoneNumber: string;
  email: string;
  company: string;
  stage: string;
}

const Leads: FC = () => {
  const leads: Lead[] = [
    {
      fullname: 'Ako Akingston',
      phoneNumber: '+237 65 85 74 95',
      email: 'ako.aking@gmail.com',
      company: 'APC Company',
      stage: 'view',
    },
    {
      fullname: 'Paola Amos Ngwa',
      phoneNumber: '+237 65 85 74 95',
      email: 'paola@gmail.com',
      company: 'Kingston & Sons Co. Ltd',
      stage: 'view',
    },
    {
      fullname: 'Elon Musk',
      phoneNumber: '+237 65 85 74 95',
      email: 'elon.muskg@gmail.com',
      company: '',
      stage: '',
    },
    {
      fullname: 'Kinsley Mufasa',
      phoneNumber: '+237 65 85 74 95',
      email: 'mufasa.kinsley@gmail.com',
      company: 'Dominica Pty Systems',
      stage: 'view',
    },
    // More people...
  ];

  return (
    <div className="mt-10">
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <div className="leads flex">
          <h1 className="text-4xl">Leads</h1>
          <div className="flex justify-evenly rounded-lg font-semibold text-gray-500 ml-10">
            <input
              type="month"
              name=""
              id=""
              className="rounded-lg border border-gray-200 w-full px-2  outline-none"
            />
          </div>
        </div>

        <div className="flex justify-between mt-5">
          <div className="flex w-3/4 items-center gap-2">
            {leads.length >= 10 ? (
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
                placeholder="Search Callers..."
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
                  className="py-3.5 pl-4 pr-3 text-left text-xl font-bold text-gray-900 sm:pl-0"
                >
                  Fullname
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-xl font-bold text-gray-900 sm:pl-0"
                >
                  Telephone
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-xl font-bold text-gray-900 text-left"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-xl font-bold text-gray-900 text-left"
                >
                  Company
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-xl font-bold text-gray-900 text-left"
                >
                  Stage
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {leads.map((lead) => (
                <tr key={lead.fullname} className="py-4 font-semibold">
                  <td className="whitespace-nowrap px-3 py-3 text-lg text-gray-500 text-left">
                    {lead.fullname}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-4 pr-3 text-lg sm:pl-0 text-center">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img
                          className="h-10 w-10"
                          src="../../images/cmr-flag.svg"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="font-semibold text-gray-500">
                          {lead.phoneNumber}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 text-lg text-gray-500 text-left">
                    {lead.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 text-lg text-gray-500 text-left">
                    {lead.company}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 text-lg text-gray-500 text-left">
                    {lead.stage}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leads;
