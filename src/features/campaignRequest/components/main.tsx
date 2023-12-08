import AdvertTable from "./advert-table";
import dynamic from "next/dynamic";
import React, { Fragment, useState } from "react";
import { Popover, Transition, Menu, Dialog } from "@headlessui/react";
import { useSession, signIn, signOut } from "next-auth/react";

import Main from "./sideOver/main";
function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(" ");
}

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface Option {
    name: string;
    data: number[];
}

export const NewAdvertSlider = () => {
    const [overview, setOverview] = useState<boolean>(true);
    const [channel, setChannel] = useState<boolean>(false);
    const [tools, setTools] = useState<boolean>(false);
    const [leads, setLeads] = useState<boolean>(false);
    const [newAdvert, setNewAdvert] = useState<boolean>(false)


    const options: any = {
        series: [
            {
                name: "Desktops",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
            },
        ],
        chart: {
            height: 350,
            type: "line",
            zoom: {
                enabled: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
            width: 0.8,
        },
        title: {
            text: "Product Trends by Month",
            align: "left",
        },
        grid: {
            row: {
                colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
                opacity: 0.5,
            },
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
            ],
        },
    };
    const handleOverview = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setOverview(true);
        setChannel(false);
        setTools(false);
        setLeads(false);
    };
    const handleChannel = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setOverview(false);
        setChannel(true);
        setTools(false);
        setLeads(false);
    };

    const handleTools = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setOverview(false);
        setChannel(false);
        setTools(true);
        setLeads(false);
    };

    const handleLeads = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setOverview(false);
        setChannel(false);
        setTools(false);
        setLeads(true);
    };


    // console.log(data.accessToken) 
    return (
        <div className="bg-gray-300  ">
            <div className={"flex  h-full justify-center bg-[#f5f5f5] px-auto  pb-8"}>
                <div className="flex flex-col h-fit w-10/12 mt-16">


                    {/* Overview */}
                    <div className={classNames(overview ? "" : "hidden")}>
                        <div className="bg-white rounded-md p-8">
                            <div className={"basis-1/3"}>
                                <div className={"flex justify-between my-2"}>
                                    <p className={"text-2xl"}>
                                        Statistics{" "}
                                        <small className={"text-sm font-thin"}>(July 2023)</small>
                                    </p>
                                    <div>
                                        <button
                                            onClick={() => { setNewAdvert(true) }}
                                            id="button"
                                            className={
                                                "bg-black py-1.5 px-4 text-white flex items-center gap-2 rounded-lg cursor-pointer"
                                            }
                                        >
                                            <i className="ri-add-line text-2xl"></i>
                                            <p>New Advert</p>
                                        </button>
                                    </div>
                                </div>
                                <div className={"flex gap-2 mt-2"}>
                                    <div className="border-2 basis-1/4 p-2.5 rounded-lg">
                                        <div className="flex justify-between">
                                            <div className={"flex gap-2 mb-4"}>
                                                <img src="/images/megaphone%203.svg" alt="megaphone" />
                                                <h3 className={"text-2xl"}>Ads</h3>
                                            </div>
                                            <small
                                                className={
                                                    "flex rounded-full px-1 bg-green-100 p-1 h-fit"
                                                }
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-4 h-4 text-green-500"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                                                    />
                                                </svg>
                                                <p className={"text-green-500"}>37.8%</p>
                                            </small>
                                        </div>

                                        <div className={"flex flex-row justify-between"}>
                                            <div className="">
                                                <p>Ongoing</p>
                                                <p className="my-3">Past</p>
                                                <p>Total</p>
                                            </div>
                                            <div className="text-right">
                                                <p>18</p>
                                                <p className="my-3">27</p>
                                                <p className={"text-xl font-bold"}>45</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-2 basis-1/4 p-2.5 rounded-lg">
                                        <div className="flex justify-between">
                                            <div className={"flex gap-2 mb-4"}>
                                                <img
                                                    src="/images/users-solid%202.svg"
                                                    alt="user-icon"
                                                />
                                                <h3 className={"text-2xl"}>Reach</h3>
                                            </div>
                                            <small
                                                className={
                                                    "flex rounded-full px-1 bg-green-100 p-1 h-fit"
                                                }
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-4 h-4 text-green-500"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                                                    />
                                                </svg>
                                                <p className={"text-green-500"}>37.8%</p>
                                            </small>
                                        </div>

                                        <div className={"flex flex-row justify-between"}>
                                            <div className="">
                                                <p>Online</p>
                                                <p className="my-3">Offline</p>
                                                <p>Total</p>
                                            </div>
                                            <div className="text-right">
                                                <p>28,000</p>
                                                <p className="my-3">57,000</p>
                                                <p className={"text-xl font-bold"}>45</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-2 basis-1/4 p-2.5 rounded-lg">
                                        <div className="flex justify-between">
                                            <div className={"flex gap-2 mb-4"}>
                                                <img src="/images/users-alt%202.svg" alt="user-icon" />
                                                <h3 className={"text-2xl"}>Reach</h3>
                                            </div>
                                            <small
                                                className={
                                                    "flex rounded-full px-1 bg-red-100 p-1 h-fit"
                                                }
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-4 h-4 text-red-500"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M12 4.5v15m0 0l-6.75 6.75M12 19.5l6.75 6.75"
                                                    />
                                                </svg>
                                                <p className={"text-red-500"}>37.8%</p>
                                            </small>
                                        </div>

                                        <div className={"flex flex-row justify-between"}>
                                            <div className="">
                                                <p>Online</p>
                                                <p className="my-3">Offline</p>
                                                <p>Total</p>
                                            </div>
                                            <div className="text-right">
                                                <p>28,000</p>
                                                <p className="my-3">57,000</p>
                                                <p className={"text-xl font-bold"}>45</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-2 basis-1/4 p-2.5 rounded-lg">
                                        <div className="flex justify-between">
                                            <div className={"flex gap-2 mb-4"}>
                                                <img src="/images/users-alt%202.svg" alt="user-icon" />
                                                <h3 className={"text-2xl"}>Finances</h3>
                                            </div>
                                            <small
                                                className={
                                                    "flex rounded-full px-1 bg-green-100 p-1 h-fit"
                                                }
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-4 h-4 text-green-500"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                                                    />
                                                </svg>
                                                <p className={"text-green-500"}>37.8%</p>
                                            </small>
                                        </div>

                                        <div className={"flex flex-row justify-between"}>
                                            <div className="">
                                                <p>balance</p>
                                                <p className="my-3">Expense</p>
                                                <p>Total</p>
                                            </div>
                                            <div className="text-right">
                                                <p>28,000 XAF</p>
                                                <p className="my-3"> 57,000 XAF</p>
                                                <p className={"text-xl font-bold"}>85,000 XAF</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="basis-1/3 my-8 bg-white rounded p-8">
                            <Chart
                                series={options.series}
                                options={options}
                                type="line"
                                height={500}
                            />
                        </div>

                        <div className="basis-1/3 my-8 bg-white rounded p-8">
                            <AdvertTable />
                        </div>
                    </div>


                </div>
                {/* <button className="py-2 px-5 rounded border" onClick={()=>signOut()}>Logout</button> */}
            </div>

            <Transition.Root show={newAdvert} as={Fragment}>
                <Dialog as="div" className="relative z-20" onClose={setNewAdvert}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex w-[65%] pl-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto relative w-screen">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-in-out duration-500"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in-out duration-500"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                                <button
                                                    type="button"
                                                    className="relative rounded-md text-gray-300 hover:text-white focus:outline-none"
                                                    onClick={() => setNewAdvert(false)}
                                                >
                                                    <span className="absolute -inset-2.5" />
                                                    <span className="sr-only">Close panel</span>
                                                    <i className="ri-close-line text-3xl"></i>
                                                </button>
                                            </div>
                                        </Transition.Child>

                                        <Main />

                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

        </div>
    );
}
