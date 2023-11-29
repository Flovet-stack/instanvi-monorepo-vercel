import { AuthLayout } from '@/layouts/auth-layout';
import React from 'react';
import { OtpForm } from '../components/forms';

const OtpPage = () => {
  return (
    <AuthLayout>
      <OtpForm />
    </AuthLayout>
  );
};

export default OtpPage;
