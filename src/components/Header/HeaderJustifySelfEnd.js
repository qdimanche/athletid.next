import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { useIntl } from 'react-intl'
import Button from '@/src/components/UI/Button'

const HeaderJustifySelfEnd = (props) => {
  const intl = useIntl()

  return (
    <header
      className={`lg:h-[95vh] md:h-[80vh] min-h-[60vh] relative  overflow-hidden flex rounded-[30px] justify-center md:justify-start rounded-header-mobile-tablet safari-overflow-fix mt-4 bg-[#F5F4F5]`}
    >
      <div
        style={{ whiteSpace: 'pre-line' }}
        className={
          'lg:mt-0 md:mt-3 flex flex-col justify-center  z-[3] md:p-0 px-8 md:grid lg:grid-cols-[2fr_2fr] items-center'
        }
      >
        <div
          className={
            '2xl:ml-28 lg:ml-20 md:ml-12 flex flex-col lg:items-start items-center lg:pt-0 pt-16'
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
          <div
            className={`flex md:justify-start justify-center space-x-4 ${props.visibilityButton}`}
          >
            <Button variant={'red'} link={props.link} text={'Découvrir'} />
          </div>
        </div>
        <div className={'mx-auto lg:flex flex self-end'}>
          <Image
            src={props.imageSrc}
            width={props.imageWidth}
            className={`pointer-events-none lg:block`}
          />
        </div>
      </div>
      <div
        className={
          'absolute bottom-[2.5rem] right-[2.5rem]  space-y-6 z-[900] text-[1.3em] md:flex flex-col hidden'
        }
      >
        <a
          target={'_blank'}
          href="https://www.instagram.com/athletid/"
          rel="noreferrer"
        >
          <FaInstagram size={18} color={'black'} />
        </a>
        <a
          target={'_blank'}
          href="https://www.linkedin.com/company/athletid/"
          rel="noreferrer"
        >
          <FaFacebook size={18} color={'black'} />
        </a>
        <a
          target={'_blank'}
          href="https://www.facebook.com/TimerByAthletid"
          rel="noreferrer"
        >
          <FaLinkedin size={18} color={'black'} />
        </a>
      </div>
    </header>
  )
}


export default HeaderJustifySelfEnd;
