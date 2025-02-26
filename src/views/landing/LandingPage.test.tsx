/// <reference types="@vitest/browser/providers/playwright" />
import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-react';
import LandingPage from './LandingPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Theme } from '@radix-ui/themes';
import { COLOR_ACCENT } from '@/lib/constants';

describe(LandingPage, () => {
  it('should render correctly', async () => {
    const { getByText, getByRole } = render(
      <Theme accentColor={COLOR_ACCENT}>
        <QueryClientProvider client={new QueryClient()}>
          <LandingPage />
        </QueryClientProvider>
      </Theme>,
    );

    await expect.element(getByText('A better way')).toBeInTheDocument();
    await getByRole('button', { name: 'Request an invite' }).click();
    await expect.element(getByText('Full name*')).toBeInTheDocument();
  });
});
