import React from 'react';
import { signIn } from 'next-auth/react';

interface AltLoginButtonProps {
  option: string;
}

const AltLoginButton: React.FC<AltLoginButtonProps> = ({ option }) => {
  return (
    <div className="flex justify-center h-12 ml-0.5 w-[50%]">
      <button
        onClick={() => signIn(option)}
        className="w-full py-2 border bg-white-600 border-gray-200 rounded-sm outline-none px-10 flex justify-center"
      >
        <div className="flex mt-0.5">
          <i className="ri-google-fill ml-2 text-blue-600"></i>
          <span className="ml-2 mt-1 text-sm transform-capitalize">
            {option}
          </span>
        </div>
      </button>
    </div>
  );
};

export default AltLoginButton;
