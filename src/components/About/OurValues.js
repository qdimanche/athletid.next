import React from 'react';

const OurValues = () => {
	return (<div className={'flex flex-col lg:mb-40 mb-28 grid md:grid-cols-[2fr_3fr] gap-4'}>
		<h2 className={'lg:mb-[20px] mb-12 !whitespace-normal !font-semibold lg:text-left text-center'}>Nos valeurs</h2>
		<div className={'flex flex-col space-y-16'}>
			<div className={'flex flex-col'}>
				<div className={'flex space-x-4 item-center'}>
					<p className={'text-5xl'}>🫂</p>
					<div className={'flex flex-col'}>
						<h3 className={'mb-2'}>Teamwork</h3>
						<p className={''}>We value people that empower team-members to grow.</p>
					</div>
				</div>
			
			</div>
			<div className={'flex flex-col'}>
				<div className={'flex space-x-4 item-center'}>
					<p className={'text-5xl'}>💡</p>
					<div className={'flex flex-col'}>
						<h3 className={'mb-2'}>Innovation</h3>
						<p className={''}>We trust everyone to be able to identify major improvement
							opportunities.</p>
					</div>
				</div>
			
			</div>
			<div className={'flex flex-col'}>
				<div className={'flex space-x-4 item-center'}>
					<p className={'text-5xl'}>🎯</p>
					<div className={'flex flex-col'}>
						<h3 className={' mb-2 '}>Impact</h3>
						<p className={''}>We promote a sustainable and healthy mentality with positive team
							spirit and constant communication.</p>
					</div>
				</div>
			
			</div>
			<div className={'flex flex-col'}>
				<div className={'flex space-x-4 item-center'}>
					<p className={'text-5xl'}>💟</p>
					<div className={'flex flex-col'}>
						<h3 className={'mb-2 '}>Freedom</h3>
						<p className={''}>As a team, we manage all responsibilities with total independence &
							maximum accountability. In exchange we promote freedom to decide how, when, why.</p>
					</div>
				</div>
			
			</div>
			<div className={'flex flex-col'}>
				<div className={'flex space-x-4 item-center'}>
					<p className={'text-5xl'}>💪</p>
					<div className={'flex flex-col'}>
						<h3 className={'mb-2'}>Resilience</h3>
						<p className={''}>Make no mistake, we have a bumpy road ahead of us: ability to be
							persistent, along with constant improvement and growth mentality is highly promote.</p>
					</div>
				</div>
			
			</div>
		</div>
	</div>);
};

export default OurValues;