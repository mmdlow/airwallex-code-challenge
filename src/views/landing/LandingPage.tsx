import { Container, Flex, Section, Heading, Box, Text, AspectRatio } from '@radix-ui/themes';
import RequestInviteDialog from './invite/RequestInviteDialog';
import { InviteContextProvider } from './invite/InviteContext';
import RequestInviteSuccessDialog from './invite/RequestInviteSuccessDialog';
import heroImg from '@/assets/hero-img.svg';

const LandingPage = () => {
  return (
    <Container size={'4'} px={'4'}>
      {/* TODO set `height: 100%` property for `.rt-ContainerInner` class */}
      <Flex height={'100%'} direction={'column'} align={'center'} justify={'center'}>
        <Section>
          <Flex gap={'6'} direction={'column'} align={'center'}>
            <AspectRatio ratio={4 / 3}>
              {/* TODO constrain size (?) */}
              <img src={heroImg} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </AspectRatio>

            <Heading as="h1" size={{ initial: '8', sm: '9' }} align={'center'}>
              <Text style={{ display: 'block' }}>A better way</Text>
              {/* TODO accent color */}
              <Text color={'blue'} style={{ display: 'block' }}>
                to enjoy everyday.
              </Text>
            </Heading>

            <Heading as="h2" size={{ initial: '5', sm: '6' }} weight={'medium'} align={'center'}>
              Be the first to know when we launch.
            </Heading>

            <Box>
              <InviteContextProvider>
                <RequestInviteDialog />
                <RequestInviteSuccessDialog />
              </InviteContextProvider>
            </Box>
          </Flex>
        </Section>
      </Flex>
    </Container>
  );
};

export default LandingPage;
