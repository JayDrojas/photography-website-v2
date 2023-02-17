import { GetPageQuery } from '@/graphql/contentful/generated/types';
import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
interface Props {
  sectionsCollection: NonNullable<
    NonNullable<GetPageQuery['pageCollection']>['items'][0]
  >['sectionsCollection'];
}

const PageSections = ({ sectionsCollection }: Props) => {
  const sections = sectionsCollection?.items.map((section) => {
    switch (section?.__typename) {
      case 'SectionHero':
        return (
          <Box
            bgImage={section.backgroundImage?.url ?? ''}
            backgroundSize='cover'
            backgroundPosition='center'
            backgroundBlendMode='overlay'
            display='flex'
            justifyContent='center'
            alignItems='center'
            w='full'
            h='md'
            key={section.sys.id}
          >
            <Container color={'white'} h='full' w='full' maxW='none' py={16}>
              <Flex
                direction={'column'}
                justifyContent='space-between'
                w='full'
                h='full'
                alignItems='center'
              >
                <Heading fontSize={['lg', 'xl']}>
                  {sectionsCollection?.items[0]?.title ?? ''}
                </Heading>
                <Heading
                  fontSize={['xl', '2xl', '4xl']}
                  borderBottom='1px solid white'
                  p={4}
                >
                  {section.subtitle ?? ''}
                </Heading>
              </Flex>
            </Container>
          </Box>
        );
      case 'SectionCarousel':
        return (
          <Box w='full' key={section.sys.id}>
            <Container maxW='container.lg' overflow='auto' py={16}>
              <Swiper
                navigation={true}
                centeredSlides={true}
                pagination={{
                  type: 'fraction'
                }}
                slidesPerView={1}
                autoplay={{
                  delay: 5000
                  // disableOnInteraction: false,
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
                {section.carouselImagesCollection?.items.map((imageItem) => {
                  return (
                    <SwiperSlide key={imageItem?.sys.id}>
                      <Box
                        bgImage={imageItem?.url ?? ''}
                        backgroundSize='cover'
                        backgroundPosition='center'
                        w='full'
                        h='lg'
                      ></Box>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Container>
          </Box>
        );
      default:
        return;
    }
  });

  return <>{sections}</>;
};

export default PageSections;
