import { NextRouter, useRouter } from 'next/router';
import { ReactElement } from 'react';
import Head from 'next/head'

import { LoginForm } from '@/features/auth';
import { AuthLayout } from '@/layouts/auth-layout';
import { queryClient } from '@/libs/react-query';
import { Access, SuccessLoginDto, User } from '@instanvi/client';

const LoginPage = () => {
  const router: NextRouter = useRouter();

  const onSuccess = (data?: SuccessLoginDto) => {
    const redirect = router.query.redirect as string;
    const access = queryClient.getQueryData<Access>(['auth-user']);
    console.log('++++++', access);
    const user = queryClient.getQueryData<User>(['auth-access']);
    console.log('xxxxxxx', user);
    if (access && user)
      router.replace(redirect || '/publisher/channel');
  };

  return (
    <>
      <Head>
        <title>Login - Instanvi</title>
      </Head>
      <LoginForm onSuccess={onSuccess} />
    </>
  );
};

LoginPage.getLayout = function getLayout(
  page: ReactElement
) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default LoginPage;
