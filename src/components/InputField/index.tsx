import React from 'react';
import {
  
  Controller,
  FieldErrors,
  FieldValues,
  Path,
} from 'react-hook-form';


import { capitalizeFirstLetter } from '@/helpers';
import './input-field.css';

type InputFieldProps<T> = React.InputHTMLAttributes<HTMLInputElement> & {
  name: Path<T>;
  placeholder?: string;
  label?: string;
  textarea?: boolean;
  select?: boolean;
  checkbox?: boolean;
  radio?: boolean;
  options?: unknown;
  type: string;
  control?: Control<T>;
  errors?: FieldErrors;
};

const InputField = <T extends FieldValues>({
  name,
  placeholder,
  label,
  size: _,
  options,
  select,
  textarea,
  type,
  checkbox,
  radio,
  control,
  errors,
  id,
  ...props
}: InputFieldProps<T>) => {
  let InputComponent = 'input';
  if (textarea) {
    InputComponent = 'textarea';
  } else if (select) {
    InputComponent = 'select';
  }

  return (
    <div className="input-field">
      {label && !checkbox && !radio && <label>{label}</label>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <div>
            {!select && (
              <>
                {!radio && !checkbox && (
                  <InputComponent
                    className={`w-full py-2.5 px-2 border ${errors && errors[name]
                      ? 'border-red-500'
                      : 'border-gray-200'
                      } rounded-md outline-none`}
                    type={type}
                    placeholder={placeholder}
                    {...field}
                    {...props}
                  />
                )}
                {(checkbox || radio) && label && (
                  <div className="checkbox-wrapper flex items-center gap-2">
                    <InputComponent
                      className="form-checkbox h-4 w-4 transition-duration-150 ease-in-out"
                      type={type}
                      placeholder={placeholder}
                      {...field}
                      {...props}
                      id={id}
                    />
                    <span></span>
                    <label htmlFor={id}>
                      {capitalizeFirstLetter(label ?? '')}
                    </label>
                  </div>
                )}
              </>
            )}
            {select && (
              <InputComponent
                className={`w-full py-2.5 border ${errors && errors[name] ? 'border-red-500' : 'border-gray-200'
                  } rounded-md outline-none pl-2`}
                type={type}
                placeholder={placeholder}
                {...field}
                {...props}
              >
                <option value="" selected disabled>
                  {placeholder}
                </option>
                {options &&
                  options.map((option: any, index: number) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
              </InputComponent>
            )}
          </div>
        )}
      />
      {errors && errors[name]?.message && (
        <p className="field-error text-red-500 text-5">
          {capitalizeFirstLetter(errors[name]?.message as string)}
        </p>
      )}
    </div>
  );
};

export default InputField;
