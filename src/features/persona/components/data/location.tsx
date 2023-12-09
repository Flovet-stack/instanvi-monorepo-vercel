import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import dynamic from "next/dynamic";
import { AuthContext } from "@/components/context/context";
import { v4 as uuid } from "uuid";
import { CurrentUserContext } from "@/pages/_app";

interface Step4Props {}

// function to add classes conditions
function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

const Step4: React.FC<Step4Props> = () => {
  const data = useContext(CurrentUserContext as any) as any
  const [placeName, setPlaceName] = useState<string>("");
  const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoiamFtaXNvbjE5OTgiLCJhIjoiY2wyOHl1cmc2MGU5bzNlbGdvOHptcDVkdiJ9.V7KqYwIqXPsxyQct1QHuEg",
  });
  const addData = (): void => {
    alert(placeName);
    data?.setLocation([...data?.location, placeName]);
  };

  return (
    <div className="w-full">
      <div className="justify-center w-full flex">
        <div className="md:px-0 px-4 mt-1 w-2/3   relative">
          <div className="w-full mt-20  relative">
            {/* <SearchBox
              token="pk.eyJ1IjoiamFtaXNvbjE5OTgiLCJhIjoiY2wyOHl1cmc2MGU5bzNlbGdvOHptcDVkdiJ9.V7KqYwIqXPsxyQct1QHuEg"
              callback={({ location, event }: SearchBoxProps) => {
                alert(location);
                setPlaceName(location.place_name);
              }}
              selectColor="green"
            /> */}
            <button
              onClick={addData}
              className="absolute top-12 right-1 -mr-[10px] -mt-[48px] h-[42px] border border-black    rounded-r px-4 bg-black text-white "
            >
              Add
            </button>
          </div>
          <div className="w-full mt-8">
            <Map
              style="mapbox://styles/mapbox/streets-v10"
              // accessToken="pk.eyJ1IjoiamFtaXNvbjE5OTgiLCJhIjoiY2wyOHl1cmc2MGU5bzNlbGdvOHptcDVkdiJ9.V7KqYwIqXPsxyQct1QHuEg"
              containerStyle={{
                height: "40vh",
                width: "100%",
              }}
            >
              <Layer
                type="symbol"
                id="marker"
                layout={{ "icon-image": "marker-15" }}
              >
                <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
              </Layer>
            </Map>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4;