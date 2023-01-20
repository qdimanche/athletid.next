import '@/styles/globals.css'
import Script from "next/script"

export default function App({ Component, pageProps }) {
  return <>
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico"/>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-F3ZEBZ00CK"/>
      <Script
          id='google-analytics'
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
              __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-F3ZEBZ00CK', {
            page_path: window.location.pathname,
          });
        `,
          }}
      />

    <Component {...pageProps} />
  </>
}
