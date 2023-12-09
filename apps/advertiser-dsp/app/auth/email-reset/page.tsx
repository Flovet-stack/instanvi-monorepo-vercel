'use client';

import React from 'react';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { EmailResetPage } from '@instanvi-monorepo/auth';

/* eslint-disable-next-line */
export interface EmailResetProps {}

const EmailReset: React.FC<EmailResetProps> = () => {
  return <EmailResetPage />;
};

export default EmailReset;
