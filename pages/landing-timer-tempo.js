import Head from 'next/head'
import Format from '@/src/layout/formatLanding'
import React from 'react'
import Header from '@/src/components/LandingTimer/Header'
import { useIsMobile } from '@/src/components/Hooks/useMediaQuery'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import DownloadApp from '@/src/components/LandingTimer/DownloadApp'
import AnimatedBanner from '@/src/components/LandingTimer/AnimatedBanner'
import Features from '@/src/components/LandingTimer/Features'
import VideoFeatures from '@/src/components/LandingTimer/VideoFeatures'
import Carousel from '@/src/components/LandingTimer/ImageCarousel/Carousel'
import AppFeatureWithButtons from '@/src/components/LandingTimer/AppFeatureWithButtons/AppFeatureWithButtons'
import Subscriptions from '@/src/components/LandingTimer/Subscriptions'
import Reviews from '@/src/components/LandingTimer/Reviews/Reviews'
import QrCode from '@/src/components/LandingTimer/QrCode'

const Timer = () => {
  const isMobile = useIsMobile()

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
        <AnimatedBanner />
        <div className={'px-4 max-w-[370px] md:max-w-[1170px] mx-auto '}>
          <Features />
          <VideoFeatures />
          {!isMobile && (
            <DownloadApp
              className={'md:!mt-[50px] md:mb-[100px]'}
              title={
                <div className={'flex space-x-1'}>
                  <div className={'font-semibold'}>Download our app</div>
                  <div>right now on your phone</div>
                </div>
              }
            />
          )}
        </div>
        <Carousel />
        <div className={'px-4 max-w-[370px] md:max-w-[1170px] mx-auto '}>
          <AppFeatureWithButtons />
          <Subscriptions />
          <DownloadApp
            title={
              isMobile && (
                <div>
                  <div className={'font-semibold'}>Download our app</div>
                  <div>right now on your phone</div>
                </div>
              )
            }
          />
        </div>
        <Reviews />
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
