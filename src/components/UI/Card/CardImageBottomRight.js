import React from 'react'
import Tag from '@/src/components/UI/Tag'
import Button from '@/src/components/UI/Button/Button'
import Image from 'next/image'
import TimerDashboard from '@/public/assets/images/homeTimer.webp'

const CardImageBottomRight = () => {
    return (
        <div
            className={
                'rounded-medium overflow-hidden bg-greyShade  flex flex-col justify-between lg:flex-row  relative  h-[500px] md:h-[400px] p-4 md:pb-0 lg:pb-8'
            }
        >
            <div className={'flex md:items-start md:flex-col md:justify-between'}>
                <div className={'flex flex-col md:justify-between justify-center'}>
                    <div className={' md:mb-4 flex flex-col lg:w-full'}>
                        <Tag text={'Available'} variant={'black'}/>
                        <span className={'font-medium whitespace-no-wrap mt-4 mb-2  md:text-4xl xl:text-[44px]'}>Timer by Athletid</span>
                        <span className={'font-medium text-black/20 whitespace-no-wrap md:text-4xl xl:text-[44px]'}>Train with a free mind.</span>
                    </div>
                </div>
                <div>
                    <Button
                        className={'absolute  bottom-4 md:left-4 md:right-0 right-4'}
                        text={'Lorem'}
                        variant={'red'}
                        link={'/timer'}
                        content={"Discover"}
                    />
                </div>
            </div>
            <div
                className={
                    'lg:justify-end  md:justify-start justify-center h-full  md:h-[400px] md:max-w-full w-full lg:w-[300px] lg:h-[220px]  relative mx-auto lg:absolute lg:bottom-0 lg:right-8 transform -translate-x-8 md:-translate-x-4'
                }
            >
                <Image
                    className={
                        'md:px-0  object-cover object-top md:object-right-top'
                    }
                    src={TimerDashboard}
                    alt={''}
                />
            </div>
        </div>
    )
}

export default CardImageBottomRight;