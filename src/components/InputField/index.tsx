import React from 'react';
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
} from 'react-hook-form';

import { capitalizeFirstLetter } from '@/helpers';

import './input-field.css';

interface Option {
  label: string;
  value: string;
}

export type InputFieldProps<T extends FieldValues> =
  React.InputHTMLAttributes<HTMLInputElement> &
    React.TextareaHTMLAttributes<HTMLTextAreaElement> &
    React.SelectHTMLAttributes<HTMLSelectElement> & {
      name: Path<T>;
      placeholder?: string;
      label?: string;
      textarea?: boolean;
      select?: boolean;
      checkbox?: boolean;
      radio?: boolean;
      options?: Option[];
      type: string;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      control: Control<any>;
      errors?: FieldErrors;
      width?: number;
      isInvalid?: boolean;
    };

const InputField = <T extends FieldValues>({
  name,
  placeholder,
  label,
  // size: _,
  options,
  select,
  textarea,
  type,
  control,
  checkbox,
  radio,
  errors,
  id,
  cols,
  rows,
  ...props
}: InputFieldProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={() => (
        <div className="input-field">
          {label && !checkbox && !radio && <label>{label}</label>}
          {!select && (
            <>
              {!radio &&
                !checkbox &&
                (textarea ? (
                  <textarea
                    className={`w-full py-2.5 border ${
                      errors && errors[name]
                        ? 'border-red-500'
                        : 'border-gray-200'
                    } rounded-md outline-none pl-2`}
                    placeholder={placeholder}
                    cols={cols}
                    rows={rows ? 1 : 10}
                    {...props}
                  />
                ) : (
                  <input
                    className={`w-full py-2.5 border ${
                      errors && errors[name]
                        ? 'border-red-500'
                        : 'border-gray-200'
                    } rounded-md outline-none pl-2`}
                    type={type}
                    placeholder={placeholder}
                    {...props}
                  />
                ))}
              {(checkbox || radio) && label && (
                <div className={'checkbox-wrapper'}>
                  <input
                    className="form-checkbox"
                    type={type}
                    placeholder={placeholder}
                    {...props}
                    id={id}
                  />
                  <span></span>
                  <label htmlFor={id}>{label ?? ''}</label>
                </div>
              )}
            </>
          )}
          {select && (
            <select
              className={`w-full py-2.5 border  rounded-md outline-none pl-2`}
              placeholder={placeholder}
              {...props}
            >
              <option value="" selected disabled>
                {placeholder}
              </option>
              {options &&
                options.map((option: Option, index: number) => {
                  return (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  );
                })}
            </select>
          )}
          {errors && errors[name]?.message && (
            <p className="field-error text-red-500 text-5">
              {capitalizeFirstLetter(errors[name]?.message as string)}
            </p>
          )}
        </div>
      )}
    />
  );
};

export default InputField;
