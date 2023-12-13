import React, { Fragment, useState } from 'react';
import Schedule from '../Schedule';
import { It } from '../../types';
import Inventory from './Inventory';

export default function InventoryList({ it }: { it: It }) {
  const [arrowDisable, setArrowDisable] = useState(true);
  const [arrowRight, setArrowRight] = useState(false);

  const handleHorizantalScroll = (
    element: string,
    speed: number,
    distance: number,
    step: number
  ) => {
    console.log(element);
    let scrollAmount = 0;
    const button = document.getElementById(element);
    const slideTimer = setInterval(() => {
      if (button) {
        button.scrollLeft += step;
        scrollAmount += Math.abs(step);

        if (scrollAmount >= distance) {
          clearInterval(slideTimer);
          setArrowRight(true);
        } else setArrowRight(false);

        if (button.scrollLeft === 0) setArrowDisable(true);
        else setArrowDisable(false);
      }
    }, speed);
  };

  return (
    <Fragment>
      <div>
        <div className="w-full border-t-2  flex">
          <Schedule date={it.date} />
          <div
            className="overflow-x-auto img-container"
            id={`${it.id}`}
            // ref={elementRef}
          >
            <div className={`flex  ${it.id}`}>
              <div className="flex w-7/8">
                <Inventory
                  data={{
                    uuid: 'test',
                    type: 'available',
                    time: '6:00 - 7:00 Am',
                  }}
                />
                <Inventory
                  data={{
                    uuid: 'test',
                    type: 'MTN Cameroon',
                    time: '6:00 - 7:00 Am',
                  }}
                />
                <Inventory
                  data={{
                    uuid: 'test',
                    type: 'available',
                    time: '6:00 - 7:00 Am',
                  }}
                />
                <Inventory
                  data={{
                    uuid: 'test',
                    type: 'pending',
                    time: '6:00 - 7:00 Am',
                  }}
                />
                <Inventory
                  data={{
                    uuid: 'test',
                    type: 'pending',
                    time: '6:00 - 7:00 Am',
                  }}
                />
              </div>
            </div>
          </div>
          <div className="w-[100px] border-b border-r flex justify-center h-28">
            <div className="flex mt-10">
              <button
                onClick={() => {
                  handleHorizantalScroll(it.id, 25, 350, -10);
                }}
                className={`h-7 w-7 cursor-pointer  rounded-full border border-gray-400 flex justify-center`}
              >
                <i className={`ri-arrow-left-s-line mt-0.5 text-gray-500 `}></i>
              </button>
              <button
                onClick={() => {
                  handleHorizantalScroll(it.id, 25, 350, 10);
                }}
                className={`h-7 w-7 cursor-pointer ml-1  rounded-full border  border-gray-400 flex justify-center`}
              >
                <i className={`ri-arrow-right-s-line mt-0.5 text-gray-500`}></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
