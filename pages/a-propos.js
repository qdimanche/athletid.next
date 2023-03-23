import React from 'react';
import Format from "../src/layout/format"
import Head from "next/head";
import OurResponsabilities from "@/src/components/About/OurResponsabilities/OurResponsabilities";
import HeaderAbout from "@/src/components/Header/HeaderAbout";
import CompanyDescription from "@/src/components/About/CompanyDescription";
import CoFounderCitation from "@/src/components/About/CoFounderCitation";
import KeyNumbers from "@/src/components/About/KeyNumbers";

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
			<HeaderAbout/>
			<div className={'px-8 md:px-12 max-w-[1280px] mx-auto '}>
				<OurResponsabilities/>
				<CompanyDescription/>
				<CoFounderCitation/>
				<KeyNumbers/>
			</div>
		</Format>
	
	</>);
};

export default APropos;

