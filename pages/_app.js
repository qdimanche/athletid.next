import '@/styles/globals.css'
import Script from "next/script";
import {getCookie} from "cookies-next";
import { appWithTranslation } from 'next-i18next'


function App({Component, pageProps}) {
	const consent = getCookie('localConsent');
	
	return <>
		<link rel="icon" href="%PUBLIC_URL%/favicon.ico"/>
		<Script
			id="gtag"
			strategy="afterInteractive"
			dangerouslySetInnerHTML={{
				__html: `
			window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            gtag('consent', 'default', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied'
            });
            
			(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
			new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
			j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
			'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MHQLFD3');`,
			}}
		/>
		
		{consent === true && (
			<Script
				id="consupd"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
            gtag('consent', 'update', {
              'ad_storage': 'granted',
              'analytics_storage': 'granted'
            });
          `,
				}}
			/>
		)}

		<Component {...pageProps} />
	</>
}

export default appWithTranslation(App)
