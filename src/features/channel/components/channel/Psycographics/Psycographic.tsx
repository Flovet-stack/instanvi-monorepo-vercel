import { yupResolver } from '@hookform/resolvers/yup';
import { Channel } from '@instanvi/client/api';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

// eslint-disable-next-line no-restricted-imports
import { useChannel } from '@/features/channel/api/channel';
// eslint-disable-next-line no-restricted-imports
import { useChannels } from '@/features/channel/api/getChannels';

interface Psycographics {
  id: number;
  image: string;
  title: string;
  description: string;
}
export interface ChannelProps {}

export const Psycographics: React.FC<ChannelProps> = () => {
  const [psyco, setPsyco] = useState<string[]>([]);
  const [storage] = useState(
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('channel') || '{}')
      : ''
  );
  const Channels = useChannel();
  const [datas] = useState<Psycographics[]>([
    {
      id: 1,
      image: '/images/Group 50173.svg',
      title: 'Direct Exposure (Awareness)',
      description:
        'Get exposure and reach more potential customers. No Engagement or purchases. Efficiency measured on views/clicks',
    },
    {
      id: 2,
      image: '/images/Group 50174.svg',
      title: 'Direct Sales (Commissions)',
      description:
        'I will make sales for a flat Commissions on every sale  with some base  requirements provided.',
    },
    {
      id: 3,
      image: '/images/Group 50170.svg',
      title: 'Referrals & Collaborations (Commissions)',
      description:
        'Use my brand to endorse products. Typically involves making customer versions of products to match my brand',
    },
    {
      id: 4,
      image: '/images/Group 50171.svg',
      title: 'Application Downloads/Website visits',
      description:
        'Optimized to drive traffic to Webpage or increase application application downloads. Efficiency measured based on website visits  or application downloads',
    },
    {
      id: 5,
      image: '/images/Group 50172.svg',
      title: 'Local Visits',
      description:
        'Leverage existing audience or potential audience to  drive traffic to your location. Mostly through direct reach, events, social  gatherings etc',
    },
  ]);

  const handlePsyco = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newArray = [...psyco, e.target.id];
    if (psyco.includes(e.target.id)) {
      newArray = newArray.filter((datas) => datas !== e.target.id);
    }
    setPsyco(newArray);
    localStorage.setItem(
      'channel',
      JSON.stringify({ ...storage, optimized: newArray })
    );
  };

  const {} = useForm<Channel>({
    resolver: yupResolver(storage),
  });

  const saveCampaign = (storage: Channel) => {
    Channels.submit(storage);
  };

  const { data } = useChannels();

  useEffect(() => {
    console.log(data?.data.data);
  });

  return (
    <>
      <div className={'body'}>
        <div className=" pt-5 h-screen ">
          {/* header */}
          <div className="mx-auto max-w-8xl px-6 lg:px-8">
            <div className="justify-center flex mt-10 md:mt-20">
              <div className="w-full  md:w-[45%]">
                <h2 className="text-bold text-3xl flex justify-center">
                  Which are you most optimized for
                </h2>
                <h3 className="text-bold text-xl flex justify-center mt-2">
                  (Check all that Apply)
                </h3>
                <div className="w-full  md:w-[100%]   border border-gray-200 bg-white rounded-lg  mt-5">
                  <div className="w-full">
                    {datas.map((items, index) => {
                      return (
                        <div
                          key={index}
                          className="flex justify-between py-5 border-b px-4 w-full cursor-pointer"
                        >
                          <label
                            htmlFor={items.title}
                            className="cursor-pointer"
                          >
                            <div className="flex md:mr-14 ">
                              <Image
                                src={items.image}
                                className="h-16 w-16 md:mr-5"
                                width={16}
                                height={16}
                                alt=""
                              />
                              <div className="ml-3">
                                <h6 className="font-semibold text-lg">
                                  {items.title}
                                </h6>
                                <p className="text-sm">{items.description}</p>
                              </div>
                            </div>
                          </label>
                          <input
                            type="checkbox"
                            id={items.title}
                            onChange={(e) => handlePsyco(e)}
                            className="h-4 w-4 mt-8 mr-5 bg-green-600"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex justify-center    mt-10 mb-5 w-full">
                  <form></form>
                  <button
                    id="button"
                    type="submit"
                    onClick={() => saveCampaign(storage)}
                    className="w-full py-2.5 border text-white bg-black border-gray-200 rounded-lg outline-none pl-2  "
                  >
                    {Channels.isLoading ? <>Saving</> : <>Save</>}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
