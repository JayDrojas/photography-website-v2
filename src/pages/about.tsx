import { GetPageAboutMeQuery } from '@/graphql/contentful/generated/types';
import getAboutMeData from '@/queries/get-aboutme-data';
import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';

interface Props {
  aboutMeContent: NonNullable<
    NonNullable<GetPageAboutMeQuery['aboutMeCollection']>['items'][0]
  >;
}

const about = ({ aboutMeContent }: Props) => {
  const { title, description, featuredImage, myPhotosCollection } =
    aboutMeContent;
  return (
    <Flex w='full' p={16}>
      <Flex
        gap={8}
        flexDirection={['column', 'column', 'row']}
        w='full'
        alignContent='center'
        justifyContent='center'
      >
        <Image
          src={featuredImage?.url ?? ''}
          alt={featuredImage?.__typename}
          w={['full', 'full', 'md']}
        />
        <Flex direction={'column'}>
          <Heading as='h2' size='lg'>
            {title}
          </Heading>
          <Text size='md'>{description}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default about;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { aboutMeContent } = await getAboutMeData();

    if (!aboutMeContent) throw new Error();

    return {
      props: {
        aboutMeContent
      }
    };
  } catch {
    return {
      notFound: true
    };
  }
};
