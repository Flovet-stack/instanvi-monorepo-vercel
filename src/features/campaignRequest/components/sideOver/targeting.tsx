import React from 'react'
import { useState, useContext } from 'react'

import { userContext } from '@/Components/context/context';

import { usePersonas } from "./../../api/getPersona";



export default function Targeting() {
    const context = useContext(userContext)
    const { data, isLoading, refetch } = usePersonas('6c28de38-4ac6-4f9f-9b5e-08ffbd700543')
    const [target, setTarget] = useState(false)


    const [audiencePersona, setAudiencePersona] = useState("")

    const handleTarget = () => {
        setTarget(!target)
        // ContextData.setTarget(!target)


    }
    console.log(data?.data.data)
    return (
        <div className='flex justify-evenly items-center mt-16'>
            <div className=''>
                <div className="flex flex-col mb-5 gap-3 text-black">
                    <span className=" text-gray-400">Select Audience Persona</span>

                    <div className="flex justify-between mb-2 gap-3 text-black">

                        <div className="w-full">
                            <div className="">
                                <select
                                    name=""
                                    className="w-full py-2.5 pl-4 border border-gray-200 rounded-lg outline-none mt-2"
                                    id=""
                                    value={audiencePersona}
                                    onChange={(e) => {

                                        setAudiencePersona(e.target.value);
                                        context.setaudiencePersona(e.target.value)
                                    }}
                                >
                                    <option value="">Choose Your audience</option>
                                    {
                                        data?.data.data.map((item: {
                                            uuid: string; name: string
                                        }, id: number) => {
                                            return (
                                                <option key={id} value={item.uuid}>{item.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>

                    </div>
                    {
                        data?.data.data.map((items: { uuid: string, name: string, age: string[], interests: string[], location: string[] }, id: number) => {
                            if (items.uuid == audiencePersona) {
                                return (
                                    <div className="flex border rounded-lg cursor-pointer" onClick={() => handleTarget()}>
                                        <div className="flex justify-evenly items-center px-8">
                                            <div className="rounded-full p-8 bg-gray-300"></div>
                                        </div>

                                        <div className='py-2 mr-10'>

                                            <table key={id}>
                                                <tr>
                                                    <td>
                                                        <span className='text-gray-500 text-sm pr-8'>Name</span>
                                                    </td>
                                                    <td>
                                                        <p className='font-semibold'>{items.name}</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className='text-gray-500 text-sm pr-8'>Age</span>
                                                    </td>
                                                    <td>
                                                        <p className='font-semibold'>{items.age[0]}</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className='text-gray-500 text-sm pr-8'>Location</span>
                                                    </td>
                                                    <td>
                                                        <p className='font-semibold'>{items.location[0]}</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className='text-gray-500 text-sm pr-8'>Interest</span>
                                                    </td>
                                                    <td>
                                                        <p className='font-semibold'>{items.interests[0]}</p>
                                                    </td>
                                                </tr>
                                            </table>


                                        </div>


                                        <div className=''>
                                            <div className="flex justify-between">
                                                <div className={`flex justify-evenly items-center rounded-full h-4 w-4 m-2 ${target ? "bg-white border" : "bg-green-500"}`}>
                                                    <i className="ri-check-line text-white"></i>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}
