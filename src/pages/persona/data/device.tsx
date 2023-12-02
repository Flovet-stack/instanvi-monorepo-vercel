import React, { useState, useEffect, Fragment, useContext, FC } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import Router from "next/router";
import toast, { Toaster } from "react-hot-toast";
import AuthContext from "@/Components/context";
import { v4 as uuid } from "uuid";

interface DeviceContext {
  device: string[];
  setDevice: (device: string[]) => void;
}

interface OperatingSystemContext {
  operatingSystem: string[];
  setOperatingSystem: (operatingSystem: string[]) => void;
}

interface CarrierContext {
  carrier: string[];
  setCarrier: (carrier: string[]) => void;
}

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

const Index: FC = () => {
  const ContextData = useContext(AuthContext);
  const [phone, setPhone] = useState<boolean>(false);
  const [laptop, setLaptop] = useState<boolean>(false);
  const [desktop, setDesktop] = useState<boolean>(false);
  const [tablet, setTablet] = useState<boolean>(false);
  const [featurePhone, setFeaturePhone] = useState<boolean>(false);
  const [ios, setIos] = useState<boolean>(false);
  const [android, setAndroid] = useState<boolean>(false);
  const [window, setWindow] = useState<boolean>(false);
  const [linux, setLinux] = useState<boolean>(false);
  const [chrome, setChrome] = useState<boolean>(false);
  const [drafting, setDrafting] = useState<boolean>(false);
  const [animation, setAnimation] = useState<boolean>(false);
  const [orange, setOrange] = useState<boolean>(false);
  const [mtn, setMtn] = useState<boolean>(false);
  const [blue, setBlue] = useState<boolean>(false);
  const [nexttel, setNexttel] = useState<boolean>(false);
  const [yoomee, setYoome] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleEs = (): void => {};

  const handlePhone = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const item: string[] = ContextData.device;
    if (phone == true && item) {
      let datss: string[] = ContextData.device.filter((item) => item !== "Phone");
      ContextData.setDevice([...datss]);
    } else {
      ContextData.setDevice([...ContextData.device, "Phone"]);
    }
  };

  const handleLaptop = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const item: string[] = ContextData.device;
    if (laptop == true && item) {
      let datss: string[] = ContextData.device.filter((item) => item !== "Laptop");
      ContextData.setDevice([...datss]);
    } else {
      ContextData.setDevice([...ContextData.device, "Laptop"]);
    }
  };

  const handleDesktop = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const item: string[] = ContextData.device;
    if (desktop == true && item) {
      let datss: string[] = ContextData.device.filter((item) => item !== "Desktop");
      ContextData.setDevice([...datss]);
    } else {
      ContextData.setDevice([...ContextData.device, "Desktop"]);
    }
  };

  const handleTablet = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const item: string[] = ContextData.device;
    if (tablet == true && item) {
      let datss: string[] = ContextData.device.filter((item) => item !== "Tablet");
      ContextData.setDevice([...datss]);
    } else {
      ContextData.setDevice([...ContextData.device, "Tablet"]);
    }
  };

  const handleFeaturePhone = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const item: string[] = ContextData.device;
    if (featurePhone == true && item) {
      let datss: string[] = ContextData.device.filter((item) => item !== "FeaturePhone");
      ContextData.setDevice([...datss]);
    } else {
      ContextData.setDevice([...ContextData.device, "FeaturePhone"]);
    }
  };

  const handleIos = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const item: string[] = ContextData.operatingSystem;
    if (ios == true && item) {
      let datss: string[] = ContextData.operatingSystem.filter((item) => item !== "Ios");
      ContextData.setOperatingSystem([...datss]);
    } else {
      ContextData.setOperatingSystem([...ContextData.operatingSystem, "Ios"]);
    }
  };

  const handleWindow = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const item: string[] = ContextData.operatingSystem;
    if (window == true && item) {
      let datss: string[] = ContextData.operatingSystem.filter((item) => item !== "Windows");
      ContextData.setOperatingSystem([...datss]);
    } else {
      ContextData.setOperatingSystem([...ContextData.operatingSystem, "Windows"]);
    }
  };

  const handleAndroid = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const item: string[] = ContextData.operatingSystem;
    if (android == true && item) {
      let datss: string[] = ContextData.operatingSystem.filter((item) => item !== "Android");
      ContextData.setOperatingSystem([...datss]);
    } else {
      ContextData.setOperatingSystem([...ContextData.operatingSystem, "Android"]);
    }
  };

  const handleLinux = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const item: string[] = ContextData.operatingSystem;
    if (linux == true && item) {
      let datss: string[] = ContextData.operatingSystem.filter((item) => item !== "Linux");
      ContextData.setOperatingSystem([...datss]);
    } else {
      ContextData.setOperatingSystem([...ContextData.operatingSystem, "Linux"]);
    }
  };

  const handleChrome = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const item: string[] = ContextData.operatingSystem;
    if (chrome == true && item) {
      let datss: string[] = ContextData.operatingSystem.filter((item) => item !== "Chrome");
      ContextData.setOperatingSystem([...datss]);
    } else {
      ContextData.setOperatingSystem([...ContextData.operatingSystem, "Chrome"]);
    }
  };

  const handleOrange = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const item: string[] = ContextData.carrier;
    if (orange == true && item) {
      let datss: string[] = ContextData.carrier.filter((item) => item !== "Orange");
      ContextData.setCarrier([...datss]);
    } else {
      ContextData.setCarrier([...ContextData.carrier, "Orange"]);
    }
  };

  const handleMtn = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const item: string[] = ContextData.carrier;
    if (mtn == true && item) {
      let datss: string[] = ContextData.carrier.filter((item) => item !== "MTN");
      ContextData.setCarrier([...datss]);
    } else {
      ContextData.setCarrier([...ContextData.carrier, "MTN"]);
    }
  };

  const handleNexttel = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const item: string[] = ContextData.carrier;
    if (nexttel == true && item) {
      let datss: string[] = ContextData.carrier.filter((item) => item !== "Nexttel");
      ContextData.setCarrier([...datss]);
    } else {
      ContextData.setCarrier([...ContextData.carrier, "Nexttel"]);
    }
  };

  const handlYoomee = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const item: string[] = ContextData.carrier;
    if (yoomee == true && item) {
      let datss: string[] = ContextData.carrier.filter((item) => item !== "Yoomee");
      ContextData.setCarrier([...datss]);
    } else {
      ContextData.setCarrier([...ContextData.carrier, "Yoomee"]);
    }
  };

  const handleBlue = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const item: string[] = ContextData.carrier;
    if (blue == true && item) {
      let datss: string[] = ContextData.carrier.filter((item) => item !== "Camtel");
      ContextData.setCarrier([...datss]);
    } else {
      ContextData.setCarrier([...ContextData.carrier, "Camtel"]);
    }
  };

  return (
    <div className="mx-auto max-w-8xl px-6 lg:px-8 pt-3">
      <Toaster />
      <div className=" ">
        <div className="w-full">
          <div className="justify-center flex mt-10 md:mt-10">
            <div className="w-full       md:mx-20 mx-32">
              <h3 className="text-xl mb-4">Device type</h3>
              <div className="flex flex-wrap w-full mb-16">
                <div className="mt-3">
                  <div
                    className={`flex h-36  w-48 py-8 mx-1 relative justify-center  rounded  cursor-pointer ${
                      phone ? "border-2 border-green-300" : "border-2"
                    }`}
                    onClick={(e) => {
                      setPhone(!phone);
                      handlePhone(e);
                    }}
                  >
                    <div className={classNames("  absolute right-0 top-0 m-2")}>
                      {" "}
                      {phone ? (
                        <i className="ri-checkbox-circle-fill text-green-500   mt-2 mr-1 text-lg"></i>
                      ) : (
                        <i class="ri-checkbox-blank-circle-line text-gray-500   mt-2 mr-1 text-lg"></i>
                      )}
                    </div>
                    <div>
                      <center>
                        <img src="/images/phone.svg" className="mb-2" alt="" />
                        <span>Mobile Phone</span>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div
                    className={`flex h-36  w-48 py-8 mx-1 relative justify-center  rounded  cursor-pointer ${
                      laptop ? "border-2 border-green-300" : "border-2"
                    }`}
                    onClick={() => {
                      setLaptop(!laptop);
                      handleLaptop();
                    }}
                  >
                    <div className={classNames("  absolute right-0 top-0 m-2")}>
                      {laptop ? (
                        <i className="ri-checkbox-circle-fill text-green-500   mt-2 mr-1 text-lg"></i>
                      ) : (
                        <i class="ri-checkbox-blank-circle-line text-gray-500   mt-2 mr-1 text-lg"></i>
                      )}
                    </div>
                    <div>
                      <center>
                        <img src="/images/laptop.svg" className="mb-2" alt="" />
                        <span>Laptops</span>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div
                    className={`flex h-36  w-48 py-8 mx-1 relative justify-center  rounded  cursor-pointer ${
                      desktop ? "border-2 border-green-300" : "border-2"
                    }`}
                    onClick={() => {
                      setDesktop(!desktop);
                      handleDesktop();
                    }}
                  >
                    <div className={classNames("  absolute right-0 top-0 m-2")}>
                      {desktop ? (
                        <i className="ri-checkbox-circle-fill text-green-500   mt-2 mr-1 text-lg"></i>
                      ) : (
                        <i class="ri-checkbox-blank-circle-line text-gray-500   mt-2 mr-1 text-lg"></i>
                      )}
                    </div>
                    <div>
                      <center>
                        <img
                          src="/images/desktop.svg"
                          className="mb-2"
                          alt=""
                        />
                        <span>Desktop</span>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div
                    className={`flex h-36  w-48 py-8 mx-1 relative justify-center  rounded  cursor-pointer ${
                      tablet ? "border-2 border-green-300" : "border-2"
                    }`}
                    onClick={() => {
                      setTablet(!tablet);
                      handleTablet();
                    }}
                  >
                    <div className={classNames("  absolute right-0 top-0 m-2")}>
                      {tablet ? (
                        <i className="ri-checkbox-circle-fill text-green-500   mt-2 mr-1 text-lg"></i>
                      ) : (
                        <i class="ri-checkbox-blank-circle-line text-gray-500   mt-2 mr-1 text-lg"></i>
                      )}
                    </div>
                    <div>
                      <center>
                        <img src="/images/tablet.svg" className="mb-2" alt="" />
                        <span>Tablets</span>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div
                    className={`flex h-36  w-48 py-8 mx-1 relative justify-center  rounded  cursor-pointer ${
                      featurePhone ? "border-2 border-green-300" : "border-2"
                    }`}
                    onClick={() => {
                      setFeaturePhone(!featurePhone);
                      handleFeaturePhone();
                    }}
                  >
                    <div className={classNames("  absolute right-0 top-0 m-2")}>
                      {featurePhone ? (
                        <i className="ri-checkbox-circle-fill text-green-500   mt-2 mr-1 text-lg"></i>
                      ) : (
                        <i class="ri-checkbox-blank-circle-line text-gray-500   mt-2 mr-1 text-lg"></i>
                      )}{" "}
                    </div>
                    <div>{/* operating systeme here */}</div>
                    <div>
                      <center>
                        <img src="/images/fphone.svg" className="mb-2" alt="" />
                        <span>Feature Phone</span>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="h-1 w-full" />
              <h3 className="text-xl mb-4 mt-4">Operating System</h3>
              <div className="flex flex-wrap   w-full mb-16">
                <div className="mt-3">
                  <div
                    className={`flex h-36  w-48 py-8 mx-1 relative justify-center  rounded  cursor-pointer ${
                      ios ? "border-2 border-green-300" : "border-2"
                    }`}
                    onClick={() => {
                      setIos(!ios);
                      handleIos();
                    }}
                  >
                    <div className={classNames("  absolute right-0 top-0 m-2")}>
                      {ios ? (
                        <i className="ri-checkbox-circle-fill text-green-500   mt-2 mr-1 text-lg"></i>
                      ) : (
                        <i class="ri-checkbox-blank-circle-line text-gray-500   mt-2 mr-1 text-lg"></i>
                      )}
                    </div>
                    <div>
                      <center>
                        <img src="/images/apple.svg" className="mb-3" alt="" />
                        <span>ios & MacOs</span>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div
                    className={`flex h-36  w-48 py-8 mx-1 relative justify-center  rounded  cursor-pointer ${
                      window ? "border-2 border-green-300" : "border-2"
                    }`}
                    onClick={() => {
                      setWindow(!window);
                      handleWindow();
                    }}
                  >
                    <div className={classNames("  absolute right-0 top-0 m-2")}>
                      {window ? (
                        <i className="ri-checkbox-circle-fill text-green-500   mt-2 mr-1 text-lg"></i>
                      ) : (
                        <i class="ri-checkbox-blank-circle-line text-gray-500   mt-2 mr-1 text-lg"></i>
                      )}
                    </div>
                    <div>
                      <center>
                        <img
                          src="/images/windows.svg"
                          className="mb-3"
                          alt=""
                        />
                        <span>Windows</span>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div
                    className={`flex h-36  w-48 py-8 mx-1 relative justify-center  rounded  cursor-pointer ${
                      android ? "border-2 border-green-300" : "border-2"
                    }`}
                    onClick={() => {
                      setAndroid(!android);
                      handleAndroid();
                    }}
                  >
                    <div className={classNames("  absolute right-0 top-0 m-2")}>
                      {android ? (
                        <i className="ri-checkbox-circle-fill text-green-500   mt-2 mr-1 text-lg"></i>
                      ) : (
                        <i class="ri-checkbox-blank-circle-line text-gray-500   mt-2 mr-1 text-lg"></i>
                      )}
                    </div>
                    <div>
                      <center>
                        <img
                          src="/images/android.svg"
                          className="mb-2"
                          alt=""
                        />
                        <span>Android</span>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div
                    className={`flex h-36  w-48 py-8 mx-1 relative justify-center  rounded  cursor-pointer ${
                      linux ? "border-2 border-green-300" : "border-2"
                    }`}
                    onClick={() => {
                      setLinux(!linux);
                      handleLinux();
                    }}
                  >
                    <div className={classNames("  absolute right-0 top-0 m-2")}>
                      {linux ? (
                        <i className="ri-checkbox-circle-fill text-green-500   mt-2 mr-1 text-lg"></i>
                      ) : (
                        <i class="ri-checkbox-blank-circle-line text-gray-500   mt-2 mr-1 text-lg"></i>
                      )}
                    </div>
                    <div>
                      <center>
                        <img src="/images/linux.svg" className="mb-2" alt="" />
                        <span>Linux</span>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div
                    className={`flex h-36  w-48 py-8 mx-1 relative justify-center  rounded  cursor-pointer ${
                      chrome ? "border-2 border-green-300" : "border-2"
                    }`}
                    onClick={() => {
                      setChrome(!chrome);
                      handleChrome();
                    }}
                  >
                    <div className={classNames("  absolute right-0 top-0 m-2")}>
                      {chrome ? (
                        <i className="ri-checkbox-circle-fill text-green-500   mt-2 mr-1 text-lg"></i>
                      ) : (
                        <i class="ri-checkbox-blank-circle-line text-gray-500   mt-2 mr-1 text-lg"></i>
                      )}
                    </div>
                    <div>
                      <center>
                        <img
                          src="/images/chrome.svg"
                          className="mb-2.5"
                          alt=""
                        />
                        <span>Chrome Os</span>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="h-1 w-full" />
              <h3 className="text-xl mb-8 mt-4">Telecom Provider</h3>
              <div className="flex flex-wrap   w-full mb-16">
                <div className="mt-3">
                  <div
                    className={`flex h-36  w-48 py-8 mx-1 relative justify-center  rounded  cursor-pointer ${
                      orange ? "border-2 border-green-300" : "border-2"
                    }`}
                    onClick={() => {
                      setOrange(!orange);
                      handleOrange();
                    }}
                  >
                    <div className={classNames("  absolute right-0 top-0 m-2")}>
                      {orange ? (
                        <i className="ri-checkbox-circle-fill text-green-500   mt-2 mr-1 text-lg"></i>
                      ) : (
                        <i class="ri-checkbox-blank-circle-line text-gray-500   mt-2 mr-1 text-lg"></i>
                      )}
                    </div>
                    <div>
                      <center>
                        <img src="/images/orange.svg" className="mb-2" alt="" />
                        <span>Orange Cm</span>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div
                    className={`flex h-36  w-48 py-8 mx-1 relative justify-center  rounded  cursor-pointer ${
                      mtn ? "border-2 border-green-300" : "border-2"
                    }`}
                    onClick={() => {
                      setMtn(!mtn);
                      handleMtn();
                    }}
                  >
                    <div className={classNames("  absolute right-0 top-0 m-2")}>
                      {mtn ? (
                        <i className="ri-checkbox-circle-fill text-green-500   mt-2 mr-1 text-lg"></i>
                      ) : (
                        <i class="ri-checkbox-blank-circle-line text-gray-500   mt-2 mr-1 text-lg"></i>
                      )}
                    </div>
                    <div>
                      <center>
                        <img src="/images/mtn.svg" className="mb-3" alt="" />
                        <span>MTN</span>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div
                    className={`flex h-36  w-48 py-8 mx-1 relative justify-center  rounded  cursor-pointer ${
                      blue ? "border-2 border-green-300" : "border-2"
                    }`}
                    onClick={() => {
                      setBlue(!blue);
                      handleBlue();
                    }}
                  >
                    <div className={classNames("  absolute right-0 top-0 m-2")}>
                      {blue ? (
                        <i className="ri-checkbox-circle-fill text-green-500   mt-2 mr-1 text-lg"></i>
                      ) : (
                        <i class="ri-checkbox-blank-circle-line text-gray-500   mt-2 mr-1 text-lg"></i>
                      )}
                    </div>
                    <div>
                      <center>
                        <img src="/images/blue.svg" className="mb-2" alt="" />
                        <span>BLUE</span>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div
                    className={`flex h-36  w-48 py-8 mx-1 relative justify-center  rounded  cursor-pointer ${
                      nexttel ? "border-2 border-green-300" : "border-2"
                    }`}
                    onClick={() => {
                      setNexttel(!nexttel);
                      handleNexttel();
                    }}
                  >
                    <div className={classNames("  absolute right-0 top-0 m-2")}>
                      {nexttel ? (
                        <i className="ri-checkbox-circle-fill text-green-500   mt-2 mr-1 text-lg"></i>
                      ) : (
                        <i class="ri-checkbox-blank-circle-line text-gray-500   mt-2 mr-1 text-lg"></i>
                      )}
                    </div>
                    <div>
                      <center>
                        <img
                          src="/images/nexttel.svg"
                          className="mb-3"
                          alt=""
                        />
                        <span>NEXTTEL</span>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div
                    className={`flex h-36  w-48 py-8 mx-1 relative justify-center  rounded  cursor-pointer ${
                      yoomee ? "border-2 border-green-300" : "border-2"
                    }`}
                    onClick={() => {
                      setYoome(!yoomee);
                      handlYoomee();
                    }}
                  >
                    <div className={classNames("  absolute right-0 top-0 m-2")}>
                      {yoomee ? (
                        <i className="ri-checkbox-circle-fill text-green-500   mt-2 mr-1 text-lg"></i>
                      ) : (
                        <i class="ri-checkbox-blank-circle-line text-gray-500   mt-2 mr-1 text-lg"></i>
                      )}
                    </div>
                    <div>
                      <center>
                        <img
                          src="/images/yoomee.svg"
                          className="mb-2.5"
                          alt=""
                        />
                        <span>YOOME</span>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index