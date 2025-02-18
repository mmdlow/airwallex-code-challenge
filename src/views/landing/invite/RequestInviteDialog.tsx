import { Label } from '@/views/components/label';
import { Box, Button, Dialog, Flex, TextField } from '@radix-ui/themes';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

const RequestInviteDialog = forwardRef<
  ComponentRef<typeof Button>,
  ComponentPropsWithoutRef<typeof Button>
>((props, ref) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button ref={ref} size={'3'} {...props}>
          Request an invite
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth={'450px'} aria-describedby={undefined}>
        <Dialog.Title>Request an invite</Dialog.Title>

        <Flex direction={'column'} gap={'3'} py={'3'}>
          <Box>
            <Label htmlFor="fullName">Full name</Label>
            <TextField.Root id="fullName" type="text" />
          </Box>

          <Box>
            <Label htmlFor="email">Email</Label>
            <TextField.Root id="email" type="email" />
          </Box>

          <Box>
            <Label htmlFor="confirmEmail">Confirm email</Label>
            <TextField.Root id="confirmEmail" type="email" />
          </Box>
        </Flex>

        <Flex gap={'2'} justify={'end'} pt={'3'}>
          <Dialog.Close>
            <Button>Submit</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
});

export default RequestInviteDialog;
