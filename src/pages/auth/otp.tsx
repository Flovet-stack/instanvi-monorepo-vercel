import { NextRouter, useRouter } from 'next/router';
import { ReactElement } from 'react';
import { OtpForm } from '@/features/auth';
import { AuthLayout } from '@/layouts/auth-layout';

const OtpPage = () => {
    const router: NextRouter = useRouter();

    const onSuccess = () => {
        const redirect = router.query.redirect as string;
        // local storage
        router.replace(redirect || '/dashboard');
    };

    return (
        <>
            <OtpForm onSuccess={onSuccess} />
        </>
    );
};

OtpPage.getLayout = function getLayout(
    page: ReactElement
) {
    return <AuthLayout>{page}</AuthLayout>;
};

export default OtpPage;
