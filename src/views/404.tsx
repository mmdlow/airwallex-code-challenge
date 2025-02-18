import { Button, Container, Flex, Heading, Section } from '@radix-ui/themes';
import { Link } from 'react-router';

const Error404 = () => {
  return (
    <Container size={'4'} px={{ initial: '6', sm: '4' }}>
      <Section>
        <Flex gap={'4'} direction={'column'} align={'center'} justify={'center'}>
          <Heading>Page not found</Heading>

          <Button asChild>
            <Link to="/">Home</Link>
          </Button>
        </Flex>
      </Section>
    </Container>
  );
};

export default Error404;
