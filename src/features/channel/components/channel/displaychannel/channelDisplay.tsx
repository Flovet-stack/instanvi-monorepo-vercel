import { NextRouter, useRouter } from 'next/router';
import React, { FC, useState } from "react";

interface AdvertiserData {
    BroadcastChannel: {
        channel: string;
    }[];
}

export const DChannels: FC = () => {
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
                                Print & Display Channels
                            </h2>
                            <div className="w-full  mt-20 md:w-[100%]   border border-gray-200 bg-white rounded-lg ">
                                <div className="w-full">
                                    <div onClick={(e) => { handleMedia(e, "Billboards") }} className="flex justify-between py-6 border-b px-4 w-full cursor-pointer">
                                        <div className="flex">
                                            <img
                                                src="/images/1.svg"
                                                className="mr-5 h-12 w-12"
                                                alt=""
                                            />
                                            <div className="ml-3">
                                                <h6 className="font-semibold text-lg mt-2 mr-32">
                                                    Billboards
                                                </h6>
                                            </div>
                                        </div>
                                        <i className="ri-arrow-right-s-line text-4xl mx-4 mt-1"></i>
                                    </div>
                                    <div onClick={(e) => { handleMedia(e, "Magazines and Publications") }} className="flex justify-between py-6 border-b px-4 w-full cursor-pointer">
                                        <div className="flex">
                                            <img
                                                src="/images/2.svg"
                                                className="mr-2 h-12 w-12"
                                                alt=""
                                            />
                                            <div className="ml-3">
                                                <h6 className="font-semibold text-lg mt-2">
                                                    Magazines & Publications
                                                </h6>
                                            </div>
                                        </div>
                                        <i className="ri-arrow-right-s-line text-4xl mx-4 mt-1"></i>
                                    </div>
                                    <div onClick={(e) => { handleMedia(e, "Siggn Drivers") }} className="flex justify-between py-6 border-b px-4 w-full cursor-pointer">
                                        <div className="flex">
                                            <img
                                                src="/images/3.svg"
                                                className="mr-2 h-12 w-12"
                                                alt=""
                                            />
                                            <div className="ml-3">
                                                <h6 className="font-semibold text-lg mt-2">
                                                    Car caravan & Sign Drivers
                                                </h6>
                                            </div>
                                        </div>
                                        <i className="ri-arrow-right-s-line text-4xl mx-4 mt-1"></i>
                                    </div>
                                    <div onClick={(e) => { handleMedia(e, "Posters and Banners") }} className="flex justify-between py-6 border-b px-4 w-full cursor-pointer">
                                        <div className="flex">
                                            <img
                                                src="/images/4.svg"
                                                className="mr-2 h-12 w-12"
                                                alt=""
                                            />
                                            <div className="ml-3">
                                                <h6 className="font-semibold text-lg mt-2">
                                                    Posters & Banners
                                                </h6>
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