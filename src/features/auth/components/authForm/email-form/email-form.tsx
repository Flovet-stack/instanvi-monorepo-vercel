import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

// eslint-disable-next-line no-restricted-imports


export type EmailFormProps = {
  onSuccess: () => void;
};

export const EmailForm = ({
  onSuccess,
}: EmailFormProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  // Collect data from here 

  const { register, handleSubmit } = useForm<any>();
  const [data, setData] = useState<string>("");

  return (
    <>
      <div className="w-5/5  md:w-[28%] border border-gray-200 bg-white rounded-lg md:px-8 px-4">
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))} className="my-16 md:my-16">
          <h2 className="text-2xl font-bold">Reset Your account</h2>
          <div className="flex justify-center mt-10">
            <input
              type="text"
              {...register("email")}
              className="w-full py-2.5 border border-gray-200  rounded-lg outline-none pl-2"
              placeholder="Email"
            />
          </div>
          <div className="flex justify-center mt-4">
            <input
              value={"Reset with email"}
              type='submit'
              id='button'
              className="w-full py-2.5 border text-white bg-black border-gray-200 rounded-lg outline-none pl-2"
            >
            </input>
          </div>
          <div className="mt-8">
            <span className="text-sm">
              Don&lsquo;t have an account ?{" "}
              <a className="text-green-700" href="">
                Get started
              </a>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};
