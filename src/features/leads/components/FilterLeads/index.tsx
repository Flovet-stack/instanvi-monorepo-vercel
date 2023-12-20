import React from 'react';

import { FilterLeads } from '../../types';

export default function FilterLeads(props: FilterLeads) {
  const { setFormat, setShowList, setNewLead, format, newLead } = props;

  return (
    <div className="flex justify-between items-center my-5">
      <div className="flex grow gap-4">
        <div className=" w-1/3">
          <div className="relative flex flex-grow items-stretch focus-within:z-10 w-full justify-evenly bg-white rounded-lg">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <i className="ri-search-line text-xl"></i>
            </div>
            <input
              type="search"
              name="search"
              id="search"
              className="block w-full rounded py-2.5 pl-10 text-gray-900 outline-none border"
              placeholder="Search units"
            />
          </div>
        </div>
        <div className=" grow flex gap-2">
          <select className="px-4 py-2.5 rounded-lg border border-gray-100 ">
            <option value="" className="bg-blue-500">
              All Camppaigns
            </option>
          </select>
          <select className="px-4 py-2.5 rounded-lg border border-gray-100 ">
            <option value="" className="bg-blue-500">
              All Laeds
            </option>
          </select>
          <select className="px-4 py-2.5 rounded-lg border border-gray-100 ">
            <option value="" className="bg-blue-500">
              Recent
            </option>
          </select>
        </div>
      </div>

      <div className="flex gap-4 justify-between items-center">
        <div className="flex border border-gray-500 divide-x divide-black rounded cursor-pointer bg-gray-100">
          <button
            className={`flex justify-evenly items-center py-1 px-2 rounded-l ${
              format == 'grid' ? 'bg-gray-100 text-green-500' : 'bg-white'
            }`}
            onClick={() => {
              setFormat('grid');
              setShowList(false);
            }}
          >
            <i className="ri-layout-grid-line text-xl"></i>
          </button>
          <button
            className={`flex justify-evenly items-center py-1 px-2 rounded-r ${
              format == 'list' ? 'bg-gray-100 text-green-500' : 'bg-white'
            }`}
            onClick={() => {
              setFormat('list');
              setShowList(true);
            }}
          >
            <i className="ri-list-check text-xl"></i>
          </button>
        </div>

        <button
          id="button"
          className="px-5 py-2.5 text-white bg-green-500 rounded-lg cursor-pointer"
          onClick={() => setNewLead(!newLead)}
        >
          New Lead
        </button>
      </div>
    </div>
  );
}
