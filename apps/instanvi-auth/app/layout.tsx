import Image from 'next/image';
import './global.css';
import 'tailwindcss/tailwind.css';
import { ToastWrapper } from './components';
import AuthGuard from './guards/authGuard';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Welcome to instanvi-auth',
  description: 'Generated by create-nx-workspace',
};

interface RootLayoutProps {
  children: ReactNode;
  types: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ToastWrapper />
        <AuthGuard>
          <div className="mx-auto max-w-8xl px-6 pt-5 lg:px-8">
            <Image
              className="h-8 w-auto"
              src="/images/logo2.svg"
              alt=""
              width={100}
              height={35}
            />
            <div className="justify-center h-[90vh] w-full items-center flex  ">
              {children}
            </div>
          </div>
        </AuthGuard>
      </body>
    </html>
  );
}
