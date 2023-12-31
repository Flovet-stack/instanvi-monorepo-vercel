import { PlusIcon } from '@heroicons/react/20/solid';
import {
  CustomButton,
  EmptyListView,
  SearchField,
  SidebarFilterOption,
  SidebarSection,
} from '@instanvi-monorepo/ui-components';
import React from 'react';

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
    name: 'Teachers',
    value: 17,
  },
  {
    name: 'employees',
    value: 250,
  },
];

interface SegmentsProps {
  onOpenFormWrapper: (formType: string) => void;
}

export const Segments: React.FC<SegmentsProps> = ({ onOpenFormWrapper }) => {
  const segmentActions = [
    <CustomButton
      key={1}
      theme="white"
      icon={<PlusIcon className="h-4 w-4" aria-hidden="true" />}
      onClick={() => onOpenFormWrapper('segment')}
    />,
  ];

  return (
    <SidebarSection
      sectionName="Segments"
      actions={segmentActions}
      showTopBorder
      darkTopBorder
    >
      <SearchField />
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
