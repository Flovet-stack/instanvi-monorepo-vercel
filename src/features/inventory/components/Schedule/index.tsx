import React from 'react'

export default function Schedule({ date } : { date : string}) {
    return (
        <div className="boxes border-b border-r   h-28 ">
            <div className=" flex flex-1 mt-8">
                <div>
                    <img src="/images/calenderbig.svg" alt="" />
                </div>
                <div className="pl-4">
                    <p className="text-lg text-gray-400 font-semibold">
                        SHEDULE
                    </p>
                    <span>{ date }</span>
                </div>
            </div>
        </div>
    )
}
