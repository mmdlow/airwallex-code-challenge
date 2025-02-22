import { ComponentPropsWithoutRef, ComponentRef, forwardRef, useId } from 'react';
import { FormItemContext } from './use-form-field';
import { Flex } from '@radix-ui/themes';

const FormItem = forwardRef<ComponentRef<typeof Flex>, ComponentPropsWithoutRef<typeof Flex>>(
  (props, ref) => {
    const id = useId();

    return (
      <FormItemContext.Provider value={{ id }}>
        <Flex ref={ref} direction={'column'} gapY={'2'} {...props} />
      </FormItemContext.Provider>
    );
  },
);

FormItem.displayName = 'FormItem';

export default FormItem;
