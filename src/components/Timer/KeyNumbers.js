import React from 'react'
import Image from 'next/image'

const KeyNumbers = () => {
  return (
    <div>
      <div className={'max-w-[300px] mx-auto lg:my-40 my-28'}>
        <Number
          src={'/assets/icons/arrowleftright.svg'}
          text={'Lorem ipsum'}
          width={30}
          number={'7,520,568'}
        />{' '}
        <Number
          src={'/assets/icons/download.svg'}
          text={'Lorem ipsum'}
          width={20}
          number={'7,520,568'}
        />{' '}
        <Number
          src={'/assets/icons/messages.svg'}
          text={'Lorem ipsum'}
          width={30}
          number={'7,520,568'}
        />
      </div>
    </div>
  )
}

export default KeyNumbers

function Number(props) {
  return (
    <div className="flex justify-center space-x-8 py-8 border-b border-black/6">
      <Image src={props.src} height={30} width={props.width} alt={''} />
      <div className={'flex flex-col space-y-2'}>
        <p className={'text-sm'}>{props.text}</p>
        <span className={'text-4xl'}>{props.number}</span>
      </div>
    </div>
  )
}