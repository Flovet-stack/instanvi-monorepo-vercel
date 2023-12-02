import React, { useState, useEffect, useContext } from "react";
import IncomeLevel from './incomeLevel'
import Location from './location'
import Audience from "./audience";
import TopAudience from "./topAudience";
import Media from "./media";
import Language from "./language";
import MaritalStatus from './maritalstatus'
import { NextRouter, useRouter } from 'next/router';
import { userContext } from "@/Components/context/context";
import { useActiveMenu } from "react-active-menu"




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
    const { registerContainer, registerSection, registerTrigger, activeId } = useActiveMenu({
        offset: 60,
        smooth: true
    })
    const [storage, setStorage] = useState(
        typeof window !== 'undefined' ?
            JSON.parse(localStorage.getItem('channel') || '{}')
            :
            ""
    )
    const router: NextRouter = useRouter();
    const redirect: string = router.query.redirect as string;
    const [firstTap, setFirstTap] = useState<boolean>(true);
    const [secondTap, setSecondTap] = useState<boolean>(false);
    const [thirdTap, setThirdTap] = useState<boolean>(false);


    const handleDetails = async (e: any) => {

        localStorage.setItem("channel", JSON.stringify(
            {
                ...storage,
                age_distribution: context.ageDistribution,
                marital_status: context.maritalStatus,
                languages: context.language,
                industry_focus: context.audience,
                cover_photo: "https://images.icon",
                logo: "https://images.icon",
                income_levels: context.incomeLevel,
                location: context.location,
                is_network: false,
                url: "https://instanvi.com",
                currency: "FCFA",
                revenue: "12000000",
                bio: "I'm a good guy"
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