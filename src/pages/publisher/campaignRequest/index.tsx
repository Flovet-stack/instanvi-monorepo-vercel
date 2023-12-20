import { ReactElement } from 'react';

import { NewAdvertSlider } from '@/features/campaignRequest';
import { HeaderLayout } from '@/layouts/header-layout';

const campaignRequest = () => {
  return (
    <>
      <NewAdvertSlider />
    </>
  );
};

campaignRequest.getLayout = function getLayout(page: ReactElement) {
  return <HeaderLayout>{page}</HeaderLayout>;
};

export default campaignRequest;
