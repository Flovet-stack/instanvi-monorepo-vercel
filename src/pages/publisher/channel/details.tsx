import { ReactElement } from 'react';

import { Details } from '@/features/channel';
import { HeaderLayout } from '@/layouts/header-layout';

const DetailsChannel = () => {
  // const onSuccess = () => {
  //     const redirect = router.query.redirect as string;
  //     // local storage
  //     router.replace(redirect || '/auth/newPassword');
  // };
  return (
    <>
      <Details users={[]} publisher={''} />
    </>
  );
};

DetailsChannel.getLayout = function getLayout(page: ReactElement) {
  return <HeaderLayout>{page}</HeaderLayout>;
};

export default DetailsChannel;
