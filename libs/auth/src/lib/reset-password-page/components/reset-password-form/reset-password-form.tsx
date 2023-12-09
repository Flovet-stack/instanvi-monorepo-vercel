'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { CustomButton, InputField } from '@instanvi-monorepo/ui-components';
import { ResetPasswordDto } from '@instanvi/client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

interface ResetPasswordFormProps {
  password: string;
  confirmPassword: string;
}

const schema = yup.object().shape({
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()-_+=])[A-Za-z\d!@#$%^&*()-_+=]{6,}$/,
      'Password must be at least 6 characters and include an uppercase letter, a lowercase letter, a number, and a special character'
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});

const ResetPasswordForm: React.FC = () => {
  const [showSuccess] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormProps>({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data: ResetPasswordFormProps) => {
    const request: ResetPasswordDto = {
      code: '',
      newPassword: '',
    };
    console.log(
      '🚀 ~ file: email-reset-form.tsx:27 ~ onSubmitHandler ~ data:',
      data,
      request
    );
    // dispatch(forgotPasswordByEmailThunk(data)).then(() => {
    //   setShowSuccess(true);
    // });
  };

  return (
    <div className="w-5/5  md:w-[500px] border border-gray-200 bg-white rounded-lg md:px-8 px-4">
      <form onSubmit={handleSubmit(onSubmitHandler)} className="my-16 md:my-16">
        <h2 className="text-2xl font-bold mb-10">Reset Your account</h2>
        {showSuccess && (
          <div className="bg-green-50 border-green-300 px-4 py-4 mb-4 rounded-md">
            <h2>Success</h2>
            <p className="text-primary mb-2">
              A mail containing the requested code has been sent to the
              specified email
            </p>
            <p className="text-primary mb-2">
              Click next if you have received the code
            </p>
          </div>
        )}

        <InputField
          id="password"
          name="password"
          type="password"
          placeholder={'New Password'}
          control={control}
          errors={errors}
        />

        <div className=" pt-4">
          <InputField
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder={'Confirm password'}
            control={control}
            errors={errors}
          />
        </div>

        <div className="flex flex-col justify-center mt-4">
          <CustomButton text="Confirm reset" theme="primary" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
