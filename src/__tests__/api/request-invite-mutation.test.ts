import { act } from 'react';
import { describe, expect, it } from 'vitest';
import { waitFor } from '@testing-library/react';
import { renderHook } from '../utils';
import { isBadRequest, useRequestInviteMutation } from '@/api/request-invite-mutation';

describe(isBadRequest, () => {
  it('should return true for a "Bad Request"-prefixed error', () => {
    expect(isBadRequest(new Error('bad request: message content'))).toBe(true);
    expect(isBadRequest(new Error('Bad Request'))).toBe(true);
  });

  it('should return false otherwise', () => {
    expect(isBadRequest(null)).toBe(false);
    expect(isBadRequest(new Error(''))).toBe(false);
    expect(isBadRequest(new Error('other message'))).toBe(false);
  });
});

describe(useRequestInviteMutation, () => {
  it('should mutate successfully with correct parameters', async () => {
    const { result } = renderHook(() => useRequestInviteMutation({}));

    act(() => {
      result.current.mutate({ name: 'Bob Loblaw', email: 'bob.loblaw@airwallex.com' });
    });

    await waitFor(() => !result.current.isPending);
    expect(result.current.isError).toBe(false);
  });

  it('should return bad request when email is in use', async () => {
    const { result } = renderHook(() => useRequestInviteMutation({}));

    act(() => {
      result.current.mutate({ name: 'Bob Loblaw', email: 'usedemail@airwallex.com' });
    });

    await waitFor(() => !result.current.isPending);
    expect(result.current.isError).toBe(true);
    expect(result.current.error).toBeDefined();
  });
});
