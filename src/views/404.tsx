import { Box, Button } from '@radix-ui/themes';
import { Link } from 'react-router';
import notFoundImg from '/404-img.svg';
import { HeroContainer, HeroImage, HeroSubtitle, HeroTitle } from './layout/Hero';
import { ACTIONS, MSG_404 } from '@/lib/constants';

const Error404 = () => {
  return (
    <HeroContainer size={'4'} px={'4'}>
      <HeroImage src={notFoundImg} alt="404 not found image" />

      <HeroTitle>{MSG_404.TITLE}</HeroTitle>

      <HeroSubtitle>{MSG_404.DESC}</HeroSubtitle>

      <Box>
        <Button asChild size={'3'}>
          <Link to="/">{ACTIONS.HOME}</Link>
        </Button>
      </Box>
    </HeroContainer>
  );
};

export default Error404;
