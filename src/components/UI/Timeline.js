import React from 'react';
import {BsCalendar} from "react-icons/bs";
import Image from "next/image";
import Exemple from "../../../public/assets/images/application-athletid-reseau-professionnel.webp"
import {VscDebugStart} from "react-icons/vsc";

const Timeline = () => {
	return (<div className={"custom-border pt-10 transform lg:translate-x-[1rem] translate-x-[2rem] lg:mx-4 mx-8"}>
		<div className={'grid grid-cols-[60px_4fr] lg:gap-8'}>
			<div className={''}>
				<div
					className={'p-2 rounded-full bg-black flex justify-center items-center h-[60px] translate-x-[-30px]'}>
					<VscDebugStart color={"white"}/>
				</div>
			</div>
			<div className={'lg:grid grid-cols-[1fr_400px] lg:gap-16 flex flex-col md:mb-0 mb-8'}>
				<div>
					<h3 className={'mb-6'}>2018</h3>
					<p className={'lg:block hidden'}>Julien rejoint Lille et son club de handball et c’est ici qu’il
						rencontre Jimmy, le préparateur physique du club. Ils ne le savent pas encore mais cette
						rencontre va changer leur vie puisque dans quelques mois, ce sera le début d’une grande
						aventure. </p>
				</div>
				<div className={'aspect-[275/215] relative overflow-hidden rounded-medium lg:mb-0 mb-6'}>
					<Image className={'object-cover'} src={Exemple} alt={''}/>
				</div>
				<div>
					<p className={'lg:hidden block mb-12'}>Julien rejoint Lille et son club de handball et c’est ici qu’il
						rencontre Jimmy, le préparateur physique du club. Ils ne le savent pas encore mais cette
						rencontre va changer leur vie puisque dans quelques mois, ce sera le début d’une grande
						aventure. </p>
				</div>
			
			</div>
			<div className={''}>
				<div
					className={'p-2 rounded-full bg-black flex justify-center items-center h-[60px] translate-x-[-30px]'}>
					<BsCalendar color={"white"}/>
				</div>
			</div>
			<div className={'lg:grid grid-cols-[1fr_400px] lg:gap-16 flex flex-col md:mb-0 mb-8'}>
				<div>
					<h3 className={'mb-6'}>2021</h3>
					<p className={'lg:block hidden'}>3 ans après, alors que le COVID semble s’être installé durablement,
						ils commencent à échanger des problèmes que rencontrent les sportifs dans leur quotidien. C’est
						alors que leur vient une première idée… Bien loin de ce qu’est Athletid aujourd’hui.
					</p>
				</div>
				<div className={'aspect-[275/215] relative overflow-hidden rounded-medium lg:mb-0 mb-6'}>
					<Image className={'object-cover'} src={Exemple} alt={''}/>
				</div>
				<div>
					<p className={'lg:hidden block mb-12'}>3 ans après, alors que le COVID semble s’être installé durablement,
						ils commencent à échanger des problèmes que rencontrent les sportifs dans leur quotidien. C’est
						alors que leur vient une première idée… Bien loin de ce qu’est Athletid aujourd’hui. </p>
				</div>
			
			</div>
			<div className={''}>
				<div
					className={'p-2 rounded-full bg-black flex justify-center items-center h-[60px] translate-x-[-30px]'}>
					<BsCalendar color={"white"}/>
				</div>
			</div>
			<div className={'lg:grid grid-cols-[1fr_400px] lg:gap-16 flex flex-col md:mb-0 mb-8'}>
				<div>
					<h3 className={'mb-6'}>2022</h3>
					<p className={'lg:block hidden'}>Après plusieurs mois de recherche, d’échange et de rencontre,
						Athletid est né. Sa mission : Aider les pratiquants de fitness, yoga et sports connexes
						(crossfit, bodybuilding, etc.) à créer une routine durable en augmentant leur engagement
						sportif. Comment ? En développant un univers complet combinant hardware et digital dédié à ces
						disciplines pour suivre, analyser et partager ses activités.</p>
				</div>
				<div className={'aspect-[275/215] relative overflow-hidden rounded-medium lg:mb-0 mb-6'}>
					<Image className={'object-cover'} src={Exemple} alt={''}/>
				</div>
				<div>
					<p className={'lg:hidden block mb-12'}>Après plusieurs mois de recherche, d’échange et de rencontre,
						Athletid est né. Sa mission : Aider les pratiquants de fitness, yoga et sports connexes
						(crossfit, bodybuilding, etc.) à créer une routine durable en augmentant leur engagement
						sportif. Comment ? En développant un univers complet combinant hardware et digital dédié à ces
						disciplines pour suivre, analyser et partager ses activités.</p>
				</div>
			
			</div>
			<div className={''}>
				<div
					className={'p-2 rounded-full bg-black flex justify-center items-center h-[60px] translate-x-[-30px]'}>
					<BsCalendar color={"white"}/>
				</div>
			</div>
			<div className={'lg:grid grid-cols-[1fr_400px] lg:gap-16 flex flex-col md:mb-0 mb-8'}>
				<div>
					<h3 className={'mb-6'}>2023</h3>
					<p className={'lg:block hidden'}>Le chrono est lancé ! Quelques mésaventures plus tard, de belles
						rencontres et des perspectives qui commencent à se dessiner, la première application débarque
						sur les stores. Timer By Athletid. Enfilez votre plus belle tenue de sport et c’est parti pour
						de nombreuses heures d’entraînement.</p>
				</div>
				<div className={'aspect-[275/215] relative overflow-hidden rounded-medium lg:mb-0 mb-6'}>
					<Image className={'object-cover'} src={Exemple} alt={''}/>
				</div>
				<div>
					<p className={'lg:hidden block mb-12'}>Le chrono est lancé ! Quelques mésaventures plus tard, de belles
						rencontres et des perspectives qui commencent à se dessiner, la première application débarque
						sur les stores. Timer By Athletid. Enfilez votre plus belle tenue de sport et c’est parti pour
						de nombreuses heures d’entraînement.</p>
				</div>
			
			</div>
		
		</div>
	
	</div>);
};

export default Timeline;


function Date() {
	return (<div className={'lg:grid grid-cols-[1fr_400px] lg:gap-16 flex flex-col'}>
			<div>
				<h3 className={'mb-6'}>2016</h3>
				<p className={'lg:block hidden'}>We started off back in 2016, by the name of Rnters, as a peer-to-peer
					rental marketplace for all
					kinds of items. Our intention was to be driven by data that would lead us to create personalized
					experiences based on the most sought-after market categories.</p>
			</div>
			<div className={'aspect-[275/215] relative overflow-hidden rounded-medium lg:mb-0 mb-6'}>
				<Image className={'object-cover'} src={Exemple} alt={''}/>
			</div>
			<div>
				<p className={'lg:hidden block mb-12'}>We started off back in 2016, by the name of Rnters, as a peer-to-peer
					rental marketplace for all
					kinds of items. Our intention was to be driven by data that would lead us to create personalized
					experiences based on the most sought-after market categories.</p>
			</div>
		
		</div>)
}