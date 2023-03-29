import Header from '@/src/components/Header/Header'
import Feature from '@/src/components/Feature/Feature'
import Testimonial from '@/src/components/Testimonial/Testimonial'
import Head from 'next/head'
import Format from '@/src/layout/format'
import ImgHeader from '@/public/assets/images/timer-v2-header-desktop.webp'
import ImgHeaderMobile from '@/public/assets/images/timer-v2-header-mobile.webp'
import React from 'react'
import KeyNumbers from '@/src/components/Timer/KeyNumbers'
import FullHeightBgImage from '@/src/components/Timer/FullHeightBgImage'
import CarouselBgImage from '@/src/components/UI/Carousel/ArrowCarouselBgImage/CarouselBgImage'
import Carousel from '@/src/components/UI/Carousel/ArrowCarousel/Carousel'
import ImageSection from '@/src/components/ImageSection/ImageSection'
import {useIsMobile} from "@/src/components/Hooks/useMediaQuery";

const Timer = () => {

    const isMobile = useIsMobile();

    return (
        <>
            <Head>
                <title>Timer By Athletid - Sport Timer App</title>
                <meta property="og:title" content="Timer"/>
                <meta property="og:type" content="website"/>
                <meta
                    name="description"
                    content="Tous les chronomètres et Timers sportifs sur une seule application, Intervalle, Tempo, AMRAP, EMOM, For Time, Respiration et bien d’autres !"
                />
            </Head>

            <Format>
                <Header
                    title={'The best sport\n' + 'timer app.'}
                    subTitle={
                        'Your training partner, simple and elegant. \nYour new application is the most complete (12 different timers and stopwatches), it adapts to all types of training.'
                    }
                    imageSrc={isMobile ? ImgHeaderMobile : ImgHeader}
                    buttons={"downloadButton"}
                    imageClassName={'object-cover object-center md:object-left'}
                    imageHeight={"md:h-full"}
                />
                <div className={'px-4 max-w-[350px] md:max-w-[1170px] mx-auto '}>
                    <KeyNumbers/>
                </div>
                <div className={'md:px-4 md:max-w-[1170px] mx-auto '}>
                    <FullHeightBgImage
                        title={'Designed by athletes \nfor athletes.'}
                        subTitle={'Simplified workout follow-up.'}
                    />
                </div>
                <div className={'px-4 max-w-[350px] md:max-w-[1170px] mx-auto '}>
                    <Carousel
                        title={'Our timers adapt to your objective.'}
                        subTitle={'Applications Haut de Gamme'}
                        imageData={'timer'}
                    />
                </div>
                <CarouselBgImage imageData={'timer'}/>
                <div className={'px-4 max-w-[350px] md:max-w-[1170px] mx-auto'}>
                    <ImageSection imageData={'timer'}/>
                    <Feature
                        title={'The most powerfull\n' + 'and complet.'}
                        subTitle={
                            'Try it for free now and discover the complete workout \n' +
                            'builder. Build and save your workout quickly and easily.'
                        }
                        titleFeatures={'Timer By Athletid 2023'}
                        subscriptions={'timer'}
                    />
                </div>
                <div className={'md:px-4 md:max-w-[1170px] mx-auto '}>
                    <Testimonial
                        title={'Many of you already \n' + 'love the app! '}
                        subTitle={'Together to build the best app.'}
                    />
                </div>
            </Format>
        </>
    )
}

export default Timer;
