import React, { ReactNode } from 'react';
import { SpinnerCircular } from 'spinners-react';
import './button.css';

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  text?: string;
  loading?: boolean;
  loadingText?: string;
  loaderPosition?: 'left' | 'right';
  theme: 'primary' | 'border-light';
}

const LoadingSpinner: React.FC = () => (
  <SpinnerCircular color="white" style={{ height: 24, width: 24 }} />
);

const CustomButton: React.FC<CustomButtonProps> = ({
  icon,
  iconPosition,
  text,
  loading,
  loadingText,
  loaderPosition,
  theme,
  ...props
}) => {
  return (
    <button className={`custom-button w-full ${theme}`} {...props}>
      {loading && loaderPosition !== 'right' && <LoadingSpinner />}
      {icon && iconPosition !== 'right' && <div className="icon">{icon}</div>}
      {text && (
        <>
          {loading ? <span>{loadingText ?? text}</span> : <span>{text}</span>}
        </>
      )}
      {icon && iconPosition === 'right' && <div className="icon">{icon}</div>}
      {loading && loaderPosition === 'right' && <LoadingSpinner />}
    </button>
  );
};

export default CustomButton;
