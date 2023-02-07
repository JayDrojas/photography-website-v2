import { Flex, Image, Link } from '@chakra-ui/react';
import { NavbarProps } from '../NavbarTypes';
import NextLink from 'next/link';

const DesktopNavbar = ({ navItems }: NavbarProps) => {
  return (
    <>
      <Image src='/assets/navbar-logo.PNG' alt='Arely Logo' h='full' />
      <Flex flexGrow={1} justifyContent={'center'} alignItems={'center'}>
        {navItems.map((item) => (
          <Link as={NextLink} href={item.href} p={4} key={item.href}>
            {item.title}
          </Link>
        ))}
      </Flex>
    </>
  );
};

export default DesktopNavbar;
