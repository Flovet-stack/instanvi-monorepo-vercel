'use client';

import React, {
  useEffect,
  useRef,
  ChangeEvent,
  KeyboardEvent,
  useState,
} from 'react';
import styles from './otp-input.module.scss';

interface OtpInputFieldProps {
  value: string;
  onChange: (newValue: string) => void;
  isValid: (isValid: boolean) => void;
}

const OtpInputField: React.FC<OtpInputFieldProps> = ({
  value,
  onChange,
  isValid,
}) => {
  const [fieldValue, setFieldValue] = useState<string>('');
  const inputRefs = Array.from({ length: 6 }, () =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useRef<HTMLInputElement | null>(null)
  );

  const isNumber = (value: string): boolean => {
    // Use parseFloat to convert the string to a number
    // If the result is NaN, it's not a number
    return !isNaN(parseFloat(value)) && value.length < 2;
  };

  const handleInputChange = (index: number, inputValue: string) => {
    if (isNumber(inputValue)) {
      if (fieldValue.length === 7) {
        isValid(true);
      }
      if (inputRefs[index] && inputRefs[index].current) {
        inputRefs[index]!.current!.value = inputValue;
      }
      fieldValue === 'null'
        ? setFieldValue(inputValue)
        : setFieldValue(fieldValue + inputValue);
    }
  };

  const handleInputKeyDown = (
    index: number,
    e: KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Backspace' && index > 0 && !value[index]) {
      isValid(false);
      if (inputRefs[index] && inputRefs[index].current) {
        inputRefs[index]!.current!.value = '';
      }
      // Move focus to the previous input on backspace
      inputRefs[index - 1]?.current?.focus();
    }
  };

  useEffect(() => {
    if (fieldValue.length === 6) {
      onChange(fieldValue);
      isValid(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fieldValue]);

  useEffect(() => {
    // Move focus to the next input when a digit is entered
    const nextEmptyInput = inputRefs.findIndex((ref) => !ref?.current?.value);
    if (nextEmptyInput !== -1) {
      inputRefs[nextEmptyInput]?.current?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fieldValue]);

  return (
    <div className={styles['input-wrapper']}>
      {inputRefs.map((ref, index) => (
        <input
          className={styles['otp-input']}
          key={index}
          type="number"
          min={0}
          max={9}
          value={value[index]}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleInputChange(index, e.target.value)
          }
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
            handleInputKeyDown(index, e)
          }
          ref={ref}
        />
      ))}
    </div>
  );
};

export default OtpInputField;
