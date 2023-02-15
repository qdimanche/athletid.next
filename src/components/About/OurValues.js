import React from 'react';

const OurValues = () => {
	return (<div className={'flex flex-col lg:mb-40 mb-28 grid md:grid-cols-[2fr_3fr] gap-4'}>
		<h2 className={'lg:mb-[20px] mb-12 !whitespace-normal !font-semibold lg:text-left text-center'}>Nos valeurs</h2>
		<div className={'flex flex-col space-y-16'}>
			<div className={'flex flex-col'}>
				<div className={'flex space-x-4 item-center'}>
					<p className={'text-5xl'}>🫶</p>
					<div className={'flex flex-col'}>
						<h3 className={'mb-2'}>Passion</h3>
					</div>
				</div>
			
			</div>
			<div className={'flex flex-col'}>
				<div className={'flex space-x-4 item-center'}>
					<p className={'text-5xl'}>🤩</p>
					<div className={'flex flex-col'}>
						<h3 className={'mb-2'}>Expérience</h3>
					</div>
				</div>
			
			</div>
			<div className={'flex flex-col'}>
				<div className={'flex space-x-4 item-center'}>
					<p className={'text-5xl'}>🤝</p>
					<div className={'flex flex-col'}>
						<h3 className={' mb-2 '}>Engagement</h3>
					</div>
				</div>
			
			</div>
			<div className={'flex flex-col'}>
				<div className={'flex space-x-4 item-center'}>
					<p className={'text-5xl'}>🦾</p>
					<div className={'flex flex-col'}>
						<h3 className={'mb-2 '}>Innovation</h3>
					</div>
				</div>
			
			</div>
			<div className={'flex flex-col'}>
				<div className={'flex space-x-4 item-center'}>
					<p className={'text-5xl'}>👥</p>
					<div className={'flex flex-col'}>
						<h3 className={'mb-2'}>Proximité</h3>
					</div>
				</div>
			
			</div>
		</div>
	</div>);
};

export default OurValues;