import { useRequestInviteMutation } from '@/api/request-invite-mutation';
import { stripErrorPrefix } from '@/lib/strip-error-prefix';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/views/components/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Dialog, Flex, TextField } from '@radix-ui/themes';
import {
  ComponentPropsWithoutRef,
  ComponentRef,
  forwardRef,
  useContext,
  useEffect,
  useState,
} from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { ATTRIBUTES, ACTIONS, MSG_FORM } from '@/lib/constants';
import { InviteContext } from './InviteContext';
import { DIALOG_MAX_WIDTH } from './Dialog.utils';

const FormSchema = z
  .object({
    name: z
      .string({ required_error: MSG_FORM.ERR_NAME_REQUIRED })
      .min(3, { message: MSG_FORM.ERR_NAME_TOO_SHORT }),
    email: z
      .string({ required_error: MSG_FORM.ERR_EMAIL_REQUIRED })
      .email({ message: MSG_FORM.ERR_EMAIL_INVALID }),
    confirmEmail: z.string().email({ message: MSG_FORM.ERR_EMAIL_INVALID }),
  })
  .refine(data => data.email === data.confirmEmail, {
    message: MSG_FORM.ERR_EMAIL_NO_MATCH,
    path: ['confirmEmail'],
  });

const formId = 'request-invite-form';

const RequestInviteDialog = forwardRef<
  ComponentRef<typeof Button>,
  ComponentPropsWithoutRef<typeof Button>
>((props, ref) => {
  const { setOpenSuccessDialog } = useContext(InviteContext);
  const [open, setOpen] = useState(false);

  const { mutate: requestInvite, isPending } = useRequestInviteMutation({
    onSuccess: () => {
      setOpen(false);
      setOpenSuccessDialog(true);
    },
    onError: error => {
      form.setError('email', {
        type: 'in_use',
        message: stripErrorPrefix(error),
      });
    },
  });

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: { name: '', email: '', confirmEmail: '' },
    mode: 'onTouched',
  });

  const onSubmit: SubmitHandler<z.infer<typeof FormSchema>> = async ({ name, email }) => {
    requestInvite({ name, email });
  };

  useEffect(() => {
    if (open) form.reset();
  }, [open, form]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <Button ref={ref} size={'3'} {...props}>
          {ACTIONS.REQUEST_INVITE}
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth={DIALOG_MAX_WIDTH} aria-describedby={undefined}>
        <Dialog.Title>{MSG_FORM.TITLE}</Dialog.Title>

        <FormProvider {...form}>
          <form id={formId} onSubmit={form.handleSubmit(onSubmit)}>
            <Flex direction={'column'} gap={'4'} py={'3'}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel required>{ATTRIBUTES.NAME}</FormLabel>
                    <FormControl>
                      <TextField.Root {...field} />
                    </FormControl>
                    <FormMessage />
                    <FormDescription>{MSG_FORM.HINT_NAME_REQUIRED}</FormDescription>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel required>{ATTRIBUTES.EMAIL}</FormLabel>
                    <FormControl>
                      <TextField.Root {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel required>{MSG_FORM.EMAIL_CONFIRM}</FormLabel>
                    <FormControl>
                      <TextField.Root {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Flex>

            <Flex gap={'2'} justify={'end'} pt={'3'}>
              <Dialog.Close>
                <Button variant={'soft'} color="gray">
                  {ACTIONS.CANCEL}
                </Button>
              </Dialog.Close>

              <Button type="submit" loading={isPending}>
                {ACTIONS.SEND}
              </Button>
            </Flex>
          </form>
        </FormProvider>
      </Dialog.Content>
    </Dialog.Root>
  );
});

export default RequestInviteDialog;
