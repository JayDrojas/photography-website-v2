import { Box, Container, Flex, useMediaQuery } from '@chakra-ui/react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const items = [
  { title: 'HOME', href: '/' },
  { title: 'ABOUT ME', href: '/about' },
  { title: 'PORTFOLIO', href: '/portfolio' },
  { title: 'PRICING', href: '/pricing' },
  { title: 'CONTACT', href: '/contact' }
];

const Navbar = () => {
  const [isDesktop] = useMediaQuery('(min-width: 800px)');

  return (
    <Box w='full'>
      <Container maxW={'container.xl'}>
        <Flex h={20} w='full' fontSize='sm'>
          {isDesktop ? (
            <DesktopNavbar navItems={items} />
          ) : (
            <MobileNavbar navItems={items} />
          )}
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
