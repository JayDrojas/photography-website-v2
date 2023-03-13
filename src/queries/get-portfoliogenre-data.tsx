import { GetPortfolioGenresDocument } from '@/graphql/contentful/generated/types';
import apollo from '@/lib/clients/apollo';

const getPorfolioGenreData = async () => {
  const { data, error } = await apollo.query({
    query: GetPortfolioGenresDocument
  });

  if (error) throw new Error(error.message);
  const portfolioGenres = data.portfolioGenreCollection?.items;

  if (portfolioGenres && portfolioGenres.length === 0)
    throw new Error('No genres found');

  return { portfolioGenres };
};

export default getPorfolioGenreData;
