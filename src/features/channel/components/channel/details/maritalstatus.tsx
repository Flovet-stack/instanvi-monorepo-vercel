import React, { FC, useState,useContext } from 'react'
import { userContext } from '@/Components/context/context'



interface SocialStatus {
    name: string,
    id: number,
    checked: boolean
}


const Audience: FC = () => {
    const context = useContext(userContext)
    const [isCheckedStatus, setIsCheckedStatus] = useState<boolean>(false);
    const [single, setSingle] = useState<string>("");
    const [married, setMarried] = useState<string>("");
    const [maritalStatus, setMaritalStatus] = useState<string[]>([])
    const [social, setSocial] = useState<SocialStatus[]>([
        {
            id: 1,
            name: "Single",
            checked: false,
        },
        {
            id: 22,
            name: "Married",
            checked: false,
        },
    ]);

    const handleSocials = (e: any) => {
        let newArray = [...maritalStatus, e.target.id]
        if (maritalStatus.includes(e.target.id)) {
            newArray = newArray.filter(datas => datas !== e.target.id)
        }
        setMaritalStatus(newArray)
        context.setMaritalStatus(newArray)
    };


    return (
        <div
            className={"h-fit ml-2 py-28 border-b w-full"}
        >
            <div className="flex justify-center w-full">
                <div className=" w-[50%]">
                    <h6 className="font-semibold mt-8 mb-3">Marital Status</h6>
                    <div className="flex">
                        <input
                            type="checkbox"
                            checked={isCheckedStatus}
                            onChange={() => {
                                setIsCheckedStatus(!isCheckedStatus);
                            }}
                        />
                        <span className="text-semibold mx-2">
                            I don’t have exact numbers
                        </span>
                    </div>
                    {!isCheckedStatus ? (
                        <div>
                            <div className="flex justify-between mt-4">
                                <span className="text-lg font-semibold ">single</span>

                                <input
                                    type="number"
                                    value={single}
                                    onChange={(e) => setSingle(e.target.value)}
                                    className=" w-36 rounded-lg px-2 py-1.5 border pl-2"
                                    placeholder="00"
                                />
                            </div>
                            <div className="flex justify-between mt-4">
                                <span className="text-lg font-semibold ">Married</span>
                                <input
                                    type="number"
                                    value={married}
                                    onChange={(e) => setMarried(e.target.value)}
                                    className=" w-36 rounded-lg pl-2 py-1.5 border pl-2"
                                    placeholder="00"
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="w-full px-4 py-3 border pl-2">
                            <h6 className="font-bold">
                                Sect Top 2 audience categories
                            </h6>
                            {social.map((item, id) => {
                                return (
                                    <div key={id} className="flex  ml-10   mt-4">
                                        <input
                                            type="checkbox"
                                            id={item.name}
                                            onChange={(e) =>
                                                handleSocials(e)
                                            }
                                            className=" rounded-md border pl-2"
                                            placeholder="00"
                                        />
                                        <label htmlFor={item.name} className='text-lg font-semibold ml-5'>{item.name}</label>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Audience 