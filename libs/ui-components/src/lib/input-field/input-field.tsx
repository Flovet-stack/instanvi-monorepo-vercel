'use client';

import './input-field.scss';
import 'tailwindcss/tailwind.css';

import React from 'react';
import {
  ControllerRenderProps,
  FieldErrors,
  FieldValues,
  Path,
} from 'react-hook-form';
import { Select } from 'antd';

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
      selectMode?: 'multiple' | 'tags';
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
  selectMode,
  ...props
}: InputFieldProps<T>) => {
  return (
    <div style={{ width }} className={'input-field'}>
      {label && !checkbox && !radio && <label>{label}</label>}
      {!select && (
        <>
          {!radio &&
            !checkbox &&
            (textarea ? (
              <textarea
                className={
                  (errors && errors[name]?.message) || isInvalid
                    ? 'input-error'
                    : 'input'
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
                    ? 'input-error'
                    : 'input'
                }
                type={type}
                placeholder={placeholder}
                {...field}
                {...props}
              />
            ))}
          {(checkbox || radio) && label && (
            <div className={'checkbox-wrapper'}>
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
        <Select
          placeholder="Select a person"
          mode={selectMode && selectMode}
          style={{ width: '100%' }}
          options={options}
          {...field}
          {...props}
        />
      )}
      {errors && errors[name]?.message && (
        <p className={'field-error'}>{errors[name]?.message as string}</p>
      )}
    </div>
  );
};
