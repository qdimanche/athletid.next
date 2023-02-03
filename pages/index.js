import Head from 'next/head'
import FullScreenBgImage from "../src/components/UI/FullScreenBgImage";
import MasonryGrid from "../src/components/UI/MasonryGrid";
import ContactSupport from "../src/components/Contact/ContactSupport";
import ImgHeaderHome from "../public/assets/images/femme-entrainement-exterieur-fitness.webp"
import timerAppPreview from "../public/assets/images/application-athletid-entrainement-sportif.webp";
import capteurAppPreview from "../public/assets/images/capteur-athletid-screenshot.png"
import athletidAppPreview2 from "../public/assets/images/application-athletid-construction.webp";
import {FormattedMessage, useIntl} from "react-intl";
import Format from "../src/layout/format"
import Header from "@/src/components/Header/Header";


export default function Home() {
	
	const intl = useIntl();
	
	return (<>
		<Head>
			<title>Athletid</title>
			<meta name="description"
			      content="Musculation, Crossfit, Yoga, Powerlifitng, Fitness … Peu importe ta discipline nos solutions innovantes te guident vers tes objectifs !"/>
			<meta property="og:title" content="Athletid"/>
			<meta property="og:type" content="website"/>
		</Head>
		
		
		<Format>
			<Header
				title={<FormattedMessage id="message.titleHeaderHome"/>}
				subtitle={<FormattedMessage id="message.subtitleHeaderHome"/>}
				img={ImgHeaderHome}
				video={"https://res.cloudinary.com/dxplbf0t0/video/upload/v1674830882/femme-entrainement-exterieur-fitness_hvam4t.mp4"}
				link={"/timer"}
				visibilityWhiteButton={'flex'}
				visibilityDownloadButton={'hidden'}
				downloadButtonvisibility={'hidden'}
				objectPosition={'cover'}
				color={'white'}
			/>
			<FullScreenBgImage
				src={timerAppPreview}
				video={"https://res.cloudinary.com/dxplbf0t0/video/upload/v1674831668/application-timer-athletid-fonctionnalites_mszyz3.mp4"}
				title={"Chaque séance. \n Une victoire."} button={false} tag={"Bientôt disponible"}
				subtitle={"Paramètre ton entraînement et laisse-toi guider. Enchaîne tes exercices l’esprit libre et respecte chaque seconde pour te rapprocher un peu plus de ton objectif."}
				link={"/timer"}
			/>
			<FullScreenBgImage
				src={capteurAppPreview}
				video={"https://res.cloudinary.com/dxplbf0t0/video/upload/v1675439914/captor_erchao.mp4"}
				title={"Objets connectés. \nApplication."}
				button={"hidden"}
				subtitle={"Nous voulons permettre aux adeptes de fitness, yoga et sports connexes de progresser et d'atteindre leurs objectifs.\n" +
					"Pour cela nous développons un univers unique et dédié à ces disciplines."}
				tag={"À venir"}
				link={""}
				idSection={"networkHeader"}
			/>
			<MasonryGrid
				titleMasonry={"Accompagner.\n Innover. Progresser."}
				subTitleMasonry={"Construisons ensemble l’univers qui vous propulsera vers vos objectifs."}
				link={"/about"}
			/>
			<ContactSupport src={athletidAppPreview2}/>
		</Format>
	
	
	</>)
}
