import { GetPortfolioAlbumsQuery } from '@/graphql/contentful/generated/types';
import getAlbumsData from '@/queries/get-albums-data';
import { GetServerSideProps } from 'next';

interface Props {
  albums: NonNullable<
    NonNullable<GetPortfolioAlbumsQuery['portfolioAlbumCollection']>['items']
  >;
}

const SinglePortfolio = ({ albums }: Props) => {
  return <h1>Single porfolio</h1>;
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
