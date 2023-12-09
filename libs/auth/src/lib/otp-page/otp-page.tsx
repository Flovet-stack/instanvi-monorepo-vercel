import { AuthLayout } from '../auth-layout/auth-layout';
import { OtpForm } from './components';
/* eslint-disable-next-line */
export interface OtpPageProps {}

export const OtpPage: React.FC<OtpPageProps> = () => {
  return (
    <AuthLayout>
      <OtpForm />
    </AuthLayout>
  );
};
