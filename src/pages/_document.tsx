import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class Document extends NextDocument {
  static getInitialProps(ctx: DocumentContext) {
    return NextDocument.getInitialProps(ctx);
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="description" content="Bauztel Café Website" />
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <meta
            name="twitter:title"
            content="Bauztel Café: Café orgánico 100% Chiapas"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@bauztel" />
          <meta name="twitter:creator" content="@giusniyyel" />
          <meta
            name="twitter:image"
            content="https://www.bauztel.com/card.png"
          />
          <meta property="og:site_name" content="Bauztel Café" />
          <meta
            name="og:title"
            content="Bauztel Café: Café orgánico 100% Chiapas"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://www.bauztel.com/card.png"
          />
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
