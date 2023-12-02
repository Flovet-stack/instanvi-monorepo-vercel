import { NextRouter, useRouter } from 'next/router';
import { ReactElement } from 'react';

import { Contacts } from '@/features/contact';
import { HeaderLayout } from '@/layouts/header-layout';

const Contact = () => {
    const router: NextRouter = useRouter();

    return (
        <>
            <Contacts />
        </>
    );
};

Contact.getLayout = function getLayout(
    page: ReactElement
) {
    return <HeaderLayout>{page}</HeaderLayout>;
};

export default Contact;
