import '@/styles/globals.css'
import en from "../lang/en.json";
import fr from "../lang/fr.json";
import {useRouter} from "next/router";
import {IntlProvider} from "react-intl";
import CookieConsent, {Cookies, getCookieConsentValue} from "react-cookie-consent";
import {initGA} from "@/ga-utils";
import {useEffect} from "react";
import Link from "next/link";

const messages = {
	en, fr,
};

function App({Component, pageProps}) {
	const {locale} = useRouter();
	const handleAcceptCookie = () => {
		initGA("UA-254205972-1");
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
		
		<CookieConsent
			style={{
				background: '#F5F4F5', color: 'black'
			}}
			buttonStyle={{
				borderRadius: '8px ',
				backgroundColor: 'black',
				color: 'white',
				margin: '15px 10px'
			}}
			buttonText={'Accepter'}
			declineButtonStyle={{
				borderRadius: '8px ',
				backgroundColor: '#E63D31',
				color: 'white',
				margin:'15px 20px 15px 10px'
			}}
			contentClasses={'!mb-0'}
			declineButtonText={'Refuser'}
			enableDeclineButton
			onAccept={handleAcceptCookie}
			onDecline={handleDeclineCookie}
			flipButtons>
			Ce site web utilise des cookies pour améliorer l&apos;expérience de l&apos;utilisateur, pour en savoir plus cliquer <Link href={'/politique-de-confidentialite'} className={'font-bold'}>ici</Link>.
		</CookieConsent>
	
	
	</>
}

export default App;
