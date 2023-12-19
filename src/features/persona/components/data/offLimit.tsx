import React, { useState, useEffect, useContext, FC } from 'react';
// import { Switch } from '@headlessui/react';
// import Link from 'next/link';
// import Router from 'next/router';
// import { AuthContext } from '@/components/context/context';
// import { CurrentUserContext } from '@/pages/_app';
import { userContext } from '@/Components/context/context'


interface Step5Props {
  name: string;
}

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

const Step5: FC = () => {
  const data = useContext(userContext);
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
      data?.setOffLimit([
        ...data?.offLimit,
        'Sexual',
        'Derogatory',
        'Download and Sharing',
        'Weapons',
        'Gambling',
        'Violence',
        'Suggestive',
        'Profanity',
        'Alcohol',
        'Drugs',
        'Tobacco',
        'Politics',
        'Religion',
        'Tragedy',
        'Transportation Accidents',
        'Miracle & Spirituality',
      ]);
    } else {
      let datss = data?.offLimit.filter(
        (item: string) =>
          item !== 'Sexual' &&
          item !== 'Derogatory' &&
          item !== 'Download and Sharing' &&
          item !== 'Weapons' &&
          item !== 'Gambling' &&
          item !== 'Violence' &&
          item !== 'Suggestive' &&
          item !== 'Profanity' &&
          item !== 'Alcohol' &&
          item !== 'Drugs' &&
          item !== 'Tobacco' &&
          item !== 'Politics' &&
          item !== 'Religion' &&
          item !== 'Tragedy' &&
          item !== 'Transportation Accidents' &&
          item !== 'Miracle & Spirituality'
      );
      data?.setOffLimit([...datss]);
    }
  };

  const onchangeSexual = (): void => {
    if (data?.offLimit?.includes('Sexual')) {
      let datss = data?.offLimit.filter((item: string) => item !== 'Sexual');
      data?.setOffLimit([...datss]);
    } else {
      data?.setOffLimit([...data?.offLimit, 'Sexual']);
    }
  };
  const onchangeDerogatory = (): void => {
    if (data?.offLimit?.includes('Derogatory')) {
      let datss = data?.offLimit.filter(
        (item: string) => item !== 'Derogatory'
      );
      data?.setOffLimit([...datss]);
    } else {
      data?.setOffLimit([...data?.offLimit, 'Derogatory']);
    }
  };
  const onchangeDownload = (): void => {
    if (data?.offLimit?.includes('Download and Sharing')) {
      let datss = data?.offLimit.filter(
        (item: string) => item !== 'Download and Sharing'
      );
      data?.setOffLimit([...datss]);
    } else {
      data?.setOffLimit([...data?.offLimit, 'Download and Sharing']);
    }
  };
  const onchangeWeapon = (): void => {
    if (data?.offLimit?.includes('Weapons')) {
      let datss = data?.offLimit.filter((item: string) => item !== 'Weapons');
      data?.setOffLimit([...datss]);
    } else {
      data?.setOffLimit([...data?.offLimit, 'Weapons']);
    }
  };
  const onchangeGambling = (): void => {
    if (data?.offLimit?.includes('Gambling')) {
      let datss = data?.offLimit.filter((item: string) => item !== 'Gambling');
      data?.setOffLimit([...datss]);
    } else {
      data?.setOffLimit([...data?.offLimit, 'Gambling']);
    }
  };

  const onchangeViolence = (): void => {
    if (data?.offLimit?.includes('Violence')) {
      let datss = data?.offLimit.filter((item: string) => item !== 'Violence');
      data?.setOffLimit([...datss]);
    } else {
      data?.setOffLimit([...data?.offLimit, 'Violence']);
    }
  };
  const onchangeSuggestive = (): void => {
    if (data?.offLimit?.includes('Suggestive')) {
      let datss = data?.offLimit.filter(
        (item: string) => item !== 'Suggestive'
      );
      data?.setOffLimit([...datss]);
    } else {
      data?.setOffLimit([...data?.offLimit, 'Suggestive']);
    }
  };
  const onchangeProfanity = (): void => {
    if (data?.offLimit?.includes('Profanity')) {
      let datss = data?.offLimit.filter((item: string) => item !== 'Profanity');
      data?.setOffLimit([...datss]);
    } else {
      data?.setOffLimit([...data?.offLimit, 'Profanity']);
    }
  };
  const onchangeAlcohol = (): void => {
    if (data?.offLimit?.includes('Alcohol')) {
      let datss = data?.offLimit.filter((item: string) => item !== 'Alcohol');
      data?.setOffLimit([...datss]);
    } else {
      data?.setOffLimit([...data?.offLimit, 'Alcohol']);
    }
  };
  const onchangeDrugs = (): void => {
    if (data?.offLimit?.includes('Drugs')) {
      let datss = data?.offLimit.filter((item: string) => item !== 'Drugs');
      data?.setOffLimit([...datss]);
    } else {
      data?.setOffLimit([...data?.offLimit, 'Drugs']);
    }
  };
  const onchangeTobacco = (): void => {
    if (data?.offLimit?.includes('Tobacco')) {
      let datss = data?.offLimit.filter((item: string) => item !== 'Tobacco');
      data?.setOffLimit([...datss]);
    } else {
      data?.setOffLimit([...data?.offLimit, 'Tobacco']);
    }
  };
  const onchangePolitics = (): void => {
    if (data?.offLimit?.includes('Politics')) {
      let datss = data?.offLimit.filter((item: string) => item !== 'Politics');
      data?.setOffLimit([...datss]);
    } else {
      data?.setOffLimit([...data?.offLimit, 'Politics']);
    }
  };
  const onchangeReligion = (): void => {
    if (data?.offLimit?.includes('Religion')) {
      let datss = data?.offLimit.filter((item: string) => item !== 'Religion');
      data?.setOffLimit([...datss]);
    } else {
      data?.setOffLimit([...data?.offLimit, 'Religion']);
    }
  };
  const onchangeTragedy = (): void => {
    if (data?.offLimit?.includes('Tragedy')) {
      let datss = data?.offLimit.filter((item: string) => item !== 'Tragedy');
      data?.setOffLimit([...datss]);
    } else {
      data?.setOffLimit([...data?.offLimit, 'Tragedy']);
    }
  };
  const onchangeTransport = (): void => {
    if (data?.offLimit?.includes('Transportation Accidents')) {
      let datss = data?.offLimit.filter(
        (item: string) => item !== 'Transportation Accidents'
      );
      data?.setOffLimit([...datss]);
    } else {
      data?.setOffLimit([...data?.offLimit, 'Transportation Accidents']);
    }
  };
  const onchangeMiracle = (): void => {
    if (data?.offLimit?.includes('Miracle & Spirituality')) {
      let datss = data?.offLimit.filter(
        (item: string) => item !== 'Miracle & Spirituality'
      );
      data?.setOffLimit([...datss]);
    } else {
      data?.setOffLimit([...data?.offLimit, 'Miracle & Spirituality']);
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
              <div className="flex items-center mt-3 ">
                <input
                  id="default-radio-1x"
                  type="checkbox"
                  onChange={selectAll}
                  checked={select}
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-1x"
                  className="ml-2 text-md font-medium text-black dark:text-black"
                >
                  Select All
                </label>
              </div>
              <div className="flex items-center mt-3">
                <input
                  id="default-radio-2x"
                  type="checkbox"
                  onChange={onchangeSexual}
                  checked={data?.offLimit?.includes('Sexual')}
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-2x"
                  className="ml-2 text-md font-medium text-black dark:text-black"
                >
                  Sexual
                </label>
              </div>
              <div className="flex items-center mt-3">
                <input
                  id="default-radio-3x"
                  type="checkbox"
                  onChange={onchangeDerogatory}
                  checked={data?.offLimit?.includes('Derogatory')}
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-3x"
                  className="ml-2 text-smd font-medium text-black dark:text-black"
                >
                  Derogatory
                </label>
              </div>
              <div className="flex items-center mt-3">
                <input
                  id="default-radio-4"
                  type="checkbox"
                  onChange={onchangeDownload}
                  checked={data?.offLimit?.includes('Download and Sharing')}
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-4"
                  className="ml-2 text-md font-medium text-black dark:text-black"
                >
                  Download and Sharing
                </label>
              </div>
              <div className="flex items-center mt-3">
                <input
                  id="default-radio-5"
                  type="checkbox"
                  onChange={onchangeWeapon}
                  checked={data?.offLimit?.includes('Weapons')}
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-5"
                  className="ml-2 text-smd font-medium text-black dark:text-black"
                >
                  Weapons
                </label>
              </div>
              <div className="flex items-center mt-3">
                <input
                  id="default-radio-6"
                  type="checkbox"
                  onChange={onchangeGambling}
                  checked={data?.offLimit?.includes('Gambling')}
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-6"
                  className="ml-2 text-md font-medium text-black dark:text-black"
                >
                  Gambling
                </label>
              </div>
              <div className="flex items-center mt-3">
                <input
                  id="default-radio-7"
                  type="checkbox"
                  onChange={onchangeViolence}
                  checked={data?.offLimit?.includes('Violence')}
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-7"
                  className="ml-2 text-smd font-medium text-black dark:text-black"
                >
                  Violence
                </label>
              </div>
              <div className="flex items-center mt-3">
                <input
                  id="default-radio-8"
                  type="checkbox"
                  onChange={onchangeSuggestive}
                  checked={data?.offLimit?.includes('Suggestive')}
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-8"
                  className="ml-2 text-md font-medium text-black dark:text-black"
                >
                  Suggestive
                </label>
              </div>
              <div className="flex items-center mt-3">
                <input
                  id="default-radio-9"
                  type="checkbox"
                  onChange={onchangeProfanity}
                  checked={data?.offLimit?.includes('Profanity')}
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-9"
                  className="ml-2 text-smd font-medium text-black dark:text-black"
                >
                  Profanity
                </label>
              </div>
              <div className="flex items-center mt-3">
                <input
                  id="default-radio-10"
                  type="checkbox"
                  onChange={onchangeAlcohol}
                  checked={data?.offLimit?.includes('Alcohol')}
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-10"
                  className="ml-2 text-md font-medium text-black dark:text-black"
                >
                  Alcohol
                </label>
              </div>
              <div className="flex items-center mt-3">
                <input
                  id="default-radio-11"
                  type="checkbox"
                  onChange={onchangeDrugs}
                  checked={data?.offLimit?.includes('Drugs')}
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-11"
                  className="ml-2 text-smd font-medium text-black dark:text-black"
                >
                  Drugs
                </label>
              </div>
              <div className="flex items-center mt-3">
                <input
                  id="default-radio-12"
                  type="checkbox"
                  onChange={onchangeTobacco}
                  checked={data?.offLimit?.includes('Tobacco')}
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-12"
                  className="ml-2 text-md font-medium text-black dark:text-black"
                >
                  Tobacco
                </label>
              </div>
              <div className="flex items-center mt-3">
                <input
                  id="default-radio-13"
                  type="checkbox"
                  onChange={onchangePolitics}
                  checked={data?.offLimit?.includes('Politics')}
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-13"
                  className="ml-2 text-smd font-medium text-black dark:text-black"
                >
                  Politics
                </label>
              </div>
              <div className="flex items-center mt-3">
                <input
                  id="default-radio-14"
                  type="checkbox"
                  onChange={onchangeReligion}
                  checked={data?.offLimit?.includes('Religion')}
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-14"
                  className="ml-2 text-md font-medium text-black dark:text-black"
                >
                  Religion
                </label>
              </div>
              <div className="flex items-center mt-3">
                <input
                  id="default-radio-15"
                  type="checkbox"
                  onChange={onchangeTragedy}
                  checked={data?.offLimit?.includes('Tragedy')}
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-15"
                  className="ml-2 text-smd font-medium text-black dark:text-black"
                >
                  Tragedy
                </label>
              </div>
              <div className="flex items-center mt-3">
                <input
                  id="default-radio-16"
                  type="checkbox"
                  onChange={onchangeTransport}
                  checked={data?.offLimit?.includes('Transportation Accidents')}
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-16"
                  className="ml-2 text-smd font-medium text-black dark:text-black"
                >
                  Transportation Accidents
                </label>
              </div>
              <div className="flex items-center mt-3">
                <input
                  id="default-radio-17"
                  type="checkbox"
                  onChange={onchangeMiracle}
                  checked={data?.offLimit?.includes('Miracle & Spirituality')}
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-17"
                  className="ml-2 text-smd font-medium text-black dark:text-black"
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
};

export default Step5;
