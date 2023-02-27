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
                'rounded-medium overflow-hidden bg-greyShade  flex flex-col justify-between lg:flex-row  relative  h-[450px] p-4 pb-0 md:p-8 lg:pb-8'
            }
        >
            <div
                className={
                    'flex md:items-start md:flex-col md:justify-between '
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
                    'lg:justify-end  md:justify-start justify-center lg:mt-0 mt-4  h-full lg:h-full md:h-[180px] md:max-w-full max-w-[300px] w-full max-w-[300px] lg:w-[250px]  relative mx-auto lg:absolute lg:bottom-0 lg:right-8'
                }
            >
                <Image
                    className={'drop-shadow-custom md:px-0 lg:object-contain object-cover object-top lg:object-bottom'}
                    src={TimerDashboard}
                    layout={'fill'}
                    alt={''}/>
            </div>
        </div>
    )
}

function SecondCard() {

    return (
        <div
            className={
                'rounded-medium overflow-hidden bg-greyShade  flex flex-col h-[450px] p-4 md:p-8 md:pr-0 md:pt-0 pr-0 pt-0'
            }
        >
            <div className={'w-full flex justify-end h-full md:h-[275px] mb-4 md:ml-8 ml-4'}>
                <div
                    className={'h-full md:h-full md:max-w-full max-w-[300px] lg:max-w-[500px] w-full relative'}>
                    <Image
                        className={'drop-shadow-custom md:px-0 object-cover object-left-bottom'}
                        src={TimerDashboardBottom}
                        layout={'fill'}
                        alt={''}/>
                </div>
            </div>
            <div
                className={
                    'flex md:flex-col'
                }
            >
                <div className={'space-y-4 flex flex-col md:justify-between '}>
                    <div className={'flex flex-col items-center'}>
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

    return (
        <div
            className={
                'rounded-medium overflow-hidden bg-greyShade  flex flex-col lg:justify-between h-[450px] p-4 md:p-8 md:pr-0 md:pb-0 pr-0 md:pb-0 pb-0'
            }
        >
            <div
                className={
                    'flex md:flex-col'
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
            <div className={'w-full flex justify-end md:h-[275px] h-full lg:mt-0 mt-4'}>
                <div
                    className={'h-full md:h-full md:max-w-full max-w-[350px] w-full relative'}>
                    <Image
                        className={'drop-shadow-custom md:px-0 object-cover object-left-top md:object-left-bottom'}
                        src={TimerDashboardDiagonal}
                        layout={'fill'}
                        alt={''}/>
                </div>
            </div>
        </div>
    )
}
