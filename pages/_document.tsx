import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <meta charSet="utf-8" />

          {/* Open Graph / Facebook  */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.gamerlink.xyz/" />
          <meta property="og:title" content="Gamerlink" />
          <meta
            property="og:description"
            content="Plataforma gaming"
          />
          <meta property="og:image" content="/logo-bg.png" />

          {/* Twitter  */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.gamerlink.xyz/" />
          <meta property="twitter:title" content="GamerLink" />
          <meta
            property="twitter:description"
            content="Plataforma gaming"
          />
          <meta name="theme-color" content="#FF144D" />

          <link
            rel="preload"
            href="/fonts/BebasNeue Bold.otf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;