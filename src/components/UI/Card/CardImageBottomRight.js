import React from 'react'
import Tag from '@/src/components/UI/Tag'
import Button from '@/src/components/UI/Button/Button'
import Image from 'next/image'
import TimerDashboard from '@/public/assets/images/homeTimer.webp'

const CardImageBottomRight = () => {
    return (
        <div
            className={
                'rounded-medium overflow-hidden bg-greyShade  flex flex-col justify-between lg:flex-row  relative  h-[500px] p-4 pb-0 md:p-8 md:pb-0 lg:pb-8'
            }
        >
            <div className={'flex md:items-start md:flex-col md:justify-between '}>
                <div className={'flex flex-col md:justify-between justify-center'}>
                    <div className={' md:mb-4 flex flex-col lg:w-full'}>
                        <Tag text={'Available'} variant={'black'}/>
                        <h3 className={'font-medium whitespace-no-wrap mt-4  md:text-4xl lg:text-5xl'}>Timer by Athletid</h3>
                        <h3 className={'font-medium text-black/20 whitespace-no-wrap md:text-4xl lg:text-5xl'}>Train with a free mind.</h3>
                    </div>
                </div>
                <div>
                    <Button
                        className={'md:static absolute md:bottom-0 bottom-8 md:right-0 right-8'}
                        text={'Lorem'}
                        variant={'red'}
                        link={'/timer'}
                        content={"Discover"}
                    />
                </div>
            </div>
            <div
                className={
                    'lg:justify-end  md:justify-start justify-center lg:mt-0 mt-8  h-full lg:h-full md:h-[300px] md:max-w-full max-w-[350px] w-full lg:w-[270px]  relative mx-auto lg:absolute lg:bottom-0 lg:right-8'
                }
            >
                <Image
                    className={
                        'md:px-0 lg:object-contain object-cover object-top lg:object-bottom'
                    }
                    src={TimerDashboard}
                    layout={'fill'}
                    alt={''}
                />
            </div>
        </div>
    )
}

export default CardImageBottomRight;