import { ReactElement } from 'react';

import { Schannel } from '@/features/channel';
import { HeaderLayout } from '@/layouts/header-layout';

const EmailPage = () => {
  return (
    <>
      <Schannel />
    </>
  );
};

EmailPage.getLayout = function getLayout(page: ReactElement) {
  return <HeaderLayout>{page}</HeaderLayout>;
};

export default EmailPage;
