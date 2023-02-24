import Head from 'next/head'
import FullScreenBgImage from '../src/components/UI/FullScreenBgImage'
import MasonryGrid from '../src/components/UI/MasonryGrid'
import ContactSupport from '../src/components/Contact/ContactSupport'
import timerAppPreview from '../public/assets/images/application-athletid-entrainement-sportif.webp'
import capteurAppPreview from '../public/assets/images/capteur-athletid-screenshot.png'
import statistiquesApp from '../public/assets/images/statistiques-application-athletid.webp'
import {useIntl} from 'react-intl'
import Format from '../src/layout/format'
import Header from '@/src/components/Header/HeaderJustifySelfEnd'
import ImgHeader from '@/public/assets/images/femme-casque-audio.webp'
import useMediaQuery from "@/src/components/Hooks/useMediaQuery";
import GridLayout from "@/src/components/Home/GridLayout";
import GridLayout2 from "@/src/components/Home/GridLayout2";

export default function Home() {
    const isLargeScreen = useMediaQuery('(min-width: 1024px) and (max-width: 1280px)')
    const isXLScreen = useMediaQuery('(min-width: 1280px)')

    return (<>
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
                    subTitle={'Atteins tes objectifs et découvre les bienfaits du sport avec l’univers Athletid. Des applications mobiles et objets connectés qui s’adaptent à vos besoins. La régularité est la clé, construisons-la ensemble.'}
                    imageSrc={ImgHeader}
                    imageWidth={isXLScreen ? 700 : 500}
                    parentImageWidth={"400px"}
                    link={'/timer'}
                    instaLink={'https://www.instagram.com/athletid/'}
                    color={'white'}
                />
                <div className={ 'px-4 lg:px-0 container mx-auto'}>
                    <GridLayout/>
                    <GridLayout2/>
                </div>
                <MasonryGrid
                    titleMasonry={'Accompagner.\n Innover. Progresser.'}
                    subTitleMasonry={'Construisons ensemble l’univers qui vous propulsera vers vos objectifs.'}
                />
            </Format>
        </>)
}
