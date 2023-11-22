// user type
export type UserType = {
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  country: string;
  phone: string;
  town: string;
  gender: string;
  etatCivil: string;
};

export type StatusType = 'idle' | 'loading' | 'failed';

export type NotificationType =
  | 'success'
  | 'info'
  | 'warning'
  | 'error';
