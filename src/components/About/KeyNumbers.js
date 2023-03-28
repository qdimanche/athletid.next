import React from 'react'
import Image from 'next/image'
import clsx from "clsx";

const KeyNumbers = () => {
    return (
        <div
            className={
                'max-w-[350px] md:max-w-[1050px] md:max-w-full mx-auto mt-[92px] md:mt-[126px] md:grid md:grid-cols-3 md:justify-between md:gap-[72px] '
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
                className={"border-none"}
            />
        </div>
    )
}

export default KeyNumbers

function Number(props) {
    return (
        <div className={clsx("flex flex-col space-y-6 py-8 border-b border-black/6 md:border-none", props.className)}>
            <div className={'flex flex-col space-y-2'}>
                <span className={'font-[400] xl:text-[72px] xl:leading-[81px]'}>{props.number}</span>
                <p className={''}>{props.text}</p>
            </div>
        </div>
    )
}