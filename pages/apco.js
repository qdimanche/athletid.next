import React from 'react'
import Header from '@/src/components/Apco/Header'
import Format from '@/src/layout/format'
import Head from 'next/head'

const Apco = () => {
  return (
    <>
      <Head>
        <title>Athletid</title>
        <meta
          name="description"
          content="Musculation, Crossfit, Yoga, Powerlifitng, Fitness … Peu importe ta discipline nos solutions innovantes te guident vers tes objectifs !"
        />
        <meta property="og:title" content="Athletid" />
        <meta property="og:type" content="website" />
      </Head>

      <Format>
        <Header />
      </Format>
    </>
  )
}

export default Apco
