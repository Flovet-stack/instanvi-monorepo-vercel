import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

import '@/providers/globals.css';
import 'remixicon/fonts/remixicon.css';
import 'react-phone-input-2/lib/style.css';
import { userContext } from '@/Components/context/context'
import { Data } from '@/Components/context/data';
import { AppProvider } from '@/providers/app';


type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const App = ({
  Component,
  pageProps,
}: AppProps & { Component: NextPageWithLayout }) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const Settings = Data()
  return <userContext.Provider value={Settings.settings}>
    <AppProvider>{getLayout(<Component {...pageProps} />)}</AppProvider>
  </userContext.Provider>
    ;
};

export default App;
