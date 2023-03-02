import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { useIntl } from 'react-intl'
import Button from '@/src/components/UI/Button'
import clsx from 'clsx'

const Header = (props) => {
  const intl = useIntl()

  return (
    <header
      className={`header-height relative  overflow-hidden flex md:rounded-medium justify-center lg:justify-start bg-greyShade md:m-4 md:mt-4 mt-0`}
    >
      <div
        style={{ whiteSpace: 'pre-line' }}
        className={
          'lg:mt-0 lg:mt-3 flex md:flex-row flex-col  z-[3] lg:p-0 items-center max-w-[1280px] mx-auto'
        }
      >
        <div
          className={clsx(            'md:w-[45%] xl:w-[50%] pt-28 md:pt-28 md:pr-8 md:py-16 xl:p-0 p-8 w-screen md:flex md:flex-col md:justify-center', props.paragraphClassName)
          }
        >
          <h1
            className={`md:text-left text-center text-black white whitespace-pre-wrap`}
          >
            {props.title}
          </h1>
          <p
            className={`mt-[10px] mb-[20px] text-black md:text-left text-center `}
          >
            {props.subTitle}
          </p>
          <div className={`flex md:justify-start justify-center space-x-4`}>
            <Button variant={'red'} link={props.link} content={'Découvrir'} />
          </div>
        </div>
        <div className={'h-full md:flex md:items-end'}>
          <div
              className={clsx(
                  'md:absolute relative md:bottom-0',
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
        <a target={'_blank'} href={props.instaLink} rel="noreferrer">
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
