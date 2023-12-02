import Link from "next/link";
import React, { useState, useContext, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { NextRouter, useRouter } from 'next/router';
// import { AsyncStorage } from 'reactjs-async-localstorage';

interface User {
    id: string;
    fullName: string;
}

interface RegisterProps {
    users: User[];
}


const schema = yup.object().shape({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    Name: yup.string().required(),
    team_size: yup.string().required(),
    industry: yup.string().required(),

});


export function Register({ users }: RegisterProps) {

    const router: NextRouter = useRouter();
    const redirect: string = router.query.redirect as string;
    const [storage, setStorage] = useState(
        typeof window !== 'undefined' ?
            JSON.parse(localStorage.getItem('channel') || '{}')
            :
            ""
    )

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            first_name: storage?.first_name,
            last_name: storage?.last_name,
            Name: storage?.Name,
            industry: storage?.industry,
            team_size: storage?.team_size
        }
    });


    const onSubmitHandler = (data: any) => {
        localStorage.setItem("channel", JSON.stringify(data))
        router.replace(redirect || '/publisher/channel/advertissementChannel')
    };



    return (
        <div className="">
            <Toaster />
            {/* header */}
            <div className="mx-auto max-w-8xl px-6 lg:px-8 pt-3">
                <form className="justify-center flex mt-10" onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className="w-full  md:w-[40%]     md:px-0 px-4">
                        <div className="flex w-full justify-between">
                            <div className="mt-3 w-full">
                                <span className="my-3 mr-1">FirstName</span>
                                <input
                                    type="text"
                                    {...register("first_name")}
                                    className="w-full py-2.5 border mt-2.5 border-gray-200 mr-1  rounded-lg outline-none pl-2"
                                    placeholder="kevin"
                                />
                                <div><p className="" style={{ color: "rgb(206, 8, 8)", fontSize: "12px" }}>{errors.first_name?.message}</p></div>
                            </div>
                            <div className="mt-3  w-full">
                                <span className="my-3">LastName</span>
                                <input
                                    type="text"
                                    {...register("last_name")}
                                    className="w-full py-2.5 border mt-2.5 border-gray-200 ml-1 rounded-lg outline-none pl-2"
                                    placeholder="Modoungue"
                                />
                                <div><p className="" style={{ color: "rgb(206, 8, 8)", fontSize: "12px" }}>{errors.last_name?.message}</p></div>

                            </div>
                        </div>
                        <br />
                        <div className="mt-3">
                            <span className="my-3">Company/Nick Name/ Stage Name</span>
                            <input
                                type="text"
                                {...register("Name")}
                                className="w-full py-2.5 border mt-2.5 border-gray-200 ml-1 rounded-lg outline-none pl-2"
                                placeholder="My Company Name(Nick Name)doungue"
                            />
                            <div><p className="" style={{ color: "rgb(206, 8, 8)", fontSize: "12px" }}>{errors.Name?.message}</p></div>

                        </div>
                        <br />
                        <div className="mt-3">
                            <span className="my-3">Team Size</span>
                            <select
                                {...register("team_size")}
                                className="w-full py-2.5 border mt-2.5 border-gray-200 ml-1 rounded-lg outline-none pl-2"
                                id=""
                            >
                                <option value=""></option>
                                <option value="0-5">0-5</option>
                                <option value="6-100">6-100</option>
                                <option value="101-500">101-500</option>
                                <option value="501-1000+">501-1000+</option>
                            </select>
                            <div><p className="" style={{ color: "rgb(206, 8, 8)", fontSize: "12px" }}>{errors.team_size?.message}</p></div>

                        </div>
                        <div className="mt-10">
                            <span className="my-2">industry</span>
                            <select
                                {...register("industry")}
                                className="w-full py-2.5 border mt-2.5 border-gray-200 ml-1 rounded-lg outline-none pl-2"
                                id=""
                            >
                                <option value=""></option>
                                <option value="Heath Care">Heath Care</option>
                                <option value="Computer">Computer</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Others">Others</option>
                            </select>
                            <div><p className="" style={{ color: "rgb(206, 8, 8)", fontSize: "12px" }}>{errors.industry?.message}</p></div>
                        </div>
                        <div className="flex w-full my-16 pb-5">
                            {/* <Link href={"/publisher/channel/advertissementChannel"} className=""> */}
                            <button
                                id="button"
                                type='submit'
                                className=" py-2.5 w-full rounded-md outline-none px-5  "
                            >
                                Proceed
                            </button>
                            {/* </Link> */}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

