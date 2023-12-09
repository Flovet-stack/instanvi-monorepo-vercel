'use-client';

import React from 'react';
import { LoginForm } from './components';
import { AuthLayout } from '../auth-layout/auth-layout';

export const LoginPage: React.FC = () => {
  return (
    <AuthLayout>
      <LoginForm showForgot />
    </AuthLayout>
  );
};
