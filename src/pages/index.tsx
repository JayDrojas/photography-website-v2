import { GetPageQuery } from '@/graphql/contentful/generated/types';
import getPageData from '@/queries/get-page-data';
import { Box } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

interface Props {
  pageContent: GetPageQuery;
}

export default function Home({ pageContent }: Props) {
  console.log(pageContent);

  return (
    <>
      <Head>
        <title>Arelys Photography</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Box>This is home</Box>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { pageContent } = await getPageData('home');

    return {
      props: {
        pageContent
      }
    };
  } catch (error) {
    return {
      notFound: true
    };
  }
};
