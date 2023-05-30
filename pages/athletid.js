import React from 'react'
import HeaderAthletid from '@/src/components/Header/HeaderAthletid'
import Format from '@/src/layout/format'
import Head from 'next/head'
import GridSection from '@/src/components/UI/Grid/GridSection'
import BasicCard from '@/src/components/UI/Card/BasicCard/BasicCard'
import ImageSection from '@/src/components/ImageSection/ImageSection'
import Carousel from '@/src/components/UI/Carousel/ArrowCarousel/Carousel'
import CarouselBgImage from '@/src/components/UI/Carousel/ArrowCarouselBgImage/CarouselBgImage'
import Feature from '@/src/components/Feature/Feature'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import imagePaths from "@/imagePaths";
import {useRouter} from "next/router";

const Athletid = () => {
  const { t } = useTranslation('home')
  const router = useRouter();
  const apcoCardContent = t('athletid:apcoCardContent', { returnObjects: true })
  const carouselItems = t('athletid:carouselItems', { returnObjects: true })
  const subscriptions = t('athletid:feature.subscriptions', { returnObjects: true })

  const getLanguageFromURL = () => {
    const { locale } = router

    if (locale === 'fr') {
      return 'fr'
    }
    return 'en'
  }

  const language = getLanguageFromURL()

  const getImagePath = (imageKey) => {
    return imagePaths[language][imageKey]
  }

  return (
    <>
      <Head>
        <title>Athletid</title>
        <meta
          name="description"
          content="Bodybuilding, Crossfit, Yoga, Powerlifitng, Fitness ... Whatever your discipline, our innovative solutions will guide you towards your goals!"
        />
        <meta property="og:title" content="Athletid" />
        <meta property="og:type" content="website" />
      </Head>

      <Format>
        <HeaderAthletid title={t('athletid:header.title')} />
        <div
          className={'px-4 max-w-[350px] md:max-w-[1170px] mx-auto  relative '}
        >
          <GridSection
            gridClassName={'grid md:grid-cols-3 rows-4 '}
            title={t('athletid:gridSection.title')}
            subTitle={t('athletid:gridSection.subTitle')}
          >
            {apcoCardContent.map((value, index) => {
              const imagePath = getImagePath(value.imageKey)
              const imagePathFlip = getImagePath(value.imageKeyFlip)
              return (
                <BasicCard
                  key={index}
                  title={value.title}
                  subTitle={value.subTitle}
                  imageKey={imagePath}
                  imageKeyFlip={imagePathFlip}
                  paragraphWidth={value.paragraphWidth}
                  className={value.className}
                  flipContent={value.flipContent}
                  flipContentTitle={value.flipContentTitle}
                  flipImage={value.flipImage}
                  flipImageHeight={value.flipImageHeight}
                  flipImageWidth={value.flipImageWidth}
                  buttons={'toggleButton'}
                />
              )
            })}
          </GridSection>
          <div className={'px-4 max-w-[1024px] mx-auto'}>
            <ImageSection
              imageData={'apco'}
              title={t('athletid:imageSection.title')}
              subTitle={t('athletid:imageSection.subTitle')}
            />
          </div>
          <Carousel imageData={carouselItems} />
        </div>
        <CarouselBgImage imageData={'apco'} />
        <div className={'px-4 max-w-[350px] md:max-w-[1170px] mx-auto'}>
          <Feature
              title={t('athletid:feature.title')}
              subTitle={
                t('athletid:feature.subTitle')}
              titleFeatures={t('athletid:feature.titleFeatures')}
              subscriptions={subscriptions}
              imageSrc={"/assets/images/session-constructor-cut.webp"}
          />
        </div>
      </Format>
    </>
  )
}

export default Athletid

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'athletid',
        'footer',
        'navbar',
        'uiComponents',
      ])),
    },
  }
}
