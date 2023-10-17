
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import ReactPhoneInput from 'react-phone-input-2'
import OtpInput from "react-otp-input";

// eslint-disable-next-line no-restricted-imports

export type OtpFormProps = {
    onSuccess: () => void;
};

export const OtpForm = ({
    onSuccess,
}: OtpFormProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars

    // Collect data from here 

    const { register, handleSubmit } = useForm<any>();
    const [data, setData] = useState<string>("");
    const [showOtp, setShowOpt] = useState<boolean>(false)

    return (
        <div className='w-full'>

            {showOtp ? <div className={`${showOtp ? "" : "hidden"}`}>
                {/* header */}

                <div className="mx-auto max-w-8xl px-6 lg:px-8 pt-3">
                    <img className="h-5 w-auto" src="/images/logo.svg" alt="" />
                    <div className="justify-center flex mt-28 md:mt-48">
                        <div className="w-full  md:w-[28%] border border-gray-200 bg-white rounded-lg md:px-8 px-4">
                            <Link href="/">
                                <div className="flex justify-end w-full mt-5">
                                    <button className="flex font-semibold">
                                        <i className="ri-close-fill  mr-3"></i>
                                        <span>Back</span>
                                    </button>
                                </div>
                            </Link>
                            <div className="my-16 md:my-16">
                                <center>
                                    <h2 className="text-2xl font-bold">Enter Phone Number</h2>
                                </center><br />
                                <div className="  w-full mt-14">

                                    <ReactPhoneInput
                                        inputStyle={{ padding: "20px 0px 20px 43px" }}
                                        country={"us"}
                                        // {...register("Number")}
                                        countryCodeEditable={false}
                                        specialLabel={"Player Mobile Number"}
                                        // rules={{ required: true }}
                                        isValid={(value, country) => {
                                            if (value.match(/12345/)) {
                                                return "Invalid value";
                                            } else if (value.match(/1234/)) {
                                                return false;
                                            } else {
                                                return true;
                                            }
                                        }}
                                    />
                                    {/* <input
                    type="number"
                    value={number}
                    onChange={(e) => {
                      setNumber(e.target.value);
                    }}
                    className="py-2.5 w-full rounded outline-none border p-2"
                  /> */}
                                    <br />
                                    {/* <Link href="/confirmOtp"> */}
                                    <div className="flex justify-center my-4 pb-5">
                                        <input
                                            type='submit'
                                            value={"Proceed"}
                                            id='button'
                                            className="w-full  py-2.5 border   text-white bg-black border-gray-200 rounded-lg outline-none pl-2  "
                                        />


                                    </div>
                                    {/* </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : <div className={`${!showOtp ? "" : "hidden"}`}>
                <div className="w-full">
                    {/* header */}
                    <div className="mx-auto max-w-8xl px-6 pt-3 lg:px-8">
                        <img className="h-5 w-auto" src="/images/logo.svg" alt="" />
                        <div className="justify-center flex mt-28 md:mt-48">
                            <div className="w-full  md:w-[28%] border border-gray-200 bg-white rounded-lg md:px-8 px-4 pb-5">
                                <Link href="/auth/login">
                                    <div className="flex justify-end w-full mt-5">
                                        <button className="flex font-semibold">
                                            <i className="ri-close-fill  mr-3"></i>
                                            <span>Back</span>
                                        </button>
                                    </div>
                                </Link>
                                <div className="my-16 md:my-16">
                                    <center>
                                        <h2 className="text-2xl font-bold">
                                            Enter verification code
                                        </h2>
                                    </center>
                                    <span className="text-sm mt-2 flex justify-center">
                                        We have just send a verification code to
                                    </span>
                                    <div className="mt-10 mb-5 flex justify-center">
                                        <OtpInput

                                            numInputs={4}
                                            separator={<span style={{ width: "8px" }}></span>}
                                            isInputNum={true}
                                            shouldAutoFocus={true}
                                            inputStyle={{

                                                border: "1px solid #CFD3DB",
                                                borderRadius: "8px",
                                                width: "54px",
                                                height: "54px",
                                                fontSize: "12px",
                                                color: "#c0c0c0",
                                                fontWeight: "400",
                                                caretColor: "black",
                                            }}
                                            focusStyle={{
                                                border: "1px solid #000",
                                                outline: "none",
                                                color: "#c0c0c0",
                                            }}
                                        />
                                    </div><br />
                                    <span

                                        className="text-sm text-green-600 font-semibold cursor-pointer"
                                    >
                                        Send the code again
                                    </span>
                                </div>
                                <div className="flex justify-center pb-5">
                                    <input
                                        value={"Verify"}
                                        id='button'
                                        type='button'
                                        className="w-full  py-2.5 border text-white bg-black border-gray-200 rounded-lg outline-none pl-2  "
                                    />
                                </div><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>}



        </div>
    );
};
