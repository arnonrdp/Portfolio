import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />

          <meta name="description" content="Portfolio, side projects, the blog of the Arnon Rodrigues de Paula and among other things" />
          <meta property="og:locale" content="en" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Arnon Rodrigues de Paula Portfolio" />
          <meta property="og:site_name" content="Arnon.developer" />
          <meta property="og:description" content="Portfolio, side projects, the blog of the Arnon Rodrigues de Paula and among other things" />
          <meta property="og:url" content="https://www.arnon.dev/" />
          <meta property="og:image" content="https://www.arnon.dev/portfolio/personal-portfolio.jpg" />
          <meta property="og:image:width" content="400" />
          <meta property="og:image:height" content="233" />
          <meta name="twitter:creator" content="@arnonrdp" />
          <meta name="twitter:site" content="@arnonrdp" />
          <meta name="twitter:card" content="summary_image" />
          <meta name="twitter:image" content="https://www.arnon.dev/portfolio/personal-portfolio.jpg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
