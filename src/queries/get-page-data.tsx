import { GetPageDocument } from '@/graphql/contentful/generated/types';
import apollo from '@/lib/clients/apollo';

const getPageData = async (slug: string) => {
  const { data, error } = await apollo.query({
    query: GetPageDocument,
    variables: { slug }
  });

  if (error) throw new Error(error.message);

  const pageContent = data.pageCollection?.items[0];

  return { pageContent };
};

export default getPageData;
