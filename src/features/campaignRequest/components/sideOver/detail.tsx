import React, { useState, useEffect, useContext } from "react";
import { userContext } from '@/Components/context/context'

// import AuthContext from '@/Components/context'

interface DetailProps {
}

const Detail: React.FC<DetailProps> = () => {
    const context = useContext(userContext)
    const [campaign, setCampaign] = useState<string>("");
    const [Business, setBusiness] = useState<string>("");
    const [industry, setIndustry] = useState<string>("");
    const [Teamsize, setTeamsize] = useState<string>("");
    const [checkbox, setCheckbox] = useState<boolean>(false);
    const [shipProduct, setShipProducts] = useState<string>("yes")
    const [array, setArray] = useState<string[]>([]);


    const onChangeValues = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShipProducts(event.target.value);
        console.log(event.target.value);
        context.setShipProducts(event.target.value)
        // ContextData.setPlacementDetails([...ContextData.placementDetails, shipProduct]);
    };

    return (
        <div className="bg-white mt-10">
            <div className="justify-center flex">
                <div className="w-full  md:w-[38%] md:px-0 px-4">
                    <div className="">
                        <div className="mt-3">
                            <span className="my-1">Campaign</span>
                            <input
                                type="text"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    context.setCampaign(e.target.value)
                                    //   ContextData.setPlacementDetails([...ContextData.placementDetails, campaign]);
                                }}
                                className="w-full py-2.5 border mt-1 border-gray-200 mr-1  rounded-lg outline-none pl-2"
                                placeholder="Enter Campaign"
                            />
                        </div>
                    </div>
                    <br />
                    <div className="mt-3">
                        <span className="my-1">Business/Product Name</span>
                        <input
                            type="text"
                            className="w-full py-2.5 border mt-1 border-gray-200 ml-1 rounded-lg outline-none pl-2"
                            placeholder="Product ABC"

                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {

                                context.setBusiness(e.target.value)
                                // ContextData.setPlacementDetails([...ContextData.placementDetails, Business]);
                            }}
                        />
                    </div>
                    <br />
                    <div className="mt-3">
                        <span className="my-1">Industry</span>
                        <select
                            name=""

                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {

                                context.setIndustry(e.target.value)
                                // ContextData.setPlacementDetails([...ContextData.placementDetails, industry]);
                            }}
                            className="w-full py-2.5 border mt-1 border-gray-200 ml-1 rounded-lg outline-none pl-2"
                            id=""
                        >
                            <option value="Heath Care">Heath Care</option>
                            <option value="Computer">Computer</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <br />
                    <div className="mt-3">
                        <span className="my-1">Team Size</span>
                        <select
                            name=""

                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {

                                context.setTeamSize(e.target.value)
                                // ContextData.setPlacementDetails([...ContextData.placementDetails, Teamsize]);
                            }}
                            className="w-full py-2.5 border mt-1 border-gray-200 ml-1 rounded-lg outline-none pl-2"
                            id=""
                        >
                            <option value="0-5">0-5</option>
                            <option value="6-100">6-100</option>
                            <option value="101-500">101-500</option>
                            <option value="501-1000+">501-1000+</option>
                        </select>
                    </div>
                    <div className="flex mt-8">
                        <input
                            type="checkbox"
                            id="nfs"
                            onClick={() => {
                                setCheckbox(!checkbox);
                                context.setCheckbox(!checkbox)
                                // ContextData.setPlacementDetails([...ContextData.placementDetails, checkbox]);
                            }}
                            checked={checkbox}
                        />
                        <label
                            htmlFor="nfs"

                            className="ml-3"
                        >
                            Newly formed startup
                        </label>
                    </div>
                    <div className="mt-8">
                        <p>Do your ship physical products to customers?</p>


                        <div onChange={onChangeValues} className="mt-2 flex justify-between">
                            <div className="flex items-center mb-4">
                                <input
                                    id="default-radio-1"
                                    type="radio"
                                    value="yes"
                                    checked={shipProduct === "yes"}
                                    name="default-radio"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    htmlFor="default-radio-1"
                                    className="ml-2 text-sm font-medium text-black dark:text-black"
                                >
                                    Yes
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    id="default-radio-2"
                                    type="radio"
                                    value="no"
                                    checked={shipProduct === "no"}
                                    name="default-radio"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    htmlFor="default-radio-2"
                                    className="ml-2 text-sm font-medium text-black dark:text-black"
                                >
                                    No
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input

                                    id="default-radio-3"
                                    type="radio"
                                    value="atTime"
                                    checked={shipProduct === "atTime"}
                                    name="default-radio"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    htmlFor="default-radio-3"
                                    className="ml-2 text-sm font-medium text-black dark:text-black"
                                >
                                    At Times
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Detail;