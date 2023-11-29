import dynamic from 'next/dynamic';
import React, { useState } from 'react';

import { HeaderLayout } from '@/layouts/header-layout';

import AdvertTable from '../components/advert-table';
import FormAdvert from '../components/FormAdvert';
import Statistics from '../components/Statistics';

import { options } from './data';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const CampaignPage: React.FC = () => {
  const [overview] = useState<boolean>(true);
  const [newAdvert, setNewAdvert] = useState<boolean>(false);

  return (
    <HeaderLayout>
      <div className="bg-gray-300">
        <div
          className={'flex  h-full justify-center bg-[#f5f5f5] px-auto pb-8'}
        >
          <div className="flex flex-col h-fit w-10/12">
            <div className="flex border-b my-5"></div>
            {/* Overview */}
            <div className={overview ? '' : 'hidden'}>
              <Statistics setNewAdvert={setNewAdvert} />

              <div className="basis-1/3 my-8 bg-white rounded p-8">
                <Chart
                  series={options.series}
                  options={options}
                  type="line"
                  height={500}
                />
              </div>

              <AdvertTable />
            </div>
          </div>
        </div>

        <FormAdvert newAdvert={newAdvert} setNewAdvert={setNewAdvert} />
      </div>
    </HeaderLayout>
  );
};

export default CampaignPage;
