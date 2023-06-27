import React from 'react'
import Newsletter from '@/src/components/Footer/Newsletter'
import Image from 'next/image'
import AppScreen from '@/public/assets/images/timer-v2-header-desktop.webp'
import { useIsMobile } from '@/src/components/Hooks/useMediaQuery'

const FooterLanding = () => {
  const isMobile = useIsMobile()
  return (
    <footer
      id={'footer'}
      className={
        'mt-[92px] md:mt-[120px] bg-greyShade text-white  w-full relative h-[600px] md:h-[450px] lg:h-[780px]'
      }
    >
      <div
        className={
          'px-4 max-w-[350px] md:max-w-[1170px] h-full w-full mx-auto relative'
        }
      >
        <div
          className={
            'flex flex-col md:items-start md:justify-center items-center md:text-left text-center  md:mb-0 !text-black  absolute transform md:-translate-y-1/2 md:top-1/2 top-[88px]'
          }
        >
          <h2 className={'whitespace-pre-line'}>Stay informed</h2>
          {isMobile ? (
            <p className={'mt-4 mb-6'}>
              Subscribe to our newsletter and keep up to date with all the
              latest news straight to your inbox.
            </p>
          ) : (
            <p className={'mt-4 mb-6'}>
              Subscribe to our newsletter and keep up to date with all the
              <br /> latest news straight to your inbox.
            </p>
          )}
          <Newsletter variant={true} />
        </div>
      </div>

      <div
        className={
          'absolute md:right-0 transform top-0 bottom-0 right-0'
        }
      >
        <div
          className={
            'relative h-[260px] md:h-[450px] lg:h-[780px] w-[350px] md:w-[40vw] lg:w-[60vw] mx-auto'
          }
        >
          <Image
            src={AppScreen}
            fill
            className={
              'object-cover md:object-contain object-top md:object-right'
            }
            alt={'Timer by Athletid'}
          />
        </div>
      </div>

      <Image
        width={isMobile ? 84 : 115}
        height={isMobile ? 28 : 38}
        src={'/assets/icons/logo-athletid.svg'}
        className={'absolute transform -translate-x-1/2 left-1/2 bottom-[35px]'}
        alt={'Logo Athletid'}
      />
    </footer>
  )
}

export default FooterLanding
