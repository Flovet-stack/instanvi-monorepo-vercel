import React from 'react';

interface CrossIconProps {
  onClick: () => void;
  color: string;
}

const CrossIcon: React.FC<CrossIconProps> = ({ onClick, color = 'red' }) => {
  return (
    <svg
      onClick={onClick}
      className="cursor-pointer w-5 h-5 cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color || 'currentColor'}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export default CrossIcon;
