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
                src={'/assets/icons/arrow-up.svg'}
                text={'Beta Users.'}
                width={30}
                number={'2k'}
            />{' '}
            <Number
                src={'/assets/icons/messages.svg'}
                text={'Collaborative Professionals.'}
                width={20}
                number={'+500'}
            />{' '}
            <Number
                src={'/assets/icons/flash.svg'}
                text={'New Users/week.'}
                width={30}
                number={'+800'}
            />
        </div>
    )
}

export default KeyNumbers

function Number(props) {
    return (
        <div className="flex justify-center space-x-6 py-8 border-b border-black/6 md:border-none">
            <Image className={'w-auto'} src={props.src} height={30} width={props.width} alt={''}/>
            <div className={'flex flex-col space-y-2'}>
                <p className={'text-sm'}>{props.text}</p>
                <span className={'text-4xl md:text-3xl'}>{props.number}</span>
            </div>
        </div>
    )
}