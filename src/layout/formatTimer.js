import Navbar from '@/src/components/Nav/Navbar'
import Head from 'next/head'
import Consent from '@/src/components/UI/Consent'
import FooterTimer from "@/src/components/Footer/FooterTimer";

export default function format({children}) {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="theme-color" content="#000000"/>
                <meta
                    name="description"
                    content="Donnez du sens à vos entraînements et débloquez votre plein potentiel physique avec les applications mobiles ATHLETID"
                />
                <meta
                    name="google-site-verification"
                    content="6DF2_TTqoaJp9NBltLx5nqc6ky-0pcTvxUAyS7sCRT8"
                />
                <meta property="og:url" content="https://athletid.com/"/>
                <meta property="og:image" content={'https://i.imgur.com/aHBOGFc.png'}/>
                <meta
                    property="og:image:secure_url"
                    content="https://i.imgur.com/aHBOGFc.png"
                />
                <meta property="og:image:width" content="800"/>
                <meta property="og:image:height" content="530"/>
                <meta
                    property="og:description"
                    content="Libérez votre potentiel grâce aux apps mobiles ATHLETID"
                />
            </Head>
            <Navbar/>
            <main className={'relative'}>{children}</main>
            <FooterTimer/>
            <Consent/>
        </>
    )
}
