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
			className={`fixed flex justify-between items-center bottom-0 w-full p-4 bg-[#F5F4F5] z-[999] ${
				consent ? 'hidden' : ''
			}`}
		>
			<div>
				Ce site utilise des cookies, veuillez les accepter si vous le souhaitez.
			</div>
			<div className="flex space-x-3">
				<button
					onClick={(e) => denyCookie()}
					className="p-2 bg-[#E63D31] text-white rounded-md"
				>
					Deny All
				</button>
				<button
					onClick={() => {
						acceptCookie();
					}}
					className="p-2 bg-black text-white rounded-md"
				>
					Accept All
				</button>
				<button
					onClick={(e) => {
						closeP();
					}}
					className={''}
				>
					<IoCloseOutline size={30} color={"black"}/>
				</button>
			</div>
		</div>
	);
}

export default Consent;