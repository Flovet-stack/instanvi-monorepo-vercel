import { AuthLayout } from '../auth-layout/auth-layout';
import { ResetPasswordForm } from './components';

/* eslint-disable-next-line */
export interface ResetPasswordProps {}

export const ResetPasswordPage: React.FC = (props: ResetPasswordProps) => {
  return (
    <AuthLayout>
      <ResetPasswordForm />
    </AuthLayout>
  );
};
