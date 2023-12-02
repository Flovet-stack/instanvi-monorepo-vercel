import { ReactNode } from 'react';

type AuthLayoutProps = {
  children: ReactNode;
};

export const AuthLayout = ({
  children,
}: AuthLayoutProps) => {
  return (
    <>
      <div className="body">
        {/* header */}
        <div className="mx-auto max-w-8xl px-6 pt-5 lg:px-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-8 w-auto"
            src="/images/logo2.svg"
            alt=""
          />
          <div className="justify-center h-[90vh] w-full items-center flex ">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
