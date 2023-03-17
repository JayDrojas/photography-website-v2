import { GetPortfolioAlbumsQuery } from '@/graphql/contentful/generated/types';
import {
  Box,
  Button,
  Container,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react';
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface Props {
  album: NonNullable<
    NonNullable<GetPortfolioAlbumsQuery['portfolioAlbumCollection']>['items']
  >[0];
}

const ImageModal = ({ album }: Props) => {
  console.log(album);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>View Album</Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size='2xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Container>{album?.title}</Container>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Container overflow='auto' py={16}>
              <Swiper
                navigation={true}
                centeredSlides={true}
                pagination={{
                  type: 'fraction'
                }}
                slidesPerView={1}
                autoplay={{
                  delay: 5000
                  // disableOnInteraction: false
                }}
                keyboard={true}
                loop={true}
                modules={[
                  Navigation,
                  Pagination,
                  Mousewheel,
                  Keyboard,
                  Autoplay
                ]}
              >
                {album?.albumPhotosCollection?.items.map((photo) => {
                  return (
                    <SwiperSlide key={photo?.url}>
                      <Box w='full' h='xl'>
                        <Image
                          src={photo?.url ?? ''}
                          alt={photo?.description ?? ''}
                          height='full'
                          width='full'
                          objectFit='cover'
                        />
                      </Box>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Container>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ImageModal;
