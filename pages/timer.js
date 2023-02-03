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
			      content="Tous les chronomètres et Timers sportifs sur une seule application, Intervalle, Tempo, AMRAP, EMOM, For Time, Respiration et bien d’autres !"/>
		</Head>
		
		<Format>
			<HeaderTimer/>
			<AppFeature/>
			<FeatureSquare
				titleFeatureSquare={"Accessible à tous."}
				subTitleFeatureSquare={"Conçu en collaboration avec des sportifs et des experts du monde entier. Ton application Timer t’accompagne quel que soit ton niveau, ta discipline ou encore tes objectifs."}
				titleSquare1={"Enregistre et adapte ta séance selon tes besoins et tes objectifs."}
				imgSquare1={TimerScreen01}
				titleSquare2={"Tempo, Respiration, Intervalle, AMRAP, EMOM, For Time, Sonothérapie…"}
				imgSquare2={TimerScreen02}
				titleSquare3={"Découvre un design épuré, intuitif  et des sons adaptés à ton sport."}
				imgSquare3={TimerScreen03}
			/>
			<Testimonial
				titleTestimonial={"Toi aussi atteint tes objectifs sportifs avec Timer by Athletid."}
				subTitleTestimonial={"De nombreux sportifs et professionnels nous ont déjà rejoins, ils n’attendent plus que toi ! "}
			/>
{/*			<DownloadApp
				flexDirection={"flex-col"}
				marginBottom={"mb-20"}
				justifyContent={"justify-center"}
				title={"Nous avons hâte de découvrir \n tes entraînements et tes conseils !"}
			/>*/}
		</Format>
	
	
	</>);
};

export default SocialApp;
