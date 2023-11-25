import React, { useState, useEffect, ChangeEvent, FC } from "react";

export const Pricing: FC = () => {

    const [regularPrice, setRegularPrice] = useState<string>("2000 XAF");
    const [discountPrice, setDiscountPrice] = useState<string>("1800 XAF");
    const [taxClass, setTaxClass] = useState<string>("");

    const handleRegularPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRegularPrice(e.target.value);
    };

    const handleDiscountPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDiscountPrice(e.target.value);
    };

    const handleTaxClassChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setTaxClass(e.target.value);
    };

    return (
        <div className="mt-10 bg-white flex justify-evenly items-center">
            <div className='w-1/3'>
                <div className="flex flex-col justify-between mb-5">
                    <div className="w-full flex justify-between mb-3 gap-3">
                        <div className="w-1/2">
                            <div className="">
                                <span className="mb-3 text-gray-400">Regular Price</span>
                                <input
                                    type="text"
                                    className="w-full py-2 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                                    placeholder=''
                                    value={regularPrice}
                                    onChange={handleRegularPriceChange}
                                />
                            </div>
                        </div>

                        <div className="w-1/2">
                            <div className="">
                                <span className="mb-3 text-gray-400">Discount Price</span>
                                <input
                                    type="text"
                                    className="w-full py-2 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                                    placeholder=''
                                    value={discountPrice}
                                    onChange={handleDiscountPriceChange}
                                />
                            </div>
                        </div>


                    </div>

                    <div className="w-full mb-3">
                        <div className="">
                            <span className="mb-3 text-gray-400">Select Tax Class</span>
                            <select
                                name=""
                                className="w-full py-2.5 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                                id=""
                                value={taxClass}
                                onChange={handleTaxClassChange}
                            >
                                <option value="Standard">Standard</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}