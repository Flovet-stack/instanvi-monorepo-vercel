import React, { FC, useState, useContext, ChangeEvent } from 'react'

import { userContext } from '@/Components/context/context'



interface SocialStatus {
    name: string,
    id: number,
    checked: boolean
}

interface Person {
    total: number,
    status: string,
    percentage: number,

}
const people: Person[] = [
    {
        total: 0,
        status: "Single",

        percentage: 0,
    },
    {
        total: 0,
        status: "Married",
        percentage: 0,
    },

]


const Audience: FC = () => {
    const context = useContext(userContext)
    const [isCheckedStatus, setIsCheckedStatus] = useState<boolean>(false);
    const [single, setSingle] = useState<string>("");
    const [updatedPeople, setUpdatedPeople] = useState<Person[]>([]);

    const [married, setMarried] = useState<string>("");
    const [maritalStatus, setMaritalStatus] = useState<string[]>([])
    const [storage, setStorage] = useState(
        typeof window !== 'undefined' ?
            JSON.parse(localStorage.getItem('channel') || '{}')
            :
            ""
    )
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
        localStorage.setItem("channel", JSON.stringify({ ...storage, marital_status: newArray }))
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>, person: Person) => {
        const number = event.target.value.trim();
        const newPeople = updatedPeople.filter((p) => p.status !== person.status);
        if (number !== "") {

            newPeople.push({
                total: parseInt(number),
                status: person.status,
                percentage: parseInt(number)
            });
        }
        setUpdatedPeople(newPeople);
        if (newPeople.length > 0) {
            newPeople.map((items: { percentage: number }) => {
                context.setT_Audience((count: number) => count + items.percentage);
            });
        }
    };

    React.useEffect(() => {
        // localStorage.setItem("channel", JSON.stringify({ ...storage, audience_description: { ...storage.audience_description, marital_status: updatedPeople } }))
        // console.log(updatedPeople);
        context.setMaritalStatus(updatedPeople)
    }, [updatedPeople]);



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

                            {people.map((person) => (
                                <div className="flex justify-between mt-4">
                                    <label className="text-lg font-semibold" htmlFor={`age-${person.status}`}>{person.status}</label>
                                    <input
                                        type="number"
                                        id={`age-${person.status}`}
                                        value={updatedPeople.find((p) => p.status === person.status)?.total || ""}
                                        onChange={(event) => handleChange(event, person)}
                                        className="w-36 rounded-lg pl-2 py-1.5 border pl-2"
                                        placeholder="00"
                                    />
                                </div>
                            ))}

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