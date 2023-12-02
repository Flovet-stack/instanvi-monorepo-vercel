import React, { useState, useEffect, useContext, FC } from "react";
import { useActiveMenu } from "react-active-menu";
import Header from "../../headers";
import Link from "next/link";
import Avatar from "avataaars";
import Location from "../../google";
import Name from "./data/demographic";
import Language from "./data/language";
import AuthContext from "@/Components/context";
import Device from "./data/device";
import Interest from "./data/interest";
import { SpinnerCircular } from "spinners-react";
import Industry from "./data/industry";
import Interests from "./data/interests";
import Names from "./data/name";
import toast from "react-hot-toast";
import Offlimit from "./data/offLimit";

const Persona: FC = () => {

    const { registerContainer, registerSection, registerTrigger, activeId } =
    useActiveMenu({
      smooth: true,
    });

  const ContextData = useContext(AuthContext);
  const [locationName, setLocationName] = useState<string[]>([]);
  const [deviceName, setDeviceName] = useState<string[]>([]);
  const [headerHeights, setHeaderHeight] = useState<string>("");
  const [heights, setHeight] = useState<number>(0);
  const [animation, setAnimation] = useState<boolean>(false);
  useEffect(() => {
    setHeaderHeight(localStorage.getItem("headerHeight") || "");
    setHeight(window.innerHeight);

    const item = ContextData.personaData;
    if (item) {
      item.map((items: any) => {
        if (items) {
          setLocationName(items.Location);
          setDeviceName(items.Device);
          console.log(items.Device);
        }
      });
    }

  }, []);

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number, name: string): void => {
    alert(name);
    const item = ContextData.personaData;
    if (item && name == "Bafoussam") {
      const datas = item.map((items: any) => {
        return {
          ...items,
          Location: items.Location.filter((item: any) => item.id !== id),
        };
      });
      ContextData.setPersonaData(datas);
      setLocationName(datas);
    }
  };

  const handleDeleteDemographics = (e: React.MouseEvent<HTMLButtonElement>, name: string): void => {
    let demo = ContextData.demographics.filter((items: string) => items !== name);
    ContextData.setDemographics([...demo]);
  };

  const saveArrays: any[] = [];

  const save = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setAnimation(true);
    saveArrays.push(
      {
        location: ContextData.location.map((item: any) => {
          return item;
        }),
      },
      {
        interests: ContextData.interest.map((item: any) => {
          return item;
        }),
      },
      {
        sex: ContextData.sex.map((item: any) => {
          return item;
        }),
      },
      {
        social_status: ContextData.marital.map((item: any) => {
          return item;
        }),
      },
      {
        age: ContextData.age.map((item: any) => {
          return item;
        }),
      },
      {
        language: ContextData.language.map((item: any) => {
          return item;
        }),
      },
      {
        ethnicity: ContextData.industry.map((item: any) => {
          return item;
        }),
      },
      {
        operating_system: ContextData.operatingSystem.map((item: any) => {
          return item;
        }),
      },
      {
        carrier_isp: ContextData.carrier.map((item: any) => {
          return item;
        }),
      },
      {
        device_type: ContextData.device.map((item: any) => {
          return item;
        }),
      },
      {
        income_level: ContextData.income.map((item: any) => {
          return item;
        }),
      },
      {
        off_limit: ContextData.offLimit.map((item: any) => {
          return item;
        }),
      },
      {
        name: ContextData.usern,
      },
      {
        image: [
          "http://example.com/image1.jpg",
          "http://example.com/image2.jpg",
        ],
      },
      {
        sensitive_exclusion: ["Sensitive1", "Sensitive2"],
      },
      { website: ["http://example.com/site1", "http://example.com/site2"] }
    );

    var data = Object.assign({}, ...saveArrays);

    const method = "POST";
    const page = "login";

    const options = {
      method: method,
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const res = await fetch("/api/db/post/persona", options);
    const final = await res.json();
    console.log(final);
    if (final.error) {
      setAnimation(false);
      toast.error("Something went wrong Try again");
    } else {
      if (final.success) {
        toast.success("created Succesfully");

        setAnimation(false);
      } else {
        setAnimation(false);
        toast.error(final.dataErrors.message);
      }
    }
  };

  return (

  );
}

export default Persona