import Head from 'next/head'
import HeaderHome from "../src/components/Header/HeaderHome";
import FullScreenBgImage from "../src/components/UI/FullScreenBgImage";
import MasonryGrid from "../src/components/UI/MasonryGrid";
import ContactSupport from "../src/components/Contact/ContactSupport";
import ImgHeaderHome from "../public/assets/images/femme-entrainement-exterieur-fitness.webp"
import timerAppPreview from "../public/assets/images/application-athletid-entrainement-sportif.webp";
import athletidAppPreview from "../public/assets/images/application-athletid.webp"
import athletidAppPreview2 from "../public/assets/images/application-athletid-construction.webp";
import femmeEntrainement from "../public/assets/videos/femme-entrainement-exterieur-fitness.mp4";
import appSNVideo from "../public/assets/videos/application-network-athletid-fonctionnalites.mp4";
import appTimerVideo from "../public/assets/videos/application-timer-athletid-fonctionnalites.mp4";
import {FormattedMessage, useIntl} from "react-intl";
import Format from "../src/layout/format"


export default function Home() {
	
	const intl = useIntl();
	
	return (<>
		<Head>
			<title>Athletid</title>
			<meta property="og:title" content="Athletid"/>
			<meta property="og:type" content="website" />
		</Head>
		
		
		<Format>
			<HeaderHome
				title={<FormattedMessage id="message.titleHeaderHome"/>}
				subtitle={<FormattedMessage id="message.subtitleHeaderHome"/>}
				img={ImgHeaderHome}
				video={"https://res.cloudinary.com/dxplbf0t0/video/upload/v1674830882/femme-entrainement-exterieur-fitness_hvam4t.mp4"}
				link={"/network"}
				visibilityWhiteButton={'flex'}
				visibilityDownloadButton={'hidden'}
				downloadButtonvisibility={'hidden'}
			/>
			<FullScreenBgImage
				src={athletidAppPreview}
				video={appSNVideo}
				title={"Partage ta \n passion !"}
				button={true}
				subtitle={"Enregistre tes séances et partage ta vie de sportif avec une communauté qui te ressemble. Un lieu inspirant, accessible à tous, empreint de valeurs sportives, avec un but commun : atteindre ensemble nos objectifs !"}
				tag={"Nouveau"}
				link={"/network"}
				idSection={"networkHeader"}
			/>
			<FullScreenBgImage
				src={timerAppPreview}
				video={appTimerVideo}
				title={"Ton temps \n est précieux !"} button={false} tag={"Bientôt disponible"}
				subtitle={"Paramètre ton entraînement et laisse toi guider. Enchaîne tes exercices l’esprit libre et respecte chaque seconde pour te rapprocher un peu plus de ton objectif."}
				link={"/network"}
			/>
			<MasonryGrid
				titleMasonry={"Accompagner. \n Informer. Inspirer."}
				subTitleMasonry={"Construisons ensemble l’univers qui vous propulsera vers vos objectifs"}
				link={"/about"}
			/>
			<ContactSupport src={athletidAppPreview2}
			                title={"Ton temps est précieux !"} tag={"Bientôt disponible"}/>
		</Format>
	
	
	</>)
}
