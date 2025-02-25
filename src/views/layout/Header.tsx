import { Box, Flex, Heading } from '@radix-ui/themes';
import clsx from 'clsx';
import { MSG_BRAND } from '@/lib/messages';
import { navHeight, navPaddingX, navPaddingY } from './Layout.utils';
import styles from './Layout.module.css';

const Header = () => {
  return (
    <Box
      asChild
      className={clsx(styles.LayoutNav, styles.Header)}
      height={navHeight}
      px={navPaddingX}
      py={navPaddingY}
      flexShrink={'0'}
      position={'sticky'}
      top={'0'}
    >
      <header>
        <Flex align={'center'} gap={'2'} height={'100%'}>
          <Heading>{MSG_BRAND}</Heading>
        </Flex>
      </header>
    </Box>
  );
};

export default Header;
