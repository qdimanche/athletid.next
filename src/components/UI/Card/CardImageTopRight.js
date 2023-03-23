import React from 'react'
import Image from 'next/image'
import TimerDashboardBottom from '@/public/assets/images/timer-athletid-dashboard-bottom.webp'

const CardImageTopRight = () => {
    return (
        <div
            className={
                'rounded-medium overflow-hidden bg-greyShade  flex flex-col h-[500px] p-4 md:p-8 md:pr-0 md:pt-0 pr-0 pt-0 relative'
            }
        >
            <Image
                className={'absolute top-0 right-0'}
                src={TimerDashboardBottom}
                height={310}
                width={310}
                alt={''}
            />
            <div className={'flex md:flex-col absolute left-4 bottom-4'}>
                <div className={'space-y-4 flex flex-col md:justify-between '}>
                    <div className={'flex flex-col items-center'}>
                        <span className={'md:text-left font-medium w-full lg:text-[30px] lg:leading-[34px]'}>Adapting.</span>
                        <span className={'md:text-left text-black/[16%] w-full lg:text-[30px] lg:leading-[34px]'}>
                            The app that<br/>
                            all the sports<br/>
                            timers.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardImageTopRight;