import React, { FC, useState, useContext } from 'react'
import { userContext } from '@/Components/context/context'



interface Name {
    id: number,
    name: string,
    checked: boolean
}

const Income: FC = () => {
    const context = useContext(userContext)
    const [checked, setChecked] = useState<string[]>([])

    const [income, setIncome] = useState<Name[]>([{
        id: 1,
        name: "Low Income",
        checked: false
    }, {
        id: 2,
        name: "Mid Income",
        checked: false
    }, {
        id: 3,
        name: "High Income",
        checked: false
    }])


    const onChangeValue = (e: any) => {
        let newArrayLevel = [...checked, e.target.id]
        if (checked.includes(e.target.id)) {
            newArrayLevel = newArrayLevel.filter(datas => datas !== e.target.id)
        }
        setChecked(newArrayLevel)
        context.setIncomeLevel(newArrayLevel)
    }

    return (
        <div className='flex py-20 border-b ml-2 justify-center'>
            <div className=" w-[50%]">
                <div>
                    <h6 className="font-semibold mt-8 text-xl mb-8">Income Levels</h6>
                    <div
                        className="flex justify-between my-5"
                    >
                        {
                            income.map((item, i) => {
                                return (
                                    <div className="flex">
                                        <input
                                            type="checkbox"
                                            id={item.name}
                                            value="low income"
                                            name="gender"
                                            onChange={(e) => onChangeValue(e)}
                                        />{" "}
                                        <label htmlFor={item.name} className="mx-2 text-lg">
                                            {item.name}
                                        </label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Income