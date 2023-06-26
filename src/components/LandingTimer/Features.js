import React from 'react'
import Image from 'next/image'
import Athlet from '@/public/assets/images/athlet.webp'

const Features = () => {
  return (
    <div className={'mt-[85px] flex flex-col space-y-[32px] items-center text-center'}>
      <h2>
        Designed
        <div className={'flex justify-between'}>
          by <div className={'font-semibold text-timeRed mx-2'}>athletes</div>
        </div>{' '}
        <div className={'flex justify-between'}>
          for <div className={'font-semibold text-timeRed mx-2'}>athletes</div>
        </div>
      </h2>
      <div
        className={'h-[240px] w-full relative rounded-small overflow-hidden'}
      >
        <Image src={Athlet} fill className={'object-cover'} alt={'Athlet'} />
      </div>
    </div>
  )
}

export default Features
