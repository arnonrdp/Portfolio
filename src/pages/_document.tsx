import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Defaults */}
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

          {/* Theme / Favicon */}
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" />
          <meta name="msapplication-TileColor" />
          <meta name="theme-color" content="#ffffff" />

          {/* Primary Meta Tags */}
          <meta name="description" content="Portfolio, side projects and contact of Arnon Rodrigues de Paula" />
          <meta name="keywords" content="portfolio, developer, programmer, arnon, dev, programming, projects" />
          <meta name="author" content="Arnon Rodrigues" />

          {/* Open Graph / Facebook */}
          <meta property="og:locale" content="en" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Arnon Rodrigues de Paula Portfolio" />
          <meta property="og:site_name" content="Arnon.developer" />
          <meta property="og:description" content="Portfolio, side projects and contact of Arnon Rodrigues de Paula" />
          <meta property="og:url" content="https://arnon.dev/" />
          <meta property="og:image" content="https://arnon.dev/portfolio/personal-portfolio.jpg" />
          <meta property="og:image:width" content="400" />
          <meta property="og:image:height" content="233" />

          {/* Twitter */}
          <meta property="twitter:creator" content="@arnonrdp" />
          <meta property="twitter:site" content="@arnonrdp" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://arnon.dev/" />
          <meta property="twitter:title" content="Arnon.developer" />
          <meta property="twitter:description" content="Portfolio, side projects and contact of Arnon Rodrigues de Paula" />
          <meta property="twitter:image" content="https://arnon.dev/portfolio/personal-portfolio.jpg" />

          {/* Analytics */}
          <script async src="https://cdn.splitbee.io/sb.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
