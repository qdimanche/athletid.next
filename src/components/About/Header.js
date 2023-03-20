import React from 'react'
import Image from 'next/image'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import {useIntl} from 'react-intl'

const Header = (props) => {
  const intl = useIntl()

  return (
      <header
          className={
            'h-[95vh] overflow-hidden flex md:rounded-medium safari-overflow-fix relative md:m-4'
          }
      >
        <Image
            src={props.img}
            alt="Femme s'entraînant gràce à l'application Timer"
            className={`w-full h-full object-cover `}
        />
        <div className={' absolute transform top-1/3 -translate-y-1/3 w-full'}>
          <div className={'max-w-[1280px] lg:px-8 px-12 mx-auto'}>
            <div className={'space-y-4 md:w-1/2 '}>
              <h1 className={`md:text-left text-center whitespace-pre-line`}>
                {props.title}
              </h1>
              <p className={`md:text-left text-center`}>{props.subtitle}</p>
            </div>
          </div>
        </div>
        <div
            className={
              'absolute bottom-[2.5rem] right-[2.5rem] space-y-6 text-[1.3em] md:flex flex-col hidden'
            }
        >
          <a
              target={'_blank'}
              href="https://www.instagram.com/timerbyathletid/"
              rel="noreferrer"
          >
            <FaInstagram color={"black"} size={18}/>
          </a>
          <a
              target={'_blank'}
              href="https://www.facebook.com/TimerByAthletid"
              rel="noreferrer"
          >
            <FaFacebook color={"black"} size={18}/>
          </a>
          <a
              target={'_blank'}
              href="https://www.linkedin.com/company/athletid/"
              rel="noreferrer"
          >
            <FaLinkedin color={"black"} size={18}/>
          </a>
        </div>
      </header>
  )
}

export default Header