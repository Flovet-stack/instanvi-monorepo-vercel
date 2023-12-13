import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode, createContext, useState } from 'react';

import '@/providers/globals.css';
import 'remixicon/fonts/remixicon.css';
import 'react-phone-input-2/lib/style.css';
import { AppProvider } from '@/providers/app';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export const CurrentUserContext = createContext<any>(null);

const App = ({
  Component,
  pageProps,
}: AppProps & { Component: NextPageWithLayout }) => {
  const [usern, setUsern] = useState();
  const [ageDistribution, setAgeDistribution] = useState([]);
  const [maritalStatus, setMaritalStatus] = useState([]);
  const [incomeLevel, setIncomeLevel] = useState([]);
  const [language, setLanguage] = useState([]);
  const [audience, setAudience] = useState([]);
  const [location, setLocation] = useState([]);
  const [sex, setSex] = useState([]);
  const [age, setAge] = useState([]);
  const [income, setIncome] = useState([]);
  const [marital, setMarital] = useState([]);
  const [interest, setInterest] = useState([]);
  const [industry, setIndustry] = useState([]);
  const [device, setDevice] = useState([]);
  const [operatingSystem, setOperatingSystem] = useState([]);
  const [offLimit, setOffLimit] = useState([]);
  const [carrier, setCarrier] = useState([]);

  const values = {
    usern,
    setUsern,
    ageDistribution,
    setAgeDistribution,
    maritalStatus,
    setMaritalStatus,
    incomeLevel,
    setIncomeLevel,
    language,
    setLanguage,
    audience,
    setAudience,
    location,
    setLocation,
    sex,
    setSex,
    age,
    setAge,
    income,
    setIncome,
    marital,
    setMarital,
    interest,
    setInterest,
    industry,
    setIndustry,
    device,
    setDevice,
    operatingSystem,
    setOperatingSystem,
    offLimit,
    setOffLimit,
    carrier,
    setCarrier,
  };

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CurrentUserContext.Provider value={values}>
      <AppProvider>{getLayout(<Component {...pageProps} />)}</AppProvider>
    </CurrentUserContext.Provider>
  );
};

export default App;
