import React, { useState, useEffect, useContext } from "react";
import dynamic from "next/dynamic";
import Dropzone from "react-dropzone";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import Link from "next/link";
import prisma from "../../lib/prisma";
import toast, { Toaster } from "react-hot-toast";
import { useSession, signIn, signOut } from "next-auth/react";
import { v4 as uuid } from "uuid";
import AuthContext from "../../Components/context";
import Multiselect from "multiselect-react-dropdown";
import Countries from "../../countries.json";
import Router from "next/router";
// import SearchBox from "@seanhouli/react-mapbox-search";
const SearchBox = dynamic(() => import("@seanhouli/react-mapbox-search"), {
    ssr: false,
});

interface UserDetails {
    name: string;
    id: string;
}

interface AgeRange {
    range: string;
    number: string;
}

interface SocialStatus {
    name: string;
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

function Details({ users, publisher }: Props) {
    const { data } = useSession();
    const datas = useContext(AuthContext);
    const Map = ReactMapboxGl({
        accessToken:
            "pk.eyJ1IjoiamFtaXNvbjE5OTgiLCJhIjoiY2wyOHl1cmc2MGU5bzNlbGdvOHptcDVkdiJ9.V7KqYwIqXPsxyQct1QHuEg",
    });
    const [isCheckedAge, setIsCheckedAge] = useState<boolean>(false);
    const [incomes, income] = useState<string>("");
    const [isCheckedStatus, setIsCheckedStatus] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>();
    const [age, setAge] = useState<AgeRange>({});

    const [audiences, setAudiences] = useState<Audience[]>([]);
    const [ts, setts] = useState<string>("");
    const [tf, settf] = useState<string>("");
    const [fp, setfp] = useState<string>("");
    const [tt, settt] = useState<string>("");
    const [et, setet] = useState<string>("");
    const [single, setSingle] = useState<string>("");
    const [married, setMarried] = useState<string>("");

    const [ageRange, setAgeRange] = useState<AgeRange[]>([
        {
            range: "12-17",
            number: "0",
        },
        {
            range: "18-24",
            number: "0",
        },
        {
            range: "25-34",
            number: "0",
        },
        {
            range: "35-50",
            number: "0",
        },
        {
            range: "50 +",
            number: "0",
        },
    ]);

    const [social, setSocial] = useState<SocialStatus[]>([
        {
            name: "Single",
            number: "",
        },
        {
            name: "Married",
            number: "",
        },
    ]);
    const [firstTap, setFirstTap] = useState<boolean>(true);
    const [secondTap, setSecondTap] = useState<boolean>(false);
    const [thirdTap, setThirdTap] = useState<boolean>(false);
    const [placeName, setPlaceName] = useState<string>("");
    const [files, setFiles] = useState<any[]>([]);
    const [locationName, setLocationName] = useState<any[]>([]);
    let count = 0;

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 959 && window.scrollY < 1900) {
                setSecondTap(true);
                setFirstTap(true);
                setThirdTap(false);
            } else if (window.scrollY > 1900) {
                setSecondTap(true);
                setFirstTap(true);
                setThirdTap(true);
            } else {
                setSecondTap(false);
                setFirstTap(true);
                setThirdTap(false);
            }
        });
    }, []);

    const handleFirstTap = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleSecondTap = () => {
        window.scrollTo({
            top: 980,
            behavior: "smooth",
        });
    };

    const handleThirdTap = () => {
        window.scrollTo({
            top: 1950,
            behavior: "smooth",
        });
    };

    const setAges = (values: string, id: string) => {
        const datas = ageRange.map((items) => {
            if (items.range == id) {
                return { ...items, number: values };
            } else return items;
        });
        setAgeRange(datas);
    };

    const handleSocials = (value: string, id: string) => {
        const datas = social.map((item) => {
            if (item.name == id) {
                return { ...item, number: value };
            } else return item;
        });
        setSocial(datas);
    };

    const handleDetails = async (e: any) => {
        // let item = arry[];
        // if (item) {
        //   const datas = item.map((items: any) => {
        //     return {
        //       ...items,
        //       details: items.details.map((itemss: any) => {
        //         return {
        //           ...itemss,
        //           incomeLevel: incomes,
        //           ageAudience: itemss.ageAudience.map((it: any) => {
        //             if (it) {
        //               return {
        //                 ...it,
        //                 twelve: ts,
        //                 eightheen: et,
        //                 twentyfive: tt,
        //                 thirtysix: tf,
        //                 fifthy: fp,
        //               };
        //             }
        //           }),
        //           maritalStatus: itemss.maritalStatus.map((it: any) => {
        //             if (it) {
        //               return {
        //                 ...it,
        //                 married: married,
        //                 single: single,
        //               };
        //             }
        //           }),
        //         };
        //       }),
        //     };
        //   });
        //   localStorage.setItem("advertiserData", JSON.stringify(datas));
        //   Router.push("/advertiser/Psycographics");
        // }
    };

    useEffect(() => {
        const item = "";
        // if (item) {
        //   item.map((items: any) => {
        //     items.details.map((itemData: any) => {
        //       if (itemData.incomeLevel !== "") income(itemData.incomeLevel);
        //       if (itemData) {
        //         setLocationName(itemData.location);
        //         // console.log(itemData.location);
        //         setAudiences(itemData.topAudience);
        //         itemData.ageAudience.map((it: any) => {
        //           if (it.twelve !== "") setts(it.twelve);
        //           if (it.eightheen !== "") setet(it.eightheen);
        //           if (it.twentyfive !== "") settt(it.twentyfive);
        //           if (it.thirtysix !== "") settf(it.thirtysix);
        //           if (it.fifthy !== "") setfp(it.fifthy);
        //         });
        //         itemData.maritalStatus.map((it: any) => {
        //           if (it.single !== "") setSingle(it.single);
        //           if (it.married !== "") setMarried(it.married);
        //         });
        //       }
        //     });
        //   });
        // }
    }, [locationName, setLocationName]);

    const onChangeValue = (event: any) => {
        income(event.target.value);
        console.log(event.target.value);
    };

    const handleDelete = (e: any, id: string) => {
        // const item = JSON.parse(localStorage.getItem("advertiserData"));
        // if (item) {
        //   const datas = item.map((items: any) => {
        //     return {
        //       ...items,
        //       details: items.details.map((itemss: any) => {
        //         return {
        //           ...itemss,
        //           location: itemss.location.filter((item: any) => item.id !== id),
        //         };
        //       }),
        //     };
        //   });
        //   localStorage.setItem("advertiserData", JSON.stringify(datas));
        //   setLocationName(datas);
        //   // Router.reload("step4")
        // }
    };

    const addData = () => {
        const item = JSON.parse(localStorage.getItem("advertiserData"));
        if (item) {
            const datas = item.map((items: any) => {
                return {
                    ...items,
                    details: items.details.map((itemss: any) => {
                        return {
                            ...itemss,
                            location: [
                                ...itemss.location,
                                { location: placeName, id: uuid() },
                            ],
                        };
                    }),
                };
            });
            localStorage.setItem("advertiserData", JSON.stringify(datas));
            setLocationName(datas);
            // Router.reload("step4")
        }
    };

    const handleAudience = (e: any, name: string, id: string, active: boolean) => {
        let counts = parseInt(localStorage.getItem("countAudienceDetails"));
        const item = JSON.parse(localStorage.getItem("advertiserData"));
        if (item) {
            const datas = item.map((items: any) => {
                return {
                    ...items,
                    details: items.details.map((itemss: any) => {
                        return {
                            ...itemss,
                            topAudience: itemss.topAudience.map((it: any) => {
                                if (it.id == id && active == false && count < 5) {
                                    localStorage.setItem(
                                        "countAudienceDetails",
                                        parseInt(counts + 1)
                                    );
                                    return {
                                        ...it,
                                        active: true,
                                    };
                                } else if (it.id == id && active == true) {
                                    localStorage.setItem(
                                        "countAudienceDetails",
                                        parseInt(counts - 1)
                                    );
                                    return {
                                        ...it,
                                        active: false,
                                    };
                                } else return it;
                            }),
                        };
                    }),
                };
            });
            localStorage.setItem("advertiserData", JSON.stringify(datas));
        }
    };

    return (
        <div className={classNames(datas.advanceUser ? "" : "body -mt-5")}>
            <div
                className={classNames(
                    datas.advanceUser ? "" : "mx-auto max-w-8xl px-6  lg:px-8   pt-8"
                )}
            >
                <div className="flex w-full mt-2 relative">
                    {datas.advanceUser ? (
                        <></>
                    ) : (
                        <div className="w-[15%]">
                            <div className="fixed">
                                <div className="">
                                    <p className="text-2xl font-bold mb-20">Instavee</p>
                                </div>
                                <div
                                    onClick={handleFirstTap}
                                    className={classNames(
                                        firstTap ? "text-green-600 border-green-600" : "",
                                        "w-full border-r-2 py-2 cursor-pointer pr-5"
                                    )}
                                >
                                    <span>Location</span>
                                </div>
                                <div
                                    onClick={handleSecondTap}
                                    className={classNames(
                                        secondTap ? "text-green-600 border-green-600" : "",
                                        "w-full border-r-2 py-2 cursor-pointer pr-5"
                                    )}
                                >
                                    <span>Demographics</span>
                                </div>
                                <div
                                    onClick={handleThirdTap}
                                    className={classNames(
                                        thirdTap ? "text-green-600 border-green-600" : "",
                                        "w-full border-r-2 py-2 cursor-pointer "
                                    )}
                                >
                                    <span>Interest</span>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className={classNames(datas.advanceUser ? "w-full" : "w-[85%]")}>
                        {datas.advanceUser ? (
                            <></>
                        ) : (
                            <div className="h-screen w-full flex justify-center">
                                <Toaster />
                                <div className="w-full px-28  mt-16">
                                    <h2 className="text-3xl flex justify-center">
                                        Enter Your Primary Target Location
                                    </h2>
                                    <div className="flex justify-between w-full mt-32">
                                        <div className="w-[40%] mt-20">
                                            <p>Enter Location</p>
                                            <div className="relative mr-5">
                                                <SearchBox
                                                    token="pk.eyJ1IjoiamFtaXNvbjE5OTgiLCJhIjoiY2wyOHl1cmc2MGU5bzNlbGdvOHptcDVkdiJ9.V7KqYwIqXPsxyQct1QHuEg"
                                                    callback={({ location, event }) => {
                                                        setPlaceName(location.place_name);
                                                    }}
                                                    selectColor="green"
                                                />
                                                <button
                                                    onClick={addData}
                                                    className="absolute top-11 right-1 -mr-15 -mt-10 h-9    rounded-r border-black px-4 bg-black text-white "
                                                >
                                                    Adds
                                                </button>
                                            </div>
                                            <div className="flex mt-5 ">
                                                {locationName.map((item, id) => {
                                                    return (
                                                        <div key={id} className="rounded-xl text-white w-fit bg-gray-600 px-2 py-0.5 ml-2">
                                                            {item.location}
                                                            <i
                                                                className="ri-close-fill ml-3 cursor-pointer -mt-1"
                                                                onClick={(e) => handleDelete(e, item.id)}
                                                            ></i>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        <div className="w-[60%]">
                                            <Map
                                                style="mapbox://styles/mapbox/streets-v10"
                                                accessToken="pk.eyJ1IjoiamFtaXNvbjE5OTgiLCJhIjoiY2wyOHl1cmc2MGU5bzNlbGdvOHptcDVkdiJ9.V7KqYwIqXPsxyQct1QHuEg"
                                                containerStyle={{
                                                    height: "40vh",
                                                    width: "60%",
                                                }}
                                            >
                                                <Layer
                                                    type="symbol"
                                                    id="marker"
                                                    layout={{ "icon-image": "marker-15" }}
                                                >
                                                    <Feature
                                                        coordinates={[-0.481747846041145, 51.3233379650232]}
                                                    />
                                                </Layer>
                                            </Map>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* second */}
                        <div
                            className={classNames(
                                datas.advanceUser ? "w-full" : "h-screen w-full"
                            )}
                        >
                            <div className="flex justify-center w-full">
                                <div className=" w-[50%]">
                                    <h2 className="font-bold text-3xl">Describe Your Audience</h2>
                                    <h6 className="font-semibold mt-4 mb-3 pr-3">
                                        Age Distribution
                                    </h6>
                                    <div className="flex">
                                        <input
                                            type="checkbox"
                                            checked={isCheckedAge}
                                            onChange={() => {
                                                setIsCheckedAge(!isCheckedAge);
                                            }}
                                        />
                                        <span className="text-semibold mx-2">
                                            I don’t have exact numbers
                                        </span>
                                    </div>
                                    {!isCheckedAge ? (
                                        <div>
                                            <div className="flex justify-between mt-4">
                                                <span className="text-lg font-semibold">12-17</span>
                                                <input
                                                    type="text"
                                                    value={ts}
                                                    onChange={(e) => {
                                                        setts(e.target.value);
                                                    }}
                                                    className="w-36 rounded-lg pl-2 py-1.5 bg-gray-100"
                                                    placeholder="00"
                                                />
                                            </div>
                                            <div className="flex justify-between mt-4">
                                                <span className="text-lg font-semibold">18-24</span>
                                                <input
                                                    type="text"
                                                    value={et}
                                                    onChange={(e) => {
                                                        setet(e.target.value);
                                                    }}
                                                    className="w-36 rounded-lg pl-2 py-1.5 bg-gray-100"
                                                    placeholder="00"
                                                />
                                            </div>
                                            <div className="flex justify-between mt-4">
                                                <span className="text-lg font-semibold">25-34</span>
                                                <input
                                                    type="text"
                                                    value={tt}
                                                    onChange={(e) => {
                                                        settt(e.target.value);
                                                    }}
                                                    className="w-36 rounded-lg pl-2 py-1.5 bg-gray-100"
                                                    placeholder="00"
                                                />
                                            </div>
                                            <div className="flex justify-between mt-4">
                                                <span className="text-lg font-semibold">35-50</span>
                                                <input
                                                    type="text"
                                                    value={tf}
                                                    onChange={(e) => {
                                                        settf(e.target.value);
                                                    }}
                                                    className="w-36 rounded-lg pl-2 py-1.5 bg-gray-100"
                                                    placeholder="00"
                                                />
                                            </div>
                                            <div className="flex justify-between mt-4">
                                                <span className="text-lg font-semibold">50+</span>
                                                <input
                                                    type="text"
                                                    value={fp}
                                                    onChange={(e) => {
                                                        setfp(e.target.value);
                                                    }}
                                                    className="w-36 rounded-lg pl-2 py-1.5 bg-gray-100"
                                                    placeholder="00"
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="w-full px-4 py-3 bg-gray-100">
                                            <h6 className="font-bold">
                                                Sect Top 2 audience categories
                                            </h6>
                                            <div className="flex  ml-10   mt-4">
                                                <input
                                                    type="checkbox"
                                                    className=" rounded-md bg-gray-100"
                                                    placeholder="00"
                                                />
                                                <span className="text-lg font-semibold ml-5">
                                                    12-17
                                                </span>
                                            </div>
                                            <div className="flex  ml-10   mt-4">
                                                <input
                                                    type="checkbox"
                                                    className=" rounded-md bg-gray-100"
                                                    placeholder="00"
                                                />
                                                <span className="text-lg font-semibold ml-5">
                                                    18-24
                                                </span>
                                            </div>
                                            <div className="flex  ml-10   mt-4">
                                                <input
                                                    type="checkbox"
                                                    className=" rounded-md bg-gray-100"
                                                    placeholder="00"
                                                />
                                                <span className="text-lg font-semibold ml-5">
                                                    24-34
                                                </span>
                                            </div>
                                            <div className="flex  ml-10   mt-4">
                                                <input
                                                    type="checkbox"
                                                    className=" rounded-md bg-gray-100"
                                                    placeholder="00"
                                                />
                                                <span className="text-lg font-semibold ml-5">
                                                    35-50
                                                </span>
                                            </div>
                                            <div className="flex  ml-10   mt-4">
                                                <input
                                                    type="checkbox"
                                                    className=" rounded-md bg-gray-100"
                                                    placeholder="00"
                                                />
                                                <span className="text-lg font-semibold ml-5">50 +</span>
                                            </div>
                                        </div>
                                    )}

                                    <h6 className="font-semibold mt-8 mb-3">Marital Status</h6>
                                    <div className="flex">
                                        <input
                                            type="checkbox"
                                            checked={isCheckedStatus}
                                            onChange={() => {
                                                setIsCheckedStatus(!isCheckedStatus);
                                            }}
                                        />
                                        <span className="text-semibold mx-2">
                                            I don’t have exact numbers
                                        </span>
                                    </div>
                                    {!isCheckedStatus ? (
                                        <div>
                                            <div className="flex justify-between mt-4">
                                                <span className="text-lg font-semibold ">single</span>

                                                <input
                                                    type="number"
                                                    value={single}
                                                    onChange={(e) => setSingle(e.target.value)}
                                                    className=" w-36 rounded-lg px-2 py-1.5 bg-gray-100"
                                                    placeholder="00"
                                                />
                                            </div>
                                            <div className="flex justify-between mt-4">
                                                <span className="text-lg font-semibold ">Married</span>
                                                <input
                                                    type="number"
                                                    value={married}
                                                    onChange={(e) => setMarried(e.target.value)}
                                                    className=" w-36 rounded-lg pl-2 py-1.5 bg-gray-100"
                                                    placeholder="00"
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="w-full px-4 py-3 bg-gray-100">
                                            <h6 className="font-bold">
                                                Sect Top 2 audience categories
                                            </h6>
                                            {social.map((item, id) => {
                                                return (
                                                    <div key={id} className="flex  ml-10   mt-4">
                                                        <input
                                                            type="checkbox"
                                                            value={socials[item.name]}
                                                            onChange={(e) =>
                                                                handleSocials(e.target.value, item.name)
                                                            }
                                                            className=" rounded-md bg-gray-100"
                                                            placeholder="00"
                                                        />
                                                        <span className="text-lg font-semibold ml-5">
                                                            {item.name}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}

                                    <div>
                                        <h6 className="font-semibold mt-8">Income Levels</h6>
                                        <div
                                            onChange={onChangeValue}
                                            className="flex justify-between my-5"
                                        >
                                            <div className="flex">
                                                <input
                                                    type="radio"
                                                    id="lowincome"
                                                    value="low income"
                                                    name="gender"
                                                    checked={incomes === "low income"}
                                                />{" "}
                                                <label htmlFor="lowincome" className="mx-2 text-lg">
                                                    Low Income
                                                </label>
                                            </div>
                                            <div>
                                                <input
                                                    type="radio"
                                                    value="mid income"
                                                    id="midincome"
                                                    name="gender"
                                                    checked={incomes === "mid income"}
                                                />{" "}
                                                <label htmlFor="midincome" className="mx-2 text-lg">
                                                    Mid Income
                                                </label>
                                            </div>
                                            <div>
                                                <input
                                                    type="radio"
                                                    value="high income"
                                                    id="highincome"
                                                    name="gender"
                                                    checked={incomes === "high income"}
                                                />{" "}
                                                <label htmlFor="highincome" className="mx-2 text-lg">
                                                    High Income
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 className="font-semibold mt-8">Languages</h6>
                                    </div>
                                    <div>
                                        <div className="relative mt-5 rounded-md shadow-sm">
                                            <div className="px-4 my-20">
                                                <Multiselect
                                                    className="w-full py-2.5 rounded bg-transparent"
                                                    options={Countries}
                                                    displayValue="name"
                                                    onSelect={(selected, item) => {
                                                        setSelectedOption(selected);
                                                        console.log(selected);
                                                    }}
                                                    onRemove={(selected, item) => {
                                                        setSelectedOption(selected);
                                                    }}
                                                // onSelect={handleTypeSelect}
                                                // onRemove={handleTypeRemove}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* third */}
                        <div
                            className={classNames(
                                datas.advanceUser
                                    ? "hidden"
                                    : "flex justify-center mt-20 h-screen"
                            )}
                        >
                            <div>
                                <div className="">
                                    <h2 className="text-4xl font-bold flex justify-center">
                                        Select the Top your audience increast
                                    </h2>
                                    <p className="text-2xl font-bold flex justify-center mt-8">
                                        {audiences.map((item) => {
                                            if (item.active == true) count = count + 1;
                                        })}{" "}
                                        {5 - count} Left
                                    </p>
                                    <div className="flex h-5">
                                        {audiences.map((item, id) => {
                                            if (item.active == true) {
                                                return (
                                                    <div key={id} className="m-1">
                                                        <div className="rounded-full bg-gray-200 px-2">
                                                            <p>{item.name}</p>
                                                        </div>
                                                    </div>
                                                );
                                            }
                                        })}
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-20 h-[50%] overflow-y-auto px-5 scrollbars">
                                    {audiences.map((items, id) => {
                                        return (
                                            <div key={id} className="mt-3">
                                                <button
                                                    onClick={(e) => {
                                                        handleAudience(
                                                            e,
                                                            items.name,
                                                            items.id,
                                                            items.active
                                                        );
                                                    }}
                                                    className={classNames(
                                                        !items.active ? "" : "bg-green-600 text-white",
                                                        "w-full flex justify-between py-3 rounded-md px-4 border border-gray-300"
                                                    )}
                                                >
                                                    <span>{items.name}</span>
                                                    <i
                                                        className={classNames(
                                                            !items.active
                                                                ? "ri-checkbox-blank-circle-line text-gray-300"
                                                                : "ri-checkbox-circle-line",
                                                            "  text-xl"
                                                        )}
                                                    ></i>
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        {/* fouth */}
                        {/* dropzone */}
                        <div
                            className={classNames(
                                datas.advanceUser ? "hidden" : "flex justify-center    mb-16  "
                            )}
                        >
                            <div className="w-full lg:mx-36 mx-36 px-14 bg-white">
                                <h2 className="justify-center flex my-5 text-3xl font-bold">
                                    Add Media
                                </h2>
                                <p className="text-xl font-bold py-3">Upload Cover Photo</p>
                                <Dropzone
                                    onDrop={(acceptedFiles) => {
                                        setFiles(
                                            acceptedFiles.map((file) =>
                                                Object.assign(file, {
                                                    preview: URL.createObjectURL(file),
                                                })
                                            )
                                        );
                                    }}
                                >
                                    {({ getRootProps, getInputProps }) => (
                                        <section className="wfp--dropzone">
                                            <div
                                                {...getRootProps({
                                                    className:
                                                        "wfp--dropzone__input w-full border-dashed border-2 border-gray-500 rounded-lg py-24",
                                                })}
                                            >
                                                <input {...getInputProps()} />
                                                <div className="flex justify-center">
                                                    <div>
                                                        <center>
                                                            <img src="/images/document.svg" alt="" />
                                                        </center>
                                                        <span className="text-green-300 flex justify-center">
                                                            Max 50px x 50px
                                                        </span>
                                                        <br />
                                                        <span className="font-semibold mt-3">
                                                            Or change and drop it here{" "}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    )}
                                </Dropzone>
                                <p className="text-xl font-bold py-3 mt-8">
                                    Additional photo Gallery
                                </p>
                                <Dropzone
                                    onDrop={(acceptedFiles) => console.log(acceptedFiles)}
                                >
                                    {({ getRootProps, getInputProps }) => (
                                        <section className="wfp--dropzone">
                                            <div
                                                {...getRootProps({
                                                    className:
                                                        "wfp--dropzone__input w-full border-dashed border-2 border-gray-500 rounded-lg py-24",
                                                })}
                                            >
                                                <input {...getInputProps()} />
                                                <div className="flex justify-center">
                                                    <div>
                                                        <center>
                                                            <img src="/images/document.svg" alt="" />
                                                        </center>
                                                        <span className="text-green-300 flex justify-center">
                                                            Max 50px x 50px
                                                        </span>
                                                        <br />
                                                        <span className="font-semibold mt-3">
                                                            Or change and drop it here{" "}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    )}
                                </Dropzone>
                                <div className="flex justify-center my-8 ">
                                    <button
                                        onClick={handleDetails}
                                        className="w-full py-2 border text-white bg-black border-gray-200 rounded-lg outline-none pl-2"
                                    >
                                        Proceed{" "}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;