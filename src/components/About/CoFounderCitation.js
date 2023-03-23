import React from 'react'
import Image from 'next/image'
import AthletidFounders from '@/public/assets/images/fondateurs-athletid.webp'

const CoFounderCitation = () => {
  return (
    <div className={'lg:mt-40 mt-28'}>
      <div className={'flex flex-col space-y-10'}>
        <span className={'text-4xl'}>
          &quot;Athletid was created to increase the regularity and athletic
          commitment of fitness, yoga and related sports enthusiasts, so they
          can get the full benefits of the sport.&quot;
        </span>
        <div className={'flex space-x-6'}>
          <Image
            src={AthletidFounders}
            height={50}
            width={50}
            alt={''}
            className={'rounded-full '}
          />
          <div>
            <p className={'font-bold'}>Jimmy & Julien</p>
            <p>Co-Founders</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoFounderCitation
