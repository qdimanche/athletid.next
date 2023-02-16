import React from 'react';
import Image from "next/image";
import Exemple from "../../../public/assets/images/application-athletid-reseau-professionnel.webp"
import {VscDebugStart} from "react-icons/vsc";
import {FiSearch} from "react-icons/fi";
import {MdOutlineWbSunny, MdTimer} from "react-icons/md";


const Timeline = () => {
	return (<div>
			<h2 style={{whiteSpace: 'pre-line'}}
			    className={'flex flex-col w-3/4 items-center mx-auto text-center md:mb-12 mb-8'}>Notre histoire</h2>
			<div className={"custom-border pt-10 md:mx-4 mx-8"}>
				<Date
					year={"2018"}
					icon={<VscDebugStart size={22} color={"white"}/>}
					description={"Julien rejoint Lille et son club de handball et c’est ici qu’il rencontre Jimmy, le préparateur physique du club. Ils ne le savent pas encore mais cette rencontre va changer leur vie puisque dans quelques mois, ce sera le début d’une grande aventure. "}/>
				<Date
					year={"2021"}
					icon={<FiSearch size={22} color={"white"}/>}
					description={"3 ans après, alors que le COVID semble s’être installé durablement, ils commencent à échanger des problèmes que rencontrent les sportifs dans leur quotidien. C’est alors que leur vient une première idée… Bien loin de ce qu’est Athletid aujourd’hui."}/>
				<Date
					year={"2022"}
					icon={<MdOutlineWbSunny size={22} color={"white"}/>}
					description={"Après plusieurs mois de recherche, d’échange et de rencontre, Athletid est né. Sa mission : Aider les pratiquants de fitness, yoga et sports connexes (crossfit, bodybuilding, etc.) à créer une routine durable en augmentant leur engagement sportif. Comment ? En développant un univers complet combinant hardware et digital dédié à ces disciplines pour suivre, analyser et partager ses activités."}/>
				<Date year={"2023"}
				      icon={<MdTimer
					      size={22}
					      color={"white"}/>}
				          description={"Le chrono est lancé ! Quelques mésaventures plus tard, de belles rencontres et des perspectives qui commencent à se dessiner, la première application débarque sur les stores. Timer By Athletid. Enfilez votre plus belle tenue de sport et c’est parti pour de nombreuses heures d’entraînement."}/>
			</div>
		</div>
	);
};

export default Timeline;


function Date(props) {
	return (
		<div className={'grid md:grid-cols-[2fr_1fr] gap-16 mb-16'}>
			<div className={'flex flex-col transform -translate-x-2'}>
				<div className={'flex space-x-3 items-center'}>
					<div
						className={'w-[60px] h-[60px] p-2 rounded-full bg-black flex justify-center items-center translate-x-[-20px]'}>
						{props.icon}
					</div>
					<h3 className={''}>{props.year}</h3>
				</div>
				<div
					className={'aspect-[275/215] relative overflow-hidden rounded-medium md:mb-0 mb-6 md:ml-0 md:hidden block ml-[70px]'}>
					<Image className={'object-cover'} src={Exemple} alt={''}/>
				</div>
				
				<div className={"flex flex-col ml-[70px]"}>
					<p className={''}>{props.description}</p>
				</div>
			</div>
			<div
				className={'aspect-[275/215] relative overflow-hidden rounded-medium md:mb-0 mb-6 md:ml-0 ml-[70px] md:block hidden'}>
				<Image className={'object-cover'} src={Exemple} alt={''}/>
			</div>
		</div>
	
	)
}