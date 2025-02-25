import { Responsive } from '@radix-ui/themes/props';

export const layoutPaddingX: Responsive<string> = {
  initial: '4',
  sm: '6',
};

export const navPaddingX = layoutPaddingX;

export const navPaddingY: Responsive<string> = {
  initial: '3',
  sm: '0',
};

export const navHeight = {
  initial: 'auto',
  sm: '66px',
} satisfies Responsive<string>;
