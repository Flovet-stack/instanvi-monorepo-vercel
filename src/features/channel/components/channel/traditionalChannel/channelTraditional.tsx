import { NextRouter, useRouter } from 'next/router';
import React, { useState, useContext, FC } from "react";

interface TChannelsProps {
    users: any;
}

export const TChannels: FC = () => {


    const router: NextRouter = useRouter();
    const redirect: string = router.query.redirect as string;
    const [storage, setStorage] = useState(
        typeof window !== 'undefined' ?
            JSON.parse(localStorage.getItem('channel') || '{}')
            :
            ""
    )
    const handleMedia = (e: React.MouseEvent<HTMLDivElement>, channel: string): void => {
        localStorage.setItem("channel", JSON.stringify({ ...storage, sub_category: channel }))
        router.replace(redirect || '/publisher/channel/details')
    };

    return (
        <div className="">
            <div className="body h-screen">
                {/* header */}
                <div className="mx-auto max-w-8xl px-6 lg:px-8 pt-3">

                    <div className="justify-center flex mt-10 md:mt-20">
                        <div>
                            <h2 className="text-bold flex justify-center text-3xl">
                                Traditional Media Chanels
                            </h2>
                            <div className="w-full  mt-20 md:w-[100%]   border border-gray-200 bg-white rounded-lg ">
                                <div className="w-full">
                                    <div
                                        onClick={(e) => {
                                            handleMedia(e, "radio");
                                        }}
                                        className="flex justify-between py-6 border-b px-4 w-full cursor-pointer"
                                    >
                                        <div className="flex">
                                            <img
                                                src="/images/Group 50130.svg"
                                                className="mr-5 h-12 w-12"
                                                alt=""
                                            />
                                            <div className="ml-3">
                                                <h6 className="font-semibold text-lg mt-2 mr-32">
                                                    Radio
                                                </h6>
                                            </div>
                                        </div>
                                        <i className="ri-arrow-right-s-line text-4xl mx-4 mt-1"></i>
                                    </div>

                                    <div onClick={(e) => {
                                        handleMedia(e, "Television");
                                    }} className="flex justify-between py-6 border-b px-4 w-full cursor-pointer">
                                        <div className="flex">
                                            <img
                                                src="/images/Group 1000000897.svg"
                                                className="mr-2 h-12 w-12"
                                                alt=""
                                            />
                                            <div className="ml-3">
                                                <h6 className="font-semibold text-lg mt-2">
                                                    Television
                                                </h6>
                                            </div>
                                        </div>
                                        <i className="ri-arrow-right-s-line text-4xl mx-4 mt-1"></i>
                                    </div>
                                    <div onClick={(e) => {
                                        handleMedia(e, "Podcast");
                                    }} className="flex justify-between py-6 border-b px-4 w-full cursor-pointer">
                                        <div className="flex">
                                            <img
                                                src="/images/Group 1000000898.svg"
                                                className="mr-2 h-12 w-12"
                                                alt=""
                                            />
                                            <div className="ml-3">
                                                <h6 className="font-semibold text-lg mt-2">Podcast</h6>
                                            </div>
                                        </div>
                                        <i className="ri-arrow-right-s-line text-4xl mx-4 mt-1"></i>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}