import React, { useState, useEffect, useContext, FC } from 'react';
import { Switch } from '@headlessui/react';
import Link from 'next/link';
import Router from 'next/router';
// import { AuthContext } from '@/components/context/context';
import { userContext } from '@/Components/context/context'

interface Step5Props {
  // add any props here
}

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

const Step5: FC = () => {
  const data = useContext(userContext);
  const [male, setmale] = useState<boolean>(false);
  const [female, setfemale] = useState<boolean>(false);
  const [ts, setts] = useState<boolean>(false);
  const [tf, settf] = useState<boolean>(false);
  const [fp, setfp] = useState<boolean>(false);
  const [tt, settt] = useState<boolean>(false);
  const [et, setet] = useState<boolean>(false);
  const [married, setmarried] = useState<boolean>(false);
  const [single, setsingle] = useState<boolean>(false);
  const [lowIncome, setLowIncome] = useState<boolean>(false);
  const [highIncome, setHighIncome] = useState<boolean>(false);
  const [midIncome, setMidIncome] = useState<boolean>(false);

  const OnchangeFemale = (): void => {
    if (data?.sex?.includes('Female')) {
      let datss = data?.sex.filter((item: string) => item !== 'Female');
      data?.setSex([...datss]);
    } else {
      data?.setSex([...data?.sex, 'Female']);
    }
  };
  const OnchangeMale = (): void => {
    if (data?.sex?.includes('Male')) {
      let datss = data?.sex.filter((item: string) => item !== 'Male');
      data?.setSex([...datss]);
    } else {
      data?.setSex([...data?.sex, 'Male']);
    }
  };
  const OnchangeTs = (): void => {
    if (data?.age?.includes('12-17')) {
      let datss = data?.age.filter((item: string) => item !== '12-17');
      data?.setAge([...datss]);
    } else {
      data?.setAge([...data?.age, '12-17']);
    }
  };
  const OnchangeEt = (): void => {
    if (data?.age?.includes('18-24')) {
      let datss = data?.age.filter((item: string) => item !== '18-24');
      data?.setAge([...datss]);
    } else {
      data?.setAge([...data?.age, '18-24']);
    }
  };
  const OnchangeTt = (): void => {
    if (data?.age?.includes('25-35')) {
      let datss = data?.age.filter((item: string) => item !== '25-35');
      data?.setAge([...datss]);
    } else {
      data?.setAge([...data?.age, '25-35']);
    }
  };
  const OnchangeTf = (): void => {
    if (data?.age?.includes('36-50')) {
      let datss = data?.age.filter((item: string) => item !== '36-50');
      data?.setAge([...datss]);
    } else {
      data?.setAge([...data?.age, '36-50']);
    }
  };
  const OnchangeFp = (): void => {
    if (data?.age?.includes('50+')) {
      let datss = data?.age.filter((item: string) => item !== '50+');
      data?.setAge([...datss]);
    } else {
      data?.setAge([...data?.age, '50+']);
    }
  };
  const OnchangeSingle = (): void => {
    if (data?.marital?.includes('Single')) {
      let datss = data?.marital.filter((item: string) => item !== 'Single');
      data?.setMarital([...datss]);
    } else {
      data?.setMarital([...data?.marital, 'Single']);
    }
  };
  const OnchangeMarried = (): void => {
    if (data?.marital?.includes('Married')) {
      let datss = data?.marital.filter((item: string) => item !== 'Married');
      data?.setMarital([...datss]);
    } else {
      data?.setMarital([...data?.marital, 'Married']);
    }
  };

  const onChangeLow = (): void => {
    if (data?.income?.includes('Low Income')) {
      let datss = data?.income.filter((item: string) => item !== 'Low Income');
      data?.setIncome([...datss]);
    } else {
      data?.setIncome([...data?.income, 'Low Income']);
    }
  };

  const onChangeHigh = (): void => {
    if (data?.income?.includes('High Income')) {
      let datss = data?.income.filter((item: string) => item !== 'High Income');
      data?.setIncome([...datss]);
    } else {
      data?.setIncome([...data?.income, 'High Income']);
    }
  };

  const onChangeMid = (): void => {
    if (data?.income?.includes('Mid Income')) {
      let datss = data?.income.filter((item: string) => item !== 'Mid Income');
      data?.setIncome([...datss]);
    } else {
      data?.setIncome([...data?.income, 'Mid Income']);
    }
  };

  return (
    <div className=" ">
      <div className="pt-3">
        <div className="w-full justify-center flex">
          <div className="   md:w-[80%] md:px-0 px-4 mt-16">
            <div>
              <p className="font-semibold text-xl">Sex</p>
              <div className="flex justify-end  ">
                <div className="flex justify-between">
                  <span className="mx-12 ">Male</span>
                  <Switch
                    checked={data?.sex?.includes('Male')}
                    onChange={OnchangeMale}
                    className={classNames(
                      data?.sex?.includes('Male')
                        ? 'bg-green-600'
                        : 'bg-gray-200',
                      'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out '
                    )}
                  >
                    <span className="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        data?.sex?.includes('Male')
                          ? 'translate-x-5'
                          : 'translate-x-0',
                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                      )}
                    />
                  </Switch>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <div className="flex justify-between">
                  <span className="mx-8">Female</span>
                  <Switch
                    checked={data?.sex?.includes('Female')}
                    onChange={OnchangeFemale}
                    className={classNames(
                      data?.sex?.includes('Female')
                        ? 'bg-green-600'
                        : 'bg-gray-200',
                      'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out '
                    )}
                  >
                    <span className="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        data?.sex?.includes('Female')
                          ? 'translate-x-5'
                          : 'translate-x-0',
                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                      )}
                    />
                  </Switch>
                </div>
              </div>
            </div>
            <div className="mt-7">
              <p className="font-semibold text-xl">Age</p>
              <div className="flex justify-end mt-2">
                <div className="flex justify-between">
                  <span className="mx-10">12-17</span>
                  <Switch
                    checked={data?.age?.includes('12-17')}
                    onChange={OnchangeTs}
                    className={classNames(
                      data?.age?.includes('12-17')
                        ? 'bg-green-600'
                        : 'bg-gray-200',
                      'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out '
                    )}
                  >
                    <span className="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        data?.age?.includes('12-17')
                          ? 'translate-x-5'
                          : 'translate-x-0',
                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                      )}
                    />
                  </Switch>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <div className="flex justify-between">
                  <span className="mx-10">18-24</span>
                  <Switch
                    checked={data?.age?.includes('18-24')}
                    onChange={OnchangeEt}
                    className={classNames(
                      data?.age?.includes('18-24')
                        ? 'bg-green-600'
                        : 'bg-gray-200',
                      'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out '
                    )}
                  >
                    <span className="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        data?.age?.includes('18-24')
                          ? 'translate-x-5'
                          : 'translate-x-0',
                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                      )}
                    />
                  </Switch>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <div className="flex justify-between">
                  <span className="mx-10">25-35</span>
                  <Switch
                    checked={data?.age?.includes('25-35')}
                    onChange={OnchangeTt}
                    className={classNames(
                      data?.age?.includes('25-35')
                        ? 'bg-green-600'
                        : 'bg-gray-200',
                      'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out '
                    )}
                  >
                    <span className="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        data?.age?.includes('25-35')
                          ? 'translate-x-5'
                          : 'translate-x-0',
                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                      )}
                    />
                  </Switch>
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <div className="flex justify-between">
                  <span className="mx-10">36-50</span>
                  <Switch
                    checked={data?.age?.includes('36-50')}
                    onChange={OnchangeTf}
                    className={classNames(
                      data?.age?.includes('36-50')
                        ? 'bg-green-600'
                        : 'bg-gray-200',
                      'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out '
                    )}
                  >
                    <span className="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        data?.age?.includes('36-50')
                          ? 'translate-x-5'
                          : 'translate-x-0',
                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                      )}
                    />
                  </Switch>
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <div className="flex justify-between">
                  <span className="mx-12">50+</span>
                  <Switch
                    checked={data?.age?.includes('50+')}
                    onChange={OnchangeFp}
                    className={classNames(
                      data?.age?.includes('50+')
                        ? 'bg-green-600'
                        : 'bg-gray-200',
                      'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out '
                    )}
                  >
                    <span className="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        data?.age?.includes('50+')
                          ? 'translate-x-5'
                          : 'translate-x-0',
                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                      )}
                    />
                  </Switch>
                </div>
              </div>
            </div>
            <div className="mt-7">
              <p className="font-semibold text-xl">Marital status</p>
              <div className="flex justify-end mt-4">
                <div className="flex justify-between">
                  <span className="mx-9">Single</span>
                  <Switch
                    checked={data?.marital?.includes('Single')}
                    onChange={OnchangeSingle}
                    className={classNames(
                      data?.marital?.includes('Single')
                        ? 'bg-green-600'
                        : 'bg-gray-200',
                      'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out '
                    )}
                  >
                    <span className="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        data?.marital?.includes('Single')
                          ? 'translate-x-5'
                          : 'translate-x-0',
                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                      )}
                    />
                  </Switch>
                </div>
              </div>

              <div className="flex justify-end mt-8">
                <div className="flex justify-between">
                  <span className="mx-5">Married</span>
                  <Switch
                    checked={data?.marital?.includes('Married')}
                    onChange={OnchangeMarried}
                    className={classNames(
                      data?.marital?.includes('Married')
                        ? 'bg-green-600'
                        : 'bg-gray-200',
                      'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out '
                    )}
                  >
                    <span className="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        data?.marital?.includes('Married')
                          ? 'translate-x-5'
                          : 'translate-x-0',
                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                      )}
                    />
                  </Switch>
                </div>
              </div>
            </div>
            <div className="mt-7">
              <p className="font-semibold text-xl">Income Levels</p>
              <div className="flex justify-end mt-10">
                <div className="flex justify-between">
                  <div className="mt-2 flex justify-between">
                    <div className="flex items-center ">
                      <input
                        id="default-radio-1"
                        type="checkbox"
                        onChange={onChangeLow}
                        checked={data?.income?.includes('Low Income')}
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="default-radio-1"
                        className="ml-2 text-md font-medium text-black dark:text-black"
                      >
                        Low Income
                      </label>
                    </div>
                    <div className="flex items-center mx-5">
                      <input
                        id="default-radio-2"
                        type="checkbox"
                        onChange={onChangeMid}
                        checked={data?.income?.includes('Mid Income')}
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="default-radio-2"
                        className="ml-2 text-md font-medium text-black dark:text-black"
                      >
                        Mid Income
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="default-radio-3"
                        type="checkbox"
                        onChange={onChangeHigh}
                        checked={data?.income?.includes('High Income')}
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="default-radio-3"
                        className="ml-2 text-smd font-medium text-black dark:text-black"
                      >
                        High Income
                      </label>
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
};

export default Step5;
