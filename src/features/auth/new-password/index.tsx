import { AuthLayout } from '@/layouts/auth-layout';
import { NextRouter, useRouter } from 'next/router';
import React from 'react';
import { NewPasswordForm } from '../components/forms';

const NewPasswordPage = () => {
  const router: NextRouter = useRouter();

  const onSuccess = () => {
    const redirect = router.query.redirect as string;
    // local storage
    router.replace(redirect || '/dashboard');
  };

  return (
    <AuthLayout>
      <NewPasswordForm onSuccess={onSuccess} />
    </AuthLayout>
  );
};

export default NewPasswordPage;
