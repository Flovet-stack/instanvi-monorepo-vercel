import Link from 'next/link';
import { signIn } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Head from 'next/head'
import { useLogin } from '@/features/auth/api/login';
import { AuthDto } from '@instanvi/client/api';
import { SpinnerCircular } from 'spinners-react'

export type LoginFormProps = {
  onSuccess: () => void;
};

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});


export const LoginForm = ({
  onSuccess
}: LoginFormProps) => {
  const login = useLogin({ onSuccess });

  // utilise is isLoading pour le chargement => login.isLoading


  // Collect data from here 

  const { register, handleSubmit, formState: { errors } } = useForm<AuthDto>({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data: AuthDto) => {
    login.submit(data);
  };

  return (
    <>
      <Head>
        <link rel="stylesheet" href="login-form.css" />
      </Head>
      <div className="w-5/5  md:w-[28%] border border-gray-200 bg-white rounded-lg md:px-8 px-4">
        <form className="my-16 md:my-16" onSubmit={handleSubmit(onSubmitHandler)}>
          <h2 className="text-2xl font-bold">
            Login to your account
          </h2>
          <div className="mt-10">
            <input
              type="text"
              {...register("email")}
              className="w-full py-2.5 border border-gray-200 rounded-lg outline-none pl-2"
              placeholder="Username"
            />

            <div><p className="" style={{ color: "rgb(206, 8, 8)", fontSize: "12px" }}>{errors.email?.message}</p></div>
          </div>
          <div className=" pt-4">
            <input
              type="text"
              {...register("password")}
              className="w-full py-2.5 border border-gray-200 rounded-lg outline-none pl-2"
              placeholder="Password"
            />
            <div><p className="" style={{ color: "rgb(206, 8, 8)", fontSize: "12px" }}>{errors.password?.message}</p></div>
          </div>
          <div className="flex justify-between pt-4">
            <div className="flex">
              <input
                type="radio"
                name="remember"
                id="remember"
                className="border border-gray-200 outline-none pl-2 mr-2 "
              />
              <label htmlFor="remember">
                Remember Me
              </label>
            </div>
            <span className="text-green-700">
              <Link href="/auth/forgotenPassword">
                Forgot Password?
              </Link>
            </span>
          </div>
          <div className="flex justify-center mt-4">
            <button id='button' className='w-full py-2.5  border text-white bg-black border-gray-200 rounded-lg outline-none pl-2' type='submit'>
              {login.isLoading ?
                <div className='w-full justify-center flex'>
                  <SpinnerCircular
                    color="white"
                    style={{ height: 24, width: 24 }}
                  />
                </div>
                :
                "Sign In with Email"}</button>
          </div>

          <div className="px-4 mt-5">
            <div className="flex items-center py-4">
              <div className="flex-grow h-px bg-gray-200"></div>

              <span className="px-2 text-sm -mt-0.5">
                Or login with
              </span>

              <div className="flex-grow h-px bg-gray-200"></div>
            </div>
          </div>
          <div className="flex justify-between mt-2 w-full">
            <div className="flex justify-center h-12 mr-0.5 w-[50%]">
              <button
                onClick={() => signIn('google')}
                className="w-full py-2 border   bg-white-600 border-gray-200 rounded-sm outline-none px-10 flex justify-center"
              >
                <div className="flex">
                  <img
                    src="/images/google.svg"
                    className="h-4 w-4 mt-2"
                    alt=""
                  />
                  <span className="ml-2  mt-1.5  text-sm">
                    Google
                  </span>{' '}
                </div>
              </button>
            </div>
            <div className="flex justify-center h-12 ml-0.5  w-[50%]">

              <button
                onClick={() => signIn('facebook')}
                className="w-full py-2 border   bg-white-600 border-gray-200 rounded-sm outline-none px-10 flex justify-center"
              >
                <div className="flex mt-0.5">
                  <i className="ri-facebook-fill ml-2 text-blue-600"></i>
                  <span className="ml-2 mt-1  text-sm">
                    facebook
                  </span>{' '}
                </div>
              </button>
            </div>
          </div>
          <div className="mt-8">
            <span className="text-sm">
              Don&lsquo;t have an account ?{' '}
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
