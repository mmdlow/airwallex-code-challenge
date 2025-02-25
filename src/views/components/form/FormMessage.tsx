import { forwardRef } from 'react';
import { Text } from '@radix-ui/themes';
import { COLOR_ERROR } from '@/lib/constants';
import { useFormField } from './use-form-field';

const FormMessage = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;

    if (!body) {
      return null;
    }

    return (
      <Text
        as="p"
        ref={ref}
        {...props}
        id={formMessageId}
        size={'1'}
        color={COLOR_ERROR}
        weight={'medium'}
      >
        {body}
      </Text>
    );
  },
);

FormMessage.displayName = 'FormMessage';

export default FormMessage;
