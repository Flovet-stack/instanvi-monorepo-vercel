import { yupResolver } from '@hookform/resolvers/yup';
import { ForgotPasswordEmailDto } from '@instanvi/client/api';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { RootState } from '@/app/store';
import { CustomButton, InputField, PasswordResetTimer } from '@/components';
import { forgotPasswordByEmailThunk } from '@/redux/actions/authActions';

interface EmailFormProps {}

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

const EmailForm: React.FC<EmailFormProps> = () => {
  const dispatch = useAppDispatch();
  const { push } = useRouter();
  const authState = useAppSelector((store: RootState) => store.auth);
  const [showTimer, setShowTimer] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordEmailDto>({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data: ForgotPasswordEmailDto) => {
    setShowTimer(true);
    dispatch(forgotPasswordByEmailThunk(data)).then(() => {
      setShowSuccess(true);
    });
  };

  const goToOtp = () => {
    push('/auth/otp');
  };

  return (
    <>
      <div className="w-5/5  md:w-[500px] border border-gray-200 bg-white rounded-lg md:px-8 px-4">
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="my-16 md:my-16"
        >
          <h2 className="text-2xl font-bold mb-10">Reset Your account</h2>
          {showSuccess && (
            <div className="bg-green-50 border-green-300 px-4 py-4 mb-4 rounded-md">
              <h2>Success</h2>
              <p className="text-primary mb-2">
                An mail containing the requested code has been sent to the
                specified email
              </p>
              <p className="text-primary mb-2">
                Click next if you have received the code
              </p>
            </div>
          )}

          <InputField
            id="email"
            name="email"
            type="text"
            placeholder={'Email'}
            control={control}
            errors={errors}
          />
          {showTimer && (
            <div className="pt-2">
              <PasswordResetTimer
                expirationTime={130}
                onTimerEnd={(isExpired) => {
                  console.log(
                    '🚀 ~ file: index.tsx:58 ~ isExpired:',
                    isExpired
                  );
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
                text="Reset with email"
                theme="primary"
                type="submit"
                loading={authState.resetRequestStatus === 'loading'}
                disabled={
                  showTimer || authState.resetRequestStatus === 'loading'
                }
              />
            )}
            {(showTimer || showSuccess) && (
              <CustomButton
                text="Next"
                theme="primary"
                type="button"
                onClick={() => goToOtp()}
                icon={<i className="ri-arrow-right-fill"></i>}
                iconPosition="right"
                loading={authState.resetRequestStatus === 'loading'}
                disabled={authState.resetRequestStatus === 'loading'}
              />
            )}
          </div>
          {/* <div className="mt-8">
            <span className="text-sm">
              Reset with Phone number ?{' '}
              <a className="text-green-700" href="/auth/otp">
                here
              </a>
            </span>
          </div> */}
        </form>
      </div>
    </>
  );
};

export default EmailForm;
