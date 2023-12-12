'use client';

import styles from './input-field.module.scss';
import 'tailwindcss/tailwind.css';

import React from 'react';
import {
  ControllerRenderProps,
  FieldErrors,
  FieldValues,
  Path,
} from 'react-hook-form';

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
      options?: { label: string; value: string }[];
      type: string;
      field?: ControllerRenderProps<FieldValues, string>;
      errors?: FieldErrors;
      width?: number;
      isInvalid?: boolean;
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
  errors,
  id,
  cols,
  rows,
  field,
  width,
  isInvalid,
  ...props
}: InputFieldProps<T>) => {
  return (
    <div style={{ width }} className={styles['input-field']}>
      {label && !checkbox && !radio && <label>{label}</label>}
      {!select && (
        <>
          {!radio &&
            !checkbox &&
            (textarea ? (
              <textarea
                className={
                  (errors && errors[name]?.message) || isInvalid
                    ? styles['input-error']
                    : styles['input']
                }
                placeholder={placeholder}
                cols={cols}
                rows={rows ? 1 : 10}
                {...field}
                {...props}
              />
            ) : (
              <input
                className={
                  (errors && errors[name]?.message) || isInvalid
                    ? styles['input-error']
                    : styles['input']
                }
                type={type}
                placeholder={placeholder}
                {...field}
                {...props}
              />
            ))}
          {(checkbox || radio) && label && (
            <div className={styles['checkbox-wrapper']}>
              <input
                className="form-checkbox"
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
          className={`w-full py-2.5 border  rounded-md outline-none pl-2`}
          placeholder={placeholder}
          {...field}
          {...props}
        >
          <option value="" selected disabled>
            {placeholder}
          </option>
          {options &&
            options.map(
              (option: { label: string; value: string }, index: number) => {
                return (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                );
              }
            )}
        </select>
      )}
      {errors && errors[name]?.message && (
        <p className={styles['field-error']}>
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};
