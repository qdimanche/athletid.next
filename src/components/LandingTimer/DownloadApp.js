import React from 'react'
import Image from 'next/image'
import { BsStarFill } from 'react-icons/bs'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import TimerUser1 from '@/public/assets/images/timer-user-1.png'
import Link from 'next/link'

const DownloadApp = (props) => {
  return (
    <div className={'mt-[25px]'}>
      <div className={'flex flex-col space-y-[24px] items-center text-center'}>
        {props.title}
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
  )
}

export default DownloadApp
