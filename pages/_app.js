import '../styles/globals.css';
import {ChakraProvider} from '@chakra-ui/react';
import {Layout} from '../components';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {

  return  (
  <ChakraProvider>
    <Layout>
      <Head>
        <title>Events App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
  ); 
}

export default MyApp
