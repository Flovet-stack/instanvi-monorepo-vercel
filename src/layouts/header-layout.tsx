import React, { FC, Fragment, useState, useEffect, ReactNode } from 'react';
import { Menu, Popover, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import Menus from './menu';
import AuthGuard from '@/guards/AuthGuard';

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

interface User {
  imageUrl: string;
}

interface UserNavigationItem {
  name: string;
  href: string;
}

const user: User = {
  imageUrl: '',
};

const userNavigation: UserNavigationItem[] = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

type HeadLayoutProps = {
  children: ReactNode;
};

export const HeaderLayout = ({ children }: HeadLayoutProps) => {
  const [show, setShow] = useState<any>('');
  const [bgColor, setBgColor] = useState<string>('');
  const { asPath }: any = useRouter();

  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem('amoutHide'))
      localStorage.setItem('amoutHide', 'false');
    var str: any = asPath;
    var res: any[] = str.split('/');
    setBgColor(res[2]);
    const store = localStorage.getItem('amoutHide');
    setShow(store);
    console.log(res[2]);
  }, []);

  const showShow = (e: React.MouseEvent<HTMLButtonElement>) => {
    localStorage.setItem('amoutHide', 'true');
    // router.reload(asPath);
  };

  const hideShow = (e: React.MouseEvent<HTMLButtonElement>) => {
    localStorage.setItem('amoutHide', 'false');
    // router.reload(asPath);
  };

  return (
    <AuthGuard>
      <Popover
        as="header"
        className={({ open }) =>
          classNames(
            open ? 'fixed inset-0 z-40 overflow-y-none' : '',
            'bg-white shadow-sm border-b border lg:static lg:overflow-y-none'
          )
        }
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-8xl px-4 sm:px-12 lg:px-12">
              <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
                <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-3">
                  <div className="flex flex-shrink-0 items-center">
                    <a href="#">
                      <img
                        className="h-8 w-auto"
                        src="/images/logo2.svg"
                        alt="Your Company"
                      />
                    </a>
                  </div>
                </div>
                <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-5">
                  <div className="flex justify-center items-center px-6 py-4 md:mx-auto md:max-w-2xl lg:mx-0 lg:max-w-none xl:px-0">
                    <div className="w-2/3 ">
                      <label htmlFor="search" className="sr-only">
                        Search
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <MagnifyingGlassIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </div>
                        <input
                          id="search"
                          name="search"
                          className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  "
                          placeholder="Search Contacts, Campaigns, Data and Publisher"
                          type="search"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden">
                  {/* Mobile menu button */}
                  <Popover.Button className="-mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Popover.Button>
                </div>
                <div className="hidden ml-1 lg:flex lg:items-center lg:justify-end xl:col-span-4">
                  <div className="flex ml-1">
                    <a
                      href="/publisher/wallet/wallet"
                      className="  inline-flex items-center rounded-l-md bg-gray-200 px-4 py-2 text-sm   "
                    >
                      <i className="ri-add-circle-fill text-lg   mr-1"></i>
                      Top&nbsp;up
                    </a>
                    <div
                      id="button"
                      className="  inline-flex items-center  bg-green-500 px-3 py-2 text-lg text-white   "
                    >
                      <a href="#" className="mr-2">
                        {show == 'false' ? (
                          <>XAF&nbsp;685,000 </>
                        ) : (
                          <>XAF&nbsp;----,---</>
                        )}
                      </a>
                      {/* <div onClick={show ? hideShow : showShow} className="cursor-pointer">
                        <i className={show ? "ri-eye-off-line" : "ri-eye-line"}></i>
                      </div> */}
                    </div>
                    <a
                      href="#"
                      className="  inline-flex items-center rounded-r-md bg-gray-200 px-4 py-2 text-sm   "
                    >
                      Basic
                    </a>
                  </div>
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-4 flex-shrink-0">
                    <div className="flex">
                      <Menu.Button className="flex rounded-full bg-white ">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-10 w-10 rounded-full"
                          src={user.imageUrl}
                          alt=""
                        />
                      </Menu.Button>
                      <div className="mx-2 flex">
                        <p className="text-xl mt-2  ">Bickdrim</p>
                        <i className="ri-checkbox-circle-fill   text-green-700 mt-3 ml-3 text-md"></i>
                      </div>
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
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
            <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
              <div className="mx-auto max-w-3xl space-y-1 px-2 pb-3 pt-2 sm:px-4"></div>
              <div className="border-t border-gray-200 pb-3 pt-4">
                <div className="mx-auto flex max-w-3xl items-center px-4 sm:px-6">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.imageUrl}
                      alt=""
                    />
                  </div>
                  <button
                    type="button"
                    className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mx-auto mt-3 max-w-3xl space-y-1 px-2 sm:px-4">
                  {userNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
      <Menus />
      <hr />
      {children}
    </AuthGuard>
  );
};
