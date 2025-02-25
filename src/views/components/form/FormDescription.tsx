import { forwardRef } from 'react';
import { Text } from '@radix-ui/themes';
import { COLOR_MUTED } from '@/lib/constants';
import { useFormField } from './use-form-field';

const FormDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>((props, ref) => {
  const { formDescriptionId } = useFormField();

  return <Text as="p" ref={ref} {...props} id={formDescriptionId} size={'1'} color={COLOR_MUTED} />;
});

FormDescription.displayName = 'FormDescription';

export default FormDescription;
