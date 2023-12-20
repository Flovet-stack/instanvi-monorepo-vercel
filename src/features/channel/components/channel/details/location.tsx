import { FC, useContext, useState } from "react";

import { userContext } from '@/Components/context/context'

const Location: FC = () => {
    const context = useContext(userContext)
    const [locationName, setLocationName] = useState<string>("");


    return (
        <>
            <div className="h-[70vh] ml-2 w-full flex justify-center border-b ">




                <div className="w-full px-28  mt-16 ">
                    <h2 className="text-3xl flex mt-10 justify-center">
                        Enter Your Primary Target Location
                    </h2>
                    <div className="flex justify-between w-full mt-32">
                        <div className="w-[40%] mt-20">
                            <p>Enter Location</p>
                            <div className="relative mr-5">
                                <input type="text" onChange={(e) => { context.setLocation("Douala") }} className="border py-2.5 w-full pl-2" />
                                {/* <SearchBox
                        token="pk.eyJ1IjoiamFtaXNvbjE5OTgiLCJhIjoiY2wyOHl1cmc2MGU5bzNlbGdvOHptcDVkdiJ9.V7KqYwIqXPsxyQct1QHuEg"
                        callback={({ location, event }) => {
                            setPlaceName(location.place_name);
                        }}
                        selectColor="green"
                    /> */}
                                <button

                                    className="absolute top-11 right-1 -mr-15 -mt-10 h-9    rounded-r border-black px-4 bg-black text-white "
                                >
                                    Adds
                                </button>
                            </div>

                        </div>

                        <div className="w-[60%]">
                            {/* <Map
                    style="mapbox://styles/mapbox/streets-v10"
                    accessToken="pk.eyJ1IjoiamFtaXNvbjE5OTgiLCJhIjoiY2wyOHl1cmc2MGU5bzNlbGdvOHptcDVkdiJ9.V7KqYwIqXPsxyQct1QHuEg"
                    containerStyle={{
                        height: "40vh",
                        width: "60%",
                    }}
                >
                    <Layer
                        type="symbol"
                        id="marker"
                        layout={{ "icon-image": "marker-15" }}
                    >
                        <Feature
                            coordinates={[-0.481747846041145, 51.3233379650232]}
                        />
                    </Layer>
                </Map> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Location