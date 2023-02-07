import Navbar from '@/components/navbar';
import theme from '@/lib/chakra-theme';
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
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
