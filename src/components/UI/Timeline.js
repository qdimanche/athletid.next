import React from 'react';
import {BsCalendar} from "react-icons/bs";
import Image from "next/image";
import Exemple from "../../../public/assets/images/application-athletid-reseau-professionnel.webp"

const Timeline = () => {
	return (<div className={"custom-border pt-10"}>
		<div className={'grid grid-cols-[60px_4fr] lg:gap-8'}>
			<div className={''}>
				<div
					className={'p-2 rounded-full bg-black flex justify-center items-center h-[60px] translate-x-[-30px]'}>
					<BsCalendar color={"white"}/>
				</div>
			</div>
			<div className={'lg:grid grid-cols-[1fr_400px] lg:gap-16 flex flex-col'}>
				<div>
					<h3 className={'mb-6'}>2016</h3>
					<p className={'lg:block hidden'}>We started off back in 2016, by the name of Rnters, as a peer-to-peer rental marketplace for all
						kinds of items. Our intention was to be driven by data that would lead us to create personalized
						experiences based on the most sought-after market categories.</p>
				</div>
				<div className={'aspect-[275/215] relative overflow-hidden rounded-medium lg:mb-0 mb-6'}>
					<Image className={'object-cover'} src={Exemple} alt={''}/>
				</div>
				<div>
					<p className={'lg:hidden block'}>We started off back in 2016, by the name of Rnters, as a peer-to-peer rental marketplace for all
						kinds of items. Our intention was to be driven by data that would lead us to create personalized
						experiences based on the most sought-after market categories.</p>
				</div>
			
			</div>
			
		
		</div>
	
	</div>);
};

export default Timeline;