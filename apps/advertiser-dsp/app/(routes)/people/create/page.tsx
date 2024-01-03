'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  ControllerInput,
  CustomButton,
} from '@instanvi-monorepo/ui-components';

interface CreatePeopleFormData {
  firstName: string;
  lastName: string;
  email: string;
  url: string;
  company: string;
  sex: string;
  phone: string;
  whatsapp: string;
  // tags: string;
}

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  url: yup.string().required(),
  company: yup.string().required(),
  sex: yup.string().required(),
  phone: yup.string().required(),
  whatsapp: yup.string().required(),
  // tags: yup.array().of(yup.string()).required(),
});

const CreatePeoplePage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePeopleFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      url: '',
      company: '',
      sex: '',
      phone: '',
      whatsapp: '',
      // tags: '',
    },
  });

  const genderOptions = [
    {
      label: 'Male',
      value: 'male',
    },
    {
      label: 'Female',
      value: 'female',
    },
  ];

  const onSubmitHandler = (values: unknown) => {
    console.log('🚀 ~ file: page.tsx:68 ~ CreatePeoplePage ~ values:', values);
  };

  return (
    <div className="create-people-page">
      <div className="flex justify-center  py-8">
        <form
          style={{ width: '800px' }}
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <h2 className="text-xl font-semibold mb-4">Create person</h2>
          <div className="grid grid-cols-2 gap-3.5">
            <ControllerInput
              id="firstName"
              name="firstName"
              label="First name"
              type="text"
              placeholder={'Enter first name'}
              control={control}
              errors={errors}
            />
            <ControllerInput
              id="lastName"
              name="lastName"
              label="Last name"
              type="text"
              placeholder={'Enter last name'}
              control={control}
              errors={errors}
            />
          </div>
          <div className="grid grid-cols-2 gap-3.5 pt-4">
            <ControllerInput
              id="email"
              name="email"
              label="Email"
              type="text"
              placeholder={'Enter email'}
              control={control}
              errors={errors}
            />
            <ControllerInput
              id="url"
              name="url"
              label="Url"
              type="text"
              placeholder={'Enter url here'}
              control={control}
              errors={errors}
            />
          </div>
          <div className="grid grid-cols-2 gap-3.5 pt-4">
            <ControllerInput
              id="company"
              name="company"
              label="Company"
              type="text"
              placeholder={'Enter company'}
              control={control}
              errors={errors}
            />
            <ControllerInput
              id="sex"
              name="sex"
              label="Sex"
              type="text"
              placeholder={'Enter sex here'}
              control={control}
              errors={errors}
              select
              options={genderOptions}
            />
          </div>
          <div className="grid grid-cols-2 gap-3.5 pt-4">
            <ControllerInput
              id="phone"
              name="phone"
              label="Phone number"
              type="text"
              placeholder={'Enter phone'}
              control={control}
              errors={errors}
            />
            <ControllerInput
              id="whatsapp"
              name="whatsapp"
              label="Whatsapp number"
              type="text"
              placeholder={'Enter whatsapp here'}
              control={control}
              errors={errors}
            />
          </div>
          <div className="pt-4">
            <ControllerInput
              id="tags"
              name="tags"
              label="Tags"
              type="text"
              placeholder={'Enter tags here'}
              control={control}
              errors={errors}
              select
              selectMode="tags"
            />
          </div>
          <div className="mt-4 flex justify-end">
            <CustomButton
              type="submit"
              theme="primary"
              text="Add contact"
              width={150}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePeoplePage;
