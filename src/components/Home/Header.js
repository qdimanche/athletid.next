import React from 'react'
import Image from 'next/image'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import {useIntl} from 'react-intl'
import Button from '@/src/components/UI/Button'
import clsx from 'clsx'

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
            'pt-28  md:pr-8 md:py-16  md:flex md:flex-col md:justify-center xl:px-0 md:px-8 px-4',
            props.paragraphClassName
          )}
        >
          <div className={''}>
            <h1
              className={`md:text-left text-center text-black white whitespace-no-wrap`}
            >
              {props.title}
            </h1>
            <p
              className={`my-6 text-black md:text-left text-center `}
            >
              {props.subTitle}
            </p>
            <div className={`flex md:justify-start justify-center space-x-4`}>
              <Button variant={'red'} link={props.link} content={'Découvrir'} />
            </div>
          </div>
        </div>

        <div className={clsx('h-full md:flex md:items-end', imageClassName)}>
          <div
            className={clsx(
              'md:absolute relative md:bottom-0 md:h-full md:mt-0 mt-16',
              props.imageHeight,
              props.imageWidth,
              props.imageClassName
            )}
          >
            <Image
              src={props.imageSrc}
              layout={'fill'}
              alt={''}
              className={clsx(`object-cover`, props.imageObjectPosition)}
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
