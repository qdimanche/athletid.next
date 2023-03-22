import React from 'react';
import Image from "next/image";
import CaptorReverse from "@/public/assets/images/captor-reverse-mobile.webp";
import CaptorReverseDesktop from "@/public/assets/images/captor-reverse-desktop.webp";
import useMediaQuery from "@/src/components/Hooks/useMediaQuery";

const BackgroundHeader = () => {

    const isMobile = useMediaQuery("(max-width:768px)");
    const isTabletAndDesktop = useMediaQuery("(min-width:768px)")

    return (
        <div className={'absolute w-full transform left-1/2 -translate-x-1/2'}>
            <div className={'h-[1300px] relative '}>
                <Image
                    layout={'fill'}
                    src={isMobile ? CaptorReverse : isTabletAndDesktop ? CaptorReverseDesktop : ''}
                    className={'object-cover absolute w-full '}
                    alt={''}
                />
            </div>
        </div>
    );
};

export default BackgroundHeader;