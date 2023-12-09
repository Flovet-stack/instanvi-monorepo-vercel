import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Avatar from "avataaars";
import Name from "../../features/persona/components/data/demographic";
import Language from "../../features/persona/components/data/language";
import Device from "../../features/persona/components/data/device";
import Interest from "../../features/persona/components/data/interest";
import { SpinnerCircular } from "spinners-react";
import Industry from "../../features/persona/components/data/industry";
import Interests from "../../features/persona/components/data/interests";
import Names from "../../features/persona/components/data/name";
import toast from "react-hot-toast";
import Offlimit from "../../features/persona/components/data/offLimit";
import { HeaderLayout } from "@/layouts/header-layout";
import { CurrentUserContext } from "../_app";
import { useMutation } from "@tanstack/react-query";
import { PersonasAPI } from "@/libs/instanvi-service";
import CrossIcon from "@/features/persona/components/icons/cross";
import { useRouter } from "next/router";

export default function Persona() {
  const router = useRouter()
  const ContextData = useContext(CurrentUserContext as any) as any
  const createPersona = useMutation(((data: any) => PersonasAPI.createPersonas('6c28de38-4ac6-4f9f-9b5e-08ffbd700543', data)) as any)
  const [location, setLocation] = useState(false);
  const [demographic, setDemographic] = useState(false);
  const [interest, setInterest] = useState(false);
  const [language, setLanguage] = useState(false);
  const [income, setIncome] = useState(false);
  const [occupation, setOccupation] = useState(false);
  const [device, setDevice] = useState(false);
  const [name, setName] = useState(true);
  const [offLimit, setOffLimit] = useState(false);
  const [locationName, setLocationName] = useState([]);
  const [deviceName, setDeviceName] = useState([]);
  const [headerHeights, setHeaderHeight] = useState("");
  const [heights, setHeight] = useState<any>("");
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    const headerHeight = localStorage.getItem("headerHeight");
    setHeaderHeight(localStorage.getItem("headerHeight") ?? '');
    setHeight(window.innerHeight || '');

    const item = ContextData?.personaData
    if (item) {
      item.map((items: any) => {
        if (items) {
          setLocationName(items.Location);
          setDeviceName(items.Device);
          console.log(items.Device);
        }
      });
    }
    const windows = document.querySelector("#scroll-persona");
    windows?.addEventListener("scroll", (evt: any) => {
      if (
        evt?.target?.scrollTop >
        window.innerHeight * 7 - (headerHeight as any) * 7 + 20
      ) {
        setLocation(false);
        setDemographic(false);
        setInterest(false);
        setLanguage(false);
        setOccupation(false);
        setIncome(false);
        setDevice(false);
        setOffLimit(true);
      } else if (
        evt.target.scrollTop > window.innerHeight * 6 - (headerHeight as any) * 6 &&
        evt.target.scrollTop < window.innerHeight * 7 - (headerHeight as any) * 7
      ) {
        setLocation(false);
        setDemographic(false);
        setInterest(false);
        setLanguage(false);
        setOccupation(false);
        setIncome(false);
        setDevice(true);
        setOffLimit(false);
      } else if (
        evt.target.scrollTop > window.innerHeight * 5 - (headerHeight as any) * 5 &&
        evt.target.scrollTop < window.innerHeight * 6 - (headerHeight as any) * 6
      ) {
        setLocation(false);
        setDemographic(false);
        setInterest(false);
        setLanguage(false);
        setOccupation(true);
        setIncome(false);
        setOffLimit(false);
        setDevice(false);
      } else if (
        evt.target.scrollTop > window.innerHeight * 4 - (headerHeight as any) * 4 &&
        evt.target.scrollTop < window.innerHeight * 5 - (headerHeight as any) * 5
      ) {
        setLocation(false);
        setDemographic(false);
        setInterest(false);
        setLanguage(true);
        setOccupation(false);
        setIncome(false);
        setOffLimit(false);
        setDevice(false);
      } else if (
        evt.target.scrollTop > window.innerHeight * 3 - (headerHeight as any) * 3 &&
        evt.target.scrollTop < window.innerHeight * 4 - (headerHeight as any) * 4
      ) {
        setLocation(false);
        setDemographic(false);
        setInterest(true);
        setLanguage(false);
        setOccupation(false);
        setIncome(false);
        setOffLimit(false);
        setDevice(false);
      } else if (
        evt.target.scrollTop > window.innerHeight * 2 - (headerHeight as any) * 2 &&
        evt.target.scrollTop < window.innerHeight * 3 - (headerHeight as any) * 3
      ) {
        setLocation(false);
        setDemographic(true);
        setInterest(false);
        setLanguage(false);
        setOccupation(false);
        setIncome(false);
        setOffLimit(false);
        setDevice(false);
      } else if (
        evt.target.scrollTop > window.innerHeight - (headerHeight as any) &&
        evt.target.scrollTop < window.innerHeight * 2
      ) {
        setLocation(true);
        setDemographic(false);
        setInterest(false);
        setLanguage(false);
        setOccupation(false);
        setOffLimit(false);
        setIncome(false);
        setDevice(false);
      } else {
        setLocation(false);
        setDemographic(false);
        setInterest(false);
        setLanguage(false);
        setOccupation(false);
        setOffLimit(false);
        setIncome(true);
        setDevice(false);
      }
    });
  }, []);

  const handleDelete = (e: any, id: string, name: string) => {
    alert(name);
    const item = ContextData?.personaData;
    if (item && name == "Bafoussam") {
      const datas = item.map((items: any) => {
        return {
          ...items,
          Location: items.Location.filter((item: any) => item.id !== id),
        };
      });
      ContextData?.setPersonaData(datas);
      setLocationName(datas);
    }
  };
  const handleDeleteDemographics = (e: any, name: string) => {
    let demo = ContextData?.demographics.filter((items: any) => items !== name);
    ContextData?.setDemographics([...demo]);
  };

  const saveArrays = [] as any;

  const save = async (e: any) => {
    e.preventDefault();
    setAnimation(true);
    saveArrays.push(
      {
        location: ContextData?.location.map((item: any) => {
          return item;
        }),
      },
      {
        interests: ContextData?.interest.map((item: any) => {
          return item;
        }),
      },
      {
        sex: ContextData?.sex.map((item: any) => {
          return item;
        }),
      },
      {
        social_status: ContextData?.marital.map((item: any) => {
          return item;
        }),
      },
      {
        age: ContextData?.age.map((item: any) => {
          return item;
        }),
      },
      {
        language: ContextData?.language.map((item: any) => {
          return item;
        }),
      },
      {
        ethnicity: ContextData?.industry.map((item: any) => {
          return item;
        }),
      },
      {
        operating_system: ContextData?.operatingSystem.map((item: any) => {
          return item;
        }),
      },
      {
        carrier_isp: ContextData?.carrier.map((item: any) => {
          return item;
        }),
      },
      {
        device_type: ContextData?.device.map((item: any) => {
          return item;
        }),
      },
      {
        income_level: ContextData?.income.map((item: any) => {
          return item;
        }),
      },
      {
        off_limit: ContextData?.offLimit.map((item: any) => {
          return item;
        }),
      },
      {
        name: ContextData?.usern,
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

    createPersona.mutate(data, {
      onSuccess: () => {
        toast.success(`Persona ${ContextData.usern} created Succesfully`);
        router.push('persona')
        setAnimation(false);
        ContextData.setUsern()
        ContextData.setAgeDistribution([])
        ContextData.setMaritalStatus([])
        ContextData.setIncomeLevel([])
        ContextData.setLanguage([])
        ContextData.setAudience([])
        ContextData.setLocation([])
        ContextData.setSex([])
        ContextData.setAge([])
        ContextData.setIncome([])
        ContextData.setMarital([])
        ContextData.setInterest([])
        ContextData.setIndustry([])
        ContextData.setDevice([])
        ContextData.setOperatingSystem([])
        ContextData.setOffLimit([])
        ContextData.setCarrier([])
      },
      onError: () => {
        setAnimation(false);
        toast.error("Something went wrong Try again");
      }
    })
  };


  const onRemoveSex = (selectedItem: string): void => {
    let context = ContextData?.sex.filter((item: string) => item !== selectedItem);
    ContextData?.setSex([...context]);
  }

  const onRemoveAge = (selectedItem: string): void => {
    let context = ContextData?.age.filter((item: string) => item !== selectedItem);
    ContextData?.setAge([...context]);
  }

  const onRemoveMarital = (selectedItem: string): void => {
    let context = ContextData?.marital.filter((item: string) => item !== selectedItem);
    ContextData?.setMarital([...context]);
  }

  const onRemoveIncome = (selectedItem: string): void => {
    let context = ContextData?.income.filter((item: string) => item !== selectedItem);
    ContextData?.setIncome([...context]);
  }

  const onRemoveInterest = (selectedItem: string): void => {
    let context = ContextData?.interest.filter((item: string) => item !== selectedItem);
    ContextData?.setInterest([...context]);
  }

  const onRemoveLanguage = (selectedItem: string): void => {
    let context = ContextData?.language.filter((item: string) => item !== selectedItem);
    ContextData?.setLanguage([...context]);
  }

  const onRemoveIndustry = (selectedItem: string): void => {
    let context = ContextData?.industry.filter((item: string) => item !== selectedItem);
    ContextData?.setIndustry([...context]);
  }

  return (
    <HeaderLayout>
      <Interests />
      <hr />
      <div className="mx-auto overflow-y-auto max-w-8xl px-6 lg:px-16">
        <div className="w-full flex">
          <div className="w-3/5">
            <div className="w-full flex">
              <div
                className="w-48 pt-3"
                style={{
                  height: heights - (headerHeights as any) - 2,
                  borderRight: "1px solid #E5E4E2",
                }}
              >
                <Link legacyBehavior href={"./"}>
                  <a className="flex">
                    <i className="ri-arrow-left-line mr-2"></i> <p>Persona</p>
                  </a>
                </Link>
                <div className="mt-2">
                  <div
                    onClick={() => {
                      setLocation(false);
                      setDemographic(false);
                      setInterest(false);
                      setLanguage(false);
                      setIncome(true);
                      setOccupation(false);
                      setOffLimit(false);
                      setDevice(false);
                      const windows = document.querySelector("#scroll-persona");
                      windows?.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                    className={`${income ? "border-r-2 border-green-500 text-green-500" : ""
                      }  mt-3   text-lg cursor-pointer`}
                  >
                    <p>Name</p>
                  </div>
                  <div
                    onClick={() => {
                      setLocation(true);
                      setDemographic(false);
                      setInterest(false);
                      setLanguage(false);
                      setIncome(false);
                      setOccupation(false);
                      setOffLimit(false);
                      setDevice(false);
                      const windows = document.querySelector("#scroll-persona");
                      windows?.scrollTo({
                        top: window.innerHeight - (headerHeights as any) + 2,
                        behavior: "smooth",
                      });
                    }}
                    className={`${location
                      ? "border-r-2 border-green-500 text-green-500"
                      : ""
                      }  mt-3   text-lg cursor-pointer`}
                  >
                    <p>Location</p>
                  </div>
                  <div
                    onClick={() => {
                      setLocation(false);
                      setDemographic(true);
                      setInterest(false);
                      setLanguage(false);
                      setIncome(false);
                      setOccupation(false);
                      setOffLimit(false);
                      setDevice(false);
                      const windows = document.querySelector("#scroll-persona");
                      windows?.scrollTo({
                        top: window.innerHeight * 2 - (headerHeights as any) * 2 + 2,
                        behavior: "smooth",
                      });
                    }}
                    className={`${demographic
                      ? "border-r-2 border-green-500 text-green-500"
                      : ""
                      }  mt-3   text-lg cursor-pointer`}
                  >
                    <p>Demographics</p>
                  </div>
                  <div
                    onClick={() => {
                      setLocation(false);
                      setDemographic(false);
                      setInterest(true);
                      setLanguage(false);
                      setIncome(false);
                      setOccupation(false);
                      setOffLimit(false);
                      setDevice(false);
                      const windows = document.querySelector("#scroll-persona");
                      windows?.scrollTo({
                        top: window.innerHeight * 3 - (headerHeights as any) * 3 + 2,
                        behavior: "smooth",
                      });
                    }}
                    className={`${interest
                      ? "border-r-2 border-green-500 text-green-500"
                      : ""
                      }  mt-3   text-lg cursor-pointer`}
                  >
                    <p>Interests</p>
                  </div>
                  <div
                    onClick={() => {
                      setLocation(false);
                      setDemographic(false);
                      setInterest(false);
                      setLanguage(true);
                      setIncome(false);
                      setOccupation(false);
                      setOffLimit(false);
                      setDevice(false);
                      const windows = document.querySelector("#scroll-persona");
                      windows?.scrollTo({
                        top: window.innerHeight * 4 - (headerHeights as any) * 4 + 2,
                        behavior: "smooth",
                      });
                    }}
                    className={`${language
                      ? "border-r-2 border-green-500 text-green-500"
                      : ""
                      }  mt-3   text-lg cursor-pointer`}
                  >
                    <p>Languages</p>
                  </div>

                  <div
                    onClick={() => {
                      setLocation(false);
                      setDemographic(false);
                      setInterest(false);
                      setLanguage(false);
                      setIncome(false);
                      setOccupation(true);
                      setOffLimit(false);
                      setDevice(false);
                      const windows = document.querySelector("#scroll-persona");
                      windows?.scrollTo({
                        top: window.innerHeight * 5 - (headerHeights as any) * 5 + 2,
                        behavior: "smooth",
                      });
                    }}
                    className={`${occupation
                      ? "border-r-2 border-green-500 text-green-500"
                      : ""
                      }  mt-3   text-lg cursor-pointer`}
                  >
                    <p>Occupation</p>
                  </div>
                  <div
                    onClick={() => {
                      setLocation(false);
                      setDemographic(false);
                      setInterest(false);
                      setLanguage(false);
                      setIncome(false);
                      setOffLimit(false);
                      setOccupation(false);
                      setDevice(true);
                      const windows = document.querySelector("#scroll-persona");
                      windows?.scrollTo({
                        top: window.innerHeight * 6 - (headerHeights as any) * 6 + 2,
                        behavior: "smooth",
                      });
                    }}
                    className={`${device ? "border-r-2 border-green-500 text-green-500" : ""
                      }  mt-3   text-lg cursor-pointer`}
                  >
                    <p>Device Type</p>
                  </div>

                  <div
                    onClick={() => {
                      setLocation(false);
                      setDemographic(false);
                      setInterest(false);
                      setLanguage(false);
                      setIncome(false);
                      setOccupation(false);
                      setDevice(false);
                      setOffLimit(true);
                      const windows = document.querySelector("#scroll-persona");
                      windows?.scrollTo({
                        top: window.innerHeight * 8 - (headerHeights as any) * 8 + 2,
                        behavior: "smooth",
                      });
                    }}
                    className={`${offLimit
                      ? "border-r-2 border-green-500 text-green-500"
                      : ""
                      }  mt-3   text-lg cursor-pointer`}
                  >
                    <p>Off Limits</p>
                  </div>
                </div>
              </div>
              <div
                style={{ height: heights - (headerHeights as any) - 1 }}
                id="scroll-persona"
                className="mx-3 w-full scroll-persona   overflow-y-scroll overflow-y-hidden "
              >
                <div
                  style={{ height: heights - (headerHeights as any) }}
                  className="overflow-y-auto scrollbars"
                >
                  <Names />
                </div>
                <hr />
                <div
                  style={{ height: heights - (headerHeights as any) }}
                  className="overflow-y-auto scrollbars"
                ></div>
                <hr />
                <div
                  style={{ height: heights - (headerHeights as any) }}
                  className="overflow-y-auto scrollbars"
                >
                  <Name />
                </div>
                <hr />
                <div
                  style={{ height: heights - (headerHeights as any) }}
                  className="overflow-y-auto scrollbars"
                >
                  <Interest />
                </div>

                <hr />
                <div
                  style={{ height: heights - (headerHeights as any) }}
                  className="overflow-y-auto scrollbars"
                >
                  <Language name="test" />
                </div>
                <hr />
                <div
                  style={{ height: heights - (headerHeights as any) }}
                  className="overflow-y-auto scrollbars"
                >
                  <Industry />
                </div>
                <hr />
                <div
                  style={{ height: heights * 1.7 - (headerHeights as any) }}
                  className=" scrollbars"
                >
                  <Device />
                </div>
                <div
                  style={{ height: heights - (headerHeights as any) }}
                  className=" scrollbars"
                >
                  <Offlimit />
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/5">
            <div className="w-full">
              <table
                className="min-w-full divide-y divide-gray-300"
                style={{ height: heights - (headerHeights as any) - 60 }}
              >
                <tr className="p-2">
                  <td className="bg-gray-100 w-56 py-4 pl-5 text-xl">
                    <p>Name</p>
                  </td>
                  <td>
                    {ContextData?.usern == "" ? (
                      ""
                    ) : (
                      <div className="rounded-xl text-gray-700 w-fit border text-md  bg-white px-4 py-0.5 ml-2">
                        {ContextData?.usern}
                      </div>
                    )}
                  </td>
                </tr>
                <tr className="p-2">
                  <td className="bg-gray-100 w-56 py-4 pl-5 text-xl">
                    <p>Image</p>
                  </td>
                  <td>
                    <div>
                      <Avatar
                        style={{ width: "80px", height: "80px" }}
                        avatarStyle="Circle"
                        topType="LongHairMiaWallace"
                        accessoriesType="Prescription02"
                        hairColor="BrownDark"
                        facialHairType="Blank"
                        clotheType="Hoodie"
                        clotheColor="PastelBlue"
                        eyeType="Happy"
                        eyebrowType="Default"
                        mouthType="Smile"
                        skinColor="Light"
                      />
                    </div>
                  </td>
                </tr>
                <tr className="p-2">
                  <td className="bg-gray-100 w-56 py-4 pl-5 text-xl">
                    <p>Location</p>
                  </td>
                  <td>
                    <div className="flex flex-wrap">
                      {ContextData?.location?.length !== "" &&
                        ContextData?.location?.map((item: any) => {
                          return (
                            <div className="rounded-xl text-gray-700 w-fit border text-md  bg-white px-2 py-0.5 ml-2">
                              {item}
                              <i
                                className="ri-close-fill ml-3 cursor-pointer"
                                onClick={(e) => handleDelete(e, '', item)}
                              ></i>
                            </div>
                          );
                        })}
                    </div>
                  </td>
                </tr>
                <tr className="p-2">
                  <td className="bg-gray-100 w-56 py-4 pl-5 text-xl">
                    <p>Age, Sex, Gender,Social Status</p>
                  </td>
                  <td>
                    <div className="flex flex-wrap">
                      {ContextData?.sex?.length !== "" &&
                        ContextData?.sex?.map((item: any) => {
                          return (
                            <div className="flex gap-2 items-center rounded-xl text-gray-700 w-fit border text-md  bg-white px-2 py-0.5 ml-2">
                              <div>{item}</div>
                              <CrossIcon onClick={() => onRemoveSex(item)} />
                            </div>
                          );
                        })}
                      {ContextData?.age?.length !== "" &&
                        ContextData?.age?.map((item: any) => {
                          return (
                            <div className="flex gap-2 items-center rounded-xl text-gray-700 w-fit border text-md  bg-white px-2 py-0.5 ml-2">
                              <div>{item}</div>
                              <CrossIcon onClick={() => onRemoveAge(item)} />
                            </div>
                          );
                        })}
                      {ContextData?.marital?.length !== "" &&
                        ContextData?.marital?.map((item: any) => {
                          return (
                            <div className="flex gap-2 items-center rounded-xl text-gray-700 w-fit border text-md  bg-white px-2 py-0.5 ml-2">
                              <div>{item}</div>
                              <CrossIcon onClick={() => onRemoveMarital(item)} />
                            </div>
                          );
                        })}
                    </div>
                  </td>
                </tr>
                <tr className="p-2">
                  <td className="bg-gray-100 w-56 py-4 pl-5 text-xl">
                    <p>Income Level</p>
                  </td>
                  <td>
                    <div className="flex flex-wrap">
                      {ContextData?.income?.length !== "" &&
                        ContextData?.income?.map((item: any) => {
                          return (
                            <div className="flex gap-2 items-center rounded-xl text-gray-700 w-fit border text-md  bg-white px-2 py-0.5 ml-2">
                              <div>{item}</div>
                              <CrossIcon onClick={() => onRemoveIncome(item)} />
                            </div>
                          );
                        })}
                    </div>
                  </td>
                </tr>
                <tr className="p-2">
                  <td className="bg-gray-100 w-56 py-4 pl-5 text-xl">
                    <p>Interests</p>
                  </td>
                  <td>
                    <div className="flex flex-wrap">
                      {ContextData?.interest?.length !== "" &&
                        ContextData?.interest?.map((item: any) => {
                          return (
                            <div className="flex gap-2 items-center rounded-xl text-gray-700 w-fit border text-md  bg-white px-2 py-0.5 ml-2">
                              <div>{item}</div>
                              <CrossIcon onClick={() => onRemoveInterest(item)} />
                            </div>
                          );
                        })}
                    </div>
                  </td>
                </tr>
                <tr className="p-2">
                  <td className="bg-gray-100 w-56 py-4 pl-5 text-xl">
                    <p>Languages</p>
                  </td>
                  <td>
                    <div className="flex flex-wrap">
                      {ContextData?.language?.length !== "" &&
                        ContextData?.language?.map((item: any) => {
                          return (
                            <div className="flex gap-2 items-center rounded-xl text-gray-700 w-fit border text-md  bg-white px-2 py-0.5 ml-2">
                              <div>{item}</div>
                              <CrossIcon onClick={() => onRemoveLanguage(item)} />
                            </div>
                          );
                        })}
                    </div>
                  </td>
                </tr>
                <tr className="p-2">
                  <td className="bg-gray-100 w-56 py-4 pl-5 text-xl">
                    <p>Occupation</p>
                  </td>
                  <td>
                    <div className="flex flex-wrap">
                      {ContextData?.industry?.length !== "" &&
                        ContextData?.industry?.map((item: any) => {
                          return (
                            <div className="flex gap-2 items-center rounded-xl text-gray-700 w-fit border text-md  bg-white px-2 py-0.5 ml-2">
                              <div>{item}</div>
                              <CrossIcon onClick={() => onRemoveIndustry(item)} />
                            </div>
                          );
                        })}
                    </div>
                  </td>
                </tr>
                <tr className="p-2">
                  <td className="bg-gray-100 w-56 py-4 pl-5 text-xl">
                    <p>Device Types</p>
                  </td>
                  <td>
                    <div className="flex flex-wrap">
                      {ContextData?.device?.length !== "" &&
                        ContextData?.device?.map((item: any) => {
                          return (
                            <div className="flex gap-2 items-center rounded-xl text-gray-700 w-fit border text-md  bg-white px-2 py-0.5 ml-2">
                              <div>{item}</div>
                              <CrossIcon onClick={() => onRemoveSex(item)} />
                            </div>
                          );
                        })}
                    </div>
                  </td>
                </tr>
                <tr className="p-2">
                  <td className="bg-gray-100 w-56 py-4 pl-5 text-xl">
                    <p>Carrier & ISP</p>
                  </td>
                  <td>
                    <div className="flex flex-wrap">
                      {ContextData?.carrier?.length !== "" &&
                        ContextData?.carrier?.map((item: any) => {
                          return (
                            <div className="flex gap-2 items-center rounded-xl text-gray-700 w-fit border text-md  bg-white px-2 py-0.5 ml-2">
                              <div>{item}</div>
                              <CrossIcon onClick={() => onRemoveSex(item)} />
                            </div>
                          );
                        })}
                    </div>
                  </td>
                </tr>
                <tr className="p-2">
                  <td className="bg-gray-100 w-56 py-4 pl-5 text-xl">
                    <p>Operating System</p>
                  </td>
                  <td>
                    <div className="flex flex-wrap">
                      {ContextData?.operatingSystem?.length !== "" &&
                        ContextData?.operatingSystem?.map((item: any) => {
                          return (
                            <div className="flex gap-2 items-center rounded-xl text-gray-700 w-fit border text-md  bg-white px-2 py-0.5 ml-2">
                              <div>{item}</div>
                              <CrossIcon onClick={() => onRemoveSex(item)} />
                            </div>
                          );
                        })}
                    </div>
                  </td>
                </tr>
                <tr className="p-2">
                  <td className="bg-gray-100 w-56 py-4 pl-5 text-xl">
                    <p>Off Limit</p>
                  </td>
                  <td>
                    <div className="flex flex-wrap">
                      {ContextData?.offLimit?.length !== "" &&
                        ContextData?.offLimit?.map((item: any) => {
                          return (
                            <div className="flex gap-2 items-center rounded-xl text-gray-700 w-fit border text-md  bg-white px-2 py-0.5 ml-2">
                              <div>{item}</div>
                              <CrossIcon onClick={() => onRemoveSex(item)} />
                            </div>
                          );
                        })}
                    </div>
                  </td>
                </tr>
              </table>
              <hr />
              <div className="mb-16 flex justify-end"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white fixed bottom-0 border-t   h-14">
        <div className="flex justify-end px-5">
          <button
            id="button"
            onClick={save}
            className="px-6 w-36 mt-2 py-2.5   bg-green-400 text-white rounded"
          >
            {animation ? (
              <center>
                <div className="flex justify-center w-full ">
                  <div className="flex">
                    {" "}
                    <SpinnerCircular
                      color="white"
                      className="text-white h-6 w-6 mr-2"
                    />
                  </div>
                </div>
              </center>
            ) : (
              <>Save </>
            )}
          </button>
        </div>
      </div>
    </HeaderLayout>
  );
}
