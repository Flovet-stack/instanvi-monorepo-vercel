import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import { TableLeads } from '../../types';

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function TableLeads(props: TableLeads) {
  const { leads, setLeadDetail, handleId } = props;
  const columns = [
    'Client Name',
    'Company',
    'Comments',
    'Campaigns',
    'Referrer',
    'Contact',
    'Deal Stage',
    'Closing Date',
    'Actions',
  ];

  return (
    <table className="min-w-full divide-y divide-gray-300">
      <thead>
        <tr>
          {columns?.map((column, key) => (
            <th
              key={key}
              scope="col"
              className="py-2.5 text-lg  text-gray-900 text-left"
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {leads.map((lead, index) => {
          const columnsData = [
            `${lead.firstName} ${lead.lastName}`,
            lead.company,
            lead.comments,
            lead.comments,
            lead.campaign,
            lead.refferer,
            lead.contact,
            lead.dealStage,
            lead.closingDate,
          ];
          return (
            <tr key={index} className="py-4 cursor-pointer">
              {columnsData?.map((data, key) => (
                <td
                  key={key}
                  onClick={(e) => {
                    setLeadDetail(true);
                    handleId(e, index);
                  }}
                  className="whitespace-nowrap py-4 text-lg text-gray-500 text-left"
                >
                  {data}
                </td>
              ))}

              <td className="whitespace-nowrap px-3 py-4 text-lg text-gray-500 text-left">
                <Menu as="div" className=" inline-block text-left ">
                  <div>
                    <Menu.Button className="flex items-center  text-gray-400 hover:text-gray-600  ">
                      <span className="sr-only">Open options</span>
                      <EllipsisVerticalIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
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
                    <Menu.Items className="absolute md:right-8xl right-5xl -ml-24 z-50 mt-2 w-24 origin-top-right bg-gray-300 text-white">
                      <div className="py-0">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? 'bg-gray-300 text-gray-100 '
                                  : 'text-white',
                                'block px-2 py-2 text-md border-b border-white'
                              )}
                            >
                              <div className="flex">
                                <i className="ri-file-copy-line"></i>
                                <span className="ml-2 text-md"> Clone</span>
                              </div>
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? 'bg-gray-300 text-gray-100 '
                                  : 'text-white',
                                'block px-2 py-2 text-md border-b border-white'
                              )}
                            >
                              <div className="flex">
                                <i className="ri-edit-line"></i>
                                <span className="ml-2 text-md"> Edit</span>
                              </div>
                            </a>
                          )}
                        </Menu.Item>
                        <form method="POST" action="#">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? 'bg-gray-300 text-gray-100 '
                                    : 'text-white',
                                  'block px-2 py-2 text-md border-b border-white'
                                )}
                              >
                                <div className="flex">
                                  <i className="ri-delete-bin-6-line"></i>
                                  <span className="ml-2 text-md"> Delete</span>
                                </div>
                              </a>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
