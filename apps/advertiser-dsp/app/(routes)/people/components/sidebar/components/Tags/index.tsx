import { PlusIcon } from '@heroicons/react/20/solid';
import {
  CustomButton,
  EmptyListView,
  SearchField,
  SidebarFilterOption,
  SidebarSection,
} from '@instanvi-monorepo/ui-components';
import React from 'react';

const tags: { name: string; value: number }[] = [
  {
    name: 'hair',
    value: 25,
  },
  {
    name: 'cars',
    value: 110,
  },
  {
    name: 'developers',
    value: 250,
  },
];

interface TagsProps {
  onOpenFormWrapper: (formType: string) => void;
}

export const Tags: React.FC<TagsProps> = ({ onOpenFormWrapper }) => {
  const segmentActions = [
    <CustomButton
      key={1}
      theme="white"
      icon={<PlusIcon className="h-4 w-4" aria-hidden="true" />}
      onClick={() => onOpenFormWrapper('tag')}
    />,
  ];
  return (
    <SidebarSection
      sectionName="Tags"
      actions={segmentActions}
      showTopBorder
      darkTopBorder
    >
      <SearchField />
      <div className="tags-list">
        {tags.map((tag, index) => (
          <SidebarFilterOption name={tag.name} number={tag.value} key={index} />
        ))}
      </div>
      <EmptyListView name="tags" />
    </SidebarSection>
  );
};
