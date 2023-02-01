import React, { useEffect, useState } from 'react';
import { setCookie, hasCookie } from 'cookies-next';
import {IoCloseOutline} from "react-icons/io5";

function Consent() {
	const [consent, setConsent] = useState(true);
	useEffect(() => {
		setConsent(hasCookie('localConsent'));
	}, []);
	
	const acceptCookie = () => {
		setConsent(true);
		setCookie('localConsent', 'true', { maxAge: 60 * 60 * 24 * 365 });
		gtag('consent', 'update', {
			ad_storage: 'granted',
			analytics_storage: 'granted',
		});
	};
	const closeP = () => {
		setConsent(true);
		console.log('closing');
	};
	const denyCookie = () => {
		setConsent(true);
		setCookie('localConsent', 'false', { maxAge: 60 * 60 * 24 * 365 });
		console.log('denying cookie');
	};
	if (consent === true) {
		return null;
	}
	return (
		<div
			className={`fixed flex md:flex-row flex-col justify-between lg:items-center bottom-0 w-full px-4 py-2 bg-[#F5F4F5] z-[999] ${
				consent ? 'hidden' : ''
			}`}
		>
			<div className={'md:text-left text-center'}>
				Ce site utilise des cookies, veuillez les accepter si vous le souhaitez.
			</div>
			<div className="flex md:justify-left justify-center space-x-3 w-full md:mt-0 mt-3">
				<button
					onClick={(e) => denyCookie()}
					className="p-2 bg-[#E63D31] text-white rounded-md"
				>
					Tout refuser
				</button>
				<button
					onClick={() => {
						acceptCookie();
					}}
					className="p-2 bg-black text-white rounded-md"
				>
					Tout accepter
				</button>
				<button
					onClick={(e) => {
						closeP();
					}}
					className={'top-2 right-4 absolute'}
				>
					<IoCloseOutline size={30} color={"black"}/>
				</button>
			</div>
		</div>
	);
}

export default Consent;