


import React from "react";

export default function Modal() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <button
                id="button"
                onClick={(e) => setShowModal(!showModal)}
                className={` ml-5 mt-2 text-white border border-green-500 bg-green-500 rounded-sm py-0 px-4`}
            >
                Upload&nbsp;List
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative mx-auto my-6 mx-auto max-w-6xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                <div className="relative p-6 flex-auto">
                                    <div
                                        className="absolute right-0 top-0 m-4 text-3xl cursor-pointer"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <i className="ri-close-circle-line text-gray-700"></i>
                                    </div>

                                    <div>
                                        <label htmlFor="">List Name</label>
                                        <input type="text" className="py-2.5 w-full border rounded pl-2" />
                                    </div>
                                    <div>
                                        <label htmlFor="">Description</label>
                                        <textarea name="" className="w-full rounded border p-2" id="" ></textarea>
                                    </div>
                                </div>
                                {/*footer*/}

                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}