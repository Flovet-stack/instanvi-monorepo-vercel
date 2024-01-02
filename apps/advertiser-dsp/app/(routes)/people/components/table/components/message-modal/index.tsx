import { Modal } from 'antd';
import React, { useState } from 'react';
import MessageForm from './message-form';
import { PeopleDataType } from '../../data';

interface MessageModalProps {
  record: PeopleDataType;
}

export const MessageModal: React.FC<MessageModalProps> = ({ record }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div onClick={() => setShowModal(true)} style={{ minWidth: '100px' }}>
        Message
      </div>
      <Modal
        title="Send Message"
        centered
        open={showModal}
        onCancel={() => closeModal()}
        footer={null}
      >
        <MessageForm record={record} />
      </Modal>
    </>
  );
};
