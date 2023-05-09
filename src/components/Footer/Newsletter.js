import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import {useTranslation} from "next-i18next";

const Result = () => {
    const { t } = useTranslation('footer')

    return <p>{t('newsletter.result')}</p>
}

const Newsletter = () => {

    const { t } = useTranslation('footer')
    const form = useRef();
    const [result, showResult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tlk1sli', 'template_7wlp3at', form.current, 'hcpAOjPdQ9nbt4P17')
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
        <div className={result ? 'mb-4' : 'hidden'}>
          {' '}
          {result ? <Result /> : null}{' '}
        </div>
        <form
          action=""
          ref={form}
          onSubmit={sendEmail}
          className={'relative border border-white  rounded-[26px]'}
        >
          <input
            type="email"
            name={'email'}
            placeholder={t('newsletter.placeholder')}
            className={
              'w-full  z-1 left-0 lg:px-6 !bg-transparent  border-black/10 text-white !mt-0 '
            }
            autoComplete={'off'}
          />
          <button
            type="submit"
            className={
              'absolute z-2 right-[3px] transform -translate-y-1/2 top-1/2 w-fit bg-timeRed hover:bg-timeRedHover transition duration-300  px-3 md:px-6 py-2 rounded-medium text-white'
            }
          >
            {t('newsletter.button')}
          </button>
        </form>
      </div>
    )
};

export default Newsletter;
