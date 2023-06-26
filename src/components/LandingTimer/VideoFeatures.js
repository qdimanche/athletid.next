import React from 'react'
import Image from 'next/image'
import Athlet from '@/public/assets/images/athlet.webp'

const Features = () => {
  return (
    <div className={'mt-[70px] flex flex-col space-y-[32px] text-center'}>
      <h2>
        Our timers adapt to
        <div className={'font-semibold text-timeRed mx-2'}>your objective.</div>
      </h2>
      <div
        className={'h-[700px] w-full relative rounded-small overflow-hidden'}
      >
        <Image src={Athlet} fill className={'object-cover'} alt={'Athlet'} />
      </div>
    </div>
  )
}

export default Features
