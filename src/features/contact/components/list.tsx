import { Menu, Transition, Dialog } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import React, { useState, FC, Fragment } from "react";

interface AppProps { }

const App: FC<AppProps> = () => {
    const [open, setOpen] = useState<boolean>(false);

    const classNames = (...classes: string[]): string => {
        return classes.filter(Boolean).join(" ");
    };

    return (
        <div className="mt-8 flow-root p-4 w-full">
            <div className="-my-2 -mx-4 overflow-x-auto w-full sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table className="min-w-full divide-y divide-gray-300">
                        <thead>
                            <tr>
                                <th
                                    scope="col"
                                    className="py-3.5 pl-4 pr-3 text-left text-lg font-semibold text-gray-900 sm:pl-0"
                                >
                                    List Name
                                </th>
                                <th
                                    scope="col"
                                    className="px-3 py-3.5 text-left text-lg font-semibold text-gray-900"
                                >
                                    Description
                                </th>
                                <th
                                    scope="col"
                                    className="px-3 py-3.5 text-left text-lg font-semibold text-gray-900"
                                >
                                    Profile
                                </th>
                                <th
                                    scope="col"
                                    className="px-3 py-3.5 text-left text-lg font-semibold text-gray-900"
                                >
                                    Created by
                                </th>
                                <th
                                    scope="col"
                                    className="px-3 py-3.5 text-left text-lg font-semibold text-gray-900"
                                >
                                    Created on
                                </th>
                                <th
                                    scope="col"
                                    className="px-3  py-3.5 text-right text-lg font-semibold text-gray-900"
                                >
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="  divide-y divide-gray-200 bg-white">
                            <tr>
                                <td className="whitespace-nowrap py-4 text-lg sm:pl-0">
                                    <div className=" ">
                                        <div className="font-medium text-gray-900">
                                            New 2020 campaign
                                        </div>
                                    </div>
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                                    <div className="text-gray-900">Top CEO in douala</div>
                                    {/*<div className="text-gray-500">{person.numberOfTimes}</div>*/}
                                </td>

                                <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                                    88
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                                    Variety Zong
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                                    <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                        11 oct 2023
                                    </span>
                                </td>
                                <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-lg font-medium sm:pr-0">
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
                                            <Menu.Items className="absolute  md:right-8xl right-5xl z-10 mt-2 w-20 origin-top-right   bg-gray-300 text-white  ">
                                                <div className="py-0">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                onClick={(e) => setOpen(true)}
                                                                className={classNames(
                                                                    active
                                                                        ? "bg-gray-300 text-gray-100 "
                                                                        : "text-white",
                                                                    "block px-2 py-2 text-sm border-b border-white cursor-pointer"
                                                                )}
                                                            >
                                                                <div className="flex">
                                                                    <i className="ri-edit-line"></i>
                                                                    <span className="ml-2 text-sm"> Edit</span>
                                                                </div>
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <form method="POST" action="#">
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    className={classNames(
                                                                        active
                                                                            ? "bg-gray-300 text-gray-100 "
                                                                            : "text-white",
                                                                        "block px-2 py-2 text-sm border-b border-white cursor-pointer"
                                                                    )}
                                                                >
                                                                    <div className="flex">
                                                                        <i className="ri-delete-bin-6-line"></i>
                                                                        <span className="ml-2 text-sm">
                                                                            {" "}
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
                            <tr>
                                <td className="whitespace-nowrap py-4 text-lg sm:pl-0">
                                    <div className=" ">
                                        <div className="font-medium text-gray-900">
                                            New 2020 campaign
                                        </div>
                                    </div>
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                                    <div className="text-gray-900">Top CEO in douala</div>
                                    {/*<div className="text-gray-500">{person.numberOfTimes}</div>*/}
                                </td>

                                <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                                    88
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                                    Variety Zong
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500">
                                    <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                        11 oct 2023
                                    </span>
                                </td>
                                <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-lg font-medium sm:pr-0">
                                    <Menu as="div" className=" inline-block text-left ">
                                        <div className="flex justify-begin">
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
                                            <Menu.Items className="absolute  md:right-8xl right-5xl z-10 mt-2 w-20 origin-top-right   bg-gray-300 text-white  ">
                                                <div className="py-0">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                onClick={(e) => setOpen(true)}
                                                                className={classNames(
                                                                    active
                                                                        ? "bg-gray-300 text-gray-100 "
                                                                        : "text-white",
                                                                    "block px-2 py-2 text-sm border-b border-white cursor-pointer"
                                                                )}
                                                            >
                                                                <div className="flex">
                                                                    <i className="ri-edit-line"></i>
                                                                    <span className="ml-2 text-sm"> Create</span>
                                                                </div>
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <form method="POST" action="#">
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    className={classNames(
                                                                        active
                                                                            ? "bg-gray-300 text-gray-100 "
                                                                            : "text-white",
                                                                        "block px-2 py-2 text-sm border-b border-white cursor-pointer"
                                                                    )}
                                                                >
                                                                    <div className="flex">
                                                                        <i className="ri-delete-bin-6-line"></i>
                                                                        <span className="ml-2 text-sm">
                                                                            {" "}
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
                        </tbody>
                    </table>
                </div>
            </div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    onClose={() => setOpen(open)}
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
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                                    <div className="relative mb-2">
                                        <div className="flex justify-center">
                                            <h3 className="text-xl">New Contact List</h3>
                                            <div
                                                className="absolute right-0 top-0 -mt-3  text-xl cursor-pointer"
                                                onClick={() => setOpen(false)}
                                            >
                                                <i className="ri-close-circle-line text-gray-600 text-3xl -mt-3"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="mt-2 mx-5">
                                        <div>
                                            <label htmlFor="">List Names</label>
                                            <input
                                                type="text"
                                                className="py-2.5 mt-1 w-full border pl-2 rounded"
                                                placeholder="My contacts"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-5 mx-5">
                                        <div>
                                            <label htmlFor="">Description</label>
                                            <textarea
                                                name=""
                                                id=""

                                                className="py-2.5 mt-1 w-full border pl-2 rounded outline-none"

                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="w-full mt-5   flex justify-end mr-5">
                                        <button
                                            id="button"
                                            className="py-2 px-4 bg-blue-500 rounded text-white"
                                        >
                                            Proceeds
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    );
};

export default App;