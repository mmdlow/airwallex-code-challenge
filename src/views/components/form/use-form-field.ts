import { createContext, useContext } from 'react';
import { FieldPath, FieldValues, useFormContext } from 'react-hook-form';

interface FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  name: TName;
}

interface FormItemContextValue {
  id: string;
}

const FormFieldContext = createContext<FormFieldContextValue>({} as FormFieldContextValue);

const FormItemContext = createContext<FormItemContextValue>({} as FormItemContextValue);

/**
 * Hook to provide `FormFieldContext` and `FormItemContext` data to child components.
 * Generally used by `Form*` components, all of which must be wrapped in the `FormField` component
 * which in turn wraps them in the context provider components.
 *
 * Based on https://ui.shadcn.com/docs/components/form
 *
 * @returns
 */
function useFormField() {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  if (!fieldContext) {
    throw new Error('useFormField must be used within <FormField>');
  }

  const fieldState = getFieldState(fieldContext.name, formState);
  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formMessageId: `${id}-form-message`,
    formDescriptionId: `${id}-form-description`,
    ...fieldState,
  };
}

export type { FormFieldContextValue, FormItemContextValue };
export { FormFieldContext, FormItemContext, useFormField };
