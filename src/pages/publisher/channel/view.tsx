import { ReactElement } from 'react';

import { ViewChannel } from '@/features/channel';
import { HeaderLayout } from '@/layouts/header-layout';

const DisplayChannel = () => {
  // const onSuccess = () => {
  //     const redirect = router.query.redirect as string;
  //     // local storage
  //     router.replace(redirect || '/auth/newPassword');
  // };
  return (
    <>
      <ViewChannel />
    </>
  );
};

DisplayChannel.getLayout = function getLayout(page: ReactElement) {
  return <HeaderLayout>{page}</HeaderLayout>;
};

export default DisplayChannel;
