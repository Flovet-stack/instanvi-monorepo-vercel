import React, { FC, useContext, useState } from 'react'
import Multiselect from "multiselect-react-dropdown";
import { userContext } from '@/Components/context/context'

interface Languages {
    name: string,
    id: number
}
const Language: FC = () => {
    const context = useContext(userContext)
    const [storage, setStorage] = useState(
        typeof window !== 'undefined' ?
            JSON.parse(localStorage.getItem('channel') || '{}')
            :
            ""
    )
    const [selectedOption, setSelectedOption] = useState<string>();
    const [selectedLanguage, setSelectedLanguage] = useState<string[]>([])
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
                                    context.setLanguage(selected)
                                    setSelectedOption(selected);
                                    console.log(selected);
                                    // localStorage.setItem("channel", JSON.stringify({ ...storage, audience_description: { ...storage.audience_description, languages: selected } }))
                                }}
                                onRemove={(selected, item) => {
                                    context.setLanguage(selected)
                                    setSelectedOption(selected);
                                    // localStorage.setItem("channel", JSON.stringify({ ...storage, audience_description: { ...storage.audience_description, languages: selected } }))
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