import { Campaign } from '@instanvi/client/api';
import React, { useContext } from "react";
import { useState, FC } from "react";
import { useActiveMenu } from "react-active-menu";

import { userContext } from '@/Components/context/context'

import { useCampaign } from "../../api/createCampaign";

import Budgeting from "./budgeting";
import Creative from "./creative";
import Detail from "./detail";
import Objectives from "./objectives";
import Scheduling from "./scheduling";
import SOS from "./sos";
import Targeting from "./targeting";




interface ActiveMenuProps {
    smooth: boolean;
}

interface CampaignTypeProps {
    type: string;
}

export type ChannelProps = {
    onSuccess: () => void;
};

const Main = ({ onSuccess }: ChannelProps) => {
    const context = useContext(userContext)
    const data = {
        project: "6c28de38-4ac6-4f9f-9b5e-08ffbd700543",
        name: context.campaign,
        product_name: context.business,
        personas: context.audiencePersona,
        channelCampaign: [
            {
                channel: "5d17736b-04c5-4025-a6e7-4c7fb47d32d3",
                qty: 6
            }
        ],
        industry: context.industry,
        business_time: context.startTime,
        is_new: true,
        ship_physical_product: context.shipProduct,
        objective: context.objectives,
        start_date: context.startDate,
        end_date: context.stopDate,
        pattern: "8 * * * *",
        target_number: parseInt(context.reach),
        target_type: context.objective,
        target_period: context.frequence,
        target_price: context.price,
        target_bid: parseInt(context.bid),
        website_url: context.url,
        social_media_url: context.media,
        status: "hello world",
        media_type: "VIDEO",
        media_size: "14s",
        media_data: "https://brown-spec.org",
        tracking_type: "USSD",
        tracking: "1f83ef09-2779-4cfa-a5ac-c9777218a089",
        adsRequests: [
            {
                qty: "6",
                channel: "5d17736b-04c5-4025-a6e7-4c7fb47d32d3",
                campaign: "5d17736b-04c5-4025-a6e7-4c7fb47d32d3",
                status: "true"
            }
        ]
    }


    const { registerContainer, registerSection, registerTrigger, activeId } = useActiveMenu({
        smooth: true,
    });

    const [standardCampaign, setStandardCampain] = useState<boolean>(false);
    const [sosCampaign, setSosCampaign] = useState<boolean>(false);
    const [nextStep, setNextStep] = useState<boolean>(false);

    const HandleCampaignType = (type: string) => {
        setStandardCampain(type === "Standard");
        setSosCampaign(type === "SOS");
        setNextStep(true);
    };

    const Campaign = useCampaign({ onSuccess })

    const handleNextSection = (data: any) => {
        Campaign.submit(data)
        console.log(data)

    }

    return (
        <>
            <div className="flex flex-col h-screen justify-evenly bg-white">

                <div className="flex justify-evenly items-center">
                    <div className={`flex gap-4 ${nextStep ? "hidden" : ""}`}>
                        <div
                            onClick={() => {
                                HandleCampaignType("Standard");
                            }}
                            className="flex flex-col gap-6 w-[260px] pt-5 pb-20 border rounded justify-between items-center cursor-pointer"
                        >
                            <div className="flex rounded-full w-20 h-20 bg-gray-200"></div>
                            <h1 className="">Standard Campaign</h1>
                        </div>
                        <div
                            onClick={() => {
                                HandleCampaignType("SOS");
                            }}
                            className="flex flex-col gap-6 w-[260px] pt-5 pb-20 border rounded justify-between items-center cursor-pointer"
                        >
                            <div className="flex rounded-full w-20 h-20 bg-gray-200"></div>
                            <h1 className="">SOS Campaign</h1>
                        </div>
                    </div>
                </div>
                <div className={`flex flex-col h-screen bg-white ${standardCampaign ? "" : "hidden"}`}>
                    <div className="flex h-[92vh] border-b">
                        <nav className="flex pl-10 pt-10 flex-col w-[20%] h-screen border-r border">
                            <ul className="flex flex-col gap-2 w-full">
                                <li className="">
                                    <button
                                        type="button"
                                        ref={registerTrigger("1")}
                                        className={`w-full flex items-center cursor-pointer outline-none ${activeId == "1"
                                            ? "border-r-2 border-green-500 text-green-500"
                                            : ""
                                            }`}
                                    >
                                        Detail
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        ref={registerTrigger("2")}
                                        className={`w-full flex items-center cursor-pointer mt-2 outline-none ${activeId == "2"
                                            ? "border-r-2  border-green-500 text-green-500"
                                            : ""
                                            }`}
                                    >
                                        Objective
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        ref={registerTrigger("3")}
                                        className={`w-full flex items-center mt-2 cursor-pointer outline-none ${activeId == "3"
                                            ? "border-r-2 border-green-500 text-green-500"
                                            : ""
                                            }`}
                                    >
                                        Creative
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        ref={registerTrigger("4")}
                                        className={`w-full flex pr-5 items-center mt-2 cursor-pointer outline-none ${activeId == "4"
                                            ? "border-r-2 border-green-500 text-green-500"
                                            : ""
                                            }`}
                                    >
                                        Scheduling
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        ref={registerTrigger("5")}
                                        className={`w-full flex items-center mt-2 cursor-pointer outline-none ${activeId == "5"
                                            ? "border-r-2 border-green-500 text-green-500"
                                            : ""
                                            }`}
                                    >
                                        Targeting
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        ref={registerTrigger("6")}

                                    >

                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        ref={registerTrigger("7")}
                                        className={`w-full flex items-center  -mt-6 pr-2 cursor-pointer outline-none ${activeId == "6"
                                            ? "border-r-2 border-green-500 text-green-500"
                                            : ""
                                            }`}
                                    >
                                        Budgeting
                                    </button>
                                </li>

                            </ul>
                        </nav>
                        <div className="overflow-auto grow" ref={registerContainer}>
                            <section
                                ref={registerSection("1")}
                                className={` py-10 flex flec-col justify-evenly items-center`}
                            >
                                <div className="flex flex-col h-full w-[90%]">
                                    <Detail />
                                </div>
                            </section>
                            <hr />
                            <section
                                ref={registerSection("2")}
                                className={` py-10 justify-evenly`}
                            >
                                <div className="flex flex-col h-full w-[90%]">
                                    <Objectives />
                                </div>
                            </section>
                            <hr />
                            <section
                                ref={registerSection("3")}
                                className={` py-10 flex justify-evenly`}
                            >
                                <div className="flex flex-col h-full w-[90%]">
                                    <Creative />
                                </div>
                            </section>
                            <hr />
                            <section
                                ref={registerSection("4")}
                                className={` py-10 flex justify-evenly`}
                            >
                                <div className="flex flex-col h-full w-[90%]">
                                    <Scheduling />
                                </div>
                            </section>
                            <hr />
                            <section
                                ref={registerSection("5")}
                                className={`h-[73vh] py-10 flex justify-evenly`}
                            >
                                <div className="flex flex-col h-full w-[90%]">
                                    <Targeting />
                                </div>
                            </section>
                            <hr />

                            <section
                                ref={registerSection("6")}
                                className={` py-32   flex justify-evenly`}
                            >
                                <div className="flex flex-col py-10 h-full w-[90%]">
                                    <Budgeting />
                                </div>
                            </section>
                            <section
                                ref={registerSection("7")}
                                className={`    flex justify-evenly`}
                            >
                                &nbsp;
                            </section>
                            <hr />
                        </div>
                    </div>

                    <div className="flex justify-between items-center px-16 py-3 w-full h-[8%] bg-white fixed bottom-0 rigth-0 border-t">
                        <div className="cursor-pointer px-10 py-2.5 text-sm flex justify-evenly items-center rounded-lg text-gray-600 bg-gray-200 font-semibold">
                            Save draft
                        </div>
                        <div
                            // ref={registerTrigger(activeId)}
                            onClick={() => handleNextSection(data)}
                            className="cursor-pointer px-10 py-2.5 text-sm flex justify-evenly items-center rounded-lg text-white bg-green-500"
                        >
                            {Campaign.isLoading ? "Publishing" : "Publish"}
                        </div>
                    </div>
                </div>
                <div className={`flex flex-col h-screen ${sosCampaign ? "" : "hidden"}`}>
                    <SOS />
                </div>
            </div>
        </>
    );
}

export default Main
