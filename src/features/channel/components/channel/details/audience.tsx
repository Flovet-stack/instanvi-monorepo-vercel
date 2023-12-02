import React, { FC, useState, useContext } from 'react'
import { userContext } from '@/Components/context/context'
 
interface Cat {
    name: string,
    id: number,
    checked: boolean
}


const Audience: FC = () => {
    const context = useContext(userContext)
    const [ageRange, setAgerange] = useState<string[]>([]);
    const [isCheckedAge, setIsCheckedAge] = useState<boolean>(false);
    const [categories, setCategories] = useState<Cat[]>([
        {
            id: 1,
            name: "12-17",
            checked: false
        },
        {
            id: 1,
            name: "18-24",
            checked: false
        },
        {
            id: 1,
            name: "25-34",
            checked: false
        },
        {
            id: 1,
            name: "35-50",
            checked: false
        },
        {
            id: 1,
            name: "50+",
            checked: false
        },
    ])

    const [ts, setts] = useState<string>("");
    const [tf, settf] = useState<string>("");
    const [fp, setfp] = useState<string>("");
    const [tt, settt] = useState<string>("");
    const [et, setet] = useState<string>("");

    const onChangeValue = (e: any) => {
        let newArray = [...ageRange, e.target.id]
        if (ageRange.includes(e.target.id)) {
            newArray = newArray.filter(datas => datas !== e.target.id)
        }
        setAgerange(newArray)
        context.setAgeDistribution(newArray)
    };


    return (
        <div
            className={"h-fit ml-2 py-28 border-b w-full"}
        >
            <div className="flex justify-center w-full">

                <div className=" w-[50%]">
                    <h2 className="font-bold text-3xl">Describe Your Audience</h2>
                    <h6 className="font-semibold mt-4 mb-3 pr-3">
                        Age Distribution
                    </h6>
                    <div className="flex">
                        <input
                            type="checkbox"
                            checked={isCheckedAge}
                            onChange={() => {
                                setIsCheckedAge(!isCheckedAge);
                            }}
                        />
                        <span className="text-semibold mx-2">
                            I don’t have exact numbers
                        </span>
                    </div>
                    {!isCheckedAge ? (
                        <div>
                            <div className="flex justify-between mt-4">
                                <span className="text-lg font-semibold">12-17</span>
                                <input
                                    type="text"
                                    value={ts}
                                    onChange={(e) => {
                                        setts(e.target.value);
                                    }}
                                    className="w-36 rounded-lg pl-2 py-1.5 border pl-2"
                                    placeholder="00"
                                />
                            </div>
                            <div className="flex justify-between mt-4">
                                <span className="text-lg font-semibold">18-24</span>
                                <input
                                    type="text"
                                    value={et}
                                    onChange={(e) => {
                                        setet(e.target.value);
                                    }}
                                    className="w-36 rounded-lg pl-2 py-1.5 border pl-2"
                                    placeholder="00"
                                />
                            </div>
                            <div className="flex justify-between mt-4">
                                <span className="text-lg font-semibold">25-34</span>
                                <input
                                    type="text"
                                    value={tt}
                                    onChange={(e) => {
                                        settt(e.target.value);
                                    }}
                                    className="w-36 rounded-lg pl-2 py-1.5 border pl-2"
                                    placeholder="00"
                                />
                            </div>
                            <div className="flex justify-between mt-4">
                                <span className="text-lg font-semibold">35-50</span>
                                <input
                                    type="text"
                                    value={tf}
                                    onChange={(e) => {
                                        settf(e.target.value);
                                    }}
                                    className="w-36 rounded-lg pl-2 py-1.5 border pl-2"
                                    placeholder="00"
                                />
                            </div>
                            <div className="flex justify-between mt-4">
                                <span className="text-lg font-semibold">50+</span>
                                <input
                                    type="text"
                                    value={fp}
                                    onChange={(e) => {
                                        setfp(e.target.value);
                                    }}
                                    className="w-36 rounded-lg pl-2 py-1.5 border pl-2"
                                    placeholder="00"
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="w-full px-4 py-3 border pl-2">
                            <h6 className="font-bold">
                                Sect Top 2 audience categories
                            </h6>
                            {
                                categories.map((items, id) => {
                                    return (
                                        <div className="flex  ml-10   mt-4">
                                            <input
                                                type="checkbox"
                                                id={items.name}
                                                className=" rounded-md border pl-2"
                                                placeholder="00"
                                                onChange={(e) => onChangeValue(e)}
                                            />
                                            <label htmlFor={items.name} className="text-lg font-semibold ml-5">
                                                {items.name}
                                            </label>

                                        </div>
                                    )
                                })
                            }


                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}
export default Audience 