/// <reference types="@testing-library/jest-dom" />

import '@testing-library/jest-dom/vitest';
import '@radix-ui/themes/styles.css';
import '@/styles/index.css';
import { setupServer } from 'msw/node';
import { apiMock } from './mocks/api';
import { afterAll, beforeAll, afterEach } from 'vitest';

export const mswServer = setupServer(...apiMock);

beforeAll(() => {
  console.log('Starting MSW server');

  mswServer.listen({ onUnhandledRequest: 'error' });
});

afterAll(() => {
  mswServer.close();
});

afterEach(() => {
  mswServer.resetHandlers();
});
