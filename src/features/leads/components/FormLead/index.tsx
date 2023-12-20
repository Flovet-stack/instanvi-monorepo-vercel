import { Transition, Dialog } from '@headlessui/react';
import React, { Fragment } from 'react';

import { FormLeads } from '../../types';

export default function FormLeads(props: FormLeads) {
  const { newLead, setNewLead } = props;

  return (
    <Transition.Root show={newLead} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setNewLead(newLead)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white  px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                <div
                  className="absolute right-0 top-0 m-4 text-3xl cursor-pointer"
                  onClick={() => setNewLead(false)}
                >
                  <i className="ri-close-circle-line text-gray-700"></i>
                </div>
                <center>
                  <h2 className="text-2xl">New Lead</h2>
                </center>
                <div className="mt-5">
                  <hr />
                  <div className="flex flex-col m-4">
                    <div className="w-full mb-3 flex gap-2">
                      <div className="w-full">
                        <span className="mb-3 ">First Name</span>
                        <input
                          type="text"
                          className="w-full py-2 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                          placeholder=""
                          value={'First name'}
                        />
                      </div>
                      <div className="w-full">
                        <span className="mb-3 ">Last Name</span>
                        <input
                          name=""
                          type="text"
                          className="w-full py-2 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                          placeholder=""
                          value={'Last name'}
                        />
                      </div>
                    </div>

                    <div className="w-full mb-3">
                      <span className="mb-3 ">Company</span>
                      <input
                        name=""
                        type="text"
                        className="w-full py-2.5 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                        placeholder=""
                        value={'Company'}
                      />
                    </div>

                    <div className="w-full mb-3 flex gap-2">
                      <div className="w-full">
                        <span className="mb-3 ">Telephone</span>
                        <input
                          type="text"
                          className="w-full py-2 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                          placeholder=""
                          value={'+237 685999872'}
                        />
                      </div>
                      <div className="w-full">
                        <span className="mb-3 ">Email</span>
                        <input
                          name=""
                          type="text"
                          className="w-full py-2 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                          placeholder=""
                          value={'Email@gmail.com'}
                        />
                      </div>
                    </div>

                    <div className="w-full mb-3 flex gap-2">
                      <div className="w-full">
                        <span className="mb-3 ">Closing Date</span>
                        <input
                          type="date"
                          className="w-full py-2 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                          placeholder=""
                          value={''}
                        />
                      </div>
                      <div className="w-full">
                        <span className="mb-3 ">Member since</span>
                        <select
                          name=""
                          id=""
                          className="w-full py-2.5 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                        >
                          <option value="NEW">NEW</option>
                        </select>
                      </div>
                    </div>

                    <div className="w-full mb-3">
                      <span className="mb-3 ">Comment</span>
                      <textarea
                        name=""
                        id=""
                        cols={30}
                        rows={4}
                        className="w-full py-2.5 pl-4 border border-gray-200 rounded-lg outline-none mt-2 text-black"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="mt-8 w-full">
                  <hr />
                  <div className="flex justify-end mt-5">
                    <button
                      id="button"
                      className="rounded bg-green-500 text-white px-4 py-2.5 "
                    >
                      Proceed
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
