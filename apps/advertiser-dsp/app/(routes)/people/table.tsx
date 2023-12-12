import React from 'react';

export default function Table() {
  const contacts = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@gmail.com',
      phoneNumber: '688720586',
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

  return (
    <div className="overflow-auto m-5 border scrolls">
      <table className="w-full table-fixed divide-y">
        <thead className="">
          <tr>
            <th className="sticky left-0 z-10 bg-white text-left pl-4 py-2 w-[200px]">
              First Name
            </th>
            <th className="sticky left-[200px] z-10 bg-white text-left pl-4 py-2 w-[200px]">
              Last Name
            </th>
            <th className="w-[200px] text-left pl-4 py-2">Email</th>
            <th className="w-[200px] text-left pl-4 py-2">Phone Number</th>
            <th className="w-[200px] text-left pl-4 py-2">Whatsapp Number</th>
            <th className="w-[200px] text-left pl-4 py-2">Birthday</th>
            <th className="w-[200px] text-left pl-4 py-2">Address</th>
            <th className="w-[200px] text-left pl-4 py-2">Tags</th>
            <th className="w-[200px] text-left pl-4 py-2">
              Subscription Status
            </th>
            <th className="w-[200px] text-left pl-4 py-2">Is Archived</th>
            <th className="w-[200px] text-left pl-4 py-2">Date Added</th>
            <th className="w-[200px] text-left pl-4 py-2">Date Updated</th>
            <th className="w-[200px] text-left pl-4 py-2">Source</th>
            <th className="w-[50px] text-left pl-4 py-2">plus</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {contacts.map((item) => (
            <tr key={item.id}>
              <td className="sticky left-0 z-10 bg-white text-left pl-4 py-2">
                {item.firstName}
              </td>
              <td className="sticky left-[200px] z-10 bg-white text-left pl-4 py-2">
                {item.lastName}
              </td>
              <td className="text-left pl-4 py-2">{item.email}</td>
              <td className="text-left pl-4 py-2">{item.phoneNumber}</td>
              <td className="text-left pl-4 py-2">{item.whatsappNumber}</td>
              <td className="text-left pl-4 py-2">{item.birthday}</td>
              <td className="text-left pl-4 py-2">{item.address}</td>
              <td className="text-left pl-4 py-2">{item.tags}</td>
              <td className="text-left pl-4 py-2">{item.subscriptionStatus}</td>
              <td className="text-left pl-4 py-2">
                {item.isArchived == true ? 'True' : 'False'}
              </td>
              <td className="text-left pl-4 py-2">{item.dateAdded}</td>
              <td className="text-left pl-4 py-2">{item.dateUpdated}</td>
              <td className="text-left pl-4 py-2">{item.source}</td>
              <td className="text-left pl-4 py-2">X</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
