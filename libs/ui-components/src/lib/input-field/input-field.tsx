'use client';

import styles from './input-field.module.scss';

import React from 'react';
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
} from 'react-hook-form';

type InputFieldProps<T extends FieldValues> =
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
      options?: { label: string; value: string }[];
      type: string;
      control?: Control<T>;
      errors?: FieldErrors;
    };

export const InputField = <T extends FieldValues>({
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
  cols,
  rows,
  ...props
}: InputFieldProps<T>) => {
  return (
    <div className={styles['input-field']}>
      {label && !checkbox && !radio && <label>{label}</label>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <div>
            {!select && (
              <>
                {!radio &&
                  !checkbox &&
                  (textarea ? (
                    <textarea
                      className={`w-full py-2.5 px-2 border ${
                        errors && errors[name]
                          ? 'border-red-500'
                          : 'border-gray-200'
                      } rounded-md outline-none`}
                      placeholder={placeholder}
                      {...field}
                      {...props}
                    />
                  ) : (
                    <input
                      className={`w-full py-2.5 px-2 border ${
                        errors && errors[name]
                          ? 'border-red-500'
                          : 'border-gray-200'
                      } rounded-md outline-none`}
                      type={type}
                      placeholder={placeholder}
                      {...field}
                      {...props}
                    />
                  ))}
                {(checkbox || radio) && label && (
                  <div className="checkbox-wrapper flex items-center gap-2">
                    <input
                      className="form-checkbox h-4 w-4 transition-duration-150 ease-in-out"
                      type={type}
                      placeholder={placeholder}
                      {...field}
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
                className={`w-full py-2.5 border ${
                  errors && errors[name] ? 'border-red-500' : 'border-gray-200'
                } rounded-md outline-none pl-2`}
                placeholder={placeholder}
                {...field}
                {...props}
              >
                <option value="" selected disabled>
                  {placeholder}
                </option>
                {options &&
                  options.map(
                    (
                      option: { label: string; value: string },
                      index: number
                    ) => {
                      return (
                        <option key={index} value={option.value}>
                          {option.label}
                        </option>
                      );
                    }
                  )}
              </select>
            )}
          </div>
        )}
      />
      {errors && errors[name]?.message && (
        <p className="field-error text-red-500 text-5">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};
