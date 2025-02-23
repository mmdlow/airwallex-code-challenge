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
import { InviteContext } from './InviteContext';

// TODO message constants
const FormSchema = z
  .object({
    name: z.string({ required_error: 'Name is required' }).min(3, { message: 'Name is too short' }),
    email: z
      .string({ required_error: 'Email is required' })
      .email({ message: 'Invalid email address' }),
    confirmEmail: z.string().email({ message: 'Invalid email address' }),
  })
  .refine(data => data.email === data.confirmEmail, {
    message: 'Emails do not match',
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
          Request an invite
        </Button>
      </Dialog.Trigger>

      {/* TODO extract maxWidth */}
      <Dialog.Content maxWidth={'450px'} aria-describedby={undefined}>
        <Dialog.Title>Request an invite</Dialog.Title>

        <FormProvider {...form}>
          <form id={formId} onSubmit={form.handleSubmit(onSubmit)}>
            <Flex direction={'column'} gap={'4'} py={'3'}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel required>Full name</FormLabel>
                    <FormControl>
                      <TextField.Root {...field} />
                    </FormControl>
                    <FormMessage />
                    {/* TODO extract message */}
                    <FormDescription>Name should be at least 3 characters.</FormDescription>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel required>Email</FormLabel>
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
                    <FormLabel required>Confirm email</FormLabel>
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
                  Cancel
                </Button>
              </Dialog.Close>

              <Button type="submit" loading={isPending}>
                Submit
              </Button>
            </Flex>
          </form>
        </FormProvider>
      </Dialog.Content>
    </Dialog.Root>
  );
});

export default RequestInviteDialog;
