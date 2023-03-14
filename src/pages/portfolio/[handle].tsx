import { GetPortfolioAlbumsQuery } from '@/graphql/contentful/generated/types';
import getAlbumsData from '@/queries/get-albums-data';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';

interface Props {
  albums: NonNullable<
    NonNullable<GetPortfolioAlbumsQuery['portfolioAlbumCollection']>['items']
  >;
}

const SinglePortfolio = ({ albums }: Props) => {
  return (
    <Flex
      p='20px'
      width='full'
      marginTop='25px'
      wrap='wrap'
      justifyContent='center'
      alignItems='center'
    >
      {albums.map((album) => (
        <Box key={album?.sys.id} flexBasis='350px' textAlign='center'>
          <Image
            src={album?.featureImage?.url ?? ''}
            alt=''
            objectFit='cover'
            h={[300, 350, 500, 600]}
            w={[300, 350, 500, 600]}
          />
          <Text p={4} fontWeight='bold'>
            {album?.title}
          </Text>
        </Box>
      ))}
    </Flex>
  );
};

export default SinglePortfolio;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const albumHandle = context.params?.handle;
  try {
    if (typeof albumHandle !== 'string') throw new Error('Wrong param type.');

    const { albums } = await getAlbumsData(albumHandle);
    return {
      props: {
        albums
      }
    };
  } catch (error) {
    return { notFound: true };
  }
};
