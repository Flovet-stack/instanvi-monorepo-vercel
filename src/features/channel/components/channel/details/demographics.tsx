import { NextRouter, useRouter } from 'next/router';
import React, { useState, useEffect, useContext } from "react";
import { useActiveMenu } from "react-active-menu"

import { userContext } from "@/Components/context/context";

import { Context } from "../../context";

import Audience from "./audience";
import IncomeLevel from './incomeLevel'
import Language from "./language";
import Location from './location'
import MaritalStatus from './maritalstatus'
import Media from "./media";
import TopAudience from "./topAudience";







interface UserDetails {
    name: string;
    id: string;
}

interface AgeRange {
    range: string;
    number: string;
}


interface Audience {
    name: string;
    id: string;
    active: boolean;
}

interface Props {
    users: UserDetails[];
    publisher: string;
}

function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(" ");
}

export const Details = ({ users, publisher }: Props) => {
    const context = useContext(userContext)
    const [storage, setStorage] = useState(
        typeof window !== 'undefined' ?
            JSON.parse(localStorage.getItem('channel') || '{}')
            :
            ""
    )
    const router: NextRouter = useRouter();
    const redirect: string = router.query.redirect as string;
    const { registerContainer, registerSection, registerTrigger, activeId } = useActiveMenu({
        offset: 60,
        smooth: true
    })


    const handleDetails = async (e: any) => {
        e.preventDefault()
        localStorage.setItem("channel", JSON.stringify(
            {
                ...storage,
                revenue: "1-6",
                bio: "This is me",
                currency: "magnam",
                logo: "https://loremflickr.com/640/480?lock=6793668293820416",
                cover_photo: "https://loremflickr.com/640/480?lock=4056800133382144",
                location: "North Jarrellberg",
                url: "https://understated-provider.name",
                is_network: true,
                industry_of_focus: context.audience,
                audience_number: context.t_audience,
                audience_description: {
                    age_distribution: context.ageDistribution,
                    marital_status: context.maritalStatus,
                    language: context.language,
                    income_level: context.incomeLevel
                },
            }))
        router.replace(redirect || '/publisher/channel/psycographics')
    }

    return (
        <div className={"body -mt-5"}>
            <div
                className={
                    "mx-auto max-w-8xl px-6  lg:px-8   pt-8"
                }
            >
                <div className="flex w-full pt-2 relative">
                    <div className="w-[15%] ">
                        <div className="fixed w-[15%]  border-r">
                            <div className="h-screen border-r ">
                                <div
                                    ref={registerTrigger("location")}
                                    className={classNames(
                                        activeId == "location" ? "text-green-600 border-r-2 border-green-600 " : "",
                                        "w-full   py-2 cursor-pointer pr-5"
                                    )}
                                >
                                    <span>Location</span>
                                </div>
                                <div
                                    ref={registerTrigger("age")}
                                    className={classNames(
                                        activeId == "age" ? "text-green-600 border-r-2 border-green-600 z" : "",
                                        "w-full    py-2 cursor-pointer pr-5"
                                    )}
                                >
                                    <span>Age distribution</span>
                                </div>
                                <div
                                    ref={registerTrigger("marital")}

                                    className={classNames(
                                        activeId == "marital" ? "text-green-600 border-r-2 border-green-600" : "",
                                        "w-full   py-2 cursor-pointer"
                                    )}
                                >
                                    <span>Marital status</span>
                                </div>
                                <div
                                    ref={registerTrigger("income")}
                                    className={classNames(
                                        activeId == "income" ? "text-green-600 border-r-2 border-green-600 " : "",
                                        "w-full   py-2 cursor-pointer pr-5"
                                    )}
                                >
                                    <span>Income Level</span>
                                </div>
                                <div
                                    ref={registerTrigger("audience")}
                                    className={classNames(
                                        activeId == "audience" ? "text-green-600 border-r-2 border-green-600 z" : "",
                                        "w-full    py-2 cursor-pointer pr-5"
                                    )}
                                >
                                    <span>Audience</span>
                                </div>
                                <div
                                    ref={registerTrigger("language")}

                                    className={classNames(
                                        activeId == "language" ? "text-green-600 border-r-2 border-green-600" : "",
                                        "w-full   py-2 cursor-pointer"
                                    )}
                                >
                                    <span>Langauage</span>
                                </div>
                                <div
                                    ref={registerTrigger("media")}

                                    className={classNames(
                                        activeId == "media" ? "text-green-600 border-r-2 border-green-600" : "",
                                        "w-full   py-2 cursor-pointer"
                                    )}
                                >
                                    <span>Media</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"w-[85%]"}>

                        {/* first */}
                        <div ref={registerSection("location")}>
                            <Location />
                        </div>
                        {/* second */}

                        <div ref={registerSection("age")}>
                            <Audience />
                        </div>
                        {/* third */}

                        <div ref={registerSection("marital")}>
                            <MaritalStatus />
                        </div>
                        {/* Fourth */}
                        <div ref={registerSection("income")}>
                            <IncomeLevel />
                        </div>

                        {/* fifth */}
                        <div ref={registerSection("audience")}>
                            <TopAudience />
                        </div>

                        {/* language*/}
                        <div ref={registerSection("language")}>
                            <Language />
                        </div>

                        {/* dropzone */}
                        <div ref={registerSection("media")}>
                            <Media />
                        </div>
                        <div className="flex lg:px-12 mx-12 lg:mx-36 mx-36 justify-center my-8 ">
                            <button
                                onClick={handleDetails}
                                id="button"
                                className="w-full py-2 border text-white bg-black border-gray-200 rounded-lg outline-none pl-2"
                            >
                                Proceed{" "}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;