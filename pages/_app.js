import '@/styles/globals.css'
import Script from "next/script"
import en from "../lang/en.json";
import fr from "../lang/fr.json";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

const messages = {
    en,
    fr,
};

function App({Component, pageProps}) {
    const { locale } = useRouter();
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
    
        <IntlProvider locale={locale} messages={messages[locale]}>
            <Component {...pageProps} />
        </IntlProvider>


    </>
}

export default App;
