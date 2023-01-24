import React from 'react';
import Navbar from "../src/components/Nav/Navbar";
import PrivacyContent from "../src/components/PrivacyPolicy/PrivacyContent";
import Footer from "../src/components/Footer/Footer";
import Head from "next/head";

const PolitiqueDeConfidentialite = () => {
    return (
        <>
            <Head>
                <title>Politique de confidentialité</title>
                <meta property="og:title" content="Politique de confidentialté" />
                <meta property="og:description" content="Libérez votre potentiel grâce aux apps mobiles ATHLETID" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://athletid.com/politique-de-confidentialite" />
                <meta property="og:image" content={'https://i.imgur.com/aHBOGFc.png'} />
                <meta property="og:image:secure_url" content="https://i.imgur.com/aHBOGFc.png"/>
                <meta property="og:image:width" content="800"/>
                <meta property="og:image:height" content="530"/>
            </Head>


            <div>
                <Navbar/>
                <PrivacyContent/>
                <Footer/>
            </div>

        </>


    );
};

export default PolitiqueDeConfidentialite;