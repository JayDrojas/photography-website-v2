import { GetPageQuery } from '@/graphql/contentful/generated/types';
import { Box, Container, Heading } from '@chakra-ui/react';

interface Props {
  sectionsCollection: NonNullable<
    NonNullable<GetPageQuery['pageCollection']>['items'][0]
  >['sectionsCollection'];
}

const PageSections = ({ sectionsCollection }: Props) => {
  //   console.log(sectionsCollection?.items[0]?.backgroundImage?.url ?? '');

  return (
    <Box
      bgImage={sectionsCollection?.items[0]?.backgroundImage?.url ?? ''}
      backgroundSize='cover'
      backgroundPosition='center'
      backgroundBlendMode='overlay'
      display='flex'
      alignItems='center'
      w='full'
      h='md'
    >
      <Container color={'white'}>
        <Heading fontSize={['2xl', '4xl']}>
          {sectionsCollection?.items[0]?.title ?? ''}
        </Heading>
      </Container>
    </Box>
  );
};

export default PageSections;
