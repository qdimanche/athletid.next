import React from 'react'
import Image from 'next/image'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import {useIntl} from 'react-intl'
import Button from '@/src/components/UI/Button'
import clsx from 'clsx'
import Tag from "@/src/components/UI/Tag";

const Header = ({imageClassName, ...props }) => {
  const intl = useIntl()

  return (
    <header
      className={`header-height relative  overflow-hidden flex md:rounded-medium justify-center lg:justify-start bg-greyShade md:m-4 mt-0`}
    >
      <div
        style={{ whiteSpace: 'pre-line' }}
        className={
          'lg:mt-0 lg:mt-3 flex md:grid md:grid-cols-2 flex-col  z-[3] lg:p-0 items-center w-screen max-w-[1280px] mx-auto'
        }
      >
        <div
          className={clsx(
            'pt-28  md:pr-8 md:py-16  md:flex md:flex-col md:justify-center px-8',
            props.paragraphClassName
          )}
        >
          <div className={'space-y-6 flex flex-col items-center'}>
            <Tag variant={"black"} text={"Disponible"}/>
            <h1
              className={`md:text-left text-center text-black white whitespace-pre-line`}
            >
              {props.title}
            </h1>
            <p
              className={`text-black md:text-left text-center `}
            >
              {props.subTitle}
            </p>
            <div className={`flex space-x-4`}>
              {props.buttons}
            </div>
          </div>
        </div>

        <div className={clsx('h-full md:flex md:items-end', imageClassName)}>
          <div
            className={clsx(
              'md:absolute relative md:bottom-0 md:h-full',
              props.imageHeight,
              props.imageWidth,
              props.imageClassName
            )}
          >
            <Image
              src={props.imageSrc}
              width={1000}
              alt={''}
            />
          </div>
        </div>
      </div>
      <div
        className={
          'absolute bottom-[1.5rem] right-[1.5rem]  space-y-6 z-[900] text-[1.3em] lg:flex flex-col hidden'
        }
      >
        <a
          target={'_blank'}
          href={'https://www.instagram.com/timerbyathletid/'}
          rel="noreferrer"
        >
          <FaInstagram size={18} color={'black'} />
        </a>
        <a
          target={'_blank'}
          href="https://www.facebook.com/TimerByAthletid"
          rel="noreferrer"
        >
          <FaFacebook size={18} color={'black'} />
        </a>
        <a
          target={'_blank'}
          href="https://www.linkedin.com/company/athletid/"
          rel="noreferrer"
        >
          <FaLinkedin size={18} color={'black'} />
        </a>
      </div>
    </header>
  )
}

export default Header
