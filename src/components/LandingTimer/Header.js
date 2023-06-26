import React from 'react'
import Image from 'next/image'
import TempoCardio from '@/public/assets/images/tempo-timer-header.webp'

const Header = () => {
  return (
    <div>
      <div className={'relative h-[270px] w-screen mt-[120px]'}>
        <Image src={TempoCardio} fill className={'object-cover'} alt={''} />
      </div>
      <div
        className={
          'flex flex-col space-y-[24px] items-center text-center mt-[42px]'
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
        <h1 className={'my-[24px]'}>
            <div className={'flex'}>
                The <div className={'text-timeRed font-semibold mx-2'}>best</div> sport
            </div>
          timer app
        </h1>
      </div>
    </div>
  )
}

export default Header
