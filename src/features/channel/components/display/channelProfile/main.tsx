import React from "react";
import Left from "./left";
import Right from "./right";

export const ViewChannel = () => {
    return (
        <>

            <div className="body">
                <div className="mx-auto px-8 lg:px-6 max-w-7xl w-full h-full ">
                    <div className="flex relative justify-between pt-10">
                        <Left />
                        <Right />
                    </div>
                </div>
            </div>
        </>
    );
}
