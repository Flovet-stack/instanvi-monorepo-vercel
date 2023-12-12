/* eslint-disable-next-line */

import { Control, Controller, FieldValues } from 'react-hook-form';
import { InputField, InputFieldProps } from '../input-field/input-field';

export interface ControllerInputProps<T extends FieldValues>
  extends InputFieldProps<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
}

export const ControllerInput: React.FC<ControllerInputProps<FieldValues>> = ({
  name,
  control,
  type,
  ...props
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <InputField name={name} type={type} field={field} {...props} />
      )}
    />
  );
};
