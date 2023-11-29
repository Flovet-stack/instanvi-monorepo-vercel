import { Access } from '@instanvi/client';
import { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import React, { ReactNode, useEffect, useState } from 'react';

import getAuthUser from '@/api/auth/get-auth-user';
import { AppLoader } from '@/components';
import {
  INSTANVI_STORAGE_ACCESS,
  INSTANVI_STORAGE_USER,
} from '@/configs/constants';
import CryptoStorageHelper from '@/helpers/cryptoStorageHelper';

interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const [showLoader, setShowLoader] = useState<boolean>(true);
  const router = useRouter();

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
        setShowLoader(false);
        // router.push('/');
      })
      .catch(() => {
        router.push('/auth/login');
      });
  };

  useEffect(() => {
    if (access) {
      authenticate();
    } else {
      router.push('/auth/login');
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
  return <div>{children}</div>;
};

export default AuthGuard;
