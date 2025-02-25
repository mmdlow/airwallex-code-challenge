import { Flex, Text } from '@radix-ui/themes';
import { navHeight, navPaddingX, navPaddingY } from './Layout.utils';
import clsx from 'clsx';
import styles from './Layout.module.css';
import { MSG_FOOTER } from '@/lib/constants';

const Footer = () => {
  return (
    <Flex
      asChild
      className={clsx(styles.LayoutNav, styles.Footer)}
      height={navHeight}
      direction={{ initial: 'column', xs: 'row' }}
      align={'center'}
      justify={'between'}
      px={navPaddingX}
      py={navPaddingY}
      flexShrink={'0'}
      gap={'2'}
    >
      <footer>
        <Text align={{ initial: 'center', xs: 'left' }}>{MSG_FOOTER[0]}</Text>
        <Text>{MSG_FOOTER[1]}</Text>
      </footer>
    </Flex>
  );
};

export default Footer;
