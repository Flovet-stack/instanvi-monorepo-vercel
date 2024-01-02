import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  ControllerInput,
  CustomButton,
} from '@instanvi-monorepo/ui-components';
import { PeopleDataType } from '../../../data';

interface MessageFormProps {
  record: PeopleDataType;
}

interface CreateTagFormData {
  media: string;
  message: string;
}

const schema = yup.object().shape({
  media: yup.string().required(),
  message: yup.string().required(),
});

const MessageForm: React.FC<MessageFormProps> = ({ record }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<CreateTagFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      media: '',
      message: '',
    },
  });

  const onSubmitHandler = () => {};

  const mediaOptions = [
    {
      label: 'Whatsapp',
      value: 'whatsapp',
    },
    {
      label: 'Email',
      value: 'email',
    },
    {
      label: 'SMS',
      value: 'sms',
    },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="">
        <ControllerInput
          id="media"
          name="media"
          label="Via"
          type="text"
          placeholder={'Select media'}
          control={control}
          errors={errors}
          select
          options={mediaOptions}
        />
      </div>
      <div className=" pt-3">
        <ControllerInput
          id="message"
          name="message"
          label={`Your are about to send a ${watch('media')} message to ${
            record.firstName
          } ${record.lastName}`}
          type="text"
          placeholder={'Enter message here'}
          control={control}
          errors={errors}
          textarea
        />
      </div>
      <div className="mt-2 flex justify-end">
        <CustomButton
          type="submit"
          theme="primary"
          text="Save tag"
          width={150}
        />
      </div>
    </form>
  );
};

export default MessageForm;
