import React from 'react';
import Format from "../src/layout/format"
import Head from "next/head";
import ImgHeader from "@/public/assets/images/femme-fitness-sur-tapis.webp";
import CircleProgressBar from "@/src/components/UI/CircleProgressBar";
import Timeline from "@/src/components/UI/Timeline";
import OurTeam from "@/src/components/About/OurTeam/OurTeam";
import OurValues from "@/src/components/About/OurValues/OurValues";
import Header from "@/src/components/About/Header";
import OurResponsabilities from "@/src/components/About/OurResponsabilities/OurResponsabilities";

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
				title={"Construire une\nroutine sportive\nsolide et durable."}
				subtitle={"Athletid t’accompagne à chaque étape de ton entraînement pour t’aider à bénéficier de tous les bienfaits d’une pratique sportive régulière."}
				img={ImgHeader}
				video={""}
				displayVideo={"!hidden"}
				displayImage={"!block"}
				link={"/network"}
				objectPosition={'cover'}
				color={'white'}
			/>
			<div className={'max-w-[1024px] xl:px-0 px-4  mx-auto'}>
				<CircleProgressBar/>
				<OurResponsabilities/>
				<Timeline/>
				<OurTeam/>
				<OurValues/>
			</div>
		</Format>
	
	</>);
};

export default APropos;

