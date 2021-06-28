import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/png" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="Portfolio, side projects, the blog of the Arnon Rodrigues de Paula and among other things" />
          <meta property="og:locale" content="en" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Arnon Rodrigues de Paula Portfolio" />
          <meta property="og:site_name" content="Arnon.developer" />
          <meta property="og:description" content="Portfolio, side projects, the blog of the Arnon Rodrigues de Paula and among other things" />
          <meta property="og:url" content="https://www.arnon.dev/" />

          <title>Arnon.developer</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}