import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export const CreateTagModal = () => {
  return (
    <Popover className="relative">
      <Popover.Button>
        <i
          className="text-xl  text-green-500 ri-add-circle-line cursor-pointer"
          title="Add Tag"
          // onClick={}
        ></i>
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
        {/* <Popover.Panel className="absolute mt-5 flex justify-start w-screen max-w-max -translate-x-1/2 px-4 border left-0 "> */}
        <Popover.Panel className="absolute right-10 bottom-10 z-10 mt-2 w-screen max-w-max rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className=" flex flex-col rounded bg-white  leading-6 shadow-lg ring-1 ring-gray-900/5">
            <center className="p-2">
              <h2 className="text-2xl">Add Tag</h2>
            </center>
            <hr />
            <div className="p-2 text-gray-400">
              <div className="flex justify-between">
                <label htmlFor="" className="text-black">
                  Tag name
                </label>
              </div>
              <input
                className="w-full py-2.5 border rounded mt-2 outline-none pl-3 text-black-900 text-black"
                type="text"
              />
            </div>
            <div className="p-2 text-gray-400">
              <div className="flex justify-between">
                <label htmlFor="" className="text-black">
                  Description
                </label>
              </div>
              <textarea
                name=""
                id=""
                cols={30}
                rows={5}
                className="w-full py-2.5 pl-4 border border-gray-200 rounded-lg outline-none mt-2 text-black"
                placeholder="Describe the tag"
              ></textarea>
            </div>
            <div className="w-full">
              <hr />
              <div className="flex justify-end p-2">
                <button
                  id="button"
                  className="rounded bg-green-500 text-white px-4 py-2.5 cursor-pointer"
                >
                  Save Tag
                </button>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
