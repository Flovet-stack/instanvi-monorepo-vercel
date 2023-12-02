import React from "react";
import { useState } from "react";
import Filter from "./filters";
import App from "./list";
import Filter1 from "./table";
import { useUser } from '@/features/channel/api/user';
import Filter2 from "./companyTable";
import ListModal from './subComponents/listModal'

export const Contacts = () => {
    const [contacts, setContacts] = useState(true);
    const [companies, setCompanies] = useState(false);
    const [lists, setLists] = useState(false);

    const showContacts = () => {
        setContacts(true);
        setCompanies(false);
        setLists(false);
    };
    const showCompanies = () => {
        setContacts(false);
        setCompanies(true);
        setLists(false);
    };
    const showLists = () => {
        setContacts(false);
        setCompanies(false);
        setLists(true);
    };
    const auth = useUser()
    React.useEffect(() => {
        console.log(auth.data)
    }, [])

    return (
        <div className="  mx-10">
            <br />
            <div>
                <div
                    className={
                        "flex justify-between mt-5 border-b border-gray-200 p-b-3 pb-3"
                    }
                >
                    <div className="w-1/2 flex text-gray-400">
                        <div
                            onClick={() => showContacts()}
                            className={`-mb-3 cursor-pointer px-10 mr-5 ${contacts ? "text-black border-b-4 border-green-600" : ""
                                }`}
                        >
                            <button className={`text-lg mb-3 `}>
                                Contacts
                            </button>
                        </div>
                        <div
                            onClick={() => showCompanies()}
                            className={`-mb-3 cursor-pointer px-10 mr-5 ${companies ? "text-black border-b-4 border-green-600" : ""
                                }`}
                        >
                            <button className={`text-lg mb-3 `}>
                                Companies
                            </button>
                        </div>
                        <div
                            onClick={() => showLists()}
                            className={`-mb-3 cursor-pointer px-10 mr-5 ${lists ? "text-black border-b-4 border-green-600" : ""
                                }`}
                        >
                            <button className={`text-lg mb-3 `}>
                                Lists
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"flex justify-between p-b-3 mx-4 pb-3"}>
                <div className="w-full mt-5 flex justify-between">
                    <div className="w-full flex">
                        <div className="relative mt-2 ">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i className="ri-search-line text-gray-400 h-5 w-5 -mt-0.5"></i>
                            </div>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                className="w-96 rounded border-0 py-2 pl-10 text-gray-900 bg-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 border-gray-200 "
                                placeholder="Search Data Source"
                            />
                        </div>
                        <button
                            id="button"
                            className="ml-5 h-10 mt-2 text-green-400 border border-green-400 rounded py-0 px-4 "
                        >
                            Create List
                        </button>
                    </div>
                    <div className="flex">
                        <button
                            id="button"
                            className={`${lists ? "hidden" : ""
                                } ml-5 mt-2 text-blue-500 border border-blue-500 bg-blue-100 rounded py-0 px-6`}
                        >
                            Saved&nbsp;Lists
                        </button>
                        <ListModal />
                    </div>
                </div>
            </div>
            <div className="flex w-full">
                <div className={`${lists ? "hidden" : ""}`}>
                    <Filter />
                </div>
                <div className="mt flow-root w-full">
                    <div className={`${contacts ? "" : "hidden"}`}>
                        <Filter1 />
                    </div>
                    <div className={`${companies ? "" : "hidden"}`}>
                        <Filter2 />
                    </div>
                    <div className={`${lists ? "" : "hidden"}`}>
                        <App />
                    </div>
                </div>
            </div>
        </div>
    );
}
