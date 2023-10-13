import { ReactNode } from 'react';

type AuthLayoutProps = {
  children: ReactNode;
};

export const AuthLayout = ({
  children,
}: AuthLayoutProps) => {
  return (
    <>
      <div className="body h-screen">
        {/* header */}
        <div className="mx-auto max-w-8xl px-6 pt-5 lg:px-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-5 w-auto"
            src="/images/logo2.svg"
            alt=""
          />
          <div className="justify-center flex mt-10 md:mt-28">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
