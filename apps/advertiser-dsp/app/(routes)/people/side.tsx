import { useState } from 'react';
import { Transition, Popover } from '@headlessui/react';
import { Fragment } from 'react';

export default function PeopleSide() {
  const [addSegment, setAddSegment] = useState(false);

  function AddTag() {
    return (
      <Popover className="relative">
        <Popover.Button>
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <i
            className="text-md text-green-500 ri-add-circle-line cursor-pointer"
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
          <Popover.Panel className="absolute right-10 -bottom-10 z-10 w-[300px] rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className=" flex flex-col rounded bg-white  leading-6 shadow-lg ring-1 ring-gray-900/5">
              <center className="p-2">
                <h2 className="text-lg">Add Tag</h2>
              </center>
              <hr />
              <div className="p-2 text-gray-400">
                <div className="flex justify-between">
                  <label htmlFor="" className="text-black">
                    Tag name
                  </label>
                </div>
                <input
                  className="w-full py-2 border rounded mt-2 outline-none pl-2 text-black-900 text-black"
                  type="text"
                  onChange={(e) => {}}
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
                  className="w-full py-2.5 pl-2 border border-gray-200 rounded-lg outline-none mt-2 text-black"
                  placeholder="Describe the tag"
                  onChange={(e) => {}}
                ></textarea>
              </div>
              <div className="w-full">
                <hr />
                <div className="flex justify-end p-2">
                  <button
                    id="button"
                    className="rounded bg-green-500 text-white px-4 py-2 cursor-pointer"
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
  }

  const HandleAddSegment = () => {
    setAddSegment(!addSegment);
  };
  return (
    <div className="relative border-r">
      <div className={`${addSegment ? 'hidden' : 'flex'} flex-col w-full`}>
        <div className="flex flex-col items-center m-5 h-1/2">
          <div className="w-full">
            <div className="flex justify-between text-lg border-b border-black w-full mb-2 text-center">
              Segments
              <i
                className="text-md text-green-500 ri-add-circle-line cursor-pointer"
                title="Add Segmant"
                onClick={() => HandleAddSegment()}
              ></i>
            </div>
            <div className="relative focus-within:z-10 w-full justify-evenly bg-white rounded-lg">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <i className="ri-search-line text-md"></i>
              </div>
              <input
                type="search"
                name="search"
                id="search"
                className="block w-full rounded-lg py-2.5 pl-10 text-gray-900 outline-none border"
                placeholder="Search"
              />
            </div>
          </div>

          <div className="w-full flex flex-col p-2 gap-2 scrollbars overflow-y-auto h-3/4">
            <div className="flex justify-between text-md border rounded-lg p-2">
              Adults{' '}
              <span className="text-rigth bg-gray-200 rounded-xl text-gray-400 px-2 py-1.5">
                25
              </span>
            </div>
            <div className="flex justify-between text-md border rounded-lg p-2">
              Students{' '}
              <span className="text-rigth bg-gray-200 rounded-xl text-gray-400 px-2 py-1.5">
                110
              </span>
            </div>
            <div className="flex justify-between text-md border rounded-lg p-2">
              Employees{' '}
              <span className="text-rigth bg-gray-200 rounded-xl text-gray-400 px-2 py-1.5">
                250
              </span>
            </div>
            <div className="flex justify-between text-md border rounded-lg p-2">
              Employees{' '}
              <span className="text-rigth bg-gray-200 rounded-xl text-gray-400 px-2 py-1.5">
                250
              </span>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col items-center m-5 h-1/2">
          <div className="w-full">
            <div className="flex justify-between text-lg border-b border-black w-full mb-2 text-center">
              Tags
              <AddTag />
            </div>
            <div className="relative focus-within:z-10 w-full justify-evenly bg-white rounded-lg">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <i className="fa fa-search" aria-hidden="true"></i>
              </div>
              <input
                type="search"
                name="search"
                id="search"
                className="block w-full rounded-lg py-2.5 pl-10 text-gray-900 outline-none border"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="w-full flex flex-col p-2 gap-2 scrollbars overflow-y-auto h-3/4">
            {/* {props.data.map((tag, index) => (
              <div className="flex justify-between text-md border rounded-lg p-2">
                {tag.tag}
                <span className="text-rigth bg-gray-200 rounded-xl text-gray-400 px-2 py-1.5">
                  {tag.count}
                </span>
              </div>
            ))} */}
            <div className="flex justify-between text-md border rounded-lg p-2">
              Hair{' '}
              <span className="text-rigth bg-gray-200 rounded-xl text-gray-400 px-2 py-1.5">
                25
              </span>
            </div>
            <div className="flex justify-between text-md border rounded-lg p-2">
              Cars{' '}
              <span className="text-rigth bg-gray-200 rounded-xl text-gray-400 px-2 py-1.5">
                110
              </span>
            </div>
            <div className="flex justify-between text-md border rounded-lg p-2">
              Developer{' '}
              <span className="text-rigth bg-gray-200 rounded-xl text-gray-400 px-2 py-1.5">
                250
              </span>
            </div>
          </div>
        </div>

        <div className="h-10"></div>
      </div>

      <div
        className={`${
          addSegment ? 'flex' : 'hidden'
        } flex-col w-full border h-screen`}
      >
        <div className="flex flex-col mt-5 mb-20 mx-2">
          <div className="mt-2 flex justify-start">
            <button
              id="button"
              className="flex gap-2 bg-green-500 px-2 text-white rounded mb-5 items-center justify-evenly cursor-pointer"
              onClick={() => HandleAddSegment()}
            >
              <i className="text-md ri-arrow-left-line cursor-pointer"></i>
              Back
            </button>
          </div>

          <div className="mb-4 text-gray-400">
            <label htmlFor="" className="text-black">
              Create Segment
            </label>
            <input
              className="w-full py-2.5 border rounded mt-5 outline-none pl-3 text-black-900 text-black"
              type="text"
              value=""
              placeholder="Tag name"
            />
          </div>
          <div className="mb-4 text-gray-400">
            <label htmlFor="" className="text-black">
              Date added
            </label>
            <div className="mt-3">
              <span className="">Member since</span>
              <select
                name=""
                className="w-full py-2.5 pl-4 border border-gray-200 rounded-lg outline-none text-black"
                value=""
              >
                <option value="11/10/20">11/10/20</option>
              </select>
            </div>
            <div className="mt-3">
              <span className="">Till</span>
              <select
                name=""
                className="w-full py-2.5 pl-4 border border-gray-200 rounded-lg outline-none text-black"
                value=""
              >
                <option value="11/10/20">11/10/20</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <span className="">Birth day</span>
            <select
              name=""
              className="w-full py-2.5 pl-4 border border-gray-200 rounded-lg outline-none"
              value=""
            >
              <option value="11">11</option>
            </select>
            <div className="flex flex-wrap gap-1 mt-2">
              <div className="flex justify-betweenitems-center bg-gray-300 rounded py-1 px-2 gap-2">
                11/23
                <i className="ri-close-line cursor-pointer"></i>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <span className="">Birth month</span>
            <select
              name=""
              className="w-full py-2.5 pl-4 border border-gray-200 rounded-lg outline-none"
              value=""
            >
              <option value="oct">oct</option>
            </select>
            <div className="flex flex-wrap gap-1 mt-2">
              <div className="flex justify-betweenitems-center bg-gray-300 rounded py-1 px-2 gap-2">
                oct
                <i className="ri-close-line cursor-pointer"></i>
              </div>
              <div className="flex justify-betweenitems-center bg-gray-300 rounded py-1 px-2 gap-2">
                sep
                <i className="ri-close-line cursor-pointer"></i>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <span className="">Birth year</span>
            <select
              name=""
              className="w-full py-2.5 pl-4 border border-gray-200 rounded-lg outline-none"
              value=""
            >
              <option value="2013">2013</option>
            </select>
            <div className="flex flex-wrap gap-1 mt-2">
              <div className="flex justify-betweenitems-center bg-gray-300 rounded py-1 px-2 gap-2">
                2013
                <i className="ri-close-line cursor-pointer"></i>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <span className="">Gender</span>
            <select
              name=""
              className="w-full py-2.5 pl-4 border border-gray-200 rounded-lg outline-none"
              value=""
            >
              <option value="Male">Male</option>
            </select>
            <div className="flex flex-wrap gap-1 mt-2">
              <div className="flex justify-betweenitems-center bg-gray-300 rounded py-1 px-2 gap-2">
                Male
                <i className="ri-close-line cursor-pointer"></i>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <span className="">Tags</span>
            <div className="relative focus-within:z-10 w-full justify-evenly bg-white rounded-lg">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <i className="ri-search-line text-md"></i>
              </div>
              <input
                type="search"
                name="search"
                id="search"
                className="block w-full rounded-lg py-2.5 pl-10 text-gray-900 outline-none border"
                placeholder="Search tags"
              />
            </div>
            <div className="flex flex-wrap gap-1 mt-2">
              <div className="flex justify-betweenitems-center bg-gray-300 rounded py-1 px-2 gap-2">
                Cars are cool
                <i className="ri-close-line cursor-pointer"></i>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <span className="">Location</span>
            <div className="relative focus-within:z-10 w-full justify-evenly bg-white rounded-lg">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <i className="ri-search-line text-md"></i>
              </div>
              <input
                type="search"
                name="search"
                id="search"
                className="block w-full rounded-lg py-2.5 pl-10 text-gray-900 outline-none border"
                placeholder="Enter location"
              />
            </div>
            <div className="flex flex-wrap gap-1 mt-2">
              <div className="flex justify-betweenitems-center bg-gray-300 rounded py-1 px-2 gap-2">
                Douala
                <i className="ri-close-line cursor-pointer"></i>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <span className="">Status</span>
            <select
              name=""
              className="w-full py-2.5 pl-4 border border-gray-200 rounded-lg outline-none"
              value=""
            >
              <option value="active">active</option>
              <option value="inactive">inactive</option>
            </select>
          </div>
          <div className="h-20"></div>
        </div>

        <div className="fixed bg-white bottom-0 w-[24.3%]">
          <div className="mt-5 flex justify-end mx-5">
            <button
              id="button"
              className="bg-green-500 p-3 text-white rounded mb-5 cursor-pointer"
            >
              Save segment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
