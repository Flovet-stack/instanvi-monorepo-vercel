/* eslint-disable @nx/enforce-module-boundaries */
'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  CustomButton,
  ControllerInput,
} from '@instanvi-monorepo/ui-components';
import { SuccessLoginDto } from '@instanvi/client';
import { loginUser } from 'apps/instanvi-auth/app/api/auth.api';
import CryptoStorageHelper from 'apps/instanvi-auth/app/helpers/cryptoStorageHelper';
import {
  INSTANVI_STORAGE_ACCESS,
  INSTANVI_STORAGE_USER,
} from 'apps/instanvi-auth/app/constants';
import { authRoutes } from 'apps/instanvi-auth/app/routes';
import { ILoginFormData } from 'apps/instanvi-auth/app/@types';

type LoginFormProps = {
  showAlts?: true;
  showRemember?: true;
  showForgot?: true;
};

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const LoginForm: React.FC<LoginFormProps> = ({
  showAlts,
  showRemember,
  showForgot,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // sign in with google
  const SignInWithGoogle = () => {
    // signIn('google');
  };

  // sign in with facebook
  const SignInWithFacebook = () => {
    // signIn('facebook');
  };

  const onSubmitHandler = async (data: ILoginFormData) => {
    setIsLoading(true);
    loginUser(data)
      .then((response) => {
        const responseData: SuccessLoginDto = response.data;
        const { user, access } = responseData;

        // save user and access to local storage
        localStorage.setItem(INSTANVI_STORAGE_USER, JSON.stringify(user));
        CryptoStorageHelper.encryptAndSave(INSTANVI_STORAGE_USER, user);
        CryptoStorageHelper.encryptAndSave(INSTANVI_STORAGE_ACCESS, access);

        //   redirect to respective instanvi app
        const advertiserApp = process.env.DSP_APP as string;
        window.location.replace(
          `${advertiserApp}?access=${access.accessToken}&refresh=${access.refreshToken}&expires=${access.expires_in}`
        );

        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };

  return (
    <div className="w-5/5  md:w-[500px] border border-gray-200 bg-white rounded-lg md:px-8 px-4">
      <form className="my-16 md:my-16" onSubmit={handleSubmit(onSubmitHandler)}>
        <h2 className="text-2xl font-bold mb-4">Login to your account</h2>
        <div className="mt-10">
          <ControllerInput
            id="email"
            name="email"
            type="text"
            placeholder={'Email'}
            control={control}
            errors={errors}
          />
        </div>
        <div className=" pt-4">
          <ControllerInput
            name="password"
            type="password"
            placeholder={'Password'}
            control={control}
            errors={errors}
          />
        </div>
        {(showRemember || showForgot) && (
          <div className="flex justify-between pt-4">
            {showRemember && (
              <div className="flex items-center">
                <ControllerInput
                  id="remember"
                  name="remember"
                  type="checkbox"
                  control={control}
                  errors={errors}
                  label={'Remember Me'}
                  checkbox
                />
              </div>
            )}
            {showForgot && (
              <div className="text-green-700">
                <Link href={authRoutes.EMAIL_RESET}>Forgot Password?</Link>
              </div>
            )}
          </div>
        )}
        <div className="flex justify-center mt-8">
          <CustomButton
            text="Sign In with Email"
            theme="primary"
            loadingText="Signing in"
            loading={isLoading}
            disabled={isLoading}
            type="submit"
            fullWidth
          />
        </div>
        {showAlts && (
          <>
            <div className="px-4 mt-5">
              <div className="flex items-center py-4">
                <div className="flex-grow h-px bg-gray-200"></div>

                <span className="px-2 text-sm -mt-0.5">Or login with</span>

                <div className="flex-grow h-px bg-gray-200"></div>
              </div>
            </div>
            <div className="flex justify-between mt-2 w-full">
              <div className="flex justify-center h-12 mr-1 w-[50%]">
                <CustomButton
                  text="google"
                  theme="border-light"
                  // icon={
                  //   <img src="/images/google.svg" className="h-4 w-4" alt="" />
                  // }
                  type="button"
                  onClick={() => {
                    SignInWithGoogle();
                  }}
                  fullWidth
                />
              </div>
              <div className="flex justify-center h-12 ml-1 w-[50%]">
                <CustomButton
                  text="google"
                  theme="border-light"
                  icon={<i className="ri-facebook-fill text-blue-600"></i>}
                  type="button"
                  onClick={() => {
                    SignInWithFacebook();
                  }}
                  fullWidth
                />
              </div>
            </div>
          </>
        )}
      </form>
    </div>
  );
};
