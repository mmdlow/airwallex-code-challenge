import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';
import * as RadixLabel from '@radix-ui/react-label';
import { Text } from '@radix-ui/themes';
import { COLOR_ERROR } from '@/lib/constants';
import { useFormField } from './use-form-field';

interface FormLabelProps extends ComponentPropsWithoutRef<typeof RadixLabel.Root> {
  required?: boolean;
}

const Label = forwardRef<ComponentRef<typeof RadixLabel.Root>, FormLabelProps>(
  ({ children, required = false, ...props }, ref) => {
    const { formItemId, error } = useFormField();

    return (
      <RadixLabel.Root ref={ref} htmlFor={formItemId} {...props} asChild>
        <Text as="div" size={'2'} mb={'1'} weight={'bold'} color={error && COLOR_ERROR}>
          {children}
          {required && <sup aria-hidden>*</sup>}
        </Text>
      </RadixLabel.Root>
    );
  },
);

export default Label;
