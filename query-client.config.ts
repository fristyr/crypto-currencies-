import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'

export const queryClientConfig = new QueryClient({
    defaultOptions: {
        queries: {
            retryDelay: 1000,
            retry:0,
            refetchOnMount: false,
        }
    }
})
