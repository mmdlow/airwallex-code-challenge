import { AspectRatio, Box, Button, Container, Flex, Heading, Section } from '@radix-ui/themes';
import { Link } from 'react-router';
import notFoundImg from '@/assets/404-img.svg';

const Error404 = () => {
  return (
    <Container size={'4'} px={'4'}>
      <Flex height={'100%'} direction={'column'} align={'center'} justify={'center'}>
        <Section>
          <Flex gap={'6'} direction={'column'} align={'center'}>
            <AspectRatio ratio={4 / 3}>
              {/* TODO constrain size (?) */}
              <img
                src={notFoundImg}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </AspectRatio>

            <Heading as="h1" size={{ initial: '8', sm: '9' }} align={'center'}>
              Oops!
            </Heading>

            <Heading as="h2" size={{ initial: '5', sm: '6' }} weight={'medium'} align={'center'}>
              The requested page could not be found.
            </Heading>

            <Box>
              <Button asChild size={'3'}>
                <Link to="/">Take me home</Link>
              </Button>
            </Box>
          </Flex>
        </Section>
      </Flex>
    </Container>
  );
};

export default Error404;
