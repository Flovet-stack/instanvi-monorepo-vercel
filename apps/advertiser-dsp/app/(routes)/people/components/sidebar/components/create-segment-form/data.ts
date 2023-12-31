import * as yup from 'yup';

export interface CreateSegmentFormData {
  name: string;
  startDate: string;
  endDate: string;
  birthDay: string;
  birthMonth: string;
  birthYear: string;
  gender: string;
  tags: string;
  location: string;
  status: string;
}

export const createSegmentSchema = yup.object().shape({
  name: yup.string().required(),
  startDate: yup.string().required(),
  endDate: yup.string().required(),
  birthDay: yup.string().required(),
  birthMonth: yup.string().required(),
  birthYear: yup.string().required(),
  gender: yup.string().required(),
  tags: yup.string().required(),
  location: yup.string().required(),
  status: yup.string().required(),
});

export const genderOptions = [
  {
    label: 'Male',
    value: 'male',
  },
  {
    label: 'Female',
    value: 'female',
  },
];

export const statusOptions = [
  {
    label: 'Active',
    value: 'active',
  },
  {
    label: 'Inactive',
    value: 'inactive',
  },
];
