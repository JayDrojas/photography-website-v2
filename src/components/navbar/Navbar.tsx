import { Flex, useMediaQuery } from '@chakra-ui/react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  const [isDesktop] = useMediaQuery('(min-width: 800px)');
  const items = [
    { title: 'HOME', href: '/' },
    { title: 'ABOUT ME', href: '/about' },
    { title: 'PORTFOLIO', href: '/portfolio' },
    { title: 'PRICING', href: '/pricing' },
    { title: 'CONTACT', href: '/contact' }
  ];

  return (
    <Flex h={20} w='full' bgColor='yellow.100'>
      {isDesktop ? (
        <DesktopNavbar navItems={items} />
      ) : (
        <MobileNavbar navItems={items} />
      )}
    </Flex>
  );
};

export default Navbar;
