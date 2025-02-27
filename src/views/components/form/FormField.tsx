import { FieldValues, FieldPath, ControllerProps, Controller } from 'react-hook-form';
import { FormFieldContext } from './use-form-field';

/**
 * Wraps the react-hook-form `Controller` component to provide its utils to child `Form*`
 * components. Also acts as the context provider component for `FormFieldContext`.
 */
const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

export default FormField;
