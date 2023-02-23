import React from 'react'
import FullScreenBgImage from '@/src/components/UI/FullScreenBgImage'
import ApcoFeatures from '@/public/assets/images/apco-features-fullscreen.webp'
import ApcoFeaturesMobile from '@/public/assets/images/apco-features-fullscreen-bg.webp'
import useMediaQuery from '@/src/components/Hooks/useMediaQuery'
import TimerDashboard from '@/public/assets/images/timer-athletid-dashboard.webp'
import CaptorMockup from '@/public/assets/images/captor-mockup.webp'
import ApcoRockBackground from '@/public/assets/images/apco-rock-background.webp'


const GridLayout2 = () => {
    const isMobile = useMediaQuery('(max-width: 728px)')

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
            <div className={'grid gap-4 md:grid-cols-2 md:grid-rows-2'}>
                <FullScreenBgImage
                    className={'md:col-span-2'}
                    link={'/timer'}
                    textColor={'white'}
                    srcBg={isMobile ? ApcoFeaturesMobile : ApcoFeatures}
                    srcMockup={TimerDashboard}
                    imageHeight={800}
                    paragraphWidth={'w-3/4 md:w-1/3'}
                />
                <FullScreenBgImage
                    link={'/timer'}
                    textColor={'black'}
                    tag={'hidden'}
                    bgColor={'bg-greyShade'}
                    srcMockup={CaptorMockup}
                    imageHeight={800}
                    mockupDisplay={'!block'}
                    paragraphWidth={'w-2/3'}
                />
                <FullScreenBgImage
                    link={'/timer'}
                    tag={'hidden'}
                    textColor={'white'}
                    srcBg={isMobile ? ApcoRockBackground : ApcoRockBackground}
                    srcMockup={TimerDashboard}
                    mockupDisplay={'!hidden'}
                    imageHeight={800}
                    paragraphWidth={'w-2/3'}
                />
            </div>
        </div>
    )
}

export default GridLayout2;