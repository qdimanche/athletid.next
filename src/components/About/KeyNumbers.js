import React from 'react'
import Image from 'next/image'

const KeyNumbers = () => {
    return (
        <div
            className={
                'max-w-[400px] md:max-w-full mx-auto lg:my-32 my-20 md:flex md:justify-between md:space-x-8 md:border md:border-black/2 md:px-8 md:rounded-[20px]'
            }
        >
            <Number
                src={'/assets/icons/arrowleftright.svg'}
                text={'The first objective of our project is to help more than ten million athletes create a solid routine through our innovative solutions.'}
                width={30}
                number={'10M+'}
            />{' '}
            <Number
                src={'/assets/icons/download.svg'}
                text={'Create the first universe dedicated to fitness and yoga which are today abandoned of all solutions to facilitate their practice.'}
                width={20}
                number={'1st'}
            />{' '}
            <Number
                src={'/assets/icons/messages.svg'}
                text={'The number of exercises that our intelligent recognition system will be able to recognize.'}
                width={30}
                number={'2k+'}
            />
        </div>
    )
}

export default KeyNumbers

function Number(props) {
    return (
        <div className="flex flex-col space-y-6 py-8 border-b border-black/6 md:border-none">
            <div className={'flex flex-col space-y-2'}>
                <span className={'text-4xl md:text-3xl'}>{props.number}</span>
                <p className={'text-sm'}>{props.text}</p>
            </div>
        </div>
    )
}