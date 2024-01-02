import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  ControllerInput,
  CustomButton,
} from '@instanvi-monorepo/ui-components';
import { PeopleDataType } from '../../../data';

interface EditTagFormProps {
  record: PeopleDataType;
}

interface CreateTagFormData {
  tags: string;
}

const schema = yup.object().shape({
  tags: yup.string().required(),
});

const EditTagForm: React.FC<EditTagFormProps> = ({ record }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTagFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      tags: '',
    },
  });

  const onSubmitHandler = () => {};

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="">
        <ControllerInput
          id="tags"
          name="tags"
          label={`Add or Delete Tags on ${record.firstName}'s contact`}
          type="text"
          placeholder={'Enter tags here'}
          control={control}
          errors={errors}
        />
      </div>
      <div className="mt-3 flex justify-end">
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

export default EditTagForm;
