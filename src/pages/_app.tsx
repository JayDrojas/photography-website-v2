import Navbar from '@/components/navbar';
import theme from '@/lib/chakra-theme';
import apollo from '@/lib/clients/apollo';
import { ApolloProvider } from '@apollo/client';
import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { PropsWithChildren } from 'react';

function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apollo}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </ApolloProvider>
  );
}
