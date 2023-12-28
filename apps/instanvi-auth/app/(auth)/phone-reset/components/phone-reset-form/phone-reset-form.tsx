'use client';

import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  ControllerInput,
  CustomButton,
  RequestActionTimer,
} from '@instanvi-monorepo/ui-components';
import { ForgotPasswordPhoneDto } from '@instanvi/client';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { authRoutes } from 'apps/instanvi-auth/app/routes';

const schema = yup.object().shape({
  phone: yup.string().required(),
});

const PhoneResetForm = () => {
  const [showTimer, setShowTimer] = useState<boolean>(false);
  const [showSuccess] = useState<boolean>(false);
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordPhoneDto>({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data: ForgotPasswordPhoneDto) => {
    console.log(
      '🚀 ~ file: email-reset-form.tsx:27 ~ onSubmitHandler ~ data:',
      data
    );
    setShowTimer(true);
    // dispatch(forgotPasswordByEmailThunk(data)).then(() => {
    //   setShowSuccess(true);
    // });
  };

  const goToOtp = () => {
    // push('/auth/otp');
  };

  const backToHome = () => {
    router.push(authRoutes.LOGIN);
  };

  return (
    <div className="w-5/5  md:w-[500px] border border-gray-200 bg-white rounded-lg md:px-8 px-4">
      <form onSubmit={handleSubmit(onSubmitHandler)} className="my-16 md:my-16">
        <h2 className="text-2xl font-bold mb-10">Reset Your account</h2>
        {showSuccess && (
          <div className="bg-green-50 border-green-300 px-4 py-4 mb-4 rounded-md">
            <h2>Success</h2>
            <p className="text-primary mb-2">
              A mail containing the requested code has been sent to the
              specified email
            </p>
            <p className="text-primary mb-2">
              Click next if you have received the code
            </p>
          </div>
        )}

        <ControllerInput
          id="phone"
          name="phone"
          type="text"
          placeholder={'Phone'}
          control={control}
          errors={errors}
        />
        {showTimer && (
          <div className="pt-2">
            <RequestActionTimer
              expirationTime={130}
              keyName="PhoneResetTimer"
              onTimerEnd={(isExpired) => {
                if (isExpired) {
                  setShowTimer(false);
                }
              }}
            />
          </div>
        )}
        <div className="flex flex-col justify-center mt-4">
          {!showTimer && (
            <CustomButton
              text="Reset with phone"
              theme="primary"
              type="submit"
              //   loading={authState.resetRequestStatus === 'loading'}
              //   disabled={showTimer || authState.resetRequestStatus === 'loading'}
            />
          )}
          <div className="mt-2">
            <CustomButton
              text="back to home"
              theme="primary-light"
              type="button"
              fullWidth
              onClick={() => backToHome()}
            />
          </div>
          {(showTimer || showSuccess) && (
            <CustomButton
              text="Next"
              theme="primary"
              type="button"
              onClick={() => goToOtp()}
              icon={<i className="ri-arrow-right-fill"></i>}
              iconPosition="right"
              //   loading={authState.resetRequestStatus === 'loading'}
              //   disabled={authState.resetRequestStatus === 'loading'}
            />
          )}
        </div>
        <div className="mt-8">
          <span className="text-sm">
            Reset with email ?{' '}
            <Link
              className="color-primary hover:underline"
              href={authRoutes.EMAIL_RESET}
            >
              here
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default PhoneResetForm;
