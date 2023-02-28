import { Container, Flex, Box, Link, HStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import { BsFacebook } from 'react-icons/bs';
import { Icon } from '@chakra-ui/react';
import { AiOutlineInstagram } from 'react-icons/ai';

const navItems = [
  { title: 'HOME', href: '/' },
  { title: 'ABOUT ME', href: '/about' },
  { title: 'PORTFOLIO', href: '/portfolio' },
  { title: 'PRICING', href: '/pricing' },
  { title: 'CONTACT', href: '/contact' }
];

const Footer = () => {
  return (
    <Box w='full'>
      <Container maxW={'container.xl'}>
        <Flex h={'fit-content'} w='full' fontSize='sm' p={4} flexDir='column'>
          <Flex
            flexGrow={1}
            justifyContent={'center'}
            alignItems={'center'}
            flexWrap='wrap'
          >
            {navItems.map((item) => (
              <Link as={NextLink} href={item.href} p={4} key={item.href}>
                {item.title}
              </Link>
            ))}
          </Flex>
          <HStack color='brandSecondary.900'>
            <Link href='https://www.facebook.com/arelygphotography' isExternal>
              <Icon boxSize={5} as={BsFacebook} />
            </Link>
            <Link
              href='https://www.instagram.com/arelygizelphotography/'
              isExternal
            >
              <Icon boxSize={6} as={AiOutlineInstagram} />
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
