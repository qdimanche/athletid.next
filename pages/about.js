import React from 'react';
import FormatAbout from "../src/layout/formatAbout"
import Head from "next/head";
import OurResponsabilities from "@/src/components/About/OurResponsabilities/OurResponsabilities";
import HeaderAbout from "@/src/components/Header/HeaderAbout";
import CompanyDescription from "@/src/components/About/CompanyDescription";
import CoFounderCitation from "@/src/components/About/CoFounderCitation";
import KeyNumbers from "@/src/components/About/KeyNumbers";
import JoinTeam from "@/src/components/About/JoinTeam";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const About = () => {
	
	return (<>
		<Head>
			<title>Athletid</title>
			<meta name="description"
			      content="Bodybuilding, Crossfit, Yoga, Powerlifitng, Fitness ... Whatever your discipline, our innovative solutions will guide you towards your goals!"/>
			<meta property="og:title" content="Athletid"/>
			<meta property="og:type" content="website"/>
		</Head>
		
		<FormatAbout>
			<HeaderAbout/>
			<div className={'px-4 max-w-[350px] md:max-w-[1170px] mx-auto '}>
				<OurResponsabilities/>
				<CompanyDescription/>
				<CoFounderCitation/>
				<KeyNumbers/>
				<JoinTeam/>
			</div>
		</FormatAbout>
	
	</>);
};

export default About;

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, [
				'about',
				'footer',
				'footerAbout',
				'navbar',
				'uiComponents',
			])),
		},
	}
}

