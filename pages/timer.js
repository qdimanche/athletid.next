import TimerScreen03 from "@/public/assets/images/application-timer-chronometre.webp";
import TimerScreen02 from "@/public/assets/images/application-timer-seance-sport.webp";
import TimerScreen01 from "@/public/assets/images/application-timer-creation-entrainement.webp";
import HeaderTimer from "@/src/components/Header/HeaderTimer";
import AppFeature from "@/src/components/Timer/AppFeature";
import FeatureSquare from "@/src/components/UI/FeatureSquare";
import Testimonial from "@/src/components/Testimonial/Testimonial";
import DownloadApp from "@/src/components/UI/DownloadApp";
import Head from "next/head";
import Format from "@/src/layout/format";

const SocialApp = () => {
	return (<>
		
		<Head>
			<title>Timer By Athletid - Sport Timer App</title>
			<meta property="og:title" content="Timer"/>
			<meta property="og:type" content="website"/>
			<meta name="description"
			      content="Tous les Chronomètre et Timers sportifs sur une seule application, Intervalle, Tempo, AMRAP, EMOM, For Time, Respiration et bien d’autres !"/>
		</Head>
		
		<Format>
			<HeaderTimer/>
			<AppFeature/>
			<FeatureSquare
				titleFeatureSquare={"Le meilleur de tous."}
				subTitleFeatureSquare={"Avec ces fonctionnalités uniques au monde, il ne te suffit plus que d’une seule application pour avoir tous les timers et chronomètres sportifs au même endroit !"}
				titleSquare1={"Compose tes séances avec différents timers et chronomètres."}
				imgSquare1={TimerScreen01}
				titleSquare2={"Tempo, Respiration, Intervalle … Des fonctionnalités pensées par des experts."}
				imgSquare2={TimerScreen02}
				titleSquare3={"Simple et intuitif dans un design épuré, ton app préférée pour tes entraînements adorés."}
				imgSquare3={TimerScreen03}
			/>
			<Testimonial
				titleTestimonial={"Plus qu’une application. \nRejoins la communauté des passionnés."}
				subTitleTestimonial={"De nombreux sportifs et professionnels nous ont déjà rejoins, ils n’attendent plus que toi ! "}
			/>
			<DownloadApp
				flexDirection={"flex-col"}
				marginBottom={"mb-20"}
				justifyContent={"justify-center"}
				title={"Nous avons hâte de découvrir \n tes entraînements et tes conseils !"}
			/>
		</Format>
	
	
	</>);
};

export default SocialApp;
