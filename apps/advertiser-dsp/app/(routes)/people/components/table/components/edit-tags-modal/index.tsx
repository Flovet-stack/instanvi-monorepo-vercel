import { Modal } from 'antd';
import React, { useState } from 'react';
import EditTagForm from './edit-tags-form';
import { PeopleDataType } from '../../data';

interface EditTagsModalProps {
  record: PeopleDataType;
}

export const EditTagsModal: React.FC<EditTagsModalProps> = ({ record }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div onClick={() => setShowModal(true)} style={{ minWidth: '100px' }}>
        Edit tags
      </div>
      <Modal
        title="Edit tags"
        centered
        open={showModal}
        onCancel={() => closeModal()}
        footer={null}
      >
        <EditTagForm record={record} />
      </Modal>
    </>
  );
};
