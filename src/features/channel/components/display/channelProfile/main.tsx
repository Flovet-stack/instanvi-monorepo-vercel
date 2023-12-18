import React from "react";
import Left from "./left";
import Right from "./right";
import { useChannel } from "@/features/channel/api/getChannel";
import { Loading } from '@/features/channel';
import Router, { useRouter } from "next/router";


export const ViewChannel = () => {
    const { asPath } = useRouter();
    const strings = asPath;
    const res = strings.split("?");
    console.log(res)
    const { data, isLoading } = useChannel(res[1])

    React.useEffect(() => {
        console.log(res);
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
