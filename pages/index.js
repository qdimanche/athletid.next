import Head from 'next/head'
import MasonryGrid from '../src/components/UI/Grid/MasonryGrid'
import Format from '../src/layout/format'
import Header from '@/src/components/Home/Header'
import ImgHeader from '@/public/assets/images/femme-casque-audio.webp'
import useMediaQuery from '@/src/components/Hooks/useMediaQuery'
import MasonryImages from '@/public/assets/images/masonry'
import ContactSupport from '@/src/components/Contact/ContactSupport'
import GridSection from '@/src/components/UI/Grid/GridSection'
import React from 'react'
import CardImageBottomRight from '@/src/components/UI/Card/CardImageBottomRight'
import CardImageTopLeft from '@/src/components/UI/Card/CardImageTopLeft'
import CardImageBottomFull from '@/src/components/UI/Card/CardImageBottomFull'
import Card from '@/src/components/UI/Card/Card'
import ApcoFeaturesMobile from '@/public/assets/images/apco-features-fullscreen-mobile.webp'
import ApcoFeatures from '@/public/assets/images/apco-features-fullscreen.webp'
import TimerDashboard from '@/public/assets/images/timer-athletid-dashboard.webp'
import Captor from '@/public/assets/images/captor.webp'
import ApcoRockBackground from '@/public/assets/images/apco-rock-background.webp'

export default function Home() {
    const isLargeScreen = useMediaQuery(
        '(min-width: 1024px) and (max-width: 1280px)'
    )
    const isMobile = useMediaQuery('(max-width: 728px)')
    const isXLScreen = useMediaQuery('(min-width: 1280px)')

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
                <Header
                    title={'Créer une routine \nd’entraînement durable.'}
                    subTitle={
                        'Atteins tes objectifs et découvre les bienfaits du sport avec l’univers Athletid. Des applications mobiles et objets connectés qui s’adaptent à vos besoins. La régularité est la clé, construisons-la ensemble.'
                    }
                    imageSrc={ImgHeader}
                    imageHeight={"min-h-[500px] lg:min-h-[90vh]"}
                    imageWidth={" w-[500px] md:w-1/2 "}
                    imageObjectPosition={'object-left-top'}
                    link={'/timer'}
                    instaLink={'https://www.instagram.com/athletid/'}
                />
                <div className={'xl:px-0 px-4 max-w-[1280px] mx-auto '}>
                    <GridSection
                        gridClassName={'md:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr]'}
                    >
                        <CardImageBottomRight/>
                        <CardImageTopLeft/>
                        <CardImageBottomFull/>
                    </GridSection>

                    <GridSection gridClassName={'md:grid-cols-2 md:grid-rows-2'}>
                        <Card
                            className={'md:col-span-2'}
                            link={'/timer'}
                            textColor={'white'}
                            objectPosition={'md:object-right-bottom '}
                            srcBg={isMobile ? ApcoFeaturesMobile : ApcoFeatures}
                            srcMockup={TimerDashboard}
                            buttonContent={'Découvrir'}
                            paragraphWidth={'w-3/4 md:w-1/3'}
                            playAnimation={"false"}
                        />
                        <Card
                            link={'/timer'}
                            textColor={'black'}
                            tag={'hidden'}
                            srcBg={Captor}
                            paragraphWidth={'w-2/3'}
                            buttonContent={'Découvrir'}
                            objectPosition={'md:object-center  '}
                            playAnimation={"false"}
                        />
                        <Card
                            link={'/timer'}
                            tag={'hidden'}
                            textColor={'white'}
                            srcBg={isMobile ? ApcoRockBackground : ApcoRockBackground}
                            srcMockup={TimerDashboard}
                            mockupDisplay={'!hidden'}
                            paragraphWidth={'w-2/3'}
                            buttonContent={'Découvrir'}
                            objectPosition={'md:object-center '}
                            playAnimation={"false"}
                        />
                    </GridSection>
                </div>
                <MasonryGrid
                    titleMasonry={'Accompagner.\n Innover. Progresser.'}
                    subTitleMasonry={
                        'Construisons ensemble l’univers qui vous propulsera vers vos objectifs.'
                    }
                    items={MasonryImages}
                />
                <div className={'xl:px-0 px-4 max-w-[1280px] mx-auto '}>
                    <ContactSupport/>
                </div>
            </Format>
        </>
    )
}
