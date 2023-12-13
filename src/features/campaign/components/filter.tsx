import React, { FC } from 'react';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';

const Filter: FC = () => {
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 font-semibold leading-6 text-gray-900 text-md justify-center py-1.5 px-2 rounded active:bg-black active:text-white focus:bg-black focus:text-white ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
          />
        </svg>
        <span>Filter</span>
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-sm flex-auto overflow-hidden rounded bg-white  leading-6 shadow-lg ring-1 ring-gray-900/5">
            <form action="">
              <div className={'flex flex-col p-4'}>
                <h1>Filter</h1>
                <div className="flex gap-4">
                  <div className={'w-6/12'}>
                    <label
                      htmlFor="from-date"
                      className="block  font-medium leading-6 text-gray-900"
                    >
                      From
                    </label>
                    <div className="relative mt-2">
                      <input
                        type="date"
                        name="from-date"
                        id="from-date"
                        className="peer block w-full border-0 bg-gray-50 py-1.5 text-gray-900 focus:ring-0 sm: sm:leading-6 outline-none"
                      />
                    </div>
                  </div>
                  <div className={'w-6/12'}>
                    <label
                      htmlFor="to-date"
                      className="block  font-medium leading-6 text-gray-900"
                    >
                      To
                    </label>
                    <div className="relative mt-2">
                      <input
                        type="date"
                        name="to-date"
                        id="to-date"
                        className="peer block w-full border-0 bg-gray-50 py-1.5 text-gray-900 focus:ring-0 sm: sm:leading-6 outline-none"
                      />
                    </div>
                  </div>
                </div>
                <div className={'flex flex-col py-2'}>
                  <label htmlFor="transaction-type">Transaction Type</label>
                  <select
                    name="transaction-type"
                    id="transaction-type"
                    className={'p-2'}
                  >
                    <option value="payment">Payment</option>
                  </select>
                </div>
                <div className={'flex flex-col py-2'}>
                  <label htmlFor="service">Service</label>
                  <select name="service" id="service" className={'p-2'}>
                    <option value="billboard">Billboard</option>
                  </select>
                </div>
                <div className={'flex flex-col py-2'}>
                  <label htmlFor="currency">Currency</label>
                  <select name="currency" id="currency" className={'p-2'}>
                    <option value="FCFA">FCFA</option>
                  </select>
                </div>
                <div className={'flex flex-col py-2'}>
                  <button
                    type="submit"
                    className={'bg-black rounded text-white p-2'}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Filter;
