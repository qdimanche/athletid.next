import React from 'react'
import Image from 'next/image'
import { BsStarFill } from 'react-icons/bs'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import TimerUser1 from '@/public/assets/images/timer-user-1.png'
import Link from 'next/link'
import clsx from "clsx";
import {useIsMobile} from "@/src/components/Hooks/useMediaQuery";

const DownloadApp = (props) => {
    const isMobile = useIsMobile();
    
  return (
    <div className={clsx('md:mt-[25px] max-w-[370px] md:max-w-FUll mx-auto', props.className)}>
      <div
        className={
          'flex flex-col space-y-[24px]  items-center text-center'
        }
      >
        <div className={''}>{props.title}</div>
          <div className={'md:flex md:flex-row md:space-x-[24px] space-y-[24px] md:space-y-0'}>
              <Image
                  src={'/assets/icons/download-appstore.svg'}
                  width={168}
                  height={50}
                  alt={'Download on App Store'}
              />
              <Image
                  src={'/assets/icons/download-googleplay.svg'}
                  width={168}
                  height={50}
                  alt={'Download on Google Play'}
              />
          </div>
      </div>
    </div>
  )
}

export default DownloadApp
