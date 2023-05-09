import React from 'react'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

const KeyNumbers =  () => {
  const { t } = useTranslation('timer')
  const keyNumbers = t('timer:keyNumbers', { returnObjects: true })

  return (
    <div
      className={
        'mx-auto mt-[92px] md:mt-[120px] md:flex md:justify-between md:space-x-8 md:border md:border-black/2 md:px-8 md:rounded-[20px]'
      }
    >
      {keyNumbers.map((value, index) => {
        return (
          <Number
            key={index}
            src={value.src}
            text={value.text}
            width={value.width}
            number={value.number}
          />
        )
      })}
    </div>
  )
}

export default KeyNumbers

function Number(props) {
  return (
    <div className="flex justify-center space-x-6 py-8 border-b border-black/6 md:border-none">
      <Image
        className={'w-auto'}
        src={props.src}
        height={30}
        width={props.width}
        alt={''}
      />
      <div className={'flex flex-col space-y-2'}>
        <p className={'text-sm whitespace-pre-line'}>{props.text}</p>
        <span className={'text-4xl md:text-3xl'}>{props.number}</span>
      </div>
    </div>
  )
}
