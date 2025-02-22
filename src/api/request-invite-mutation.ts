import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { createMutationFn } from './api';

interface RequestInvitePayload {
  name: string;
  email: string;
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
    // TODO default onError handling, maybe with toasts
    ...options,
  });
}

export type { RequestInvitePayload };
export { useRequestInviteMutation };
