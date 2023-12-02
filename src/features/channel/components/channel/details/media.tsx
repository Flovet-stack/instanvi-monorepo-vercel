import React, { FC, useState } from "react";
import Dropzone from "react-dropzone";

const Media: FC = () => {
    const [files, setFiles] = useState<any[]>([]);
    function handleDetails(event: any): void {
        throw new Error("Function not implemented.");
    }

    return (

        <div
            className={"flex justify-center    mb-16  "}
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

            </div>
        </div>
    )
}
export default Media