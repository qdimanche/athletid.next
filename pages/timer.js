import Header from '@/src/components/Home/Header'
import Feature from '@/src/components/Feature'
import Testimonial from '@/src/components/Testimonial/Testimonial'
import Head from 'next/head'
import Format from '@/src/layout/format'
import useMediaQuery from '@/src/components/Hooks/useMediaQuery'
import ImgHeader from '@/public/assets/images/timer-v2-header.webp'
import Button from '@/src/components/UI/Button'
import React from 'react'
import {FaApple} from 'react-icons/fa'
import {TiVendorAndroid} from 'react-icons/ti'
import KeyNumbers from '@/src/components/Timer/KeyNumbers'
import FullHeightBgImage from '@/src/components/Timer/FullHeightBgImage'
import CarouselBgImage from '@/src/components/UI/Carousel/ArrowCarouselBgImage/CarouselBgImage'
import Carousel from '@/src/components/UI/Carousel/ArrowCarousel/Carousel'
import ImageSection from "@/src/components/Apco/ImageSection";

const Timer = () => {
    const isMobile = useMediaQuery('(max-width: 768px)')
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
                    title={'Le meilleur timer\nde sport'}
                    imageSrc={ImgHeader}
                    imageHeight={'lg:min-h-[90vh]'}
                    link={'/timer'}
                    instaLink={'https://www.instagram.com/athletid/'}
                    buttons={
                        <>
                            <Button
                                variant={'black'}
                                link={''}
                                content={
                                    <div className={'flex space-x-2 items-center'}>
                                        <FaApple color={'black'} size={20}/>
                                        <div>App Store</div>
                                    </div>
                                }
                            />
                            <Button
                                variant={'black'}
                                link={''}
                                content={
                                    <div className={'flex space-x-2 items-center'}>
                                        <TiVendorAndroid color={'black'} size={22}/>
                                        <div>Play Store</div>
                                    </div>
                                }
                            />
                        </>
                    }
                />
                <div className={'px-8 max-w-[1280px] mx-auto '}>
                    <KeyNumbers/>
                </div>
                <FullHeightBgImage
                    title={
                        'Atteignez vos \n' + 'objectifs sportifs grâce à nos solutions.'
                    }
                    subTitle={'Applications Haut de Gamme'}
                    buttons={
                        <>
                            <Button
                                variant={'white'}
                                link={''}
                                content={
                                    <div className={'flex space-x-2 items-center'}>
                                        <FaApple color={'white'} size={20}/>
                                        <div>App Store</div>
                                    </div>
                                }
                            />
                            <Button
                                variant={'white'}
                                link={''}
                                content={
                                    <div className={'flex space-x-2 items-center'}>
                                        <TiVendorAndroid color={'white'} size={22}/>
                                        <div>Play Store</div>
                                    </div>
                                }
                            />
                        </>
                    }
                />
                <div className={'px-8 max-w-[1280px] mx-auto '}>
                    <Carousel
                    title={"Lorem ipsum dolor sit elit amet, lorem"}
                    subTitle={"Applications Haut de Gamme"}
                    />
                </div>
                <CarouselBgImage/>
                <div className={'px-8 max-w-[1280px] mx-auto'}>
                    <ImageSection/>
                    <Feature/>
                </div>
                <Testimonial
                    title={"Lorem ipsum dolor sit elit amet, lorem"}
                    subTitle={"Applications Haut de Gamme"}
                />
            </Format>
        </>
    )
}

export default Timer;
