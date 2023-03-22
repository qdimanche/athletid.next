import React from 'react'
import Image from 'next/image'
import { useIntl } from 'react-intl'
import Tag from '@/src/components/UI/Tag'
import useMediaQuery from '@/src/components/Hooks/useMediaQuery'
import Button from '@/src/components/UI/Button'
import { FaApple } from 'react-icons/fa'
import { TiVendorAndroid } from 'react-icons/ti'

const Header = ({ imageClassName, ...props }) => {
  const intl = useIntl()
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <header
      className={`header-height relative flex justify-center lg:justify-start bg-greyShade`}
    >
      <div
        style={{ whiteSpace: 'pre-line' }}
        className={
          'lg:mt-0 lg:mt-3 flex md:grid md:grid-cols-2 flex-col  z-[3] lg:p-0 items-center w-screen max-w-[1280px] mx-auto'
        }
      >
        <div
          className={
            'pt-28  md:py-16  md:flex md:flex-col md:justify-center px-8 md:pl-12'
          }
        >
          <div
            className={
              'space-y-6 flex flex-col items-center md:items-start z-[900]'
            }
          >
            <Tag variant={'black'} text={'Available'} />
            <h1
              className={`md:text-left text-center text-black white whitespace-pre-line`}
            >
              {props.title}
            </h1>
            <p className={`text-black md:text-left text-center md:block hidden`}>
              {props.subTitle}
            </p>
            <div className={`flex space-x-4 whitespace-nowrap`}>
              <Button
                variant={'black'}
                link={''}
                content={
                  <div className={'flex space-x-2 items-center'}>
                    <FaApple color={'black'} size={20} />
                    <div>App Store</div>
                  </div>
                }
              />
              <Button
                variant={'black'}
                link={''}
                content={
                  <div className={'flex space-x-2 items-center'}>
                    <TiVendorAndroid color={'black'} size={22} />
                    <div>Play Store</div>
                  </div>
                }
              />
            </div>
          </div>
        </div>

        <div
          className={
            'h-[500px] md:h-full w-screen md:w-[480px] lg:w-[650px] xl:w-[800px] 2xl:w-[1000px] md:absolute md:right-0 relative'
          }
        >
            <Image
              src={props.imageSrc}
              layout={'fill'}
              className={'object-cover object-left'}
              alt={''}
            />
        </div>
      </div>
    </header>
  )
}

export default Header
