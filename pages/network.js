import React from "react";
import NetworkScreen01 from "../public/assets/images/application-athletid-profil.webp";
import NetworkScreen02 from "../public/assets/images/application-athletid-seance-sport.webp";
import NetworkScreen03 from "../public/assets/images/application-athletid-communaute.webp";
import SocialAppFeature from "../src/components/SocialApp/SocialAppFeature";
import FeatureSquare from "../src/components/UI/FeatureSquare";
import Testimonial from "../src/components/Testimonial/Testimonial";
import DownloadApp from "../src/components/UI/DownloadApp";
import HeaderSN from "../src/components/Header/HeaderSN";
import Head from "next/head";
import Format from "../src/layout/format"

const Network = () => {
	return (<>
		<Head>
			<title>Network</title>
			<meta property="og:title" content="Network"/>
			<meta property="og:type" content="website" />
		</Head>
		
		<Format>
			
			<HeaderSN/>
			<SocialAppFeature
				tagAppFeature1={"Sportif"}
				titleAppFeature1={"Inspire. Progresse.\n" + "Partage."}
				subtitleAppFeature1={"Tiens régulièrement ton journal d’entraînement pour suivre ton évolution et motiver tes amis à atteindre leurs objectifs. Inspire-toi de ta communauté pour apprendre chaque jour de nouveaux exercices, séances et conseils qui vont changer ta vie de sportif.  "}
				altAppFeature1={"Femme se préparant à soulever une barre de musculation"}
				tagAppFeature2={"Professionnel"}
				titleAppFeature2={"Conseille. Rencontre. Vends."}
				subtitleAppFeature2={"Mets en avant ton expertise et accrois rapidement ta notoriété auprès de ton audience. Communique et propose tes services à un grand nombre d’acheteurs potentiels."}
				altAppFeature2={"Coach sportif expliquant son programme à un amateur de sport"}
				tagAppFeature3={"Entreprise"}
				titleAppFeature3={"Développe. Communique. Vends. "}
				subtitleAppFeature3={"Rejoignez l’univers dédié à l’entraînement et au bien-être pour être au plus près de votre publique. Un nouveau marché s’ouvre à vous pour acquérir de nouveaux clients.\n"}
				altAppFeature3={"Vêtements et équipements pour pratiquer du sport"}
			/>
			<FeatureSquare
				titleFeatureSquare={"Un réseau social. \n Une émulation collective."}
				subTitleFeatureSquare={"Du Bodybuilding au Crossfit en passant par le Yoga ou le Running, retrouve chaque discipline de l’entraînement et du bien-être ainsi que de nombreuses thématiques de conseils."}
				titleSquare1={"Trouve \n ce dont tu as besoin !"}
				imgSquare1={NetworkScreen01}
				altSquare1={"Onglet profil de l'application Athletid Network"}
				titleSquare2={"Découvre \n de nouveaux entraînements et conseils !"}
				imgSquare2={NetworkScreen02}
				altSquare2={"Onglet séance sportive de l'application Athletid Network"}
				titleSquare3={"Partage \n tes performances et objectifs !"}
				imgSquare3={NetworkScreen03}
				altSquare3={"Onglet fil d'actualité de l'application Athletid Network"}
			/>
			<Testimonial
				titleTestimonial={"Ils ont rejoins notre \n version BETA"}
				subTitleTestimonial={"De nombreux sportifs et professionnels nous ont déjà rejoins, ils n’attendent plus que toi ! "}
			/>
			<DownloadApp
				title={"Nous avons hâte de découvrir \n tes entraînements et tes conseils !"}
				flexDirection={'flex-col'}
				justifyContent={"justify-center"}
			/>
		</Format>
	
	</>);
};

export default Network;
