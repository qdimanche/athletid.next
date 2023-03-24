import React from 'react'
import Image from 'next/image'

const KeyNumbers = () => {
    return (
        <div
            className={
                'mx-auto mt-[92px] md:mt-[120px] md:flex md:justify-between md:space-x-8 md:border md:border-black/2 md:px-8 md:rounded-[20px]'
            }
        >
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
    )
}

export default KeyNumbers

function Number(props) {
    return (
        <div className="flex justify-center space-x-6 py-8 border-b border-black/6 md:border-none">
            <Image src={props.src} height={30} width={props.width} alt={''}/>
            <div className={'flex flex-col space-y-2'}>
                <p className={'text-sm'}>{props.text}</p>
                <span className={'text-4xl md:text-3xl'}>{props.number}</span>
            </div>
        </div>
    )
}