import Head from 'next/head'
import Navbar from "../src/components/Nav/Navbar";
import HeaderHome from "../src/components/Header/HeaderHome";
import FullScreenBgImage from "../src/components/UI/FullScreenBgImage";
import MasonryGrid from "../src/components/UI/MasonryGrid";
import ContactSupport from "../src/components/Contact/ContactSupport";
import Newsletter from "../src/components/Footer/Newsletter";
import Footer from "../src/components/Footer/Footer";
import ImgHeaderHome from "../public/assets/images/femme-entrainement-exterieur-fitness.webp"
import OgImage from "../public/assets/images/og-image.png";
import timerAppPreview from "../public/assets/images/application-athletid-entrainement-sportif.webp";
import athletidAppPreview from "../public/assets/images/application-athletid.webp"
import athletidAppPreview2 from "../public/assets/images/application-athletid-construction.webp";
import femmeEntrainement from "../public/assets/videos/femme-entrainement-exterieur-fitness.mp4";
import appSNVideo from "../public/assets/videos/application-network-athletid-fonctionnalites.mp4";
import appTimerVideo from "../public/assets/videos/application-network-athletid-fonctionnalites.mp4";


export default function Home() {
    return (<>
        <Head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="theme-color" content="#000000"/>
            <meta
                name="description"
                content="Donnez du sens à vos entraînements et débloquez votre plein potentiel physique avec les applications mobiles ATHLETID"
            />
            <title>Athletid</title>
            <meta name="google-site-verification" content="6DF2_TTqoaJp9NBltLx5nqc6ky-0pcTvxUAyS7sCRT8" />
            <meta property="og:title" content="Athletid" />
            <meta property="og:description" content="Libérez votre potentiel grâce aux apps mobiles ATHLETID" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={OgImage} />
        </Head>



        <Navbar/>
        <HeaderHome
            subTitle={"Découvre nos solutions innovantes et améliore ton expérience sportive en créant l’environnement le plus propice à ta réussite, quel que soit ton niveau, tes objectifs et ta discipline."}
            buttonText={"Découvrir"}
            img={ImgHeaderHome}
            video = {femmeEntrainement}
            link={"/network"}
            visibilityWhiteButton={'flex'}
            visibilityDownloadButton={'hidden'}
        />
        <FullScreenBgImage
            src={athletidAppPreview}
            video = {appSNVideo}
            title={"Partage ta \n passion !"}
            button={true}
            subtitle={"Enregistre tes séances et partage ta vie de sportif avec une communauté qui te ressemble. Un lieu inspirant, accessible à tous, empreint de valeurs sportives, avec un but commun : atteindre ensemble nos objectifs !"}
            tag={"Nouveau"}
            link={"/network"}
            idSection={"networkHeader"}
        />
        <FullScreenBgImage
            src={timerAppPreview}
            video = {appTimerVideo}
            title={"Ton temps \n est précieux !"} button={false} tag={"Bientôt disponible"}
            subtitle={"Paramètre ton entraînement et laisse toi guider. Enchaîne tes exercices l’esprit libre et respecte chaque seconde pour te rapprocher un peu plus de ton objectif."}
            link={"/network"}
        />
        <MasonryGrid
            titleMasonry={"Accompagner. \n Informer. Inspirer."}
            subTitleMasonry={"Construisons ensemble l’univers qui vous propulsera vers vos objectifs"}
            link={"/about"}
        />
        <ContactSupport src={athletidAppPreview2}
                        title={"Ton temps est précieux !"} tag={"Bientôt disponible"}/>
        <Newsletter/>
        <Footer/>


    </>)
}
