import Head from 'next/head'
import ContactSupport from '../src/components/Contact/ContactSupport'
import statistiquesApp from '../public/assets/images/statistiques-application-athletid.webp'
import {useIntl} from 'react-intl'
import Format from '../src/layout/format'
import Header from '@/src/components/Header/HeaderJustifySelfEnd'
import ImgHeader from '@/public/assets/images/femme-casque-audio.webp'
import useMediaQuery from "@/src/components/Hooks/useMediaQuery";
import GridLayout from "@/src/components/Home/GridLayout";

export default function Home() {
    const intl = useIntl()
    const isMobile = useMediaQuery('(max-width: 768px)');
    
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
                    imageWidth={1080}
                    parentImageWidth={"400px"}
                    link={'/timer'}
                    instaLink={'https://www.instagram.com/athletid/'}
                    color={'white'}
                />
                <GridLayout/>
                <ContactSupport src={statistiquesApp}/>
            </Format>
        </>)
}
