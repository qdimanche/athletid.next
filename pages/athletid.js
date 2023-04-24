import React from 'react'
import HeaderApco from '@/src/components/Header/HeaderApco'
import Format from '@/src/layout/format'
import Head from 'next/head'
import GridSection from '@/src/components/UI/Grid/GridSection'
import BasicCard from '@/src/components/UI/Card/BasicCard/BasicCard'
import ImageSection from '@/src/components/ImageSection/ImageSection'
import Carousel from '@/src/components/UI/Carousel/ArrowCarousel/Carousel'
import CarouselBgImage from '@/src/components/UI/Carousel/ArrowCarouselBgImage/CarouselBgImage'
import Feature from '@/src/components/Feature/Feature'
import {apcoCardContent} from '@/src/components/UI/Card/BasicCard/BasicCardData'

const Athletid = () => {

    return (
        <>
            <Head>
                <title>Athletid</title>
                <meta
                    name="description"
                    content="Bodybuilding, Crossfit, Yoga, Powerlifitng, Fitness ... Whatever your discipline, our innovative solutions will guide you towards your goals!"
                />
                <meta property="og:title" content="Athletid"/>
                <meta property="og:type" content="website"/>
            </Head>

            <Format>

                <HeaderApco/>
                <div className={'px-4 max-w-[350px] md:max-w-[1170px] mx-auto  relative '}>
                    <GridSection
                        gridClassName={'grid md:grid-cols-3 rows-4 '}
                        title={'The most powerful training tracking and analysis system'}
                        subTitle={'Progress every day'}
                    >
                        {apcoCardContent.map((value, index) => {
                            return (
                                <BasicCard
                                    key={index}
                                    title={value.title}
                                    subTitle={value.subTitle}
                                    srcBg={value.imageSrc}
                                    paragraphWidth={value.paragraphWidth}
                                    className={value.className}
                                    flipContent={value.flipContent}
                                    flipContentTitle={value.flipContentTitle}
                                    flipImage={value.flipImage}
                                    flipImageHeight={value.flipImageHeight}
                                    flipImageWidth={value.flipImageWidth}
                                    buttons={"toggleButton"}
                                />
                            )
                        })}
                    </GridSection>
                    <div className={"px-4 max-w-[1024px] mx-auto"}>
                        <ImageSection imageData={'apco'} title={"Control. Manage. Share."} subTitle={"The new hassle-free sports experience\n" +
                            "designed for a new generation of athletes \n" +
                            "all in the Athletid App."}/>
                    </div>
                    <Carousel
                        imageData={'apco'}/>
                </div>
                <CarouselBgImage imageData={'apco'}/>
                <div className={'px-4 max-w-[350px] md:max-w-[1170px] mx-auto'}>
                    <Feature
                        subscriptions={'apco'}
                    />
                </div>
            </Format>
        </>
    )
}

export default Athletid
