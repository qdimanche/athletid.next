import Head from 'next/head'
import MasonryGrid from '../src/components/UI/Grid/MasonryGrid'
import Format from '../src/layout/format'
import Header from '@/src/components/Header/Header'
import ImgHeader from '@/public/assets/images/femme-casque-audio.webp'
import {useIsMobile} from '@/src/components/Hooks/useMediaQuery'
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

    const isMobile = useIsMobile();

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
                <Header
                    title={'A unique sport experience.'}
                    subTitle={
                        'Create a solid training routine with \nour applications and tracking system.'
                    }
                    imageSrc={ImgHeader}
                    imageWidth={' w-[500px] md:w-1/2 '}
                    link={'/timer'}
                    imageClassName={'object-cover object-top md:!object-left-top'}
                />
                <div className={'px-4 max-w-[350px] md:max-w-[1170px] mx-auto '}>
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
                    titleMasonry={'Accompanying. \nInnovating. Progress'}
                    subTitleMasonry={
                        'Let\'s build together the universe that will propel you towards your goals.'
                    }
                    items={MasonryImages}
                />
                <div className={'px-4  max-w-[350px] md:max-w-[1170px] mx-auto '}>
                    <ContactSupport/>
                </div>
            </Format>
        </>
    )
}
