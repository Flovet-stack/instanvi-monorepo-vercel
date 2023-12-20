import { ReactElement } from 'react';

import { Contacts } from '@/features/contact';
import { HeaderLayout } from '@/layouts/header-layout';

const Contact = () => {
  return (
    <>
      <Contacts />
    </>
  );
};

Contact.getLayout = function getLayout(page: ReactElement) {
  return <HeaderLayout>{page}</HeaderLayout>;
};

export default Contact;
