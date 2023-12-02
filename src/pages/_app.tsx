import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import React, { ReactElement, ReactNode, createContext, useState } from 'react';
import '@/providers/globals.css';
import "remixicon/fonts/remixicon.css";
import "react-phone-input-2/lib/style.css";
import { AppProvider } from '@/providers/app';
import { userContext } from "@/Components/context/context";
import { Data } from '@/Components/context/data'


type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({
  Component,
  pageProps,
}: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout ?? ((page) => page);

  const pageContent = getLayout(
    <Component {...pageProps} />
  );

  const Datas = Data()


  return (

    <userContext.Provider value={Datas.settings}>
      <AppProvider>{pageContent}</AppProvider>
    </userContext.Provider>

  );
};

export default App;
