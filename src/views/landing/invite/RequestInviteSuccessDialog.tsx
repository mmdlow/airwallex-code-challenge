import { Box, Button, Dialog, Flex, Heading, Text, VisuallyHidden } from '@radix-ui/themes';
import { useContext } from 'react';
import { InviteContext } from './InviteContext';

const RequestInviteSuccessDialog = () => {
  const { openSuccessDialog, setOpenSuccessDialog } = useContext(InviteContext);

  return (
    <Dialog.Root open={openSuccessDialog} onOpenChange={setOpenSuccessDialog}>
      {/* TODO extract maxWidth */}
      {/* TODO extract message */}
      <Dialog.Content maxWidth={'450px'} aria-describedby={undefined}>
        <VisuallyHidden>
          <Dialog.Title>Request success</Dialog.Title>
        </VisuallyHidden>
        <Flex direction={'column'} gap={'4'} justify={'center'} align={'center'}>
          <Heading size={'8'}>🎉</Heading>

          <Heading>All done!</Heading>

          <Text>Great to have you on board! Stayed tuned for your welcome email.</Text>

          <Box>
            <Dialog.Close>
              <Button>Close</Button>
            </Dialog.Close>
          </Box>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default RequestInviteSuccessDialog;
