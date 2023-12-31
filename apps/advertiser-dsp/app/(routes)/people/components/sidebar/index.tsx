'use client';

import React, { useState } from 'react';
import './people-sidebar.scss';
import { FormWrapper, Segments, Tags } from './components';
import { CreateSegmentForm } from './components/create-segment-form';
import { CreateTagForm } from './components/create-tag-form';

export const PeopleSidebar = () => {
  const [showFormWrapper, setShowFormWrapper] = useState<boolean>(false);
  const [formWrapperComponent, setFormWrapperComponent] = useState<
    string | null
  >(null);

  const openFormWrapper = (formType: string) => {
    setShowFormWrapper(true);
    setFormWrapperComponent(formType);
  };

  const closeFormWrapper = () => {
    setShowFormWrapper(false);
    setTimeout(() => {
      setFormWrapperComponent(null);
    }, 300);
  };

  return (
    <div className="people-sidebar">
      <div className="sub">
        <Segments
          onOpenFormWrapper={(formType: string) => openFormWrapper(formType)}
        />
      </div>
      <div className="sub">
        <Tags
          onOpenFormWrapper={(formType: string) => openFormWrapper(formType)}
        />
      </div>
      <FormWrapper
        show={showFormWrapper}
        onClose={() => {
          closeFormWrapper();
        }}
      >
        {formWrapperComponent === 'segment' && <CreateSegmentForm />}
        {formWrapperComponent === 'tag' && <CreateTagForm />}
      </FormWrapper>
    </div>
  );
};
