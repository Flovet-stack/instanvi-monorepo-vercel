import React, { ReactNode } from 'react';
import { SpinnerCircular } from 'spinners-react';
import './CustomButton.scss';

export interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  text?: string;
  loading?: boolean;
  loadingText?: string;
  loaderPosition?: 'left' | 'right';
  theme: 'primary' | 'border-light';
  fullWidth?: true;
}

const LoadingSpinner: React.FC = () => (
  <SpinnerCircular color="white" style={{ height: 24, width: 24 }} />
);

export const CustomButton: React.FC<CustomButtonProps> = ({
  icon,
  iconPosition,
  text,
  loading,
  loadingText,
  loaderPosition,
  theme,
  fullWidth,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`custom-button ${theme} ${fullWidth ? 'w-full' : ''}`}
    >
      {loading && loaderPosition !== 'right' && <LoadingSpinner />}
      {icon && iconPosition !== 'right' && <div className="icon">{icon}</div>}
      {text &&
        (loading ? <span>{loadingText ?? text}</span> : <span>{text}</span>)}
      {icon && iconPosition === 'right' && <div className="icon">{icon}</div>}
      {loading && loaderPosition === 'right' && <LoadingSpinner />}
    </button>
  );
};
