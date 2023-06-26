import Head from 'next/head'
import Format from '@/src/layout/format'
import React from 'react'
import Header from '@/src/components/LandingTimer/Header'
import { useIsMobile } from '@/src/components/Hooks/useMediaQuery'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import DownloadApp from '@/src/components/LandingTimer/DownloadApp'
import AnimatedBanner from '@/src/components/LandingTimer/AnimatedBanner'
import Features from '@/src/components/LandingTimer/Features'
import VideoFeatures from '@/src/components/LandingTimer/VideoFeatures'
import Carousel from '@/src/components/LandingTimer/ImageCarousel/Carousel'
import AppFeatureWithButtons from '@/src/components/LandingTimer/AppFeatureWithButtons/AppFeatureWithButtons'
import Subscriptions from '@/src/components/LandingTimer/Subscriptions'
import Ratings from '@/src/components/LandingTimer/Ratings'
import Reviews from '@/src/components/LandingTimer/Reviews'

const Timer = () => {
  const isMobile = useIsMobile()
  const { t } = useTranslation('timer')
  const carouselItems = t('timer:carouselItems', { returnObjects: true })
  const subscriptions = t('timer:feature.subscriptions', {
    returnObjects: true,
  })

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
        <Header />
        <div className={'px-4 max-w-[400px] md:max-w-[1170px] mx-auto '}>
          <DownloadApp
            title={
              <div>
                Your training partner, simple and elegant. Timer by Athletid is
                the most complete application (12 different timers and
                stopwatches), adaptable to all types of training.
              </div>
            }
          />
          <Ratings />
        </div>
        <AnimatedBanner />
        <div className={'px-4 max-w-[400px] md:max-w-[1170px] mx-auto '}>
          <Features />
          <VideoFeatures />
        </div>
        <Carousel />
        <div className={'px-4 max-w-[400px] md:max-w-[1170px] mx-auto '}>
          <AppFeatureWithButtons />
          <Subscriptions />
          <DownloadApp
            title={
              <div>
                <div className={'font-semibold'}>Download our app</div>
                <div>right now on your phone</div>
              </div>
            }
          />
        </div>
        <Reviews/>
      </Format>
    </>
  )
}

export default Timer

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'timer',
        'home',
        'footer',
        'navbar',
        'uiComponents',
      ])),
    },
  }
}
