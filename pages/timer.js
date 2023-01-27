import TimerVideo from "@/public/assets/videos/application-timer-athletid-fonctionnalites.mp4";
import TimerScreen01 from "@/public/assets/images/application-timer-chronometre.webp";
import TimerScreen02 from "@/public/assets/images/application-timer-seance-sport.webp";
import TimerScreen03 from "@/public/assets/images/application-timer-creation-entrainement.webp";
import HeaderHome from "@/src/components/Header/HeaderHome";
import AppFeature from "@/src/components/Timer/AppFeature";
import FeatureSquare from "@/src/components/UI/FeatureSquare";
import Testimonial from "@/src/components/Testimonial/Testimonial";
import DownloadApp from "@/src/components/UI/DownloadApp";
import Head from "next/head";
import Format from "@/src/layout/format";

const SocialApp = () => {
  return (
    <>
    
        <Head>
            <title>Timer</title>
            <meta property="og:title" content="Timer"/>
            <meta property="og:type" content="website" />
        </Head>
        
        <Format>
            <HeaderHome
                src={TimerVideo}
                title={"Le meilleur Timer sportif !"}
                subtitle={"Des fonctionnalités adaptées pour les entraînements musculaires, cardio et bien-être comme tu ne trouveras nulle part ailleurs. Enchaîne tes exercices l’esprit libre et utilise chaque seconde pour te rapprocher vers ton objectif !"}
                visibilityWhiteButton={"hidden"}
                video = {"testhome4.mp4"}
            />
            <AppFeature />
            <FeatureSquare
                titleFeatureSquare={"Le meilleur de tous."}
                subTitleFeatureSquare={
                    "Avec ces fonctionnalités uniques au monde, il ne te suffit plus que d’une seule application pour avoir tous les timers et chronomètres sportifs au même endroit !"
                }
                titleSquare1={"Suis des séances entières composés différents de timers et chronomètres."}
                imgSquare1={TimerScreen01}
                titleSquare2={"Tempo, Respiration, Intervalle … Des fonctionnalité pensées par des experts."}
                imgSquare2={TimerScreen02}
                titleSquare3={""}
                imgSquare3={TimerScreen03}
            />
            <Testimonial
                titleTestimonial={"Plus qu’une application. \nRejoins la communauté des passionnés."}
                subTitleTestimonial={
                    "De nombreux sportifs et professionnels nous ont déjà rejoins, ils n’attendent plus que toi ! "
                }
            />
            <DownloadApp
                flexDirection={"flex-col"}
                marginBottom={"mb-20"}
                justifyContent={"justify-center"}
                title={
                    "Nous avons hâte de découvrir \n tes entraînements et tes conseils !"
                }
            />
        </Format>
        

        
    </>
  );
};

export default SocialApp;
