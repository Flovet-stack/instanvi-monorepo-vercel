import React, { Fragment } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { Lead, LeadsDetails } from '../../types';

export default function LeadsDetails(props: LeadsDetails) {
  const {
    leads,
    leadDetail,
    leadContact,
    leadNotes,
    leadActivity,
    setLeadDetail,
    ShowLeadContact,
    ShowLeadNotes,
    ShowLeadActivity,
    uid,
  } = props;

  return (
    <Transition.Root show={leadDetail} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setLeadDetail}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-lg">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <div
                        className="absolute right-0 top-0 my-4 text-4xl cursor-pointer"
                        onClick={() => setLeadDetail(false)}
                      >
                        <i className="ri-close-circle-line text-white"></i>
                      </div>
                    </div>
                  </Transition.Child>
                  <div className="h-full flex-col overflow-y-scroll scrolls bg-white shadow-xl pb-20">
                    <div className="">
                      {leads.map((lead: Lead, index) => {
                        const leadContactInfo = [
                          {
                            label: 'Person Type',
                            value: lead.personType,
                          },
                          {
                            label: 'First name',
                            value: lead.firstName,
                          },
                          {
                            label: 'Last name',
                            value: lead.lastName,
                          },
                          {
                            label: 'Phone number',
                            value: lead.phoneNumber,
                          },
                          {
                            label: 'Sex',
                            value: lead.sex,
                          },
                          {
                            label: 'Email',
                            value: lead.email,
                          },
                          {
                            label: 'Birdthday',
                            value: lead.birthday,
                          },
                          {
                            label: 'Url',
                            value: lead.url,
                          },
                        ];
                        if (index == uid) {
                          return (
                            <>
                              <div className="flex flex-col pt-10 mb-2 items-center">
                                <div className="w-20 h-20 rounded-full bg-green-500 mb-4">
                                  {!lead.profilePic && (
                                    <>
                                      <div className="text-white w-full h-full flex items-center justify-center text-3xl">
                                        {lead.firstName.charAt(0)}
                                        {lead.lastName.charAt(0)}
                                      </div>
                                    </>
                                  )}
                                </div>

                                <div className="flex flex-col items-center w-1/2">
                                  <h1 className="text-xl">
                                    {lead.firstName} {lead.lastName}
                                  </h1>
                                  <div className="flex justify-between gap-2 mt-4">
                                    {lead.phoneNumber && (
                                      <div className="rounded-full mb-4 w-10 h-10 flex items-center cursor-pointer">
                                        <img
                                          src="../../images/sms_pic.svg"
                                          alt=""
                                          className=""
                                        />
                                      </div>
                                    )}
                                    {lead.whatsappNumber && (
                                      <div className="rounded-full mb-4 w-10 h-10 flex items-center cursor-pointer">
                                        <img
                                          src="../../images/whatsapp_pic.svg"
                                          alt=""
                                          className=""
                                        />
                                      </div>
                                    )}
                                    {lead.email && (
                                      <div className="rounded-full mb-4 w-10 h-10 flex items-center cursor-pointer">
                                        <img
                                          src="../../images/email_pic.svg"
                                          alt=""
                                          className=""
                                        />
                                      </div>
                                    )}
                                  </div>
                                </div>

                                <div className="flex justify-evenly gap-5">
                                  <div className="flex justify-between">
                                    <p className="text-sm text-gray-500">
                                      Last connected:{' '}
                                      <span className="text-black text-md text-end">
                                        11/12/2020
                                      </span>
                                    </p>
                                  </div>
                                  <div className="flex justify-between">
                                    <p className="text-sm text-gray-500">
                                      via:{' '}
                                      <span className="text-black text-md text-end">
                                        {lead.source}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <div
                                  className={
                                    'flex justify-between mt-3 border-b border-gray-200 pb-3'
                                  }
                                >
                                  <div className="flex text-gray-400 mx-3 mt-2">
                                    <div
                                      onClick={() => ShowLeadContact()}
                                      className={`-mb-3 cursor-pointer px-7 mr-5 ${
                                        leadContact
                                          ? 'text-green-600 border-b-4 border-green-600'
                                          : ''
                                      }`}
                                    >
                                      <div className={`font-bold text-sm mb-1`}>
                                        Contact
                                      </div>
                                    </div>
                                    <div
                                      onClick={() => ShowLeadNotes()}
                                      className={`-mb-3 cursor-pointer px-7 mr-5 ${
                                        leadNotes
                                          ? 'text-green-600 border-b-4 border-green-600'
                                          : ''
                                      }`}
                                    >
                                      <div className={`font-bold text-sm mb-1`}>
                                        Notes
                                      </div>
                                    </div>
                                    <div
                                      onClick={() => ShowLeadActivity()}
                                      className={`-mb-3 cursor-pointer px-7 mr-5 ${
                                        leadActivity
                                          ? 'text-green-600 border-b-4 border-green-600'
                                          : ''
                                      }`}
                                    >
                                      <div className={`font-bold text-sm mb-1`}>
                                        Activity
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="">
                                  <div
                                    className={`mt-4 ml-8 ${
                                      leadContact ? '' : 'hidden'
                                    }`}
                                  >
                                    <div className="flex flex-col">
                                      {leadContactInfo?.map((info, key) => (
                                        <div
                                          key={key}
                                          className="flex items-center mb-2"
                                        >
                                          <div className="w-28 capitalize text-sm text-gray-500">
                                            {info.label}:
                                          </div>
                                          <div className="text-lg">
                                            {info.value}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  <div
                                    className={`${leadNotes ? '' : 'hidden'}`}
                                  >
                                    <div className="flex flex-col">
                                      {/* {lead.notes.map((notes: any, index: any) => (
                                                                                <div
                                                                                    key={index}
                                                                                    className="flex flex-col ml-14 border-l p-5 relative"
                                                                                >
                                                                                    <div className="w-4 h-4 rounded-full absolute bg-green-600 left-0 top-10 -ml-2"></div>
                                                                                    <div className="border rounded p-3">
                                                                                        <p>{notes.note}</p>
                                                                                    </div>
                                                                                    <p className="px-3 pt-1">
                                                                                        {notes.date}
                                                                                    </p>
                                                                                </div>
                                                                            ))} */}
                                    </div>
                                  </div>

                                  <div
                                    className={`${
                                      leadActivity ? '' : 'hidden'
                                    }`}
                                  >
                                    <div className="flex flex-col">
                                      {/* {lead.activity.map(
                                                                                (activity: any, index: any) => (
                                                                                    <div
                                                                                        key={index}
                                                                                        className="flex flex-col ml-14 border-l p-5 relative"
                                                                                    >
                                                                                        <div className="w-6 h-6 rounded-full absolute bg-green-600 left-0 top-10 -ml-3 flex justify-evenly items-center">
                                                                                            {activity.source ==
                                                                                                "Whatsapp" ? (
                                                                                                <i className="ri-whatsapp-line text-white"></i>
                                                                                            ) : (
                                                                                                <></>
                                                                                            )}
                                                                                            {activity.source == "Email" ? (
                                                                                                <i className="ri-chat-1-line text-white"></i>
                                                                                            ) : (
                                                                                                <></>
                                                                                            )}
                                                                                            {activity.source == "SMS" ? (
                                                                                                <i className="ri-mail-line text-white"></i>
                                                                                            ) : (
                                                                                                <></>
                                                                                            )}
                                                                                        </div>
                                                                                        <div className="border rounded p-3">
                                                                                            <p>{activity.activity}</p>
                                                                                        </div>
                                                                                        <p className="px-3 pt-1">
                                                                                            {activity.date}
                                                                                        </p>
                                                                                    </div>
                                                                                )
                                                                            )} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        }
                      })}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
