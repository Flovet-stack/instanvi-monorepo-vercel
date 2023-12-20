import { Dialog, Transition } from '@headlessui/react';
import React, { FC, useState, Fragment } from 'react';
import { DateRangePicker } from 'react-date-range';

interface DetailModalProps {}

const DetailModal: FC<DetailModalProps> = () => {
  const [open, setOpen] = useState<any>(true);
  const [prizes, setPrizes] = useState<boolean>(true);
  const [rules, setRules] = useState<boolean>(false);
  const [assets, setAssests] = useState<boolean>(false);
  const [objective, setObjectives] = useState<boolean>(false);
  const [shedule, setShedule] = useState<boolean>(false);
  const selectionRange = {
    startDate: new Date(),
    endDate: '',
    key: 'selection',
  };

  const handleSelect = (ranges: any) => {
    console.log(ranges);
  };

  function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setOpen(open)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl sm:p-6">
                  <div
                    className="absolute right-0 top-0 m-4 text-xl cursor-pointer"
                    onClick={() => setOpen(false)}
                  >
                    <i className="ri-close-circle-line text-red-700 text-2xl"></i>
                  </div>
                  <center>
                    <h2 className="text-2xl">Advert Request</h2>
                  </center>
                  <div className="mt-5">
                    <hr />
                    <div className="mt-5 w-full flex justify-center">
                      <div className="px-4 py-2 bg-gray-200">
                        <div className="flex">
                          <div
                            className={classNames(
                              prizes
                                ? 'bg-white text-green-500 font-semibold'
                                : '',
                              'px-4 cursor-pointer rounded'
                            )}
                            onClick={() => {
                              setPrizes(true);
                              setAssests(false);
                              setRules(false);
                              setObjectives(false);
                              setShedule(false);
                            }}
                          >
                            <span>Business</span>
                          </div>
                          <div
                            className={classNames(
                              rules
                                ? 'bg-white text-green-500 font-semibold '
                                : '',
                              'px-4 cursor-pointer rounded'
                            )}
                            onClick={() => {
                              setPrizes(false);
                              setAssests(false);
                              setRules(true);
                              setObjectives(false);
                              setShedule(false);
                            }}
                          >
                            <span>Objectives</span>
                          </div>
                          <div
                            className={classNames(
                              assets
                                ? 'bg-white text-green-500 font-semibold'
                                : '',
                              'px-4 cursor-pointer rounded'
                            )}
                            onClick={() => {
                              setPrizes(false);
                              setAssests(true);
                              setRules(false);
                              setObjectives(false);
                              setShedule(false);
                            }}
                          >
                            <span>Assets</span>
                          </div>
                          <div
                            className={classNames(
                              objective
                                ? 'bg-white text-green-500 font-semibold'
                                : '',
                              'px-4 cursor-pointer rounded'
                            )}
                            onClick={() => {
                              setPrizes(false);
                              setAssests(false);
                              setRules(false);
                              setObjectives(true);
                              setShedule(false);
                            }}
                          >
                            <span>Rules</span>
                          </div>
                          <div
                            className={classNames(
                              shedule
                                ? 'bg-white text-green-500 font-semibold'
                                : '',
                              'px-4 cursor-pointer rounded'
                            )}
                            onClick={() => {
                              setPrizes(false);
                              setAssests(false);
                              setRules(false);
                              setObjectives(false);
                              setShedule(true);
                            }}
                          >
                            <span>Shedule</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={classNames(
                        prizes ? '' : 'hidden',
                        'mt-20 h-96'
                      )}
                    >
                      <div className="mt-8 flex justify-center">
                        <table className="">
                          <tr>
                            <td className="flex justify-end py-2">
                              <span>Business Name</span>
                            </td>
                            <td className="pl-8">
                              <span className="font-semibold">
                                Business ABC
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="flex justify-end py-2">
                              <span>Company Size</span>
                            </td>
                            <td className="pl-8">
                              <span className=" font-semibold">
                                0-5 Million XAF
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="flex justify-end py-2">
                              <span>Representative</span>
                            </td>
                            <td className="pl-8">
                              <span className="font-semibold">Ambe Charle</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="flex justify-end py-2">
                              <span>Address</span>
                            </td>
                            <td className="pl-8">
                              <span className="font-semibold">
                                Douala Cameroon
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="flex justify-end py-2">
                              <span>Email</span>
                            </td>
                            <td className="pl-8">
                              <span className="font-semibold">
                                abc@business.com
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="flex justify-end py-2">
                              <span>Telephone</span>
                            </td>
                            <td className="pl-8">
                              <span className="font-semibold">
                                +237 672 142 244
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="flex justify-end py-2">
                              <span>Website</span>
                            </td>
                            <td className="pl-8">
                              <span className="font-semibold">
                                www.abcbusiness.com
                              </span>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <div
                      className={classNames(
                        rules ? '' : 'hidden',
                        'mt-20 h-96'
                      )}
                    >
                      <p className="px-8">
                        <h2 className="text-2xl mb-3">Problems</h2>
                        We know that many limitations remain as discussed above
                        and we plan to make regular model updates to improve in
                        such areas. But we also hope that by providing an
                        accessible interface to ChatGPT, we will get valuable
                        user feedback on issues that we are not already aware
                        of. Users are encouraged to provide feedback on
                        problematic model outputs through the UI, as well as on
                        false positives/negatives from the external content
                        filter which is also part of the interface.
                        <h2 className="text-2xl mb-3 mt-5">Solution</h2>
                        We are particularly interested in feedback regarding
                        harmful outputs that could occur in real-world,
                        non-adversarial conditions, as well as feedback that
                        helps us uncover and understand novel risks and possible
                        mitigations.You can choose to enter the ChatGPT Feedback
                        Contest3 for a chance to win up to $500 in API credits
                      </p>
                    </div>
                    <div
                      className={classNames(
                        assets ? '' : 'hidden',
                        'mt-20 h-96'
                      )}
                    >
                      <div className="mt-8 px-4 flex">
                        <div>
                          <div className="relative h-36 mb-2 w-36 rounded-md">
                            <div
                              style={{
                                width: '100%',
                                height: '100%',
                              }}
                            >
                              <img
                                src="/images/new-special-sale-social-media-post-design-template 1.svg"
                                className="object-fit rounded-md"
                                alt=""
                                style={{
                                  objectFit: 'cover',
                                  width: '100%',
                                  height: '100%',
                                }}
                              />
                              <img
                                src="/images/Group 50395.svg"
                                className="absolute h-12 w-12  left-0 bottom-0 px-2"
                              />
                            </div>
                          </div>
                          <center>
                            <span>Video</span>
                          </center>
                        </div>
                      </div>
                    </div>
                    <div
                      className={classNames(
                        objective ? '' : 'hidden',
                        'mt-20 h-96'
                      )}
                    >
                      <p className="px-8">
                        <h2 className="text-2xl mb-3">Advert Rules</h2>
                        We know that many limitations remain as discussed above
                        and we plan to make regular model updates to improve in
                        such areas. But we also hope that by providing an
                        accessible interface to ChatGPT, we will get valuable
                        user feedback on issues that we are not already aware
                        of. Users are encouraged to provide feedback on
                        problematic model outputs through the UI, as well as on
                        false positives/negatives from the external content
                        filter which is also part of the interface.
                      </p>
                    </div>
                    <div
                      className={classNames(
                        shedule ? '' : 'hidden',
                        'mt-20 h-96'
                      )}
                    >
                      <div className="flex justify-center">
                        <DateRangePicker
                          ranges={[selectionRange]}
                          onChange={handleSelect}
                        />
                      </div>
                    </div>
                    <div className="mt-5 flex justify-between">
                      <button className="text-white px-4 py-2.5 rounded bg-red-500">
                        Decline
                      </button>

                      <button className="text-white px-4 py-2.5 rounded bg-green-500">
                        Accepts
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default DetailModal;
