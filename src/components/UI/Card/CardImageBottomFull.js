import React from 'react';
import Image from "next/image";
import TimerDashboardDiagonal from "@/public/assets/images/timer-athletid-dashboard-diagonal.webp";

const CardImageBottomFull = () => {
    return (
        <div
            className={
                'rounded-medium overflow-hidden bg-greyShade  flex flex-col lg:justify-between h-[500px] p-4 md:p-8 md:pr-0 md:pb-0 pr-0 md:pb-0 pb-0'
            }
        >
            <div
                className={
                    'flex md:flex-col'
                }
            >
                <div className={'space-y-4 flex flex-col md:justify-between '}>
                    <div className={' md:mb-4 flex flex-col items-center'}>
                        <span className={'md:text-left font-medium w-full lg:text-[30px] lg:leading-[34px]' }>
                            Simple & intuitive.
                        </span>
                        <span className={'md:text-left text-black/[16%] w-full lg:text-[30px] lg:leading-[34px]'}>
                            A pure design.
                        </span>
                    </div>
                </div>
            </div>
            <div className={'w-full flex justify-end md:h-[310px] h-full lg:mt-0 mt-4'}>
                <div
                    className={'h-full md:h-full max-w-[350px] w-full relative'}>
                    <Image
                        className={'object-cover object-left-top md:object-left-top'}
                        src={TimerDashboardDiagonal}
                        layout={'fill'}
                        alt={''}/>
                </div>
            </div>
        </div>
    );
};

export default CardImageBottomFull;