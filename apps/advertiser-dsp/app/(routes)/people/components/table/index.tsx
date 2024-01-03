'use client';

import React from 'react';
import { Table } from 'antd';
import { data, peopleColumns } from './data';
import './people-table.scss';
import {
  CustomButton,
  SearchField,
  SectionComponent,
} from '@instanvi-monorepo/ui-components';
import { useRouter } from 'next/navigation';
import { appRoutes } from 'apps/advertiser-dsp/app/routes';

export const PeopleTable: React.FC = () => {
  const router = useRouter();

  const goToCreate = () => {
    router.push(appRoutes.CREATE_PEOPLE);
  };

  const handleSearch = (search: string) => {
    console.log('🚀 ~ file: index.tsx:16 ~ handleSearch ~ search:', search);
  };

  const leftActions = [
    <SearchField key={1} width={350} onChange={handleSearch} />,
  ];

  const rightActions = [
    <CustomButton key={1} theme="primary" text="upload contacts" />,
    <CustomButton
      key={2}
      theme="primary"
      text="add contacts"
      onClick={() => goToCreate()}
    />,
  ];

  return (
    <div className="people-table">
      <SectionComponent
        leftActions={leftActions}
        rightActions={rightActions}
        showBorder
      >
        <Table columns={peopleColumns} dataSource={data} scroll={{ x: 1500 }} />
      </SectionComponent>
    </div>
  );
};
