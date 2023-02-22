import React from 'react'
import TimerDashboard from '@/public/assets/images/timer-athletid-dashboard.webp'
import Image from 'next/image'
import Button from '@/src/components/UI/Button'
import Tag from '@/src/components/UI/Tag'
import useMediaQuery from "@/src/components/Hooks/useMediaQuery";

const GridLayout = () => {
    return (
        <div className={'md:my-40 mt-28'}>
            <div
                className={
                    'flex flex-col items-center md:w-1/2 md:w-3/4 mx-auto text-center md:mb-12 mb-8'
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
                    ' relative overflow-hidden grid md:grid-cols-2 gap-4'
                }
            >
                <FirstElement/>
            </div>
        </div>
    )
}

export default GridLayout


function FirstElement () {

    const isMobile = useMediaQuery('(max-width: 1024px)')

    return (
        <div
            className={
                'rounded-medium overflow-hidden bg-greyShade  flex flex-col md:flex-row space-y-4'
            }
        >
            <div
                className={
                    'lg:pl-12 md:pl-8 md:pr-0 px-4 pt-4 flex md:items-start items-center md:flex-col md:justify-between justify-center lg:py-12 md:py-8'
                }
            >
                <div className={'space-y-4 flex flex-col md:justify-between justify-center'}>
                    <div className={'space-y-4 md:mb-4 flex flex-col items-center md:items-start'}>
                        <Tag text={'Lorem'} variant={'black'}/>
                        <h2 className={'md:text-left text-center'}>
                            Lorem ipsum dolor sit amet.
                        </h2>
                    </div>
                </div>
                <div>
                    <Button
                        className={'md:static absolute bottom-12 right-12'}
                        text={'Lorem'}
                        variant={'red'}
                        link={'/timer'}
                    />
                </div>
            </div>
            <div
                className={
                    'w-full relative flex md:justify-end justify-center md:items-end md:mr-8 lg:mr-12 '
                }
            >
                <div className={'md:translate-y-0 translate-y-10 pt-40'}>
                    <Image className={'drop-shadow-custom w-fit'} src={TimerDashboard} width={isMobile ? 150 : 300} alt={''}/>
                </div>
            </div>
        </div>
    )
}