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
import { useIsMobile } from '@/src/components/Hooks/useMediaQuery'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const Timer = () => {
  const isMobile = useIsMobile()
  const { t } = useTranslation('timer')
  const carouselItems = t('timer:carouselItems', { returnObjects: true })
  const subscriptions = t('timer:feature.subscriptions', { returnObjects: true })

  return (
    <>
      <Head>
        <title>Timer By Athletid - Sport Timer App</title>
        <meta property="og:title" content="Timer" />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="All sports timers and stopwatches in one application, Interval, Tempo, AMRAP, EMOM, For Time, Breathing and many more!"
        />
      </Head>

      <Format>
        <Header
          title={t('timer:header.title')}
          subTitle={
            t('timer:header.subTitle')
          }
          imageSrc={isMobile ? ImgHeaderMobile : ImgHeader}
          buttons={'downloadButton'}
          imageClassName={'object-cover object-center md:object-top'}
          imageHeight={'md:h-3/4'}
        />
        <div className={'px-4 max-w-[350px] md:max-w-[1170px] mx-auto '}>
          <KeyNumbers/>
        </div>
        <div className={'md:px-4 md:max-w-[1170px] mx-auto '}>
          <FullHeightBgImage
            title={t("timer:fullHeightBgImage.title")}
            subTitle={t("timer:fullHeightBgImage.subTitle")}
            imageTitle={t("timer:fullHeightBgImage.imageTitle")}
          />
        </div>
        <div className={'px-4 max-w-[350px] md:max-w-[1170px] mx-auto '}>
          <Carousel
            title={t("timer:carousel.title")}
            imageData={carouselItems}
          />
        </div>
        <CarouselBgImage imageData={'timer'} />
        <div className={'px-4 max-w-[350px] md:max-w-[1170px] mx-auto'}>
          <ImageSection
            imageData={'timer'}
            title={t("timer:imageSection.title")}
            subTitle={
              t("timer:imageSection.subTitle")
            }
          />
          <Feature
            title={t('timer:feature.title')}
            subTitle={
              t('timer:feature.subTitle')
            }
            titleFeatures={t('timer:feature.titleFeatures')}
            subscriptions={subscriptions}
            imageSrc={"/assets/images/training-recap.webp"}
          />
        </div>
        <div className={'md:px-4 md:max-w-[1170px] mx-auto '}>
          <Testimonial
            title={t('timer:testimonial.title')}
            subTitle={t('timer:testimonial.subTitle')}
          />
        </div>
      </Format>
    </>
  )
}

export default Timer

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['timer', 'home', 'footer', 'navbar', 'uiComponents'])),
    },
  }
}