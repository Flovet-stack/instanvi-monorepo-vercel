import React, { useState } from "react";

export default function Right() {

    return (

        <div className="w-3/4 mb-10 animate-pulse">
            <div className="w-full bg-white rounded mx-2 py-6 px-4">
                <center>
                    <div className="w-56 h-8 rounded bg-gray-100"></div>
                </center>
                <div className="flex justify-center mt-10">
                    <div className="flex px-4 py-1 bg-[#f5f5f5]">
                        <div className="w-16 h-5 bg-gray-200 mr-3">
                        </div>
                        <div className="w-16 h-5 bg-gray-200 mr-3">
                        </div>
                        <div className="w-16 h-5 bg-gray-200 mr-3">
                        </div>
                        <div className="w-16 h-5 bg-gray-200 mr-3">
                        </div>
                        <div className="w-16 h-5 bg-gray-200  ">
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <div className="w-full h-80 rounded-md bg-gray-100">

                    </div>
                    <div className="w-full h-48 mt-5 rounded-md bg-gray-100">

                    </div>
                    <div className="w-full h-48 mt-5 rounded-md bg-gray-100">

                    </div>
                </div>
            </div>
        </div>

    );
}
