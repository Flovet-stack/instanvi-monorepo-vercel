import { NextRouter, useRouter } from 'next/router';
import React, { useState } from "react";


export function AdChannels(): JSX.Element {

    const router: NextRouter = useRouter();
    const redirect: string = router.query.redirect as string;
    const [storage, setStorage] = useState(
        typeof window !== 'undefined' ?
            JSON.parse(localStorage.getItem('channel') || '{}')
            :
            ""
    )

    // connect

    const handleChannel = (e: React.MouseEvent<HTMLDivElement>, channel: string, links: string): void => {
        localStorage.setItem("channel", JSON.stringify({ ...storage, category: channel }))
        router.replace(redirect || `/publisher/channel/${links}`)
    };


    return (
        <div className="">
            <div className="body h-screen">
                {/* header */}
                <div className="mx-auto max-w-8xl px-6 lg:px-8 pt-3">
                    <div className="justify-center flex mt-5 md:mt-5">
                        <div>
                            <h2 className="text-bold flex justify-center text-3xl">
                                What Your advertissement Channels
                            </h2>
                            <div className="w-full  md:w-[100%] border border-gray-200 bg-white rounded-lg  mt-5">

                                <div className="w-full">
                                    <div
                                        onClick={(e) => {
                                            handleChannel(e, "advertissementChannel", "advertissementChannel");
                                        }}
                                        className="flex justify-between py-6 border-b px-4 w-full cursor-pointer"
                                    >
                                        <div className="flex">
                                            <img
                                                src="/images/browser.1 1.svg"
                                                className="mr-5"
                                                alt=""
                                            />
                                            <div className="ml-3">
                                                <h6 className="font-semibold text-lg">
                                                    Web
                                                </h6>
                                                <p className="text-sm">
                                                    Web Publishing SEO{" "}
                                                </p>
                                            </div>
                                        </div>
                                        <i className="ri-arrow-right-s-line text-4xl mx-4 mt-1"></i>
                                    </div>
                                    <div
                                        onClick={(e) => {
                                            handleChannel(e, "advertissementChannel", "advertissementChannel");
                                        }}
                                        className="flex justify-between py-6 border-b px-4 w-full cursor-pointer"
                                    >
                                        <div className="flex">
                                            <img
                                                src="/images/browser.1 1.svg"
                                                className="mr-5"
                                                alt=""
                                            />
                                            <div className="ml-3">
                                                <h6 className="font-semibold text-lg">
                                                    Online Influencer
                                                </h6>
                                                <p className="text-sm">
                                                    Facebook, Instagram, Twitter, Tiktok, Snapchat,
                                                    WhatsApp, Telegram{" "}
                                                </p>
                                            </div>
                                        </div>
                                        <i className="ri-arrow-right-s-line text-4xl mx-4 mt-1"></i>
                                    </div>
                                    <div
                                        onClick={(e) => {
                                            handleChannel(e, "mediaChannel", "advertissementChannel");
                                        }}
                                        className="flex justify-between py-6 border-b px-4 w-full cursor-pointer"
                                    >
                                        <div className="flex">
                                            <img src="/images/radio 1.svg" className="mr-2" alt="" />
                                            <div className="ml-3">
                                                <h6 className="font-semibold text-lg">
                                                    Traditional Media
                                                </h6>
                                                <p className="text-sm">Radio, Television, Podcast</p>
                                            </div>
                                        </div>
                                        <i className="ri-arrow-right-s-line text-4xl mx-4 mt-1"></i>
                                    </div>
                                    <div
                                        onClick={(e) => {
                                            handleChannel(e, "EVENT", "mediaChannel");
                                        }}
                                        className="flex justify-between py-6 border-b px-4 w-full cursor-pointer"
                                    >
                                        <div className="flex">
                                            <img src="/images/Icon-Set.svg" className="mr-5" alt="" />
                                            <div className="ml-3">
                                                <h6 className="font-semibold text-lg">
                                                    OOH and DOOH
                                                </h6>
                                                <p className="text-sm">Billboards, Openspaces</p>
                                            </div>
                                        </div>
                                        <i className="ri-arrow-right-s-line text-4xl mx-4 mt-1"></i>
                                    </div>
                                    <div
                                        onClick={(e) => {
                                            handleChannel(e, "traditionalChannel", "traditionalChannel");
                                        }}
                                        className="flex justify-between py-6 border-b px-4 w-full cursor-pointer"
                                    >
                                        <img src="/images/calendar 1.svg" className="mr-4" alt="" />

                                        <div>
                                            <h6 className="font-semibold text-lg">
                                                Events, Affiliation & Sponsorships
                                            </h6>
                                            <p className="text-sm">
                                                {" "}
                                                Events organizers, MCs, Sports Tournaments, Seminars,
                                                Trade shows etc
                                            </p>
                                        </div>
                                        <i className="ri-arrow-right-s-line text-4xl mx-4 mt-1"></i>
                                    </div>
                                    <div
                                        onClick={(e) => {
                                            handleChannel(e, "traditionalChannel", "traditionalChannel");
                                        }}
                                        className="flex justify-between py-6 border-b px-4 w-full cursor-pointer"
                                    >
                                        <div className="flex">
                                            <img src="/images/Vector.svg" className="mr-2" alt="" />
                                            <div className="ml-3">
                                                <h6 className="font-semibold text-lg">
                                                    Social Areners
                                                </h6>
                                                <p className="text-sm">
                                                    Organization leaders, Territorial Leaders, Churches,
                                                    Hospitals, Hotels etc{" "}
                                                </p>
                                            </div>
                                        </div>
                                        <i className="ri-arrow-right-s-line text-4xl mx-4 mt-1"></i>
                                    </div>
                                    <div
                                        onClick={(e) => {
                                            handleChannel(e, "mediaChannel", "mediaChannel");
                                        }}
                                        className="flex justify-between py-6 border-b px-4 w-full cursor-pointer"
                                    >
                                        <div className="flex">
                                            <img
                                                src="/images/message-square 1.svg"
                                                className="mr-2"
                                                alt=""
                                            />

                                            <div className="ml-3">
                                                <h6 className="font-semibold text-lg">
                                                    Direct Outreach
                                                </h6>
                                                <p className="text-sm">
                                                    In person prospecting, Cold Calling,{" "}
                                                </p>
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