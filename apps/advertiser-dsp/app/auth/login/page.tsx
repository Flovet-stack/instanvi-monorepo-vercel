'use client';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { LoginPage } from '@instanvi-monorepo/auth';

export interface LoginProps {}

export function Login(props: LoginProps) {
  return <LoginPage />;
}

export default Login;
