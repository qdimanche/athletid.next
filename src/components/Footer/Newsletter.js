import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'

const Result = () => {
    return <p>Vous suivez désormais notre actualité !</p>
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

        <div className={'w-full max-w-[430px]'}>
            <div className={result ? '' : 'hidden'}> {result ? <Result/> : null} </div>
            <form action="" ref={form} onSubmit={sendEmail}
                  className={'relative border border-white border rounded-[26px]'}>
                <input type="email" name={'email'} placeholder={'Your e-mail'}
                       className={'w-full  z-1 left-0 lg:px-6 !bg-transparent  border-black/10 text-[#303639] !mt-0 '} autoComplete={"off"}/>
                <button type="submit"
                        className={'absolute z-2 right-[3px] transform -translate-y-1/2 top-1/2 w-fit bg-timeRed hover:bg-timeRedHover transition duration-300  px-3 md:px-6 py-2 rounded-medium text-white'}>Send
                </button>
            </form>
        </div>
    );
};

export default Newsletter;
