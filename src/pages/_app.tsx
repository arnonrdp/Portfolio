import Head from 'next/head';
import { Space_Grotesk } from 'next/font/google';
import '../styles/globals.css';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>arnon.dev</title>
      </Head>
      <div className={spaceGrotesk.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp
