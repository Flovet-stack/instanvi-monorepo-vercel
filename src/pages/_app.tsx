import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import '@/providers/globals.css';
import "remixicon/fonts/remixicon.css";
import "react-phone-input-2/lib/style.css";
import { AppProvider } from '@/providers/app';


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

  return <AppProvider>{pageContent}</AppProvider>;
};

export default App;
