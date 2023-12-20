import React, { FC, useState, useContext, ChangeEvent } from 'react';

import { userContext } from '@/Components/context/context';

interface Cat {
    name: string;
    id: number;
    checked: boolean;
    number: string;
    percentage: number;
}

interface Person {
    total: number;
    age: string;
    percentage: number;
}

const people: Person[] = [
    {
        total: 0,
        age: "12-17",
        percentage: 0,
    },
    {
        total: 0,
        age: "18-24",
        percentage: 0,
    },
    {
        total: 0,
        age: "25-34",
        percentage: 0,
    },
    {
        total: 0,
        age: "35-50",
        percentage: 0,
    },
    {
        total: 0,
        age: "50+",
        percentage: 0,
    },
];

const Audience: FC = () => {
    const context = useContext(userContext);
    const [ageRange, setAgerange] = useState<string[]>([]);
    const [updatedPeople, setUpdatedPeople] = useState<Person[]>([]);
    const [ageDistribution, setAgeDistribution] = useState([])
    const [isCheckedAge, setIsCheckedAge] = useState<boolean>(false);
    const [storage, setStorage] = useState<{ [key: string]: any }>(
        typeof window !== 'undefined'
            ? JSON.parse(localStorage.getItem('channel') || '{}')
            : {}
    );
    const [categories, setCategories] = useState<Cat[]>([
        {
            id: 1,
            name: "12-17",
            checked: false,
            number: "",
            percentage: 0,
        },
        {
            id: 1,
            name: "18-24",
            checked: false,
            number: "",
            percentage: 0,
        },
        {
            id: 1,
            name: "25-34",
            checked: false,
            number: "",
            percentage: 0,
        },
        {
            id: 1,
            name: "35-50",
            checked: false,
            number: "",
            percentage: 0,
        },
        {
            id: 1,
            name: "50+",
            checked: false,
            number: "",
            percentage: 0,
        },
    ]);

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newArray = [...ageRange, e.target.id];
        if (ageRange.includes(e.target.id)) {
            newArray = newArray.filter((datas) => datas !== e.target.id);
        }
        setAgerange(newArray);
        context.setAgeDistribution(newArray);
        localStorage.setItem(
            "channel",
            JSON.stringify({ ...storage, age_distribution: newArray })
        );
    };

    const handleChange = (
        event: ChangeEvent<HTMLInputElement>,
        person: Person
    ) => {
        const number = event.target.value.trim();
        const newPeople = updatedPeople.filter((p) => p.age !== person.age);
        if (number !== "") {
            newPeople.push({
                total: parseInt(number),
                age: person.age,
                percentage: parseInt(number),
            });
        }
        setUpdatedPeople(newPeople);
        console.log(newPeople)
        setAgeDistribution(newPeople)
        if (newPeople.length > 0) {
            newPeople.map((items: { percentage: number }) => {
                context.setT_Audience((count: number) => count + items.percentage);
            });
        }
    };

    React.useEffect(() => {
        context.setAgeDistribution(ageDistribution);
        console.log(updatedPeople);
    }, [updatedPeople]);

    return (
        <div className={"h-fit ml-2 py-28 border-b w-full"}>
            <div className="flex justify-center w-full">
                <div className=" w-[50%]">
                    <h2 className="font-bold text-3xl">Describe Your Audience</h2>
                    <h6 className="font-semibold mt-4 mb-3 pr-3">Age Distribution</h6>
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
                            {people.map((person) => (
                                <div className="flex justify-between mt-4">
                                    <label
                                        className="text-lg font-semibold"
                                        htmlFor={`age-${person.age}`}
                                    >
                                        {person.age}
                                    </label>
                                    <input
                                        type="number"
                                        id={`age-${person.age}`}
                                        value={
                                            updatedPeople.find((p) => p.age === person.age)?.total ||
                                            ""
                                        }
                                        onChange={(event) => handleChange(event, person)}
                                        className="w-36 rounded-lg pl-2 py-1.5 border pl-2"
                                        placeholder="00"
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="w-full px-4 py-3 border pl-2">
                            <h6 className="font-bold">Sect Top 2 audience categories</h6>
                            {categories.map((items, id) => {
                                return (
                                    <div className="flex  ml-10   mt-4">
                                        <input
                                            type="checkbox"
                                            id={items.name}
                                            className=" rounded-md border pl-2"
                                            placeholder="00"
                                            onChange={(e) => onChangeValue(e)}
                                        />
                                        <label
                                            htmlFor={items.name}
                                            className="text-lg font-semibold ml-5"
                                        >
                                            {items.name}
                                        </label>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Audience;