import { signIn } from 'next-auth/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useLogin } from '@/features/auth/api/login';
import { AuthDto } from '@instanvi/client/api';
import { CustomButton, InputField } from '@/components';
import Link from 'next/link';

export type LoginFormProps = {
  onSuccess: () => void;
  showAlts?: true;
  showRemember?: true;
  showForgot?: true;
};

interface loginFormData extends AuthDto {
  remember?: boolean;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

export const LoginForm: React.FC<LoginFormProps> = ({
  onSuccess,
  showAlts,
  showRemember,
  showForgot,
}) => {
  const login = useLogin({ onSuccess });

  // utilise is isLoading pour le chargement => login.isLoading
  // Collect data from here

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormData>({
    resolver: yupResolver(schema),
  });

  // sign in gwith google
  const SignInWithGoogle = () => {
    signIn('google');
  };

  // sign in with facebook
  const SignInWithFacebook = () => {
    signIn('facebook');
  };

  const onSubmitHandler = (data: loginFormData) => {
    login.submit(data);
  };

  return (
    <div className="w-5/5  md:w-[500px] border border-gray-200 bg-white rounded-lg md:px-8 px-4">
      <form className="my-16 md:my-16" onSubmit={handleSubmit(onSubmitHandler)}>
        <h2 className="text-2xl font-bold">Login to your account</h2>
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
                <Link href="/auth/forgotenPassword">Forgot Password?</Link>
              </div>
            )}
          </div>
        )}
        <div className="flex justify-center mt-8">
          <CustomButton
            text="Sign In with Email"
            theme="primary"
            loadingText="Signing in"
            loading={login.isLoading}
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
