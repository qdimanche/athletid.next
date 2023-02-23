import React from 'react'
import TimerDashboard from '@/public/assets/images/timer-athletid-dashboard.webp'
import TimerDashboardBottom from '@/public/assets/images/timer-athletid-dashboard-bottom.webp'
import TimerDashboardDiagonal from '@/public/assets/images/timer-athletid-dashboard-diagonal.webp'
import Image from 'next/image'
import Button from '@/src/components/UI/Button'
import Tag from '@/src/components/UI/Tag'
import useMediaQuery from '@/src/components/Hooks/useMediaQuery'

const GridLayout = () => {
    return (
        <div className={'md:my-40 mt-28'}>
            <div
                className={
                    'flex flex-col items-center md:w-1/2 md:w-3/4 mx-auto md:mb-8 mb-8 text-center'
                }
            >
                <h2 style={{whiteSpace: 'pre-line'}}>Lorem ipsum dolor sit amet.</h2>
                <p className={'w-full mt-[10px]'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt,
                    tenetur!
                </p>
            </div>

            <div
                className={
                    ' relative overflow-hidden grid lg:grid-cols-[2fr_1fr_1fr] md:grid-cols-3 gap-4'
                }
            >
                <FirstCard/>
                <SecondCard/>
                <ThirdCard/>
            </div>
        </div>
    )
}

export default GridLayout


function FirstCard() {

    const isMobile = useMediaQuery('(max-width: 768px)')

    return (
        <div
            className={
                'rounded-medium overflow-hidden bg-greyShade  flex flex-col lg:flex-row  relative'
            }
        >
            <div
                className={
                    'px-4 pt-4 pb-8 flex md:items-start md:flex-col md:justify-between  lg:p-8'
                }
            >
                <div className={'flex flex-col md:justify-between justify-center'}>
                    <div className={'space-y-4 md:mb-4 flex flex-col lg:w-2/3'}>
                        <Tag text={'Lorem'} variant={'black'}/>
                        <h2>
                            Lorem ipsum dolor sit amet.
                        </h2>
                    </div>
                </div>
                <div>
                    <Button
                        className={'md:static absolute bottom-8 right-8'}
                        text={'Lorem'}
                        variant={'red'}
                        link={'/timer'}
                    />
                </div>
            </div>
            <div
                className={
                    'flex lg:justify-end md:justify-start justify-center lg:items-end lg:mr-8 lg:ml-0 md:mx-4'
                }
            >

                <Image
                    className={'drop-shadow-custom md:px-0 px-4 -mt-16 translate-y-16 lg:-mt-8 lg:translate-y-8 lg:absolute'}
                    src={TimerDashboard}
                    width={isMobile ? 330 : 250}
                    alt={''}/>
            </div>
        </div>
    )
}

function SecondCard() {

    return (
        <div
            className={
                'rounded-medium overflow-hidden bg-greyShade  flex flex-col'
            }
        >
            <div
                className={'lg:-mb-12 lg:-translate-y-12 -mb-16 -translate-y-16 flex justify-end'}>
                <Image className={'drop-shadow-custom lg:pl-8 pl-8'} src={TimerDashboardBottom}
                       width={330} alt={''}/>
            </div>
            <div
                className={
                    'lg:p-8 p-4 lg:pt-8 flex md:flex-col lg:py-8'
                }
            >
                <div className={'space-y-4 flex flex-col md:justify-between '}>
                    <div className={' md:mb-4 flex flex-col items-center'}>
                        <h3 className={'md:text-left'}>
                            Lorem ipsum dolor sit amet.
                        </h3>
                        <h3 className={'md:text-left text-black/[16%]'}>
                            Lorem ipsum dolor sit amet.
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ThirdCard() {

    const isMobile = useMediaQuery('(max-width: 768px)')

    return (
        <div
            className={
                'rounded-medium overflow-hidden bg-greyShade  flex flex-col justify-between'
            }
        >
            <div
                className={
                    'lg:p-8 p-4 lg:pt-8 flex md:flex-col lg:py-8'
                }
            >
                <div className={'space-y-4 flex flex-col md:justify-between '}>
                    <div className={' md:mb-4 flex flex-col items-center'}>
                        <h3 className={'md:text-left'}>
                            Lorem ipsum dolor sit amet.
                        </h3>
                        <h3 className={'md:text-left text-black/[16%]'}>
                            Lorem ipsum dolor sit amet.
                        </h3>
                    </div>
                </div>
            </div>
            <div
                className={'flex justify-end'}>
                <Image className={'drop-shadow-custom lg:pl-8 pl-8'} src={TimerDashboardDiagonal}
                       width={330} alt={''}/>
            </div>
        </div>
    )
}