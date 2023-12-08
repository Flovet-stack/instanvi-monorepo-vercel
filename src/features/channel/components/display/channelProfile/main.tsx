import React from "react";
import Left from "./left";
import Right from "./right";
import { useChannel } from "@/features/channel/api/getChannel";
import { Loading } from '@/features/channel';

export const ViewChannel = () => {

    const { data, isLoading } = useChannel('3a071142-c261-4599-a6c3-5acd05c60474')

    React.useEffect(() => {
        console.log(data);
    }, [])

    return (
        <>
            {
                isLoading ? <Loading /> :
                    <div className="body">
                        <div className="mx-auto px-8 lg:px-6 max-w-7xl w-full h-full ">
                            <div className="flex relative justify-between pt-10">
                                <Left />
                                <Right />
                            </div>
                        </div>
                    </div>
            }

        </>
    );
}
