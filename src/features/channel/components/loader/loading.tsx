import React, { FC } from 'react'
import LoaderLeft from './loaderLeft'
import LoaderRight from './loaderRight'

export const Loading = () => {
    return (
        <>
            <div className="body">
                <div className="mx-auto px-8 lg:px-6 max-w-7xl w-full h-full ">
                    <div className="flex relative justify-between pt-10">
                        <LoaderLeft />
                        <LoaderRight />
                    </div>
                </div>
            </div>
        </>
    )
}