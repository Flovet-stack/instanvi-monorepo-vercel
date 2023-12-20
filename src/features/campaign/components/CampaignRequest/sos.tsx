import React, { FC, useRef } from 'react';
import { useActiveMenu, ActiveMenuProps } from 'react-active-menu';

import Detail from './detail';
import SOSCampaign from './sosCampaign';

interface SOSProps {}

const SOS: FC<SOSProps> = () => {
  const {
    registerContainer,
    registerSection,
    registerTrigger,
    activeId,
  }: ActiveMenuProps = useActiveMenu({
    smooth: true,
  });

  return (
    <div className="flex flex-col h-screen">
      <div className={`flex flex-col h-screen bg-white`}>
        <div className="flex h-[92vh] border-b">
          <nav className="flex pl-10 pt-10 flex-col w-[160px]">
            <ul className="flex flex-col gap-2 w-full">
              <li className="">
                <button
                  type="button"
                  ref={registerTrigger('section-1')}
                  className={`w-full flex items-center cursor-pointer outline-none ${
                    activeId == 'section-1'
                      ? 'border-r-2 border-green-500 text-green-500'
                      : ''
                  }`}
                >
                  Detail
                </button>
              </li>
              <li>
                <button
                  type="button"
                  ref={registerTrigger('section-2')}
                  className={`w-full flex items-center cursor-pointer outline-none ${
                    activeId == 'section-2'
                      ? 'border-r-2 border-green-500 text-green-500'
                      : ''
                  }`}
                >
                  Sos
                </button>
              </li>
            </ul>
          </nav>
          <div className="overflow-auto grow" ref={registerContainer}>
            <section
              ref={registerSection('section-1')}
              className={`h-[100%] flex flec-col justify-evenly items-center`}
            >
              <div className="flex flex-col w-4/5 h-full">
                <Detail />
              </div>
            </section>

            <section
              ref={registerSection('section-2')}
              className={`h-[100%] flex justify-evenly`}
            >
              <div className="flex flex-col h-full w-4/5">
                <SOSCampaign />
              </div>
            </section>
          </div>
        </div>

        <div className="flex justify-between items-center px-16 py-3 w-full h-[8%] bg-white fixed bottom-0 rigth-0 border-t">
          <div className="cursor-pointer px-10 py-2.5 text-sm flex justify-evenly items-center rounded-lg text-gray-600 bg-gray-200 font-semibold">
            Save draft
          </div>
          <div
            // ref={activeId>=5?null:registerTrigger(activeId+1)}
            // onClick={handleNextSection}
            className="cursor-pointer px-10 py-2.5 text-sm flex justify-evenly items-center rounded-lg text-white bg-green-500"
          >
            {activeId == 'section-2' ? 'Publish' : 'Next'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SOS;
