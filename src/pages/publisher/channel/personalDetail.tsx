import { NextRouter, useRouter } from 'next/router';
import { ReactElement } from 'react';

import { Register } from '@/features/channel';
import { HeaderLayout } from '@/layouts/header-layout';

const EmailPage = () => {
    const router: NextRouter = useRouter();
    const onSuccess = () => {
        const redirect = router.query.redirect as string;
        // local storage
        router.replace(redirect || '/auth/newPassword');
    };
    return (
        <>
            <Register users={[]} />
        </>
    );
};

EmailPage.getLayout = function getLayout(
    page: ReactElement
) {
    return <HeaderLayout>{page}</HeaderLayout>;
};

export default EmailPage;
