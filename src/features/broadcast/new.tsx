import React, { FC, useState } from "react";
import Header from "../headers";
import { MultiSelect } from "react-multi-select-component";

interface Option {
  label: string;
  value: string;
}

const BroadCast: FC = () => {
  const options: Option[] = [
    { label: "657 854 232", value: "657 854 232" },
    { label: "6879 201 420", value: "6879 201 420" },
    { label: "699 741 250", value: "699 741 250" },
  ];

  const [selected, setSelected] = useState<Option[]>([]);

  return (
    <>
      <Header />
      <hr />

      <div className="w-full  flex justify-center py-12">
        <div className="w-2/4    ">
          <form className="mx-auto bg-white max-w-8xl w-full         px-4 sm:px-12 lg:px-12">
            <div className="mb-6">
              <label
                htmlFor="broadcast"
                className="block mb-2 text-md  text-gray-600"
              >
                Broadcast
              </label>
              <input
                type="text"
                id="default-input"
                className="placeholder border border-gray-200 outline-none text-md rounded-lg block w-full p-3"
                placeholder="End of year campaign"
              />
            </div>
            <div className="grid gap-2 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="select-channel"
                  className="block mb-2 text-md  text-gray-800"
                >
                  Select Channel
                </label>
                <select
                  className="form-select relative m-0 block w-full p-3 min-w-0 flex-auto text-base  font-normal leading-[1.6] border border-gray-200 text-md rounded-lg  outline-none"
                  id="inputGroupSelect01"
                >
                  <option selected="">SMS</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="sender-name"
                  className="block mb-2 text-md  text-gray-600"
                >
                  Sender Name
                </label>
                <select
                  className="form-select relative m-0 block w-full p-3 min-w-0 flex-auto text-base font-normal leading-[1.6] text-black border border-gray-200 text-md rounded-lg  outline-none"
                  id="inputGroupSelect01"
                >
                  <option selected="">My Campaign</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-md  text-gray-600"
              >
                Message Body ( Add variables in curly brackets {"{"}
                {"{"}
                {"}"}
                {"}"} )
              </label>
              <textarea
                id="message"
                rows={4}
                className="block p-3 w-full text-md items-center rounded-lg border border-gray-200 outline-none"
                placeholder="SMS"
                defaultValue={""}
              />
            </div>
            <div className="grid gap-2 mb-6 mt-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-md  text-gray-600"
                >
                  Schedule Delivery Time
                </label>
                <input
                  type="date"
                  className="relative min-w-0 flex-auto border border-gray-200 text-md rounded-lg outline-none block w-full py-2.5 px-4 placeholder-black"
                  placeholder="Now"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-md  text-gray-600"
                >
                  Audience
                </label>
                <select
                  className="form-select relative block w-full py-3 px-4 min-w-0 flex-auto text-base font-normal leading-[1.6] border border-gray-200 text-black text-md rounded-lg  outline-none"
                  id="inputGroupSelect01"
                >
                  <option selected="">Phone Numbers</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </div>
            </div>
            <div className="">
              <label
                htmlFor="receiver"
                className="block mb-2 text-md  text-gray-600"
              >
                Receiver (Press enter to add multiple contacts)
              </label>
              <MultiSelect
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
                className=""
              />
            </div>
            <div className="relative flex justify-end items-center mt-6">
              <button
                type="button"
                id="button"
                className="px-16 py-2.5 rounded-lg bg-blue-500 hover:bg-blue-400 text-white text-md font-semibold leading-tight flex"
              >
                <span>Publish</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BroadCast;