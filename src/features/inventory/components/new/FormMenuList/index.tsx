import React from 'react';

import { MenuList } from '@/features/inventory/types';

export default function FormMenuList(props: MenuList) {
  const { setGeneral, setMedia, setScheduling, setPricing, scrollToForm } =
    props;
  const { general, media, scheduling, pricing } = props;

  return (
    <div className="px-4 w-48 mt-3 ml-10">
      <div className="mt-2 fixed">
        <div
          onClick={() => {
            setGeneral(true);
            setMedia(false);
            setScheduling(false);
            setPricing(false);
            scrollToForm(0);
          }}
          className={`${
            general ? 'border-r-2 border-green-500 text-green-500' : ''
          }  mt-3 pr-3 text-lg cursor-pointer`}
        >
          <p>general</p>
        </div>
        <div
          onClick={() => {
            setGeneral(false);
            setMedia(true);
            setScheduling(false);
            setPricing(false);
            scrollToForm(window.innerHeight);
          }}
          className={`${
            media ? 'border-r-2 border-green-500 text-green-500' : ''
          }  mt-3 pr-3 text-lg cursor-pointer`}
        >
          <p>medias</p>
        </div>
        <div
          onClick={() => {
            setGeneral(false);
            setMedia(false);
            setScheduling(true);
            setPricing(false);
            scrollToForm(window.innerHeight * 2 + 2);
          }}
          className={`${
            scheduling ? 'border-r-2 border-green-500 text-green-500' : ''
          }  mt-3 pr-3 text-lg cursor-pointer`}
        >
          <p>schedulings</p>
        </div>
        <div
          onClick={() => {
            setGeneral(false);
            setMedia(false);
            setScheduling(false);
            setPricing(true);
            scrollToForm(window.innerHeight * 3 + 2);
          }}
          className={`${
            pricing ? 'border-r-2 border-green-500 text-green-500' : ''
          }  mt-3 pr-3 text-lg cursor-pointer`}
        >
          <p>pricing</p>
        </div>

        <div className="mt-4 pr-3 text-lg text-white rounded cursor-pointer bg-green-500 flex justify-evenly">
          <p>ALL DATA</p>
        </div>
      </div>
    </div>
  );
}
