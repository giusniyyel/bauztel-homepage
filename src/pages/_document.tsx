import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='es'>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/>
        <link
          href='https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Playfair+Display:wght@600&display=swap'
          rel='stylesheet'
          crossOrigin='anonymous'
        />
        <link
          rel='shortcut icon'
          href='/logo.svg'
          type='image/svg+xml'
        />
        <meta
          content='max-snippet:-1, max-image-preview:large, max-video-preview:-1'
          name='robots'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
