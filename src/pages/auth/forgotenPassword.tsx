import { NextRouter, useRouter } from 'next/router';
import { ReactElement } from 'react';

import { EmailForm } from '@/features/auth';
import { AuthLayout } from '@/layouts/auth-layout';

const EmailPage = () => {
    const router: NextRouter = useRouter();
    const onSuccess = () => {
        const redirect = router.query.redirect as string;
        // local storage
        router.replace(redirect || '/auth/login');
    };

    return (
        <>
            <EmailForm onSuccess={onSuccess} />
        </>
    );
};

EmailPage.getLayout = function getLayout(
    page: ReactElement
) {
    return <AuthLayout>{page}</AuthLayout>;
};

export default EmailPage;
