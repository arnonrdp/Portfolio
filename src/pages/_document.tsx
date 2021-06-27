import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocumento extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="%PUBLIC_URL%/favicon.png" />
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