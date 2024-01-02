import { CustomButton } from '@instanvi-monorepo/ui-components';
import { Modal } from 'antd';
import React, { useState } from 'react';
import { PeopleDataType } from '../../data';

interface ArchiveModalProps {
  record: PeopleDataType;
}

export const ArchiveModal: React.FC<ArchiveModalProps> = ({ record }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div onClick={() => setShowModal(true)} style={{ minWidth: '100px' }}>
        Archive
      </div>
      <Modal
        title="Archive Contact"
        centered
        open={showModal}
        onCancel={() => closeModal()}
        footer={null}
      >
        <div>
          <p>
            Are you sure you want to archive {record.firstName}{' '}
            {record.lastName}&apos;s contact?
          </p>
          <div className="mt-3 flex justify-end">
            <CustomButton type="button" theme="red" text="confirm" />
          </div>
        </div>
      </Modal>
    </>
  );
};
