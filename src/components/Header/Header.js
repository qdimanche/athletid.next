import React from 'react';
import Image from 'next/image';
import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";
import Button from "../UI/Button";
import {FormattedMessage, useIntl} from "react-intl";
import DownloadApp from "@/src/components/UI/DownloadApp";

const Header = (props) => {
	
	const intl = useIntl();
	
	
	return (<header
		className={'lg:h-[95vh] md:h-[80vh] h-[60vh] relative overflow-hidden flex rounded-[30px] justify-center md:justify-start rounded-header-mobile-tablet safari-overflow-fix mt-4'}>
		<div className={"absolute top-0 left-0 w-full h-full bg-black/20 z-[1] "}></div>
		<video className={`w-full lg:block hidden ${props.displayVideo} h-full object-cover pointer-events-none`}
		       preload="metadata"
		       controls={false} loop muted autoPlay playsInline>
			<source src={props.video + "#t=0.5"} type="video/mp4"/>
		</video>
		<Image src={props.img} alt="Femme s'entraînant gràce à l'application Timer"
		       className={`lg:hidden ${props.displayImage} w-full h-full object-cover pointer-events-none`}/>
		<div style={{whiteSpace: "pre-line"}}
		     className={'lg:mt-0 md:mt-3 absolute-vertical-center-header absolute-vertical-center-mobile-header flex flex-col justify-center md:items-start items-center  z-[3] md:p-0 px-8 md:grid lg:grid-cols-[3fr_2fr]'}>
			<div className={`2xl:ml-28 lg:ml-20 md:ml-12`}>
				<h1 className={`md:text-left text-center !text-${props.color}  white whitespace-pre-wrap`}>
					{props.title}</h1>
				<p className={`mt-[10px] mb-[20px] !text-${props.color} md:text-left text-center md:w-3/4`}>
					{props.subtitle}</p>
				<div
					className={`flex md:justify-start justify-center space-x-4 ${props.visibilityWhiteButton}`}>
					<Button variant={"white"} link={props.link}
					        text={<FormattedMessage id="message.buttonDiscover"/>}/>
				</div>
			</div>
		</div>
		<div
			className={'absolute bottom-[2.5rem] right-[2.5rem] space-y-6 z-[900] text-[1.3em] md:flex flex-col hidden'}>
			<a target={'_blank'} href="https://www.instagram.com/athletid/" rel="noreferrer"><FaInstagram
				color={props.color}
				size={18}/></a>
			<a target={'_blank'} href="https://www.facebook.com/TimerByAthletid" rel="noreferrer"><FaFacebook
				color={props.color}
				size={18}/></a>
			<a target={'_blank'} href="https://www.linkedin.com/company/athletid/" rel="noreferrer"><FaLinkedin
				color={props.color}
				size={18}/></a>
		</div>
	</header>);
}


export default Header;