import React from 'react'
import Image from 'next/image'
import DownloadApp from '@/src/components/LandingTimer/DownloadApp'
import { useIsMobile } from '@/src/components/Hooks/useMediaQuery'
import Ratings from '@/src/components/LandingTimer/Ratings'

const Header = (props) => {
  const isMobile = useIsMobile()

  return (
    <div className={'flex flex-col mt-[120px] '}>
      <div className={'max-w-[1170px] w-full mx-auto relative'}>
        {/*        <QrCode />*/}
      </div>
      <div
        className={
          'relative h-[270px] md:h-[620px] w-screen  md:order-last md:mt-[100px]'
        }
      >
        <Image src={props.img} fill className={'object-cover'} alt={''} />
      </div>
      <div
        className={
          'flex flex-col md:space-y-[24px] items-center text-center mt-[42px] md:order-1 '
        }
      >
        <Image
          src={'/assets/icons/logo-timer.svg'}
          className={'!mb-[12px]'}
          width={56}
          height={56}
          alt={'Logo timer'}
        />
        <div>Timer by Athletid</div>
        {props.title}
      </div>
      <DownloadApp className={'md:order-2'} title={props.downloadAppTitle} />
      <Ratings className={'order-3'} />
    </div>
  )
}

export default Header
