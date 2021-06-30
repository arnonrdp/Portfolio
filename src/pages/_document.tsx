import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
          <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/favicon/site.webmanifest" />

          <meta name="description" content="Portfolio, side projects, the blog of the Arnon Rodrigues de Paula and among other things" />
          <meta property="og:locale" content="en" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Arnon Rodrigues de Paula Portfolio" />
          <meta property="og:site_name" content="Arnon.developer" />
          <meta property="og:description" content="Portfolio, side projects, the blog of the Arnon Rodrigues de Paula and among other things" />
          <meta property="og:url" content="https://www.arnon.dev/" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
