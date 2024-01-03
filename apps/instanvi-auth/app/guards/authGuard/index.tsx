'use client';

import { AppLoader } from '@instanvi-monorepo/ui-components';
import React, { ReactNode, useEffect, useState } from 'react';
import CryptoStorageHelper from '../../helpers/cryptoStorageHelper';
import {
  INSTANVI_STORAGE_ACCESS,
  INSTANVI_STORAGE_USER,
} from '../../constants';
import { getLoggedUser } from '../../api/auth.api';
import { Access } from '@instanvi/client';
import { useRouter, useSearchParams } from 'next/navigation';
import { authRoutes } from '../../routes';

interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const [showAuth, setShowAuth] = useState<boolean>(false);
  const router = useRouter();
  const params = useSearchParams();
  const clearParam = params.get('clear');
  console.log('🚀 ~ file: index.tsx:22 ~ clearParam:', clearParam);

  const access: Access = CryptoStorageHelper.decryptAndRetrieve(
    INSTANVI_STORAGE_ACCESS
  ) as Access;

  const verify = (access: Access) => {
    getLoggedUser(access.accessToken)
      .then((response) => {
        CryptoStorageHelper.encryptAndSave(INSTANVI_STORAGE_ACCESS, access);
        CryptoStorageHelper.encryptAndSave(
          INSTANVI_STORAGE_USER,
          response.data
        );
        //   redirect to respective instanvi app
        const advertiserApp = process.env.DSP_APP as string;
        // const advertiserApp = process.env.SSP_APP as string;
        window.location.replace(
          `${advertiserApp}?access=${access.accessToken}&refresh=${access.refreshToken}&expires=${access.expires_in}`
        );
      })
      .catch((error) => {
        localStorage.removeItem(INSTANVI_STORAGE_USER);
        localStorage.removeItem(INSTANVI_STORAGE_ACCESS);
        setShowAuth(true);
        console.log('🚀 ~ file: index.tsx:21 ~ getLoggedUser ~ error:', error);
      });
  };

  useEffect(() => {
    if (clearParam) {
      localStorage.removeItem(INSTANVI_STORAGE_USER);
      localStorage.removeItem(INSTANVI_STORAGE_ACCESS);
      router.push(authRoutes.LOGIN);
      setShowAuth(true);
    } else {
      if (access) {
        verify(access);
        console.log('getting from local storage');
      } else {
        setShowAuth(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (showAuth) {
    return <>{children}</>;
  }

  return (
    <div className="auth-loader">
      <AppLoader
        type="SpinnerRoundFilled"
        text={'Please wait'}
        color="#043a08"
        size={50}
      />
    </div>
  );
};

export default AuthGuard;
