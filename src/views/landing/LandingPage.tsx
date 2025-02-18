import { Container, Flex, Section, Heading, Box } from '@radix-ui/themes';
import RequestInviteDialog from './invite/RequestInviteDialog';

const LandingPage = () => {
  return (
    <Container size={'4'} px={{ initial: '6', sm: '4' }}>
      {/* TODO set `height: 100%` property for `.rt-ContainerInner` class */}
      <Flex height={'100%'} direction={'column'} align={'center'} justify={'center'}>
        <Section>
          <Flex gap={'4'} direction={'column'} align={'center'}>
            <Heading as="h1" size={'9'}>
              A better way to enjoy everyday.
            </Heading>
            <Heading as="h2" size={'6'} weight={'medium'}>
              Be the first to know when we launch.
            </Heading>
            <Box>
              <RequestInviteDialog />
            </Box>
          </Flex>
        </Section>
      </Flex>
    </Container>
  );
};

export default LandingPage;
