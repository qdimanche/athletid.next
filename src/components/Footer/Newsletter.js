import React, {useRef, useState} from 'react';
import emailjs from "@emailjs/browser";


const Result = () => {
    return (
        <p>Vous suivez désormais notre actualité !</p>

    )
}

const Newsletter = () => {

    const form = useRef();

    const [result, showResult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tjei9r6', 'template_3hpzh1r', form.current, 'g92EDi7GAjJpn8a6u')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
        showResult(true);
    };


    return (
        <div className={'border-t border-black/10 pb-10 lg:pt-20 pt-16 '}>
            <div className={'md:w-3/4 md:mx-auto mx-4 md:flex-col items-center text-center '}>
                <span className={'text-center'}>Le mail qui te fait transpirer <br/> et qui te veut du bien !</span>
                <div className={result ? '' : 'hidden'}> {result ? <Result/> : null} </div>
                <form action="" ref={form} onSubmit={sendEmail} className={'relative w-full pb-24 2xl:w-[30%] xl:w-[35%] lg:w-[50%] md:w-[60%] w-[80%] mx-auto mt-3'}>
                    <input type="email" name={'email'} placeholder={'Votre email ici'} className={'w-full absolute z-1 left-0 lg:px-6 lg:py-3 bg-white border rounded-[45px] border-black/10 text-[#303639] '} />
                    <button type="submit" className={'absolute z-2 right-[4px] lg:right-[6px] lg:top-[9px] top-[7px] w-fit bg-timeRed hover:bg-timeRedHover transition duration-300  px-3 md:px-6 py-2 rounded-medium circle-boxShadow text-white'}>S&apos;inscrire</button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;
