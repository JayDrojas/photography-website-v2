import apollo from '@/lib/clients/apollo';
import { GetPortfolioAlbumsDocument } from '@/graphql/contentful/generated/types';

const getAlbumsData = async (handle: string) => {
  const { data, error } = await apollo.query({
    query: GetPortfolioAlbumsDocument,
    variables: {
      handle
    }
  });

  if (error) throw new Error(error.message);
  const albums = data.portfolioAlbumCollection?.items;

  if (albums && albums.length === 0) throw new Error('No albums found.');

  return { albums };
};

export default getAlbumsData;
