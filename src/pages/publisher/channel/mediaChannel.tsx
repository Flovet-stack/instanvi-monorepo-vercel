import { ReactElement } from 'react';

import { MChannels } from '@/features/channel';
import { HeaderLayout } from '@/layouts/header-layout';

const MediaChannel = () => {
  // const onSuccess = () => {
  //     const redirect = router.query.redirect as string;
  //     // local storage
  //     router.replace(redirect || '/auth/newPassword');
  // };
  return (
    <>
      <MChannels />
    </>
  );
};

MediaChannel.getLayout = function getLayout(page: ReactElement) {
  return <HeaderLayout>{page}</HeaderLayout>;
};

export default MediaChannel;
