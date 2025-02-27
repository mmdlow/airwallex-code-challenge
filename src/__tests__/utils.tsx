import { FC, PropsWithChildren, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Theme } from '@radix-ui/themes';
import { COLOR_ACCENT } from '@/lib/constants';
import {
  RenderOptions,
  RenderHookOptions,
  render as originalRender2,
  renderHook as originalRenderHook2,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router';

const queryClient = new QueryClient();

// eslint-disable-next-line react-refresh/only-export-components
const TestRenderWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Theme accentColor={COLOR_ACCENT}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>{children}</BrowserRouter>
      </QueryClientProvider>
    </Theme>
  );
};

export const render = ((ui: ReactNode, options?: RenderOptions) =>
  originalRender2(ui, { wrapper: TestRenderWrapper, ...options })) as typeof originalRender2;

export const renderHook = (<Props, Result>(
  callback: (initialProps?: Props) => Result,
  options?: RenderHookOptions<Props>,
) =>
  originalRenderHook2(callback, {
    wrapper: TestRenderWrapper,
    ...options,
  })) as typeof originalRenderHook2;
