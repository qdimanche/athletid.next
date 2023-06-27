import Navbar from '@/src/components/Nav/Navbar'
import Footer from '@/src/components/Footer/Footer'
import Head from 'next/head'
import Consent from '@/src/components/UI/Consent'
import FooterLanding from "@/src/components/Footer/FooterLanding";

export default function format({children}) {

    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="theme-color" content="#000000"/>
                <meta
                    name="google-site-verification"
                    content="6DF2_TTqoaJp9NBltLx5nqc6ky-0pcTvxUAyS7sCRT8"
                />
                <meta property="og:image:width" content="800"/>
                <meta property="og:image:height" content="530"/>
            </Head>
            <Navbar/>
            <main className={'relative'}>{children}</main>
            <FooterLanding
            />
            <Consent/>
        </>
    )
}
