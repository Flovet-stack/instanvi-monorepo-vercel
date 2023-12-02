import { Access } from '@instanvi/client';
import { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';

import getAuthUser from '@/api/auth/get-auth-user';
import { AppLoader } from '@/components';
import {
  INSTANVI_STORAGE_ACCESS,
  INSTANVI_STORAGE_USER,
} from '@/configs/constants';
import CryptoStorageHelper from '@/helpers/cryptoStorageHelper';

type AuthLayoutProps = {
  children: ReactNode;
};

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  const router = useRouter();
  const [showLoader, setShowLoader] = useState<boolean>(true);

  const access: Access = CryptoStorageHelper.decryptAndRetrieve(
    INSTANVI_STORAGE_ACCESS
  ) as Access;

  const authenticate = async () => {
    await getAuthUser()
      .then((res: AxiosResponse) => {
        CryptoStorageHelper.encryptAndSave(
          INSTANVI_STORAGE_USER,
          res.data.data
        );
        router.push('/');
        // setShowLoader(false);
      })
      .catch(() => {
        setShowLoader(false);
      });
  };

  useEffect(() => {
    if (access) {
      authenticate();
    } else {
      setShowLoader(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (showLoader) {
    return (
      <div className="auth-loader">
        <AppLoader
          type="SpinnerRoundOutlined"
          color="#065e0c"
          size={40}
          text="Initializing..."
        />
      </div>
    );
  }

  return (
    <>
      <div className="body">
        {/* header */}
        <div className="mx-auto max-w-8xl px-6 pt-5 lg:px-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="h-8 w-auto" src="/images/logo2.svg" alt="" />
          <div className="justify-center h-[90vh] w-full items-center flex  ">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
