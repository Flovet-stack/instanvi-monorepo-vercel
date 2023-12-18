import { createContext, useContext } from 'react';

interface UserContextProps {
  ageDistribution: string[];
  setAgeDistribution: (ageDistribution: string[]) => void;
  maritalStatus: string[];
  setMaritalStatus: (maritalStatus: string[]) => void;
  incomeLevel: string[];
  setIncomeLevel: (incomeLevel: string[]) => void;
  audience: string[];
  setAudience: (audience: string[]) => void;
  language: string[];
  setLanguage: (language: string[]) => void;
  usern: string;
  setUsern: (usern: string) => void;
  location: string;
  setLocation: (location: string) => void;
}

export const userContext = createContext<UserContextProps>({
  ageDistribution: [],
  setAgeDistribution: () => {},
  maritalStatus: [],
  setMaritalStatus: () => {},
  incomeLevel: [],
  setIncomeLevel: () => {},
  language: [],
  setLanguage: () => {},
  audience: [],
  setAudience: () => {},
  usern: 's',
  setUsern: () => {},
  location: '',
  setLocation: () => {},
});

export const AuthContext = () => useContext(userContext);
