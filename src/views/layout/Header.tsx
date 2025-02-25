import { Box, Flex, Heading } from '@radix-ui/themes';

const Header = () => {
  return (
    // TODO refactor consts
    <Box
      asChild
      height={'52px'}
      px={'4'}
      flexShrink={'0'}
      position={'sticky'}
      top={'0'}
      style={{
        background: 'var(--gray-1)',
        borderBottom: '1px solid var(--gray-a5)',
        zIndex: 999,
      }}
    >
      <header>
        <Flex align={'center'} gap={'2'} height={'100%'}>
          <Heading>Broccoli & Co</Heading>
        </Flex>
      </header>
    </Box>
  );
};

export default Header;
