import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';

import { store } from '@/app/store';
import { IS_DEVELOPMENT } from '@/configs/constants';
import { queryClient } from '@/libs/react-query';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <>
      <Toaster />
      <QueryClientProvider client={queryClient}>
        {IS_DEVELOPMENT && <ReactQueryDevtools initialIsOpen={false} />}
        <ErrorBoundary
          fallback={<div>Something went wrong!</div>}
          onError={console.error}
        >
          <Provider store={store}>{children}</Provider>
        </ErrorBoundary>
      </QueryClientProvider>
    </>
  );
};
