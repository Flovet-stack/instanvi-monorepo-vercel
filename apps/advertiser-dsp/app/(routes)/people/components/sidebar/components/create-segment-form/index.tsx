import {
  ControllerInput,
  CustomButton,
} from '@instanvi-monorepo/ui-components';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  CreateSegmentFormData,
  createSegmentSchema,
  genderOptions,
  statusOptions,
} from './data';

export const CreateSegmentForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateSegmentFormData>({
    resolver: yupResolver(createSegmentSchema),
    defaultValues: {
      name: '',
      startDate: '',
      endDate: '',
      birthDay: '',
      birthMonth: '',
      birthYear: '',
      gender: '',
      tags: '',
      location: '',
      status: '',
    },
  });

  const onSubmitHandler = () => {};

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <h2>Add segment</h2>
      <div className="">
        <ControllerInput
          id="name"
          name="name"
          label="segment name"
          type="text"
          placeholder={'Enter tag name'}
          control={control}
          errors={errors}
        />
      </div>
      <div className=" pt-3">
        <ControllerInput
          id="startDate"
          name="startDate"
          label="Member since"
          type="date"
          control={control}
          errors={errors}
        />
      </div>
      <div className=" pt-3">
        <ControllerInput
          id="endDate"
          name="endDate"
          label="Till"
          type="date"
          control={control}
          errors={errors}
        />
      </div>
      <div className="pt-3">
        <ControllerInput
          id="birthDay"
          name="birthDay"
          label="Birth day"
          type="text"
          placeholder={'Enter birth day'}
          control={control}
          errors={errors}
        />
      </div>
      <div className="pt-3">
        <ControllerInput
          id="birthMonth"
          name="birthMonth"
          label="Birth month"
          type="text"
          placeholder={'Enter birth month'}
          control={control}
          errors={errors}
        />
      </div>
      <div className="pt-3">
        <ControllerInput
          id="birthYear"
          name="birthYear"
          label="Birth year"
          type="text"
          placeholder={'Enter birth year'}
          control={control}
          errors={errors}
        />
      </div>
      <div className="pt-3">
        <ControllerInput
          id="gender"
          name="gender"
          label="Gender"
          type="text"
          placeholder={'Select Gender'}
          control={control}
          errors={errors}
          select
          options={genderOptions}
        />
      </div>
      <div className="pt-3">
        <ControllerInput
          id="tags"
          name="tags"
          label="Tags"
          type="text"
          placeholder={'Select Tags'}
          control={control}
          errors={errors}
        />
      </div>
      <div className="pt-3">
        <ControllerInput
          id="location"
          name="location"
          label="Location"
          type="text"
          placeholder={'Enter Location'}
          control={control}
          errors={errors}
        />
      </div>
      <div className="pt-3">
        <ControllerInput
          id="status"
          name="status"
          label="Status"
          type="text"
          placeholder={'Select Status'}
          control={control}
          errors={errors}
          select
          options={statusOptions}
        />
      </div>
      <div className="mt-2 flex justify-end">
        <CustomButton
          type="submit"
          theme="primary"
          text="Save segment"
          width={150}
        />
      </div>
    </form>
  );
};
