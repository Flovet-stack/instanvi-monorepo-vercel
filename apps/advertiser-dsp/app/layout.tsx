'use client';

import { ApplicationHeader } from '@instanvi-monorepo/ui-components';
import AuthGuard from './guards/authGuard';
import { StateProvider } from './lib/redux/StateProvider';
import './global.css';
import 'antd/es/app/style/index';
import StyledComponentsRegistry from './lib/AntdRegistry';

// export const metadata = {
//   title: 'Welcome to advertiser-dsp',
//   description: 'Generated by create-nx-workspace',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StateProvider>
          <AuthGuard>
            <ApplicationHeader />
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </AuthGuard>
        </StateProvider>
      </body>
    </html>
  );
}