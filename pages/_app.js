import '@/styles/globals.css'
import Script from "next/script"
import en from "../lang/en.json";
import fr from "../lang/fr.json";
import {useRouter} from "next/router";
import {IntlProvider} from "react-intl";
import CookieConsent, {Cookies, getCookieConsentValue} from "react-cookie-consent";
import {initGA} from "@/ga-utils";
import {useEffect} from "react";

const messages = {
	en, fr,
};

function App({Component, pageProps}) {
	const {locale} = useRouter();
	const handleAcceptCookie = () => {
		if (process.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
			initGA(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
		}
	};
	
	const handleDeclineCookie = () => {
		Cookies.remove("_ga");
		Cookies.remove("_gat");
		Cookies.remove("_gid");
	};
	
	useEffect(() => {
		const isConsent = getCookieConsentValue();
		if (isConsent === "true") {
			handleAcceptCookie();
		}
	}, []);
	
	
	return <>
		<link rel="icon" href="%PUBLIC_URL%/favicon.ico"/>
		
		<IntlProvider locale={locale} messages={messages[locale]}>
			<Component {...pageProps} />
		</IntlProvider>
		
		<CookieConsent enableDeclineButton onAccept={handleAcceptCookie} onDecline={handleDeclineCookie}>
			This website uses cookies to enhance the user
			experience.
		</CookieConsent>
	
	
	</>
}

export default App;
