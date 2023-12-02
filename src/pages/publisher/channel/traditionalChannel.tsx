import { NextRouter, useRouter } from 'next/router';
import { ReactElement } from 'react';

import { TChannels } from '@/features/channel';
import { HeaderLayout } from '@/layouts/header-layout';

const TraditionalMedia = () => {
    const router: NextRouter = useRouter();
    return (
        <>
            <TChannels />
        </>
    );
};

TraditionalMedia.getLayout = function getLayout(
    page: ReactElement
) {
    return <HeaderLayout>{page}</HeaderLayout>;
};

export default TraditionalMedia;
