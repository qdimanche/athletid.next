import React from 'react'
import Value from '@/src/components/About/OurValues/Value'

const OurValues = () => {
  return (
    <div
      className={
        'flex flex-col lg:mb-40 mb-28 grid md:grid-cols-[2fr_3fr] gap-4 md:mx-8'
      }
    >
      <h2
        className={
          'lg:mb-[20px] mb-12 !whitespace-normal !font-semibold md:text-left text-center'
        }
      >
        Nos valeurs
      </h2>
      <div className={'flex flex-col space-y-16'}>
        <Value name={'Passion'} icon={'🫶'} />
        <Value name={'Expérience'} icon={'🤩'} />
        <Value name={'Engagement'} icon={'🤝'} />
        <Value name={'Innovation'} icon={'🦾'} />
        <Value name={'Proximité'} icon={'👥'} />
      </div>
    </div>
  )
}

export default OurValues
