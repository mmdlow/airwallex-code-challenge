import { Box, Text } from '@radix-ui/themes';
import RequestInviteDialog from './invite/RequestInviteDialog';
import { InviteContextProvider } from './invite/InviteContext';
import RequestInviteSuccessDialog from './invite/RequestInviteSuccessDialog';
import { HeroContainer, HeroImage, HeroSubtitle, HeroTitle } from '../layout/Hero';
import heroImg from '@/assets/hero-img.svg';
import { COLOR_ACCENT } from '@/lib/constants';

const LandingPage = () => {
  return (
    <HeroContainer>
      <HeroImage src={heroImg} alt="Hero image" />

      <HeroTitle>
        <Text style={{ display: 'block' }}>A better way</Text>
        <Text color={COLOR_ACCENT} style={{ display: 'block' }}>
          to enjoy everyday.
        </Text>
      </HeroTitle>

      <HeroSubtitle>
        We're building a revolutionary new online service.
        <br />
        Be the first to know when we launch.
      </HeroSubtitle>

      <Box>
        <InviteContextProvider>
          <RequestInviteDialog />
          <RequestInviteSuccessDialog />
        </InviteContextProvider>
      </Box>
    </HeroContainer>
  );
};

export default LandingPage;
