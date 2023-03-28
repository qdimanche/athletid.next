import React from 'react'
import Button from '@/src/components/UI/Button/Button'
import Tag from '@/src/components/UI/Tag'
import Image from 'next/image'
import CaptorReverseMobile from '@/public/assets/images/captor-reverse-mobile.webp'
import CaptorReverseLarge from '@/public/assets/images/captor-reverse-large.webp'
import {useIsFromTablet, useIsMobile} from "@/src/components/Hooks/useMediaQuery";

const HeaderApco = () => {

    const isMobile = useIsMobile();
    const isFromTablet = useIsFromTablet();

    return (
        <div className={'relative'}>
            <div
                className={
                    'absolute w-full transform left-1/2 -translate-x-1/2 mx-auto'
                }
            >
                <div className={'h-[1350px] relative '}>
                    <Image
                        layout={'fill'}
                        src={isFromTablet ? CaptorReverseMobile : CaptorReverseLarge}
                        className={'object-cover object-top md:object-center w-full '}
                        alt={''}
                    />
                </div>
            </div>
            <div className={'h-[900px] md:h-[800px] lg:h-[1000px] w-screen mx-auto relative'}>
                <div
                    className={
                        'pt-[150px] px-4 max-w-[350px] md:max-w-[1280px] mx-auto w-full absolute flex flex-col items-center px-8 z-[50] transform -translate-x-1/2 left-1/2'
                    }
                >
                    <Tag text={'Soon available'} variant={'black'}/>
                    <h1
                        className={`text-center text-black white whitespace-pre-wrap mt-3 mb-6`}
                    >
                        The futur of fitness <br/>
                        and wellness
                    </h1>
                    <div className={`flex md:justify-start justify-center space-x-4 `}>
                        <Button
                            className={'text-[16px]'}
                            variant={'red'}
                            link={'/'}
                            content={'Join the waiting list'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderApco