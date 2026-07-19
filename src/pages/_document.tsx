import Document, { Html, Head, Main, NextScript } from "next/document";

const DESCRIPTION =
  "Arnon Rodrigues — software engineer building things for the web and mobile. Projects, stack, journey and contact.";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Theme / Favicon */}
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00c4a7" />
          <meta name="msapplication-TileColor" content="#0a1412" />
          <meta name="theme-color" content="#0a1412" />
          <script
            dangerouslySetInnerHTML={{
              __html:
                "try{if(localStorage.theme==='light'){document.documentElement.dataset.theme='light';var m=document.querySelector('meta[name=theme-color]');if(m)m.content='#f2f4f0'}}catch(e){}",
            }}
          />

          {/* Primary Meta Tags */}
          <meta name="description" content={DESCRIPTION} />
          <meta name="author" content="Arnon Rodrigues" />
          <link rel="canonical" href="https://arnon.dev/" />

          {/* Open Graph */}
          <meta property="og:locale" content="en" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="arnon.dev — Arnon Rodrigues" />
          <meta property="og:site_name" content="arnon.dev" />
          <meta property="og:description" content={DESCRIPTION} />
          <meta property="og:url" content="https://arnon.dev/" />
          <meta property="og:image" content="https://arnon.dev/portfolio/personal-portfolio.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="arnon.dev — dark zen-themed portfolio hero" />

          {/* Twitter */}
          <meta name="twitter:creator" content="@arnonrdp" />
          <meta name="twitter:site" content="@arnonrdp" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="arnon.dev — Arnon Rodrigues" />
          <meta name="twitter:description" content={DESCRIPTION} />
          <meta name="twitter:image" content="https://arnon.dev/portfolio/personal-portfolio.jpg" />

          {/* Structured data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Arnon Rodrigues",
                url: "https://arnon.dev/",
                image: "https://arnon.dev/portfolio/personal-portfolio.jpg",
                jobTitle: "Software Engineer",
                worksFor: { "@type": "Organization", name: "FincenFetch" },
                email: "mailto:me@arnon.dev",
                knowsLanguage: ["pt", "en"],
                sameAs: [
                  "https://github.com/arnonrdp",
                  "https://linkedin.com/in/arnonrdp",
                  "https://twitter.com/arnonrdp",
                ],
              }),
            }}
          />

          {/* Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-FSNN76QH38"></script>
          <script
            dangerouslySetInnerHTML={{
              __html:
                "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-FSNN76QH38')",
            }}
          />
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
