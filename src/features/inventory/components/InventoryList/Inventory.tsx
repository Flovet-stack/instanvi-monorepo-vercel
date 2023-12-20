import React from 'react';

import { AdSpot } from '../../types';

export default function Inventory<FC>({ data }: { data: AdSpot }) {
  const colorType =
    data?.type === 'available'
      ? 'green'
      : data?.type === 'pending'
      ? 'blue'
      : 'red';
  const btnColorType = data?.type === 'available' ? 'green' : 'blue';

  return (
    <div className="boxes border-b border-r h-28 p-0.5">
      <div
        className={`w-full h-full relative bg-${colorType}-100 border-l-2 p-1 border-${colorType}-600`}
      >
        <div className="flex justify-between">
          <p className={`capitalize text-${colorType}-500`}>{data?.type}</p>
          {data?.type !== 'pending' && (
            <button
              className={`p-1 m-0.5 rounded text-white bg-${btnColorType}-500 text-xs`}
            >
              PR
            </button>
          )}
        </div>
        <div className="absolute bottom-0 w-full">
          <div className="flex justify-between">
            <img src="/images/facebook.svg" className="h-5 w-5 m-1" alt="" />
            <p className="text-sm mt-2 mr-2">{data?.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
