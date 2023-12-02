import React, { useState, useRef, FC } from "react";
import Header from "next/head";
import Link from "next/link";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface FAQ {
    id: number;
    name: string;
    companyhq: string;
    Employee: string;
    industry: string;
    revenue: string;
}

interface AccordionItemProps {
    handleToggle: (index: number) => void;
    active: number | null;
    faq: FAQ;
}

const classNames = (...classes: string[]): string => {
    return classes.filter(Boolean).join(" ");
};

const faqs: FAQ[] = [
    {
        id: 1,
        name: "Megem Sebastiene",
        companyhq: "Douala Cameroon",
        Employee: "M-gurush",
        industry: "Financial Services",
        revenue: "1-20M XAF",
    },
    {
        id: 2,
        name: "Megem Sebastiene",
        companyhq: "Douala Cameroon",
        Employee: "M-gurush",
        industry: "Financial Services",
        revenue: "1-20M XAF",
    },
];

const AccordionItem: FC<AccordionItemProps> = (props) => {
    const contentEl = useRef<HTMLDivElement>(null);
    const { handleToggle, active, faq } = props;
    const { companyhq, id, name, revenue, Employee, industry } = faq;

    return (
        <>
            <div className="rc-accordion-card border-none ">
                <div className="rc-accordion-header border-none">
                    <div
                        className={`rc-accordion-toggle   border-none ${active === id ? "active " : ""
                            }`}
                        onClick={() => handleToggle(id)}
                    >
                        <div className="w-full flex pl-5 mt-5">
                            <div className="w-1/6">
                                <div className="flex">
                                    <input type="checkbox" />
                                    <p className="text-lg ml-5">{name}</p>
                                </div>
                            </div>
                            <div className="w-1/6">
                                <p className="text-lg">{companyhq}</p>
                            </div>
                            <div className="w-1/6">
                                <p className="text-lg">{Employee}</p>
                            </div>
                            <div className="w-1/6">
                                <p className="text-lg">{industry}</p>
                            </div>
                            <div className="w-1/6">
                                <p className="text-lg">{revenue}</p>
                            </div>
                            <div className="w-1/6">
                                <div className="flex justify-between   px-8">
                                    {active === id ? (
                                        <button
                                            id="button"
                                            className="ml-5 -mt-2  text-red-500 border border-red-500  rounded py-1.5 px-6 "
                                        >
                                            Hide Details
                                        </button>
                                    ) : (
                                        <button
                                            id="button"
                                            className="ml-5 -mt-2  text-blue-500 border border-blue-500   rounded py-1.5 px-6 "
                                        >
                                            Show Details
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
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
                    <div className="rc-accordion-body">
                        <hr />
                        {id == 1 ? (
                            <div className="flex w-full mt-5">
                                <div className="w-1/2 mr-0.5">
                                    <div className="w-full border rounded p-3">
                                        <div className="flex justify-between pb-1">
                                            <div>
                                                <h4 className="flex text-[16px]">
                                                    Matakeng Stephen{" "}
                                                    <i className="ri-file-copy-line  mx-2  text-lg"></i>{" "}
                                                </h4>
                                                <p className="-mt-2">Founder & CEO </p>
                                            </div>
                                            <div className="flex ">
                                                <i className="ri-heart-3-line mt-2  mx-2  text-blue-500  text-lg"></i>
                                                <Menu
                                                    as="div"
                                                    className="relative inline-block text-left"
                                                >
                                                    <div>
                                                        <Menu.Button className="inline-flex w-32 justify-center border border-blue-500 text-blue-500 bg-blue-100 gap-x-1.5 rounded-md  px-3 py-2 text-md">
                                                            Save Contact
                                                            <ChevronDownIcon
                                                                className="-mr-1 h-5 w-5 text-blue-400"
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
                                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-32   origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                            <div className="py-1">
                                                                <Menu.Item>
                                                                    {({ active }) => (
                                                                        <a
                                                                            href="#"
                                                                            className={classNames(
                                                                                active ? " " : "text-gray-700",
                                                                                "block px-4 py-2 text-md text-green-500 font-semibold text-center"
                                                                            )}
                                                                        >
                                                                            New List
                                                                        </a>
                                                                    )}
                                                                </Menu.Item>
                                                                <hr />
                                                                <Menu.Item>
                                                                    {({ active }) => (
                                                                        <a
                                                                            href="#"
                                                                            className={classNames(
                                                                                active
                                                                                    ? "bg-gray-100 text-gray-900"
                                                                                    : "text-gray-700",
                                                                                "block px-4 py-2 text-sm"
                                                                            )}
                                                                        >
                                                                            New&nbsp;Campaign
                                                                        </a>
                                                                    )}
                                                                </Menu.Item>
                                                                <Menu.Item>
                                                                    {({ active }) => (
                                                                        <a
                                                                            href="#"
                                                                            className={classNames(
                                                                                active
                                                                                    ? "bg-gray-100 text-gray-900"
                                                                                    : "text-gray-700",
                                                                                "block px-4 py-2 text-sm"
                                                                            )}
                                                                        >
                                                                            Top 30 List
                                                                        </a>
                                                                    )}
                                                                </Menu.Item>
                                                                <Menu.Item>
                                                                    {({ active }) => (
                                                                        <a
                                                                            href="#"
                                                                            className={classNames(
                                                                                active
                                                                                    ? "bg-gray-100 text-gray-900"
                                                                                    : "text-gray-700",
                                                                                "block px-4 py-2 text-sm"
                                                                            )}
                                                                        >
                                                                            Creative
                                                                        </a>
                                                                    )}
                                                                </Menu.Item>
                                                            </div>
                                                        </Menu.Items>
                                                    </Transition>
                                                </Menu>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="flex justify-between mt-8">
                                            <div className="flex">
                                                <span>Location</span>
                                                <h3 className="text-[15px] -mt-0.5 ml-2">
                                                    Douala, Cameroon
                                                </h3>
                                            </div>
                                            <div className="flex justify-between">
                                                <div className="flex">
                                                    <i className="ri-phone-line  mx-2  -mt-1.5  text-lg"></i>{" "}
                                                    +237688254255
                                                </div>
                                                <div className="flex ml-8 -mt-1.5">
                                                    <i className="ri-thumb-up-line  mx-2 text-blue-500  text-lg"></i>
                                                    <i className="ri-thumb-down-line  mx-2 text-blue-500  text-lg"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-8">
                                            <div className="flex">
                                                <span>Location</span>
                                                <h3 className="text-[15px] -mt-0.5 ml-2">
                                                    Douala, Cameroon
                                                </h3>
                                            </div>
                                            <div className="flex justify-between">
                                                <div className="flex">
                                                    <i className="ri-mail-line -mt-1.5  mx-2   text-lg"></i>{" "}
                                                    .....@gmail.com
                                                </div>
                                                <div className="flex ml-8 -mt-1.5">
                                                    <i className="ri-thumb-up-line  mx-2 text-blue-500  text-lg"></i>
                                                    <i className="ri-thumb-down-line  mx-2 text-blue-500  text-lg"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-8 mb-5">
                                            <div className="flex">
                                                <span>Location</span>
                                                <h3 className="text-[15px] -mt-0.5 ml-2">Executive</h3>
                                            </div>
                                            <div className="flex justify-between">
                                                <div className="flex">
                                                    <i className="ri-mail-line -mt-1.5 mx-2   text-lg"></i>{" "}
                                                    eschencman@trinity.com
                                                </div>
                                                <div className="flex ml-8 -mt-1.5">
                                                    <i className="ri-thumb-up-line  mx-2 text-blue-500  text-lg"></i>
                                                    <i className="ri-thumb-down-line  mx-2 text-blue-500  text-lg"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/2 pb-5 h-fit  ml-0.5">
                                    <div className="w-full border rounded p-3">
                                        <div>
                                            <h3 className="text-xl">Activity Description</h3>
                                        </div>
                                        <br />
                                        <p>
                                            Our mission is to improve people's lives by bringing more
                                            humanity to healthcare. MedArrive enables healthcare
                                            providers and payors to power care services into the home,
                                            leveraging a fully integrated care management platform
                                            that bridges the virtual care gap with physician-led
                                            telemedicine combined with its network of EMS
                                            professionals. MedArrive’s holistic care model, network of
                                            field providers, and technology serve vulnerable
                                            populations in their homes, building patient
                                            self-advocacy, lowering total costs of care, and
                                            reconnecting the unengaged back to primary care. This
                                            unique approach gives patients access to trusted medical
                                            expertise by better utilizing an untapped workforce,
                                            ultimately ensuring continuity of care, better patient
                                            outcomes, and significant cost savings for patients and
                                            providers
                                        </p>
                                        <div className="flex ">
                                            <button
                                                id="button"
                                                className="px-4 bg-gray-200 text-gray-400 rounded mt-2 py-1.5 mr-2"
                                            >
                                                Healthcare
                                            </button>
                                            <button
                                                id="button"
                                                className="px-4 bg-gray-200 text-gray-400 rounded mt-2 mr-2 py-1.5"
                                            >
                                                Startup
                                            </button>
                                            <button
                                                id="button"
                                                className="px-4 bg-gray-200 text-gray-400 rounded mt-2 py-1.5"
                                            >
                                                Medical Inovation
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : id == 2 ? (
                            <>ok</>
                        ) : id == 3 ? (
                            <>ok</>
                        ) : id == 4 ? (
                            <>ok</>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

const Filter2: FC = () => {
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
                <link rel="stylesheet" href="/css/contactDetail.css" />
            </Header>
            {/* First Contact */}

            <div className="flex w-full">
                <div className=" mt-5 mb-5 w-full mr-5">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-2 py-2">
                            <div className="card ">
                                <div className="card-body">
                                    <div className="w-full flex   pl-5">
                                        <div className="w-1/6">
                                            <div className="flex ">
                                                <input type="checkbox" className="text-lg" />
                                                <h3 className="ml-5 text-lg">Company Name</h3>
                                            </div>
                                        </div>
                                        <div className="w-1/6">
                                            <h3 className="text-lg">Company HQ</h3>
                                        </div>
                                        <div className="w-1/6">
                                            <h3 className="text-lg">Industry</h3>
                                        </div>
                                        <div className="w-1/6">
                                            <h3 className="text-lg">Employee </h3>
                                        </div>
                                        <div className="w-1/6">
                                            <h3 className="text-lg">Revenue </h3>
                                        </div>
                                        <div className="w-1/6">&nbsp;</div>
                                    </div>
                                    {faqs.map((faq, index) => {
                                        return (
                                            <div className="py-1.5">
                                                <AccordionItem
                                                    key={index}
                                                    active={active}
                                                    handleToggle={handleToggle}
                                                    faq={faq}
                                                />
                                                <hr />
                                            </div>
                                        );
                                    })}

                                    {/* <div className="w-full flex">
                    <div className="w-1/2 border border-gray-200 rounded"></div>
                  </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Filter2;