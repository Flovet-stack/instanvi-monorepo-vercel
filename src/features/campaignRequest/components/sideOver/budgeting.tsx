import Router from "next/router";
import React, { useState, useEffect, useContext } from "react";

import { userContext } from "@/Components/context/context";

// function to add classes conditions
function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(" ");
}

export default function Budgeting() {
    const context = useContext(userContext)
    const [stepOne, setStepOne] = useState<boolean>(true);
    const [stepTwo, setStepTwo] = useState<boolean>(false);


    const handleStepOne = (e: any) => {
        e.preventDefault();
        setStepOne(true);
        setStepTwo(false);
    };

    const handleStepTwo = (e: any) => {
        e.preventDefault();
        setStepOne(false);
        setStepTwo(true);
    };





    return (
        <div className="justify-center flex">
            <div className="w-full md:w-[50%] md:px-0 px-4">
                <div className="w-full bg-white">
                    <div className="flex justify-between w-full px-3">
                        <div
                            onClick={(e) => handleStepOne(e)}
                            className={classNames(
                                stepOne ? "border-b-2 border-gray-900 font-bold" : "",
                                "w-full px-5 cursor-pointer text-lg py-5"
                            )}
                        >
                            <span>Advert</span>
                        </div>
                        <div
                            onClick={(e) => handleStepTwo(e)}
                            className={classNames(
                                stepTwo ? "border-b-2 border-gray-900 font-bold" : "",
                                "w-full px-5 cursor-pointer text-lg py-5"
                            )}
                        >
                            <span>Recommend Budget</span>
                        </div>
                    </div>
                    <hr />
                    <div
                        className={classNames(
                            stepOne ? "" : "hidden",
                            "my-52 w-full px-5"
                        )}
                    >
                        <span>Enter Bugdet</span>
                        <div className="w-full mt-3 flex">
                            <div className="w-[75%]">
                                <input
                                    type="number"

                                    onChange={(e) => context.setbudgetCurrency(e.target.value)}
                                    className="mr-10 rounded py-2 w-full border px-2 outline-none"
                                    placeholder="200000"
                                />
                            </div>
                            <div className="w-[20%]">
                                <select
                                    name=""
                                    id=""
                                    onChange={(e) => context.setcurrency(e.target.value)}
                                    className="ml-5 rounded pl-2 w-full py-2 border outline-none"
                                >
                                    <option value="">Currency</option>
                                    <option value="USD">USD</option>
                                    <option value="XAF">XAF</option>
                                    <option value="EUR">EUR</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div
                        className={classNames(
                            stepTwo ? "" : "hidden",
                            "my-32 w-full px-5"
                        )}
                    >
                        <table className="w-full px-4">
                            <thead>
                                <td>
                                    <h2 className="text-2xl font-bold py-4">Objectives</h2>
                                </td>
                                <td>
                                    <h2 className="text-2xl font-bold">Targets</h2>
                                </td>
                                <td></td>
                            </thead>
                            <tr>
                                <td>
                                    <span className="mr-2">Leads/Contacts</span>
                                </td>
                                <td>
                                    <input
                                        type="text"

                                        onChange={(e) => context.setLeads(e.target.value)}
                                        className="w-full border rounded mx outline-none py-2.5 pl-2 my-4"
                                    />
                                </td>
                                <td>
                                    <span className="ml-2">Leads</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="mr-2">Sales</span>
                                </td>
                                <td>
                                    <input
                                        type="text"

                                        onChange={(e) => context.setSales(e.target.value)}
                                        className="w-full border rounded mx outline-none py-2.5 pl-2 my-4"
                                    />
                                </td>
                                <td>
                                    <span className="ml-2">unit</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="mr-2">Local Visitors</span>
                                </td>
                                <td>
                                    <input
                                        type="text"

                                        onChange={(e) => context.setvisitors(e.target.value)}
                                        className="w-full border rounded mx outline-none py-2.5 pl-2 my-4"
                                    />
                                </td>
                                <td>
                                    <span className="ml-2">Visitors</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="mr-2">App downloads</span>
                                </td>
                                <td>
                                    <input
                                        type="text"

                                        onChange={(e) => context.setAppDowload(e.target.value)}
                                        className="w-full border rounded mx outline-none py-2.5 pl-2 mt-4"
                                    />
                                </td>
                                <td>
                                    <span className="ml-2">Downloads</span>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
