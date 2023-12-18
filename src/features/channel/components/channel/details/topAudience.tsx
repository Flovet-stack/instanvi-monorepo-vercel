import React, { FC, useContext, useState } from "react";
import { userContext } from '@/Components/context/context'
import { Data } from '@/utils/audience'
function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(" ");
}

interface Datas {
    id: number,
    name: string,
    active: boolean
}
const TopAudience: FC = () => {
    const context = useContext(userContext)
    const [audiences, setAudiences] = useState<string[]>([])
    const [data, setData] = useState<Datas[]>(Data)
    const [storage, setStorage] = useState(
        typeof window !== 'undefined' ?
            JSON.parse(localStorage.getItem('channel') || '{}')
            :
            ""
    )

    const handleAudience = (e: any, name: string, active: boolean, id: number) => {
        setData((prev) => prev.map((task) => {
            if (task.id === id)
                return { ...task, name: name, id: id, active: !active }
            else
                return task
        }))
        let newArrayAudience = [...audiences, name]
        if (audiences.includes(name)) {
            newArrayAudience = newArrayAudience.filter(datas => datas !== name)
        }
        setAudiences(newArrayAudience)
        context.setAudience(newArrayAudience)
        // localStorage.setItem("channel", JSON.stringify({ ...storage, industry_of_focus: newArrayAudience }))
    }

    return (
        <div className={"flex justify-center py-20 border-b ml-2 "} >
            <div>
                <div className="">
                    <h2 className="text-4xl font-bold flex justify-center">
                        Select your Top audience increast
                    </h2>
                    <p className="text-2xl font-bold flex justify-center mt-8">
                        {5 - audiences.length} Left
                    </p>
                    <div className="flex h-5">
                        {data.map((item, id) => {
                            if (item.active == true) {
                                return (
                                    <div key={id} className="m-1">
                                        <div className="rounded-full bg-gray-200 px-2">
                                            <p>{item.name}</p>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-20  overflow-y-auto px-5 scrollbars">
                    {data.map((items, id) => {
                        return (
                            <div key={id} className="mt-3">
                                <button
                                    onClick={(e) => handleAudience(e, items.name, items.active, items.id)}
                                    className={classNames(
                                        !items.active ? "" : "bg-green-600 text-white",
                                        "w-full flex justify-between py-3 rounded-md px-4 border border-gray-300"
                                    )}
                                >
                                    <span>{items.name}</span>
                                    <i
                                        className={classNames(
                                            !items.active
                                                ? "ri-checkbox-blank-circle-line text-gray-300"
                                                : "ri-checkbox-circle-line",
                                            "  text-xl"
                                        )}
                                    ></i>
                                </button>
                            </div>
                        )
                    })



                    }
                </div>
            </div>
        </div>
    )
}
export default TopAudience