import React, { useState, useRef, FC } from "react";
import Header from "next/head";
import { v4 as uuid } from "uuid";

const faqs = [
    {
        id: 1,
        header: "Company",
    },
    {
        id: 2,
        header: "Location",
    },
    {
        id: 3,
        header: "Industry",
    },
    {
        id: 4,
        header: "Company HeadCount",
    },
    {
        id: 5,
        header: "Revenue",
    },
    {
        id: 6,
        header: "Year Founded",
    },
    {
        id: 7,
        header: "Contact Name",
    },
    {
        id: 8,
        header: "Job Title",
    },
    {
        id: 9,
        header: "Seniority",
    },
];
interface Faq {
    id: number;
    header: string;
}

interface Data {
    id: string;
    name: string;
}

interface AccordionItemProps {
    handleToggle: (index: number) => void;
    active: number | null;
    faq: Faq;
}

const AccordionItem: FC<AccordionItemProps> = (props) => {
    const contentEl = useRef<HTMLDivElement>(null);
    const { handleToggle, active, faq } = props;
    const { header, id } = faq;
    const [addCompany, setCompany] = useState<Data[]>([]);
    const [companyText, setAddCompanyText] = useState("");
    const [addLocation, setAddLocation] = useState<Data[]>([]);
    const [locationText, setLocationText] = useState("");
    const [addIndustry, setAddIndustry] = useState<Data[]>([]);
    const [industryText, setIndustryText] = useState("");
    const [contactName, setContactName] = useState<Data[]>([]);
    const [contactText, setContactText] = useState("");
    const [jobTitle, setJobTitle] = useState<Data[]>([]);
    const [jobText, setJobText] = useState("");

    const addCompanydata = () => {
        if (companyText === "") {
        } else {
            const datas: Data = {
                id: uuid(),
                name: companyText,
            };
            setCompany([...addCompany, datas]);
            setAddCompanyText("");
        }
    };
    const deleteCompany = (e: any, id: string) => {
        const filteredCompany = addCompany.filter((item) => item.id !== id);
        setCompany(filteredCompany);
    };

    const addLocationdata = () => {
        if (locationText === "") {
        } else {
            const datas: Data = {
                id: uuid(),
                name: locationText,
            };
            setAddLocation([...addLocation, datas]);
            setLocationText("");
        }
    };
    const deleteLocation = (e: any, id: string) => {
        const filteredCompany = addLocation.filter((item) => item.id !== id);
        setAddLocation(filteredCompany);
    };
    const addIndustryData = () => {
        if (industryText === "") {
        } else {
            const datas: Data = {
                id: uuid(),
                name: industryText,
            };
            setAddIndustry([...addIndustry, datas]);
            setIndustryText("");
        }
    };
    const deleteIndustry = (e: any, id: string) => {
        const filteredCompany = addIndustry.filter((item) => item.id !== id);
        setAddIndustry(filteredCompany);
    };
    const addContactData = () => {
        if (contactText === "") {
        } else {
            const datas: Data = {
                id: uuid(),
                name: contactText,
            };
            setContactName([...contactName, datas]);
            setContactText("");
        }
    };
    const deleteContact = (e: any, id: string) => {
        const filteredCompany = contactName.filter((item) => item.id !== id);
        setContactName(filteredCompany);
    };

    const addJobData = () => {
        if (jobText === "") {
        } else {
            const datas: Data = {
                id: uuid(),
                name: jobText,
            };
            setJobTitle([...jobTitle, datas]);
            setJobText("");
        }
    };
    const deleteJob = (e: any, id: string) => {
        const filteredCompany = jobTitle.filter((item) => item.id !== id);
        setJobTitle(filteredCompany);
    };
    return (
        <div className="rc-accordion-card border-none ">
            <div className="rc-accordion-header border-none">
                <div
                    className={`rc-accordion-toggle   border-none p-3 ${active === id ? "active " : ""
                        }`}
                    onClick={() => handleToggle(id)}
                >
                    {active === id ? (
                        <p className="text-[16px] font-semibold ">{header}</p>
                    ) : (
                        <p className="text-[16px] font-semibold">{header}</p>
                    )}
                    {active === id ? (
                        <i className="ri-arrow-up-s-line  font-bold  text-lg"></i>
                    ) : (
                        <i className="ri-arrow-down-s-line font-bold   text-lg"></i>
                    )}
                </div>
            </div>
            <div
                ref={contentEl}
                className={`rc-collapse ${active === id ? "show" : ""}`}
                style={
                    active === id
                        ? { height: contentEl.current?.scrollHeight }
                        : { height: "0px" }
                }
            >
                <div className="rc-accordion-body  ">
                    {id === 1 ? (
                        <>
                            <div className="w-full flex">
                                <div className="relative w-full ">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <i className="ri-search-line text-gray-400 h-5 w-5 -mt-0.5"></i>
                                    </div>
                                    <input
                                        type="text"
                                        name="email"
                                        value={companyText}
                                        onChange={(e) => setAddCompanyText(e.target.value)}
                                        id="email"
                                        className="w-full rounded-y rounded-l  py-2 pl-8 text-gray-900 bg-white placeholder:text-gray-400 border-gray-200 border-y border-l "
                                        placeholder="Search Company Name"
                                    />
                                </div>
                                <button
                                    id="button"
                                    onClick={addCompanydata}
                                    className=" text-gray-600 border bg-gray-200 border-gray-200 rounded-y rounded-r py-0 px-4 "
                                >
                                    Add
                                </button>
                            </div>
                            <div className="flex">
                                {addCompany.map((items, id) => {
                                    return (
                                        <div
                                            key={id}
                                            className="mr-1 mt-2 px-2 rounded  flex bg-gray-200 text-gray-600"
                                        >
                                            <span className="text-md text-gray-100">
                                                {items.name}
                                            </span>
                                            <i
                                                className="ri-close-fill ml-4 text-gray-100 text-md mt-0.5 cursor-pointer"
                                                onClick={(e) => deleteCompany(e, items.id)}
                                            ></i>
                                        </div>
                                    );
                                })}
                            </div>
                        </>
                    ) : id === 2 ? (
                        <>
                            <div className="w-full flex">
                                <div className="relative w-full">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <i className="ri-search-line text-gray-400 h-5 w-5 -mt-0.5"></i>
                                    </div>
                                    <input
                                        type="text"
                                        name="email"
                                        value={locationText}
                                        onChange={(e) => setLocationText(e.target.value)}
                                        id="email"
                                        className="w-full rounded-y rounded-l  py-2 pl-8 text-gray-900 bg-white placeholder:text-gray-400 border-gray-200 border-y border-l "
                                        placeholder="Search Company Name"
                                    />
                                </div>
                                <button
                                    id="button"
                                    onClick={addLocationdata}
                                    className=" text-gray-600 border bg-gray-200 border-gray-200 rounded-y rounded-r py-0 px-4 "
                                >
                                    Add
                                </button>
                            </div>
                            <div className="flex">
                                {addLocation.map((items, id) => {
                                    return (
                                        <div
                                            key={id}
                                            className="mr-1 mt-2 px-2 rounded  flex bg-gray-200 text-gray-600"
                                        >
                                            <span className="text-md text-gray-100">
                                                {items.name}
                                            </span>
                                            <i
                                                className="ri-close-fill ml-4 text-gray-100 text-md mt-0.5 cursor-pointer"
                                                onClick={(e) => deleteLocation(e, items.id)}
                                            ></i>
                                        </div>
                                    );
                                })}
                            </div>
                        </>
                    ) : id === 3 ? (
                        <>
                            <div className="w-full flex">
                                <div className="relative w-full">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <i className="ri-search-line text-gray-400 h-5 w-5 -mt-0.5"></i>
                                    </div>
                                    <input
                                        type="text"
                                        name="email"
                                        value={industryText}
                                        onChange={(e) => setIndustryText(e.target.value)}
                                        id="email"
                                        className="w-full rounded-y rounded-l  py-2 pl-8 text-gray-900 bg-white placeholder:text-gray-400 border-gray-200 border-y border-l "
                                        placeholder="Search Company Name"
                                    />
                                </div>
                                <button
                                    id="button"
                                    onClick={addIndustryData}
                                    className=" text-gray-600 border bg-gray-200 border-gray-200 rounded-y rounded-r py-0 px-4 "
                                >
                                    Add
                                </button>
                            </div>
                            <div className="flex">
                                {addIndustry.map((items, id) => {
                                    return (
                                        <div
                                            key={id}
                                            className="mr-1 mt-2 px-2 rounded  flex bg-gray-200 text-gray-600"
                                        >
                                            <span className="text-md text-gray-100">
                                                {items.name}
                                            </span>
                                            <i
                                                className="ri-close-fill ml-4 text-gray-100 text-md mt-0.5 cursor-pointer"
                                                onClick={(e) => deleteIndustry(e, items.id)}
                                            ></i>
                                        </div>
                                    );
                                })}
                            </div>
                        </>
                    ) : id === 4 ? (
                        <>
                            <div className="flex mt-3">
                                <input type="checkbox" id="0-10" />
                                <label htmlFor="0-10" className="ml-3">
                                    0-10
                                </label>
                            </div>
                            <div className="flex mt-3">
                                <input type="checkbox" id="11-50" />
                                <label htmlFor="11-50" className="ml-3">
                                    11-50
                                </label>
                            </div>
                            <div className="flex mt-3">
                                <input type="checkbox" id="51-200" />
                                <label htmlFor="51-200" className="ml-3">
                                    51-200
                                </label>
                            </div>
                            <div className="flex mt-3">
                                <input type="checkbox" id="201-500" />
                                <label htmlFor="201-500" className="ml-3">
                                    201-500
                                </label>
                            </div>
                            <div className="flex mt-3">
                                <input type="checkbox" id="501-1000" />
                                <label htmlFor="501-1000" className="ml-3">
                                    501-1000
                                </label>
                            </div>
                            <div className="flex mt-3">
                                <input type="checkbox" id="1001-5000" />
                                <label htmlFor="1001-5000" className="ml-3">
                                    1001-5000
                                </label>
                            </div>
                            <div className="flex mt-3">
                                <input type="checkbox" id="+5000" />
                                <label htmlFor="+5000" className="ml-3">
                                    +5000
                                </label>
                            </div>
                        </>
                    ) : id === 5 ? (
                        <>
                            <div className="flex">
                                <select
                                    name=""
                                    className="px-3 py-2 outline-none border rounded"
                                    id=""
                                >
                                    <option value="">Min Amount</option>
                                </select>
                                <select
                                    name=""
                                    className="mx-2 pl-3 outline-none py-2 border rounded"
                                    id=""
                                >
                                    <option value="">Max Amount</option>
                                </select>
                                <button id="button">Apply</button>
                            </div>
                        </>
                    ) : id === 6 ? (
                        <>
                            <div className="flex">
                                <select
                                    name=""
                                    className="px-3 py-2 outline-none border rounded"
                                    id=""
                                >
                                    <option value="">Min Amount</option>
                                </select>
                                <select
                                    name=""
                                    className="mx-2 pl-3 outline-none py-2 border rounded"
                                    id=""
                                >
                                    <option value="">Max Amount</option>
                                </select>
                                <button id="button">Apply</button>
                            </div>
                        </>
                    ) : id === 7 ? (
                        <>
                            <div className="w-full flex">
                                <div className="relative w-full">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <i className="ri-search-line text-gray-400 h-5 w-5 -mt-0.5"></i>
                                    </div>
                                    <input
                                        type="text"
                                        name="email"
                                        value={contactText}
                                        onChange={(e) => setContactText(e.target.value)}
                                        id="email"
                                        className="w-full rounded-y rounded-l  py-2 pl-8 text-gray-900 bg-white placeholder:text-gray-400 border-gray-200 border-y border-l "
                                        placeholder="Search Company Name"
                                    />
                                </div>
                                <button
                                    id="button"
                                    onClick={addContactData}
                                    className=" text-gray-600 border bg-gray-200 border-gray-200 rounded-y rounded-r py-0 px-4 "
                                >
                                    Add
                                </button>
                            </div>
                            <div className="flex">
                                {contactName.map((items, id) => {
                                    return (
                                        <div
                                            key={id}
                                            className="mr-1 mt-2 px-2 rounded  flex bg-gray-200 text-gray-600"
                                        >
                                            <span className="text-md text-gray-100">
                                                {items.name}
                                            </span>
                                            <i
                                                className="ri-close-fill ml-4 text-gray-100 text-md mt-0.5 cursor-pointer"
                                                onClick={(e) => deleteContact(e, items.id)}
                                            ></i>
                                        </div>
                                    );
                                })}
                            </div>
                        </>
                    ) : id === 8 ? (
                        <>
                            <div className="w-full flex">
                                <div className="relative w-full ">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <i className="ri-search-line text-gray-400 h-5 w-5 -mt-0.5"></i>
                                    </div>
                                    <input
                                        type="text"
                                        name="email"
                                        value={jobText}
                                        onChange={(e) => setJobText(e.target.value)}
                                        id="email"
                                        className="w-full rounded-y rounded-l  py-2 pl-8 text-gray-900 bg-white placeholder:text-gray-400 border-gray-200 border-y border-l "
                                        placeholder="Search Job Titles"
                                    />
                                </div>
                                <button
                                    id="button"
                                    onClick={addJobData}
                                    className=" text-gray-600 border-2 bg-gray-200 border-gray-200 rounded-y rounded-r py-0 px-4 "
                                >
                                    Add
                                </button>
                            </div>
                            <div className="flex">
                                {jobTitle.map((items, id) => {
                                    return (
                                        <div
                                            key={id}
                                            className="mr-1 mt-2 px-2 rounded  flex bg-gray-200 text-gray-600"
                                        >
                                            <span className="text-md text-gray-100">
                                                {items.name}
                                            </span>
                                            <i
                                                className="ri-close-fill ml-4 text-gray-100 text-md mt-0.5 cursor-pointer"
                                                onClick={(e) => deleteJob(e, items.id)}
                                            ></i>
                                        </div>
                                    );
                                })}
                            </div>
                        </>
                    ) : id === 9 ? (
                        <>
                            <div className="flex mt-3">
                                <input type="checkbox" id="founder" />
                                <label htmlFor="founder" className="ml-3">
                                    Founder
                                </label>
                            </div>
                            <div className="flex mt-3">
                                <input type="checkbox" id="partner" />
                                <label htmlFor="partner" className="ml-3">
                                    Partner
                                </label>
                            </div>
                            <div className="flex mt-3">
                                <input type="checkbox" id="Board Member" />
                                <label htmlFor="Board Member" className="ml-3">
                                    Board Member
                                </label>
                            </div>
                            <div className="flex mt-3">
                                <input type="checkbox" id="Director" />
                                <label htmlFor="Director" className="ml-3">
                                    Director
                                </label>
                            </div>
                            <div className="flex mt-3">
                                <input type="checkbox" id="Manager" />
                                <label htmlFor="Manager" className="ml-3">
                                    Manager
                                </label>
                            </div>
                            <div className="flex mt-3">
                                <input type="checkbox" id="Intern" />
                                <label htmlFor="Intern" className="ml-3">
                                    Intern
                                </label>
                            </div>
                            <div className="flex mt-3">
                                <input type="checkbox" id="Starter" />
                                <label htmlFor="Starter" className="ml-3">
                                    Starter
                                </label>
                            </div>
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    );
};

function Filter() {
    const [active, setActive] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    };
    return (
        <div className="">
            <Header>
                <link rel="stylesheet" href="/css/contact.css" />
            </Header>
            {/* First Contact */}

            <div className="flex w-full">
                <div className=" mt-5 mb-5 w-full mr-5">
                    <div className="row justify-content-center">
                        <div className="w-full mt-2 py-2">
                            <div className="card border">
                                <div className="card-body  ">
                                    {faqs.map((faq, index) => {
                                        return (
                                            <div key={index}>
                                                <AccordionItem
                                                    active={active}
                                                    handleToggle={handleToggle}
                                                    faq={faq}
                                                />
                                                <hr />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Filter;