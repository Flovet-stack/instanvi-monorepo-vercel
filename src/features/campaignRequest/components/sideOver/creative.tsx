import React, { useState, useEffect } from "react";
import Dropzone, { FileRejection } from "react-dropzone";
import Router from "next/router";

interface CreativeProps { }

const Creative: React.FC<CreativeProps> = () => {
    const [url, setUrl] = useState<string>("");
    const [media, setMedia] = useState<string>("");
    const [previewImage, setPreviewImage] = useState<File[]>([]);

    const removeFile = (file: File) => () => {
        const newFiles = [...previewImage];
        newFiles.splice(newFiles.indexOf(file), 1);
        setPreviewImage(newFiles);
    };

    useEffect(() => {
        const item = JSON.parse(localStorage.getItem("campaignData") || '{}');
        if (item) {
            item.map((items: any) => {
                return items.step3.map((dataItems: any) => {
                    if (dataItems.url !== "") setUrl(dataItems.url);
                    if (dataItems.sociMedia !== "") setMedia(dataItems.sociMedia);
                });
            });
        }
    }, []);

    const handleStep2 = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const item = JSON.parse(localStorage.getItem("campaignData") || '{}');
        if (item) {
            const datas = item.map((items: any) => {
                return {
                    ...items,
                    step3: items.step3.map((dataItems: any) => {
                        if (dataItems) {
                            return {
                                ...dataItems,
                                url: url,
                                sociMedia: media,
                            };
                        }
                    }),
                };
            });
            localStorage.setItem("campaignData", JSON.stringify(datas));
            console.log(datas);
            Router.push("step4");
        }
    };

    return (
        <div className="bg-white">
            <div className="justify-center flex mt-28 md:mt-16">
                <div className="w-full  md:w-[50%]     md:px-0 px-4">
                    <div className="flex justify-evenly items-center">
                        <h3 className="flex text-2xl">
                            Contact us if you need these{" "}
                            <button className="py-1.5 px-4 rounded bg-green-500 text-white ml-5 -mt-4 text-lg">
                                Contact&nbsp;us
                            </button>{" "}
                        </h3>
                    </div>
                    <div className="mt-14">
                        <div className="mt-3">
                            <span className="my-1">Website Url (Optional)</span>
                            <input
                                type="text"
                                value={url}
                                onChange={(e) => {
                                    setUrl(e.target.value);
                                }}
                                className="w-full py-2.5 border mt-1 border-gray-200 mr-1  rounded-lg outline-none pl-2"
                                placeholder="Enter Campaign"
                            />
                        </div>
                    </div>
                    <br />
                    <div className="mt-3">
                        <span className="my-1">Social Media page (optional)</span>
                        <input
                            type="text"
                            value={media}
                            onChange={(e) => {
                                setMedia(e.target.value);
                            }}
                            className="w-full py-2.5 border mt-1 border-gray-200 ml-1 rounded-lg outline-none pl-2"
                            placeholder="Product ABC"
                        />
                    </div>
                    <br />
                    <div className="mt-3">
                        <p className="text-xl   py-3 mt-8">
                            Promotion assets (Videos, Audio, Flyers, Write ups, PRs etc)
                        </p>
                        <div className="w-full border-dashed border-2 border-gray-300 rounded-lg p-10">
                            <Dropzone
                                onDrop={(acceptedFiles: File[], fileRejections: FileRejection[]) => {
                                    setPreviewImage(
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
                                                className: "wfp--dropzone__input ",
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
                            <div className="flex mt-5">
                                {previewImage.map((file) => {
                                    return (
                                        <div className="relative h-16  w-20 ml-5">
                                            <img
                                                src={file.preview}
                                                className="bg-gray-500 bg-opacity-75 transition-opacity"
                                                style={{
                                                    objectFit: "cover",
                                                    width: "100%",
                                                    height: "100%",
                                                    filter: "brightness(50%)",
                                                    marginLeft: "10px",
                                                }}
                                                alt={file.name}
                                            />
                                            <button
                                                onClick={removeFile(file)}
                                                className="absolute  ml-12 top-0 px-5"
                                            >
                                                <i className="ri-close-circle-line text-white text-xl"></i>
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Creative;