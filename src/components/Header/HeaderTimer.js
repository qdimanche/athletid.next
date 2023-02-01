import React from 'react';
import Image from 'next/image';
import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";
import {useIntl} from "react-intl";
import DownloadApp from "@/src/components/UI/DownloadApp";
import AppEntrainement from "@/public/assets/images/application-athletid-entrainement-sportif.webp" ;

const HeaderTimer = (props) => {
	
	const intl = useIntl();
	
	
	return (<header
	                className={`lg:h-[95vh] md:h-[80vh] min-h-[60vh] relative overflow-hidden flex rounded-[30px] justify-center md:justify-start rounded-header-mobile-tablet safari-overflow-fix mt-4 bg-[#F5F4F5]`}>
		<div style={{whiteSpace: "pre-line"}}
		     className={'lg:mt-0 md:mt-3 flex flex-col justify-center  z-[3] md:p-0 px-8 md:grid lg:grid-cols-[1fr_600px] items-center'}>
			<div className={'2xl:ml-28 lg:ml-20 md:ml-12 flex flex-col lg:items-start items-center lg:pt-0 pt-20'}>
				<h1 className={`md:text-left text-center text-black white whitespace-pre-wrap`}>
					Le meilleur Timer sportif !</h1>
				<p className={`mt-[10px] mb-[20px] text-black md:text-left text-center `}>
					Des fonctionnalités adaptées pour les entraînements musculaires, cardio et bien-être comme tu ne trouveras nulle part ailleurs. Enchaîne tes exercices l’esprit libre et utilise chaque seconde pour te rapprocher vers ton objectif !</p>
				<DownloadApp/>
				<Image src={AppEntrainement} alt="Écran d'accueil de l'application Athletid"
				       className={'lg:hidden w-full h-full pointer-events-none lg:mt-0 mt-3'}/>
			</div>
			<div className={'mx-auto lg:flex lg:self-end flex'}>
				<video className={`pointer-events-none lg:block hidden`} preload="metadata"
				       controls={false} loop muted autoPlay playsInline>
					<source src={"https://res.cloudinary.com/dxplbf0t0/video/upload/v1675177383/application-timer-athletid-dashboard_cyojg3.mp4" + "#t=0.5"} type="video/mp4"/>
				</video>
			</div>

		</div>
		<div
			className={'absolute bottom-[2.5rem] right-[2.5rem] space-x-6 z-[900] text-[1.3em] md:flex hidden'}>
			<a target={'_blank'} href="https://www.instagram.com/athletid/" rel="noreferrer"><FaInstagram
				size={18} color={"black"}/></a>
			<a target={'_blank'} href="https://www.linkedin.com/company/athletid/" rel="noreferrer"><FaFacebook
				size={18} color={"black"}/></a>
			<a target={'_blank'} href="https://www.facebook.com/TimerByAthletid" rel="noreferrer"><FaLinkedin
				size={18}  color={"black"}/></a>
		</div>
	</header>);
}


export default HeaderTimer;
