import { GetPageAboutMeDocument } from '@/graphql/contentful/generated/types';
import apollo from '@/lib/clients/apollo';

const getAboutMeData = async () => {
  const { data, error } = await apollo.query({
    query: GetPageAboutMeDocument
  });

  if (error) throw new Error(error.message);
  const aboutMeContent = data.aboutMeCollection?.items[0];

  if (!aboutMeContent) throw new Error('Could not find about me content.');

  return { aboutMeContent };
};

export default getAboutMeData;
