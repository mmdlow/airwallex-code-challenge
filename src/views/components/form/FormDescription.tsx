import { forwardRef } from 'react';
import { useFormField } from './use-form-field';
import { Text } from '@radix-ui/themes';

const FormDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>((props, ref) => {
  const { formDescriptionId } = useFormField();

  // TODO semantic color
  return <Text as="p" ref={ref} {...props} id={formDescriptionId} size={'1'} color="gray" />;
});

FormDescription.displayName = 'FormDescription';

export default FormDescription;
