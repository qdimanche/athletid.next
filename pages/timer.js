import TimerScreen03 from '@/public/assets/images/application-timer-chronometre.webp'
import TimerScreen02 from '@/public/assets/images/application-timer-athletid-tempo.webp'
import TimerScreen01 from '@/public/assets/images/application-timer-creation-entrainement.webp'
import Header from '@/src/components/Header/HeaderJustifySelfEnd'
import AppFeature from '@/src/components/Timer/AppFeature'
import FeatureSquare from '@/src/components/UI/FeatureSquare'
import Testimonial from '@/src/components/Testimonial/Testimonial'
import Head from 'next/head'
import Format from '@/src/layout/format'
import DashBoard from '@/public/assets/images/timer-athletid-dashboard.webp'
import useMediaQuery from '@/src/components/Hooks/useMediaQuery'

const SocialApp = () => {
    const isMobile = useMediaQuery('(max-width: 768px)')
    return (
        <>
            <Head>
                <title>Timer By Athletid - Sport Timer App</title>
                <meta property="og:title" content="Timer"/>
                <meta property="og:type" content="website"/>
                <meta
                    name="description"
                    content="Tous les chronomètres et Timers sportifs sur une seule application, Intervalle, Tempo, AMRAP, EMOM, For Time, Respiration et bien d’autres !"
                />
            </Head>

            <Format>
                <Header
                    title={'Le meilleur timer \nde sport.'}
                    subTitle={
                        'Ton partenaire d’entraînement, simple et élégant. Ta nouvelle application est la plus complète (12 chronomètres et timers différents), elle s’adapte à tous types d’entraînements.'
                    }
                    imageSrc={DashBoard}
                    visibilityButton={'hidden'}
                    link={'/'}
                    imageWidth={isMobile?200 : 370}
                    parentImageWidth={"200px"}
                    instaLink={'https://www.instagram.com/timerbyathletid/'}
                />
                <AppFeature/>
                <FeatureSquare
                    titleFeatureSquare={'Accessible à tous.'}
                    subTitleFeatureSquare={
                        'Conçu en collaboration avec des sportifs et des experts du monde entier. Ton application Timer t’accompagne quel que soit ton niveau, ta discipline ou encore tes objectifs.'
                    }
                    titleSquare1={
                        'Enregistre et adapte ta séance selon tes besoins et tes objectifs.'
                    }
                    imgSquare1={TimerScreen01}
                    titleSquare2={
                        'Tempo, Respiration, Intervalle, AMRAP, EMOM, For Time, Sonothérapie…'
                    }
                    imgSquare2={TimerScreen02}
                    titleSquare3={
                        'Découvre un design épuré, intuitif  et des sons adaptés à ton sport.'
                    }
                    imgSquare3={TimerScreen03}
                />
                <Testimonial
                    titleTestimonial={
                        'Toi aussi atteint tes objectifs sportifs avec Timer by Athletid.'
                    }
                    subTitleTestimonial={
                        'De nombreux sportifs et professionnels nous ont déjà rejoins, ils n’attendent plus que toi ! '
                    }
                />
            </Format>
        </>
    )
}

export default SocialApp;
