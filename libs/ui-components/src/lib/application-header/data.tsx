import type { MenuProps } from 'antd';

export const navigationItems: MenuProps['items'] = [
  {
    label: 'Home',
    key: '',
  },
  {
    label: <span className="pr-4">Audience</span>,
    key: 'audience',
    children: [
      {
        label: 'Persona',
        key: 'persona',
      },
      {
        label: 'List',
        key: 'list',
      },
      {
        label: 'Contact',
        key: 'contact',
      },
    ],
  },
  {
    label: <span className="pr-4">Publish</span>,
    key: 'publish',
    children: [
      {
        label: 'Campaign',
        key: 'campaign',
      },
      {
        label: 'Publisher',
        key: 'publisher',
      },
    ],
  },
  {
    label: <span className="pr-4">Messaging</span>,
    key: 'messaging',
    children: [
      {
        label: 'People',
        key: 'people',
      },
      {
        label: 'Broadcast',
        key: 'broadcast',
      },
    ],
  },
  {
    label: 'Creative',
    key: 'creative',
  },
  {
    label: 'Calendar',
    key: 'calendar',
  },
  {
    label: 'Leads',
    key: 'leads',
  },
  {
    label: <span className="pr-4">Tools</span>,
    key: 'tools',
    children: [
      {
        label: 'USSD',
        key: 'uSSD',
      },
      {
        label: 'Forms',
        key: 'forms',
      },
      {
        label: 'Voice',
        key: 'voice',
      },
      {
        label: 'Links',
        key: 'links',
      },
      {
        label: 'QR code',
        key: 'qr-code',
      },
    ],
  },
  {
    label: <span className="pr-4">Data</span>,
    key: 'data',
    children: [
      {
        label: 'Marketplace',
        key: 'marketplace',
      },
      {
        label: 'Surveys',
        key: 'surveys',
      },
    ],
  },
  {
    label: 'Settings',
    key: 'settings',
  },
];
