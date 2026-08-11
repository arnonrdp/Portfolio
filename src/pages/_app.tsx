import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Space_Grotesk } from 'next/font/google';
import { useEffect } from 'react';
import '../styles/globals.css';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Production only: in dev the service worker would serve stale assets and
    // fight with hot reloading.
    if (process.env.NODE_ENV !== 'production' || !('serviceWorker' in navigator)) return
    navigator.serviceWorker.register('/sw.js').catch(() => {})
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Arnon Rodrigues — Software Engineer · arnon.dev</title>
      </Head>
      <div className={spaceGrotesk.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp
