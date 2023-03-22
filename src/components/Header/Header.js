import React from 'react'
import Image from 'next/image'
import CaptorReverse from '@/public/assets/images/captor-reverse-mobile.webp'
import CaptorReverseDesktop from '@/public/assets/images/captor-reverse-desktop.webp'
import Button from '@/src/components/UI/Button/Button'
import Tag from '@/src/components/UI/Tag'
import useMediaQuery from "@/src/components/Hooks/useMediaQuery";
import {use} from "i18next";

const Header = () => {

    const isMobile = useMediaQuery("(max-width:768px)");
    const isTabletAndDesktop = useMediaQuery("(min-width:768px)")

    return (
        <div className={'h-[900px] max-w-[1280px] mx-auto relative'}>
            <div
                className={
                    'pt-28 max-w-[1280px] w-full mx-auto absolute space-y-4 flex flex-col items-center px-8 z-[50]'
                }
            >
                <Tag text={'Soon available'} variant={'black'}/>
                <h1
                    className={`text-center text-black white whitespace-pre-wrap`}
                >
                    The futur of fitness <br/>and wellness
                </h1>
                <div className={`flex md:justify-start justify-center space-x-4`}>
                    <Button className={'text-[12px]'} variant={'red'} link={'/'} content={"Join the waiting list"}/>
                </div>
            </div>
        </div>
    )
}

export default Header