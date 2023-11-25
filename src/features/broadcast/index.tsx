import React, { FC } from 'react';
import { Fragment } from 'react';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';

interface IBroadcast {
  id: number;
  broadCastName: string;
  channel: string;
  audience: string;
  profiles: number;
  reactions: number;
  deliceryStatus: string;
}

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

const Broadcast: React.FC = () => {
  const broadCast: IBroadcast[] = [
    {
      id: 1,
      broadCastName: 'School in Douala',
      channel: 'SMS',
      audience: 'Custom',
      profiles: 22,
      reactions: 14,
      deliceryStatus: 'Scheduled',
    },
    {
      id: 2,
      broadCastName: 'New 2020 Campaign',
      channel: 'SMS',
      audience: 'Custom',
      profiles: 88,
      reactions: 25,
      deliceryStatus: '11 Oct 2023',
    },
  ];

  return (
    <div>
      {/* <Header /> */}
      <hr />
      <div className="mt-5 md:col-span-2 md:mt-0">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center p-4 mt-6">
            <div className="sm:flex-auto">
              <div>
                <div className="relative flex flex-grow items-stretch focus-within:z-10">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <i className="text-2xl ri-search-line"></i>
                  </div>
                  <input
                    type="search"
                    name="search"
                    id="search"
                    className="block w-96 rounded py-2.5 pl-10 text-gray-900 outline-none border"
                    placeholder="Search form"
                  />
                </div>
              </div>
            </div>
            <div className={`mt-4 sm:mt-0 sm:ml-16 sm:flex-none px-2`}>
              <Link href={'/publisher/Broadcast/new'}>
                <button
                  id="button"
                  type="button"
                  className="cursor-pointer rounded-md p-8 py-2.5 flex bg-green-500 px-4 items-center text-white shadow-sm gap-3"
                >
                  <i className="text-2xl ri-add-line"></i>
                  <p className="">New Broadcast</p>
                </button>
              </Link>
            </div>
          </div>

          <div className="mt-8 flow-root p-4">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className={`min-w-full divide-y divide-gray-300`}>
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-lg  text-gray-900 sm:pl-0"
                      >
                        Broad Cast Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-lg  text-gray-900 text-center"
                      >
                        Channel
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-lg  text-gray-900 text-center"
                      >
                        Audience
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-lg  text-gray-900 text-center"
                      >
                        Profiles
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-lg  text-gray-900 text-center"
                      >
                        Reactions
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-lg  text-gray-900 text-center"
                      >
                        Delivery status
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-lg  text-gray-900 text-center"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {broadCast.map((cast) => (
                      <tr key={cast.id} className="py-4 cursor-pointer">
                        <td className="whitespace-nowrap py-4   sm:pl-0 text-center">
                          <div className="flex text-lg  justify-begin ">
                            {cast.broadCastName}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4  text-gray-500 text-center">
                          <div className="text-lg">{cast.channel}</div>
                          {/*<div className="text-gray-500">{person.numberOfTimes}</div>*/}
                        </td>

                        <td className="whitespace-nowrap text-lg px-3 py-4  text-gray-500 text-center truncate">
                          {cast.audience}
                        </td>

                        <td className="whitespace-nowrap text-lg px-3 py-4  text-gray-500 text-center truncate">
                          {cast.profiles}
                        </td>

                        <td className="whitespace-nowrap text-lg px-3 py-4  text-gray-500 text-center truncate">
                          {cast.reactions}
                        </td>

                        <td className="whitespace-nowrap text-lg px-3 py-4  text-gray-500 text-center">
                          <span
                            className={`inline-flex rounded-lg px-2 ${
                              cast.deliceryStatus == 'Scheduled'
                                ? 'py-1.5 px-4 text-blue-500 border border-blue-500 bg-blue-100'
                                : ''
                            }`}
                          >
                            {cast.deliceryStatus}
                          </span>
                        </td>

                        <td className="whitespace-nowrap text-lg px-3 py-4  text-gray-500 text-center">
                          <Menu as="div" className=" inline-block text-left ">
                            <div>
                              <Menu.Button className="flex items-center  text-gray-400 hover:text-gray-600  ">
                                <span className="sr-only">Open options</span>
                                <EllipsisVerticalIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </Menu.Button>
                            </div>

                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="absolute md:right-8xl right-5xl -ml-16 z-50 mt-2 w-20 origin-top-right   bg-gray-300 text-white  ">
                                <div className="py-0">
                                  <Menu.Item>
                                    {({ active }) => (
                                      <a
                                        href="#"
                                        className={classNames(
                                          active
                                            ? 'bg-gray-300 text-gray-100 '
                                            : 'text-white',
                                          'block px-2 py-2 text-sm border-b border-white'
                                        )}
                                      >
                                        <div className="flex">
                                          <i className="ri-edit-line"></i>
                                          <span className="ml-2 text-sm">
                                            {' '}
                                            Edit
                                          </span>
                                        </div>
                                      </a>
                                    )}
                                  </Menu.Item>
                                  <form method="POST" action="#">
                                    <Menu.Item>
                                      {({ active }) => (
                                        <a
                                          href="#"
                                          className={classNames(
                                            active
                                              ? 'bg-gray-300 text-gray-100 '
                                              : 'text-white',
                                            'block px-2 py-2 text-sm border-b border-white'
                                          )}
                                        >
                                          <div className="flex">
                                            <i className="ri-delete-bin-6-line"></i>
                                            <span className="ml-2 text-sm">
                                              {' '}
                                              Delete
                                            </span>
                                          </div>
                                        </a>
                                      )}
                                    </Menu.Item>
                                  </form>
                                </div>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Broadcast;
