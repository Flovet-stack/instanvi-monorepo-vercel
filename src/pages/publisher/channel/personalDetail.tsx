import { ReactElement } from 'react';

import { Register } from '@/features/channel';
import { HeaderLayout } from '@/layouts/header-layout';

const EmailPage = () => {
  return (
    <>
      <Register users={[]} />
    </>
  );
};

EmailPage.getLayout = function getLayout(page: ReactElement) {
  return <HeaderLayout>{page}</HeaderLayout>;
};

export default EmailPage;
