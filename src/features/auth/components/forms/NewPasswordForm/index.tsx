import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface NewPasswordFormProps {}

interface FormValues {
  newPassword: string;
  confirmPassword: string;
}

const NewPasswordForm: React.FC<NewPasswordFormProps> = () => {
  // Collect data from here

  const { register, handleSubmit } = useForm<FormValues>();
  const [data, setData] = useState<string>('');

  return (
    <>
      <div className="w-full">
        <div className="justify-center flex mt-28 md:mt-48">
          <form
            onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
            className="w-full  md:w-[28%] border border-gray-200 bg-white rounded-lg md:px-8 px-4"
          >
            <Link href="/auth/login">
              <div className="flex justify-end w-full mt-5">
                <button className="flex font-semibold">
                  <i className="ri-close-fill  mr-3"></i>
                  <span>Back</span>
                </button>
              </div>
            </Link>
            <div className="mt-5 mb-5">
              <h2 className="text-2xl font-bold">Enter verification code</h2>
              <span className="text-sm mt-2">
                Please enter a new password. Your new password must be different
                from previous password.
              </span>
            </div>
            <div className="flex justify-center mt-5">
              <input
                type="password"
                {...register('newPassword')}
                className="w-full py-2 border border-gray-200  rounded-lg outline-none pl-2"
                placeholder="New Password"
              />
            </div>
            <div className="flex justify-center mb-4 mt-5">
              <input
                type="password"
                {...register('confirmPassword')}
                className="w-full py-2 border border-gray-200  rounded-lg outline-none pl-2"
                placeholder="Confirm New Password"
              />
            </div>
            <br />

            <div className="flex justify-center my-4 pb-5">
              <input
                value={'Reset Password'}
                id="button"
                type="submit"
                className="w-full py-2.5 border text-white bg-black border-gray-200 rounded-lg outline-none pl-2  "
              />
            </div>
            <br />
            {data}
          </form>
        </div>
      </div>
    </>
  );
};

export default NewPasswordForm;
