import Head from 'next/head'
import MasonryGrid from '../src/components/UI/Grid/MasonryGrid'
import Format from '../src/layout/format'
import Header from '@/src/components/Header/Header'
import ImgHeader from '@/public/assets/images/femme-casque-audio.webp'
import useMediaQuery from '@/src/components/Hooks/useMediaQuery'
import MasonryImages from '@/public/assets/images/masonry'
import ContactSupport from '@/src/components/Contact/ContactSupport'
import GridSection from '@/src/components/UI/Grid/GridSection'
import React from 'react'
import CardImageBottomRight from '@/src/components/UI/Card/CardImageBottomRight'
import CardImageTopRight from '@/src/components/UI/Card/CardImageTopRight'
import CardImageBottomFull from '@/src/components/UI/Card/CardImageBottomFull'
import BasicCard from '@/src/components/UI/Card/BasicCard/BasicCard'
import {homeCardContent} from '@/src/components/UI/Card/BasicCard/BasicCardData'

export default function Home() {
    const isMobile = useMediaQuery('(max-width: 728px)')

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
                    title={'A unique sport \nexperience.'}
                    subTitle={
                        'Create a solid training routine with our applications and tracking system.'
                    }
                    imageSrc={ImgHeader}
                    imageHeight={'min-h-[500px] lg:min-h-[90vh]'}
                    imageWidth={' w-[500px] md:w-1/2 '}
                    imageObjectPosition={'object-left-top'}
                    link={'/timer'}
                    imageClassName={'object-contain'}
                />
                <div className={'px-8 md:px-12 max-w-[1280px] mx-auto '}>
                    <GridSection
                        gridClassName={'md:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr]'}
                        title={'Consistency is the key, \n' + "let's build it together."}
                        subTitle={'Timer by Athletid'}
                    >
                        <CardImageBottomRight/>
                        <CardImageTopRight/>
                        <CardImageBottomFull/>
                    </GridSection>

                    <GridSection
                        gridClassName={'md:grid-cols-2 md:grid-rows-2'}
                        subTitle={'Make the difference'}
                        title={'Keeping a training log \nhas never been easier.'}
                    >
                        {homeCardContent.map((value, index) => {
                            return (
                                <BasicCard
                                    key={index}
                                    link={value.link}
                                    tag={value.tag}
                                    title={value.title}
                                    subTitle={value.subTitle}
                                    srcBg={
                                        value.imageSrcMobile && isMobile
                                            ? value.imageSrcMobile
                                            : value.imageSrc
                                    }
                                    paragraphWidth={value.paragraphWidth}
                                    className={value.className}
                                    subTitleClassName={value.subTitleClassName}
                                    buttonClassName={value.buttonClassName}
                                />
                            )
                        })}
                    </GridSection>
                </div>
                <MasonryGrid
                    titleMasonry={'Accompagner.\n Innover. Progresser.'}
                    subTitleMasonry={
                        'Construisons ensemble l’univers qui vous propulsera vers vos objectifs.'
                    }
                    items={MasonryImages}
                />
                <div className={'px-8 md:px-12 max-w-[1280px] mx-auto '}>
                    <ContactSupport/>
                </div>
            </Format>
        </>
    )
}
