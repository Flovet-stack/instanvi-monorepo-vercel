import { ReactElement } from 'react';

import { Loading } from '@/features/channel';
import { HeaderLayout } from '@/layouts/header-layout';

const Loader = () => {
  return (
    <>
      <Loading />
    </>
  );
};

Loader.getLayout = function getLayout(page: ReactElement) {
  return <HeaderLayout>{page}</HeaderLayout>;
};

export default Loader;
