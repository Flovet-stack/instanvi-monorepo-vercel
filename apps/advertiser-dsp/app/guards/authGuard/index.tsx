'use client';

import { AppLoader } from '@instanvi-monorepo/ui-components';
import React, { ReactNode, useEffect, useState } from 'react';
import CryptoStorageHelper from '../../helpers/cryptoStorageHelper';
import {
  INSTANVI_STORAGE_ACCESS,
  INSTANVI_STORAGE_USER,
} from '../../constants';
import { useRouter, useSearchParams } from 'next/navigation';
import { getLoggedUser } from '../../api/auth.api';
import { Access } from '@instanvi/client';
import { appRoutes } from '../../routes';
import { useAppDispatch } from '../../lib/redux/hooks';
import { setUserState } from '../../lib/redux/slices/auth/auth.slice';

interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const searchParams = useSearchParams();
  const accessParam = searchParams.get('access');
  const refreshParam = searchParams.get('refresh') as string;
  const expiresParam = searchParams.get('expires') as string;
  const router = useRouter();
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const access: Access = CryptoStorageHelper.decryptAndRetrieve(
    INSTANVI_STORAGE_ACCESS
  ) as Access;

  const verify = async (access: Access) => {
    console.log('🚀 ~ file: index.tsx:35 ~ verify ~ Access:', access);
    try {
      const response = await getLoggedUser(access.accessToken);
      CryptoStorageHelper.encryptAndSave(INSTANVI_STORAGE_ACCESS, access);
      CryptoStorageHelper.encryptAndSave(INSTANVI_STORAGE_USER, response.data);
      // add user to state
      dispatch(setUserState(response.data));
      setShowLoader(false);
      if (accessParam && refreshParam && expiresParam) {
        router.push(appRoutes.HOME);
      }
    } catch (error) {
      //   redirect to auth app
      const authApp = process.env.AUTH_APP as string;
      window.location.replace(`${authApp}`);
    }
  };

  useEffect(() => {
    if (accessParam && refreshParam && expiresParam) {
      localStorage.removeItem(INSTANVI_STORAGE_USER);
      localStorage.removeItem(INSTANVI_STORAGE_ACCESS);
      const clientAccess: Access = {
        accessToken: accessParam,
        refreshToken: refreshParam,
        expires_in: expiresParam,
      };
      verify(clientAccess);
    } else {
      if (access) {
        verify(access);
      } else {
        //   redirect to auth app
        const authApp = process.env.AUTH_APP as string;
        window.location.replace(`${authApp}`);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (showLoader) {
    return (
      <div className="auth-loader">
        <AppLoader
          type="SpinnerRoundFilled"
          text={'Authenticating'}
          color="#043a08"
          size={50}
        />
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthGuard;
