import { API_URL } from '@/lib/constants';

interface ErrorResponse {
  errorMessage: string;
}

interface CreateFetchFnOpts {
  path: string;
  fetchOpts: Omit<RequestInit, 'body'>;
}

/**
 * Creates a mutation function that internally calls `fetch` with the supplied options, returns the
 * fetched response and/or handles fetch errors. Its response should be passed to the `mutationFn`
 * prop of `useMutation`.
 * @param options fetch options
 * @returns
 */
function createMutationFn<Payload, Response>({ path, fetchOpts }: CreateFetchFnOpts) {
  return async (payload: Payload) => {
    try {
      const res = await fetch(`${API_URL}/${path}`, {
        ...fetchOpts,
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errRes = (await res.json()) as ErrorResponse;
        throw new Error(errRes.errorMessage);
      }

      return (await res.json()) as Response;
    } catch (error) {
      if (!(error instanceof Error)) throw new Error('Unknown error');

      // Alternate errors from backend may not conform to `ErrorResponse` interface
      if (error.name === 'TypeError') throw new Error('Network error');

      throw error;
    }
  };
}

export type { ErrorResponse, CreateFetchFnOpts };
export { createMutationFn };
