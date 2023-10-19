import { NextRouter, useRouter } from 'next/router';
import { ReactElement } from 'react';

import { LoginForm } from '@/features/auth';
import { AuthLayout } from '@/layouts/auth-layout';

const LoginPage = () => {
  const router: NextRouter = useRouter();

  const onSuccess = () => {
    const redirect = router.query.redirect as string;
    // local storage
    router.replace(redirect || '/dashboard');
  };

  return (
    <>
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