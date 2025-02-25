import { Box, Button } from '@radix-ui/themes';
import { Link } from 'react-router';
import notFoundImg from '@/assets/404-img.svg';
import { HeroContainer, HeroImage, HeroSubtitle, HeroTitle } from './layout/Hero';

const Error404 = () => {
  return (
    <HeroContainer size={'4'} px={'4'}>
      <HeroImage src={notFoundImg} alt="404 not found image" />

      <HeroTitle>Oops!</HeroTitle>

      <HeroSubtitle>The requested page could not be found.</HeroSubtitle>

      <Box>
        <Button asChild size={'3'}>
          <Link to="/">Take me home</Link>
        </Button>
      </Box>
    </HeroContainer>
  );
};

export default Error404;
