import { NextRouter, useRouter } from 'next/router';
import { ReactElement } from 'react';

import { NewPasswordForm } from '@/features/auth';
import { AuthLayout } from '@/layouts/auth-layout';

const NewPassword = () => {
    const router: NextRouter = useRouter();

    const onSuccess = () => {
        const redirect = router.query.redirect as string;
        // local storage
        router.replace(redirect || '/dashboard');
    };

    return (
        <>
            <NewPasswordForm onSuccess={onSuccess} />
        </>
    );
};

NewPassword.getLayout = function getLayout(
    page: ReactElement
) {
    return <AuthLayout>{page}</AuthLayout>;
};

export default NewPassword;
