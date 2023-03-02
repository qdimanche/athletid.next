import React from 'react'
import Image from 'next/image'
import ConstuctionEntrainement from "@/public/assets/images/construction-seance.webp"

const Feature = () => {
    return (
        <div className={'md:my-40 mt-28 md:w-[80%] md:mx-auto md:grid md:grid-cols-[1fr_340px] md:items-center'}>
            <div className={'flex flex-col md:mb-8 text-left space-y-8 md:w-3/4 md:mx-auto'}>
                <h2 style={{whiteSpace: 'pre-line'}}>Lorem ipsum dolor sit amet.</h2>
                <p className={'w-full mt-[10px]'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt,
                    tenetur!
                </p>
                <div className={'flex flex-col'}>
                    <p className={'font-medium text-2xl mb-4'}>Lorem ipsum</p>
                    <div className={'flex py-4 space-x-6 items-center border-t border-black/12'}>
                        <div className={'h-[10px] w-[10px] bg-timeRed rounded-full'}></div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>                    <div className={'flex py-4 space-x-6 items-center border-t border-black/12'}>
                        <div className={'h-[10px] w-[10px] bg-timeRed rounded-full'}></div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>                    <div className={'flex py-4 space-x-6 items-center border-t border-black/12'}>
                        <div className={'h-[10px] w-[10px] bg-timeRed rounded-full'}></div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <Image
                src={ConstuctionEntrainement}
                width={340}
                className={'mx-auto rounded-medium'}
                alt="Application Apco Dashboard Full"
            />
        </div>
    )
}

export default Feature;