import React, { useContext } from 'react'
import { useState } from 'react'

import { userContext } from '@/Components/context/context'



export default function Scheduling() {
    const context = useContext(userContext)



    return (
        <div className='flex justify-evenly items-center mt-16'>
            <div className='w-2/3'>
                <div className="flex flex-col">
                    <div className="flex justify-between mb-5 gap-3 text-black">
                        <div className="w-1/2">
                            <div className="">
                                <span className="mb-3 text-gray-400">start Date</span>
                                <input
                                    type="date"
                                    className="w-full py-2 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                                    placeholder=''

                                    onChange={(e) => {

                                        context.setStartDate(e.target.value)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="">
                                <span className="mb-3 text-gray-400">Stop Date</span>
                                <input
                                    type="date"
                                    className="w-full py-2 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                                    placeholder=''

                                    onChange={(e) => {

                                        context.setStopDate(e.target.value)
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col mb-5 gap-3 text-black">
                        <h1 className=''>Specify week day and time</h1>
                        <div className="flex justify-between mb-5 gap-3 text-black">
                            <div className="w-1/3">
                                <div className="">
                                    <span className="mb-3 text-gray-400">Date</span>
                                    <input
                                        type="date"
                                        className="w-full py-2 px-4 border border-gray-200 rounded-lg outline-none mt-2"
                                        placeholder=''

                                        onChange={(e) => {

                                            context.setDayOfWeek(e.target.value)
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="w-1/3">
                                <div className="">
                                    <span className="mb-3 text-gray-400">Start time</span>
                                    <input
                                        type="date"
                                        className="w-full py-2 px-4 border border-gray-200 rounded-lg outline-none mt-2"
                                        placeholder=''

                                        onChange={(e) => {

                                            context.setStartTime(e.target.value)
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="w-1/3">
                                <div className="">
                                    <span className="mb-3 text-gray-400">Stop time</span>
                                    <input
                                        type="time"
                                        className="w-full py-2 px-4 border border-gray-200 rounded-lg outline-none mt-2"
                                        placeholder=''

                                        onChange={(e) => {

                                            context.setStopTime(e.target.value)
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col mb-5 gap-3 text-black">
                        <span className=" text-gray-400">Target caps(optional)</span>
                        <div className="flex justify-between mb-5 gap-3 text-black">

                            <div className="w-1/3">
                                <div className="">
                                    <input
                                        type="text"
                                        className="w-full py-2 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                                        placeholder=''

                                        onChange={(e) => {

                                            context.setReach(e.target.value)
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="w-1/3">
                                <div className="">
                                    <select
                                        name=""
                                        className="w-full py-2.5 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                                        id=""

                                        onChange={(e) => {

                                            context.setObjective(e.target.value)
                                        }}
                                    >
                                        <option value="Impressions">Impressions</option>
                                        <option value="Dimpressions">Dimpressions</option>
                                    </select>
                                </div>
                            </div>

                            <div className="w-1/3">
                                <div className="">
                                    <select
                                        name=""
                                        className="w-full py-2.5 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                                        id=""

                                        onChange={(e) => {

                                            context.setFrequence(e.target.value)
                                        }}
                                    >
                                        <option value="Daily">Daily</option>
                                        <option value="Monthly">Monthly</option>
                                        <option value="Weekly">Weekly</option>
                                        <option value="Yearly">Yearly</option>
                                    </select>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="flex justify-between mb-5 gap-3 text-black">
                        <div className="w-1/2">
                            <div className="">
                                <span className="mb-3 text-gray-400">Price</span>
                                <input
                                    type="text"
                                    className="w-full py-2 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                                    placeholder=''

                                    onChange={(e) => {

                                        context.setPrice(e.target.value)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="">
                                <span className="mb-3 text-gray-400">Bid</span>
                                <div className="flex mt-2 border border-gray-200 rounded-lg">
                                    <input
                                        type="text"
                                        className="py-2 pl-4 rounded-l-lg outline-none grow"
                                        placeholder=''

                                        onChange={(e) => {

                                            context.setBid(e.target.value)
                                        }}
                                    />
                                    {/* <select
                                        name=""
                                        className="py-2.5 pl-4 border-l rounded-r-lg outline-none"
                                        id=""
                                        value={currency}
                                        onChange={(e) => {
                                            setCurrency(e.target.value);
                                             
                                        }}
                                    >
                                        <option value="">XAF</option>
                                    </select> */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
