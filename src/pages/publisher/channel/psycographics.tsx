import { NextRouter, useRouter } from 'next/router';
import { ReactElement } from 'react';

import { Psycographics } from '@/features/channel';
import { HeaderLayout } from '@/layouts/header-layout';

const Psycographic = () => {
    return (
        <>
            <Psycographics />
        </>
    );
};

Psycographic.getLayout = function getLayout(
    page: ReactElement
) {
    return <HeaderLayout>{page}</HeaderLayout>;
};

export default Psycographic;
