'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, Transition, Dialog } from '@headlessui/react';
import { Fragment } from 'react';
// import Header from '../headers';
import PeopleSide from './side';
import { CreateTagModal } from './components';

const classNames = (...classes: unknown[]) => {
  return classes.filter(Boolean).join(' ');
};

const People = () => {
  const [openTag, setOpenTag] = useState(false);
  const [openSendMessage, setOpenSendMessage] = useState(false);
  const [openArchive, setOpenArchive] = useState(false);
  const [messageType, setMessageType] = useState('Whatsapp');

  const [userDetails, setUserDetails] = useState(false);

  const [openSendMessage2, setOpenSendMessage2] = useState(false);
  const [messageType2, setMessageType2] = useState('Whatsapp');

  type Contact = {
    id: number;
    firstName: string;
    lastName: string;
    profilePic: string;
    personType: 'Company' | 'Individual'; // Assuming 'Company' and 'Individual' are the possible values
    sex: 'Male' | 'Female'; // Assuming 'Male' and 'Female' are the possible values
    url: string;
    email: string;
    phoneNumber: string;
    whatsappNumber: string;
    birthday: string;
    address: string;
    tags: string[];
    subscriptionStatus: 'Subscribed' | 'Unsubscribed'; // Assuming 'Subscribed' and 'Unsubscribed' are the possible values
    isArchived: boolean;
    dateAdded: string; // Consider using Date type if the date format is expected to be used programmatically
    dateUpdated: string; // Consider using Date type if the date format is expected to be used programmatically
    source: string;
  };

  const contacts: Contact[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      profilePic: '',
      personType: 'Company',
      sex: 'Male',
      url: 'www.goto.com',
      email: 'johndoe@gmail.com',
      phoneNumber: '',
      whatsappNumber: '688720586',
      birthday: '17 Feb',
      address: 'Ndogbong 10eme',
      tags: ['adult ', 'male ', 'car ', 'food '],
      subscriptionStatus: 'Subscribed',
      isArchived: true,
      dateAdded: '14 July 2022',
      dateUpdated: '20 July 2022',
      source: 'USSD',
    },
    {
      id: 2,
      firstName: 'Michel',
      lastName: 'Mayers',
      profilePic: '',
      personType: 'Individual',
      sex: 'Female',
      url: 'www.goto.com',
      email: 'mcmayers@gmail.com',
      phoneNumber: '693541586',
      whatsappNumber: '674541586',
      birthday: '03 May',
      address: 'Logpom Bassong',
      tags: ['adult ', 'female ', 'hair '],
      subscriptionStatus: 'Unsubscribed',
      isArchived: false,
      dateAdded: '11 April 2023',
      dateUpdated: '20 June 2023',
      source: 'Call',
    },
    {
      id: 3,
      firstName: 'Davis',
      lastName: 'Barns',
      profilePic: '',
      personType: 'Company',
      sex: 'Male',
      url: 'www.goto.com',
      email: 'db@gmail.com',
      phoneNumber: '688102586',
      whatsappNumber: '666720586',
      birthday: '11 Dec',
      address: 'Ndogbong 10eme',
      tags: ['adult ', 'male ', 'food ', 'car '],
      subscriptionStatus: 'Subscribed',
      isArchived: true,
      dateAdded: '14 July 2022',
      dateUpdated: '20 July 2022',
      source: 'USSD',
    },
    {
      id: 4,
      firstName: 'John',
      lastName: 'Doe',
      profilePic: '',
      personType: 'Company',
      sex: 'Male',
      url: 'www.goto.com',
      email: 'johndoe@gmail.com',
      phoneNumber: '688720586',
      whatsappNumber: '688720586',
      birthday: '17 Feb',
      address: 'Ndogbong 10eme',
      tags: ['adult ', 'male ', 'car '],
      subscriptionStatus: 'Subscribed',
      isArchived: true,
      dateAdded: '14 July 2022',
      dateUpdated: '20 July 2022',
      source: 'USSD',
    },
    {
      id: 5,
      firstName: 'Jefferson',
      lastName: 'Pierce',
      profilePic: '',
      personType: 'Individual',
      sex: 'Male',
      url: 'www.goto.com',
      email: 'jp@gmail.com',
      phoneNumber: '688720586',
      whatsappNumber: '688720586',
      birthday: '12 Dec',
      address: 'Ndogbong 10eme',
      tags: ['animes ', 'movies ', 'fashion '],
      subscriptionStatus: 'Subscribed',
      isArchived: true,
      dateAdded: '14 July 2022',
      dateUpdated: '20 July 2022',
      source: 'USSD',
    },
    {
      id: 6,
      firstName: 'Remington',
      lastName: 'Smith',
      profilePic: '',
      personType: 'Company',
      sex: 'Male',
      url: 'www.goto.com',
      email: 'rsmith@gmail.com',
      phoneNumber: '688720586',
      whatsappNumber: '688720586',
      birthday: '17 Jan',
      address: 'London',
      tags: [],
      subscriptionStatus: 'Unsubscribed',
      isArchived: true,
      dateAdded: '14 July 2022',
      dateUpdated: '20 July 2022',
      source: 'USSD',
    },
  ];

  //-------------------------------------------------------------------------------
  const dialogRef = useRef(null);
  useEffect(() => {
    if (userDetails && dialogRef.current) {
      //   dialogRef.current.scrollTop = 0;
      console.log('ops');
    }
  }, [userDetails]);

  //-------------------------------------------------------------------------------

  const handleMsgType2 = (typeOfMessage: string) => {
    setMessageType2(typeOfMessage);
  };

  return (
    <>
      {/* <Header /> */}
      <hr />
      <div className="flex">
        <div className="w-1/4 overflow-y-auto scrollbars">
          <PeopleSide />
        </div>
        <div className="w-3/4">
          <div className="mx-auto bg-white max-w-8xl   px-4 sm:px-12 lg:px-12">
            <div className="w-full items-center sticky mb-8">
              <div className="flex gap-4 my-5">
                <div className=" w-1/3">
                  <div className="relative flex flex-grow items-stretch focus-within:z-10 w-full justify-evenly bg-white rounded-lg">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <i className="ri-search-line text-xl"></i>
                    </div>
                    <input
                      type="search"
                      name="search"
                      id="search"
                      className="block w-full rounded-lg py-2.5 pl-10 text-gray-900 outline-none border"
                      placeholder="Search data sources"
                    />
                  </div>
                </div>
                <div className=" grow flex gap-2"></div>

                <button
                  id="button"
                  className="px-5 py-2.5 text-white bg-green-500 rounded-lg cursor-pointer"
                >
                  Upload Contacts
                </button>

                <button
                  id="button"
                  className="px-5 py-2.5 text-white bg-green-500 rounded-lg cursor-pointer"
                >
                  Add Contact
                </button>
              </div>
            </div>

            <div className="overflow-auto border ">
              <table className="w-full table-fixed divide-y">
                <thead className="">
                  <tr>
                    <th className="sticky left-0 z-10 bg-white text-left pl-4 py-2 w-[200px] font-normal text-lg">
                      First Name
                    </th>
                    <th className="sticky left-[200px] z-10 bg-white text-left pl-4 py-2 w-[200px] font-normal text-lg">
                      Last Name
                    </th>
                    <th className="w-[200px] font-normal text-lg text-left pl-4 py-2">
                      Person Type
                    </th>
                    <th className="w-[200px] font-normal text-lg text-left pl-4 py-2">
                      Email
                    </th>
                    <th className="w-[200px] font-normal text-lg text-left pl-4 py-2">
                      Phone Number
                    </th>
                    <th className="w-[200px] font-normal text-lg text-left pl-4 py-2">
                      Whatsapp Number
                    </th>
                    <th className="w-[200px] font-normal text-lg text-left pl-4 py-2">
                      Sex
                    </th>
                    <th className="w-[200px] font-normal text-lg text-left pl-4 py-2">
                      Birthday
                    </th>
                    <th className="w-[200px] font-normal text-lg text-left pl-4 py-2">
                      Address
                    </th>
                    <th className="w-[200px] font-normal text-lg text-left pl-4 py-2">
                      url
                    </th>
                    <th className="w-[200px] font-normal text-lg text-left pl-4 py-2">
                      Tags
                    </th>
                    <th className="w-[200px] font-normal text-lg text-left pl-4 py-2">
                      Subscription Status
                    </th>
                    <th className="w-[200px] font-normal text-lg text-left pl-4 py-2">
                      Is Archived
                    </th>
                    <th className="w-[200px] font-normal text-lg text-left pl-4 py-2">
                      Date Added
                    </th>
                    <th className="w-[200px] font-normal text-lg text-left pl-4 py-2">
                      Date Updated
                    </th>
                    <th className="w-[100px] font-normal text-lg text-left pl-4 py-2">
                      Source
                    </th>
                    <th className="w-[50px] text-left pl-4 py-2"></th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {contacts.map((contact) => (
                    <tr key={contact.id} className="cursor-pointer">
                      <td
                        className="sticky left-0 z-10 bg-white text-left pl-4 py-2"
                        onClick={(e) => {
                          setUserDetails(true);
                        }}
                      >
                        {contact.firstName}
                      </td>
                      <td
                        className="sticky left-[200px] z-10 bg-white text-left pl-4 py-2"
                        onClick={(e) => {
                          setUserDetails(true);
                        }}
                      >
                        {contact.lastName}
                      </td>
                      <td
                        className="text-left pl-4 py-2"
                        onClick={(e) => {
                          setUserDetails(true);
                        }}
                      >
                        {contact.personType}
                      </td>
                      <td
                        className="text-left pl-4 py-2"
                        onClick={(e) => {
                          setUserDetails(true);
                        }}
                      >
                        {contact.email}
                      </td>
                      <td
                        className="text-left pl-4 py-2"
                        onClick={(e) => {
                          setUserDetails(true);
                        }}
                      >
                        {contact.phoneNumber}
                      </td>
                      <td
                        className="text-left pl-4 py-2"
                        onClick={(e) => {
                          setUserDetails(true);
                        }}
                      >
                        {contact.whatsappNumber}
                      </td>
                      <td
                        className="text-left pl-4 py-2"
                        onClick={(e) => {
                          setUserDetails(true);
                        }}
                      >
                        {contact.sex}
                      </td>
                      <td
                        className="text-left pl-4 py-2"
                        onClick={(e) => {
                          setUserDetails(true);
                        }}
                      >
                        {contact.birthday}
                      </td>
                      <td
                        className="text-left pl-4 py-2"
                        onClick={(e) => {
                          setUserDetails(true);
                        }}
                      >
                        {contact.address}
                      </td>
                      <td
                        className="text-left pl-4 py-2"
                        onClick={(e) => {
                          setUserDetails(true);
                        }}
                      >
                        {contact.url}
                      </td>
                      <td
                        className="text-left pl-4 py-2"
                        onClick={(e) => {
                          setUserDetails(true);
                        }}
                      >
                        {contact.tags}
                      </td>
                      <td
                        className="text-left pl-4 py-2"
                        onClick={(e) => {
                          setUserDetails(true);
                        }}
                      >
                        {contact.subscriptionStatus}
                      </td>
                      <td
                        className="text-left pl-4 py-2"
                        onClick={(e) => {
                          setUserDetails(true);
                        }}
                      >
                        {contact.isArchived == true ? 'True' : 'False'}
                      </td>
                      <td
                        className="text-left pl-4 py-2"
                        onClick={(e) => {
                          setUserDetails(true);
                        }}
                      >
                        {contact.dateAdded}
                      </td>
                      <td
                        className="text-left pl-4 py-2"
                        onClick={(e) => {
                          setUserDetails(true);
                        }}
                      >
                        {contact.dateUpdated}
                      </td>
                      <td
                        className="text-left pl-4 py-2"
                        onClick={(e) => {
                          setUserDetails(true);
                        }}
                      >
                        {contact.source}
                      </td>
                      <td className="text-left py-2">
                        <Menu as="div" className="inline-block text-left">
                          <div>
                            <Menu.Button className="justify-center px-3 py-[4.5px] text-md">
                              <p className="text-gray-800  font-semibold text-xl">
                                <i className="ri-add-line"></i>
                              </p>
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-10 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="py-1">
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active ? ' ' : 'text-gray-700',
                                        'block px-4 py-2 text-md text-green-500 font-semibold text-center'
                                      )}
                                    >
                                      Options
                                    </a>
                                  )}
                                </Menu.Item>
                                <hr />
                                <Menu.Item>
                                  <div className="">
                                    <a
                                      href="#"
                                      className={classNames(
                                        'text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900'
                                      )}
                                      onClick={(e) => {
                                        setOpenTag(true);
                                      }}
                                    >
                                      Add Tags
                                    </a>
                                  </div>
                                </Menu.Item>

                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? 'bg-gray-100 text-gray-900'
                                          : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                      )}
                                      onClick={(e) => {
                                        setOpenSendMessage(true);
                                      }}
                                    >
                                      Message
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? 'bg-gray-100 text-gray-900'
                                          : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                      )}
                                      onClick={(e) => {
                                        setOpenArchive(true);
                                      }}
                                    >
                                      Archive
                                    </a>
                                  )}
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Transition.Root show={userDetails} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={setUserDetails}
          initialFocus={dialogRef}
        >
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
                          onClick={() => setUserDetails(false)}
                        >
                          <i className="ri-close-circle-line text-white"></i>
                        </div>
                      </div>
                    </Transition.Child>
                    <div
                      className="h-full flex-col overflow-y-scroll scrollbars bg-white shadow-xl pb-20"
                      ref={dialogRef}
                    >
                      <div className="">
                        {contacts.map((contact) => (
                          <>
                            <div className="flex flex-col pt-10 mb-2 items-center">
                              <div className="w-20 h-20 rounded-full bg-green-500 mb-4">
                                {contact.profilePic == '' ? (
                                  <>
                                    <div className="text-white w-full h-full flex items-center justify-center text-3xl">
                                      {contact.firstName.charAt(0)}
                                      {contact.lastName.charAt(0)}
                                    </div>
                                  </>
                                ) : (
                                  <></>
                                )}
                              </div>

                              <div className="flex flex-col items-center w-1/2">
                                <h1 className="text-xl">
                                  {contact.firstName} {contact.lastName}
                                </h1>
                                <div className="flex justify-between gap-2 mt-4">
                                  {contact.phoneNumber == '' ? (
                                    <></>
                                  ) : (
                                    <div
                                      className="rounded-full mb-4 w-10 h-10 flex items-center cursor-pointer"
                                      onClick={(e) => {
                                        handleMsgType2('SMS');
                                        setOpenSendMessage2(true);
                                      }}
                                    >
                                      <img
                                        src="../../images/sms_pic.svg"
                                        alt=""
                                        className=""
                                      />
                                    </div>
                                  )}
                                  {contact.whatsappNumber == '' ? (
                                    <></>
                                  ) : (
                                    <div
                                      className="rounded-full mb-4 w-10 h-10 flex items-center cursor-pointer"
                                      onClick={(e) => {
                                        handleMsgType2('Whatsapp');
                                        setOpenSendMessage2(true);
                                      }}
                                    >
                                      <img
                                        src="../../images/whatsapp_pic.svg"
                                        alt=""
                                        className=""
                                      />
                                    </div>
                                  )}
                                  {contact.email == '' ? (
                                    <></>
                                  ) : (
                                    <div
                                      className="rounded-full mb-4 w-10 h-10 flex items-center cursor-pointer"
                                      onClick={(e) => {
                                        handleMsgType2('Email');
                                        setOpenSendMessage2(true);
                                      }}
                                    >
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
                                      {contact.source}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-col justify-between mx-5 mb-12">
                              <div className="flex justify-between border-b pb-1 mb-5">
                                <h1>Basic information</h1>
                                <i
                                  className="text-xl ri-edit-line cursor-pointer"
                                  onClick={(e) => {}}
                                ></i>
                              </div>
                              <div>
                                <div className="flex flex-col">
                                  <div className="flex items-center mb-2">
                                    <div className="w-28 text-gray-500">
                                      Person Type:
                                    </div>
                                    <div className="text-lg">
                                      {contact.personType}
                                    </div>
                                  </div>
                                  <div className="flex items-center mb-2">
                                    <div className="w-28 text-gray-500">
                                      First Name:
                                    </div>
                                    <div className="text-lg">
                                      {contact.firstName}
                                    </div>
                                  </div>
                                  <div className="flex items-center mb-2">
                                    <div className="w-28 text-gray-500">
                                      Last Name:
                                    </div>
                                    <div className="text-lg">
                                      {contact.lastName}
                                    </div>
                                  </div>
                                  <div className="flex items-center mb-2">
                                    <div className="w-28 text-gray-500">
                                      Telephone:
                                    </div>
                                    <div className="text-lg">
                                      {contact.phoneNumber}
                                    </div>
                                  </div>
                                  <div className="flex items-center mb-2">
                                    <div className="w-28 text-gray-500">
                                      Sex:
                                    </div>
                                    <div className="text-lg">{contact.sex}</div>
                                  </div>
                                  <div className="flex items-center mb-2">
                                    <div className="w-28 text-gray-500">
                                      Email:
                                    </div>
                                    <div className="text-lg">
                                      {contact.email}
                                    </div>
                                  </div>
                                  <div className="flex items-center mb-2">
                                    <div className="w-28 text-gray-500">
                                      Birthday:
                                    </div>
                                    <div className="text-lg">
                                      {contact.birthday}
                                    </div>
                                  </div>
                                  <div className="flex items-center mb-2">
                                    <div className="w-28 text-gray-500">
                                      Url:
                                    </div>
                                    <div className="text-lg">{contact.url}</div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-col justify-between mx-5 mb-12">
                              <div className="flex justify-between border-b pb-1 mb-5">
                                <h1>Address information</h1>
                                <i className="text-xl ri-edit-line cursor-pointer"></i>
                              </div>
                              <div>
                                <div className="flex flex-col">
                                  <div className="flex items-center mb-2">
                                    <div className="w-28 text-gray-500">
                                      Address:
                                    </div>
                                    <div className="text-lg">None</div>
                                  </div>
                                  <div className="flex items-center mb-2">
                                    <div className="w-28 text-gray-500">
                                      City:
                                    </div>
                                    <div className="text-lg">None</div>
                                  </div>
                                  <div className="flex items-center mb-2">
                                    <div className="w-28 text-gray-500">
                                      State/Region:
                                    </div>
                                    <div className="text-lg">None</div>
                                  </div>
                                  <div className="flex items-center mb-2">
                                    <div className="w-28 text-gray-500">
                                      Country:
                                    </div>
                                    <div className="text-lg">None</div>
                                  </div>
                                  <div className="flex items-center mb-2">
                                    <div className="w-28 text-gray-500">
                                      Postal Code:
                                    </div>
                                    <div className="text-lg">None</div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-col justify-between mx-5 mb-12">
                              <div className="flex justify-between border-b pb-1 mb-5">
                                <h1>Tags & Segments</h1>
                                <div className=" w-4 h-4">
                                  <CreateTagModal />
                                </div>
                              </div>
                              <div className="flex gap-1">
                                {contact.tags.map((tag, index) => (
                                  <div
                                    className="flex items-center border border-gray-500 rounded-full px-2 gap-2"
                                    key={index}
                                  >
                                    {tag}
                                    <i className="ri-close-line cursor-pointer"></i>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </>
                        ))}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openSendMessage2} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setOpenSendMessage2(openSendMessage2)}
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white  px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                  {contacts.map((item) => (
                    <>
                      <div
                        className="absolute right-0 top-0 m-4 text-3xl cursor-pointer"
                        onClick={() => setOpenSendMessage2(false)}
                      >
                        <i className="ri-close-circle-line text-gray-700"></i>
                      </div>
                      <center>
                        <h2 className="text-2xl">
                          {messageType2 == 'Whatsapp'
                            ? `${messageType2} message`
                            : `${messageType2}`}
                        </h2>
                      </center>
                      <div className="mt-5">
                        <hr />
                        <div className="mt-8 text-gray-400">
                          <div className="flex justify-between mb-2">
                            <select className="w-full py-2.5 border rounded mt-2 outline-none pl-3 text-black-900 text-black">
                              <option value="User 1" className="">
                                User 1
                              </option>
                              <option value="User 2" className="">
                                User 2
                              </option>
                              <option value="User 3" className="">
                                User 3
                              </option>
                            </select>
                          </div>
                          <br />
                          <div className="flex justify-between">
                            <label htmlFor="" className="text-black">
                              Your are about to send{' '}
                              {messageType2 == 'Whatsapp'
                                ? `a ${messageType2} message`
                                : `an ${messageType2}`}{' '}
                              to {item.firstName} {item.lastName}
                            </label>
                          </div>

                          <textarea
                            name=""
                            id=""
                            cols={30}
                            rows={10}
                            className="w-full py-2.5 pl-4 border border-gray-200 rounded-lg outline-none mt-2 text-black"
                            placeholder={
                              messageType2 == 'SMS'
                                ? `Type your message (maximum 180 characters)`
                                : `Type your message`
                            }
                          ></textarea>
                        </div>

                        <div className="mt-8 w-full">
                          <hr />
                          <div className="flex justify-end mt-5">
                            <button
                              id="button"
                              className="rounded bg-green-500 text-white px-4 py-2.5 "
                            >
                              Send
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openTag} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setOpenTag(openTag)}
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white pt-5 pb-4 text-left shadow-xl transition-all sm:p-6 w-1/3">
                  {contacts.map((item) => (
                    <>
                      <div
                        className="absolute right-0 top-0 m-4 text-3xl cursor-pointer"
                        onClick={() => setOpenTag(false)}
                      >
                        <i className="ri-close-circle-line text-gray-700"></i>
                      </div>
                      <center>
                        <h2 className="text-2xl">Modify Tags</h2>
                      </center>
                      <div className="mt-5">
                        <hr />
                        <div className="mt-8 text-gray-400">
                          <div className="flex justify-between">
                            <label htmlFor="" className="text-black">
                              Add or Delete Tags on {item.firstName}s contact
                            </label>
                          </div>

                          <input
                            className="w-full py-2.5 border rounded mt-2 outline-none pl-3 text-black-900 text-black"
                            type="text"
                            value={item.tags}
                          />
                        </div>

                        <div className="mt-8 w-full">
                          <hr />
                          <div className="flex justify-end mt-5">
                            <button
                              id="button"
                              className="rounded bg-green-500 text-white px-4 py-2.5 "
                            >
                              save
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openSendMessage} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setOpenSendMessage(openSendMessage)}
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white  px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                  {contacts.map((item) => (
                    <>
                      <div
                        className="absolute right-0 top-0 m-4 text-3xl cursor-pointer"
                        onClick={() => setOpenSendMessage(false)}
                      >
                        <i className="ri-close-circle-line text-gray-700"></i>
                      </div>
                      <center>
                        <h2 className="text-2xl">Send Message</h2>
                      </center>
                      <div className="mt-5">
                        <hr />
                        <div className="mt-8 text-gray-400">
                          <div className="flex justify-between mb-2">
                            <select
                              className="w-full py-2.5 border rounded mt-2 outline-none pl-3 text-black-900 text-black"
                              onChange={(e) => {
                                setMessageType(e.target.value);
                              }}
                            >
                              <option value="Whatsapp" className="">
                                Whatsapp
                              </option>
                              <option value="Email" className="">
                                Email
                              </option>
                              <option value="SMS" className="">
                                SMS
                              </option>
                            </select>
                          </div>
                          <br />
                          <div className="flex justify-between">
                            <label htmlFor="" className="text-black">
                              Your are about to send{' '}
                              {messageType == 'Whatsapp'
                                ? `a ${messageType} message`
                                : `an ${messageType}`}{' '}
                              to {item.firstName} {item.lastName}
                            </label>
                          </div>

                          <textarea
                            name=""
                            id=""
                            cols={30}
                            rows={10}
                            className="w-full py-2.5 pl-4 border border-gray-200 rounded-lg outline-none mt-2 text-black"
                            placeholder="Type your message"
                            onChange={(e) => {}}
                          ></textarea>
                        </div>

                        <div className="mt-8 w-full">
                          <hr />
                          <div className="flex justify-end mt-5">
                            <button
                              id="button"
                              className="rounded bg-green-500 text-white px-4 py-2.5 "
                            >
                              Send
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openArchive} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 "
          onClose={() => setOpenArchive(openArchive)}
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white pt-5 pb-4 text-left shadow-xl transition-all sm:p-6 w-80">
                  {contacts.map((item) => (
                    <>
                      <div
                        className="absolute right-0 top-0 m-4 text-3xl cursor-pointer"
                        onClick={() => setOpenArchive(false)}
                      >
                        <i className="ri-close-circle-line text-gray-700"></i>
                      </div>
                      <center>
                        <h2 className="text-2xl">Archive Contact</h2>
                      </center>
                      <div className="mt-5">
                        <hr />
                        <div className="flex justify-evenly">
                          <div className="flex flex-col mt-3 text-gray-400 px-5 ">
                            <div className="flex justify-evenly text-center mb-5">
                              <p className="text-black">
                                Are you sure you want to archive `&quot;`
                                {item.firstName} {item.lastName}s`&quot;`
                                contact?
                              </p>
                            </div>
                            <div className="flex justify-evenly ">
                              <div className="cursor-pointer py-2 px-10 border rounded-lg bg-red-500 text-white">
                                Confirm
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default People;
