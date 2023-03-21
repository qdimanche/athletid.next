import React from 'react'
import Image from 'next/image'
import IphoneFullHeightMobile from '@/public/assets/images/iphone-full-height-timer.webp'
import IphoneFullHeight from '@/public/assets/images/iphone-full-height-timer-desktop.webp'
import useMediaQuery from "@/src/components/Hooks/useMediaQuery";
import Button from "@/src/components/UI/Button";
import {FaApple} from "react-icons/fa";
import {TiVendorAndroid} from "react-icons/ti";

const FullHeightBgImage = (props) => {

    const isMobile = useMediaQuery('(max-width: 768px)')
    return (
        <div className={'lg:mb-40 mb-28'}>
            <div
                className={
                    'flex flex-col items-center px-8 mx-auto mb-20 text-center'
                }
            >
                <p className={'text-sm mb-4 text-black/20'}>{props.subTitle}</p>
                <h2 style={{whiteSpace: 'pre-line'}}>{props.title}</h2>
            </div>

            <div className={'h-[820px] md:h-[535px] relative md:rounded-medium md:overflow-hidden'}>
                <div className={'absolute top-8 md:top-0  z-[5] flex flex-col items-center md:items-center md:justify-center w-full px-8 md:h-full md:grid md:grid-cols-2'}>
                    <div></div>
                    <div className={'space-y-6 px-8 md:pl-12 md:pr-0'}>
                        <h3
                            className={`md:text-left text-center text-white whitespace-pre-line`}
                        >
                            You too can reach<br/>
                            your sports goals!
                        </h3>
                        <div className={`flex space-x-4`}>
                            <Button
                                variant={'white'}
                                link={''}
                                content={
                                    <div className={'flex space-x-2 items-center'}>
                                        <FaApple color={'white'} size={20}/>
                                        <div>App Store</div>
                                    </div>
                                }
                            />
                            <Button
                                variant={'white'}
                                link={''}
                                content={
                                    <div className={'flex space-x-2 items-center'}>
                                        <TiVendorAndroid color={'white'} size={22}/>
                                        <div>Play Store</div>
                                    </div>
                                }
                            />
                        </div>
                    </div>
                </div>
                <Image
                    layout={'fill'}
                    src={isMobile ? IphoneFullHeightMobile : IphoneFullHeight}
                    className={'object-cover object-center md:object-left'}
                    alt={''}
                />
            </div>
        </div>
    )
}

export default FullHeightBgImage;