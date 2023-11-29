import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { ILoginFormData } from '@/@types';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { RootState } from '@/app/store';
import { CustomButton, InputField } from '@/components';
import { loginThunk } from '@/redux/actions/authActions';

type LoginFormProps = {
  showAlts?: true;
  showRemember?: true;
  showForgot?: true;
};

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

const LoginForm: React.FC<LoginFormProps> = ({
  showAlts,
  showRemember,
  showForgot,
}) => {
  const dispatch = useAppDispatch();
  const authState = useAppSelector((state: RootState) => state.auth);

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
    signIn('google');
  };

  // sign in with facebook
  const SignInWithFacebook = () => {
    signIn('facebook');
  };

  const onSubmitHandler = (data: ILoginFormData) => {
    dispatch(loginThunk(data));
  };

  return (
    <div className="w-5/5  md:w-[500px] border border-gray-200 bg-white rounded-lg md:px-8 px-4">
      <form className="my-16 md:my-16" onSubmit={handleSubmit(onSubmitHandler)}>
        <h2 className="text-2xl font-bold mb-4">Login to your account</h2>
        {/* <AppLoader text="text loading text" type="SpinnerRoundOutlined" /> */}
        <div className="mt-10">
          <InputField
            id="email"
            name="email"
            type="text"
            placeholder={'Email'}
            control={control}
            errors={errors}
          />
        </div>
        <div className=" pt-4">
          <InputField
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
                <InputField
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
                <Link href="/auth/forgot-password">Forgot Password?</Link>
              </div>
            )}
          </div>
        )}
        <div className="flex justify-center mt-8">
          <CustomButton
            text="Sign In with Email"
            theme="primary"
            loadingText="Signing in"
            loading={authState.authStatus === 'loading'}
            disabled={authState.authStatus === 'loading'}
            type="submit"
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
                  icon={
                    <img src="/images/google.svg" className="h-4 w-4" alt="" />
                  }
                  type="button"
                  onClick={() => {
                    SignInWithGoogle();
                  }}
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
                />
              </div>
            </div>
          </>
        )}
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
  );
};

export default LoginForm;
