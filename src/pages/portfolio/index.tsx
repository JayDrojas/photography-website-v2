import { GetPortfolioGenresQuery } from '@/graphql/contentful/generated/types';
import getPorfolioGenreData from '@/queries/get-portfoliogenre-data';
import { Box, Container, Image } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';

interface Props {
  portfolioGenres: NonNullable<
    NonNullable<GetPortfolioGenresQuery['portfolioGenreCollection']>['items']
  >;
}

const Portfolio = ({ portfolioGenres }: Props) => {
  return (
    <Container>
      {portfolioGenres.map((genre) => (
        <Box key={genre?.sys.id}>
          <Image src={genre?.featuredImage?.url ?? ''} alt='' />
        </Box>
      ))}
    </Container>
  );
};

export default Portfolio;

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
