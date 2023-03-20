import React from 'react'
import Image from 'next/image'
import IphoneFullHeight from '@/public/assets/images/iphone-full-height-timer.webp'
import Tag from '@/src/components/UI/Tag'

const FullHeightBgImage = (props) => {
    return (
        <div className={'lg:mb-40 mb-28'}>
            <div
                className={
                    'flex flex-col items-center px-8 mx-auto mb-24 text-center'
                }
            >
                <p className={'text-sm mb-4 text-black/20'}>{props.subTitle}</p>
                <h2 style={{whiteSpace: 'pre-line'}}>{props.title}</h2>
            </div>

            <div className={'h-[820px] relative'}>
                <div className={'absolute top-4 z-[5] flex flex-col items-center w-full px-8'}>
                    <div className={'space-y-6  p-8'}>
                        <h2
                            className={`md:text-left text-center text-white whitespace-pre-line`}
                        >
                            Toi aussi atteint
                            <br/>
                            objectifs sportifs
                        </h2>
                        <div className={`flex space-x-4`}>{props.buttons}</div>
                    </div>
                </div>
                <Image
                    layout={'fill'}
                    src={IphoneFullHeight}
                    className={'object-cover object-center'}
                    alt={''}
                />
            </div>
        </div>
    )
}

export default FullHeightBgImage;