import React, { useState, useContext, FC } from 'react';
import Link from 'next/link';
// import { AuthContext } from '@/components/context/context';
// import { v4 as uuid } from 'uuid';
// import { CurrentUserContext } from '@/pages/_app';
import { userContext } from '@/Components/context/context'


interface Audience {
  id: number;
  name: string;
  active: boolean;
}

interface Step6Props {
  step6: Audience[];
}

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

const Step6: FC = () => {
  const data = useContext(userContext);
  const [counts, setCounts] = useState<number>(0);
  const [audiences, setAudiences] = useState<Step6Props[]>([
    {
      step6: [
        {
          id: 1,
          name: 'Leisure',
          active: false,
        },
        {
          id: 2,
          name: 'Entertainment',
          active: false,
        },
        {
          id: 3,
          name: 'Healthcare',
          active: false,
        },
        {
          id: 4,
          name: 'Aerospace',
          active: false,
        },
        {
          id: 5,
          name: 'Law',
          active: false,
        },
        {
          id: 6,
          name: 'Agriculture',
          active: false,
        },
        {
          id: 7,
          name: 'Healthcare',
          active: false,
        },
        {
          id: 8,
          name: 'Energy',
          active: false,
        },
        {
          id: 9,
          name: 'Fashion',
          active: false,
        },
        {
          id: 10,
          name: 'Finance',
          active: false,
        },
        {
          id: 11,
          name: 'Food/Beverages',
          active: false,
        },
        {
          id: 12,
          name: 'Media/New',
          active: false,
        },
      ],
    },
  ]);
  const [value, setValue] = useState<string>('');

  let length: number = 0;

  const handleAudience = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string,
    id: number,
    active: boolean
  ): void => {
    const item: number = 1;
    if (item) {
      const datas: Step6Props[] = audiences.map((items: Step6Props) => {
        return {
          ...items,
          step6: items.step6.map((dataItems: Audience) => {
            if (dataItems.id === id && active === false && counts < 5) {
              setCounts(counts + 1);
              return {
                ...dataItems,
                active: true,
              };
            } else if (dataItems.id === id && active === true) {
              setCounts(counts - 1);
              return {
                ...dataItems,
                active: false,
              };
            } else return dataItems;
          }),
        };
      });
      setAudiences(datas);
    }

    if (name === 'Leisure' && active === true && counts <= 5) {
      let datss: string[] = data?.interest.filter(
        (item: string) => item !== 'Leisure'
      );
      data?.setInterest([...datss]);
    } else if (name === 'Leisure' && active === false && counts < 5) {
      data?.setInterest([...data?.interest, 'Leisure']);
    } else if (name === 'Entertainment' && active === true && counts <= 5) {
      let datss: string[] = data?.interest.filter(
        (item: string) => item !== 'Entertainment'
      );
      data?.setInterest([...datss]);
    } else if (name === 'Entertainment' && active === false && counts < 5) {
      data?.setInterest([...data?.interest, 'Entertainment']);
    } else if (name === 'Healthcare' && active === true && counts <= 5) {
      let datss: string[] = data?.interest.filter(
        (item: string) => item !== 'Healthcare'
      );
      data?.setInterest([...datss]);
    } else if (name === 'Healthcare' && active === false && counts < 5) {
      data?.setInterest([...data?.interest, 'Healthcare']);
    } else if (name === 'Aerospace' && active === true && counts <= 5) {
      let datss: string[] = data?.interest.filter(
        (item: string) => item !== 'Aerospace'
      );
      data?.setInterest([...datss]);
    } else if (name === 'Aerospace' && active === false && counts < 5) {
      data?.setInterest([...data?.interest, 'Aerospace']);
    } else if (name === 'Law' && active === true && counts <= 5) {
      let datss: string[] = data?.interest.filter(
        (item: string) => item !== 'Law'
      );
      data?.setInterest([...datss]);
    } else if (name === 'Law' && active === false && counts < 5) {
      data?.setInterest([...data?.interest, 'Law']);
    } else if (name === 'Agriculture' && active === true && counts <= 5) {
      let datss: string[] = data?.interest.filter(
        (item: string) => item !== 'Agriculture'
      );
      data?.setInterest([...datss]);
    } else if (name === 'Agriculture' && active === false && counts < 5) {
      data?.setInterest([...data?.interest, 'Agriculture']);
    } else if (name === 'Energy' && active === true && counts <= 5) {
      let datss: string[] = data?.interest.filter(
        (item: string) => item !== 'Energy'
      );
      data?.setInterest([...datss]);
    } else if (name === 'Energy' && active === false && counts < 5) {
      data?.setInterest([...data?.interest, 'Energy']);
    } else if (name === 'Fashion' && active === true && counts <= 5) {
      let datss: string[] = data?.interest.filter(
        (item: string) => item !== 'Fashion'
      );
      data?.setInterest([...datss]);
    } else if (name === 'Fashion' && active === false && counts < 5) {
      data?.setInterest([...data?.interest, 'Fashion']);
    } else if (name === 'Finance' && active === true && counts <= 5) {
      let datss: string[] = data?.interest.filter(
        (item: string) => item !== 'Finance'
      );
      data?.setInterest([...datss]);
    } else if (name === 'Finance' && active === false && counts < 5) {
      data?.setInterest([...data?.interest, 'Finance']);
    } else if (name === 'Food/Beverages' && active === true && counts <= 5) {
      let datss: string[] = data?.interest.filter(
        (item: string) => item !== 'Food/Beverages'
      );
      data?.setInterest([...datss]);
    } else if (name === 'Food/Beverages' && active === false && counts < 5) {
      data?.setInterest([...data?.interest, 'Food/Beverages']);
    } else if (name === 'Media/New' && active === true && counts <= 5) {
      let datss: string[] = data?.interest.filter(
        (item: string) => item !== 'Media/New'
      );
      data?.setInterest([...datss]);
    } else if (name === 'Media/New' && active === false && counts < 5) {
      data?.setInterest([...data?.interest, 'Media/New']);
    }
  };

  return (
    <div>
      <div className="  h-[90%] pt-3">
        <div className="w-full flex justify-center ">
          <div>
            <div className="">
              <h2 className="text-4xl font-bold flex justify-center my-5">
                Select your Top audience Interest
              </h2>
              <div>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <i className="ri-search-line h-5 w-5 text-gray-400"></i>
                  </div>
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="block w-full rounded border pl-10 py-2.5 outline-none"
                    placeholder="Search here"
                  />
                </div>
              </div>
              <div className="flex flex-nowrap mt-5">
                {data?.advanceuserdata?.map((item: any) => {
                  if (item.selected == true && item.name == 'Physographic') {
                    return (
                      <div className="rounded-full text-white text-sm w-fit bg-gray-600 px-2   ml-2">
                        <span className="-mt-4">{item.location}</span>
                        <i
                          className="ri-close-fill ml-3 cursor-pointer mt-2"
                          onClick={(e) => console.log(e, item.name, item.id)}
                        ></i>
                      </div>
                    );
                  }
                })}
                { }
              </div>
              <p className="text-2xl font-bold flex justify-center mt-8">
                {/* {data?.advanceuserdata?.map((item) => {
                  if (item.selected == true && item.name == "Physographic") {
                    length = length + 1;
                  }
                })}{" "}
                {5} Left */}
              </p>

              <div className="flex h-10">
                {audiences.map((itemw) => {
                  return (
                    <>
                      {itemw.step6.map((item) => {
                        if (item.active == true) {
                          length = length + 1;
                          return (
                            <div className="m-1.5 px-4 border-green-500 border   rounded">
                              <p className="text-green-400 text-sm py-2.5 -mt-2">
                                {item.name}
                              </p>
                            </div>
                          );
                        }
                      })}
                    </>
                  );
                })}{' '}
              </div>
              <p className="text-2xl font-bold flex justify-center mt-8">
                {5 - length} Left
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-8  px-5">
              {audiences.map((it) => {
                return (
                  <>
                    {it.step6
                      .filter((item) => {
                        if (!value) return true;
                        if (
                          item.name.toLowerCase().includes(value) ||
                          item.name.toUpperCase().includes(value)
                        ) {
                          return true;
                        }
                      })
                      .map((item) => {
                        return (
                          <div className="mt-3">
                            <button
                              onClick={(e) => {
                                handleAudience(
                                  e as any,
                                  item.name,
                                  item.id,
                                  item?.active
                                );
                              }}
                              className={classNames(
                                !data?.interest?.includes(item?.name)
                                  ? ''
                                  : 'bg-green-600 text-white',
                                'w-full flex justify-between py-3 rounded-md px-4 border border-gray-300'
                              )}
                            >
                              <span>{item.name}</span>
                              <i
                                className={classNames(
                                  !data?.interest?.includes(item?.name)
                                    ? 'ri-checkbox-blank-circle-line text-gray-300'
                                    : 'ri-checkbox-circle-line',
                                  '  text-xl'
                                )}
                              ></i>
                            </button>
                          </div>
                        );
                      })}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step6;
