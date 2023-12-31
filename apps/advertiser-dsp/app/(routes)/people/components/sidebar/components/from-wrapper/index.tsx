import React, { ReactNode } from 'react';
import './form-wrapper.scss';
import { CustomButton } from '@instanvi-monorepo/ui-components';
import { ArrowLeftIcon } from '@heroicons/react/20/solid';

interface FormWrapperProps {
  children?: ReactNode;
  show: boolean;
  onClose: () => void;
}

export const FormWrapper: React.FC<FormWrapperProps> = ({
  children,
  show,
  onClose,
}) => {
  return (
    <div className={`people-sidebar-form-wrapper ${show && 'show'}`}>
      <div className="sub">
        <CustomButton
          theme="primary-light"
          text="back"
          icon={<ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />}
          onClick={() => onClose()}
        />
        <div className="form">{children}</div>
      </div>
    </div>
  );
};
