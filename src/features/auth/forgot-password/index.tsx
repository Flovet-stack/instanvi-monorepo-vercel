import { AuthLayout } from '@/layouts/auth-layout';
import { NextRouter, useRouter } from 'next/router';
import React from 'react';
import { EmailForm } from '../components/forms';

const ForgotPasswordPage = () => {
  const router: NextRouter = useRouter();
  const onSuccess = () => {
    const redirect = router.query.redirect as string;
    // local storage
    router.replace(redirect || '/auth/newPassword');
  };
  return (
    <AuthLayout>
      <EmailForm onSuccess={onSuccess} />
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
