import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import OtpInputField from '../otp-input/otp-input';
import { CustomButton } from '@instanvi-monorepo/ui-components';

interface OtpFormProps {
  otpCode: string;
}

const OtpForm: React.FC = () => {
  const { handleSubmit } = useForm<OtpFormProps>({});
  const [valid, setValid] = useState<boolean>(false);

  const onSubmitHandler = (data: OtpFormProps) => {
    console.log(
      '🚀 ~ file: email-reset-form.tsx:27 ~ onSubmitHandler ~ data:',
      data
    );
  };

  return (
    <div className="w-5/5  md:w-[500px] border border-gray-200 bg-white rounded-lg md:px-8 px-4">
      <form onSubmit={handleSubmit(onSubmitHandler)} className="my-16 md:my-16">
        <h2 className="text-2xl font-bold mb-10">Enter verification code </h2>
        <p>We have just sent a verification code to tynisha*****@mail.com</p>

        <OtpInputField
          value=""
          onChange={(value) => {
            console.log('🚀 ~ file: otp-form.tsx:47 ~ value:', value);
          }}
          isValid={(isValid) => {
            setValid(isValid);
          }}
        />
        <div className="flex flex-col justify-center mt-8">
          <CustomButton
            text="Verify"
            theme="primary"
            type="submit"
            disabled={!valid}
          />
        </div>
      </form>
    </div>
  );
};

export default OtpForm;
