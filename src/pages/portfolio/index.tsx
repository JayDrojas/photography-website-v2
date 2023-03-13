import { GetPortfolioGenresQuery } from '@/graphql/contentful/generated/types';
import getPorfolioGenreData from '@/queries/get-portfoliogenre-data';
import { Box, Container, Image, Link } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import NextLink from 'next/link';

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
          <Link as={NextLink} href={`/portfolio/${genre?.href ?? ''}`}>
            <Image src={genre?.featuredImage?.url ?? ''} alt='' />
          </Link>
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
