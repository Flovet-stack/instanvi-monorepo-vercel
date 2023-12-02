// import { Access, User } from '@instanvi/client';
import Head from 'next/head';
// import { NextRouter, useRouter } from 'next/router';
import React from 'react';

import { AuthLayout } from '@/layouts/auth-layout';
// import { queryClient } from '@/libs/react-query';

import { LoginForm } from '../components/forms';

const LoginPage: React.FC = () => {
  // const router: NextRouter = useRouter();

  // const onSuccess = () => {
  //   const redirect = router.query.redirect as string;
  //   const access = queryClient.getQueryData<Access>(['auth-user']);
  //   console.log('++++++', access);
  //   const user = queryClient.getQueryData<User>(['auth-access']);
  //   console.log('xxxxxxx', user);
  //   if (access && user) router.replace(redirect || '/publisher/channel');
  // };

  return (
    <AuthLayout>
      <Head>
        <title>Login - Instanvi</title>
      </Head>
      <LoginForm showForgot />
    </AuthLayout>
  );
};

export default LoginPage;
