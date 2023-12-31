import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid';
import { CustomButton, Pill } from '@instanvi-monorepo/ui-components';
import { Dropdown, MenuProps } from 'antd';
import { ColumnsType } from 'antd/es/table';

interface DataType {
  key: React.Key;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  whatsappNumber: string;
  birthday: string;
  address: string;
  tags: string[];
  subscriptionStatus: string;
  isArchived: boolean;
  dateAdded: string;
  dateUpdated: string;
  source: 'USSD' | 'Call';
}

export const data: DataType[] = [
  {
    key: 1,
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
    key: 2,
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
    key: 3,
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
    key: 4,
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
    key: 5,
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
    key: 6,
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

export const columns: ColumnsType<DataType> = [
  {
    title: 'First name',
    width: 130,
    dataIndex: 'firstName',
    key: 'firstName',
    fixed: 'left',
  },
  {
    title: 'Last name',
    width: 130,
    dataIndex: 'lastName',
    key: 'lastName',
    fixed: 'left',
  },
  {
    title: 'Email',
    width: 200,
    dataIndex: 'email',
    key: 'email',
    // fixed: 'left',
    sorter: true,
  },
  {
    title: 'Phone number',
    width: 150,
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
  },
  {
    title: 'Whatsapp number',
    width: 170,
    dataIndex: 'whatsappNumber',
    key: 'whatsappNumber',
  },
  { title: 'Birthday', width: 130, dataIndex: 'birthday', key: 'birthday' },
  { title: 'Address', width: 200, dataIndex: 'address', key: 'address' },
  {
    title: 'Status',
    width: 150,
    dataIndex: 'subscriptionStatus',
    key: 'subscriptionStatus',
    render: (_, record) => {
      return (
        <Pill
          text={record.subscriptionStatus}
          type={
            record.subscriptionStatus === 'Subscribed' ? 'primary' : 'default'
          }
        />
      );
    },
  },
  {
    title: 'Is archived',
    width: 150,
    dataIndex: 'isArchived',
    key: 'isArchived',
    render: (_, record) => {
      return (
        <Pill
          text={record.isArchived ? 'Archived' : 'Not archived'}
          type={record.isArchived ? 'brown' : 'default'}
        />
      );
    },
  },
  { title: 'Date added', width: 170, dataIndex: 'dateAdded', key: 'dateAdded' },
  {
    title: 'dateUpdated',
    width: 170,
    dataIndex: 'dateUpdated',
    key: 'dateUpdated',
  },
  { title: 'Source', width: 130, dataIndex: 'source', key: 'source' },
  {
    title: 'Actions',
    key: 'operation',
    // fixed: 'right',
    width: 100,
    render: () => (
      <div className="table-options">
        <Dropdown menu={{ items }} placement="bottomRight" trigger={['click']}>
          <CustomButton
            theme="white-light"
            icon={
              <EllipsisHorizontalIcon className="h-4 w-4" aria-hidden="true" />
            }
          />
        </Dropdown>
      </div>
    ),
  },
];

const items: MenuProps['items'] = [
  {
    key: '1',
    label: <div style={{ minWidth: '100px' }}>Add tags</div>,
  },
  {
    key: '2',
    label: <div style={{ minWidth: '100px' }}>Message</div>,
  },
  {
    key: '3',
    label: <div style={{ minWidth: '100px' }}>Archive</div>,
  },
];
