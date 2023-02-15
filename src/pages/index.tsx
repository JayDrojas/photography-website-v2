import PageSections from '@/components/PageSections/index';
import { GetPageQuery } from '@/graphql/contentful/generated/types';
import getPageData from '@/queries/get-page-data';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import '@fontsource/montserrat/200.css';

interface Props {
  pageContent: NonNullable<
    NonNullable<GetPageQuery['pageCollection']>['items'][0]
  >;
}

export default function Home({ pageContent }: Props) {
  return (
    <>
      <Head>
        <title>Arely Gizel Photography</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PageSections sectionsCollection={pageContent.sectionsCollection} />
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
