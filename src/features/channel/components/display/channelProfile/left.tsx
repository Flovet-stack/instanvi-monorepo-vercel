import Router, { useRouter } from "next/router";
import React from "react";

import { useChannel } from "@/features/channel/api/getChannel";


export default function Left() {
    const { asPath } = useRouter()
    const urlString = asPath
    const url = urlString.split("?")
    const { data, isLoading } = useChannel(url[1])

    return (
        <div className="w-1/4 flex">
            <div className=" py-8 px-2 w-full bg-white rounded">
                <div className="flex justify-center relative">
                    <img src="/images/Ellipse 18.svg" className="h-24 w-24" alt="" />
                    <img
                        src="/images/twiters.svg"
                        alt=""
                        className="absolute bottom-0  ml-12 mx-2 h-6 w-6"
                    />
                </div>
                <div className="flex justify-center w-full  ">
                    <div className="w-full ">
                        <div className="flex justify-center">
                            <div className="flex mt-4 ">
                                <h2>Bmstr Radio</h2>
                                <div>
                                    <img
                                        src="/images/badge_check_icon_152693 1.svg"
                                        className="ml-1"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <center>
                            <span className="text-gray-400">@{data?.data.data.last_name}</span>
                        </center>
                        <div className="flex justify-center">
                            <div className="flex mt-2">
                                <img src="/images/earth.svg" alt="" />
                                <span className="ml-2">{data?.data.data.location}</span>
                            </div>
                        </div>
                        <div className="w-full bg-[#f5f5f5] mt-8 cursor-pointer rounded">
                            <div className="flex justify-center w-full py-4">
                                <div>
                                    <span>Audience Size</span>
                                    <h1 className="text-3xl mt-2 text-center">{data?.data.data.audience_number}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="w-full bg-[#f5f5f5] mt-4 cursor-pointer rounded">
                            <div className="flex justify-center w-full py-4">
                                <div>
                                    <span>Engagement Rate</span>
                                    <h1 className="text-3xl mt-2 text-center">~2.8%</h1>
                                </div>
                            </div>
                        </div>
                        <div className="w-full bg-[#f5f5f5] mt-4 cursor-pointer rounded">
                            <div className="flex justify-center w-full py-4">
                                <div>
                                    <div className="w-full flex justify-center">
                                        {" "}
                                        <span className="text-center">Review Rating</span>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="flex">
                                            <h1 className="text-3xl mt-2 text-center">3.5</h1>
                                            <img
                                                src="/images/Group 50185.svg"
                                                className="mx-2 mt-2"
                                                alt=""
                                            />
                                            <span className="mt-3">(1986 reviews)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full bg-[#f5f5f5] mt-4 cursor-pointer rounded">
                            <div className="flex justify-center w-full py-4">
                                <div>
                                    <span>Experience (Publications)</span>
                                    <h1 className="text-3xl mt-2 text-center">10Yrs</h1>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-8">
                            {/* {
                                data?.data.data.marital_status.map((item: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined, id: React.Key | null | undefined) => {
                                    return (
                                        <div key={id} className="px-2 bg-[#f5f5f5] rounded-xl mt-1">
                                            <span>{item}</span>
                                        </div>
                                    )
                                })
                            }
                            {
                                data?.data.data.languages.map((item: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined, id: React.Key | null | undefined) => {
                                    return (
                                        <div key={id} className="px-2 bg-[#f5f5f5] rounded-xl mt-1">
                                            <span>{item}</span>
                                        </div>
                                    )
                                })
                            } */}

                            <div className="px-2 bg-[#f5f5f5] rounded-xl mt-1">
                                <span>{data?.data.data.team_size}</span>
                            </div>
                            <div className="px-2 bg-[#f5f5f5] rounded-xl mt-1">
                                <span>{data?.data.data.industry}</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
