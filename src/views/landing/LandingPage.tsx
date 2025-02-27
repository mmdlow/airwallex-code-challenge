import { Box, Text } from '@radix-ui/themes';
import RequestInviteDialog from './invite/RequestInviteDialog';
import { InviteContextProvider } from './invite/InviteContext';
import RequestInviteSuccessDialog from './invite/RequestInviteSuccessDialog';
import { HeroContainer, HeroImage, HeroSubtitle, HeroTitle } from '../layout/Hero';
import heroImg from '/hero-img.svg';
import { COLOR_ACCENT, MSG_HERO } from '@/lib/constants';

const LandingPage = () => {
  return (
    <HeroContainer>
      <HeroImage src={heroImg} alt="Hero image" />

      <HeroTitle>
        <Text style={{ display: 'block' }}>{MSG_HERO.TITLE[0]}</Text>
        <Text color={COLOR_ACCENT} style={{ display: 'block' }}>
          {MSG_HERO.TITLE[1]}
        </Text>
      </HeroTitle>

      <HeroSubtitle>
        {MSG_HERO.DESC[0]}
        <br />
        {MSG_HERO.DESC[1]}
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
