import React, { useState, useEffect, useContext } from "react";
import { Switch } from "@headlessui/react";
import Link from "next/link";
import Router from "next/router";
import AuthContext from "@/Components/context";

interface Step5Props {
  name: string;
}

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

const Step5: FC = () => {
  const data = useContext(AuthContext);
  const [sexual, setSexual] = useState<boolean>(false);
  const [derogatory, setDerogatory] = useState<boolean>(false);
  const [download, setDownload] = useState<boolean>(false);
  const [weapons, setWeapons] = useState<boolean>(false);
  const [gambling, setGambling] = useState<boolean>(false);
  const [violence, setViolence] = useState<boolean>(false);
  const [suggestive, setSuggestive] = useState<boolean>(false);
  const [profanity, setProfanity] = useState<boolean>(false);
  const [alcohol, setAlcohol] = useState<boolean>(false);
  const [drugs, setDrugs] = useState<boolean>(false);
  const [tobacco, setTobacco] = useState<boolean>(false);
  const [politics, setPolitics] = useState<boolean>(false);
  const [religion, setReligion] = useState<boolean>(false);
  const [tragedy, setTragedy] = useState<boolean>(false);
  const [transportation, setTransportation] = useState<boolean>(false);
  const [miracle, setMiracle] = useState<boolean>(false);
  const [select, setSelect] = useState<boolean>(false);

  const selectAll = (): void => {
    setSelect(!select);
    if (!select) {
      setSexual(true);
      setDerogatory(true);
      setDownload(true);
      setWeapons(true);
      setGambling(true);
      setViolence(true);
      setSuggestive(true);
      setProfanity(true);
      setAlcohol(true);
      setDrugs(true);
      setTobacco(true);
      setPolitics(true);
      setReligion(true);
      setTragedy(true);
      setTransportation(true);
      setMiracle(true);
      data.setOffLimit([
        ...data.offLimit,
        "Sexual",
        "Derogatory",
        "Download and Sharing",
        "Weapons",
        "Gambling",
        "Violence",
        "Suggestive",
        "Profanity",
        "Alcohol",
        "Drugs",
        "Tobacco",
        "Politics",
        "Religion",
        "Tragedy",
        "Transportation Accidents",
        "Miracle & Spirituality",
      ]);
    } else {
      setSexual(false);
      setDerogatory(false);
      setDownload(false);
      setWeapons(false);
      setGambling(false);
      setViolence(false);
      setSuggestive(false);
      setProfanity(false);
      setAlcohol(false);
      setDrugs(false);
      setTobacco(false);
      setPolitics(false);
      setReligion(false);
      setTragedy(false);
      setTransportation(false);
      setMiracle(false);
      let datss = data.offLimit.filter(
        (item: string) =>
          item !== "Sexual" &&
          item !== "Derogatory" &&
          item !== "Download and Sharing" &&
          item !== "Weapons" &&
          item !== "Gambling" &&
          item !== "Violence" &&
          item !== "Suggestive" &&
          item !== "Profanity" &&
          item !== "Alcohol" &&
          item !== "Drugs" &&
          item !== "Tobacco" &&
          item !== "Politics" &&
          item !== "Religion" &&
          item !== "Tragedy" &&
          item !== "Transportation Accidents" &&
          item !== "Miracle & Spirituality"
      );
      data.setOffLimit([...datss]);
    }
  };

  const onchangeSexual = (): void => {
    setSexual(!sexual);
    if (sexual == true) {
      let datss = data.offLimit.filter((item: string) => item !== "Sexual");
      data.setOffLimit([...datss]);
    } else {
      data.setOffLimit([...data.offLimit, "Sexual"]);
    }
  };
  const onchangeDerogatory = (): void => {
    setDerogatory(!derogatory);
    if (derogatory == true) {
      let datss = data.offLimit.filter((item: string) => item !== "Derogatory");
      data.setOffLimit([...datss]);
    } else {
      data.setOffLimit([...data.offLimit, "Derogatory"]);
    }
  };
  const onchangeDownload = (): void => {
    setDownload(!download);
    if (download == true) {
      let datss = data.offLimit.filter(
        (item: string) => item !== "Download and Sharing"
      );
      data.setOffLimit([...datss]);
    } else {
      data.setOffLimit([...data.offLimit, "Download and Sharing"]);
    }
  };
  const onchangeWeapon = (): void => {
    setWeapons(!weapons);
    if (weapons == true) {
      let datss = data.offLimit.filter((item: string) => item !== "Weapons");
      data.setOffLimit([...datss]);
    } else {
      data.setOffLimit([...data.offLimit, "Weapons"]);
    }
  };
  const onchangeGambling = (): void => {
    setGambling(!gambling);
    if (gambling == true) {
      let datss = data.offLimit.filter((item: string) => item !== "Gambling");
      data.setOffLimit([...datss]);
    } else {
      data.setOffLimit([...data.offLimit, "Gambling"]);
    }
  };

  const onchangeViolence = (): void => {
    setViolence(!violence);
    if (violence == true) {
      let datss = data.offLimit.filter((item: string) => item !== "Violence");
      data.setOffLimit([...datss]);
    } else {
      data.setOffLimit([...data.offLimit, "Violence"]);
    }
  };
  const onchangeSuggestive = (): void => {
    setSuggestive(!suggestive);
    if (suggestive == true) {
      let datss = data.offLimit.filter((item: string) => item !== "Suggestive");
      data.setOffLimit([...datss]);
    } else {
      data.setOffLimit([...data.offLimit, "Suggestive"]);
    }
  };
  const onchangeProfanity = (): void => {
    setProfanity(!profanity);
    if (profanity == true) {
      let datss = data.offLimit.filter((item: string) => item !== "Profanity");
      data.setOffLimit([...datss]);
    } else {
      data.setOffLimit([...data.offLimit, "Profanity"]);
    }
  };
  const onchangeAlcohol = (): void => {
    setAlcohol(!alcohol);
    if (alcohol == true) {
      let datss = data.offLimit.filter((item: string) => item !== "Alcohol");
      data.setOffLimit([...datss]);
    } else {
      data.setOffLimit([...data.offLimit, "Alcohol"]);
    }
  };
  const onchangeDrugs = (): void => {
    setDrugs(!drugs);
    if (drugs == true) {
      let datss = data.offLimit.filter((item: string) => item !== "Drugs");
      data.setOffLimit([...datss]);
    } else {
      data.setOffLimit([...data.offLimit, "Drugs"]);
    }
  };
  const onchangeTobacco = (): void => {
    setTobacco(!tobacco);
    if (tobacco == true) {
      let datss = data.offLimit.filter((item: string) => item !== "Tobacco");
      data.setOffLimit([...datss]);
    } else {
      data.setOffLimit([...data.offLimit, "Tobacco"]);
    }
  };
  const onchangePolitics = (): void => {
    setPolitics(!politics);
    if (politics == true) {
      let datss = data.offLimit.filter((item: string) => item !== "Politics");
      data.setOffLimit([...datss]);
    } else {
      data.setOffLimit([...data.offLimit, "Politics"]);
    }
  };
  const onchangeReligion = (): void => {
    setReligion(!religion);
    if (religion == true) {
      let datss = data.offLimit.filter((item: string) => item !== "Religion");
      data.setOffLimit([...datss]);
    } else {
      data.setOffLimit([...data.offLimit, "Religion"]);
    }
  };
  const onchangeTragedy = (): void => {
    setTragedy(!tragedy);
    if (tragedy == true) {
      let datss = data.offLimit.filter((item: string) => item !== "Tragedy");
      data.setOffLimit([...datss]);
    } else {
      data.setOffLimit([...data.offLimit, "Tragedy"]);
    }
  };
  const onchangeTransport = (): void => {
    setTransportation(!transportation);
    if (transportation == true) {
      let datss = data.offLimit.filter(
        (item: string) => item !== "Transportation Accidents"
      );
      data.setOffLimit([...datss]);
    } else {
      data.setOffLimit([...data.offLimit, "Transportation Accidents"]);
    }
  };
  const onchangeMiracle = (): void => {
    setMiracle(!miracle);
    if (miracle == true) {
      let datss = data.offLimit.filter(
        (item: string) => item !== "Miracle & Spirituality"
      );
      data.setOffLimit([...datss]);
    } else {
      data.setOffLimit([...data.offLimit, "Miracle & Spirituality"]);
    }
  };

  return (
    <div className="mb-20">
      <div className="pt-3">
      <div className="w-full justify-center items-center flex">
          <div className="   md:w-[80%] md:px-0 px-4 mt-16">
            <div className="mt-7">
              <p className="font-semibold text-xl">
                Select Sensitive Exclusions
              </p>
              <div class="flex items-center mt-3 ">
                <input
                  id="default-radio-1x"
                  type="checkbox"
                  value={select}
                  onChange={selectAll}
                  checked={select}
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-1x"
                  class="ml-2 text-md font-medium text-black dark:text-black"
                >
                  Select All
                </label>
              </div>
              <div class="flex items-center mt-3">
                <input
                  id="default-radio-2x"
                  type="checkbox"
                  value={sexual}
                  onChange={onchangeSexual}
                  checked={sexual}
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-2x"
                  class="ml-2 text-md font-medium text-black dark:text-black"
                >
                  Sexual
                </label>
              </div>
              <div class="flex items-center mt-3">
                <input
                  id="default-radio-3x"
                  type="checkbox"
                  value={derogatory}
                  onChange={onchangeDerogatory}
                  checked={derogatory}
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-3x"
                  class="ml-2 text-smd font-medium text-black dark:text-black"
                >
                  Derogatory
                </label>
              </div>
              <div class="flex items-center mt-3">
                <input
                  id="default-radio-4"
                  type="checkbox"
                  value={download}
                  onChange={onchangeDownload}
                  checked={download}
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-4"
                  class="ml-2 text-md font-medium text-black dark:text-black"
                >
                  Download and Sharing
                </label>
              </div>
              <div class="flex items-center mt-3">
                <input
                  id="default-radio-5"
                  type="checkbox"
                  value={weapons}
                  onChange={onchangeWeapon}
                  checked={weapons}
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-5"
                  class="ml-2 text-smd font-medium text-black dark:text-black"
                >
                  Weapons
                </label>
              </div>
              <div class="flex items-center mt-3">
                <input
                  id="default-radio-6"
                  type="checkbox"
                  value={gambling}
                  onChange={onchangeGambling}
                  checked={gambling}
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-6"
                  class="ml-2 text-md font-medium text-black dark:text-black"
                >
                  Gambling
                </label>
              </div>
              <div class="flex items-center mt-3">
                <input
                  id="default-radio-7"
                  type="checkbox"
                  value={violence}
                  onChange={onchangeViolence}
                  checked={violence}
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-7"
                  class="ml-2 text-smd font-medium text-black dark:text-black"
                >
                  Violence
                </label>
              </div>
              <div class="flex items-center mt-3">
                <input
                  id="default-radio-8"
                  type="checkbox"
                  value={suggestive}
                  onChange={onchangeSuggestive}
                  checked={suggestive}
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-8"
                  class="ml-2 text-md font-medium text-black dark:text-black"
                >
                  Suggestive
                </label>
              </div>
              <div class="flex items-center mt-3">
                <input
                  id="default-radio-9"
                  type="checkbox"
                  value={profanity}
                  onChange={onchangeProfanity}
                  checked={profanity}
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-9"
                  class="ml-2 text-smd font-medium text-black dark:text-black"
                >
                  Profanity
                </label>
              </div>
              <div class="flex items-center mt-3">
                <input
                  id="default-radio-10"
                  type="checkbox"
                  value={alcohol}
                  onChange={onchangeAlcohol}
                  checked={alcohol}
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-10"
                  class="ml-2 text-md font-medium text-black dark:text-black"
                >
                  Alcohol
                </label>
              </div>
              <div class="flex items-center mt-3">
                <input
                  id="default-radio-11"
                  type="checkbox"
                  value={drugs}
                  onChange={onchangeDrugs}
                  checked={drugs}
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-11"
                  class="ml-2 text-smd font-medium text-black dark:text-black"
                >
                  Drugs
                </label>
              </div>
              <div class="flex items-center mt-3">
                <input
                  id="default-radio-12"
                  type="checkbox"
                  value={tobacco}
                  onChange={onchangeTobacco}
                  checked={tobacco}
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-12"
                  class="ml-2 text-md font-medium text-black dark:text-black"
                >
                  Tobacco
                </label>
              </div>
              <div class="flex items-center mt-3">
                <input
                  id="default-radio-13"
                  type="checkbox"
                  value={politics}
                  onChange={onchangePolitics}
                  checked={politics}
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-13"
                  class="ml-2 text-smd font-medium text-black dark:text-black"
                >
                  Politics
                </label>
              </div>
              <div class="flex items-center mt-3">
                <input
                  id="default-radio-14"
                  type="checkbox"
                  value={religion}
                  onChange={onchangeReligion}
                  checked={religion}
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-14"
                  class="ml-2 text-md font-medium text-black dark:text-black"
                >
                  Religion
                </label>
              </div>
              <div class="flex items-center mt-3">
                <input
                  id="default-radio-15"
                  type="checkbox"
                  value={tragedy}
                  onChange={onchangeTragedy}
                  checked={tragedy}
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-15"
                  class="ml-2 text-smd font-medium text-black dark:text-black"
                >
                  Tragedy
                </label>
              </div>
              <div class="flex items-center mt-3">
                <input
                  id="default-radio-16"
                  type="checkbox"
                  value={transportation}
                  onChange={onchangeTransport}
                  checked={transportation}
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-16"
                  class="ml-2 text-smd font-medium text-black dark:text-black"
                >
                  Transportation Accidents
                </label>
              </div>
              <div class="flex items-center mt-3">
                <input
                  id="default-radio-17"
                  type="checkbox"
                  value={miracle}
                  onChange={onchangeMiracle}
                  checked={miracle}
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-17"
                  class="ml-2 text-smd font-medium text-black dark:text-black"
                >
                  Miracle & Spirituality
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step5