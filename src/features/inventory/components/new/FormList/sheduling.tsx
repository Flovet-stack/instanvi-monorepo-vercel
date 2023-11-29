import React, { useState, ChangeEvent, FC } from "react";

export const Scheduling: FC = () => {

    const [schedulingType, setSchedulingType] = useState<string>("")
    const [term, setTerm] = useState<string>("")
    const [size, setSize] = useState<string>("")
    const [duration, setDuration] = useState<string>("")
    const [span, setSpan] = useState<string>("")
    const [termsAndConditions, setTermsAndConditions] = useState<string>("")

    return (
        <div className="mt-10 bg-white flex justify-evenly items-center">
            <div className='w-1/3'>
                <div className="flex flex-col justify-between mb-5">
                    <div className="w-full mb-3">
                        <div className="">
                            <span className="mb-3 text-gray-400">Scheduling Type</span>
                            <select
                                name=""
                                className="w-full py-2.5 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                                id=""
                                value={schedulingType}
                                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                                    setSchedulingType(e.target.value);
                                }}
                            >
                                <option value="Reccuring">Reccuring</option>
                                <option value="One time">One time</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full flex justify-between mb-3 gap-3">
                        <div className="w-1/2">
                            <div className="">
                                <span className="mb-3 text-gray-400">Terms</span>
                                <select
                                    name=""
                                    className="w-full py-2.5 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                                    id=""
                                    value={term}
                                    onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                                        setTerm(e.target.value);
                                    }}
                                >
                                    <option value="Standard">Standard</option>
                                </select>
                            </div>
                        </div>

                        <div className="w-1/2">
                            <div className="">
                                <span className="mb-3 text-gray-400">Size</span>
                                <select
                                    name=""
                                    className="w-full py-2.5 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                                    id=""
                                    value={size}
                                    onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                                        setSize(e.target.value);
                                    }}
                                >
                                    <option value="1920x1080">1920x1080</option>
                                    <option value="1440x1220">1440x1220</option>
                                </select>
                            </div>
                        </div>

                    </div>

                    <div className="w-full flex justify-between mb-3 gap-3">
                        <div className="w-1/2">
                            <div className="">
                                <span className="mb-3 text-gray-400">Duration</span>
                                <select
                                    name=""
                                    className="w-full py-2.5 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                                    id=""
                                    value={duration}
                                    onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                                        setDuration(e.target.value);
                                    }}
                                >
                                    <option value="Standard">Standard</option>
                                </select>
                            </div>
                        </div>

                        <div className="w-1/2">
                            <div className="">
                                <span className="mb-3 text-gray-400">Span</span>
                                <select
                                    name=""
                                    className="w-full py-2.5 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                                    id=""
                                    value={span}
                                    onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                                        setSpan(e.target.value);
                                    }}
                                >
                                    <option value="29s">29s</option>
                                    <option value="59s">59s</option>
                                    <option value="5m">5m</option>
                                </select>
                            </div>
                        </div>

                    </div>

                    <div className="w-full mb-3">
                        <span className="mb-3 text-gray-400">Description / Terms & conditions</span>
                        <div className="">
                            <textarea name="" id="" cols={30} rows={10}
                                className="w-full py-2.5 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                                value={termsAndConditions}
                                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => { setTermsAndConditions(e.target.value) }}>

                            </textarea>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}