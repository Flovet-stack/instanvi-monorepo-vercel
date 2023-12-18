import { ReactElement } from 'react';

import { AdChannels } from '@/features/channel';
import { HeaderLayout } from '@/layouts/header-layout';

const EmailPage = () => {
  return (
    <>
      <AdChannels />
    </>
  );
};

EmailPage.getLayout = function getLayout(page: ReactElement) {
  return <HeaderLayout>{page}</HeaderLayout>;
};

export default EmailPage;
