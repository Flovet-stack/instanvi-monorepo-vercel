"use client"
import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import ReactPhoneInput from "react-phone-input-2";
import Link from "next/link";
import OtpInput from "react-otp-input";
import axios from "axios";
import ReactLoading from "react-loading";
import randomInteger from "random-int";
import { useSession, signIn, signOut } from "next-auth/react";
import Router from "next/router";
import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
// function to add classes conditions
function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

function Otp({ users }: { users: any[] }): JSX.Element {
  const [animation, setAnimation] = useState<boolean>(false);
  const [otp, setOtp] = useState<boolean>(true);
  const [number, setNumber] = useState<string>("");
  const handleOnChange = (
    value: string,
    data: any,
    event: React.ChangeEvent<HTMLInputElement>,
    formattedValue: string
  ): void => {
    const Number: string = formattedValue.replace(/[$+%]/g, "");
    setNumber(Number.replace(/\s/g, ""));
  };

  const [code, setCode] = useState<string>("");
  const handleChange = (code: string): void => setCode(code);

  return (
    <>
      <Toaster />
      <div className={classNames(otp ? "body" : "hidden")}>
        {/* header */}
        <img className=" w-auto m-3" src="/images/logo2.svg" alt="" />
        <div className="mx-auto max-w-8xl px-6 lg:px-8 pt-3 h-[95vh] flex justify-center items-center w-full">
          <img className="h-5 w-auto" src="/images/logo.svg" alt="" />
          <div className="justify-center flex mt-20 w-full items-center ">
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
                </center>
                <div className="  w-full mt-14">
                  <Toaster />

                  <ReactPhoneInput
                    inputStyle={{ border: "1px solid #C0C0C0" }}
                    country={"us"}
                    value={number}
                    inputClass="py-2.5"
                    onChange={handleOnChange}
                    countryCodeEditable={false}
                    specialLabel={"Mobile Number"}
                  />
                  <br />
                  <div className="flex justify-center my-4 pb-5">
                    <button
                      //   onClick={savePhoneNumber}
                      id="button"
                      className="w-full  py-2.5 border   text-white bg-black border-gray-200 rounded-lg outline-none pl-2  "
                    >
                      {animation ? (
                        <center>
                          <ReactLoading
                            type={"bubbles"}
                            color={"white"}
                            height={"5.5%"}
                            width={"5.5%"}
                          />
                        </center>
                      ) : (
                        <>Proceed</>
                      )}
                    </button>
                  </div>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classNames(!otp ? "" : "hidden")}>
        <Toaster />
        <div className="body h-screen">
          {/* header */}
          <img className=" w-auto m-3" src="/images/logo2.svg" alt="" />
          <div className="mx-auto max-w-8xl px-6 pt-3 lg:px-8">
            <img className="h-5 w-auto" src="/images/logo.svg" alt="" />
            <div className="justify-center flex  md:mt-20">
              <div className="w-full  md:w-3/5 border border-gray-200 bg-white rounded-lg md:px-8 px-4">
                <Link href="/auth">
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
                    We have just send a verification code to {number}
                  </span>
                  <div className="mt-10 mb-5 flex justify-center">
                    <OtpInput
                      value={code}
                      onChange={handleChange}
                      numInputs={6}
                      separator={<span style={{ width: "8px" }}></span>}
                      isInputNum={true}
                      shouldAutoFocus={true}
                      inputStyle={{
                        border: "1px solid #c0c0c0",
                        borderRadius: "8px",
                        width: "54px",
                        height: "54px",
                        fontSize: "12px",
                        color: "#000",
                        fontWeight: "400",
                        caretColor: "black",
                      }}
                      focusStyle={{
                        border: "1px solid #CFD3DB",
                        outline: "none",
                      }}
                    />
                  </div>
                  <span
                    // onClick={savePhoneNumber}
                    className="text-sm text-green-600 font-semibold cursor-pointer"
                  >
                    Send the code again
                  </span>
                </div>

                <div className="flex justify-center my-4 pb-5">
                  <button
                    // onClick={saveNumber}
                    id="button"
                    className="w-full py-2.5 border text-white bg-black border-gray-200 rounded-lg outline-none pl-2  "
                  >
                    {animation ? (
                      <center>
                        <ReactLoading
                          type={"bubbles"}
                          color={"white"}
                          height={"5.5%"}
                          width={"5.5%"}
                        />
                      </center>
                    ) : (
                      <>Verify</>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(
  context: any
): Promise<{ props: { users: any[] } }> {
  //   const data = await prisma.user.findMany({});
  const data = [{
    data1: 1,
  }];
  return {
    props: {
      users: JSON.parse(JSON.stringify(data)),
    },
  };
}
export default Otp;