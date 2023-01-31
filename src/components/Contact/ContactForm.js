import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
/*
import {FaChevronUp} from "react-icons/fa";
*/


const Result = () => {
	return (<p>Votre message a bien été envoyé. Notre équipe va bientôt vous contacter.</p>
	
	)
}

const ContactForm = (props) => {
	
	const form = useRef();
	
	const [result, showResult] = useState(false);
	
	const sendEmail = (e) => {
		e.preventDefault();
		
		emailjs.sendForm('service_tjei9r6', 'template_uhydw28', form.current, 'g92EDi7GAjJpn8a6u')
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
		
		e.target.reset();
		showResult(true);
		
	};
	
	
	return (
		
		
		<div className={'xl:w-[40%] md:w-1/2 w-3/4 mx-auto lg:px-20 lg:pt-28 pt-20 pb-20'}>
			
			<div className={'flex flex-col mb-12'}>
				<h2 className={'mb-3'}>Nous contacter.</h2>
				<span>C’est toujours un plaisir d’échanger avec vous !</span>
			</div>
			
			<div className={'rounded-medium'}>
				<form action="" className={'flex flex-col space-y-6'} ref={form} onSubmit={sendEmail}>
					
					<div className={'flex flex-col'}>
						<label>
							Nom
						</label>
						<input className={'focus:ring-1 focus:ring-white'} type="text" name="fullName"/>
					</div>
					
					<div className={'flex flex-col'}>
						<label>
							Email
						</label>
						<input type="mail" name="email"/>
					</div>
					
					<div className={'flex flex-col'}>
						<label>
							Message
						</label>
						<textarea name="message" id="message" rows="5" placeholder={'Message'}></textarea>
					</div>
					
					<input type="submit" value="Envoyer"
					       className={'!bg-timeRed hover:!bg-timeRedHover !transition !duration-300  !px-4 !py-3 !rounded-medium !shadow-lg !shadow-timeRed/50 !w-1/2 !self-end cursor-pointer !text-white'}/>
					
					<div className={result ? '' : 'hidden'}> {result ? <Result/> : null} </div>
				</form>
			
			</div>
		
		</div>
	
	
	);
};

export default ContactForm;
