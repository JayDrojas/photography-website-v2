import Footer from '@/components/Footer/';
import Navbar from '@/components/Navbar';
import theme from '@/lib/chakra-theme';
import apollo from '@/lib/clients/apollo';
import { ApolloProvider } from '@apollo/client';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { PropsWithChildren } from 'react';

function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Flex minH='100vh' flexDirection='column' bgColor='brand.500'>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </Flex>
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
