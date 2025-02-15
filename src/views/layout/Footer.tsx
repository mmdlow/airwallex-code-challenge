import { Flex, Text } from '@radix-ui/themes';

const Footer = () => {
  return (
    // TODO refactor consts
    <Flex
      asChild
      minHeight={'52px'}
      direction={'column'}
      align={'center'}
      justify={'center'}
      px={{ initial: '6', sm: '4' }}
      py={{ initial: '6', sm: '4' }}
      flexShrink={'0'}
      gap={'2'}
      style={{
        background: 'var(--gray-1)',
        borderTop: '1px solid var(--gray-a5)',
      }}
    >
      <footer>
        <Text>Made with ❤️ in Singapore.</Text>
        <Text>Copyright Broccoli & Co. All rights reserved.</Text>
      </footer>
    </Flex>
  );
};

export default Footer;
