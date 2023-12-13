import React from 'react';

import { AuthLayout } from '@/layouts/auth-layout';

import { NewPasswordForm } from '../components/forms';

const NewPasswordPage: React.FC = () => {
  return (
    <AuthLayout>
      <NewPasswordForm />
    </AuthLayout>
  );
};

export default NewPasswordPage;
