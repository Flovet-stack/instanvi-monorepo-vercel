import { useActiveMenu } from 'react-active-menu';
import React, { FC, useState } from 'react';
import Objectives from './objectives';
import Scheduling from './scheduling';
import Creative from './creative';
import Targeting from './targeting';
import Detail from './detail';
import Budgeting from './budgeting';
import SOS from './sos';

interface NewAdvertSliderProps {}

const NewAdvertSlider: FC<NewAdvertSliderProps> = () => {
  const { registerContainer, registerSection, registerTrigger, activeId } =
    useActiveMenu({
      smooth: true,
    });

  const [standardCampaign, setStandardCampain] = useState<boolean>(false);
  const [sosCampaign, setSosCampaign] = useState<boolean>(false);
  const [nextStep, setNextStep] = useState<boolean>(false);

  const HandleCampaignType = (type: string): void => {
    setStandardCampain(type === 'Standard');
    setSosCampaign(type === 'SOS');
    setNextStep(true);
  };

  return (
    <>
      <div className="flex flex-col h-screen justify-evenly bg-white">
        <div className="flex justify-evenly items-center">
          <div className={`flex gap-4 ${nextStep ? 'hidden' : ''}`}>
            <div
              onClick={() => {
                HandleCampaignType('Standard');
              }}
              className="flex flex-col gap-6 w-[260px] pt-5 pb-20 border rounded justify-between items-center cursor-pointer"
            >
              <div className="flex rounded-full w-20 h-20 bg-gray-200"></div>
              <h1 className="">Standard Campaign</h1>
            </div>
            <div
              onClick={() => {
                HandleCampaignType('SOS');
              }}
              className="flex flex-col gap-6 w-[260px] pt-5 pb-20 border rounded justify-between items-center cursor-pointer"
            >
              <div className="flex rounded-full w-20 h-20 bg-gray-200"></div>
              <h1 className="">SOS Campaign</h1>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col h-screen bg-white ${
            standardCampaign ? '' : 'hidden'
          }`}
        >
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
                    Objective
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    ref={registerTrigger('section-3')}
                    className={`w-full flex items-center cursor-pointer outline-none ${
                      activeId == 'section-3'
                        ? 'border-r-2 border-green-500 text-green-500'
                        : ''
                    }`}
                  >
                    Creative
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    ref={registerTrigger('section-4')}
                    className={`w-full flex items-center cursor-pointer outline-none ${
                      activeId == 'section-4'
                        ? 'border-r-2 border-green-500 text-green-500'
                        : ''
                    }`}
                  >
                    Scheduling
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    ref={registerTrigger('section-5')}
                    className={`w-full flex items-center cursor-pointer outline-none ${
                      activeId == 'section-5'
                        ? 'border-r-2 border-green-500 text-green-500'
                        : ''
                    }`}
                  >
                    Targeting
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    ref={registerTrigger('section-6')}
                    className={`w-full flex items-center cursor-pointer outline-none ${
                      activeId == 'section-6'
                        ? 'border-r-2 border-green-500 text-green-500'
                        : ''
                    }`}
                  >
                    Budgeting
                  </button>
                </li>
              </ul>
            </nav>
            <div className="overflow-auto grow" ref={registerContainer}>
              <section
                ref={registerSection('section-1')}
                className={`h-[100%] pt-10 flex flec-col justify-evenly items-center`}
              >
                <div className="flex flex-col h-full w-[90%]">
                  <Detail />
                </div>
              </section>

              <section
                ref={registerSection('section-2')}
                className={`h-[100%] pt-10 flex justify-evenly`}
              >
                <div className="flex flex-col h-full w-[90%]">
                  <Objectives />
                </div>
              </section>

              <section
                ref={registerSection('section-3')}
                className={`h-[100%] pt-10 flex justify-evenly`}
              >
                <div className="flex flex-col h-full w-[90%]">
                  <Creative />
                </div>
              </section>

              <section
                ref={registerSection('section-4')}
                className={`h-[100%] pt-10 flex justify-evenly`}
              >
                <div className="fflex flex-col h-full w-[90%]">
                  <Scheduling />
                </div>
              </section>

              <section
                ref={registerSection('section-5')}
                className={`h-[100%] pt-10 flex justify-evenly`}
              >
                <div className="flex flex-col h-full w-[90%]">
                  <Targeting />
                </div>
              </section>

              <section
                ref={registerSection('section-6')}
                className={`h-[100%] pt-10 flex justify-evenly`}
              >
                <div className="flex flex-col h-full w-[90%]">
                  <Budgeting />
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
              {activeId == 'section-6' ? 'Publish' : 'Next'}
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col h-screen ${sosCampaign ? '' : 'hidden'}`}
        >
          <SOS />
        </div>
      </div>
    </>
  );
};

export default NewAdvertSlider;
