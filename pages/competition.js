import React from 'react';
import Navbar from "../src/components/Nav/Navbar";
import CompetitionFeature from "../src/components/Competition/CompetitionFeature";
import FeatureSquare from "../src/components/FeatureSquare";
import NetworkScreen01 from "../src/assets/images/application-athletid-profil.webp";
import NetworkScreen02 from "../src/assets/images/application-athletid-seance-sport.webp";
import NetworkScreen03 from "../src/assets/images/application-athletid-communaute.webp";
import Footer from "../src/components/Footer/Footer";

const Competition = () => {
    return (
        <>
            <Navbar/>
            <CompetitionFeature/>
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
            <Footer/>



        </>
    );
};

export default Competition;