import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { createMutationFn } from './api';

interface RequestInvitePayload {
  name: string;
  email: string;
}

/**
 * Simple utility function to check if an error is a Bad Request error, signalling an email is
 * already in use.
 * @param error
 * @returns
 */
function isBadRequest(error: Error | null) {
  const prefix = 'Bad Request'.toLocaleLowerCase();
  return error?.message.toLocaleLowerCase().startsWith(prefix) ?? false;
}

/**
 * Mutation function for managing request invite requests.
 * @param options
 * @returns
 */
function useRequestInviteMutation(
  options: Omit<UseMutationOptions<void, Error, RequestInvitePayload>, 'mutationFn'>,
) {
  return useMutation<void, Error, RequestInvitePayload>({
    mutationFn: createMutationFn({ path: 'fake-auth', fetchOpts: { method: 'POST' } }),
    ...options,
  });
}

export type { RequestInvitePayload };
export { useRequestInviteMutation, isBadRequest };
