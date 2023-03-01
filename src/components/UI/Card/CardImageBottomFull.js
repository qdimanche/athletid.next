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
                        <h3 className={'md:text-left font-medium'}>
                            Lorem ipsum dolor sit amet.
                        </h3>
                        <h3 className={'md:text-left text-black/[16%]'}>
                            Lorem ipsum dolor sit amet.
                        </h3>
                    </div>
                </div>
            </div>
            <div className={'w-full flex justify-end md:h-[275px] h-full lg:mt-0 mt-4'}>
                <div
                    className={'h-full md:h-full md:max-w-full max-w-[350px] w-full relative'}>
                    <Image
                        className={'md:px-0 object-cover object-left-top md:object-left-top'}
                        src={TimerDashboardDiagonal}
                        layout={'fill'}
                        alt={''}/>
                </div>
            </div>
        </div>
    );
};

export default CardImageBottomFull;