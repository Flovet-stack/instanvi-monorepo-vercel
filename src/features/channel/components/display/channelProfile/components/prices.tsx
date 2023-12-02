import { Fragment } from "react";
import { } from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";


import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";

const transactions: {
    id: string;
    company: string;
    share: string;
    commission: string;
    price: string;
    quantity: string;
    netAmount: string;
}[] = [
        {
            id: "AAPS0L",
            company: "Chase & Co.",
            share: "CAC",
            commission: "+$4.37",
            price: "$3,509.00",
            quantity: "12.00",
            netAmount: "$4,397.00",
        },
        {
            id: "AAPS0L",
            company: "Chase & Co.",
            share: "CAC",
            commission: "+$4.37",
            price: "$3,509.00",
            quantity: "12.00",
            netAmount: "$4,397.00",
        },
        {
            id: "AAPS0L",
            company: "Chase & Co.",
            share: "CAC",
            commission: "+$4.37",
            price: "$3,509.00",
            quantity: "12.00",
            netAmount: "$4,397.00",
        },
    ];


// defining classNames
function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function Price() {

    return (
        <div>


            <div className="h-[39rem] px-12 mt-20  ">

                <div className="mt-8 flow-root">
                    <div className="-my-2 -mx-6 overflow-x-auto lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 ">
                            <table className="min-w-full divide-y divide-gray-300 table-auto  overflow-x-auto ">
                                <thead>
                                    <tr>
                                        <th
                                            scope="col"
                                            className="whitespace-nowrap py-3.5 pl-6 pr-3 text-left text-lg font-semibold text-gray-900 sm:pl-0"
                                        >
                                            ID
                                        </th>
                                        <th
                                            scope="col"
                                            className="whitespace-nowrap px-2 py-3.5 text-left text-lg font-semibold text-gray-900"
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="whitespace-nowrap px-2 py-3.5 text-left text-lg font-semibold text-gray-900"
                                        >
                                            Tool
                                        </th>
                                        <th
                                            scope="col"
                                            className="whitespace-nowrap px-2 py-3.5 text-left text-lg font-semibold text-gray-900"
                                        >
                                            Views
                                        </th>
                                        <th
                                            scope="col"
                                            className="whitespace-nowrap px-2 py-3.5 text-left text-lg font-semibold text-gray-900"
                                        >
                                            Engagement
                                        </th>
                                        <th
                                            scope="col"
                                            className="whitespace-nowrap px-2 py-3.5 text-left text-lg font-semibold text-gray-900"
                                        >
                                            Status
                                        </th>

                                        <th
                                            scope="col"
                                            className="relative whitespace-nowrap py-3.5 pl-3 pr-6 sm:pr-0"
                                        >
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {transactions.map((transaction) => (
                                        <tr key={transaction.id} className="py-4">
                                            <td className="whitespace-nowrap py-4 pl-6 pr-3 text-lg text-gray-500 sm:pl-0">
                                                {transaction.id}
                                            </td>
                                            <td className="whitespace-nowrap px-2 py-2 text-lg font-medium text-gray-900">
                                                {transaction.company}
                                            </td>
                                            <td className="whitespace-nowrap px-2 py-2 text-lg text-gray-900">
                                                {transaction.share}
                                            </td>
                                            <td className="whitespace-nowrap px-2 py-2 text-lg text-gray-500">
                                                {transaction.commission}
                                            </td>
                                            <td className="whitespace-nowrap px-2 py-2 text-lg text-gray-500">
                                                {transaction.price}
                                            </td>
                                            <td className="whitespace-nowrap px-2 py-4 text-lg text-gray-500">
                                                <button className="bg-green-600 rounded-2xl text-white px-4 py-1  text-sm">
                                                    Active
                                                </button>
                                            </td>
                                            <td className=" whitespace-nowrap py-2 pl-3 pr-6  text-lg font-medium sm:pr-0">
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
                                                        <Menu.Items className="absolute md:right-8xl right-5xl z-10 mt-2 w-20 origin-top-right   bg-gray-300 text-white  ">
                                                            <div className="py-0">
                                                                <Menu.Item>
                                                                    {({ active }) => (
                                                                        <a
                                                                            href="#"
                                                                            className={classNames(
                                                                                active
                                                                                    ? "bg-gray-300 text-gray-100 "
                                                                                    : "text-white",
                                                                                "block px-2 py-2 text-sm border-b border-white"
                                                                            )}
                                                                        >
                                                                            <div className="flex">
                                                                                <i className="ri-file-copy-line"></i>
                                                                                <span className="ml-2 text-sm">
                                                                                    {" "}
                                                                                    copy
                                                                                </span>
                                                                            </div>
                                                                        </a>
                                                                    )}
                                                                </Menu.Item>
                                                                <Menu.Item>
                                                                    {({ active }) => (
                                                                        <a
                                                                            href="#"
                                                                            className={classNames(
                                                                                active
                                                                                    ? "bg-gray-300 text-gray-100 "
                                                                                    : "text-white",
                                                                                "block px-2 py-2 text-sm border-b border-white"
                                                                            )}
                                                                        >
                                                                            <div className="flex">
                                                                                <i className="ri-eye-line"></i>
                                                                                <span className="ml-2 text-sm">
                                                                                    {" "}
                                                                                    View
                                                                                </span>
                                                                            </div>
                                                                        </a>
                                                                    )}
                                                                </Menu.Item>
                                                                <Menu.Item>
                                                                    {({ active }) => (
                                                                        <a
                                                                            href="#"
                                                                            className={classNames(
                                                                                active
                                                                                    ? "bg-gray-300 text-gray-100 "
                                                                                    : "text-white",
                                                                                "block px-2 py-2 text-sm border-b border-white"
                                                                            )}
                                                                        >
                                                                            <div className="flex">
                                                                                <i className="ri-edit-line"></i>
                                                                                <span className="ml-2 text-sm">
                                                                                    {" "}
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
                                                                                        ? "bg-gray-300 text-gray-100 "
                                                                                        : "text-white",
                                                                                    "block px-2 py-2 text-sm border-b border-white"
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
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
