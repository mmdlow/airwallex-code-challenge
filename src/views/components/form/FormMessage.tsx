import { forwardRef } from 'react';
import { useFormField } from './use-form-field';
import { Text } from '@radix-ui/themes';

const FormMessage = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;

    if (!body) {
      return null;
    }

    return (
      // TODO semantic color
      <Text as="p" ref={ref} {...props} id={formMessageId} size={'1'} color="red" weight={'medium'}>
        {body}
      </Text>
    );
  },
);

FormMessage.displayName = 'FormMessage';

export default FormMessage;
