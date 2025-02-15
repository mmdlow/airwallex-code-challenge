import {
  Box,
  Button,
  Container,
  Dialog,
  Flex,
  Heading,
  Section,
  TextField,
} from '@radix-ui/themes';
import Header from './views/layout/Header';
import Footer from './views/layout/Footer';
import { Label } from './views/components/label';

function App() {
  return (
    <Flex direction={'column'} width={'100vw'} height={'100vh'}>
      <Header />

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
                <Dialog.Root>
                  <Dialog.Trigger>
                    <Button size={'3'}>Request an invite</Button>
                  </Dialog.Trigger>

                  <Dialog.Content maxWidth={'450px'} aria-describedby={undefined}>
                    <Dialog.Title>Request an invite</Dialog.Title>

                    <Flex direction={'column'} gap={'3'} py={'3'}>
                      <Box>
                        <Label htmlFor="fullName">Full name</Label>
                        <TextField.Root id="fullName" type="text" />
                      </Box>

                      <Box>
                        <Label htmlFor="email">Email</Label>
                        <TextField.Root id="email" type="email" />
                      </Box>

                      <Box>
                        <Label htmlFor="confirmEmail">Confirm email</Label>
                        <TextField.Root id="confirmEmail" type="email" />
                      </Box>
                    </Flex>

                    <Flex gap={'2'} justify={'end'} pt={'3'}>
                      <Dialog.Close>
                        <Button>Submit</Button>
                      </Dialog.Close>
                    </Flex>
                  </Dialog.Content>
                </Dialog.Root>
              </Box>
            </Flex>
          </Section>
        </Flex>
      </Container>

      <Footer />
    </Flex>
  );
}

export default App;
