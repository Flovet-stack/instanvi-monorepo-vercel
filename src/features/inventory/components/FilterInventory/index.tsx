import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react';

export default function FilterInventory() {
  return (
    <div className="flex w-full mb-5">
      <div className="w-1/2 flex">
        <div className="relative w-full mr-2">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon
              className="h-5 w-5 text-gray-400 -mt-1"
              aria-hidden="true"
            />
          </div>
          <input
            id="search"
            name="search"
            className="block w-full rounded-md border-0 bg-white py-2 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  "
            placeholder="Search Units"
            type="search"
          />
        </div>
        <div className="px-3 border rounded mx-1">
          <select name="" id="" className="px-4 py-2 ">
            <option value="">All Channels</option>
          </select>
        </div>
        <div className="px-3 border rounded mx-1">
          <select name="" id="" className="px-4 py-2 ">
            <option value="">Pre Rolls</option>
          </select>
        </div>
        <div className="px-3 border rounded mx-1">
          <select name="" id="" className="px-4 py-2 ">
            <option value="">Video</option>
          </select>
        </div>
      </div>
      <div className="w-1/2 flex justify-end">
        <Link href={'./persona/new'}>
          <button className="text-white font-semibold text-lg py-1.5 bg-green-500 rounded px-5">
            New Ad Spot
          </button>
        </Link>
      </div>
    </div>
  );
}
