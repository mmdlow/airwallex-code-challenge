import { Box, Button, Dialog, Flex, Heading, Text, VisuallyHidden } from '@radix-ui/themes';
import { useContext } from 'react';
import { MSG_INVITE_SUCCESS } from '@/lib/constants';
import { InviteContext } from './InviteContext';
import { DIALOG_MAX_WIDTH } from './Dialog.utils';

const RequestInviteSuccessDialog = () => {
  const { openSuccessDialog, setOpenSuccessDialog } = useContext(InviteContext);

  return (
    <Dialog.Root open={openSuccessDialog} onOpenChange={setOpenSuccessDialog}>
      <Dialog.Content maxWidth={DIALOG_MAX_WIDTH} aria-describedby={undefined}>
        <VisuallyHidden>
          <Dialog.Title>{MSG_INVITE_SUCCESS.TITLE}</Dialog.Title>
        </VisuallyHidden>
        <Flex direction={'column'} gap={'4'} justify={'center'} align={'center'}>
          <Heading size={'8'}>🎉</Heading>

          <Heading>{MSG_INVITE_SUCCESS.SUBTITLE_0}</Heading>

          <Text>{MSG_INVITE_SUCCESS.SUBTITLE_1}</Text>

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
