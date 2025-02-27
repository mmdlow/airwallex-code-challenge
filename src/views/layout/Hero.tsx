import { ComponentPropsWithoutRef, ComponentRef, forwardRef, ImgHTMLAttributes } from 'react';
import { AspectRatio, Container, Flex, Heading, Section, Text } from '@radix-ui/themes';
import clsx from 'clsx';
import { layoutPaddingX } from './Layout.utils';
import styles from './Hero.module.css';

const HeroContainer = forwardRef<
  ComponentRef<typeof Container>,
  ComponentPropsWithoutRef<typeof Container>
>(({ children, ...props }, ref) => (
  <Container ref={ref} size={'4'} px={layoutPaddingX} {...props}>
    <Flex height={'100%'} direction={'column'} align={'center'} justify={'center'}>
      <Section>
        <Flex gap={'6'} direction={'column'} align={'center'}>
          {children}
        </Flex>
      </Section>
    </Flex>
  </Container>
));

HeroContainer.displayName = 'HeroContainer';

const HeroImage = forwardRef<HTMLImageElement, ImgHTMLAttributes<HTMLImageElement>>(
  ({ className, ...props }, ref) => (
    <AspectRatio ratio={4 / 3}>
      <img ref={ref} className={clsx(styles.HeroImage, className)} {...props} />
    </AspectRatio>
  ),
);

HeroImage.displayName = 'HeroImage';

const HeroTitle = forwardRef<
  ComponentRef<typeof Heading>,
  ComponentPropsWithoutRef<typeof Heading>
>(({ children, ...props }, ref) => (
  <Heading ref={ref} as="h1" size={{ initial: '8', sm: '9' }} align={'center'} {...props}>
    {children}
  </Heading>
));

HeroTitle.displayName = 'HeroTitle';

const HeroSubtitle = forwardRef<ComponentRef<typeof Text>, ComponentPropsWithoutRef<typeof Text>>(
  ({ children, ...props }, ref) => (
    <Text ref={ref} size={{ initial: '5', sm: '6' }} weight={'medium'} align={'center'} {...props}>
      {children}
    </Text>
  ),
);

HeroSubtitle.displayName = 'HeroSubtitle';

export { HeroContainer, HeroImage, HeroTitle, HeroSubtitle };
