import { AuthLayout } from '../auth-layout/auth-layout';
import { PhoneResetForm } from './components';

/* eslint-disable-next-line */
export interface PhoneResetProps {}

export const PhoneResetPage: React.FC<PhoneResetProps> = () => {
  return (
    <AuthLayout>
      <PhoneResetForm />
    </AuthLayout>
  );
};
