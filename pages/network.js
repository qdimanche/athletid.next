import React from "react";
import Navbar from "../src/components/Nav/Navbar";
import ImgHeaderNetwork from "../src/assets/images/application-athletid-reseau-social.webp";
import NetworkScreen01 from "../src/assets/images/application-athletid-profil.webp";
import NetworkScreen02 from "../src/assets/images/application-athletid-seance-sport.webp";
import NetworkScreen03 from "../src/assets/images/application-athletid-communaute.webp";
import SocialAppFeature from "../src/components/SocialApp/SocialAppFeature";
import FeatureSquare from "../src/components/FeatureSquare";
import Testimonial from "../src/components/Testimonial/Testimonial";
import DownloadApp from "../src/components/DownloadApp";
import Footer from "../src/components/Footer/Footer";
import HeaderV2 from "../src/components/HeaderSN";

const Network = () => {
  return (
    <>
      <Navbar apparition={"apparition-from-bottom-text"} playAnimation={true} />
      <HeaderV2
        title={"La communauté \n des sports addicts. "}
        subTitle={
          "Explorez l’univers Athletid, un réseau de partage dédié à l’entraînement  sportif et au bien-être. Découvre gratuitement des séances, des conseils et améliore ton expérience sportive."
        }
        buttonText={"Télécharger l'App"}
        img={ImgHeaderNetwork}
        visibilityWhiteButton={"hidden"}
        visibilityDownloadButton={"flex"}
      />
      <SocialAppFeature
        tagAppFeature1={"Sportif"}
        titleAppFeature1={"Inspire. Progresse.\n" + "Partage."}
        subtitleAppFeature1={
          "Tiens régulièrement ton journal d’entraînement pour suivre ton évolution et motiver tes amis à atteindre leurs objectifs. Inspire-toi de ta communauté pour apprendre chaque jour de nouveaux exercices, séances et conseils qui vont changer ta vie de sportif. "
        }
        tagAppFeature2={"Professionnel"}
        titleAppFeature2={"Conseille. Rencontre. Vends."}
        subtitleAppFeature2={
          "Mets en avant ton expertise et accrois rapidement ta notoriété auprès de ton audience. Communique et propose tes services à un grand nombre d’acheteurs potentiels."
        }
        tagAppFeature3={"Entreprise"}
        titleAppFeature3={"Développe. Communique. Vends. "}
        subtitleAppFeature3={
          "Rejoignez l’univers dédié à l’entraînement et au bien-être pour être au plus près de votre publique. Un nouveau marché s’ouvre à vous pour acquérir de nouveaux clients.\n"
        }
      />
      <FeatureSquare
        titleFeatureSquare={"Un réseau social. \n Une émulation collective."}
        subTitleFeatureSquare={
          "Du Bodybuilding au Crossfit en passant par le Yoga ou le Running, retrouve chaque discipline de l’entraînement et du bien-être ainsi que de nombreuses thématiques de conseils."
        }
        titleSquare1={"Trouve \n ce dont tu as besoin !"}
        imgSquare1={NetworkScreen01}
        titleSquare2={"Découvre \n de nouveaux entraînements et conseils !"}
        imgSquare2={NetworkScreen02}
        titleSquare3={"Partage \n tes performances et objectifs !"}
        imgSquare3={NetworkScreen03}
      />
      <Testimonial
        titleTestimonial={"Ils ont rejoins notre \n version BETA"}
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
      <Footer />
    </>
  );
};

export default Network;
