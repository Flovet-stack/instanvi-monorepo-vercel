import React from 'react';

import { AuthLayout } from '@/layouts/auth-layout';

import { EmailForm } from '../components/forms';

const ForgotPasswordPage: React.FC = () => {
  return (
    <AuthLayout>
      <EmailForm />
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
