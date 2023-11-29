import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ForgotPasswordEmailDto } from '@instanvi/client/api';
import { SpinnerCircular } from 'spinners-react';
import { useForgottenPassword } from '@/api/auth';

type EmailFormProps = {
  onSuccess: () => void;
};

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

const EmailForm = ({ onSuccess }: EmailFormProps) => {
  const sendCode = useForgottenPassword({ onSuccess });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordEmailDto>({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data: ForgotPasswordEmailDto) => {
    sendCode.submit(data);
  };

  // Collect data from here

  return (
    <>
      <div className="w-5/5  md:w-[28%] border border-gray-200 bg-white rounded-lg md:px-8 px-4">
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="my-16 md:my-16"
        >
          <h2 className="text-2xl font-bold">Reset Your account</h2>
          <div className="flex justify-center mt-10">
            <input
              type="text"
              {...register('email')}
              className="w-full py-2.5 border border-gray-200  rounded-lg outline-none pl-2"
              placeholder="Email"
            />
          </div>
          <div>
            <p
              className=""
              style={{ color: 'rgb(206, 8, 8)', fontSize: '12px' }}
            >
              {errors.email?.message}
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <button
              id="button"
              className="w-full py-2.5 border text-white bg-black border-gray-200 rounded-lg outline-none pl-2"
              type="submit"
            >
              {sendCode.isLoading ? (
                <div className="w-full justify-center flex">
                  <SpinnerCircular
                    color="white"
                    style={{ height: 24, width: 24 }}
                  />
                </div>
              ) : (
                'Reset with email'
              )}
            </button>
          </div>
          <div className="mt-8">
            <span className="text-sm">
              Reset with Phone number ?{' '}
              <a className="text-green-700" href="/auth/otp">
                here
              </a>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default EmailForm;
