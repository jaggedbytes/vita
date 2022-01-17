import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link 
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&display=optional"
          rel="stylesheet"
        />
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script
          async
          src={ `https://www.googletagmanager.com/gtag/js?id=${ process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS }` }
        />
        <script
          dangerouslySetInnerHTML = {{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${ process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS }', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}