import React, { FC, useContext, useState } from 'react'
import Multiselect from "multiselect-react-dropdown";
import { userContext } from '@/Components/context/context'

interface Languages {
    name: string,
    id: number
}
const Language: FC = () => {
    const context = useContext(userContext)
    const [selectedOption, setSelectedOption] = useState<string>();
    const [languages, setLanguage] = useState<Languages[]>([
        { name: "English", id: 1 },
        { name: "French", id: 2 },
        { name: "Swahli", id: 3 },
        { name: "Spanish", id: 4 },

    ])
    return (
        <div className='flex justify-center py-20 border-b ml-2 w-full '>
            <div className=" w-[50%]">
                <div>
                    <h6 className="font-semibold mt-8 text-xl">Languages</h6>
                </div>
                <div>
                    <div className="relative mt-5 rounded-md shadow-sm">
                        <div className="px-4 my-20">
                            <Multiselect
                                className="w-full py-2.5 rounded bg-transparent"
                                options={languages}
                                displayValue="name"
                                onSelect={(selected, item) => {
                                    setSelectedOption(selected);
                                    console.log(selected);
                                    context.setLanguage(selected)
                                }}
                                onRemove={(selected, item) => {
                                    setSelectedOption(selected);
                                    context.setLanguage(selected)
                                }}
                            // onSelect={handleTypeSelect}
                            // onRemove={handleTypeRemove}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Language