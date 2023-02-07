import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  useDisclosure
} from '@chakra-ui/react';
import { NavbarProps } from '../NavbarTypes';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useRef } from 'react';
import NextLink from 'next/link';

const MobileNavbar = ({ navItems }: NavbarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <Flex
        justifyContent='space-between'
        w='full'
        alignItems={'center'}
        fontSize={'2xl'}
      >
        <Image src='/assets/navbar-logo.PNG' alt='Arely Logo' h='full' ml={4} />
        <HamburgerIcon ref={btnRef} onClick={onOpen} />
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerHeader></DrawerHeader>
          <DrawerContent bgColor='brand.500'>
            <DrawerCloseButton />
            <DrawerBody p={1}>
              <Flex
                justifyContent={'center'}
                alignItems={'center'}
                flexDirection={'column'}
                w='full'
                h='full'
              >
                {navItems.map((item) => (
                  <Button
                    as={NextLink}
                    href={item.href}
                    p={4}
                    key={item.href}
                    fontSize='sm'
                    variant='ghost'
                    w='full'
                    h={16}
                  >
                    {item.title}
                  </Button>
                ))}
              </Flex>
            </DrawerBody>

            <DrawerFooter></DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
};

export default MobileNavbar;
