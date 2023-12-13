import { ReactElement } from 'react';

import { Example } from '@/features/channel';
import { HeaderLayout } from '@/layouts/header-layout';

const EmailPage = () => {
  return (
    <>
      <Example />
    </>
  );
};

EmailPage.getLayout = function getLayout(page: ReactElement) {
  return <HeaderLayout>{page}</HeaderLayout>;
};

export default EmailPage;
