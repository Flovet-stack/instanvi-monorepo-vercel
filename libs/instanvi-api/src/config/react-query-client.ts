import { QueryClient, QueryClientConfig } from '@tanstack/react-query';

export const instanviQueryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      //   useErrorBoundary: true,
    },
  },
};

// export const instanviQueryClient: QueryClient = new QueryClient(instanviQueryClientConfig);
