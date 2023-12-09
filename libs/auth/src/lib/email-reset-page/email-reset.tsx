import { AuthLayout } from '../auth-layout/auth-layout';
import { EmailResetForm } from './components';
/* eslint-disable-next-line */
export interface EmailResetPageProps {}

export const EmailResetPage: React.FC = () => {
  return (
    <AuthLayout>
      <EmailResetForm />
    </AuthLayout>
  );
};
