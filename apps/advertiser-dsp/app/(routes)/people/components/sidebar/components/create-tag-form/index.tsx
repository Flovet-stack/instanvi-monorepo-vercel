import {
  ControllerInput,
  CustomButton,
} from '@instanvi-monorepo/ui-components';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface CreateTagFormData {
  name: string;
  description: string;
}

const schema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
});

export const CreateTagForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTagFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      description: '',
    },
  });

  const onSubmitHandler = () => {};

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <h2>Add tag</h2>
      <div className="">
        <ControllerInput
          id="name"
          name="name"
          label="Tag name"
          type="text"
          placeholder={'Enter tag name'}
          control={control}
          errors={errors}
        />
      </div>
      <div className=" pt-3">
        <ControllerInput
          id="description"
          name="description"
          label="description"
          type="text"
          placeholder={'Enter tag description here'}
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
