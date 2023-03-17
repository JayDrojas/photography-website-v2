import { GetPortfolioGenresQuery } from '@/graphql/contentful/generated/types';
import getPorfolioGenreData from '@/queries/get-portfoliogenre-data';
import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import NextLink from 'next/link';

interface Props {
  portfolioGenres: NonNullable<
    NonNullable<GetPortfolioGenresQuery['portfolioGenreCollection']>['items']
  >;
}

const Portfolios = ({ portfolioGenres }: Props) => {
  return (
    <Flex
      p='20px'
      width='full'
      marginTop='25px'
      wrap='wrap'
      justifyContent='center'
      alignItems='center'
    >
      {portfolioGenres.map((genre) => (
        <Box key={genre?.sys.id} m='0 0 40px 40px' textAlign='center'>
          <Link as={NextLink} href={`/portfolio/${genre?.href ?? ''}`}>
            <Image
              src={genre?.featuredImage?.url ?? ''}
              alt=''
              objectFit='cover'
              h={[300, 350, 500, 600]}
              w={[300, 350, 500, 600]}
            />
          </Link>
          <Text p={4} fontWeight='bold'>
            {genre?.title}
          </Text>
        </Box>
      ))}
    </Flex>
  );
};

export default Portfolios;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { portfolioGenres } = await getPorfolioGenreData();

    return {
      props: {
        portfolioGenres
      }
    };
  } catch (error) {
    return {
      notFound: true
    };
  }
};
