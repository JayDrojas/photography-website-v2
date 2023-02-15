import { GetPageQuery } from '@/graphql/contentful/generated/types';
import { Box, Container, Flex, Heading } from '@chakra-ui/react';

interface Props {
  sectionsCollection: NonNullable<
    NonNullable<GetPageQuery['pageCollection']>['items'][0]
  >['sectionsCollection'];
}

const PageSections = ({ sectionsCollection }: Props) => {
  return (
    <Box
      bgImage={sectionsCollection?.items[0]?.backgroundImage?.url ?? ''}
      backgroundSize='cover'
      backgroundPosition='center'
      backgroundBlendMode='overlay'
      display='flex'
      justifyContent='center'
      alignItems='center'
      w='full'
      h='md'
    >
      <Container color={'white'} h='65%'>
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
          <Heading fontSize={['2xl', '4xl']} textDecoration='underline'>
            {sectionsCollection?.items[0]?.subtitle ?? ''}
          </Heading>
        </Flex>
      </Container>
    </Box>
  );
};

export default PageSections;
