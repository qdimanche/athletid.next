import React from 'react'
import Header from '@/src/components/Apco/Header'
import Format from '@/src/layout/format'
import Head from 'next/head'
import GridSection from '@/src/components/UI/Grid/GridSection'
import Card from '@/src/components/UI/Card/Card'
import ApcoFeatures from '@/public/assets/images/apco-features-fullscreen.webp'
import ApcoRockBackground from '@/public/assets/images/apco-rock-background.webp'
import Statistiques from '@/public/assets/images/statistiques.webp'
import Captor from '@/public/assets/images/captor.webp'
import ConstructionEntrainementApco from '@/public/assets/images/construction-entrainement-apco.webp'
import {AiOutlinePlus} from 'react-icons/ai';
import ImageSection from "@/src/components/Apco/ImageSection";
import Carousel from "@/src/components/UI/Carousel/ArrowCarousel/Carousel";
import CarouselBgImage from "@/src/components/UI/Carousel/ArrowCarouselBgImage/CarouselBgImage";
import Feature from "@/src/components/Apco/Feature";

const Apco = () => {
    return (
        <>
            <Head>
                <title>Athletid</title>
                <meta
                    name="description"
                    content="Musculation, Crossfit, Yoga, Powerlifitng, Fitness … Peu importe ta discipline nos solutions innovantes te guident vers tes objectifs !"
                />
                <meta property="og:title" content="Athletid"/>
                <meta property="og:type" content="website"/>
            </Head>

            <Format>
                <Header/>
                <div className={"xl:px-0 px-4 max-w-[1280px] mx-auto"}>
                    <GridSection gridClassName={'grid rows-4'}>
                        <Card
                            className={'md:col-span-2'}
                            link={'/timer'}
                            textColor={'white'}
                            objectPosition={'md:object-right-bottom '}
                            srcBg={ApcoRockBackground}
                            paragraphWidth={'w-3/4 md:w-1/3'}
                            buttonContent={<AiOutlinePlus size={30}/>}
                            buttonClassName={'!rounded-full !p-3'}
                        />
                        <Card
                            className={'md:col-span-2'}
                            link={'/timer'}
                            textColor={'black'}
                            objectPosition={'md:object-right-bottom '}
                            srcBg={Captor}
                            tagVariantOverride={'black'}
                            paragraphWidth={'w-3/4 md:w-1/3'}
                            buttonContent={<AiOutlinePlus size={30}/>}
                            buttonClassName={'!rounded-full !p-3'}
                        />
                        <Card
                            className={'md:col-span-2'}
                            link={'/timer'}
                            textColor={'white'}
                            objectPosition={'object-top '}
                            srcBg={ConstructionEntrainementApco}
                            paragraphWidth={'w-3/4 md:w-1/3'}
                            buttonContent={<AiOutlinePlus size={30}/>}
                            buttonClassName={'!rounded-full !p-3'}
                        />
                        <Card
                            className={'md:col-span-2'}
                            link={'/timer'}
                            textColor={'white'}
                            objectPosition={'object-bottom'}
                            srcBg={Statistiques}
                            paragraphWidth={'w-3/4 md:w-1/3'}
                            buttonContent={<AiOutlinePlus size={30}/>}
                            buttonClassName={'!rounded-full !p-3'}
                        >
                        </Card>
                    </GridSection>
                    <ImageSection/>
                    <Carousel/>
                </div>
                <CarouselBgImage/>
                <div className={'xl:px-0 px-4 max-w-[1280px] mx-auto'}>
                    <Feature/>
                </div>
            </Format>
        </>
    )
}

export default Apco
