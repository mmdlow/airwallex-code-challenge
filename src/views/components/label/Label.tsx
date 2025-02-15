import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';
import * as RadixLabel from '@radix-ui/react-label';
import { Text } from '@radix-ui/themes';

const Label = forwardRef<
  ComponentRef<typeof RadixLabel.Root>,
  ComponentPropsWithoutRef<typeof RadixLabel.Root>
>(({ children, ...props }, ref) => (
  <RadixLabel.Root ref={ref} {...props} asChild>
    <Text as="div" size={'2'} mb={'1'} weight={'bold'}>
      {children}
    </Text>
  </RadixLabel.Root>
));

export default Label;
