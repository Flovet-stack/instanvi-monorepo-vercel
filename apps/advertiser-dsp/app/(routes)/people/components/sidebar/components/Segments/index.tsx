import { PlusIcon } from '@heroicons/react/20/solid';
import {
  CustomButton,
  EmptyListView,
  SidebarFilterOption,
  SidebarSection,
} from '@instanvi-monorepo/ui-components';
import React from 'react';

const segmentActions = [
  <CustomButton
    key={1}
    theme="white"
    icon={<PlusIcon className="h-4 w-4" aria-hidden="true" />}
  />,
];

const segments: { name: string; value: number }[] = [
  {
    name: 'adults',
    value: 25,
  },
  {
    name: 'students',
    value: 110,
  },
  {
    name: 'employees',
    value: 250,
  },
];

export const Segments = () => {
  return (
    <SidebarSection
      sectionName="Segments"
      actions={segmentActions}
      showTopBorder
      darkTopBorder
    >
      <div className="segments-list">
        {segments.map((segment, index) => (
          <SidebarFilterOption
            name={segment.name}
            number={segment.value}
            key={index}
          />
        ))}
      </div>
      <EmptyListView name="segments" />
    </SidebarSection>
  );
};
