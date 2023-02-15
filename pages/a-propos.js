import React from 'react';
import Format from "../src/layout/format"
import Head from "next/head";
import ImgHeader from "@/public/assets/images/femme-fitness-sur-tapis.webp";
import CircleProgressBar from "@/src/components/UI/CircleProgressBar";
import Timeline from "@/src/components/UI/Timeline";
import OurTeam from "@/src/components/About/OurTeam";
import OurValues from "@/src/components/About/OurValues";
import Header from "@/src/components/Header/Header";
import IconFeature from "@/src/components/UI/IconFeature";

const APropos = () => {
	
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
				title={"Construire \nune routine sportive solide et durable."}
				subtitle={"Athletid t’accompagne à chaque étape de ton entraînement pour t’aider à bénéficier de tous les bienfaits d’une pratique sportive régulière."}
				img={ImgHeader}
				video={""}
				displayVideo={"!hidden"}
				displayImage={"!block"}
				link={"/network"}
				visibilityWhiteButton={'hidden'}
				visibilityDownloadButton={'hidden'}
				downloadButtonvisibility={'hidden'}
				objectPosition={'cover'}
				color={'white'}
			/>
			<div className={'max-w-[1024px] mx-auto'}>
				<CircleProgressBar/>
				<IconFeature/>
				<Timeline/>
				<OurTeam/>
				<OurValues/>
			</div>
		</Format>
	
	</>);
};

export default APropos;

