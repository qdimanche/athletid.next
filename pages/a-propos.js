import React from 'react';
import Format from "../src/layout/format"
import Head from "next/head";
import ImgHeader from "@/public/assets/images/man-running.webp";
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
				title={"Athletid t’accompagne tout au long du voyage"}
				subtitle={"Entraîne toi avec nos applications innovantes. \n Rejoins une expérience sportive unique et un environment propice à ta réussite"}
				img={ImgHeader}
				video={"https://res.cloudinary.com/dxplbf0t0/video/upload/v1675156326/footing-homme_mdjoml.mp4"}
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
				<Content/>
				<Timeline/>
				<OurTeam/>
				<OurValues/>
			</div>
		</Format>
	
	</>);
};

export default APropos;


function Content() {
	return (<div className={''}>
		<div className={'flex flex-col lg:mb-40 mb-32 grid lg:grid-cols-[2fr_3fr] gap-4'}>
			<h2 className={'lg:mb-[20px] mb-[10px]'}>Politique de confidentialité</h2>
			<div>
				<span className={''}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.</span>
			</div>
		</div>
	</div>)
}


