import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Button from '../UI/Button'
import { FormattedMessage, useIntl } from 'react-intl'

const Header = (props) => {
  const intl = useIntl()

  return (
    <header
      className={
        'lg:h-[95vh] h-[60vh] overflow-hidden flex md:rounded-medium safari-overflow-fix relative md:m-4'
      }
    >
      <Image
        src={props.img}
        alt="Femme s'entraînant gràce à l'application Timer"
        className={`w-full h-full object-cover `}
      />
      <div
        className={
          ' absolute transform top-1/2 -translate-y-1/2  max-w-[1280px]'
        }
      >
        <div className={'space-y-4 lg:w-2/3 px-8'}>
          <h1
              className={`md:text-left text-center`}
          >
            {props.title}
          </h1>
          <p
              className={`md:text-left text-center`}
          >
            {props.subtitle}
          </p>
          <div
              className={`flex md:justify-start justify-center space-x-4 `}
          >
            <Button
                variant={'black'}
                link={"#"}
                content={"Découvrir"}
            />
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
          href="https://www.instagram.com/athletid/"
          rel="noreferrer"
        >
          <FaInstagram color={props.color} size={18} />
        </a>
        <a
          target={'_blank'}
          href="https://www.facebook.com/TimerByAthletid"
          rel="noreferrer"
        >
          <FaFacebook color={props.color} size={18} />
        </a>
        <a
          target={'_blank'}
          href="https://www.linkedin.com/company/athletid/"
          rel="noreferrer"
        >
          <FaLinkedin color={props.color} size={18} />
        </a>
      </div>
    </header>
  )
}

export default Header